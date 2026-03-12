import { BsFillBagFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white border border-dark/5 p-8 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-dark/5 transition-all duration-500 group"
    >
      <div className="relative aspect-square mb-8 p-4 bg-dark/5 rounded-[2.5rem] flex items-center justify-center overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-dark/5 shadow-sm">
          <span className="text-[8px] font-black uppercase tracking-widest text-dark">Limited</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-dark tracking-tighter leading-tight line-clamp-2 min-h-[3.5rem]">
          {title}
        </h3>

        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {[...Array(4)].map((_, i) => <AiFillStar key={i} size={14} />)}
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-secondary">({reviews})</span>
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="flex flex-col">
            <del className="text-[10px] font-black uppercase text-secondary tracking-widest line-through decoration-primary/30 decoration-2 mb-1">
              ${prevPrice}
            </del>
            <span className="text-2xl font-black text-dark tracking-tighter">
              ${newPrice}
            </span>
          </div>

          <button className="w-14 h-14 bg-dark text-white flex items-center justify-center rounded-[1.5rem] hover:bg-primary transition-all shadow-xl shadow-dark/10 group-hover:translate-x-1">
            <BsFillBagFill size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;