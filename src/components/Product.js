import React from "react";
import DogDetails from "./DogDetails";

function Product(props) {
  const dogDisplay = DogDetails.map(dog => dog)
  return (
    <div>
      <img src={props.image.message} alt="dog" />
      <h1>Dog category: </h1>
      <p>Description:{dogDisplay.description} </p>
      <h3>Price</h3>
    </div>
  );
}

export default Product;
