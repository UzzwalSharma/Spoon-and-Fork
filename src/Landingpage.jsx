import React from 'react';
import HeroSection from "/src/HeroSection";
import FeatureCarousel from "./FeatureSection.jsx";
import ExploreMore from "./ExploreMore";
import Feedbackform from "/src/Feedbackform";
import Navbar from './Navbar';
import CulinaryStories from './CulinaryStories';
import RecipeOfTheDay from './RecipeOfTheDay';
import Footer from './Footer';

function Landingpage() {
  return (
    <div className="landing-page">
<Navbar/>
      {/* Hero Section with clear CTA */}
      <section className="hero">
        <HeroSection />
      </section>

      {/* Explore more with engaging content */}
      <section className="explore-more ">
        <ExploreMore />
      </section>
      <section>
        <CulinaryStories/>
      </section>
      {/* Feature Carousel with smooth transitions */}
      <section className="features flex justify-center items-center py-12 bg-gray-100">
  <FeatureCarousel />
</section>
<section>
  <RecipeOfTheDay/>
</section>
      {/* Professional Feedback Form */}
      <section className="feedback-form">
        <Feedbackform />
      </section>
      <Footer/>
    </div>

  );
}

export default Landingpage;
