import React from "react";

export const Tile = ({ item }) => {
  return (
    <div className="tile-container">
      {Object.values(item).map( (property, index) => {
        return <p key={index}
           className={index===0?'tile-title':'tile'}>{property}</p>
      })}
    </div>
  );
};