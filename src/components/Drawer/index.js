import React from "react";
import styles from "./Drawer.module.scss";
import Info from "../Info";
import AppContext from "../../context";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://61c5baa0c003e70017b798a8.mockapi.io/orders",
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://61c5baa0c003e70017b798a8.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Ошибка при создании заказа :(");
    }
    setIsLoading(false);
  };

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
          <div className={styles.wrapperItems}>
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
            </div>
            <div>
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
                <button
                  disabled={isLoading}
                  onClick={onClickOrder}
                  className={styles.greenButton}
                >
                  Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовк, чтобы сделать заказ."
            }
            image={isOrderComplete ? "/img/complete-order.jpg" : "/img/box.png"}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
