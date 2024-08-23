import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Action to update the search term and filter recipes
  setSearchTerm: (term) => set(state => {
    const lowercasedTerm = term.toLowerCase();
    return {
      searchTerm: term,
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(lowercasedTerm) ||
        recipe.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(lowercasedTerm)
        ) ||
        recipe.preparationTime.toString().includes(lowercasedTerm)
      )
    };
  }),

  // Action to set recipes and apply the current search term filter
  setRecipes: (recipes) => set(state => ({
    recipes,
    filteredRecipes: recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
      ) ||
      recipe.preparationTime.toString().includes(state.searchTerm.toLowerCase())
    )
  })),
}));

export { useRecipeStore };
