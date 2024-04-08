const OrderCard = ({ order, handleMoveToNextStage, handleCancelOrder }) => {
  const { id, type, size, base, status, [`${status}_time`]: stageTime } = order;

  const getBackgroundColor = () => {
    if (stageTime > 180 && status !== 'Order Picked') {
      return '#EB1E2B';
    } else {
      switch (status) {
        case 'Order Placed':
          return '#D8BFD8';
        case 'Order in Making':
          return '#CCCCFF';
        case 'Order Ready':
          return '#F0E68C';
        case 'Order Picked':
          return '#BACC81';
        default:
          return '#fff';
      }
    }
  };

  return (
    <div className="order-card" style={{ backgroundColor: getBackgroundColor() }}>
      <p>Order Id: 00{id}</p>
      <p>Type: {type}</p>
      <p>Size: {size}</p>
      <p>Base: {base}</p>
      <p>Time Elapsed: {stageTime} seconds</p>
      {status !== 'Order Picked' && (
        <button onClick={() => handleMoveToNextStage(id)}>Next</button>
      )}
    </div>
  );
};

export default OrderCard;
