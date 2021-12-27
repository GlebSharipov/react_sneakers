import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://61c5baa0c003e70017b798a8.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://61c5baa0c003e70017b798a8.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCard = (obj) => {
    axios.post("https://61c5baa0c003e70017b798a8.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61c5baa0c003e70017b798a8.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="search">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}" `
              : "Все кроссовки"}
          </h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search"></img>
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear"
                src="/img/remove.png"
                alt="Clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="sneakers">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
            )
            .map((item) => (
              <Card
                key={item.imgeUrl}
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
