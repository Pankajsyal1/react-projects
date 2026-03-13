import React from 'react';
import { motion } from 'framer-motion';
import ServicesCard from './ServicesCard';
import SectionHeading from '../SectionHeading';
import {
  HiOutlineSupport,
  HiOutlineChartBar,
  HiOutlineCube,
  HiOutlineLightningBolt,
  HiOutlineDeviceMobile,
  HiOutlineShieldCheck
} from 'react-icons/hi';

const servicesData = [
  {
    icon: <HiOutlineSupport />,
    title: 'Awesome Support',
    description: 'Round-the-clock dedicated support team to ensure your business operations never miss a beat.',
  },
  {
    icon: <HiOutlineChartBar />,
    title: 'Dynamic Growth',
    description: 'Data-driven strategies designed to scale your brand presence and increase market share effectively.',
  },
  {
    icon: <HiOutlineCube />,
    title: 'Branding Identity',
    description: 'We craft unique visual identities that resonate with your audience and build lasting brand loyalty.',
  },
  {
    icon: <HiOutlineLightningBolt />,
    title: 'Solutions Business',
    description: 'Innovative business solutions that streamline workflows and enhance overall productivity.',
  },
  {
    icon: <HiOutlineDeviceMobile />,
    title: 'Digital Design',
    description: 'Cutting-edge digital designs that prioritize user experience and aesthetic excellence across all platforms.',
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: 'Goal Business',
    description: 'Security-first approach to business goals, ensuring your data and assets are always protected.',
  },
];

const OurServices: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="services" className="py-28 bg-[#fafafc]/90 backdrop-blur-sm relative overflow-hidden">
      {/* Top Wave Divider */}
      <div className="wave-divider wave-divider-top">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="white"
          />
        </svg>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pattern-cross opacity-40 pointer-events-none" />
      
      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[8%] w-24 h-24 border-2 border-primary/10 rounded-3xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[5%] w-16 h-16 bg-blue-400/10 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[50%] left-[3%] w-12 h-12 bg-purple-400/10 rotate-45 hidden lg:block"
      />

      {/* Gradient Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex justify-center mb-20'
        >
          <SectionHeading
            subTitle="Our Expertise"
            title='Services We Provide'
            description='We combine creativity with technical excellence to deliver category-leading brand experiences that add real value to your business.'
            align='center'
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {servicesData.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ServicesCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="wave-divider wave-divider-bottom">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,googled906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default OurServices;
