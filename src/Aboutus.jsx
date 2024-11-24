import React from 'react';
import { 
  Users, 
  UtensilsCrossed, 
  Star, 
  CodeIcon, 
  DatabaseIcon 
} from 'lucide-react';

const RestaurantWebsite = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* About Us Section */}
      <section className="bg-green-100 py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">About Us</h1>
          <div className="flex flex-col items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/2">
              <p className="text-green-700 leading-relaxed">
                We are passionate food lovers dedicated to bringing the most delicious and authentic culinary experiences to your table. Our journey began with a simple dream: to create a place where food tells a story, and every bite is a memorable adventure.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex space-x-4">
              <img 
                src="https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg" 
                alt="Food 1" 
                className="w-1/3 rounded-lg shadow-md hover:scale-105 transition-transform"
              />
              <img 
                src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg" 
                alt="Food 2" 
                className="w-1/3 rounded-lg shadow-md hover:scale-105 transition-transform"
              />
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMxm8P4_-x1MnZn-yKA_GCIhicV4nlq4IAOwffxsPnvS0g4yusOBTnhUo-ho5qH_qQ6I&usqp=CAU" 
                alt="Food 3" 
                className="w-1/3 rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
            <UtensilsCrossed className="inline-block mr-3" />
            Nearby Restaurants, Food Ideas & Famous Dishes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Star className="text-green-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3 text-green-800">Local Favorites</h3>
              <p className="text-green-700">
                Discover the best local restaurants in your area, curated with love and passion for authentic flavors and unique dining experiences.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <UtensilsCrossed className="text-green-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3 text-green-800">Creative Food Ideas</h3>
              <p className="text-green-700">
                Get inspired with innovative recipes, cooking tips, and culinary trends that will transform your home cooking and dining adventures.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Users className="text-green-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3 text-green-800">Famous Dishes</h3>
              <p className="text-green-700">
                Explore a collection of world-renowned dishes, regional specialties, and cultural culinary treasures that tell delicious stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 px-4 bg-green-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
           {/* Frontend Developer */}
<div className="bg-white p-6 rounded-lg shadow-md text-center">
  <div className="flex justify-center mb-4">
    <img 
      src="https://img.freepik.com/premium-vector/man-women-different-avatars-illustration-vector-art-design_666656-112.jpg" 
      alt="Frontend Developer" 
      className="w-32 h-32 rounded-full object-cover border-4 border-green-600"
    />
  </div>
  <CodeIcon className="mx-auto text-green-600 mb-4" size={40} />
  <h3 className="text-xl font-semibold text-green-800 mb-2">Frontend Developer</h3>
  <p className="text-green-700">
    Divyanshi is a dedicated frontend developer with a passion for creating visually stunning and user-friendly web interfaces. She focuses on enhancing the user experience through intuitive designs and seamless interactions.
  </p>
</div>

{/* Full Stack Developer */}
<div className="bg-white p-6 rounded-lg shadow-md text-center">
  <div className="flex justify-center mb-4">
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s" 
      alt="Full Stack Developer" 
      className="w-32 h-32 rounded-full object-cover border-4 border-green-600"
    />
  </div>
  <DatabaseIcon className="mx-auto text-green-600 mb-4" size={40} />
  <h3 className="text-xl font-semibold text-green-800 mb-2">Full Stack Developer</h3>
  <p className="text-green-700">
    Ujjwal is a versatile full stack developer, skilled in both frontend and backend technologies. He is passionate about building robust web applications from the ground up, ensuring both functionality and a smooth user experience.
  </p>
</div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantWebsite;