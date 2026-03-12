import { FaLinkedinIn, FaGithub, FaTwitter, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://linkedin.com/in/pankaj-syal', color: 'from-blue-600 to-blue-400' },
    { name: 'Github', icon: FaGithub, href: 'https://github.com/pankaj-syal', color: 'from-gray-800 to-gray-600' },
    { name: 'Twitter', icon: FaTwitter, href: '#', color: 'from-sky-500 to-sky-400' },
    { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://api.whatsapp.com/send/?phone=919478629522', color: 'from-green-600 to-green-400' }
  ];

  const services = [
    'Frontend Development',
    'UI/UX Interface Design',
    'React & Next.js Apps',
    'Performance Optimization',
    'SEO & Accessibility'
  ];

  return (
    <footer className="relative bg-white pt-32 pb-12 overflow-hidden border-t border-dark/5">
      {/* Background Patterns & Orbs */}
      <div className="absolute inset-0 pattern-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Section: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center group no-underline mb-8">
              <span className="text-gradient font-black text-4xl lg:text-5xl tracking-tighter transition-all duration-500 transform group-hover:scale-105">
                PANKAJ
              </span>
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-3 h-3 rounded-full bg-primary ml-1"
              />
            </div>
            <p className="text-dark/80 font-semibold leading-relaxed mb-10 text-lg max-w-md">
              Crafing digital experiences that merge <span className="text-primary">technical excellence</span> with <span className="text-purple-500">aesthetic beauty</span>. Let's build something extraordinary together.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-dark/5 shadow-xl shadow-dark/5 hover:border-primary/20 transition-all group no-underline`}
                >
                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg`}>
                    <social.icon size={14} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-dark/40 group-hover:text-dark transition-colors">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          />

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-dark/[0.02] p-10 lg:p-12 rounded-[2.5rem] border border-dark/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
            
            <h3 className="text-2xl font-black text-dark mb-4 tracking-tight">Stay in the loop</h3>
            <p className="text-secondary font-medium mb-8 text-sm">Subscribe to get the latest insights on web development and design trends.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <input 
                type="email" 
                placeholder="Ex. hello@example.com"
                className="flex-grow px-6 py-5 rounded-2xl bg-white border-none shadow-xl shadow-dark/5 focus:ring-2 focus:ring-primary/20 outline-none text-dark font-semibold text-sm transition-all"
              />
              <button className="btn-shimmer bg-dark text-white px-8 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 active:scale-95 transition-all">
                Subscribe <FaPaperPlane size={12} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 mb-24 pt-24 border-t border-dark/5">
           {/* Navigation Column */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-dark font-black uppercase tracking-[0.3em] text-[10px] mb-8 relative inline-block">
              Explore
              <span className="absolute -bottom-2 left-0 w-6 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4 p-0 list-none">
              {[
                { name: 'Homepage', href: '/' },
                { name: 'Portfolio', href: '/projects' },
                { name: 'Internal Blog', href: 'https://reepank-blogs.vercel.app/', external: true },
                { name: 'Tech Notes', href: '#', external: true }
              ].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                    className="text-dark/60 hover:text-primary transition-all duration-300 font-bold no-underline text-xs uppercase tracking-widest group flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-dark/10 group-hover:bg-primary transition-all duration-300 transform group-hover:scale-150" />
                    {link.name}
                    {link.external && <FaExternalLinkAlt size={8} className="opacity-0 group-hover:opacity-40 transition-opacity" />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-dark font-black uppercase tracking-[0.3em] text-[10px] mb-8 relative inline-block">
              Expertise
              <span className="absolute -bottom-2 left-0 w-6 h-1 bg-purple-500 rounded-full" />
            </h4>
            <ul className="space-y-4 p-0 list-none">
              {services.map((service, idx) => (
                <li key={idx} className="text-dark/60 font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:text-purple-500 transition-colors cursor-default">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-500 transition-all" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-2 lg:flex lg:flex-col lg:items-end"
          >
            <div className="w-full max-w-sm">
               <h4 className="text-dark font-black uppercase tracking-[0.3em] text-[10px] mb-8 relative inline-block">
                Availability
                <span className="absolute -bottom-2 left-0 w-6 h-1 bg-emerald-400 rounded-full" />
              </h4>
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <FaEnvelope size={14} />
                    </div>
                    <div>
                      <span className="text-dark/40 font-black uppercase tracking-[0.2em] text-[8px] block">Direct Contact</span>
                      <a href="mailto:pankaj.syal1@gmail.com" className="text-dark font-black text-sm no-underline hover:text-primary transition-colors block mt-1">
                        pankaj.syal1@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/5 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      <FaMapMarkerAlt size={14} />
                    </div>
                    <div>
                      <span className="text-dark/40 font-black uppercase tracking-[0.2em] text-[8px] block">Current Focus</span>
                      <span className="text-dark font-black text-sm block mt-1">
                        Himachal Pradesh, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-dark/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="text-dark/40 text-[9px] font-black uppercase tracking-[0.3em] m-0">
              © {currentYear} <span className="text-gradient">Pankaj Kumar</span>
            </p>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-dark/10" />
            <p className="text-dark/40 text-[9px] font-black uppercase tracking-[0.3em] m-0">
              Building with <span className="text-primary italic">Passion</span> & <span className="text-purple-500">Precision</span>
            </p>
          </div>
          
          <div className="flex items-center gap-10">
            <motion.div 
               whileHover={{ scale: 1.05 }}
               className="flex items-center gap-3 cursor-default group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:bg-white animate-pulse" />
              </div>
              <span className="text-dark/60 text-[9px] font-black uppercase tracking-widest">Active Status</span>
            </motion.div>
            
            <div className="flex gap-8">
              <span className="text-dark/40 text-[9px] font-black uppercase tracking-widest hover:text-primary transition-colors cursor-default">Pixel Perfect</span>
              <span className="text-dark/40 text-[9px] font-black uppercase tracking-widest hover:text-primary transition-colors cursor-default">Top Notch</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
