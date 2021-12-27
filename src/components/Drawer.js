function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img
            onClick={onClose}
            className="removeBtn"
            width={30}
            height={30}
            src="/img/remove.png"
            alt="Remove"
          />
        </h2>
        <div className="items">
          {items.map((obj) => (
            <div className="cartItem">
              <img
                className="sneakers"
                width={70}
                height={70}
                src={obj.imgeUrl}
                alt="Sneakers"
              />
              <div className="description">
                <p>{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img
                onClick={() => onRemove(obj.id)}
                className="removeBtn"
                width={30}
                height={30}
                src="/img/remove.png"
                alt="Remove"
              />
            </div>
          ))}
        </div>
        <div className="cardTotalBlock">
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
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
