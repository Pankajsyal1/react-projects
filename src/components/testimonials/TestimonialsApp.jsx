import { useEffect, useState } from 'react';
import { testimonials } from '../../data/testimonials';
import AppHeading from '../AppHeading';

const TestimonialsApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevAction = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
      // setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }
  }
  const handleNextAction = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      // setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    // Cleanup interval to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

  // console.log((currentIndex + testimonials.length - 1) % testimonials.length)
  return (
    <div>
      <AppHeading sno={7} title={"Testimonial App"} />
      <div className='w-[450px] mx-auto text-center bg-white text-black p-8 rounded-md'>
        <p>{testimonials[currentIndex].quote}</p>
        <h6>{testimonials[currentIndex].author}</h6>
      </div>
      <div className='text-center my-4'>
        <p>{currentIndex + 1}/{testimonials.length}</p>
      </div>
      <div className='flex justify-center gap-3'>
        <button className={`${currentIndex === 0 ? 'opacity-50' : ''}`} disabled={currentIndex === 0} onClick={handlePrevAction}>Prev</button>
        <button className={`${currentIndex == testimonials.length - 1 ? 'opacity-50' : ''}`} disabled={currentIndex == testimonials.length - 1} onClick={handleNextAction}>Next</button>
      </div>
    </div>
  )
}

export default TestimonialsApp