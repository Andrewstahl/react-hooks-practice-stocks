import React from "react";
import Stock from "./Stock";

function StockContainer({ stockList, onStockClick }) {
  const stockElements = stockList.map(stock => 
    <Stock key={stock.id} stock={stock} listType={"Stock"} onStockClick={onStockClick}/> 
  )
  
  return (
    <div>
      <h2>Stocks</h2>
      {stockElements}
    </div>
  );
}

export default StockContainer;
