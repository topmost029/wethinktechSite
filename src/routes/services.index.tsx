import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | CCTV, Solar, IoT, GPS Tracking | WeThinkTech" },
      { name: "description", content: "Smart CCTV surveillance, renewable energy, IoT device management, tech consultancy and GPS tracking solutions delivered by WeThinkTech." },
      { property: "og:title", content: "WeThinkTech Services" },
      { property: "og:description", content: "Technology solutions that drive results." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

/* Per-service accent colours so each card feels distinct */
const serviceAccents: Record<string, { from: string; to: string; tag: string }> = {
  "cctv-smart-surveillance":       { from: "#1a6b3c", to: "#0d4a28", tag: "Surveillance" },
  "renewable-energy":              { from: "#e8a000", to: "#f5c518", tag: "Energy" },
  "iot-device-management":         { from: "#2d8a4e", to: "#1a6b3c", tag: "IoT" },
  "tech-consultancy":              { from: "#0d4a28", to: "#1a6b3c", tag: "Advisory" },
  "gps-tracking-asset-management": { from: "#f5c518", to: "#e8a000", tag: "Tracking" },
};

function Services() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-32 overflow-hidden text-white" style={{ background: "linear-gradient(140deg, #0d4a28 0%, #1a6b3c 55%, #2d8a4e 100%)" }}>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Gold blob */}
        <div className="absolute -top-24 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #f5c518, transparent 70%)" }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />

        <div className="container relative mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-[#f5c518] text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f5c518] animate-pulse" />
              What We Do
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.95] tracking-tight max-w-4xl">
              Technology<br />
              <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)", color: "transparent" }}>Solutions</span><br />
              That Deliver.
            </h1>
            <p className="text-lg md:text-xl text-white/75 max-w-xl leading-relaxed">
              Five specialist practices — built for African infrastructure realities, backed by global-grade technology.
            </p>
          </motion.div>

          {/* Service quick-links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-3 mt-12"
          >
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition-all backdrop-blur-sm text-white/85 text-sm font-medium hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {s.shortTitle}
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Service Cards ─────────────────────────────────────── */}
      <section className="py-28 px-4 bg-background">
        <div className="container mx-auto space-y-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            const accent = serviceAccents[s.slug] ?? { from: "#1a6b3c", to: "#0d4a28", tag: s.shortTitle };
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="group relative rounded-3xl overflow-hidden border border-border bg-white shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                <div className={`grid lg:grid-cols-2 ${isEven ? "" : "lg:[&>*:first-child]:order-last"}`}>

                  {/* Image pane */}
                  <div className="relative h-72 lg:h-auto min-h-[320px] overflow-hidden">
                    <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${accent.from}cc 0%, ${accent.to}99 100%)` }} />

                    {/* Stats cluster */}
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="grid grid-cols-2 gap-3 w-full">
                        {s.stats.slice(0, 2).map((st) => (
                          <div key={st.label} className="rounded-2xl bg-white/12 border border-white/20 backdrop-blur-sm p-4 text-white">
                            <div className="text-2xl font-black text-[#f5c518]">{st.value}</div>
                            <div className="text-xs text-white/70 uppercase tracking-wider mt-0.5">{st.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Number badge */}
                    <div className="absolute top-6 left-6 h-11 w-11 rounded-2xl bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center text-white font-black text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content pane */}
                  <div className="p-10 lg:p-14 flex flex-col">
                    {/* Tag + icon */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-12 w-12 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest" style={{ background: `${accent.from}18`, color: accent.from }}>
                        {accent.tag}
                      </span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-black mb-2 leading-tight group-hover:text-[var(--brand-primary)] transition-colors">{s.title}</h2>
                    <p className="text-[var(--brand-primary)] font-semibold text-sm mb-4 italic">{s.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed mb-8">{s.desc}</p>

                    {/* Features grid */}
                    <ul className="grid grid-cols-2 gap-2.5 mb-10">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: accent.from }} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex items-center gap-4">
                      <Link to="/services/$slug" params={{ slug: s.slug }}
                        className="group/btn inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm hover:scale-105 active:scale-95 transition-transform shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
                      >
                        Explore Service
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                      <span className="text-xs text-muted-foreground">{s.industries.length} industries served</span>
                    </div>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="h-1 w-0 group-hover:w-full transition-all duration-700 ease-out" style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }} />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden text-white px-8 py-20 md:p-24 text-center shadow-elegant"
            style={{ background: "linear-gradient(140deg, #0d4a28 0%, #1a6b3c 60%, #2d8a4e 100%)" }}
          >
            <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(circle at 20% 50%, #f5c518 0%, transparent 40%), radial-gradient(circle at 80% 50%, #2d8a4e 0%, transparent 50%)" }} />
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="relative">
              <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-[#f5c518] text-xs font-bold tracking-widest uppercase mb-6">Custom Solutions</span>
              <h2 className="text-4xl md:text-6xl font-black mb-6 max-w-3xl mx-auto leading-tight">Need a Bespoke Deployment?</h2>
              <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">Our engineers design multi-service solutions that cut across surveillance, energy, IoT, and tracking into one unified platform.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white font-bold text-[var(--brand-primary)] hover:scale-105 transition-transform shadow-glow text-sm">
                Speak With Our Experts <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
