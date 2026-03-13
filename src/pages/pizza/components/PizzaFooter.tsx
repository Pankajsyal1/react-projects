import styles from "../pizza.module.css";
import PizzaOrder from "./PizzaOrder";

function PizzaFooter() {
  const hour = new Date().getHours();
  const openHour = 6;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  else alert("Sorry we're closed");


  return (
    <footer className={styles["footer"]}>
      {isOpen ? (
        <PizzaOrder closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

export default PizzaFooter;
