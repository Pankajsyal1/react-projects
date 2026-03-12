import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading/SectionHeading';
import BulletIcon from './BulletIcon';
import Arrow from '../icons/Arrow';

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Essential",
      price: "0",
      frequency: "Month",
      features: [
        "Online Space: 500MB",
        "Bandwidth: 1.5GB",
        "Community Support",
        "No Hidden Fees",
      ],
      isPopular: false,
      gradient: 'from-gray-100 to-gray-50'
    },
    {
      title: "Professional",
      price: "62",
      frequency: "Month",
      features: [
        "Online Space: 2GB",
        "Bandwidth: 10GB",
        "Priority Support",
        "No Hidden Fees",
      ],
      isPopular: true,
      gradient: 'from-primary/5 to-purple-400/5'
    },
    {
      title: "Enterprise",
      price: "299",
      frequency: "Month",
      features: [
        "Unlimited Space",
        "Bandwidth: 50GB",
        "24/7 VIP Support",
        "Custom Feature Set",
      ],
      isPopular: false,
      gradient: 'from-gray-100 to-gray-50'
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
        delay: index * 0.15
      },
    }),
  };

  return (
    <section id="pricing" className="py-28 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-diagonal opacity-40 pointer-events-none" />

      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] w-24 h-24 border-2 border-primary/10 rounded-3xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[15%] right-[8%] w-16 h-16 bg-purple-400/10 rounded-full hidden lg:block"
      />

      {/* Gradient Blurs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-400/5 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-16"
        >
          <SectionHeading
            subTitle="Simple Pricing"
            title="Choose Your Plan"
            description="Transparent pricing models tailored to suit businesses of all sizes. No hidden costs, just pure value."
            align="center"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch pt-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ y: -12, scale: plan.isPopular ? 1.02 : 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative h-full rounded-[2.5rem] flex flex-col group cursor-pointer ${
                plan.isPopular
                  ? 'bg-gradient-to-br from-primary/5 via-purple-400/5 to-blue-400/5 z-10'
                  : 'glass-card'
              }`}
            >
              {/* Popular Badge - Outside overflow */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                  <div className="btn-shimmer bg-gradient-to-r from-primary to-purple-500 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/30">
                    Most Popular
                  </div>
                </div>
              )}
              {/* Animated Border for Popular */}
              {plan.isPopular && (
                <>
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary via-purple-400 to-blue-400 p-[2px]">
                    <div className="w-full h-full rounded-[2.4rem] bg-white" />
                  </div>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-primary via-purple-400 to-blue-400 opacity-20 blur-xl -z-10"
                  />
                </>
              )}

              {/* Content Container */}
              <div className={`relative p-10 lg:p-12 flex flex-col h-full ${plan.isPopular ? 'z-10 pt-12' : ''}`}>

                {/* Plan Title & Price */}
                <div className="mb-10 text-center lg:text-left pt-4">
                  <h3 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">{plan.title}</h3>
                  <div className="flex items-baseline justify-center lg:justify-start">
                    <span className="text-6xl font-black text-dark tracking-tighter">${plan.price}</span>
                    <span className="text-secondary ml-2 font-bold">/{plan.frequency}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-5 mb-10 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <motion.li 
                      key={fIdx} 
                      className="flex items-center gap-4 text-dark font-semibold text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * fIdx, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                        plan.isPopular 
                          ? 'bg-gradient-to-br from-primary to-purple-500 text-white' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        ✓
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 border-none cursor-pointer group/btn hover:-translate-y-1 active:scale-95 ${
                  plan.isPopular
                    ? 'btn-shimmer bg-gradient-to-r from-primary to-purple-500 text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50'
                    : 'bg-dark text-white hover:bg-primary shadow-xl shadow-dark/10'
                }`}>
                  Choose Plan
                  <span className="group-hover/btn:translate-x-1 transition-transform">
                    <Arrow />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
