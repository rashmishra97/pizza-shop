import React, { useState, useEffect } from 'react';
import './App.css';
import PizzaStagesSection from './component/PizzaStagesSection/Index';
import MainSection from './component/MainSection/Index';
import PizzaOrderForm from './component/PizzaOrderForm/Index';

const App = () => {
  const [orders, setOrders] = useState([]);
  const [orderIdCounter, setOrderIdCounter] = useState(1);
  const MAX_ORDERS = 10;

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders(prevOrders =>
        prevOrders.map(order =>
          order.status === 'Order Picked'
            ? order
            : { ...order, [`${order.status}_time`]: order[`${order.status}_time`] + 1 }
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [orders]);

  const handleOrderSubmit = orderData => {
    if (orders.length < MAX_ORDERS) {
      const newOrder = {
        id: orderIdCounter,
        ...orderData,
        status: 'Order Placed',
        'Order Placed_time': 0,
        'Order in Making_time': 0,
        'Order Ready_time': 0,
        'Order Picked_time': 0
      };
      setOrders(prevOrders => [...prevOrders, newOrder]);
      setOrderIdCounter(prevCounter => prevCounter + 1);
    } else {
      alert('Not taking any order for now');
    }
  };

  const handleCancelOrder = orderId => {
    setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
  };

  const handleMoveToNextStage = orderId => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: getNextStage(order.status) } : order
      )
    );
  };

  const getNextStage = currentStage => {
    switch (currentStage) {
      case 'Order Placed':
        return 'Order in Making';
      case 'Order in Making':
        return 'Order Ready';
      case 'Order Ready':
        return 'Order Picked';
      default:
        return currentStage;
    }
  };

  return (
    <div className="container">
      <h1>Pizza Shop</h1>
      <PizzaStagesSection
        orders={orders}
        handleMoveToNextStage={handleMoveToNextStage}
        handleCancelOrder={handleCancelOrder}
        />
      <MainSection orders={orders} handleCancelOrder={handleCancelOrder} />
      <PizzaOrderForm onSubmit={handleOrderSubmit} />
    </div>
  );
};

export default App;
