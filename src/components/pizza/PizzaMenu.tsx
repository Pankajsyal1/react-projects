import { pizzaData } from "../../data/pizzaData";
import PizzaItem from "./PizzaItem";
import styles from "../../styles/pizza.module.css";

function PizzaMenu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className={styles["menu"]}>
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className={styles["pizzas"]}>
            {pizzas.map((pizza) => (
              <PizzaItem pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )} 
    </main>
  );
}

export default PizzaMenu