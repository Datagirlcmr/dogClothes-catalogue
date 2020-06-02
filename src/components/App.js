import React from "react";
import "../App.css";
import ProductContainer from "../containers/ProductContainer";

function App() {
  return (
    <div className="#app-disp">
      <p className="topBar">Browse through dogs</p>
      <div className="nav">
        <h1 className="title w-20"> DogStory</h1>
        <h3 className="w-20"> Images</h3>
        <h3 className="w-20"> Categories</h3>
      </div>

      <ProductContainer />
    </div>
  );
}

export default App;
