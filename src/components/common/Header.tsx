import { NavLink } from "react-router-dom";
import styles from "../../styles/header.module.css";
import { ROUTES } from "../../utils/Routes";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome ReactJS Projects</h1>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {Object.entries(ROUTES).map(([key, path]) => (
              <li key={key}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.navLink} ${styles.active}`
                      : styles.navLink
                  }
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
