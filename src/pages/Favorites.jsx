import React from "react";
import Card from "../components/Card";
import AppContext from "../context";
import { Link } from "react-router-dom";

function Favorites () {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

    return (
      <div className="content">
        <div className="search">
          <h1>Мои закладки</h1>
        </div>

        {favorites.length > 0 ? 
      (<div className="sneakers">
        {favorites
            .map((item) => (
              <Card
                key={item.id}
                favorited={true}
                onFavorite={onAddToFavorite}
                {...item}
              />
            ))}
        </div>)
      : (<div className="empty">
          <img src="./img/smile.png" alt="smile"/>
          <h2>Закладок нет</h2>
          <p>Вы ничего не добавляли в закладки</p>
          <Link to="/">
            <button  className="greenButton">
                Вернуться назад <img className="arrow" src="/img/arrow.svg" alt="Arrow" />
            </button>
          </Link>
         
        </div>)  
      }
      </div>
    )
}


export default Favorites;
