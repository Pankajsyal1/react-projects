import { useState, useRef, useEffect } from "react";
import AppHeading from "../../common/AppHeading";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay, FiPause, FiRotateCcw } from "react-icons/fi";

const CountDown = () => {
  const [count, setCount] = useState(100.0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev <= 0.01) {
          clearInterval(timerRef.current);
          setIsRunning(false);
          return 0.0;
        }
        return prev - 0.01;
      });
    }, 10);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setCount(100.0);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="max-w-xl mx-auto px-6 pt-32 pb-20">
      <AppHeading sno={10} title="Temporal Engine" />

      <div className="mt-12 flex flex-col items-center space-y-12">
        {/* Main Display */}
        <div className="w-full aspect-square max-w-[400px] bg-white/70 backdrop-blur-xl border border-dark/5 rounded-full shadow-2xl shadow-dark/5 flex flex-col items-center justify-center relative group">
          {/* Progress Ring (Visual Only) */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="48%"
              className="fill-none stroke-dark/5 stroke-[2]"
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="48%"
              className="fill-none stroke-primary stroke-[4]"
              strokeLinecap="round"
              initial={{ pathLength: 1 }}
              animate={{ pathLength: count / 100 }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </svg>

          <div className="text-center relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary mb-4 block">
              Remaining Units
            </span>
            <motion.div
              key={count}
              className="text-8xl font-black text-dark tracking-tighter tabular-nums"
            >
              {count.toFixed(2)}
            </motion.div>
          </div>

          {/* Glowing Accents */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-primary rounded-full blur-[2px] opacity-20" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-primary rounded-full blur-[2px] opacity-20" />
        </div>

        {/* Controls */}
        <div className="flex gap-6">
          <button
            onClick={isRunning ? stopTimer : startTimer}
            className={`w-20 h-20 flex items-center justify-center rounded-[2rem] transition-all duration-500 shadow-xl ${isRunning
                ? "bg-white text-dark border border-dark/5 hover:bg-dark hover:text-white"
                : "bg-dark text-white hover:bg-primary shadow-primary/20"
              }`}
          >
            {isRunning ? <FiPause size={28} /> : <FiPlay size={28} className="ml-1" />}
          </button>

          <button
            onClick={resetTimer}
            className="w-20 h-20 flex items-center justify-center rounded-[2rem] bg-white border border-dark/5 text-dark hover:bg-dark hover:text-white transition-all duration-500 shadow-sm"
          >
            <FiRotateCcw size={28} />
          </button>
        </div>

        <p className="text-[10px] font-black uppercase tracking-widest text-secondary/40">
          Precision Temporal Tracking v2.0
        </p>
      </div>
    </div>
  );
};

export default CountDown;
