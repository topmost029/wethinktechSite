import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: ReactNode; subtitle?: ReactNode }) {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden text-white" style={{ background: "var(--gradient-hero-dark)" }}>
      {/* Radial accent blobs */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 15% 30%, rgba(0,200,83,0.22) 0%, transparent 45%), radial-gradient(ellipse at 85% 60%, rgba(0,174,239,0.30) 0%, transparent 50%)" }} />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-background to-transparent" />
      <div className="container relative mx-auto px-4 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/08 text-[var(--brand-secondary)] text-xs font-bold tracking-[0.18em] uppercase mb-7 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-accent)]" />
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl mx-auto leading-[1.05]">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}
