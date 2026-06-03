import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Globe2, Headphones, Cloud, Award, Layers, BadgeDollarSign,
  ArrowRight, ShieldCheck, Zap,
} from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { SectionHeading } from "@/components/SectionHeading";
import { Testimonials } from "@/components/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";
import { services } from "@/lib/services-data";
import heroTech from "@/assets/hero-tech.jpg";

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

const trustBadges = [
  { icon: ShieldCheck, label: "ISO-aligned security" },
  { icon: Zap, label: "99.9% uptime SLA" },
  { icon: Award, label: "Certified engineers" },
];

function Home() {
  return (
    <>
      <HeroSlider />

      {/* Company Overview — split with real image */}
      <section className="py-28 px-4 overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] bg-[#f5c518]/10 text-[var(--brand-secondary)] border border-[#f5c518]/20 mb-5">
              About WeThinkTech
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 leading-[1.1]">
              Enterprise technology,{" "}
              <span className="text-gradient">delivered locally.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              WETHINKTECH is a cloud-based device management company partnered with leading global OEMs.
              We help organizations across Africa improve security, energy efficiency, asset visibility
              and operational performance through innovative technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From smart surveillance to renewable energy and IoT, we combine world-class hardware with
              cloud platforms and dedicated local support — so your operations stay reliable, scalable
              and future-ready.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {trustBadges.map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a6b3c]/06 border border-[#1a6b3c]/12 text-sm font-medium text-foreground/80">
                  <b.icon className="h-4 w-4 text-[var(--brand-accent)]" />
                  {b.label}
                </span>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-hero text-white font-semibold shadow-glow hover:scale-105 hover:shadow-elegant transition-all"
            >
              Discover our story <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/3]">
              <img src={heroTech} alt="WeThinkTech technology infrastructure" className="w-full h-full object-cover" />
              {/* Brand overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1a6b3c]/50 via-transparent to-[#f5c518]/20" />
              {/* Floating stats card */}
              <div className="absolute bottom-5 left-5 right-5 glass-card rounded-2xl p-5 flex items-center justify-between">
                {stats.map((s, i) => (
                  <div key={s.v} className={`text-center ${i < stats.length - 1 ? "border-r border-border pr-4" : ""} flex-1`}>
                    <div className="text-2xl font-bold text-gradient">{s.k}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative brand accent blob */}
            <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-gradient-accent opacity-15 blur-3xl pointer-events-none" />
            <div className="absolute -top-8 -left-8 h-36 w-36 rounded-full bg-[#1a6b3c] opacity-10 blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-gradient-soft relative overflow-hidden">
        {/* Brand accent stripe at top */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-hero" />
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
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative rounded-2xl bg-white p-8 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Hover brand color sweep */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-hero opacity-0 group-hover:opacity-[0.04] transition-opacity" />
                <div className="h-14 w-14 rounded-2xl bg-gradient-hero flex items-center justify-center text-white mb-5 shadow-glow group-hover:scale-110 transition-transform">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--brand-primary)] transition-colors">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview — image-backed cards */}
      <section className="py-28 px-4">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="Our Services"
            title="Solutions across the technology stack"
            subtitle="Explore the services that power smart organizations."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block h-full rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-300 bg-white"
                >
                  {/* Service image banner */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Brand gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a6b3c]/80 via-[#1a6b3c]/30 to-transparent" />
                    {/* Icon badge */}
                    <div className="absolute bottom-4 left-4 h-12 w-12 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow-green">
                      <s.icon className="h-6 w-6 text-white" />
                    </div>
                    {/* Short title pill */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-white text-xs font-semibold tracking-wide">
                      {s.shortTitle}
                    </div>
                  </div>
                  {/* Card body */}
                  <div className="p-7">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--brand-primary)] transition-colors">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {s.features.slice(0, 3).map((f) => (
                        <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-[#1a6b3c]/06 text-[var(--brand-primary)] border border-[#1a6b3c]/12 font-medium">
                          {f}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-primary)] group-hover:gap-3 transition-all">
                      Explore service <ArrowRight className="h-4 w-4 text-[var(--brand-accent)]" />
                    </span>
                  </div>
                  {/* Bottom accent */}
                  <div className="h-1 bg-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-hero text-white font-semibold shadow-glow hover:scale-105 hover:shadow-elegant transition-all"
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
