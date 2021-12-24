import React from "react";
import styles from "./Card.module.scss";

function Card({ title, imgeUrl, price, onPlus, onFavorite }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, imgeUrl, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img
          width={30}
          height={30}
          src="/img/heart-unliked.svg"
          alt="Unliked"
        ></img>
      </div>

      <img width={133} height={112} src={imgeUrl} alt="Sneakers"></img>
      <h5>{title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.priceSneakers}>
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <button className={styles.button} onClick={onClickPlus}>
          <img
            width={32}
            height={32}
            src={isAdded ? "/img/btn-checked.png" : "/img/add.png"}
            alt="Add"
          ></img>
        </button>
      </div>
    </div>
  );
}
export default Card;
