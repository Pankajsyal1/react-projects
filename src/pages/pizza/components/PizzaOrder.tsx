import styles from "../pizza.module.css";

function PizzaOrder({ closeHour, openHour }) {
  return (
    <div className={styles["order"]}>
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className={styles["btn"]}>Order</button>
    </div>
  );
}

export default PizzaOrder