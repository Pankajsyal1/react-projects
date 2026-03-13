import { useState } from "react";
import AppHeading from "../../components/common/AppHeading";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiRotateCcw, FiRefreshCw } from "react-icons/fi";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  const handleAmountChange = (e) => {
    const val = parseInt(e.target.value);
    setAmount(isNaN(val) ? 0 : val);
  };

  return (
    <div className="max-w-xl mx-auto px-6 pt-32 pb-20">
      <AppHeading sno={1} title="Metric Quantizer" />

      <div className="mt-12 space-y-8 flex flex-col items-center">
        {/* Count Display */}
        <div className="w-full bg-white/70 backdrop-blur-xl border border-dark/5 p-16 rounded-[4rem] shadow-2xl shadow-dark/5 text-center relative overflow-hidden group">
          <div className="absolute top-6 left-1/2 -translate-x-1/2">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Current Magnitude</span>
          </div>

          <motion.h2
            key={count}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="text-9xl font-black text-dark tracking-tighter"
          >
            {count}
          </motion.h2>

          {/* Decorative Scale */}
          <div className="absolute bottom-4 left-0 w-full px-12 flex justify-between opacity-10">
            {[...Array(11)].map((_, i) => (
              <div key={i} className={`w-[2px] bg-dark ${i % 5 === 0 ? 'h-6' : 'h-3'}`} />
            ))}
          </div>
        </div>

        {/* Controls Container */}
        <div className="w-full space-y-6">
          <div className="relative group">
            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-widest text-secondary pointer-events-none group-focus-within:text-primary transition-colors">Step</span>
            <input
              className="w-full bg-white border border-dark/5 outline-none py-5 pl-24 pr-8 rounded-[1.5rem] font-black text-dark text-lg focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
              type="number"
              placeholder="Step Amount"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <button
              onClick={() => setCount(count + amount)}
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-dark text-white rounded-[2rem] hover:bg-primary transition-all shadow-xl shadow-dark/10"
            >
              <FiPlus size={24} />
              <span className="text-[10px] font-black uppercase tracking-widest">Incr</span>
            </button>

            <button
              disabled={count - amount < 0}
              onClick={() => setCount(prev => Math.max(0, prev - amount))}
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-white border border-dark/5 text-dark rounded-[2rem] hover:bg-dark hover:text-white transition-all shadow-sm disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <FiMinus size={24} />
              <span className="text-[10px] font-black uppercase tracking-widest">Decr</span>
            </button>

            <button
              onClick={() => setCount(0)}
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-white border border-dark/5 text-dark rounded-[2rem] hover:bg-dark hover:text-white transition-all shadow-sm"
            >
              <FiRotateCcw size={24} />
              <span className="text-[10px] font-black uppercase tracking-widest">Clear</span>
            </button>

            <button
              onClick={() => setAmount(1)}
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-white border border-dark/5 text-dark rounded-[2rem] hover:bg-dark hover:text-white transition-all shadow-sm"
            >
              <FiRefreshCw size={24} />
              <span className="text-[10px] font-black uppercase tracking-widest">Reset</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CounterApp;