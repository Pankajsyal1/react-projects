import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();

  return (
    <header className="mb-8 grid grid-cols-2 items-center gap-3 text-lg text-slate-300">
      <progress
        className="col-span-2 h-3 w-full accent-teal-500"
        max={numQuestions}
        value={index + Number(answer !== null)}
      />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
