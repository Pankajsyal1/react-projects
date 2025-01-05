import { useState } from "react";
import styles from "./Calculator.module.css";
import AppHeading from "../AppHeading";

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
    console.log(inputValue);

  }

  return (
    <>
      <AppHeading sno={4} title={"Calculator App"} />
      <div className={styles.calculator}>
        <div className={styles.display}>{inputValue}</div>
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
          <button className={styles.button} onClick={() => handleDisplay('7')}>
            7
          </button>
          <button className={styles.button} onClick={() => handleDisplay('8')}>
            8
          </button>
          <button className={styles.button} onClick={() => handleDisplay('9')}>
            9
          </button>
          <button className={styles.button} onClick={() => handleDisplay('+')}>
            +
          </button>
        </div>

        <div className={styles.buttonRow}>
          <button className={styles.button} onClick={() => handleDisplay('4')}>
            4
          </button>
          <button className={styles.button} onClick={() => handleDisplay('5')}>
            5
          </button>
          <button className={styles.button} onClick={() => handleDisplay('6')}>
            6
          </button>
          <button className={styles.button} onClick={() => handleDisplay('(')}>
            (
          </button>
        </div>

        <div className={styles.buttonRow}>
          <button className={styles.button} onClick={() => handleDisplay('1')}>
            1
          </button>
          <button className={styles.button} onClick={() => handleDisplay('2')}>
            2
          </button>
          <button className={styles.button} onClick={() => handleDisplay('3')}>
            3
          </button>
          <button className={styles.button} onClick={() => handleDisplay(')')}>
            )
          </button>
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
    </>
  )
}

export default CalculatorApp