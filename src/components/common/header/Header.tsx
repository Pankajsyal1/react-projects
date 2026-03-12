import { Link, useLocation } from 'react-router-dom';
import FollowMe from '../../../components/about/FollowMe';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FaSearch, FaChevronRight, FaTimes, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaMoon, FaSun } from 'react-icons/fa';
import { Logo } from '../../common/Logo/Logo';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
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
      {/* Search Overlay */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-2xl flex items-center justify-center p-6"
          >
            <button 
              onClick={() => setShowSearch(false)}
              className="absolute top-10 right-10 w-16 h-16 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-white/10 transition-all border-none cursor-pointer"
            >
              <FaTimes size={24} />
            </button>
            <div className="w-full max-w-3xl text-center">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-white text-4xl lg:text-6xl font-black mb-12 tracking-tighter"
              >
                What are you looking for?
              </motion.h2>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Search projects, stack, keywords..."
                  className="w-full bg-transparent border-b-4 border-white/20 py-8 text-3xl lg:text-5xl font-bold text-white outline-none focus:border-primary transition-colors text-center"
                />
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <span className="text-white/40 text-xs font-black uppercase tracking-widest">Trending:</span>
                  {['React', 'Next.js', 'Tailwind', 'SaaS', 'Modern UI'].map((term) => (
                    <button key={term} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-white/60 text-[10px] font-bold uppercase tracking-widest hover:bg-primary/20 hover:text-white transition-all cursor-pointer">
                      {term}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
        {/* Top Bar Navigation */}
        <div className={`hidden lg:block py-2.5 transition-all duration-500 border-b border-dark/5 ${scrolled ? 'translate-y-[-100%] opacity-0' : 'bg-white/50 backdrop-blur-sm'}`}>
          <div className="container mx-auto px-6 flex justify-between items-center h-6">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 group cursor-default">
                <FaEnvelope className="text-primary group-hover:scale-110 transition-transform" size={10} />
                <span className="text-[10px] font-black uppercase tracking-widest text-dark/60">mpankaj.syal1@gmail.com</span>
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
            ? 'py-4 bg-white/95 backdrop-blur-xl border-b border-dark/5 shadow-[0_10px_40px_rgba(0,0,0,0.04)]'
            : 'py-8 bg-transparent'
          }`}>
          
          {/* Scroll Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-purple-500 to-blue-500 origin-left z-[60]"
            style={{ scaleX }}
          />

          <div className="container mx-auto px-6 flex justify-between items-center">
            {/* Logo Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <Link to="/" className="no-underline flex items-center group relative h-10 w-44">
                 <div className="absolute inset-0 transition-all duration-500 group-hover:scale-105">
                   <Logo />
                 </div>
                 {/* Text Fallback/Overlay if needed */}
                 <div className="absolute inset-x-0 -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-500 text-[8px] font-black uppercase tracking-[0.4em] text-primary text-center">
                    PANKAJ SYAL
                 </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center bg-dark/5 p-1 rounded-2xl backdrop-blur-sm border border-dark/5">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.25em] no-underline transition-all duration-500 rounded-xl ${
                      isActive(item.path) 
                        ? 'text-white' 
                        : 'text-dark/60 hover:text-dark hover:bg-dark/5'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-dark rounded-xl shadow-lg"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </nav>

              <div className="h-6 w-[1px] bg-dark/10" />

              {/* Utility Tools */}
              <div className="flex items-center gap-4">
                <motion.button 
                  onClick={() => setShowSearch(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-dark/5 text-dark/70 hover:bg-primary hover:text-white transition-all border-none cursor-pointer flex items-center justify-center p-0 shadow-sm"
                >
                  <FaSearch size={14} />
                </motion.button>
              </div>

              <div className="h-6 w-[1px] bg-dark/10" />

              {/* CTA Button */}
              <motion.a
                href="mailto:mpankaj.syal1@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-shimmer px-8 py-3.5 rounded-2xl bg-gradient-to-r from-primary via-primary to-purple-600 text-white font-black text-[10px] uppercase tracking-widest shadow-xl shadow-primary/20 no-underline whitespace-nowrap"
              >
                Let&apos;s Collaborate
              </motion.a>
            </div>

            {/* Mobile Interaction */}
            <div className="flex items-center gap-3 md:hidden">
              <motion.button 
                 onClick={() => setShowSearch(true)}
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 className="w-10 h-10 rounded-xl bg-primary text-white shadow-lg shadow-primary/20 border-none flex items-center justify-center p-0"
              >
                <FaSearch size={14} />
              </motion.button>

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
                        <a href="mailto:mpankaj.syal1@gmail.com" className="text-dark font-black text-sm no-underline">mpankaj.syal1@gmail.com</a>
                     </div>
                     <div className="flex flex-col gap-4">
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/40">Follow</span>
                        <FollowMe />
                     </div>
                  </div>
                  
                  <a
                    href="mailto:mpankaj.syal1@gmail.com"
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
