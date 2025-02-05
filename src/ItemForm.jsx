import React from "react";
import './App.css'

const ItemForm = ({
  itemName,
  itemCategory,
  onItemFormSubmit,
  onItemNameChange,
  onItemCategoryChange,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={onItemNameChange}
        placeholder="Item Name"
        required
      />
      <select value={itemCategory} onChange={onItemCategoryChange}>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Snacks">Snacks</option>
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
