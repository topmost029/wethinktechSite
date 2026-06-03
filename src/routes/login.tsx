import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowRight } from "lucide-react";
import logo from "@/assets/wethinktech-logo.png.asset.json";
import { toast } from "sonner";
import type { FormEvent } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login | WeThinkTech" },
      { name: "description", content: "Sign in to your WeThinkTech account." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: Login,
});

function Login() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.info("Authentication is not configured yet.");
  };
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-32 bg-gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 20%, #00AEEF 0%, transparent 40%), radial-gradient(circle at 80% 80%, #00C853 0%, transparent 40%)" }} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md rounded-3xl glass-card p-10 shadow-elegant"
      >
        <div className="flex justify-center mb-6">
          <img src={logo.url} alt="WeThinkTech" className="h-12 w-auto" width={200} height={60} />
        </div>
        <h1 className="text-2xl font-bold text-center mb-2">Welcome back</h1>
        <p className="text-center text-muted-foreground mb-8">Sign in to access your dashboard.</p>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <Mail className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type="email" required placeholder="you@company.com" className="w-full rounded-xl border border-input bg-white pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <Lock className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type="password" required placeholder="••••••••" className="w-full rounded-xl border border-input bg-white pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-accent text-accent-foreground font-semibold shadow-glow hover:scale-[1.02] transition-transform">
            Sign In <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          New to WeThinkTech?{" "}
          <Link to="/contact" className="text-primary font-semibold hover:underline">Contact us</Link>
        </p>
      </motion.div>
    </section>
  );
}
