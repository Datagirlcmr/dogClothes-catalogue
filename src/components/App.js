import React from "react";
import "../App.css";
import CategoryFilter from "./CategoryFilter";
import ProductHandle from "../containers/ProductHandle";

function App() {
  return (
    <div>
      <div className="navbar">
        <h1>Products</h1>
        <CategoryFilter />
      </div>
      <ProductHandle />
    </div>
  );
}

 export default App;