import { useQuiz, type Question } from "../contexts/QuizContext";

type OptionsProps = {
  question: Question;
};

function Options({ question }: OptionsProps) {
  const { dispatch, answer } = useQuiz();

  const hasAnswered = answer !== null;

  return (
    <div className="mb-8 flex flex-col gap-3">
      {question.options.map((option, index) => (
        <button
          className={`w-full rounded-full border border-slate-700 bg-slate-700 px-6 py-3 text-left text-lg transition ${
            hasAnswered ? "cursor-not-allowed" : "hover:bg-slate-800 hover:translate-x-2"
          } ${index === answer ? "translate-x-4" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "border-teal-500 bg-teal-500 text-slate-50"
                : "border-amber-400 bg-amber-400 text-slate-900"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
