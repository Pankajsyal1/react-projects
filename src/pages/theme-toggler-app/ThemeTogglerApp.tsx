import { useState } from 'react';
import AppHeading from '../../components/common/AppHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeTogglerApp = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
      <AppHeading sno={5} title="Chromatic Shift" />

      <motion.section
        animate={{
          backgroundColor: isDark ? "#0a0a0a" : "#ffffff",
          color: isDark ? "#ffffff" : "#000000"
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mt-12 group relative overflow-hidden rounded-[4rem] border border-dark/5 shadow-2xl p-16 lg:p-24 flex flex-col items-center text-center space-y-12"
      >
        <div className="space-y-6 relative z-10">
          <motion.h1
            layout
            className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-none uppercase"
          >
            Welcome To <br />
            <span className={isDark ? "text-primary" : "text-dark"}>A Real World</span>
          </motion.h1>
          <p className={`text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${isDark ? "text-white/40" : "text-dark/40"}`}>
            Experience the spectrum of digital aesthetics
          </p>
        </div>

        <div className="relative z-10">
          <button
            onClick={toggleTheme}
            className={`group relative flex items-center gap-4 px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-[10px] transition-all duration-500 border-2 ${isDark
                ? "border-primary text-primary hover:bg-primary hover:text-white"
                : "border-dark text-dark hover:bg-dark hover:text-white"
              } shadow-xl shadow-transparent hover:shadow-primary/20`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isDark ? "dark" : "light"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <FiMoon size={18} /> : <FiSun size={18} />}
              </motion.div>
            </AnimatePresence>
            <span>{isDark ? "Luminous Mode" : "Nocturnal Mode"}</span>
          </button>
        </div>

        {/* Dynamic Background Accents */}
        <motion.div
          animate={{ scale: isDark ? 1.2 : 1, opacity: isDark ? 0.3 : 0.1 }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px] -z-0 pointer-events-none"
        />
        <motion.div
          animate={{ scale: isDark ? 1.5 : 1, opacity: isDark ? 0.2 : 0.05 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px] -z-0 pointer-events-none"
        />
      </motion.section>
    </div>
  )
}

export default ThemeTogglerApp;