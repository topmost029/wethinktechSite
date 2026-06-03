import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Shield, HeartHandshake, Star, Users, Globe2, Headphones, Briefcase, Rocket } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactCTA } from "@/components/ContactCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | WeThinkTech Global Limited" },
      { name: "description", content: "Learn how WeThinkTech empowers organizations with reliable cloud-based technology solutions, global partnerships and local expertise across Africa." },
      { property: "og:title", content: "About WeThinkTech" },
      { property: "og:description", content: "Empowering organizations through innovative technology solutions." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Sparkles, title: "Innovation", desc: "We embrace emerging technology to solve real business problems." },
  { icon: Shield, title: "Reliability", desc: "Every deployment is engineered for uptime and resilience." },
  { icon: HeartHandshake, title: "Integrity", desc: "Honest pricing, transparent reporting, long-term partnerships." },
  { icon: Star, title: "Excellence", desc: "Premium standards across hardware, software and service." },
  { icon: Users, title: "Customer Success", desc: "Your outcomes define our scorecard." },
];

const standouts = [
  { icon: Globe2, title: "Global Partnerships", desc: "Direct OEM relationships with world-class manufacturers." },
  { icon: Headphones, title: "Dedicated Support", desc: "Local engineers ready to respond when it matters." },
  { icon: Briefcase, title: "Industry Experience", desc: "Proven track record across multiple verticals." },
  { icon: Rocket, title: "Future-Ready Solutions", desc: "Cloud-native architecture designed to scale." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="About WeThinkTech" subtitle="Empowering organizations through innovative technology solutions." />

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl prose-lg">
          <SectionHeading eyebrow="Who We Are" title="A technology partner you can trust" />
          <div className="text-lg text-muted-foreground leading-relaxed space-y-5">
            <p>
              WeThinkTech Global Limited is a cloud-based device management company built to bring world-class
              enterprise technology to organizations across Africa. We partner with leading global OEMs and
              combine premium hardware with intelligent cloud platforms and dedicated local support.
            </p>
            <p>
              Our work spans smart surveillance, renewable energy, IoT, GPS tracking and technology advisory.
              We design solutions that improve security, energy efficiency, asset visibility and operational
              performance — so our clients can focus on growing their business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-soft">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          {[
            { title: "Our Mission", body: "To empower businesses and organizations with reliable technology solutions that improve security, efficiency, and growth." },
            { title: "Our Vision", body: "To become Africa's leading provider of cloud-based technology and smart infrastructure solutions." },
          ].map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-3xl bg-white p-10 shadow-card border border-border">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-secondary)]">{b.title}</span>
              <p className="text-2xl font-semibold text-foreground mt-4 leading-snug">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto">
          <SectionHeading eyebrow="Our Values" title="What we stand for" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl bg-white p-6 border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all text-center">
                <div className="mx-auto h-14 w-14 rounded-xl bg-gradient-accent flex items-center justify-center text-accent-foreground mb-4">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-soft">
        <div className="container mx-auto">
          <SectionHeading eyebrow="Why We Stand Out" title="The WeThinkTech advantage" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standouts.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl bg-white p-7 border border-border shadow-card">
                <div className="h-12 w-12 rounded-lg bg-gradient-hero flex items-center justify-center text-white mb-4">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
