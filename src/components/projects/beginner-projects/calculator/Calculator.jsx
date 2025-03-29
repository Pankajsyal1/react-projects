import { useState } from "react";
import styles from "./Calculator.module.css";
import AppHeading from "../../../common/AppHeading";

const CalculatorApp = () => {
  const [inputValue, setInputValue] = useState('')

  const handleClear = () => {
    setInputValue('');
  }

  const handleDisplay = (value) => {
    setInputValue(inputValue + value);
  }

  const handleCalculate = () => {
    setInputValue(eval(inputValue));
  }

  return (
    <div className="text-center">
      <AppHeading sno={4} title={"Calculator App"} />
      <div className={styles.calculator}>
        <div className={styles.display}>{inputValue || "0"}</div>

        <div className={styles.buttonRow}>
          <button className={`${styles.button} ${styles.buttonClear}`} onClick={handleClear}>
            C
          </button>
          <button className={styles.button} onClick={() => handleDisplay('/')}>
            ÷
          </button>
          <button className={styles.button} onClick={() => handleDisplay('*')}>
            ×
          </button>
          <button className={styles.button} onClick={() => handleDisplay('-')}>
            −
          </button>
        </div>

        <div className={styles.buttonRow}>
          {[7, 8, 9, '+'].map((item) => (
            <button key={item} className={styles.button} onClick={() => handleDisplay(item)}>
              {item}
            </button>
          ))}
        </div>

        <div className={styles.buttonRow}>
          {[4, 5, 6, '('].map((item) => (
            <button key={item} className={styles.button} onClick={() => handleDisplay(item)}>
              {item}
            </button>
          ))}
        </div>

        <div className={styles.buttonRow}>
          {[1, 2, 3, ')'].map((item) => (
            <button key={item} className={styles.button} onClick={() => handleDisplay(item)}>
              {item}
            </button>
          ))}
        </div>

        <div className={styles.buttonRow}>
          <button className={`${styles.button} ${styles.buttonWide}`} onClick={() => handleDisplay('00')}>
            00
          </button>
          <button className={`${styles.button} ${styles.buttonWide}`} onClick={() => handleDisplay('0')}>
            0
          </button>
          <button className={styles.button} onClick={() => handleDisplay('.')}>
            .
          </button>
          <button className={`${styles.button} ${styles.buttonEqual}`} onClick={handleCalculate}>
            =
          </button>
        </div>
      </div>
    </div>
  )
}

export default CalculatorApp