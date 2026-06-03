import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-hero text-white px-8 py-16 md:p-20 text-center shadow-elegant"
        >
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 25% 30%, #00C853 0%, transparent 40%), radial-gradient(circle at 80% 70%, #f5c518 0%, transparent 45%)" }} />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
              Ready to Transform Your Business with Technology?
            </h2>
            <p className="text-lg text-white/85 max-w-2xl mx-auto mb-10">
              Speak with our experts and discover how WeThinkTech can elevate your operations with secure, scalable, future-ready solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-primary font-semibold hover:scale-105 transition-transform shadow-glow">
                Request Consultation <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
              <a href="https://wa.me/2349162439166" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-accent text-accent-foreground font-semibold hover:scale-105 transition-transform">
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
