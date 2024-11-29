import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaSearch, FaVideo } from "react-icons/fa";

const RecipeSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // YouTube search state
  const [videoSearchText, setVideoSearchText] = useState("");
  const [videos, setVideos] = useState([]);

  const handleSearchChange = (event) => setSearchText(event.target.value);
  const handleVideoSearchChange = (event) => setVideoSearchText(event.target.value);

  const handleSearch = async () => {
    if (!searchText) return;
    setLoading(true);
    setError("");

    try {
      const spoonacularApiKey = "07c0f22ae4854f718c669c415f696278";
      const url = `https://api.spoonacular.com/recipes/complexSearch`;
      const params = {
        query: searchText,
        addRecipeInformation: true,
        number: 10,
        apiKey: spoonacularApiKey,
      };

      const response = await axios.get(url, { params });

      if (response.data.results?.length > 0) {
        setRecipes(response.data.results);
      } else {
        setError("No recipes found.");
      }
    } catch (err) {
      setError("Error fetching recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVideoSearch = async () => {
    if (!videoSearchText) return;
    setLoading(true);
    setError("");

    try {
      const videoApiKey = "AIzaSyAAUIex89UDUVkFtRJMfJy9zpLkYR2acc8";
      const url = `https://www.googleapis.com/youtube/v3/search`;
      const params = {
        part: "snippet",
        maxResults: 10,
        q: videoSearchText,
        key: videoApiKey,
      };

      const response = await axios.get(url, { params });

      if (response.data.items?.length > 0) {
        setVideos(response.data.items);
      } else {
        setError("No videos found.");
      }
    } catch (err) {
      setError("Error fetching videos. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-6 sm:px-8">
      <div className="max-w-4xl w-full space-y-6 bg-white p-8 rounded-lg shadow-xl">
        <div className="text-center">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
          >
            Recipe Search & YouTube Videos
          </motion.h2>
          <motion.p
            className="mt-2 text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 150 }}
          >
            Find recipes and relevant videos!
          </motion.p>
        </div>

        <div className="flex flex-col items-center">
          <motion.input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search for a recipe..."
            className="w-full sm:w-2/3 p-3 mt-4 rounded-md shadow-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 ease-in-out"
          />
          <motion.button
            onClick={handleSearch}
            className="mt-4 px-8 py-3 bg-green-500 text-white font-medium rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaSearch className="inline-block mr-2" /> Search Recipes
          </motion.button>

          <motion.input
            type="text"
            value={videoSearchText}
            onChange={handleVideoSearchChange}
            placeholder="Search for YouTube videos..."
            className="w-full sm:w-2/3 p-3 mt-4 rounded-md shadow-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out"
          />
          <motion.button
            onClick={handleVideoSearch}
            className="mt-4 px-8 py-3 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaVideo className="inline-block mr-2" /> Search Videos
          </motion.button>
        </div>

        {loading && (
          <div className="text-center text-gray-600 mt-4">
            <div className="animate-spin w-8 h-8 border-t-4 border-green-500 border-solid rounded-full mx-auto"></div>
            <p className="mt-2">Loading...</p>
          </div>
        )}

        {error && (
          <div className="text-center text-red-600 mt-4">{error}</div>
        )}

        {recipes.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {recipes.map((recipe) => (
              <motion.div
                key={recipe.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 ease-in-out hover:bg-gradient-to-r from-green-100 via-green-200 to-green-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover rounded-lg mb-6 transition-transform duration-500 transform hover:scale-110"
                />
                <h3 className="text-2xl font-bold text-gray-800 hover:text-green-600 transition duration-300">
                  {recipe.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Servings: {recipe.servings} | Ready in {recipe.readyInMinutes} mins
                </p>
                <a
                  href={recipe.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block text-sm font-semibold"
                >
                  View Full Recipe
                </a>
              </motion.div>
            ))}
          </div>
        )}

        {videos.length > 0 && (
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-gray-800">YouTube Video Results</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
              {videos.map((video) => (
                <div key={video.id.videoId} className="bg-white p-6 rounded-xl shadow-lg">
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    frameBorder="0"
                    allowFullScreen
                    title={video.snippet.title}
                    className="rounded-lg"
                  />
                  <h4 className="text-xl font-bold text-gray-800 mt-4">{video.snippet.title}</h4>
                  <p className="text-sm text-gray-500 mt-2">{video.snippet.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeSearch;
