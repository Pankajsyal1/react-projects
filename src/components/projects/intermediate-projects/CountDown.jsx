import React from "react";

const CountDown = () => {
  const [count, setCount] = React.useState(1000.0);
  const [isRunning, setIsRunning] = React.useState(false);
  const timerRef = React.useRef(null);

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
    setCount(1000.0);
  };

  React.useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white shadow-xl rounded-xl p-8 flex flex-col items-center gap-6 min-w-[320px]">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">CountDown</h1>
        <div className="text-5xl font-mono text-purple-600 mb-4">
          {count.toFixed(2)}
        </div>
        <div className="flex gap-4">
          <button
            onClick={startTimer}
            className="px-6 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
          >
            Start
          </button>
          <button
            onClick={stopTimer}
            className="px-6 py-2 bg-yellow-400 text-white rounded-lg shadow hover:bg-yellow-500 transition"
          >
            Pause
          </button>
          <button
            onClick={resetTimer}
            className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
