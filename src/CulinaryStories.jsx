import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import DidYouKnowPopup from "./DidYouKnowPopup";

const CulinaryStories = ({ onExplore }) => {
  return (
    <section className=" py-16 px-8 text-center rounded-lg shadow-md">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
      >
        <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
          Explore Culinary Stories
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Dive into the world of delicious recipes, vibrant cultures, and heartwarming stories. Your next favorite dish awaits!
        </p>
        
      <DidYouKnowPopup/>
      </motion.div>
    </section>
  );
};

export default CulinaryStories;
