import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import ShoppingList from "./ShoppingList";
import './App.css'

const App = () => {
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const handleItemFormSubmit = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleItemCategoryChange = (e) => {
    setItemCategory(e.target.value);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <Filter searchText={searchText} onSearchChange={handleSearchChange} />
      <ItemForm
        itemName={itemName}
        itemCategory={itemCategory}
        onItemFormSubmit={handleItemFormSubmit}
        onItemNameChange={handleItemNameChange}
        onItemCategoryChange={handleItemCategoryChange}
      />
      <ShoppingList items={items.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))} />
    </div>
  );
};

export default App;
