import React, { useState } from "react";

function Stock({ stock, listType, onStockClick }) {
  const [inPortfolio, setInPortfolio] = useState(false)

  function handleStockClick() {
    if (inPortfolio === false) {
      setInPortfolio(true)
      onStockClick({
        stock: stock, 
        listType: listType
      })
    }
  }

  return (
    <div>
      {/* Once it's clicked, I'll have the input of my callback function be an object
      with two keys in it */}
      <div 
        onClick={handleStockClick} 
        className="card"
      >
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
