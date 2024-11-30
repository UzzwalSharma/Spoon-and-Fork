import React from 'react';
import HeroSection from "/src/HeroSection";
import FeatureCarousel from "./FeatureSection.jsx";
import ExploreMore from "./ExploreMore";
import Feedbackform from "/src/Feedbackform";
import Navbar from './Navbar';
import CulinaryStories from './CulinaryStories';
// import RecipeOfTheDay from './RecipeOfTheDay';
import Healthier from "./Healthier.jsx"
import Foodinsights from "./Foodinsights"

import Footer from './Footer';

function Landingpage() {
  return (
    <div className="landing-page overflow-x-hidden w-full">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero bg-cover   sm:px-6 md:px-8  py-2 w-full">
        <HeroSection />
      </section>

      {/* Explore More Section */}
      <section className="explore-more px-4 sm:px-6 md:px-8 lg:px-16 py-8 w-full">
        <ExploreMore />
      </section>

      {/* Culinary Stories */}
      <section className="culinary-stories px-4 sm:px-6 md:px-8 lg:px-16 py-12 ">
        <CulinaryStories />
      </section>

      {/* Feature Carousel */}
      <section className="features flex justify-center items-center py-12 bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-16 w-full">
        <FeatureCarousel />
      </section>
      
      {/* healthier alternatives */}
      <section className="features flex justify-center items-center py-12 bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-16 w-full">
        <Healthier/>
      </section>

      {/* Recipe of the Day */}
      {/* <section className="recipe-of-the-day px-4 sm:px-6 md:px-8 lg:px-16 py-8 w-full">
        <RecipeOfTheDay />
      </section> */}

   
<section className="features flex justify-center items-center py-12 bg-gray-200 px-4 sm:px-6 md:px-8 lg:px-16 w-full">
       <Foodinsights/>
      </section>
   {/* Feedback Form */}
   <section className="feedback-form px-4 sm:px-6 md:px-8 lg:px-16 py-8 w-full">
        <Feedbackform />
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Landingpage;
