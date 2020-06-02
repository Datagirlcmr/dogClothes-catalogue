import React from "react";

function BreedComponent({breeds}) {
  return (
    <div className="select">
      <select className="card">
        <option value="All">Select a Breed</option>
        {breeds.map((el) => (
          <option key={el} value={el}>{el}</option>
        ))}
      </select>
    </div>
  );
}

export default BreedComponent;
