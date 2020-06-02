import React from 'react';

function ImageComponent({images, breeds, onClick}) {
  return(
    <div className="imgs-disp">
      {images.map(imgsrc => (
        <div className=""> 
        <img className="img-ec" 
        key={imgsrc} 
        src={imgsrc}
        onClick={onClick} 
        alt={imgsrc}></img>
        </div>
      ))}   
    </div>
  )
}

export default ImageComponent;