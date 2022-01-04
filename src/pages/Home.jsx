import Card from "../components/Card";

function Home ({
    items,
    cartItems,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    isLoading,
  }) {

  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(8)] : filtredItems).map((item) => (
      <Card
        key={item.id}
        onFavorite={(obj) => {
          onAddToFavorite(obj);
        }}
        onPlus={(obj) => {
          onAddToCart(obj);
        }}
        added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
        loading={isLoading}
        {...item}
      />
    ));
  };

    return (
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
          {renderItems()}
        </div>
      </div>
    );
}

export default Home;