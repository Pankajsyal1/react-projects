import { memo, useEffect, useState } from "react";
import clickSound from "../mp3/ClickSound.m4a";

type WorkoutOption = {
  name: string;
  numExercises: number;
};

type CalculatorProps = {
  workouts: WorkoutOption[];
  allowSound: boolean;
};

function Calculator({ workouts, allowSound }: CalculatorProps) {
  const [number, setNumber] = useState(workouts[0].numExercises);
  const [sets, setSets] = useState(3);
  const [speed, setSpeed] = useState(90);
  const [durationBreak, setDurationBreak] = useState(5);

  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setDuration((number * sets * speed) / 60 + (sets - 1) * durationBreak);
  }, [number, sets, speed, durationBreak]);

  useEffect(() => {
    if (!allowSound) return;
    const sound = new Audio(clickSound);
    sound.play();
  }, [duration, allowSound]);

  useEffect(() => {
    document.title = `Your ${number}-exercise workout`;
  }, [number, duration, sets]);

  const mins = Math.floor(duration);
  let seconds = Math.round((duration - mins) * 60);
  if (seconds === 60) seconds = 0;

  function handleInc() {
    setDuration((current) => Math.floor(current) + 1);
  }

  function handleDec() {
    setDuration((current) => (current > 1 ? Math.ceil(current) - 1 : 0));
  }

  return (
    <>
      <form className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <label className="text-lg font-semibold text-slate-800 sm:w-56">
            Type of workout
          </label>
          <select
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-base font-semibold text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-200 sm:w-auto"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
          >
            {workouts.map((workout) => (
              <option value={workout.numExercises} key={workout.name}>
                {workout.name} ({workout.numExercises} exercises)
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <label className="text-lg font-semibold text-slate-800 sm:w-56">
            How many sets?
          </label>
          <input
            className="w-full accent-slate-900"
            type="range"
            min="1"
            max="5"
            value={sets}
            onChange={(e) => setSets(Number(e.target.value))}
          />
          <span className="text-base font-semibold text-slate-700">{sets}</span>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <label className="text-lg font-semibold text-slate-800 sm:w-56">
            How fast are you?
          </label>
          <input
            className="w-full accent-slate-900"
            type="range"
            min="30"
            max="180"
            step="30"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
          <span className="text-base font-semibold text-slate-700">
            {speed} sec/exercise
          </span>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <label className="text-lg font-semibold text-slate-800 sm:w-56">
            Break length
          </label>
          <input
            className="w-full accent-slate-900"
            type="range"
            min="1"
            max="10"
            value={durationBreak}
            onChange={(e) => setDurationBreak(Number(e.target.value))}
          />
          <span className="text-base font-semibold text-slate-700">
            {durationBreak} minutes/break
          </span>
        </div>
      </form>
      <section className="mt-8 flex items-center justify-center gap-6 rounded-2xl bg-slate-900/5 px-6 py-4">
        <button
          className="h-10 w-10 rounded-full bg-slate-900 text-lg font-black text-white shadow-lg shadow-slate-900/30 transition hover:-translate-y-0.5"
          onClick={handleDec}
          type="button"
        >
          -
        </button>
        <p className="text-[clamp(2.4rem,6vw,3.6rem)] font-black tracking-[0.08em] text-slate-900">
          {mins < 10 && "0"}
          {mins}:{seconds < 10 && "0"}
          {seconds}
        </p>
        <button
          className="h-10 w-10 rounded-full bg-slate-900 text-lg font-black text-white shadow-lg shadow-slate-900/30 transition hover:-translate-y-0.5"
          onClick={handleInc}
          type="button"
        >
          +
        </button>
      </section>
    </>
  );
}

export default memo(Calculator);
