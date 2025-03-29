import { BsFillBagFill } from "react-icons/bs";
import styles from '../../components/Products/Product.module.css';


const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className={styles["card"]}>
        <img src={img} alt={title} className={styles["card-img"]} />
        <div className={styles["card-details"]}>
          <h3 className={styles["card-title"]}>{title}</h3>
          <section className={styles["card-reviews"]}>
            {star} {star} {star} {star}
            <span className={styles["total-reviews"]}>{reviews}</span>
          </section>
          <section className={styles["card-price"]}>
            <div className={styles["price"]}>
              <del>{prevPrice}</del> ${newPrice}
            </div>
            <div className={styles["bag"]}>
              <BsFillBagFill className={styles["bag-icon"]} />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;