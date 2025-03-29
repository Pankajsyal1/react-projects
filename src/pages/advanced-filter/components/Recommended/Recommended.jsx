import Button from "../common/Button";
import styles from "./Recommended.module.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className={styles["recommended-title"]}>Recommended</h2>
        <div className={styles["recommended-flex"]}>
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;