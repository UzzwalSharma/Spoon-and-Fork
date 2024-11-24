import React from 'react';
import FeatureCard from './FeatureCards';

const FeatureSection = () => {
  const featureData = [
    {
      title: "Ingredient Substitute Finder",
      description: "Find alternative ingredients based on your dietary preferences.",
      backContent: "Our ingredient substitute finder helps you find alternatives for unavailable ingredients while maintaining flavor.",
      frontImage: "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
      backImage: "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98="
    },
    {
      title: "Dietary Search",
      description: "Explore recipes based on your dietary needs.",
      backContent: "Filter ingredients and recipes based on various dietary needs such as gluten-free, vegan, etc.",
      frontImage: "https://ca.organictraditions.com/cdn/shop/articles/spoon_with_healthy_food_options_1.jpg?v=1689933271",
      backImage: "https://ca.organictraditions.com/cdn/shop/articles/spoon_with_healthy_food_options_1.jpg?v=1689933271"
    },
    {
      title: "Cultural Context",
      description: "Learn about the cultural significance of recipes.",
      backContent: "Discover the origin of recipes, their regional variations, and the cultural context behind each dish.",
      frontImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e06cd854344503.59575b1721d15.jpg",
      backImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e06cd854344503.59575b1721d15.jpg"
    },
    {
      title: "AI Assistance",
      description: "Get real-time help with cooking through AI-powered suggestions.",
      backContent: "Ask the AI about recipes, ingredient alternatives, or get tips for better cooking.",
      frontImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e06cd854344503.59575b1721d15.jpg",
      backImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e06cd854344503.59575b1721d15.jpg"
    },
    {
      title: "Recipe Finder",
      description: "Search for thousands of recipes with customizable filters.",
      backContent: "Find the perfect recipe for your cravings by filtering ingredients, cuisine, or diet preferences.",
      frontImage: "https://media.licdn.com/dms/image/D4E12AQFCcqRtAc1h2w/article-cover_image-shrink_600_2000/0/1697105065208",
      backImage: "https://ca.organictraditions.com/cdn/shop/articles/spoon_with_healthy_food_options_1.jpg?v=1689933271"
    },
    {
      title: "Grocery Delivery",
      description: "Get your ingredients delivered straight to your door.",
      backContent: "Easily order the ingredients for your selected recipe directly from our platform.",
      frontImage: "https://restaurantengine.com/wp-content/uploads/2014/10/Second-Restaurant-Location.jpg",
      backImage: "https://restaurantengine.com/wp-content/uploads/2014/10/Second-Restaurant-Location.jpg"
    }
  ];

  return (
    <section id="features-section" className="feature-section bg-green-50 py-16">
      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-800 leading-tight">
          Discover the Features That Enhance Your Cooking Journey
        </h2>
        <p className="mt-4 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our diverse set of features designed to help you create, discover, and enjoy recipes effortlessly.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-12 sm:py-8 lg:px-8  place-items-center">
  {featureData.map((feature, index) => (
    <FeatureCard
      key={index}
      title={feature.title}
      description={feature.description}
      backContent={feature.backContent}
      frontImage={feature.frontImage}
      backImage={feature.backImage}
    />
  ))}
</div>

    </section>
  );
};

export default FeatureSection;
