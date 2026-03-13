import PropTypes from "prop-types";
import { FiArrowRight } from "react-icons/fi";

const Card = ({ meal }) => {
  return (
    <div className="group bg-white border border-dark/5 p-6 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-dark/5 transition-all duration-500 overflow-hidden">
      <div className="relative aspect-square mb-6 overflow-hidden rounded-[2.5rem] bg-dark/5">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="space-y-4 px-2">
        <h3 className="text-xl font-black text-dark tracking-tighter leading-tight line-clamp-2 min-h-[3.5rem]">
          {meal.strMeal}
        </h3>

        <button className="w-full py-4 bg-dark text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-xl shadow-dark/10 group-hover:translate-y-[-2px]">
          View Recipe <FiArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default Card;
