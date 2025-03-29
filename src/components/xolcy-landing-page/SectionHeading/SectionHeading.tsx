import React from 'react';
import { motion } from 'framer-motion';
import './SectionHeading.scss';

interface SectionHeadingProps {
  subTitle?: string;
  title: string;
  description: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  marginBottom?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ subTitle, title, description, align = 'left', marginBottom = 'mb-5' }) => {
  const animationVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className={`text-${align}`}>
      <motion.p
        className='subtitle-text text-uppercase fw-medium mb-1'
        initial="hiddenLeft"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} 
        variants={animationVariants}
      >
        {subTitle}
      </motion.p>

      <motion.h2
        className="mb-2 fw-semibold"
        initial="hiddenRight"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} 
        variants={animationVariants}
      >
        {title}
      </motion.h2>

      <motion.p
        className={`${marginBottom} text-muted`}
        initial="hiddenLeft"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} 
        variants={animationVariants}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default SectionHeading;
