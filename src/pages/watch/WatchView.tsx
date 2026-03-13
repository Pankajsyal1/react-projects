import React, { useEffect, useState } from "react";

const WatchView = () => {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="min-h-[70vh] w-full bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-3xl rounded-[2.5rem] border border-white/10 bg-white/5 p-6 sm:p-10 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.9)] backdrop-blur">
        <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] text-white/60">
          Digital Clock
        </p>
        <h1 className="mt-6 whitespace-nowrap text-[clamp(2.4rem,8vw,4.2rem)] font-black tracking-[0.12em] text-white">
          <span className="inline-block min-w-[16ch] text-center tabular-nums">
            {time.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            })}
          </span>
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-white/70">
          <span className="rounded-full bg-white/10 px-4 py-2">
            {time.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "2-digit",
            })}
          </span>
          <span className="rounded-full bg-white/10 px-4 py-2">
            {time.getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WatchView;
