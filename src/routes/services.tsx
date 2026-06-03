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
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-border shadow-card hover:shadow-elegant transition-all p-8 md:p-10 flex flex-col"
                >
                  <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-accent opacity-10 blur-3xl group-hover:opacity-25 transition" />
                  <div className="relative flex items-start gap-5 mb-6">
                    <div className="h-16 w-16 shrink-0 rounded-2xl bg-gradient-hero text-white flex items-center justify-center shadow-glow">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                  <ul className="relative grid grid-cols-2 gap-3 mt-2 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check className="h-4 w-4 text-[var(--brand-accent)]" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="relative mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
                  >
                    Explore {s.shortTitle} <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl bg-gradient-hero text-white px-8 py-16 md:p-20 text-center overflow-hidden shadow-elegant">
            <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 30%, #00C853 0%, transparent 50%), radial-gradient(circle at 70% 70%, #00AEEF 0%, transparent 50%)" }} />
            <div className="relative">
              <SectionHeading center title={<span className="text-white">Need a Customized Solution?</span>} subtitle={<span className="text-white/85">Our experts design tailored deployments that fit your operations, budget and timeline.</span>} />
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-semibold hover:scale-105 transition-transform shadow-glow">
                Speak With Our Experts <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
