import axios from "axios";
import React from "react"
import Card from "../components/Card";
import AppContext from "../context";

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
          <h1>
           Мои заказы
          </h1>
        </div>

        <div className="sneakers">
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
        </div>
      </div>
    )
}

export default Orders;

