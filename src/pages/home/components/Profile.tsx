import InfoCard from '../../../components/about/InfoCard';
import { motion } from 'framer-motion';

const Profile = () => {
  const developerInfo = [
    "Frontend Developer & Interface Designer",
    "Expert in HTML5, CSS3, TailwindCSS, & SASS",
    "Proficient in React.js, Vue.js, & Next.js",
    "Creative UI/UX Design with Figma & Adobe XD",
    "Modular Architecture & API Integration",
    "Committed to clean code & performance",
  ];

  const additionalInfo = [
    "Building high-performance, responsive web apps",
    "Expert in modern UI/UX design principles",
    "Strong knowledge of state management (Redux)",
    "SEO-optimized and accessible frontends",
    "Agile mindset & collaborative team player",
    "100% commitment to project excellence",
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className='mb-24 text-center relative'>
        {/* Floating Decorative Shapes */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[5%] w-20 h-20 border-2 border-primary/20 rounded-3xl hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[3%] w-14 h-14 bg-purple-400/20 rounded-full hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-[8%] w-10 h-10 bg-blue-400/15 rotate-45 hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[15%] w-6 h-6 bg-pink-400/20 rounded-full hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-[12%] w-12 h-12 border-2 border-blue-400/15 rounded-xl hidden lg:block"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center relative z-10'
        >
          {/* Badge */}
          <motion.span 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-primary uppercase font-black tracking-[0.3em] text-[10px] mb-8 bg-gradient-to-r from-primary/10 via-purple-400/5 to-blue-400/10 px-6 py-2.5 rounded-full border border-primary/15 shadow-lg shadow-primary/5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Available for Work
          </motion.span>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-black text-dark leading-tight tracking-tighter mb-8 flex flex-wrap items-center justify-center gap-x-3"
          >
            Hi! I&apos;m
            <span className="text-gradient italic font-serif relative">
              Pankaj
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-400 to-blue-400 rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              />
            </span>
            <motion.img
              src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
              width="50"
              alt="Hand wave"
              className="shrink-0"
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base md:text-lg text-secondary font-medium mb-10"
          >
            Creative Frontend Developer & UI/UX Enthusiast
          </motion.p>

          {/* Tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className='flex flex-wrap justify-center gap-3 mb-12'
          >
            {[
              { label: "Frontend Developer", gradient: "from-blue-500 to-indigo-600", icon: "💻" },
              { label: "UI/UX Designer", gradient: "from-purple-500 to-pink-600", icon: "🎨" },
              { label: "4+ Years Experience", gradient: "from-emerald-500 to-teal-600", icon: "⭐" },
              { label: "Blogger", gradient: "from-orange-500 to-red-600", icon: "✍️" }
            ].map((tag, idx) => (
              <motion.span 
                key={idx} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.05 }}
                className={`group px-5 py-3 rounded-2xl bg-gradient-to-r ${tag.gradient} text-white font-bold text-xs uppercase tracking-widest shadow-xl cursor-default flex items-center gap-2`}
              >
                <span className="text-base group-hover:scale-125 transition-transform">{tag.icon}</span>
                {tag.label}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-secondary font-medium max-w-3xl leading-relaxed mx-auto"
          >
            Passionate about building digital products that combine <span className="text-dark font-bold">stunning aesthetics</span> with <span className="text-dark font-bold">seamless functionality</span>. I specialize in crafting high-end frontend experiences using modern technologies that users love.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <a 
              href="#contact"
              className="btn-shimmer bg-gradient-to-r from-primary to-purple-500 text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 no-underline"
            >
              Get in Touch
              <span>→</span>
            </a>
            <a 
              href="https://pankaj-portfolio-reactjs.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest text-dark hover:text-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline"
            >
              View Portfolio
            </a>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center gap-12 lg:gap-16 mt-16 pt-12 border-t border-dark/5"
          >
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
              { value: "4+", label: "Years Experience" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="text-center cursor-default"
              >
                <h3 className="text-3xl md:text-4xl font-black text-gradient tracking-tighter">{stat.value}</h3>
                <p className="text-secondary text-xs font-bold uppercase tracking-widest mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Info Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <InfoCard 
            title="Skills & Technical Expertise" 
            points={developerInfo}
            icon="⚡"
            gradient="from-blue-400 to-indigo-500"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <InfoCard 
            title="Professional Philosophy" 
            points={additionalInfo}
            icon="💡"
            gradient="from-purple-400 to-pink-500"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
