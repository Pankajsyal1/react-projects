import PropTypes from "prop-types";
import { motion } from 'framer-motion';

const InfoCard = ({ title, points, icon = "◈", gradient = "from-primary to-purple-500" }) => {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full glass-card p-8 lg:p-10 rounded-[2.5rem] group cursor-pointer relative overflow-hidden"
    >
      {/* Background Pattern on Hover */}
      <div className="absolute inset-0 pattern-dots-light opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
      
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-[1px] rounded-[2.5rem] bg-white/95" />
        <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${gradient} opacity-20`} />
      </div>

      {/* Decorative Corner Accent */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-15 transition-opacity duration-500 pointer-events-none`} />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <motion.div 
            whileHover={{ rotate: 12, scale: 1.1 }}
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}
          >
            {icon}
          </motion.div>
          <div>
            <h3 className="text-lg lg:text-xl font-black text-dark tracking-tight group-hover:text-gradient transition-colors">
              {title}
            </h3>
            <div className={`h-0.5 w-12 bg-gradient-to-r ${gradient} rounded-full mt-1 group-hover:w-full transition-all duration-500`} />
          </div>
        </div>

        {/* Points List */}
        <ul className="space-y-4 p-0 list-none">
          {points.map((point, index) => (
            <motion.li 
              key={index} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 group/item"
            >
              {/* Checkmark Icon */}
              <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-[10px] mt-0.5 shrink-0 shadow-md group-hover/item:scale-110 group-hover/item:shadow-lg transition-all duration-300`}>
                ✓
              </div>
              {/* Text - Darker for better accessibility */}
              <span className="text-dark/90 font-semibold text-[15px] leading-relaxed group-hover/item:text-dark transition-colors">
                {point}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Bottom Accent */}
        <div className="mt-8 pt-6 border-t border-dark/5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-dark/40 group-hover:text-primary transition-colors">
              {points.length} Key Points
            </span>
            <motion.div 
              whileHover={{ x: 5 }}
              className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-sm flex items-center gap-1"
            >
              Learn More <span>→</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

InfoCard.propTypes = { 
  title: PropTypes.string, 
  points: PropTypes.array,
  icon: PropTypes.string,
  gradient: PropTypes.string
}

export default InfoCard;
