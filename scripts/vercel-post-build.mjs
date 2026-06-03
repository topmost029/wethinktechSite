#!/usr/bin/env node
/**
 * vercel-post-build.mjs
 *
 * @lovable.dev/vite-tanstack-config@2.1.1 hardcodes Nitro output dirs:
 *   dist/           (Nitro root — config.json written here)
 *   dist/client/    (static assets)
 *   dist/server/    (SSR function — .vc-config.json written here)
 *
 * Vercel Build Output API v3 expects:
 *   .vercel/output/config.json
 *   .vercel/output/static/
 *   .vercel/output/functions/index.func/
 *
 * This script moves dist/ into .vercel/output/ after `vite build`.
 */

import { cpSync, mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root   = process.cwd();
const dist   = join(root, "dist");
const out    = join(root, ".vercel", "output");
const FUNC   = "index";

console.log("[post-build] dist/ → .vercel/output/");

// 1. Static: dist/client → .vercel/output/static
const staticOut = join(out, "static");
mkdirSync(staticOut, { recursive: true });
cpSync(join(dist, "client"), staticOut, { recursive: true });
console.log("[post-build] ✓ static");

// 2. Function: dist/server → .vercel/output/functions/index.func
const funcOut = join(out, "functions", `${FUNC}.func`);
mkdirSync(funcOut, { recursive: true });
cpSync(join(dist, "server"), funcOut, { recursive: true });
console.log("[post-build] ✓ function");

// 3. config.json from Nitro, or a minimal fallback
const nitroCfg = join(dist, "config.json");
const vercelCfg = join(out, "config.json");

let cfg;
if (existsSync(nitroCfg)) {
  cfg = JSON.parse(readFileSync(nitroCfg, "utf8"));
  console.log("[post-build] ✓ config.json (from Nitro)");
} else {
  cfg = {
    version: 3,
    routes: [
      { src: "/assets/(.*)", headers: { "cache-control": "public, max-age=31536000, immutable" }, continue: true },
      { handle: "filesystem" },
      { src: "/(.*)", dest: `/${FUNC}` }
    ]
  };
  console.log("[post-build] ✓ config.json (fallback)");
}

// 4. Normalise function dest in routes: Nitro may write "/__server" or "/server"
if (Array.isArray(cfg.routes)) {
  cfg.routes = cfg.routes.map(r => {
    if (r.dest && /^\/?_*server$/.test(r.dest)) {
      return { ...r, dest: `/${FUNC}` };
    }
    return r;
  });
}

writeFileSync(vercelCfg, JSON.stringify(cfg, null, 2));
console.log(`[post-build] done → .vercel/output/ (function: ${FUNC})`);
