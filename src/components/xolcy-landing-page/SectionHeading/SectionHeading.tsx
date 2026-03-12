import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  subTitle?: string;
  title: string;
  description: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  marginBottom?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ subTitle, title, description, align = 'left', marginBottom = 'mb-10' }) => {
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  const alignClass = {
    left: 'text-left lg:text-left mx-0',
    center: 'text-center mx-auto',
    right: 'text-right lg:text-right ml-auto',
    justify: 'text-justify',
  }[align];

  return (
    <div className={`${alignClass} max-w-3xl w-full`}>
      {subTitle && (
        <motion.div
          className='inline-flex items-center gap-2 mb-5'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={animationVariants}
        >
          <span className='inline-block text-primary uppercase font-extrabold tracking-[0.2em] text-[10px] bg-gradient-to-r from-primary/10 to-purple-400/10 px-4 py-2 rounded-full border border-primary/10'>
            {subTitle}
          </span>
        </motion.div>
      )}

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-dark tracking-tighter leading-[1.1] relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={animationVariants}
      >
        {title}
        {/* Animated Underline */}
        <motion.span 
          className={`absolute -bottom-2 ${align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'} w-16 h-1 bg-gradient-to-r from-primary to-purple-400 rounded-full`}
          initial={{ scaleX: 0, originX: align === 'center' ? 0.5 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        />
      </motion.h2>

      <motion.p
        className={`${marginBottom} text-secondary leading-relaxed text-lg font-medium`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={animationVariants}
        transition={{ delay: 0.1 }}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default SectionHeading;
