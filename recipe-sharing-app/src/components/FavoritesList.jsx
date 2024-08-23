import React from 'react';
import { useRecipeStore } from '../store/RecipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favoriteIds = useRecipeStore(state => state.favorites);

  const favorites = favoriteIds.map(id => 
    recipes.find(recipe => recipe.id === id)
  ).filter(recipe => recipe); // Filter out undefined

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Optionally add a remove favorite button */}
          </div>
        ))
      ) : (
        <p>No favorites yet</p>
      )}
    </div>
  );
};

export default FavoritesList;
