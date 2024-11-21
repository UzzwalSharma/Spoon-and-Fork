import React, { useState } from 'react';
import RecipeComponent from './RecipeComponent'; // Import the RecipeComponent
import './Recipe.css';

function DidYouKnowPopup() {
  const [recipeName, setRecipeName] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleInputChange = (e) => {
    setRecipeName(e.target.value);
  };

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleSubmit = () => {
    if (recipeName) {
      togglePopup();  // Show the popup when the recipe name is entered
    }
  };

  return (
    <div className="did-you-know-container">
      <div className="input-container">
        <input
          type="text"
          value={recipeName}
          onChange={handleInputChange}
          placeholder="Enter recipe name (e.g., Momos)"
          className="input-field mr-5 "
        />
        <button onClick={handleSubmit} className="submit-button">
          Search
        </button>
      </div>

      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={togglePopup}>X</button>
            <RecipeComponent momos={recipeName} />
          </div>
        </div>
      )}
    </div>
  );
}

export default DidYouKnowPopup;
