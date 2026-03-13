import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/pankaj-syal",
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "Github",
      icon: FaGithub,
      href: "https://github.com/pankaj-syal",
      color: "from-gray-800 to-gray-600",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "#",
      color: "from-sky-500 to-sky-400",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: "https://api.whatsapp.com/send/?phone=919478629522",
      color: "from-green-600 to-green-400",
    },
  ];

  const services = [
    "Frontend Development",
    "UI/UX Interface Design",
    "React & Next.js Apps",
    "Performance Optimization",
    "SEO & Accessibility",
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 pt-24 pb-6 text-slate-100">
      <div className="absolute inset-0 pattern-grid opacity-[0.06] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] [background-size:18px_18px] opacity-30 pointer-events-none" />     <div className="absolute top-0 right-0 h-[520px] w-[520px] translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[420px] w-[420px] -translate-x-1/3 translate-y-1/3 rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 mb-16 justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-2 group no-underline mb-8">
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-3 h-3 rounded-full bg-primary ml-1"
              />
              <span className="text-gradient font-bold text-4xl lg:text-5xl tracking-tighter transition-all duration-500 transform">
                PANKAJ
              </span>
            </div>
            <p className="max-w-md text-lg font-medium leading-relaxed text-slate-200/90 mb-10">
              Crafing digital experiences that merge{" "}
              <span className="text-primary">technical excellence</span> with{" "}
              <span className="text-purple-400">aesthetic beauty</span>. Let's build
              something extraordinary together.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ willChange: "transform" }}
                  className="flex items-center justify-center w-12 h-12 gap-3 rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-black/10 group no-underline transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:rotate-1 hover:border-primary/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/20 focus-visible:-translate-y-1 focus-visible:scale-[1.04] focus-visible:rotate-1"
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br ${social.color}  text-white shadow-lg`}
                  >
                    <social.icon size={14} />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-6 lg:col-start-7 rounded-[2.5rem] border border-white/10 bg-white/5 p-10 lg:p-12 relative overflow-hidden group"
          >
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />
            <div className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl group-hover:bg-purple-500/20 transition-colors" />

            <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
              Start a project
            </h3>
            <p className="text-slate-200/70 font-normal mb-8 text-sm max-w-md">
              Tell me about your idea and I&apos;ll help shape it into a polished,
              high‑performance web experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=919478629522"
                className="btn-shimmer px-8 py-4 rounded-2xl bg-white text-dark font-semibold text-[10px] uppercase tracking-[0.2em] inline-flex items-center gap-3 shadow-xl shadow-black/10 no-underline"
              >
                <FaWhatsapp size={12} />
                Let&apos;s Collaborate
              </a>
              <a
                href="mailto:pankaj.syal1@gmail.com"
                className="px-8 py-4 rounded-2xl border border-white/10 text-white/80 font-semibold text-[10px] uppercase tracking-[0.2em] inline-flex items-center gap-3 hover:border-primary/40 hover:text-white transition-colors no-underline"
              >
                <FaEnvelope size={12} />
                Email Me
              </a>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 mb-20 pt-16 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold uppercase tracking-[0.3em] text-[10px] mb-8 relative inline-block">
              Explore
              <span className="absolute -bottom-2 left-0 w-6 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4 p-0 list-none">
              {[
                { name: "Homepage", href: "/" },
                { name: "Portfolio", href: "/projects" },
                {
                  name: "Internal Blog",
                  href: "https://reepank-blogs.vercel.app/",
                  external: true,
                },
                { name: "Tech Notes", href: "#", external: true },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                    className="text-white/60 hover:text-primary transition-all duration-300 font-medium no-underline text-xs uppercase tracking-widest group flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-all duration-300 transform group-hover:scale-150" />
                    {link.name}
                    {link.external && (
                      <FaExternalLinkAlt
                        size={8}
                        className="opacity-0 group-hover:opacity-40 transition-opacity"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold uppercase tracking-[0.3em] text-[10px] mb-8 relative inline-block">
              Expertise
              <span className="absolute -bottom-2 left-0 w-6 h-1 bg-purple-500 rounded-full" />
            </h4>
            <ul className="space-y-4 p-0 list-none">
              {services.map((service, idx) => (
                <li
                  key={idx}
                  className="text-white/60 font-medium text-xs uppercase tracking-widest flex items-center gap-3 hover:text-purple-400 transition-colors cursor-default"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-500 transition-all" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-2 lg:flex lg:flex-col lg:items-end"
          >
            <div className="w-full max-w-sm">
              <h4 className="text-white font-semibold uppercase tracking-[0.3em] text-[10px] mb-8 relative inline-block">
                Availability
                <span className="absolute -bottom-2 left-0 w-6 h-1 bg-emerald-400 rounded-full" />
              </h4>
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <FaEnvelope size={14} />
                    </div>
                    <div>
                      <span className="text-white/40 uppercase tracking-[0.2em] text-[8px] block">
                        Direct Contact
                      </span>
                      <a
                        href="mailto:pankaj.syal1@gmail.com"
                        className="text-white text-sm no-underline hover:text-primary transition-colors block mt-1"
                      >
                        pankaj.syal1@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      <FaMapMarkerAlt size={14} />
                    </div>
                    <div>
                      <span className="text-white/40 uppercase tracking-[0.2em] text-[8px] block">
                        Current Focus
                      </span>
                      <span className="text-white text-sm block mt-1">
                        Himachal Pradesh, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="text-white/50 text-[9px] font-bold uppercase tracking-[0.3em] m-0">
              &copy; {currentYear}<span className="text-gradient">Pankaj Kumar</span>
            </p>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20" />
            <p className="text-white/50 text-[9px] font-bold uppercase tracking-[0.3em] m-0">
              Building with <span className="text-primary italic">Passion</span> &{" "}
              <span className="text-purple-400">Precision</span>
            </p>
          </div>

          <div className="flex items-center gap-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-default group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-white animate-pulse" />
              </div>
              <span className="text-white/60 text-[9px] font-semibold uppercase tracking-widest">
                Active Status
              </span>
            </motion.div>

            <div className="flex gap-8">
              <span className="text-white/50 text-[9px] font-semibold uppercase tracking-widest hover:text-primary transition-colors cursor-default">
                Pixel Perfect
              </span>
              <span className="text-white/50 text-[9px] font-semibold uppercase tracking-widest hover:text-primary transition-colors cursor-default">
                Top Notch
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
