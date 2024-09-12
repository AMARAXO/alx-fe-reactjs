import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; // Adjust the path if necessary

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID
    const foundRecipe = data.find(recipe => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc pl-5 mb-6">
          {/* Replace with actual ingredients */}
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
        <p className="text-gray-700">
          {/* Replace with actual cooking instructions */}
          Step 1: Do this.<br />
          Step 2: Do that.<br />
          Step 3: Enjoy your meal!
        </p>
      </div>
    </div>
  );
};

export default RecipeDetail;
