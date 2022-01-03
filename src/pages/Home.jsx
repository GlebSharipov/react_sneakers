import Card from "../components/Card";

function Home ({items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCard}) {
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
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
            )
            .map((item) => (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                imgeUrl={item.imgeUrl}
                onFavorite={(obj) => {
                  onAddToFavorite(obj);
                }}
                onPlus={(obj) => {
                  onAddToCard(obj);
                }}
              />
            ))}
        </div>
      </div>
    )
}

export default Home;