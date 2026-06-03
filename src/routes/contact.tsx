import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, Calendar, Clock, MapPin, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | WeThinkTech Global Limited" },
      { name: "description", content: "Talk to WeThinkTech about CCTV, solar energy, IoT, GPS tracking and tech consultancy. Call or WhatsApp 0916 243 9166." },
      { property: "og:title", content: "Contact WeThinkTech" },
      { property: "og:description", content: "Let's discuss your technology needs." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const cards = [
  { icon: Phone, title: "Call Us", value: "0916 243 9166", href: "tel:+2349162439166" },
  { icon: MessageCircle, title: "WhatsApp Us", value: "Chat instantly", href: "https://wa.me/2349162439166" },
  { icon: Mail, title: "Email Us", value: "info@wethinktech.com", href: "mailto:info@wethinktech.com" },
  { icon: Calendar, title: "Schedule Consultation", value: "Book a meeting", href: "#contact-form" },
];

function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Inquiry sent! We'll get back to you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's Discuss Your Technology Needs" subtitle="We're ready to help your business grow through innovative technology." />

      <section className="py-20 px-4">
        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl p-6 bg-white border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-accent text-accent-foreground flex items-center justify-center mb-4">
                <c.icon className="h-6 w-6" />
              </div>
              <div className="font-semibold">{c.title}</div>
              <div className="text-sm text-muted-foreground">{c.value}</div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="contact-form" className="py-16 px-4">
        <div className="container mx-auto grid lg:grid-cols-5 gap-10">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 rounded-3xl bg-white p-8 md:p-10 border border-border shadow-card"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Send an inquiry</h2>
            <p className="text-muted-foreground mb-8">Tell us about your project — we'll respond within one business day.</p>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" required />
              <Field label="Company Name" name="company" />
              <Field label="Email Address" name="email" type="email" required />
              <Field label="Phone Number" name="phone" type="tel" />
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-2">Service Interested In</label>
                <select name="service" required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
                  <option value="">Select a service</option>
                  <option>CCTV & Smart Surveillance</option>
                  <option>Renewable Energy</option>
                  <option>IoT Device Management</option>
                  <option>Tech Consultancy & Advisory</option>
                  <option>GPS Tracking & Asset Management</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea name="message" rows={5} required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" placeholder="How can we help?" />
              </div>
            </div>

            <button type="submit" disabled={loading} className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-hero text-white font-semibold hover:scale-[1.02] transition-transform disabled:opacity-60">
              <Send className="h-4 w-4" /> {loading ? "Sending..." : "Send Inquiry"}
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="rounded-3xl bg-gradient-hero text-white p-8 shadow-elegant">
              <h3 className="text-xl font-semibold mb-5">Get in touch directly</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><Phone className="h-5 w-5 mt-0.5" /><div><div className="text-sm text-white/70">Phone</div><a href="tel:+2349162439166" className="font-medium">0916 243 9166</a></div></li>
                <li className="flex items-start gap-3"><MessageCircle className="h-5 w-5 mt-0.5" /><div><div className="text-sm text-white/70">WhatsApp</div><a href="https://wa.me/2349162439166" className="font-medium">0916 243 9166</a></div></li>
                <li className="flex items-start gap-3"><Clock className="h-5 w-5 mt-0.5" /><div><div className="text-sm text-white/70">Business Hours</div><div className="font-medium">Mon – Fri · 8:00 AM – 5:00 PM</div></div></li>
                <li className="flex items-start gap-3"><MapPin className="h-5 w-5 mt-0.5" /><div><div className="text-sm text-white/70">Location</div><div className="font-medium">Nigeria</div></div></li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden border border-border shadow-card h-64">
              <iframe
                title="WeThinkTech location"
                src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}{required && <span className="text-destructive"> *</span>}</label>
      <input name={name} type={type} required={required} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
    </div>
  );
}
