// src/components/Cta.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Cta = () => {
  return (
    <div className="cta-container bg-gray-500 p-8 text-center text-white rounded-lg shadow-lg my-12">
      <h2 className="text-3xl font-semibold mb-4">Ready to discover the nutritional value of your food?</h2>
      <p className="text-xl mb-6">Scan ingredients, get detailed insights, and make healthier choices today!</p>
      <Link
        to="nutriscan" // Change the href to `to` for react-router Link component
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
      >
       FInd Food Insights
      </Link>
    </div>
  );
};

export default Cta;
