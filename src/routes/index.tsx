import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Globe2, Headphones, Cloud, Award, Layers, BadgeDollarSign,
  ArrowRight,
} from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { SectionHeading } from "@/components/SectionHeading";
import { Testimonials } from "@/components/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WeThinkTech | Global Technology, Local Delivery" },
      { name: "description", content: "Cloud-based device management, smart CCTV, solar energy, IoT and GPS tracking solutions delivered by WeThinkTech with global partnerships and local support." },
      { property: "og:title", content: "WeThinkTech | Global Technology, Local Delivery" },
      { property: "og:description", content: "Enterprise technology solutions with reliable local support." },
      { property: "og:image", content: "/og-home.jpg" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const features = [
  { icon: Globe2, title: "Global OEM Partnerships", desc: "Direct relationships with world-leading technology manufacturers." },
  { icon: Headphones, title: "Local Technical Support", desc: "Responsive on-the-ground engineers across Nigeria." },
  { icon: Cloud, title: "Cloud-Based Solutions", desc: "Manage and monitor every device from a single secure platform." },
  { icon: Award, title: "Certified Experts", desc: "Trained, certified specialists with deep industry experience." },
  { icon: Layers, title: "Scalable Deployments", desc: "From a single site to multi-region enterprise rollouts." },
  { icon: BadgeDollarSign, title: "Competitive Pricing", desc: "Premium technology with predictable, transparent costs." },
];

const stats = [
  { k: "50+", v: "Enterprise Clients" },
  { k: "10+", v: "Global OEM Partners" },
  { k: "24/7", v: "Cloud Monitoring" },
  { k: "99.9%", v: "Service Uptime" },
];

function Home() {
  return (
    <>
      <HeroSlider />

      {/* Company Overview */}
      <section className="py-24 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-secondary)]">
              About WeThinkTech
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
              Enterprise technology,{" "}
              <span className="text-gradient">delivered locally.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              WETHINKTECH is a cloud-based device management company partnered with leading global OEMs.
              We help organizations across Africa improve security, energy efficiency, asset visibility
              and operational performance through innovative technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From smart surveillance to renewable energy and IoT, we combine world-class hardware with
              cloud platforms and dedicated local support — so your operations stay reliable, scalable
              and future-ready.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Discover our story <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((s) => (
              <div key={s.v} className="rounded-2xl bg-gradient-soft border border-border p-7 shadow-card">
                <div className="text-4xl font-bold text-gradient mb-1">{s.k}</div>
                <div className="text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-gradient-soft">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="Why Choose WeThinkTech"
            title="Built for performance & trust"
            subtitle="Six reasons leading organizations choose us as their long-term technology partner."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-2xl bg-white p-8 border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="h-14 w-14 rounded-xl bg-gradient-hero flex items-center justify-center text-white mb-5 shadow-glow">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview — deep linked to each service detail page */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="Our Services"
            title="Solutions across the technology stack"
            subtitle="Explore the services that power smart organizations."
          />
          {/* Centered flex layout handles any number of cards without orphan stretching */}
          <div className="flex flex-wrap justify-center gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block h-full rounded-2xl p-8 bg-white border border-border shadow-card hover:shadow-elegant transition-all relative overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-accent opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
                  <div className="h-14 w-14 rounded-xl bg-gradient-accent flex items-center justify-center text-accent-foreground mb-5">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                    Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View all services CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border bg-white text-primary font-semibold hover:shadow-card hover:-translate-y-0.5 transition-all"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactCTA />
    </>
  );
}
