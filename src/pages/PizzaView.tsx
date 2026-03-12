import { PizzaFooter, PizzaHeader, PizzaMenu } from "../components/pizza";
import styles from "../styles/pizza.module.css";

function PizzaView() {
  return (
    <div className={styles["container"]}>
      <PizzaHeader />
      <PizzaMenu />
      <PizzaFooter />
    </div>
  );
}

export default PizzaView;
