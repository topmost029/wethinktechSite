import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroTech from "@/assets/hero-tech.jpg";
import heroCctv from "@/assets/hero-cctv.jpg";
import heroSolar from "@/assets/hero-solar.jpg";
import heroIot from "@/assets/hero-iot.jpg";
import heroGps from "@/assets/hero-gps.jpg";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  primary: { label: string; to: string };
  secondary: { label: string; to: string };
};

const slides: Slide[] = [
  { image: heroTech, eyebrow: "WETHINKTECH", title: "Global Technology, Local Delivery", subtitle: "Delivering world-class technology solutions backed by global partnerships and trusted local support.", primary: { label: "Request Consultation", to: "/contact" }, secondary: { label: "Learn More", to: "/about" } },
  { image: heroCctv, eyebrow: "Smart Surveillance", title: "Smart Surveillance & Security Solutions", subtitle: "AI-powered CCTV monitoring and enterprise-grade security systems.", primary: { label: "Explore Services", to: "/services" }, secondary: { label: "Get Quote", to: "/contact" } },
  { image: heroSolar, eyebrow: "Renewable Energy", title: "Solar & Renewable Energy Solutions", subtitle: "Reliable solar and lithium battery systems for homes and businesses.", primary: { label: "Learn More", to: "/services" }, secondary: { label: "Contact Us", to: "/contact" } },
  { image: heroIot, eyebrow: "Cloud & IoT", title: "Cloud-Based IoT Device Management", subtitle: "Monitor, manage, and control devices remotely from anywhere.", primary: { label: "Schedule Demo", to: "/contact" }, secondary: { label: "Explore Solutions", to: "/services" } },
  { image: heroGps, eyebrow: "Asset Tracking", title: "GPS Tracking & Asset Management", subtitle: "Real-time tracking and visibility for vehicles and critical assets.", primary: { label: "View Features", to: "/services" }, secondary: { label: "Talk to an Expert", to: "/contact" } },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  const go = (n: number) => setI((n + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const s = slides[i];

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={s.image} alt={s.title} className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81]/90 via-[#0F4C81]/70 to-[#0F4C81]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
        <div className="max-w-3xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-widest uppercase mb-6">
                {s.eyebrow}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-6">
                {s.title}
              </h1>
              <p className="text-lg lg:text-xl text-white/85 max-w-2xl mb-10 leading-relaxed">
                {s.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={s.primary.to} className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-accent text-accent-foreground font-semibold shadow-glow hover:scale-105 transition-transform">
                  {s.primary.label}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to={s.secondary.to} className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass text-white font-semibold hover:bg-white/20 transition-colors">
                  {s.secondary.label}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => go(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-[var(--brand-accent)]" : "w-6 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>

      <button onClick={() => go(i - 1)} aria-label="Previous" className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full glass items-center justify-center text-white hover:bg-white/20">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button onClick={() => go(i + 1)} aria-label="Next" className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full glass items-center justify-center text-white hover:bg-white/20">
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  );
}
