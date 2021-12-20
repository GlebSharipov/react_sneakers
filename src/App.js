function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2>
            Корзина
            <img
              className="removeBtn"
              width={30}
              height={30}
              src="/img/remove.png"
              alt="Remove"
            />
          </h2>
          <div className="items">
            <div className="cartItem">
              <img
                className="sneakers"
                width={70}
                height={70}
                src="/img/sneakers/1.jpg"
                alt="Sneakers"
              />
              <div className="description">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                width={30}
                height={30}
                src="/img/remove.png"
                alt="Remove"
              />
            </div>

            <div className="cartItem">
              <img
                className="sneakers"
                width={70}
                height={70}
                src="/img/sneakers/1.jpg"
                alt="Sneakers"
              />
              <div className="description">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                width={30}
                height={30}
                src="/img/remove.png"
                alt="Remove"
              />
            </div>
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
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3>REACT SNEAKERS</h3>
            <p className="headerInfo">Магазин лучших кросовок</p>
          </div>
        </div>
        <div>
          <ul className="headerRight">
            <li>
              <img
                className="cart"
                width={20}
                height={20}
                src="/img/cart.png"
                alt="Cart"
              />
              <span className="price">1205 руб.</span>
            </li>
            <li>
              <img
                className="heart"
                width={20}
                height={20}
                src="/img/favourites.svg"
                alt="Heart"
              />
            </li>
            <li>
              <img
                className="user"
                width={20}
                height={20}
                src="/img/user.png"
                alt="User"
              />
            </li>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="search">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search"></img>
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          <div className="card">
            <div className="favorite">
              <img
                width={30}
                height={30}
                src="/img/heart-unliked.svg"
                alt="Unliked"
              ></img>
            </div>

            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            ></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="priceSneakers">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={32} height={32} src="/img/add.png" alt="Add"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpg"
              alt="Sneakers"
            ></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="priceSneakers">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={32} height={32} src="/img/add.png" alt="Add"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/3.jpg"
              alt="Sneakers"
            ></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="priceSneakers">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={32} height={32} src="/img/add.png" alt="Add"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpg"
              alt="Sneakers"
            ></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="priceSneakers">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={32} height={32} src="/img/add.png" alt="Add"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
