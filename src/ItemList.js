import React from "react";
import Mocklist from "./Mocklist";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    
      <ul>
        {items.map((item) => (
          <Mocklist
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
  );
};

export default ItemList;
