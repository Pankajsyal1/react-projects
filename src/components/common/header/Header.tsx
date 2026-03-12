import { Link, useLocation } from 'react-router-dom';
import FollowMe from '../../../components/about/FollowMe';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 50 && isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/#services' },
    { name: 'About', path: '/#about' },
  ];

  return (
    <>
      <header className="sticky shadow top-0 left-0 z-50 w-full transition-all duration-500">
        {/* Top Bar Navigation */}
        <div className={`hidden lg:block transition-all duration-500  overflow-hidden ${scrolled ? 'max-h-0 py-0 -translate-y-2 opacity-0' : 'max-h-10 py-2.5 bg-white/70 backdrop-blur'}`}>
          <div className="container h-6 flex justify-between items-center">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 group cursor-default">
                <FaEnvelope className="text-primary group-hover:scale-110 transition-transform" size={10} />
                <span className="text-[10px] font-black uppercase tracking-widest text-dark/60">pankaj.syal1@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <FaPhoneAlt className="text-primary group-hover:scale-110 transition-transform" size={10} />
                <span className="text-[10px] font-black uppercase tracking-widest text-dark/60">+91 94786 29522</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <FaMapMarkerAlt className="text-primary group-hover:scale-110 transition-transform" size={10} />
                <span className="text-[10px] font-black uppercase tracking-widest text-dark/60">India</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-dark/30">Pankaj Personal Portfolio</span>
              <div className="h-3 w-[1px] bg-dark/10" />
              <FollowMe />
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className={`transition-all duration-500 ${scrolled
            ? 'py-3 bg-white/90 backdrop-blur-xl border-b border-dark/10 shadow-[0_12px_30px_rgba(15,23,42,0.08)]'
            : 'py-6 bg-white/60 backdrop-blur-sm'
          }`}>
          
          {/* Scroll Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-purple-500 to-blue-500 origin-left z-[60]"
            style={{ scaleX }}
          />

          <div className="container grid grid-cols-[1fr_auto_1fr] items-center">
            {/* Logo Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <Link to="/" className="no-underline flex items-center gap-3 group relative">
                <div className="flex min-w-30 flex-col leading-none">
                  <span className="text-sm font-black uppercase tracking-[0.3em] text-slate-900">
                    Pankaj
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.45em] text-slate-500">
                    Portfolio
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center">
              <nav className="flex items-center bg-white/70 p-1 rounded-full backdrop-blur border border-dark/10 shadow-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-5 py-2 text-[10px] font-black uppercase tracking-[0.22em] no-underline transition-all duration-300 rounded-full ${
                      isActive(item.path)
                        ? 'text-white'
                        : 'text-dark/60 hover:text-dark hover:bg-dark/5'
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

            {/* Mobile Interaction */}
            <div className="flex items-center justify-end gap-3 md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
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

            <div className="hidden md:flex items-center justify-end">
              <motion.a
                href="mailto:pankaj.syal1@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-shimmer px-7 py-3 rounded-full bg-gradient-to-r from-primary via-primary to-purple-600 text-white font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20 no-underline whitespace-nowrap"
              >
                Let&apos;s Collaborate
              </motion.a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden bg-white fixed inset-0 z-[49] h-screen overflow-hidden pt-[140px]"
            >
              <div className="p-8 flex flex-col h-full bg-white relative">
                 {/* Decorative background for mobile menu */}
                 <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                 <div className="absolute bottom-20 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 block mb-6">Explore my world</span>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-5xl font-black no-underline flex items-center group leading-none mb-4 ${
                          isActive(item.path) ? 'text-primary' : 'text-dark hover:text-primary transition-colors'
                        }`}
                      >
                        {item.name}
                        {isActive(item.path) && <motion.div layoutId="activeDot" className="w-4 h-4 rounded-full bg-primary ml-4" />}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto space-y-8 relative z-10 pb-12">
                  <div className="h-[1px] bg-dark/5 w-full" />
                  <div className="grid grid-cols-1 gap-6">
                     <div className="flex flex-col gap-2">
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/40">Quick Contact</span>
                        <a href="mailto:pankaj.syal1@gmail.com" className="text-dark font-black text-sm no-underline">pankaj.syal1@gmail.com</a>
                     </div>
                     <div className="flex flex-col gap-4">
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/40">Follow</span>
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
