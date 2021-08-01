import Card from '../components/Card';
import React from 'react'
import axios from 'axios';

function Orders({}) {
    const[orders, setOrders] = React.useState([]);
    const[isLoading, setIsLoading] = React.useState([true]);

    React.useEffect(() => {
      async function fetchData() {
        try {
          const { data } = await axios.get('https://mdatest2.herokuapp.com/api/react_order/');
          setOrders(data.map((e) => e.sneakers).flat());
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      }

      fetchData();
    }, [])
  
    return (
        <div className="content">
            <div className="content-navigation">
                <h2>Мои заказы</h2>
            </div>
            <div className="items">
                { isLoading ? [...Array(8)].map((element, index) => (
                  <Card
                    key={index} 
                    isLoading={isLoading}
                  />)) 
                  : 
                  orders
                    .map((element, index) => (
                    <Card 
                        key={index}
                        id={element.id}
                        title={element.title}
                        price={element.price}
                        imgUrl={element.image}
                        isLoading={isLoading}
                    />
                ))}
            </div>
        </div>
    );
}

export default Orders;