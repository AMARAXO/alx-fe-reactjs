import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipeForm from './Components/AddRecipeForm'
import RecipeList from './Components/RecipeList'
import DeleteRecipeButton from './Components/DeleteRecipeButton'
import EditRecipeForm from './Components/EditRecipeForm'
import RecipeDetails from './Components/RecipeDetails'


const App = () => {
  return (
      <>
        <div>
          <AddRecipeForm/>
          <RecipeList/>
        </div>
        <Router>
          <div>
            <Routes>
              {/* Route to show the list of all recipes */}
              <Route path="/" element={<RecipeList />} />
  
              {/* Route to show the details of a specific recipe */}
              <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
            </Routes>
          </div>
        </Router>
      </>
    );
};

// Wrapper component to extract the recipe ID from the URL
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
};

export default App
