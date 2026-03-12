import { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const AccordionItem = ({ title, content, idx }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-white/70 backdrop-blur-xl border border-dark/5 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-dark/5 transition-all duration-300">
      <button
        onClick={() => setIsActive(!isActive)}
        className="w-full flex items-center justify-between p-8 text-left focus:outline-none group"
      >
        <div className="flex items-center gap-6">
          <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-dark/5 text-secondary text-[10px] font-black uppercase tracking-widest group-hover:bg-dark group-hover:text-white transition-all">
            {idx + 1}
          </span>
          <h3 className="text-xl font-black text-dark tracking-tighter">{title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          className="text-secondary"
        >
          <FiChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-8 pb-8 pt-0 border-t border-dark/5 mt-[-1px]">
              <p className="text-secondary font-bold leading-relaxed pt-6">
                {content}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

AccordionItem.propTypes = {
  idx: PropTypes.number,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default AccordionItem;
