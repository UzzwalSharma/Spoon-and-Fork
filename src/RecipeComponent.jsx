import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Recipe.css';

function RecipeComponent({ momos }) {
  const [recipeInfo, setRecipeInfo] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipeInfo = async (momos) => {
    if (!momos) {
      setError('Please provide a valid recipe name.');
      return;
    }

    setLoading(true);

    try {
      // Fetch recipe info from your backend API
      const recipeResponse = await axios.get(`https://spoon-fork-backend.onrender.com/api/recipe/${encodeURIComponent(momos)}`);
      const page = Object.values(recipeResponse.data.query.pages)[0];
      let extract = page.extract || 'No cultural context available.';

      // Remove HTML tags from the description
      extract = extract.replace(/<\/?[^>]+(>|$)/g, "");

      // Fetch high-quality image from Unsplash API
      const unsplashResponse = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          query: momos,
          client_id: '9lR3w1H9gurziMXBUIp4aso9nBK12PlxrKdtEfIx960', // Replace with your Unsplash API key
        }
      });

      const unsplashImage = unsplashResponse.data.results[0]?.urls.full; // Get the first high-quality image

      setRecipeInfo({ extract });
      setImageUrl(unsplashImage || null); // Use Unsplash image or fallback to null
    } catch (error) {
      console.error('Error fetching recipe info:', error);
      setError('Failed to fetch recipe information  ');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipeInfo(momos);
  }, [momos]);

  if (loading) return <div className="loading-message">
  <img src="/rocket_17204039.gif" style={{height:"400px", marginLeft:"100px"}}/>
  <br /><br />Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="recipe-content">
      <h1 className="recipe-title">{momos}</h1>
      {recipeInfo ? (
        <>
          <p className="recipe-description">{recipeInfo.extract}</p>
          {imageUrl && (
            <div className="recipe-image">
              <img src={imageUrl} alt={momos} />
            </div>
          )}
        </>
      ) : (
        <p>No recipe information available.</p>
      )}
    </div>
  );
}

export default RecipeComponent;
