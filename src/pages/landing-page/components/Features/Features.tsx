import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import FeatureImage from "../../images/index.jpg";
import { HiOutlineLightBulb, HiOutlineCog, HiOutlineSparkles, HiOutlineGlobe } from 'react-icons/hi';
import Arrow from '../icons/Arrow';

const Features: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  const features = [
    {
      icon: <HiOutlineLightBulb className="text-2xl" />,
      title: 'Strategy Solution',
      desc: 'Expert guidance to navigate complex business challenges and achieve your goals.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <HiOutlineCog className="text-2xl" />,
      title: 'Easy to Customize',
      desc: 'Flexible solutions tailored to fit your unique business requirements and brand identity.',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: <HiOutlineSparkles className="text-2xl" />,
      title: 'Modern Design',
      desc: 'Cutting-edge aesthetics that capture attention and create memorable experiences.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: <HiOutlineGlobe className="text-2xl" />,
      title: 'Global Reach',
      desc: 'Scale your business worldwide with our proven international expansion strategies.',
      color: 'from-green-400 to-teal-500'
    }
  ];

  return (
    <section id="features" className="py-28 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-diagonal opacity-50 pointer-events-none" />

      {/* Decorative Blob Shapes */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none"
      />

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] w-16 h-16 border-2 border-primary/15 rounded-2xl hidden xl:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] left-[8%] w-10 h-10 bg-purple-400/15 rounded-full hidden xl:block"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Decorative accent */}
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-gradient-to-br from-primary/20 to-purple-400/10 rounded-full blur-3xl animate-pulse-glow" />

              {/* Image Frame with Border */}
              <div className="relative z-10 p-2 rounded-[3rem] bg-gradient-to-br from-primary/20 via-purple-400/10 to-blue-400/20">
                <div className="rounded-[2.7rem] overflow-hidden shadow-2xl shadow-dark/15">
                  <img 
                    src={FeatureImage} 
                    className="w-full h-full object-cover aspect-[4/5] transition-transform duration-700 group-hover:scale-105" 
                    alt="Features illustration" 
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 lg:-right-8 bottom-24 glass p-6 lg:p-8 rounded-3xl shadow-2xl z-20 flex flex-col items-center"
              >
                <span className="text-4xl lg:text-5xl font-black text-gradient tracking-tighter mb-1">200+</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Global Users</span>
              </motion.div>

              {/* Secondary Floating Element */}
              <motion.div
                animate={{ y: [0, 12, 0], x: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 lg:-left-6 top-20 glass p-4 rounded-xl shadow-xl z-20 hidden md:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 text-lg">
                  ✓
                </div>
                <span className="font-bold text-dark text-sm">Quality First</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionHeading
                subTitle="Why Choose Us"
                title="Modern & Powerful Interface for Your Business"
                description="We empower businesses with cutting-edge tools and intuitive design systems that drive engagement and simplify complex operations."
                marginBottom="mb-12"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="group glass-card p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-black text-dark mb-2 tracking-tight group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-secondary font-medium text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4"
              >
                <button className="btn-shimmer bg-dark text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-primary transition-all duration-300 shadow-xl shadow-dark/10 hover:shadow-primary/30 active:scale-95 border-none cursor-pointer group">
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform">
                    <Arrow />
                  </span>
                </button>
                <button className="glass-card px-10 py-5 rounded-2xl font-bold text-dark hover:text-primary transition-all duration-300 active:scale-95 cursor-pointer">
                  View Portfolio
                </button>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
