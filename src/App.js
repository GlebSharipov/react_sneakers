function App() {
  return (
    <div className="wrapper">
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
                src="/img/heart.svg"
                alt="Heart"
              />
            </li>
            <li>
              <img width={20} height={20} src="/img/user.png" alt="User" />
            </li>
          </ul>
        </div>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>

        <div className="sneakers">
          <div className="card">
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
