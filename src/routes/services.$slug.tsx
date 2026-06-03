import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check, ArrowLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
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

function ServiceDetail() {
  const { service: s } = Route.useLoaderData() as { service: Service };
  const Icon = s.icon;
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      {/* Hero — full-bleed photo with strong brand overlay */}
      <section className="relative min-h-[580px] pt-28 pb-24 flex items-end overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
          {/* Two-layer brand overlay: navy base + cyan accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d4a28]/92 via-[#1a6b3c]/80 to-[#0d4a28]/60" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(0,174,239,0.30) 0%, transparent 55%)" }} />
          {/* Bottom fade to white */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container relative mx-auto px-4 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-8">
              <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1">
                <ArrowLeft className="h-3.5 w-3.5" /> All Services
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/85">{s.shortTitle}</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end gap-10 max-w-5xl">
              {/* Icon */}
              <div className="h-24 w-24 rounded-3xl flex items-center justify-center shrink-0 shadow-elegant border border-white/20" style={{ background: "linear-gradient(135deg, #00C853, #f5c518)" }}>
                <Icon className="h-12 w-12 text-white" />
              </div>
              <div className="flex-1">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[var(--brand-secondary)] text-xs font-bold tracking-widest uppercase mb-4">
                  {s.shortTitle}
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-[1.05]">{s.title}</h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed">{s.tagline}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip — brand navy background */}
      <section className="bg-[#1a6b3c] text-white">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4">
          {s.stats.map((st, i) => (
            <div key={st.label} className={`text-center py-8 px-4 ${i < s.stats.length - 1 ? "border-r border-white/10" : ""}`}>
              <div className="text-3xl md:text-4xl font-bold text-[var(--brand-secondary)] mb-1">{st.value}</div>
              <div className="text-xs text-white/65 uppercase tracking-wider">{st.label}</div>
            </div>
          ))}
        </div>
        <div className="h-1 bg-gradient-accent" />
      </section>

      {/* Overview — text + image side-by-side */}
      <section className="py-24 px-4">
        <div className="container mx-auto grid lg:grid-cols-5 gap-14 items-center">
          <div className="lg:col-span-3">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-secondary)] mb-3">{s.overviewSection.eyebrow}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">{s.overviewSection.title}</h2>
            {s.overviewSection.subtitle && <p className="text-base text-[var(--brand-primary)] font-medium mb-4">{s.overviewSection.subtitle}</p>}
            <p className="text-lg text-muted-foreground leading-relaxed">{s.overview}</p>
          </div>
          <div className="lg:col-span-2">
            {/* Feature card with image accent */}
            <div className="rounded-3xl overflow-hidden border border-border shadow-elegant">
              {/* Mini image strip */}
              <div className="relative h-36">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a6b3c]/60 to-[#1a6b3c]/85" />
                <div className="absolute bottom-4 left-5 text-white text-sm font-bold uppercase tracking-widest opacity-90">Core Features</div>
              </div>
              <div className="p-7 bg-white">
                <ul className="space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="h-6 w-6 rounded-full bg-gradient-accent flex items-center justify-center shrink-0 mt-0.5 shadow-glow-green">
                        <Check className="h-3.5 w-3.5 text-white" />
                      </span>
                      <span className="text-foreground/85 font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-4 bg-gradient-soft relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-hero" />
        <div className="container mx-auto">
          <SectionHeading eyebrow={s.capabilitiesSection.eyebrow} title={s.capabilitiesSection.title} subtitle={s.capabilitiesSection.subtitle} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {s.capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group rounded-2xl p-7 bg-white border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                {/* Numbered indicator */}
                <div className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-[#1a6b3c] text-white text-sm font-bold mb-4 group-hover:bg-gradient-hero transition-all">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--brand-primary)] transition-colors">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <SectionHeading eyebrow={s.processSection.eyebrow} title={s.processSection.title} subtitle={s.processSection.subtitle} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {s.process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative rounded-2xl p-7 bg-white border border-border shadow-card group hover:border-[#1a6b3c]/30 transition-colors"
              >
                {/* Connector line (except last) */}
                {i < s.process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-6 h-0.5 bg-gradient-accent z-10 -translate-y-0.5" />
                )}
                <span className="text-5xl font-bold text-gradient block mb-3 leading-none">{p.step}</span>
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Industries — image mosaic layout */}
      <section className="py-24 px-4 bg-gradient-soft relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-accent" />
        <div className="container mx-auto grid lg:grid-cols-2 gap-8">
          {/* Benefits */}
          <div className="rounded-3xl overflow-hidden border border-border shadow-card bg-white">
            <div className="relative h-40">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a6b3c]/80 to-[#f5c518]/60" />
              <div className="absolute inset-0 flex items-center px-8">
                <div>
                  <span className="text-[var(--brand-accent)] text-xs font-bold uppercase tracking-widest">Benefits</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{s.benefitsHeading}</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-gradient-accent flex items-center justify-center shrink-0 mt-0.5 shadow-glow-green">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </span>
                    <span className="text-foreground/85">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Industries */}
          <div className="rounded-3xl overflow-hidden shadow-elegant relative">
            <img src={s.image} alt={`${s.title} industries`} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d4a28]/85 via-[#1a6b3c]/90 to-[#1a6b3c]/95" />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(0,200,83,0.25) 0%, transparent 50%)" }} />
            <div className="relative p-8 md:p-10 h-full flex flex-col">
              <span className="text-[var(--brand-secondary)] text-xs font-bold uppercase tracking-widest mb-2">Industries Served</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">{s.industriesHeading}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {s.industries.map((ind) => (
                  <span key={ind} className="px-4 py-2.5 rounded-full glass text-white text-sm font-medium border-white/20">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <SectionHeading eyebrow={s.faqsSection.eyebrow} title={s.faqsSection.title} subtitle={s.faqsSection.subtitle} />
          <div className="space-y-3">
            {s.faqs.map((f, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-2xl bg-white border border-border shadow-card p-6 [&_summary::-webkit-details-marker]:hidden open:border-[#1a6b3c]/30 open:shadow-card-hover transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-foreground">
                  {f.q}
                  <span className="ml-4 h-8 w-8 rounded-full bg-[#1a6b3c]/08 text-[var(--brand-primary)] flex items-center justify-center group-open:rotate-45 group-open:bg-gradient-accent group-open:text-white transition-all text-lg font-bold shrink-0">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Related services — image cards */}
      <section className="py-20 px-4 bg-gradient-soft relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-hero" />
        <div className="container mx-auto">
          <SectionHeading eyebrow="Explore More" title="Related services" />
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => {
              const RIcon = r.icon;
              return (
                <Link
                  key={r.slug}
                  to="/services/$slug"
                  params={{ slug: r.slug }}
                  className="group rounded-2xl overflow-hidden bg-white border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1a6b3c]/55 via-[#1a6b3c]/30 to-transparent" />
                    <div className="absolute top-4 left-4 h-10 w-10 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow-green">
                      <RIcon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--brand-primary)] transition-colors">{r.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{r.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-[var(--brand-primary)]">
                      Learn more <ArrowRight className="h-4 w-4 text-[var(--brand-accent)] group-hover:translate-x-1 transition" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
