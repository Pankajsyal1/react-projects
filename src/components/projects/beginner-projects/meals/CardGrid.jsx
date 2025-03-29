import styles from "./Meals.module.css";
import Card from "./Card";
import PropTypes from "prop-types";

const CardGrid = (props) => {
  const { items, loading } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {loading ? (
        // Display a skeleton loader for each card inside the grid
        Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className={styles.skeletonCard}>
            <div className={styles.skeletonImage}></div>
            <div className={styles.skeletonContent}>
              <div className={styles.skeletonTitle}></div>
              <div className={styles.skeletonButton}></div>
            </div>
          </div>
        ))
      ) : items.length > 0 ? (
        items.map((meal) => <Card key={meal.idMeal} meal={meal} />)
      ) : (
        <p>No meal found</p>
      )}
    </div>
  );
};

// PropTypes validation for CardGrid
CardGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      strMeal: PropTypes.string.isRequired,
      strMealThumb: PropTypes.string.isRequired,
      idMeal: PropTypes.string.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

CardGrid.defaultProps = {
  items: [],
  loading: false,
};

export default CardGrid;
