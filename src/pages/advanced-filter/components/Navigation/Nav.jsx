import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import styles from "./Nav.module.css";

const Nav = ({ query, handleInputChange, toggleSidebar }) => {
  return (
    <nav className={styles["navigation"]}>
      <div className={styles["nav-container"]}>
        {/* Menu Button for Small Screens */}
        <div>
          <button
            className="md:hidden py-3 px-5 bg-slate-800 text-white rounded-md mr-2"
            onClick={toggleSidebar}
          >
            ☰ Menu
          </button>

          <input
            className={styles["navigation-input"]}
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Enter your search shoes."
          />
        </div>
      </div>
      <div className={styles["profile-container"]}>
        <a>
          <FiHeart className={styles["nav-icons"]} />
        </a>
        <a>
          <AiOutlineShoppingCart className={styles["nav-icons"]} />
        </a>
        <a>
          <AiOutlineUserAdd className={styles["nav-icons"]} />
        </a>
      </div>
    </nav>
  );
};

export default Nav;