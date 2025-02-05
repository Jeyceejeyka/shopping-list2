import React from "react";
import './App.css'

const Item = ({ item }) => {
  return (
    <li>
      {item.name} - {item.category}
    </li>
  );
};

export default Item;
