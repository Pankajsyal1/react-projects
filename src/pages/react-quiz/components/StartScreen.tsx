import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="mb-2 text-3xl font-semibold sm:text-4xl">
        Welcome to The React Quiz!
      </h2>
      <h3 className="mb-8 text-xl font-semibold text-slate-300">
        {numQuestions} questions to test your React mastery
      </h3>
      <button
        className="rounded-full border border-slate-700 bg-slate-700 px-6 py-3 text-lg transition hover:bg-slate-800"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
