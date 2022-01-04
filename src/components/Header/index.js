import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.headerLeft}>
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3>REACT SNEAKERS</h3>
            <p className={styles.headerInfo}>Магазин лучших кросовок</p>
          </div>
        </div>
      </Link>
      <div>
        <ul className={styles.headerRight}>
          <li>
            <img
              onClick={props.onClickCart}
              className={styles.cart}
              width={20}
              height={20}
              src="/img/cart.png"
              alt="Cart"
            />
            <span className={styles.price}>1205 руб.</span>
          </li>
          <li>
            <Link to="/favorites">
              <img
                className={styles.heart}
                width={20}
                height={20}
                src="/img/favourites.svg"
                alt="Favorites"
              />
            </Link>
          </li>
          <li>
            <img
              className={styles.user}
              width={20}
              height={20}
              src="/img/user.png"
              alt="User"
            />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
