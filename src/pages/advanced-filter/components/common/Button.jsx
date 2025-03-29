
import styles from '../../main.module.css'

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className={styles["btns"]}>
      {title}
    </button>
  );
};

export default Button;
