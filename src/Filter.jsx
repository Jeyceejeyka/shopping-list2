import React from "react";
import './App.css'

const Filter = ({ searchText, onSearchChange }) => {
  const handleSearch = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={handleSearch}
        placeholder="Search items"
      />
    </div>
  );
};

export default Filter;
