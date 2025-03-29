// import styles from "./Category.module.css";
import styles from "../../components/Sidebar/Category/Category.module.css";
const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className={styles["sidebar-label-container"]}>
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className={styles["checkmark"]} style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;