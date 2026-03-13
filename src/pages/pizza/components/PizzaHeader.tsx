import AppHeading from "../../../components/common/AppHeading";
import styles from "../pizza.module.css";

function PizzaHeader() {
  return (
    <>
      <header className={styles["header"]}>
        <h1>Fast React Pizza Co.</h1>
      </header>
    </>
  );
}

export default PizzaHeader