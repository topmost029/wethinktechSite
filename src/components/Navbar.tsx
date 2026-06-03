import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/wethinktech-logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/services-data";

type NavLink = { to: "/" | "/about" | "/services/" | "/contact"; label: string; hasMenu?: boolean };
const links: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services/", label: "Services", hasMenu: true },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white/90 backdrop-blur-xl border-b border-[#1a6b3c]/12 shadow-card"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="WeThinkTech Global Limited" className={`h-10 lg:h-12 w-auto transition-all duration-300 ${transparent ? "" : "mix-blend-mode-multiply brightness-100"}`} style={transparent ? {} : { mixBlendMode: "multiply" }} width={200} height={60} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = location.pathname === l.to || (l.to === "/services/" && location.pathname.startsWith("/services"));
              if (l.hasMenu) {
                return (
                  <div
                    key={l.to}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={l.to}
                      className={`relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                        transparent ? "text-white hover:text-white" : "text-foreground/80 hover:text-primary"
                      }`}
                    >
                      {l.label}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      {active && (
                        <motion.span
                          layoutId="nav-pill"
                          className={`absolute inset-0 -z-10 rounded-full ${transparent ? "bg-white/15" : "bg-primary/10"}`}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[520px]"
                        >
                          <div className="rounded-2xl bg-white border border-border shadow-elegant p-3 grid grid-cols-1 gap-1">
                            {services.map((s) => {
                              const Icon = s.icon;
                              return (
                                <Link
                                  key={s.slug}
                                  to="/services/$slug"
                                  params={{ slug: s.slug }}
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition group"
                                >
                                  <span className="h-10 w-10 rounded-xl bg-gradient-hero text-white flex items-center justify-center shrink-0 shadow-glow">
                                    <Icon className="h-5 w-5" />
                                  </span>
                                  <span className="flex-1">
                                    <span className="block text-sm font-semibold text-foreground group-hover:text-primary transition">{s.title}</span>
                                    <span className="block text-xs text-muted-foreground line-clamp-1">{s.tagline}</span>
                                  </span>
                                </Link>
                              );
                            })}
                            <Link
                              to="/services/"
                              className="mt-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-soft text-sm font-semibold text-primary hover:bg-primary/10 transition"
                            >
                              View All Services →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    transparent ? "text-white hover:text-white" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 -z-10 rounded-full ${transparent ? "bg-white/15" : "bg-primary/10"}`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden sm:inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold bg-gradient-hero text-white shadow-glow hover:scale-105 active:scale-95 transition-transform"
            >
              Login
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className={`lg:hidden p-2 rounded-md ${transparent ? "text-white" : "text-foreground"}`}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((l) => {
                if (l.hasMenu) {
                  return (
                    <div key={l.to} className="flex flex-col">
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="flex items-center justify-between px-4 py-3 rounded-lg text-foreground hover:bg-muted font-medium"
                      >
                        <span>{l.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden pl-3"
                          >
                            <Link to="/services/" className="block px-4 py-2.5 rounded-lg text-sm text-foreground hover:bg-muted">
                              All Services
                            </Link>
                            {services.map((s) => (
                              <Link
                                key={s.slug}
                                to="/services/$slug"
                                params={{ slug: s.slug }}
                                className="block px-4 py-2.5 rounded-lg text-sm text-foreground/80 hover:bg-muted"
                              >
                                {s.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="px-4 py-3 rounded-lg text-foreground hover:bg-muted font-medium"
                    activeProps={{ className: "px-4 py-3 rounded-lg bg-primary/10 text-primary font-semibold" }}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Link to="/login" className="mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-gradient-accent text-accent-foreground">
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
