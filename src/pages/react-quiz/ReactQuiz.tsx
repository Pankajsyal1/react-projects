import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import { QuizProvider, useQuiz } from "./contexts/QuizContext";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * React component that renders the main content of the React Quiz app.
 * It uses the QuizContext to determine which content to render based on the status.
 * The content can be one of the following:
 * - A loading animation
 * - An error message
 * - A start screen
 * - A question screen with a progress bar and a footer containing a timer and a next button
 * - A finish screen
 */
const ReactQuizContent = () => {
  const { status } = useQuiz();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 px-6 py-10 text-slate-100 sm:px-10">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

const ReactQuiz = () => {
  return (
    <QuizProvider>
      <ReactQuizContent />
    </QuizProvider>
  )
}

export default ReactQuiz;
