import { useEffect, useState } from 'react';
import { testimonials } from './data/testimonials';
import AppHeading from '../../components/common/AppHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';

const TestimonialsApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevAction = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }
  const handleNextAction = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextAction();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='max-w-3xl mx-auto px-6 pt-32 pb-20'>
      <AppHeading sno={7} title="Voice of Excellence" />

      <div className='mt-12 relative h-[400px] flex items-center justify-center'>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='bg-white/70 backdrop-blur-xl border border-dark/5 p-12 lg:p-16 rounded-[4rem] shadow-2xl shadow-dark/5 text-center'
          >
            <div className='flex justify-center mb-10'>
              <div className='w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center text-primary'>
                <FiMessageSquare size={32} />
              </div>
            </div>

            <p className='text-2xl lg:text-3xl font-black text-dark tracking-tighter leading-tight italic'>
              "{testimonials[currentIndex].quote}"
            </p>

            <div className='mt-10'>
              <div className='h-[1px] w-12 bg-primary mx-auto mb-6' />
              <h6 className='text-[10px] font-black uppercase tracking-[0.3em] text-dark'>
                {testimonials[currentIndex].author}
              </h6>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Global Progress Dots */}
        <div className='absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2'>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${i === currentIndex ? 'w-8 bg-dark' : 'w-1.5 bg-dark/10'
                }`}
            />
          ))}
        </div>
      </div>

      <div className='flex justify-center gap-4 mt-24'>
        <button
          className='w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-dark/5 text-dark hover:bg-dark hover:text-white transition-all shadow-sm'
          onClick={handlePrevAction}
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          className='w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-dark/5 text-dark hover:bg-dark hover:text-white transition-all shadow-sm'
          onClick={handleNextAction}
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default TestimonialsApp;