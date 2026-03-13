import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  const remaining = secondsRemaining ?? 0;
  const mins = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  if (secondsRemaining === null) return null;

  return (
    <div className="rounded-full border border-slate-700 px-6 py-2 text-base text-slate-300">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
