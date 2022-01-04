import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";

function Card({
  id,
  title,
  imgeUrl,
  price,
  onPlus,
  onFavorite,
  favorited = false,
  added = false,
  loading = false,
}) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickFavotite = () => {
    onFavorite({ id, title, imgeUrl, price });
    setIsFavorite(!isFavorite);
  };

  const onClickPlus = () => {
    onPlus({ id, title, imgeUrl, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="9" ry="9" width="150" height="155" />
          <rect x="0" y="170" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="191" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="234" rx="5" ry="5" width="75" height="24" />
          <rect x="117" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onClickFavotite}>
            <img
              width={30}
              height={30}
              src={
                isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"
              }
              alt="Unliked"
            ></img>
          </div>

          <img width="100%" height={135} src={imgeUrl} alt="Sneakers"></img>
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
        </>
      )}
    </div>
  );
}
export default Card;
