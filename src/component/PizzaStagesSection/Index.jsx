import React from 'react';
import OrderStage from '../../OrderStage';
import './PizzaStagesSection.css'

const PizzaStagesSection = ({ orders, handleMoveToNextStage, handleCancelOrder }) => {
  const stages = ['Order Placed', 'Order in Making', 'Order Ready', 'Order Picked'];

  return (
    <div className="pizza-stages-section">
      <h2>Pizza Stages Section</h2>
      <div className="pizza-stages" >
        {stages.map(stage => (
          <OrderStage
            key={stage}
            stage={stage}
            orders={orders}
            handleMoveToNextStage={handleMoveToNextStage}
            handleCancelOrder={handleCancelOrder}
          />
        ))}
      </div>
    </div>
  );
};

export default PizzaStagesSection;
