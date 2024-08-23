import React from 'react';
import { useRecipeStore } from '../store/RecipeStore';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const RecipeList = () => {
  // Retrieve filtered recipes from Zustand store
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      <SearchBar />
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
