import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  searchTerm: '',
  filteredRecipes: [],
  recommendations: [],

  // Action to update the search term and filter recipes
  setSearchTerm: (term) => set((state) => {
    const lowercasedTerm = term.toLowerCase();
    return {
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(lowercasedTerm) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(lowercasedTerm)
        ) ||
        recipe.preparationTime.toString().includes(lowercasedTerm)
      ),
    };
  }),

  // Action to set recipes and apply the current search term filter
  setRecipes: (recipes) => set((state) => ({
    recipes,
    filteredRecipes: recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
      ) ||
      recipe.preparationTime.toString().includes(state.searchTerm.toLowerCase())
    ),
  })),

  // Action to add a new recipe
  addRecipe: (newRecipe) => set((state) => {
    const updatedRecipes = [...state.recipes, newRecipe];
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
        ) ||
        recipe.preparationTime.toString().includes(state.searchTerm.toLowerCase())
      ),
    };
  }),

  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
        ) ||
        recipe.preparationTime.toString().includes(state.searchTerm.toLowerCase())
      ),
    };
  }),

  // Action to delete a recipe
  deleteRecipe: (recipeId) => set((state) => {
    const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== recipeId);
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
        ) ||
        recipe.preparationTime.toString().includes(state.searchTerm.toLowerCase())
      ),
    };
  }),

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId],
  })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  // Action to generate personalized recommendations
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter(
      (recipe) => !state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export { useRecipeStore };
