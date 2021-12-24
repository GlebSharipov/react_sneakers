function Header(props) {
  return (
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
              onClick={props.onClickCart}
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
  );
}

export default Header;
