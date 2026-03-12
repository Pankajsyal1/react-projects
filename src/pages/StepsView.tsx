import { useState } from "react";
import styles from "../styles/steps.module.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function StepsView() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);


  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <div className={styles["steps-container"]}>
      {isOpen && (
        <div className={styles["steps"]}>
          <div className={styles["numbers"]}>
            <div className={step >= 1 ? styles["active"] : ""}>1</div>
            <div className={step >= 2 ? styles["active"] : ""}>2</div>
            <div className={step >= 3 ? styles["active"] : ""}>3</div>
          </div>

          <p className={styles["message"]}>
            Step {step}: {messages[step - 1]}
          </p>

          <div className={styles["buttons"]}>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StepsView;
