import React from "react";

const Product = (props) => {
  const breedObject = props.breeds;
  // console.log(breedObject)
  const breedArray = Object.entries(breedObject).map(item => item);
  console.log (breedArray);

  return(
    <div>
      <h1>Images</h1>
      
    </div>
  )
};



export default Product;
