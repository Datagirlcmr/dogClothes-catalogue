import React from "react";

function BreedComponent(props) {
  return (
    <div className="center">
      <select className="width-100">
        <option value="All">All</option>
        {props.breeds.map((el) => (
          <option key={el} value={el}>{el}</option>
        ))}
      </select>
    </div>
  );
}

export default BreedComponent;
