import { useState } from "react";
import AppHeading from "../../components/common/AppHeading";
import { motion } from "framer-motion";

const CalculatorApp = () => {
  const [inputValue, setInputValue] = useState('')

  const handleClear = () => setInputValue('');
  const handleDisplay = (value) => setInputValue(prev => prev + value);
  const handleCalculate = () => {
    try {
      // Basic sanitization and evaluation
      setInputValue(String(eval(inputValue.replace(/[^-+/*%().0-9]/g, ''))));
    } catch (err) {
      setInputValue("Error");
    }
  }

  const btnClass = "w-full aspect-square flex items-center justify-center rounded-3xl text-xl font-black transition-all duration-200 shadow-sm border border-dark/5";
  const numBtn = `${btnClass} bg-white text-dark hover:bg-dark hover:text-white`;
  const opBtn = `${btnClass} bg-dark/5 text-dark hover:bg-dark hover:text-white`;
  const actionBtn = `${btnClass} bg-primary text-white shadow-xl shadow-primary/20`;

  return (
    <div className="max-w-md mx-auto px-6 pt-32 pb-20">
      <AppHeading sno={4} title="Precision Compute" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 bg-white/70 backdrop-blur-xl border border-dark/5 p-8 rounded-[3rem] shadow-2xl shadow-dark/10"
      >
        {/* Display */}
        <div className="relative mb-8 bg-dark p-8 rounded-[2rem] shadow-inner overflow-hidden min-h-[140px] flex flex-col justify-end items-end">
          <div className="absolute top-4 left-6">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Result</span>
          </div>
          <motion.div
            key={inputValue}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white text-5xl font-black tracking-tighter truncate w-full text-right"
          >
            {inputValue || "0"}
          </motion.div>
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-4 gap-4">
          <button className={`${btnClass} bg-red-50 text-red-500 hover:bg-red-500 hover:text-white`} onClick={handleClear}>C</button>
          <button className={opBtn} onClick={() => handleDisplay('(')}>(</button>
          <button className={opBtn} onClick={() => handleDisplay(')')}>)</button>
          <button className={opBtn} onClick={() => handleDisplay('/')}>÷</button>

          {[7, 8, 9].map(n => <button key={n} className={numBtn} onClick={() => handleDisplay(n)}>{n}</button>)}
          <button className={opBtn} onClick={() => handleDisplay('*')}>×</button>

          {[4, 5, 6].map(n => <button key={n} className={numBtn} onClick={() => handleDisplay(n)}>{n}</button>)}
          <button className={opBtn} onClick={() => handleDisplay('-')}>−</button>

          {[1, 2, 3].map(n => <button key={n} className={numBtn} onClick={() => handleDisplay(n)}>{n}</button>)}
          <button className={opBtn} onClick={() => handleDisplay('+')}>+</button>

          <button className={numBtn} onClick={() => handleDisplay('0')}>0</button>
          <button className={numBtn} onClick={() => handleDisplay('.')}>.</button>
          <button className={`${btnClass} col-span-2 bg-dark text-white hover:bg-primary shadow-xl shadow-dark/20`} onClick={handleCalculate}>=</button>
        </div>
      </motion.div>
    </div>
  )
}

export default CalculatorApp;