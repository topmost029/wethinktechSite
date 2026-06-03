import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Mail, ArrowRight } from "lucide-react";
import { services } from "@/lib/services-data";
import logo from "@/assets/wethinktech-logo.png";

export function Footer() {
  return (
    <footer className="text-white relative overflow-hidden mt-0" style={{ background: "var(--gradient-navy)" }}>
      {/* Brand accent top border */}
      <div className="h-1 bg-gradient-accent" />
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(0,174,239,0.12) 0%, transparent 50%)" }} />

      <div className="container relative mx-auto px-4 lg:px-8 py-16 grid gap-12 md:grid-cols-12">
        {/* Brand col */}
        <div className="md:col-span-4">
          <div className="bg-white inline-block rounded-2xl px-4 py-3 mb-5 shadow-glow">
            <img src={logo} alt="WeThinkTech" className="h-10 w-auto" width={200} height={60} />
          </div>
          <p className="text-white/70 leading-relaxed mb-6 max-w-xs">
            Cloud-based device management and enterprise-grade technology solutions — backed by global OEM partnerships and trusted local support.
          </p>
          <a
            href="https://wa.me/2349162439166"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-accent text-white text-sm font-bold shadow-glow-green hover:scale-105 transition-transform"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>

        {/* Services */}
        <div className="md:col-span-3">
          <h4 className="font-bold text-sm uppercase tracking-[0.15em] text-[var(--brand-secondary)] mb-5">Services</h4>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-sm text-white/65 hover:text-white hover:pl-1 transition-all flex items-center gap-1.5 group"
                >
                  <ArrowRight className="h-3 w-3 text-[var(--brand-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div className="md:col-span-2">
          <h4 className="font-bold text-sm uppercase tracking-[0.15em] text-[var(--brand-secondary)] mb-5">Company</h4>
          <ul className="space-y-2.5">
            {[{ to: "/", label: "Home" }, { to: "/about", label: "About Us" }, { to: "/services", label: "All Services" }, { to: "/contact", label: "Contact" }].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-white/65 hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <h4 className="font-bold text-sm uppercase tracking-[0.15em] text-[var(--brand-secondary)] mb-5">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:+2349162439166" className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
                <span className="h-7 w-7 rounded-lg bg-white/08 border border-white/12 flex items-center justify-center shrink-0">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                0916 243 9166
              </a>
            </li>
            <li>
              <a href="mailto:info@wethinktech.com" className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
                <span className="h-7 w-7 rounded-lg bg-white/08 border border-white/12 flex items-center justify-center shrink-0">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                info@wethinktech.com
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/65">
              <span className="h-7 w-7 rounded-lg bg-white/08 border border-white/12 flex items-center justify-center shrink-0">
                <MapPin className="h-3.5 w-3.5" />
              </span>
              Nigeria
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/08">
        <div className="container mx-auto px-4 lg:px-8 py-5 text-xs text-white/40 flex flex-col md:flex-row gap-2 justify-between items-center">
          <p>© {new Date().getFullYear()} WeThinkTech Global Limited. All rights reserved.</p>
          <p className="text-[var(--brand-secondary)]/60 font-medium">Global Technology, Local Delivery.</p>
        </div>
      </div>
    </footer>
  );
}
