import React from "react";
import styles from "./Drawer.module.scss";

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2>
          Корзина
          <img
            onClick={onClose}
            className={styles.removeBtn}
            width={30}
            height={30}
            src="/img/remove.png"
            alt="Remove"
          />
        </h2>

        {items.length > 0 ? (
          <div className={styles.items}>
            {items.map((obj) => (
              <div className={styles.cartItem} key={obj.id}>
                <img
                  className={styles.sneakers}
                  width={70}
                  height={70}
                  src={obj.imgeUrl}
                  alt="Sneakers"
                />
                <div className={styles.description}>
                  <p>{obj.title}</p>
                  <b>{obj.price}</b>
                </div>
                <img
                  onClick={() => onRemove(obj.id)}
                  className={styles.removeBtn}
                  width={30}
                  height={30}
                  src="/img/remove.png"
                  alt="Remove"
                />
              </div>
            ))}
            <div className={styles.cardTotalBlock}>
              <ul>
                <li>
                  <span>Итого</span>
                  <div></div>
                  <b>21 489 руб.</b>
                </li>
                <li>
                  <span>Налог 5%</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className={styles.greenButton}>
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.emptyCart}>
            <img height={120} width={120} src="/img/box.png" alt="Box" />
            <h2> Корзина пустая </h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClose} className={styles.greenButton}>
              Вернуться назад <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
