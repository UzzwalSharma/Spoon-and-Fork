import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // For animations

const RecipeOfTheDay = () => {
  const [recipe, setRecipe] = useState(null);

  // Fetch a new recipe from the Spoonacular API
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/recipes/random?apiKey=dea94ffa46224c2a85f89bd5d1e34716"

        );
        const data = await response.json();
        setRecipe(data.recipes[0]);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, []);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div
          className="text-2xl font-semibold text-orange-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          Loading Recipe of the Day...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <motion.h2
        className="text-2xl font-bold text-center mb-4 text-orange-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Recipe of the Day 🍳
      </motion.h2>

      {/* Display recipe image */}
      <motion.img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Recipe title */}
      <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>

      {/* Recipe summary */}
      <p
        className="text-gray-600 mb-4"
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
      ></p>

      {/* Ingredients */}
      <ul className="list-disc list-inside mb-4">
        <h4 className="font-semibold">Ingredients:</h4>
        {recipe.extendedIngredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700">
            {ingredient.original}
          </li>
        ))}
      </ul>

      {/* Button to view full recipe */}
      <button
        className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
        onClick={() => window.open(recipe.sourceUrl, '_blank')}
      >
        View Full Recipe
      </button>
    </div>
  );
};

export default RecipeOfTheDay;