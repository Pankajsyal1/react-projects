import Card from "./Card";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const CardGrid = ({ items, loading }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {loading ? (
        Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-white/50 backdrop-blur-sm rounded-[3rem] border border-dark/5 p-6 space-y-6 animate-pulse">
            <div className="aspect-square bg-dark/5 rounded-[2.5rem]" />
            <div className="space-y-3 px-2">
              <div className="h-4 bg-dark/5 rounded-full w-3/4" />
              <div className="h-10 bg-dark/5 rounded-2xl w-full" />
            </div>
          </div>
        ))
      ) : items?.length > 0 ? (
        items.map((meal, index) => (
          <motion.div
            key={meal.idMeal}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card meal={meal} />
          </motion.div>
        ))
      ) : (
        <div className="col-span-full py-20 text-center">
          <p className="text-secondary font-bold">No gastronomic delights found.</p>
        </div>
      )}
    </div>
  );
};

CardGrid.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
};

export default CardGrid;
