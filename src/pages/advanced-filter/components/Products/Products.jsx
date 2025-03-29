
import styles from "./Product.module.css";

const Products = ({ result }) => {
  console.log(result);
  return (
    <>
      {result.length > 0 ? <article className={styles["card-container"]}>{result}</article> :
        <p className="mt-10 px-5">No Products found.</p>}
    </>
  );
};

export default Products;
