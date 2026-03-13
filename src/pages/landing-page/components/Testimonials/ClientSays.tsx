import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import ClientCard, { ClientCardProps } from './ClientCard';
import SectionHeading from '../SectionHeading';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials: ClientCardProps[] = [
  {
    id: 1,
    name: 'Ruben Reed',
    job: 'Product Designer',
    quote:
      'The attention to detail and creative approach Xolcy brought to our project was truly transformative. They didn\'t just build a website; they crafted a brand experience.',
  },
  {
    id: 2,
    name: 'Eva Pearce',
    job: 'Lead Developer',
    quote:
      'Working with Xolcy was a seamless experience. Their technical expertise coupled with their modern design aesthetic resulted in a product that exceeds all our benchmarks.',
  },
  {
    id: 3,
    name: 'Marcus Thorne',
    job: 'Marketing Director',
    quote:
      'Our conversion rates spiked by 40% within the first month of launching our new landing page. Xolcy understands the intersection of design and business performance.',
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    job: 'CEO @ TechFlow',
    quote:
      'Efficiency, elegance, and excellence. That\'s what you get when you partner with Xolcy. They are truly at the forefront of modern web design.',
  },
];

const ClientSays = () => {
  return (
    <section id="testimonials" className="py-28 bg-[#fafafc]/90 backdrop-blur-sm relative overflow-hidden">
      {/* Top Wave */}
      <div className="wave-divider wave-divider-top">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-cross opacity-30 pointer-events-none" />

      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[5%] w-20 h-20 border-2 border-primary/10 rounded-3xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] right-[8%] w-14 h-14 bg-purple-400/10 rounded-full hidden lg:block"
      />

      {/* Large Decorative Quote */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary pointer-events-none hidden lg:block"
      >
        <FaQuoteLeft size={400} />
      </motion.div>

      {/* Gradient Blurs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-16 text-center"
        >
          <SectionHeading
            subTitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it. We've helped hundreds of businesses redefine their digital presence."
            align="center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !w-3 !h-3 !bg-primary/20 !opacity-100 transition-all duration-300',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary !w-10 !rounded-full'
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 30 },
              1280: { slidesPerView: 2, spaceBetween: 40 }
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto py-4">
                <ClientCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="wave-divider wave-divider-bottom">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default ClientSays;
