import axios from "axios";
import React from "react"
import Card from "../components/Card";
import AppContext from "../context";
import { Link } from "react-router-dom";


function Orders () {
  const {onAddToFavorite} = React.useContext(AppContext)
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    (async() => {
      try {
        const { data } = await axios.get(
          "https://61c5baa0c003e70017b798a8.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов");
        console.error(error);
      }
    })();
  }, []);
    
    return (
        <div className="content">
        <div className="search">
          <h1>Мои заказы</h1>
        </div>

        {orders.length > 0 ? (<div className="sneakers">
        {(isLoading ? [...Array(12)] : orders)
            .map((item, index) => (
              <Card
              key={index}
              onFavorite={(obj) => {
                onAddToFavorite(obj);
              }}
              loading={isLoading}
              {...item}
              />
            ))}
        </div>)
        : <div className="empty">
            <img src="/img/smile-orders.png" alt=""/>
            <h2>У вас нет заказов</h2>
            <p>Оформите хотя бы один заказ.</p>
            <Link to="/">
              <button  className="greenButton">
                  Вернуться назад <img className="arrow" src="/img/arrow.svg" alt="Arrow" />
              </button>
             </Link>
          </div>
        }
      </div>
    )
}

export default Orders;

