import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaDribbble } from 'react-icons/fa';
import Arrow from './icons/Arrow';

const MyFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Terms of Use', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '#contact' },
      ],
    },
  ];

  const socialIcons = [
    { Icon: FaFacebookF, href: '#', gradient: 'from-blue-400 to-blue-600' },
    { Icon: FaTwitter, href: '#', gradient: 'from-sky-400 to-sky-600' },
    { Icon: FaInstagram, href: '#', gradient: 'from-pink-500 to-rose-500' },
    { Icon: FaLinkedinIn, href: '#', gradient: 'from-blue-500 to-blue-700' },
    { Icon: FaGithub, href: '#', gradient: 'from-gray-600 to-gray-800' },
    { Icon: FaDribbble, href: '#', gradient: 'from-pink-400 to-pink-600' },
  ];

  return (
    <footer className="pt-24 pb-10 bg-white relative overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-400 to-blue-400" />

      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots-light opacity-20 pointer-events-none" />

      {/* Decorative Shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-400/5 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">

          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start lg:col-span-1"
          >
            <a href="#home" className="flex items-center group no-underline mb-6">
              <span className="text-gradient font-extrabold text-3xl tracking-tighter">XOLCY</span>
              <motion.div 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-primary ml-1"
              />
            </a>
            <p className="text-secondary font-medium leading-relaxed mb-6 max-w-xs text-sm">
              Elevating digital experiences through innovative design and cutting-edge technology. Your success is our mission.
            </p>
            
            {/* Social Icons */}
            <div className="flex flex-wrap gap-3">
              {socialIcons.map((social, idx) => (
                <motion.a 
                  key={idx} 
                  href={social.href}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white shadow-lg opacity-80 hover:opacity-100 transition-opacity no-underline`}
                >
                  <social.Icon size={14} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {footerLinks.map((column, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
            >
              <h4 className="text-dark font-black uppercase tracking-widest text-[10px] mb-6">{column.title}</h4>
              <ul className="space-y-4 p-0 list-none">
                {column.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a 
                      href={link.href} 
                      className="text-secondary hover:text-primary transition-colors font-semibold no-underline text-sm group inline-flex items-center gap-2"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-dark font-black uppercase tracking-widest text-[10px] mb-6">Newsletter</h4>
            <p className="text-secondary font-medium text-sm mb-5 leading-relaxed">Subscribe to get the latest updates and exclusive offers.</p>
            <div className="space-y-3">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-50/50 border-2 border-transparent rounded-xl px-4 py-3.5 focus:outline-none focus:bg-white focus:border-primary/30 focus:shadow-lg focus:shadow-primary/5 transition-all font-bold text-sm"
                />
              </div>
              <button className="w-full btn-shimmer bg-gradient-to-r from-primary to-purple-500 text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-[0.15em] hover:-translate-y-0.5 transition-all active:scale-95 border-none cursor-pointer shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
                Subscribe
                <span className="group-hover:translate-x-1 transition-transform">
                  <Arrow />
                </span>
              </button>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary text-xs font-bold">
            © {currentYear} <span className="text-gradient font-black">Xolcy</span>. Designed for excellence.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-secondary hover:text-primary transition-colors text-[10px] font-black uppercase tracking-widest no-underline relative group">
              Refined Patterns
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="text-secondary hover:text-primary transition-colors text-[10px] font-black uppercase tracking-widest no-underline relative group">
              Pixel Perfect
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
