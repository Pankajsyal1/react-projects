import PropTypes from "prop-types"; // Import PropTypes
import styles from "./Meals.module.css";

const Card = ({ meal }) => {
  return (
    <div className={styles.card}>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{meal.strMeal}</h3>
        <button className={styles.cardButton}>View Recipe</button>
      </div>
    </div>
  );
};

// Add PropTypes validation
Card.propTypes = {
  meal: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
