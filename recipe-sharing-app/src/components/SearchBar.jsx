import React from 'react';
import { useRecipeStore } from '../store/RecipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const searchTerm = useRecipeStore(state => state.searchTerm);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={handleChange}
      style={{
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
      }}
    />
  );
};

export default SearchBar;
