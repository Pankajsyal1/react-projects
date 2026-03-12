import styles from "../../styles/pizza.module.css";

function PizzaItem({ pizzaObj }) {
  // console.log(pizzaObj);

  if (pizzaObj.soldOut) return null;

  return (
    <li
      className={`${styles["pizza"]} ${
        pizzaObj.soldOut ? styles["sold-out"] : ""
      }`}
    >
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

export default PizzaItem;
