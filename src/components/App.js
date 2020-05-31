import React from "react";
import "../App.css";
import CategoryFilter from "./CategoryFilter";
import ProductList from "../containers/ProductList";

function App() {
  return (
    <div>
      <div className="navbar">
        <h1>Products</h1>
        <CategoryFilter />
      </div>
      <ProductList />
    </div>
  );
}


 export default App;