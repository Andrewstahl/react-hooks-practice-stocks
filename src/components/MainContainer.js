import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockList, setStockList] = useState([]);
  const [portfolioStocks, setPortfolioStocks] = useState([]);
  const [sortFilter, setSortFilter] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(r => r.json())
      .then(stockData => setStockList(stockData))
  }, [])

  function handleStockClick(clickedStock) {
    const listType = clickedStock.listType;
    // If it was clicked on the stock list side, we need to add it to the My Portfolio section
    // If it was clicked on the My Portfolio section, we need to remove it from there
    if (listType === "Stock") {
      const updatedList = [...portfolioStocks, clickedStock.stock]
      setPortfolioStocks(updatedList)
    } else if (listType === "Portfolio") {
      const updatedList = portfolioStocks.filter(stock => stock.id !== clickedStock.stock.id)
      setPortfolioStocks(updatedList)
    }
  }

  function handleSearch(searchResult) {
    setSortFilter(searchResult)
    
    // if (searchResult === "Alphabetically") {
    //   const updatedList = stockList.sort((a,b) => (a.name > b.name) ? 1 : -1)
    //   setStockList(updatedList)
    // } else if (searchResult === "Price") {
    //   const updatedList = stockList.sort((a,b) => (a.price > b.price) ? 1 : -1)
    //   setStockList(updatedList)
    // } else if (searchResult !== "") {
    //   const updatedList = stockList.filter(stock => stock.type === searchResult)
    //   setStockList(updatedList)
    // }
  }
  
  let sortedFilteredList;
  if (sortFilter !== "") {
    if (sortFilter === "Alphabetically") {
      sortedFilteredList = stockList.sort((a,b) => (a.name > b.name) ? 1 : -1)
    } else if (sortFilter === "Price") {
      sortedFilteredList = stockList.sort((a,b) => (a.price > b.price) ? 1 : -1)
    } else {
      sortedFilteredList = stockList.filter(stock => stock.type === sortFilter)
    }
  } else {
    sortedFilteredList = stockList
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={sortedFilteredList} onStockClick={handleStockClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} onStockClick={handleStockClick} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
