import { PizzaFooter, PizzaHeader, PizzaMenu } from "./components";
import styles from "./pizza.module.css";

function PizzaView() {
  return (
    <div className={styles["container-pizza"]}>
      <PizzaHeader />
      <PizzaMenu />
      <PizzaFooter />
    </div>
  );
}

export default PizzaView;
