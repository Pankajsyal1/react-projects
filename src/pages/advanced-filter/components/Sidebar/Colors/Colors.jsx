// import styles from "./Colors.module.css";
import styles from "../Category/Category.module.css";
import Input from "../../common/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className={`${styles["sidebar-title"]} ${styles["color-title"]}`}>Colors</h2>
        <label className={styles["sidebar-label-container"]}>
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className={`${styles["checkmark"]} ${styles['all']}`}></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="#222"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className={styles["sidebar-label-container"]}>
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className={styles["checkmark"]}
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;