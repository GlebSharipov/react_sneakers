import Card from "../components/Card";

function Favorites ({items, onAddToFavorite, onAddToCart}) {
    return (
        <div className="content">
        <div className="search">
          <h1>
           Мои закладки
          </h1>
        </div>

        <div className="sneakers">
        {items
            .map((item) => (
              <Card
                key={item.id}
                favorited={true}
                onFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                {...item}
              />
            ))}
        </div>
      </div>
    )
}


export default Favorites;
