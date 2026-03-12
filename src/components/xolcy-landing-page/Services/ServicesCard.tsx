import React from 'react';
import { motion } from 'framer-motion';
import Arrow from '../icons/Arrow';

export interface ServicesCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative glass-card p-10 rounded-[2rem] hover:shadow-[0_30px_60px_-15px_rgba(109,98,252,0.15)] transition-all duration-500 h-full flex flex-col group cursor-pointer overflow-hidden"
    >
      {/* Animated Border Gradient on Hover */}
      <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-[1px] rounded-[2rem] bg-white" />
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/30 via-purple-400/20 to-blue-400/30" />
      </div>

      {/* Background Pattern on Hover */}
      <div className="absolute inset-0 pattern-dots-light opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon Container with Glow */}
        <div className="relative mb-8">
          <motion.div 
            whileHover={{ rotate: 6 }}
            className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-500"
          >
            <div className="scale-150">{icon}</div>
          </motion.div>
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10" />
        </div>

        <h3 className="text-2xl font-black text-dark mb-4 tracking-tighter group-hover:text-gradient transition-colors">
          {title}
        </h3>

        <p className="text-secondary leading-relaxed font-medium mb-8 flex-grow">
          {description}
        </p>

        <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
          <span className="relative">
            Read More
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </span>
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Arrow />
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesCard;