import { motion } from 'framer-motion';

const TechStacks = () => {
  const categories = [
    {
      title: "Design",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
      gradient: "from-pink-400 to-rose-500",
      icon: "🎨"
    },
    {
      title: "Frontend Core",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Sass"],
      gradient: "from-orange-400 to-amber-500",
      icon: "⚡"
    },
    {
      title: "Frameworks & Libs",
      skills: ["React.js", "Vue.js", "Next.js", "Nuxt.js", "Angular", "Svelte"],
      gradient: "from-blue-400 to-indigo-500",
      icon: "🚀"
    },
    {
      title: "Styling",
      skills: ["TailwindCSS", "Bootstrap", "Ant Design", "Motion"],
      gradient: "from-emerald-400 to-teal-500",
      icon: "✨"
    }
  ];

  return (
    <div className="space-y-12 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card p-6 lg:p-8 rounded-[2rem] group cursor-pointer relative overflow-hidden"
          >
            {/* Background Pattern on Hover */}
            <div className="absolute inset-0 pattern-dots-light opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
            
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-[1px] rounded-[2rem] bg-white/95" />
              <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${cat.gradient} opacity-20`} />
            </div>

            <div className="relative z-10">
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  whileHover={{ rotate: 12 }}
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-white text-lg shadow-lg`}
                >
                  {cat.icon}
                </motion.div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-dark group-hover:text-gradient transition-colors">
                  {cat.title}
                </h4>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: sIdx * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 rounded-lg bg-white border border-dark/5 text-dark font-bold text-[10px] uppercase tracking-wider hover:bg-primary hover:text-white hover:border-primary transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Visual Badge Flow */}
      <div className="overflow-hidden relative">
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex gap-4 pt-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
        >
          {[...badges, ...badges].map((badge, index) => (
            <img 
              key={index} 
              src={badge.src} 
              alt={badge.alt} 
              className="h-6 object-contain shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" 
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// JSON array containing badge details
const badges = [
  { src: "https://img.shields.io/badge/Photoshop-31A8FF?style=for-the-badge&logo=adobe-photoshop&logoColor=white", alt: "photoshop" },
  { src: "https://img.shields.io/badge/Illustrator-FF9A00?style=for-the-badge&logo=adobe-illustrator&logoColor=white", alt: "illustrator" },
  { src: "https://img.shields.io/badge/Adobe%20XD-FF9A00?style=for-the-badge&logo=adobe-xd&logoColor=white", alt: "adobe xd" },
  { src: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white", alt: "figma" },
  { src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white", alt: "html5" },
  { src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white", alt: "css3" },
  { src: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white", alt: "bootstrap" },
  { src: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white", alt: "sass" },
  { src: "https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white", alt: "tailwindcss" },
  { src: "https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white", alt: "jquery" },
  { src: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black", alt: "javascript" },
  { src: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white", alt: "typescript" },
  { src: "https://img.shields.io/badge/Git-F44D27?style=for-the-badge&logo=git&logoColor=white", alt: "git" },
  { src: "https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white", alt: "vuejs" },
  { src: "https://img.shields.io/badge/Nuxt.js-00C58E?style=for-the-badge&logo=nuxt.js&logoColor=white", alt: "nuxtjs" },
  { src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=white", alt: "reactjs" },
  { src: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white", alt: "nextjs" },
  { src: "https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white", alt: "redux" },
  { src: "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white", alt: "angular" },
];

export default TechStacks;