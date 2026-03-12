import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Arrow from '../icons/Arrow';

const MyNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      {/* Gradient Border on Scroll */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#home" 
          className="flex items-center group no-underline"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-gradient font-extrabold text-2xl tracking-tighter">XOLCY</span>
          <motion.div 
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-primary ml-1"
          />
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="relative px-4 py-2 text-dark/70 hover:text-primary transition-colors duration-200 font-semibold no-underline text-sm uppercase tracking-wide group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </motion.a>
            ))}
          </div>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-shimmer bg-gradient-to-r from-primary to-purple-500 text-white px-7 py-3 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 border-none cursor-pointer text-sm"
          >
            Build Yours <Arrow />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl focus:outline-none text-dark border-none bg-transparent cursor-pointer p-2"
          aria-label="Toggle navigation"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <motion.span 
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
              className="h-0.5 w-full bg-dark rounded-full origin-center"
            />
            <motion.span 
              animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? -20 : 0 }}
              className="h-0.5 w-full bg-dark rounded-full"
            />
            <motion.span 
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
              className="h-0.5 w-full bg-dark rounded-full origin-center"
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-xl absolute top-full left-0 w-full shadow-2xl border-t border-dark/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="text-dark/80 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-bold no-underline text-lg py-3 px-4 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="btn-shimmer bg-gradient-to-r from-primary to-purple-500 text-white px-6 py-4 rounded-xl font-bold flex items-center gap-2 transition-all w-full justify-center border-none cursor-pointer shadow-xl shadow-primary/20 mt-2"
              >
                Build Yours <Arrow />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default MyNavbar;
