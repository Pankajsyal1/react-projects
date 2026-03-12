import { FiHeart, FiSearch, FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const Nav = ({ query, handleInputChange, toggleSidebar }) => {
  return (
    <nav className="flex items-center justify-between gap-6 pb-8 border-b border-dark/5">
      <div className="flex-1 flex items-center gap-4">
        {/* Menu Button for Small Screens */}
        <button
          className="lg:hidden w-12 h-12 flex items-center justify-center bg-dark/5 text-dark rounded-2xl hover:bg-dark hover:text-white transition-all"
          onClick={toggleSidebar}
        >
          <FiMenu size={20} />
        </button>

        <div className="relative flex-grow max-w-md group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <FiSearch className="text-secondary group-focus-within:text-primary transition-colors" />
          </div>
          <input
            className="w-full bg-dark/5 border-none outline-none py-4 pl-12 pr-6 rounded-2xl font-bold text-dark placeholder:text-secondary focus:ring-2 focus:ring-primary/10 transition-all"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Search your perfect pair..."
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-dark/5 text-dark transition-all">
          <FiHeart size={20} />
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-dark/5 text-dark transition-all relative">
          <AiOutlineShoppingCart size={22} />
          <span className="absolute top-2 right-2 w-4 h-4 bg-primary text-white text-[8px] font-black flex items-center justify-center rounded-full">3</span>
        </button>
        <div className="w-[1px] h-6 bg-dark/10 mx-2" />
        <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-dark text-white hover:bg-primary transition-all shadow-xl shadow-dark/10">
          <AiOutlineUser size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;