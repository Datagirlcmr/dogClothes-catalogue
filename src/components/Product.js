import React from "react";

const Product = (props) => {
  return (
    <div>
      <h1>Breed: {}</h1>
      <img src={props.image} alt="dogImages" />
    </div>
  );
};

export default Product;
