import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioStocks, onStockClick }) {
  const portfolioElements = portfolioStocks.map(stock => 
    <Stock key={stock.id} stock={stock} listType={"Portfolio"} onStockClick={onStockClick} />
  )
  
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioElements}
    </div>
  );
}

export default PortfolioContainer;
