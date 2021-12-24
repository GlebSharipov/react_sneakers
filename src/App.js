import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://61c5baa0c003e70017b798a8.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCard = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="search">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search"></img>
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imgeUrl={item.imgeUrl}
              onFavorite={() => console.log("Добавили в закладки")}
              onPlus={(obj) => {
                onAddToCard(obj);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
