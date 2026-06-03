import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/services")({
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

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Technology Solutions That Drive Results" subtitle="End-to-end solutions across surveillance, energy, IoT, tracking and advisory." />

      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
                >
                  {/* Full-width image strip */}
                  <div className="relative h-56 overflow-hidden shrink-0">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Deep navy brand overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a6b3c]/70 via-[#1a6b3c]/30 to-[#f5c518]/20" />
                    {/* Icon + category */}
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="flex items-center gap-4">
                        <div className="h-14 w-14 rounded-2xl bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center shadow-lg">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <div className="text-white/75 text-xs font-semibold uppercase tracking-widest mb-1">{s.shortTitle}</div>
                          <h3 className="text-2xl font-bold text-white">{s.title}</h3>
                        </div>
                      </div>
                    </div>
                    {/* Green accent corner badge */}
                    <div className="absolute top-4 right-4 h-2.5 w-2.5 rounded-full bg-[var(--brand-accent)] shadow-glow-green" />
                  </div>

                  {/* Card body */}
                  <div className="p-8 flex flex-col flex-1">
                    <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                    <ul className="grid grid-cols-2 gap-2.5 mb-7">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                          <span className="h-5 w-5 rounded-full bg-gradient-accent flex items-center justify-center shrink-0 shadow-glow-green">
                            <Check className="h-3 w-3 text-white" />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-hero text-white text-sm font-bold shadow-glow hover:scale-105 transition-all self-start"
                    >
                      Explore {s.shortTitle} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Bottom brand line */}
                  <div className="h-1 bg-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl bg-gradient-hero text-white px-8 py-16 md:p-20 text-center overflow-hidden shadow-elegant">
            <div className="absolute inset-0 opacity-35" style={{ background: "radial-gradient(circle at 30% 30%, #00C853 0%, transparent 45%), radial-gradient(circle at 70% 70%, #f5c518 0%, transparent 50%)" }} />
            <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(circle at 80% 10%, rgba(255,255,255,0.15) 0%, transparent 40%)" }} />
            <div className="relative">
              <SectionHeading center title={<span className="text-white">Need a Customized Solution?</span>} subtitle={<span className="text-white/85">Our experts design tailored deployments that fit your operations, budget and timeline.</span>} />
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[var(--brand-primary)] font-bold hover:scale-105 transition-transform shadow-glow">
                Speak With Our Experts <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
