# Vercel Deployment Guide

## Prerequisites
- [Vercel account](https://vercel.com)
- [Bun](https://bun.sh) installed locally (optional, for local testing)

## Deploy via Vercel Dashboard (recommended)

1. Push this project to a GitHub / GitLab / Bitbucket repo
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Vercel auto-detects the config from `vercel.json`:
   - **Build command:** `bun run build`
   - **Output directory:** `.vercel/output`
   - **Install command:** `bun install`
4. Click **Deploy** — no environment variables required for the base site

## Deploy via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## How it works

This is a **TanStack Start** (SSR) app. The Nitro build plugin compiles it
to Vercel's output format (`.vercel/output/`) which includes:

- Static assets → `functions/server.func/` (Edge/Node handler)
- Client JS/CSS → `static/`
- Vercel routing config → `config.json`

The `vite.config.ts` passes `nitro: { preset: "vercel" }` to the Lovable
vite wrapper, which activates the Vercel output target during `bun run build`.

## Environment variables

| Variable | Required | Notes |
|----------|----------|-------|
| _(none)_ | — | Add `VITE_` prefixed vars here for public config (analytics IDs, etc.) |

## Recommended next steps

- Add `VITE_GA_ID` for Google Analytics and wire it into `__root.tsx`
- Connect a real form backend (Formspree / Resend) and set its API key here
- Set `og:image` — place a `1200×630px` image at `public/og-home.jpg`
