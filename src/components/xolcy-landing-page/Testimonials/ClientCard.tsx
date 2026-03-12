import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export interface ClientCardProps {
  id: number;
  name: string;
  job: string;
  quote: string;
  avatar?: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ name, job, quote, avatar }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full glass-card p-8 md:p-10 rounded-[2.5rem] flex flex-col relative group cursor-pointer overflow-hidden"
    >
      {/* Background Pattern on Hover */}
      <div className="absolute inset-0 pattern-dots-light opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
      
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-[1px] rounded-[2.5rem] bg-white/95" />
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-purple-400/10 to-blue-400/20" />
      </div>

      {/* Quote Icon */}
      <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/25 group-hover:scale-110 transition-all duration-500">
        <FaQuoteLeft size={50} />
      </div>

      {/* Star Ratings */}
      <div className="flex gap-1 mb-6 relative z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <FaStar className="text-yellow-400 text-sm" />
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <p className="text-dark/80 text-lg font-medium leading-relaxed mb-8 flex-grow relative z-10">
        "{quote}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-dark/5 relative z-10">
        {/* Avatar with Gradient Ring */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary via-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-400/10 flex items-center justify-center text-primary font-black text-xl overflow-hidden">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="bg-gradient-to-br from-primary to-purple-500 text-white w-full h-full flex items-center justify-center">
                {name.charAt(0)}
              </span>
            )}
          </div>
        </div>
        
        {/* Name and Job */}
        <div>
          <h5 className="text-lg font-black text-dark tracking-tight mb-0.5 group-hover:text-gradient transition-colors">
            {name}
          </h5>
          <p className="text-primary font-bold uppercase tracking-[0.1em] text-[10px]">
            {job}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientCard;