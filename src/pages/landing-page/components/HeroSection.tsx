import heroImage from '../../../assets/images/hero-one.png';
import MyNavbar from './MyNavbar';
import Arrow from './icons/Arrow';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      }
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut' as const,
      }
    },
  };

  return (
    <header id="home" className="relative w-full overflow-hidden bg-white/60 backdrop-blur-sm">
      <MyNavbar />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dot Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none pattern-dots"
        />
        
        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-20 h-20 border-2 border-primary/20 rounded-2xl rotate-12 hidden lg:block"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] left-[5%] w-12 h-12 bg-primary/10 rounded-full hidden lg:block"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] right-[8%] w-16 h-16 border-2 border-blue-400/20 rounded-full hidden lg:block"
        />
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            rotate: [45, 60, 45],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[25%] right-[15%] w-10 h-10 bg-purple-400/10 rotate-45 hidden lg:block"
        />

        {/* Large Gradient Blur */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">

            {/* Content Side */}
            <div className="w-full lg:w-6/12 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-primary text-primary text-xs font-bold uppercase tracking-widest mb-8 shadow-lg shadow-primary/10"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Innovation Meets Excellence
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-dark leading-[0.9] tracking-tighter mb-8"
              >
                Powering <br />
                <span className="text-gradient italic font-serif relative">
                  Success
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-400 rounded-full"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                  />
                </span> with <br />
                Xolcy.
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-lg md:text-xl text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
              >
                Empowering brands with cutting-edge digital experiences. We craft solutions that don't just work—they inspire.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-wrap justify-center lg:justify-start gap-5"
              >
                <button className="btn-shimmer bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-primary-hover hover:-translate-y-1 transition-all duration-300 shadow-2xl shadow-primary/30 active:scale-95 border-none cursor-pointer group">
                  Get Started
                  <span className="group-hover:translate-x-1 transition-transform">
                    <Arrow />
                  </span>
                </button>
                <button className="glass-card text-dark px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95 cursor-pointer">
                  Learn More
                </button>
              </motion.div>

              {/* Stats Preview */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-16 pt-12 border-t border-dark/5 flex justify-center lg:justify-start gap-12"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-default"
                >
                  <h4 className="text-3xl font-black text-dark tracking-tighter group-hover:text-gradient transition-colors">20K+</h4>
                  <p className="text-secondary text-sm font-medium">Active Users</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-default"
                >
                  <h4 className="text-3xl font-black text-dark tracking-tighter group-hover:text-gradient transition-colors">99%</h4>
                  <p className="text-secondary text-sm font-medium">Success Rate</p>
                </motion.div>
              </motion.div>
            </div>

            {/* Image Side */}
            <div className="w-full lg:w-6/12 relative group">
              <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                className="relative z-10"
              >
                {/* Glowing Background */}
                <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-primary/20 via-purple-400/10 to-blue-400/20 blur-3xl group-hover:from-primary/30 group-hover:via-purple-400/20 group-hover:to-blue-400/30 transition-all duration-700 pointer-events-none animate-pulse-glow" />
                
                {/* Main Image Container */}
                <div className="relative">
                  <img
                    src={heroImage}
                    alt="Business Hero"
                    className="relative w-full h-auto rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.02]"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-dark/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>

              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-1/4 glass-card p-5 rounded-2xl shadow-2xl z-20 hidden md:block hover-lift"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 font-bold">
                    ✓
                  </div>
                  <span className="font-bold text-dark">Verified Project</span>
                </div>
                <div className="h-2 w-32 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-green-400 to-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>

              {/* Additional Floating Badge */}
              <motion.div
                animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 bottom-1/4 glass p-4 rounded-xl shadow-xl z-20 hidden lg:flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">Growth</p>
                  <p className="font-black text-dark text-lg">+150%</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Wave Divider */}
      <div className="wave-divider wave-divider-bottom">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="#fafafc"
            opacity=".8"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="#fafafc"
          />
        </svg>
      </div>
    </header>
  );
};

export default HeroSection;
