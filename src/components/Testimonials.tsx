import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  { name: "Adaeze Okeke", position: "IT Director", company: "Meridian Holdings", review: "WeThinkTech transformed our entire surveillance infrastructure. The cloud monitoring platform is rock solid and their local support team is incredibly responsive.", initials: "AO" },
  { name: "Tunde Bakare", position: "Operations Manager", company: "Stellar Logistics", review: "Their GPS tracking solution gave us complete visibility into our fleet. We've cut fuel costs by 18% and our drivers are safer. Top-tier service.", initials: "TB" },
  { name: "Ngozi Eze", position: "Facilities Lead", company: "Pinnacle Towers", review: "The hybrid solar system has been flawless for over a year. Reliable energy, transparent reporting, and a team that genuinely cares about uptime.", initials: "NE" },
  { name: "Samuel Adewale", position: "CTO", company: "Vertex Bank", review: "From IoT device management to advisory, WeThinkTech is the partner we trust to bring enterprise technology to life on time and within budget.", initials: "SA" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const go = (n: number) => setI((n + testimonials.length) % testimonials.length);
  const t = testimonials[i];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" subtitle="Trusted by organizations seeking reliable technology solutions." />

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl p-10 md:p-14 shadow-elegant relative"
            >
              <Quote className="absolute top-8 right-8 h-16 w-16 text-primary/10" />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-5 w-5 fill-[var(--brand-accent)] text-[var(--brand-accent)]" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">"{t.review}"</p>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gradient-hero text-white flex items-center justify-center font-semibold text-lg">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.position} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={() => go(i - 1)} aria-label="Previous" className="h-11 w-11 rounded-full bg-white shadow-card hover:bg-primary hover:text-white transition flex items-center justify-center">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button key={idx} onClick={() => go(idx)} aria-label={`Testimonial ${idx + 1}`} className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"}`} />
              ))}
            </div>
            <button onClick={() => go(i + 1)} aria-label="Next" className="h-11 w-11 rounded-full bg-white shadow-card hover:bg-primary hover:text-white transition flex items-center justify-center">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
