import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: ReactNode; subtitle?: ReactNode }) {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 20%, #00C853 0%, transparent 40%), radial-gradient(circle at 80% 60%, #00AEEF 0%, transparent 50%)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.4),transparent)]" />
      <div className="container relative mx-auto px-4 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {eyebrow && <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-widest uppercase mb-6">{eyebrow}</span>}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}
