import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RecipeCard = ({ recipe, onViewMore }) => {
  // Truncate summary to 50% length
  const truncatedSummary = recipe.summary 
    ? recipe.summary.slice(0, Math.floor(recipe.summary.length * 0.5)) + '...'
    : 'No description available';

  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>

        <p
          className="text-gray-600 mb-4"
          dangerouslySetInnerHTML={{ __html: truncatedSummary }}
        ></p>

        <button
          className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
          onClick={() => onViewMore(recipe)}
        >
          View Full Recipe
        </button>
      </div>
    </div>
  );
};

const FullRecipeModal = ({ recipe, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-orange-500">{recipe.title}</h2>
          <button 
            onClick={onClose} 
            className="text-red-500 hover:text-red-700"
          >
            Close
          </button>
        </div>
        
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        
        <div 
          dangerouslySetInnerHTML={{ __html: recipe.summary }} 
          className="mb-4" 
        />
        
        <h4 className="font-semibold text-lg mb-2">Ingredients:</h4>
        <ul className="list-disc list-inside mb-4">
          {recipe.extendedIngredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient.original}
            </li>
          ))}
        </ul>
        
        <a 
          href={recipe.sourceUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Full Recipe on Website
        </a>
      </div>
    </div>
  );
};

const RecipeOfTheDay = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/recipes/random?number=2&apiKey=bcfb3ed36c394b65bb58e554d5643556"
        );
        const data = await response.json();
        setRecipes(data.recipes);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-semibold text-orange-500">
          Loading Recipes...
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-6 text-orange-500">
        Today's Top Picks: Delicious Recipes for You
      </h1>
      <div className="flex flex-wrap justify-center">
        {recipes.map((recipe) => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            onViewMore={setSelectedRecipe} 
          />
        ))}
      </div>
      
      {selectedRecipe && (
        <FullRecipeModal 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)} 
        />
      )}
    </div>
  );
};

export default RecipeOfTheDay;
