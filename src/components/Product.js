import React from "react";
// import PropTypes from 'prop-types';

const Product = (props) => {
  const dogArray = props.dogPics

  return (
    <div id="imageContainer">
      <img src={dogArray} alt="dog" />
      <h3>Product Category: </h3>
      <p>Product Description</p>
      <h5>Price</h5>
    </div>
  );
};

// Product.propTypes = {
//   dogPics: PropTypes.array.isRequired
// }

export default Product;
