import { Link, useLocation } from "react-router-dom";
import FollowMe from "../../../pages/home/components/FollowMe";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    if (path === "/projects") return location.pathname !== "/";
    return location.pathname === path;
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <>
      <header className="fixed shadow top-0 left-0 z-50 w-full transition-all duration-500">
        <div
          className={`transition-all duration-500 py-2 sm:py-3 ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
              : "bg-white/60 backdrop-blur-sm"
          }`}
        >
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-purple-500 to-blue-500 origin-left z-[60]"
            style={{ scaleX }}
          />

          <div className="container grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-start w-full"
            >
              <Link to="/" className="no-underline flex items-center gap-3 group relative">
                <div className="flex min-w-30 flex-col leading-none">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-[0.28em] text-slate-900">
                    Pankaj
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
                    Portfolio
                  </span>
                </div>
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center justify-center">
              <nav className="flex items-center bg-white/70 p-1 rounded-full backdrop-blur border border-dark/10 shadow-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-5 py-2 text-[10px] font-black uppercase tracking-[0.22em] no-underline transition-all duration-300 rounded-full ${
                      isActive(item.path)
                        ? "text-white"
                        : "text-dark/60 hover:text-dark hover:bg-dark/5"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-dark rounded-full shadow-lg"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center justify-end gap-3 md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 bg-dark rounded-xl border-none cursor-pointer relative overflow-hidden group shadow-xl shadow-dark/10"
              >
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6.5 : 0 }}
                  className="w-5 h-0.5 bg-white rounded-full relative z-10"
                />
                <motion.span
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  className="w-5 h-0.5 bg-white rounded-full relative z-10"
                />
                <motion.span
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6.5 : 0 }}
                  className="w-5 h-0.5 bg-white rounded-full relative z-10"
                />
              </button>
            </div>

            <div className="hidden md:flex items-center justify-end gap-4 w-full">
              <div className="flex items-center gap-2">
                <motion.a
                  href="mailto:pankaj.syal1@gmail.com"
                  whileHover={{ y: -2, scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/70 backdrop-blur border border-dark/10 flex items-center justify-center text-dark hover:text-primary hover:border-primary/30 transition-all shadow-sm no-underline"
                  aria-label="Email"
                >
                  <FaEnvelope size={16} />
                </motion.a>
                <motion.a
                  href="https://github.com/pankaj-syal"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/70 backdrop-blur border border-dark/10 flex items-center justify-center text-dark hover:text-primary hover:border-primary/30 transition-all shadow-sm no-underline"
                  aria-label="GitHub"
                >
                  <FaGithub size={16} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/pankaj-syal"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/70 backdrop-blur border border-dark/10 flex items-center justify-center text-dark hover:text-primary hover:border-primary/30 transition-all shadow-sm no-underline"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={16} />
                </motion.a>
              </div>
              <motion.a
                href="https://api.whatsapp.com/send/?phone=919478629522"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-shimmer px-7 py-3 rounded-full bg-gradient-to-r from-primary via-primary to-purple-600 text-white font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20 no-underline whitespace-nowrap inline-flex items-center gap-2"
              >
                <FaWhatsapp size={12} />
                Let&apos;s Collaborate
              </motion.a>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden bg-white fixed inset-0 z-[60] h-screen overflow-hidden pt-[40px] pointer-events-auto"
              onClick={() => setIsOpen(false)}
              onPointerDown={() => setIsOpen(false)}
            >
              <div
                className="p-6 sm:p-8 flex flex-col h-full bg-white relative pointer-events-auto"
                onClick={(event) => event.stopPropagation()}
                onPointerDown={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsOpen(false);
                  }}
                  onPointerDown={(event) => {
                    event.stopPropagation();
                    setIsOpen(false);
                  }}
                  aria-label="Close menu"
                  className="absolute right-4 top-4 sm:right-6 sm:top-6 z-[70] flex h-10 w-10 items-center justify-center rounded-xl bg-dark text-white shadow-lg shadow-dark/10 pointer-events-auto"
                >
                  <span className="relative block h-4 w-4">
                    <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 rotate-45 bg-white" />
                    <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 -rotate-45 bg-white" />
                  </span>
                </button>
                <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-20 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-4 pt-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary block mb-6">
                    Explore my world
                  </span>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`text-3xl sm:text-4xl font-black no-underline flex items-center group leading-none mb-4 ${
                          isActive(item.path)
                            ? "text-primary"
                            : "text-dark hover:text-primary transition-colors"
                        }`}
                      >
                        {item.name}
                        {isActive(item.path) && (
                          <motion.div
                            layoutId="activeDot"
                            className="w-4 h-4 rounded-full bg-primary ml-4"
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto space-y-8 relative z-10 pb-12">
                  <div className="h-[1px] bg-dark/5 w-full" />
                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">
                        Quick Contact
                      </span>
                      <a
                        href="mailto:pankaj.syal1@gmail.com"
                        className="text-dark font-black text-sm no-underline"
                      >
                        pankaj.syal1@gmail.com
                      </a>
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">
                        Follow
                      </span>
                      <FollowMe />
                    </div>
                  </div>

                  <a
                    href="mailto:pankaj.syal1@gmail.com"
                    className="btn-shimmer block w-full text-center py-5 rounded-3xl bg-dark text-white font-black text-sm uppercase tracking-[0.3em] no-underline shadow-2xl"
                  >
                    Start Project
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;
