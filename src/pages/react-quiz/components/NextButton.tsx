import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuiz();

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className="rounded-full border border-slate-700 bg-slate-700 px-6 py-3 text-lg transition hover:bg-slate-800"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="rounded-full border border-slate-700 bg-slate-700 px-6 py-3 text-lg transition hover:bg-slate-800"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );

  return null;
}

export default NextButton;
