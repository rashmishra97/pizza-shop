import OrderCard from './OrderCard';

const OrderStage = ({ stage, orders, handleMoveToNextStage, handleCancelOrder }) => {
  const stageOrders = orders.filter(order => order.status === stage);

  return (
    <div className={`stage ${stage.toLowerCase().replace(' ', '-')}`}>
      <h3>{stage}</h3>
      {stageOrders.map(order => (
        <OrderCard
          key={order.id}
          order={order}
          handleMoveToNextStage={handleMoveToNextStage}
          handleCancelOrder={handleCancelOrder}
        />
      ))}
    </div>
  );
};

export default OrderStage;
