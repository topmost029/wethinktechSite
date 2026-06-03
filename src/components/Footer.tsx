import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import logo from "@/assets/wethinktech-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container mx-auto px-4 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="bg-white inline-block rounded-xl p-3 mb-4">
            <img src={logo.url} alt="WeThinkTech" className="h-10 w-auto" width={200} height={60} />
          </div>
          <p className="text-primary-foreground/80 max-w-md leading-relaxed">
            WETHINKTECH delivers cloud-based device management and enterprise-grade
            technology solutions — backed by global OEM partnerships and trusted local support.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-primary-foreground/80">
            <li><Link to="/" className="hover:text-[var(--brand-accent)]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[var(--brand-accent)]">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[var(--brand-accent)]">Services</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--brand-accent)]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-lg">Contact</h4>
          <ul className="space-y-3 text-primary-foreground/80 text-sm">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> <a href="tel:+2349162439166" className="hover:text-[var(--brand-accent)]">0916 243 9166</a></li>
            <li className="flex items-start gap-2"><MessageCircle className="h-4 w-4 mt-0.5 shrink-0" /> <a href="https://wa.me/2349162439166" className="hover:text-[var(--brand-accent)]">WhatsApp</a></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> <a href="mailto:info@wethinktech.com" className="hover:text-[var(--brand-accent)]">info@wethinktech.com</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Nigeria</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 text-sm text-primary-foreground/60 flex flex-col md:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} WeThinkTech Global Limited. All rights reserved.</p>
          <p>Global Technology, Local Delivery.</p>
        </div>
      </div>
    </footer>
  );
}
