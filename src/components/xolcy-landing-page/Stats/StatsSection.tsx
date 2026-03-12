import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { HiOutlineRocketLaunch, HiOutlineTrophy, HiOutlineUserGroup, HiOutlineGlobeAlt } from 'react-icons/hi2';

const StatsSection = () => {
  const stats = [
    {
      end: 2570,
      label: 'Projects Done',
      icon: <HiOutlineRocketLaunch />,
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      end: 300,
      label: 'Awards Won',
      icon: <HiOutlineTrophy />,
      gradient: 'from-amber-400 to-orange-500'
    },
    {
      end: 4500,
      label: 'Happy Clients',
      icon: <HiOutlineUserGroup />,
      gradient: 'from-emerald-400 to-teal-500'
    },
    {
      end: 270,
      label: 'Global Reached',
      icon: <HiOutlineGlobeAlt />,
      gradient: 'from-purple-400 to-pink-500'
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-dark gradient-mesh" />

      {/* Animated Background Shapes */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.12, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-purple-500 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Floating Particles */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[15%] w-3 h-3 bg-primary/40 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] right-[20%] w-2 h-2 bg-blue-400/40 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] left-[25%] w-4 h-4 bg-purple-400/30 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, 90, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[10%] w-5 h-5 border border-white/10 rounded hidden lg:block"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter">
            Numbers That <span className="text-gradient">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group flex flex-col items-center text-center"
            >
              {/* Icon Container with Glow */}
              <div className="relative mb-6">
                <motion.div
                  whileHover={{ rotate: -6 }}
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-3xl text-white shadow-2xl group-hover:shadow-[0_20px_40px_-10px_rgba(109,98,252,0.4)] transition-all duration-500`}
                >
                  {stat.icon}
                </motion.div>
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.gradient} blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 -z-10`} />
              </div>

              {/* Counter with Glow */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 tracking-tighter group-hover:text-glow transition-all">
                <CountUp 
                  className='text-white'  
                  end={stat.end} 
                  duration={3} 
                  enableScrollSpy 
                  scrollSpyOnce 
                  separator=","
                />
                <span className="text-gradient">+</span>
              </h2>

              <p className="text-white/60 font-bold uppercase tracking-[0.2em] text-[10px] group-hover:text-white/80 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
