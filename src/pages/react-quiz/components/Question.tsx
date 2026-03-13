import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);

  if (!question) return null;

  return (
    <div>
      <h4 className="mb-6 text-xl font-semibold sm:text-2xl">
        {question.question}
      </h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
