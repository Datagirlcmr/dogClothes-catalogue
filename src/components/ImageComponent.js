import React from 'react';

function ImageComponent(props) {
  return(
    <div>
      {props.images.map(imgsrc => (
        <img className="w-100" src={imgsrc} alt="dogs"></img>
      ))}   
    </div>
  )
}

export default ImageComponent;