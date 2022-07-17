import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

/**
 * App Hierarchy
 * 
 * App
 * ├─── Header
 * └─── Main Container
 *      ├─── Search
 *      ├─── Portfolio Container
 *      └─── Stock Container
 *            ├─── Stock
 *            ├─── Stock
 *            └─── Stock
 */

function App() {
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
