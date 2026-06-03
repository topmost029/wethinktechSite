import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, ArrowLeft, ChevronRight, Quote, Zap, Shield, TrendingUp, Users } from "lucide-react";
import { useRef, useState } from "react";
import { ContactCTA } from "@/components/ContactCTA";
import { services, getServiceBySlug, type Service } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service | WeThinkTech" }] };
    return {
      meta: [
        { title: `${s.seoTitle} | WeThinkTech` },
        { name: "description", content: s.seoDescription },
        { property: "og:title", content: s.seoTitle },
        { property: "og:description", content: s.seoDescription },
        { property: "og:image", content: s.image },
        { property: "og:url", content: `/services/${s.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: s.image },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold mb-3">Service not found</h1>
      <p className="text-muted-foreground mb-6">The service you're looking for doesn't exist.</p>
      <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-hero text-white font-semibold">
        <ArrowLeft className="h-4 w-4" /> Back to Services
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-2xl font-bold mb-3">Something went wrong</h1>
      <p className="text-muted-foreground mb-6">{error.message}</p>
      <button onClick={reset} className="px-6 py-3 rounded-full bg-gradient-hero text-white font-semibold">Try again</button>
    </div>
  ),
  component: ServiceDetail,
});

/* ── Per-service theme config ─────────────────────────── */
const themes: Record<string, { primary: string; dark: string; accent: string; light: string }> = {
  "cctv-smart-surveillance":       { primary: "#1a6b3c", dark: "#0d4a28", accent: "#f5c518", light: "#e8f5ee" },
  "renewable-energy":              { primary: "#e8a000", dark: "#b37800", accent: "#1a6b3c", light: "#fef9e7" },
  "iot-device-management":         { primary: "#2d8a4e", dark: "#1a6b3c", accent: "#f5c518", light: "#eaf4ef" },
  "tech-consultancy":              { primary: "#0d4a28", dark: "#071f12", accent: "#f5c518", light: "#e6efe9" },
  "gps-tracking-asset-management": { primary: "#1a6b3c", dark: "#0d4a28", accent: "#f5c518", light: "#e8f5ee" },
};

const whyIcons = [Shield, Zap, TrendingUp, Users];

function ServiceDetail() {
  const { service: s } = Route.useLoaderData() as { service: Service };
  const Icon = s.icon;
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);
  const theme = themes[s.slug] ?? { primary: "#1a6b3c", dark: "#0d4a28", accent: "#f5c518", light: "#e8f5ee" };
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* ══ HERO — parallax full-bleed ══════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden">
        {/* Parallax photo */}
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img src={s.image} alt={s.title} className="w-full h-full object-cover scale-110" />
        </motion.div>

        {/* Layered overlays */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, ${theme.dark}f0 0%, ${theme.primary}cc 40%, transparent 80%)` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        {/* Diagonal accent stripe */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10"
          style={{ background: `linear-gradient(to bottom-left, ${theme.accent}, transparent)` }} />

        <div className="container relative mx-auto px-4 lg:px-8 pb-20 pt-40 w-full">
          {/* Breadcrumb */}
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-white/55 text-xs mb-12 uppercase tracking-widest font-medium">
            <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1.5">
              <ArrowLeft className="h-3.5 w-3.5" /> Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/80">{s.shortTitle}</span>
          </motion.nav>

          <div className="max-w-4xl">
            {/* Category pill */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold tracking-[0.2em] uppercase mb-7 backdrop-blur-sm"
                style={{ borderColor: `${theme.accent}60`, color: theme.accent, background: `${theme.accent}18` }}>
                <Icon className="h-3.5 w-3.5" />
                {s.shortTitle}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.92] tracking-tight mb-6"
            >
              {s.title.split("&").map((part, i, arr) => (
                <span key={i}>
                  {i === 0 ? part : (
                    <>
                      <span style={{ color: theme.accent }}>&</span>{part}
                    </>
                  )}
                </span>
              ))}
            </motion.h1>

            {/* Tagline */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-3xl font-light text-white/75 mb-10 italic"
            >
              "{s.tagline}"
            </motion.p>

            {/* CTA row */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform"
                style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})`, color: theme.dark === "#0d4a28" ? "white" : "white" }}>
                Request Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-white border border-white/25 hover:bg-white/10 transition-colors backdrop-blur-sm">
                All Services
              </Link>
            </motion.div>
          </div>

          {/* Stats row — bottom-anchored */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl">
            {s.stats.map((st) => (
              <div key={st.label} className="rounded-2xl bg-white/08 border border-white/15 backdrop-blur-sm p-5 text-white">
                <div className="text-2xl md:text-3xl font-black mb-1" style={{ color: theme.accent }}>{st.value}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">{st.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ OVERVIEW — editorial split ═════════════════════════════════════ */}
      <section className="py-32 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left — label + overview */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 max-w-[48px]" style={{ background: theme.primary }} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: theme.primary }}>
                  {s.overviewSection.eyebrow}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6 tracking-tight">
                {s.overviewSection.title}
              </h2>
              {s.overviewSection.subtitle && (
                <p className="text-lg font-semibold mb-6" style={{ color: theme.primary }}>{s.overviewSection.subtitle}</p>
              )}
              <p className="text-lg text-muted-foreground leading-[1.8]">{s.overview}</p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 mt-10">
                {s.features.map((f) => (
                  <span key={f} className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold"
                    style={{ background: theme.light, color: theme.dark }}>
                    <Check className="h-3.5 w-3.5" />
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — visual card stack */}
            <div className="lg:col-span-5 space-y-4">
              {/* Main image card */}
              <div className="relative rounded-3xl overflow-hidden h-56 shadow-elegant">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${theme.dark}e0, transparent 60%)` }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg">{s.tagline}</p>
                </div>
              </div>

              {/* Stats cards — remaining two */}
              <div className="grid grid-cols-2 gap-4">
                {s.stats.slice(2).map((st) => (
                  <div key={st.label} className="rounded-2xl p-6 border border-border" style={{ background: theme.light }}>
                    <div className="text-3xl font-black mb-1" style={{ color: theme.primary }}>{st.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{st.label}</div>
                  </div>
                ))}
              </div>

              {/* "Why WeThinkTech" micro-reasons */}
              <div className="rounded-3xl border border-border bg-white p-6 shadow-card">
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: theme.primary }}>Why WeThinkTech</p>
                <div className="grid grid-cols-2 gap-3">
                  {["Expert Installation", "24/7 Support", "Scalable Systems", "Local Expertise"].map((why, i) => {
                    const WIcon = whyIcons[i];
                    return (
                      <div key={why} className="flex items-center gap-2">
                        <WIcon className="h-4 w-4 shrink-0" style={{ color: theme.primary }} />
                        <span className="text-xs font-medium text-foreground/80">{why}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES — magazine mosaic ═════════════════════════════════ */}
      <section className="py-28 px-4 relative overflow-hidden" style={{ background: theme.dark }}>
        {/* Texture */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        {/* Gold accent blob */}
        <div className="absolute -right-32 top-0 w-96 h-96 rounded-full opacity-15 blur-3xl" style={{ background: theme.accent }} />

        <div className="container relative mx-auto">
          {/* Section heading */}
          <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] mb-3 block" style={{ color: theme.accent }}>
                {s.capabilitiesSection.eyebrow}
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-xl">
                {s.capabilitiesSection.title}
              </h2>
            </div>
            {s.capabilitiesSection.subtitle && (
              <p className="text-base text-white/55 max-w-xs leading-relaxed">{s.capabilitiesSection.subtitle}</p>
            )}
          </div>

          {/* Capability grid — alternating sizes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {s.capabilities.map((c, i) => {
              const isFeatured = i === 0;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className={`rounded-3xl p-8 border transition-all duration-300 hover:scale-[1.02] ${isFeatured ? "md:col-span-2 lg:col-span-1" : ""}`}
                  style={{
                    background: isFeatured ? `linear-gradient(135deg, ${theme.primary}, ${theme.dark})` : "rgba(255,255,255,0.05)",
                    borderColor: isFeatured ? `${theme.accent}40` : "rgba(255,255,255,0.1)",
                  }}
                >
                  {/* Number */}
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl text-sm font-black mb-6"
                    style={{ background: isFeatured ? `${theme.accent}30` : `${theme.primary}60`, color: isFeatured ? theme.accent : "white" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-black text-xl text-white mb-3">{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{c.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ PROCESS — horizontal timeline ══════════════════════════════════ */}
      <section className="py-28 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] mb-3 block" style={{ color: theme.primary }}>
              {s.processSection.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">{s.processSection.title}</h2>
            {s.processSection.subtitle && <p className="text-muted-foreground max-w-xl mx-auto">{s.processSection.subtitle}</p>}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 mx-24" style={{ background: `linear-gradient(90deg, ${theme.primary}, ${theme.accent})` }} />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {s.process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative text-center lg:text-left"
                >
                  {/* Step circle */}
                  <div className="relative mx-auto lg:mx-0 h-28 w-28 rounded-full flex flex-col items-center justify-center mb-8 shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.dark})` }}>
                    <span className="text-4xl font-black" style={{ color: theme.accent }}>{p.step}</span>
                    {/* Connector dot on the line */}
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full ring-2 ring-white"
                      style={{ background: theme.accent }} />
                  </div>
                  <h3 className="font-black text-xl mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ BENEFITS + INDUSTRIES — split dark/light ═══════════════════════ */}
      <section className="py-0 overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Benefits — dark side */}
          <div className="relative p-12 lg:p-16 xl:p-20" style={{ background: `linear-gradient(140deg, ${theme.dark}, ${theme.primary})` }}>
            {/* Pattern */}
            <div className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-4" style={{ color: theme.accent }}>Benefits</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-10 leading-tight">{s.benefitsHeading}</h2>
              <ul className="space-y-5">
                {s.benefits.map((b, i) => (
                  <motion.li key={b}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="flex items-start gap-4">
                    <div className="h-6 w-6 rounded-full shrink-0 mt-0.5 flex items-center justify-center"
                      style={{ background: `${theme.accent}30`, border: `1px solid ${theme.accent}60` }}>
                      <Check className="h-3.5 w-3.5" style={{ color: theme.accent }} />
                    </div>
                    <span className="text-white/85 leading-relaxed">{b}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Industries — image + chips */}
          <div className="relative min-h-[420px] overflow-hidden">
            <img src={s.image} alt={`${s.title} industries`} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${theme.dark}90, ${theme.dark}f5)` }} />
            <div className="relative h-full p-12 lg:p-16 xl:p-20 flex flex-col justify-end">
              <span className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: theme.accent }}>Industries Served</span>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-8">{s.industriesHeading}</h2>
              <div className="flex flex-wrap gap-2.5">
                {s.industries.map((ind) => (
                  <span key={ind} className="px-4 py-2 rounded-full text-sm font-semibold text-white border backdrop-blur-sm"
                    style={{ borderColor: `${theme.accent}40`, background: `${theme.accent}18` }}>
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQs — clean accordion ══════════════════════════════════════════ */}
      <section className="py-28 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Sticky heading */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-4" style={{ color: theme.primary }}>
                {s.faqsSection.eyebrow}
              </span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">{s.faqsSection.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">Can't find your answer? Our team is happy to help.</p>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white shadow-lg"
                style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.dark})` }}>
                Ask Us Directly <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Accordion */}
            <div className="lg:col-span-8 space-y-3">
              {s.faqs.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl border border-border bg-white shadow-card overflow-hidden transition-all duration-300"
                  style={{ borderColor: openFaq === i ? `${theme.primary}40` : undefined }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-7 text-left font-bold text-foreground hover:text-[var(--brand-primary)] transition-colors"
                  >
                    <span>{f.q}</span>
                    <span
                      className="ml-4 h-8 w-8 rounded-full flex items-center justify-center text-xl font-black shrink-0 transition-all duration-300"
                      style={{
                        background: openFaq === i ? `linear-gradient(135deg, ${theme.primary}, ${theme.dark})` : `${theme.primary}12`,
                        color: openFaq === i ? "white" : theme.primary,
                        transform: openFaq === i ? "rotate(45deg)" : "none",
                      }}
                    >+</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-7 pb-7">
                      <div className="h-px mb-6" style={{ background: `${theme.primary}20` }} />
                      <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ RELATED SERVICES ═══════════════════════════════════════════════ */}
      <section className="py-24 px-4 overflow-hidden" style={{ background: "var(--color-background)" }}>
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-2" style={{ color: theme.primary }}>Explore More</span>
              <h2 className="text-3xl md:text-4xl font-black">Related Services</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: theme.primary }}>
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r, i) => {
              const RIcon = r.icon;
              const rTheme = themes[r.slug] ?? { primary: "#1a6b3c", dark: "#0d4a28", accent: "#f5c518", light: "#e8f5ee" };
              return (
                <motion.div
                  key={r.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link to="/services/$slug" params={{ slug: r.slug }}
                    className="group block rounded-3xl overflow-hidden bg-white border border-border shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-400">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600" />
                      <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${rTheme.dark}e0, transparent 50%)` }} />
                      {/* Icon */}
                      <div className="absolute top-5 left-5 h-11 w-11 rounded-2xl flex items-center justify-center text-white shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${rTheme.primary}, ${rTheme.dark})` }}>
                        <RIcon className="h-5 w-5" />
                      </div>
                      {/* Bottom title overlay */}
                      <div className="absolute bottom-5 left-5 right-5">
                        <h3 className="text-white font-black text-lg leading-tight">{r.title}</h3>
                      </div>
                    </div>
                    {/* Card body */}
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed">{r.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors group-hover:gap-2.5"
                        style={{ color: rTheme.primary }}>
                        Learn more <ArrowRight className="h-4 w-4 transition-all group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
