import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
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
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0">
          <img src={s.image} alt={s.title} className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/80 to-primary" />
        </div>
        <div className="container relative mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6">
              <ArrowLeft className="h-4 w-4" /> All Services
            </Link>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="h-20 w-20 rounded-3xl glass flex items-center justify-center shrink-0">
                <Icon className="h-10 w-10 text-white" />
              </div>
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-widest uppercase mb-4">
                  {s.shortTitle}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{s.title}</h1>
                <p className="text-xl md:text-2xl text-white/85 max-w-3xl">{s.tagline}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border bg-white">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
          {s.stats.map((st) => (
            <div key={st.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">{st.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-secondary)] mb-3">{s.overviewSection.eyebrow}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{s.overviewSection.title}</h2>
            {s.overviewSection.subtitle && <p className="text-base text-muted-foreground mb-4">{s.overviewSection.subtitle}</p>}
            <p className="text-lg text-muted-foreground leading-relaxed">{s.overview}</p>
          </div>
          <div className="rounded-3xl p-8 bg-gradient-soft border border-border shadow-card">
            <h3 className="font-bold text-lg mb-4">Core Features</h3>
            <ul className="space-y-3">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-gradient-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </span>
                  <span className="text-foreground/85">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-4 bg-gradient-soft">
        <div className="container mx-auto">
          <SectionHeading eyebrow={s.capabilitiesSection.eyebrow} title={s.capabilitiesSection.title} subtitle={s.capabilitiesSection.subtitle} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {s.capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl p-6 bg-white border border-border shadow-card hover:shadow-elegant transition"
              >
                <h3 className="font-bold text-lg mb-2 text-foreground">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading eyebrow={s.processSection.eyebrow} title={s.processSection.title} subtitle={s.processSection.subtitle} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {s.process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative rounded-2xl p-6 bg-white border border-border shadow-card"
              >
                <span className="text-5xl font-bold text-gradient block mb-3">{p.step}</span>
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Industries */}
      <section className="py-20 px-4 bg-gradient-soft">
        <div className="container mx-auto grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl p-8 md:p-10 bg-white border border-border shadow-card">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)] mb-3">Benefits</span>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">{s.benefitsHeading}</h3>
            <ul className="space-y-4">
              {s.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-gradient-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </span>
                  <span className="text-foreground/85">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-8 md:p-10 bg-gradient-hero text-white shadow-elegant relative overflow-hidden">
            <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(circle at 80% 20%, #00C853 0%, transparent 50%)" }} />
            <div className="relative">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-white/80 mb-3">Industries</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">{s.industriesHeading}</h3>
              <div className="flex flex-wrap gap-2">
                {s.industries.map((i) => (
                  <span key={i} className="px-4 py-2 rounded-full glass text-sm font-medium">{i}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <SectionHeading eyebrow={s.faqsSection.eyebrow} title={s.faqsSection.title} subtitle={s.faqsSection.subtitle} />
          <div className="space-y-4">
            {s.faqs.map((f, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-2xl bg-white border border-border shadow-card p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-foreground">
                  {f.q}
                  <span className="ml-4 h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 px-4 bg-gradient-soft">
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
                  className="group rounded-2xl p-6 bg-white border border-border shadow-card hover:shadow-elegant transition"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-hero text-white flex items-center justify-center mb-4 shadow-glow">
                    <RIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition">{r.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{r.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </span>
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
