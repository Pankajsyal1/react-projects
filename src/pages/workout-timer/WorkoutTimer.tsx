import { useEffect, useMemo, useState } from "react";
import Calculator from "./components/Calculator";
import ToggleSounds from "./components/ToggleSounds";

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function WorkoutTimer() {
  const [allowSound, setAllowSound] = useState(true);
  const [time, setTime] = useState(formatTime(new Date()));

  const partOfDay = time.slice(-2);

  const workouts = useMemo(() => {
    return [
      {
        name: "Full-body workout",
        numExercises: partOfDay === "AM" ? 9 : 8,
      },
      {
        name: "Arms + Legs",
        numExercises: 6,
      },
      {
        name: "Arms only",
        numExercises: 3,
      },
      {
        name: "Legs only",
        numExercises: 4,
      },
      {
        name: "Core only",
        numExercises: partOfDay === "AM" ? 5 : 4,
      },
    ];
  }, [partOfDay]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-slate-100 to-indigo-200 px-4 py-10 sm:px-6">
      <main className="relative mx-auto w-full max-w-4xl rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.6)] backdrop-blur sm:p-10">
        <h1 className="text-center text-[clamp(2.2rem,6vw,4.2rem)] font-black uppercase tracking-[0.12em] text-slate-900">
          Workout Timer
        </h1>
        <time className="mx-auto mt-4 block w-full max-w-md rounded-2xl bg-slate-900/5 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.3em] text-slate-600">
          For your workout on {time}
        </time>

        <ToggleSounds allowSound={allowSound} setAllowSound={setAllowSound} />
        <Calculator workouts={workouts} allowSound={allowSound} />
      </main>
    </div>
  );
}

export default WorkoutTimer;
