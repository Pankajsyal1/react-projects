import { useState } from "react";
import styles from "./Counter.module.css";
import AppHeading from "../../../common/AppHeading";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  if (amount < 1) {
    alert("Please enter a valid amount")
  }
  return (
    <>
      <AppHeading sno={1} title={"Counter App"} />
      <h2 className={styles.number}>Counter: {count}</h2>
      <input style={styles.input} type="number" placeholder="Please enter amount" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
      <div className={styles['btns-container']}>
        <button onClick={() => setAmount(1)}>Reset Amount</button>
        <button disabled={count < 1} onClick={() => setCount(count - amount)}>Decrement by {amount}</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + amount)}>Increment by {amount}</button>
      </div>
    </>
  )
}

export default CounterApp