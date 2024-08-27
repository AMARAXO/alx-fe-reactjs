import React from 'react';
import { useRecipeStore } from './useRecipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const navigate = useNavigate();

  const handleDelete = () => {
    // Confirm the deletion action
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      removeFavorite(recipeId); // Remove from favorites if it's there
      navigate('/'); // Redirect to the homepage or recipe list after deletion
    }
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
