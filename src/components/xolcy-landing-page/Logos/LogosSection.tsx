import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  {
    src: 'https://themesdesign.in/xolcy/layout/images/brand-logo-1.png',
    alt: 'Envato Logo',
  },
  {
    src: 'https://themesdesign.in/xolcy/layout/images/brand-logo-2.png',
    alt: 'WordPress Logo',
  },
  {
    src: 'https://themesdesign.in/xolcy/layout/images/brand-logo-3.png',
    alt: 'Magento Logo',
  },
  {
    src: 'https://themesdesign.in/xolcy/layout/images/brand-logo-4.png',
    alt: 'WooCommerce Logo',
  },
];

// Double the logos for seamless infinite scroll
const infiniteLogos = [...logos, ...logos, ...logos, ...logos];

const LogosSection = () => {
  return (
    <section className="py-16 md:py-20 bg-[#fafafc] border-y border-dark/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots-light opacity-20 pointer-events-none" />

      {/* Gradient Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[#fafafc] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[#fafafc] to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] opacity-60">
            Trusted by Industry Leaders
          </p>
        </motion.div>

        {/* Infinite Scroll Marquee */}
        <div className="overflow-hidden">
          <motion.div
            className="flex items-center gap-16 md:gap-24"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {infiniteLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 group cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 md:h-10 lg:h-12 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
