import { useState } from "react"
import { FiSearch, FiX } from "react-icons/fi";
import AppHeading from "../../components/common/AppHeading";
import { motion, AnimatePresence } from "framer-motion";

const HiddenSearchBarApp = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
      <AppHeading sno={6} title="Intelligent Search" />

      <div className="mt-20 flex flex-col items-center justify-center min-h-[300px] bg-white/70 backdrop-blur-xl border border-dark/5 rounded-[4rem] shadow-2xl shadow-dark/5 p-12 overflow-hidden relative">
        <div className="max-w-md w-full">
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.div
                key="launcher"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="flex flex-col items-center gap-8"
              >
                <button
                  onClick={() => setIsExpanded(true)}
                  className="w-24 h-24 bg-dark text-white rounded-[2rem] flex items-center justify-center shadow-2xl shadow-dark/30 hover:bg-primary hover:scale-105 transition-all duration-300"
                >
                  <FiSearch size={32} />
                </button>
                <div className="text-center space-y-2">
                  <h3 className="text-sm font-black uppercase tracking-widest text-dark">Initiate Lookup</h3>
                  <p className="text-secondary text-xs font-bold italic">Tap the beacon to begin your search journey.</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="searchbar"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative flex items-center"
              >
                <div className="absolute left-6 text-primary">
                  <FiSearch size={20} />
                </div>
                <input
                  autoFocus
                  placeholder="What are you looking for?"
                  className="w-full bg-dark/5 border-none outline-none py-6 pl-16 pr-20 rounded-[2rem] font-bold text-dark text-xl placeholder:text-secondary/50 focus:ring-4 focus:ring-primary/10 transition-all shadow-inner"
                />
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute right-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-dark text-white hover:bg-red-500 hover:scale-95 transition-all shadow-lg"
                >
                  <FiX size={20} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      </div>
    </div>
  )
}

export default HiddenSearchBarApp;