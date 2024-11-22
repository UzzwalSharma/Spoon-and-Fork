import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExploreMore = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      imgSrc:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/11/21/FNK_Intsant-Pot-Texas-Style-Chili-Mac_H1.jpg.rend.hgtvcom.1280.960.suffix/1700604212111.jpeg',
      alt: 'Comfort Food',
      label: 'Comfort Food',
      details: 'Warm and hearty meals that feel like a hug in every bite.',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
      alt: 'Healthy Meals',
      label: 'Healthy Meals',
      details: 'Nutritious and delicious meals to fuel your body and mind.',
    },
    {
      imgSrc:
        'https://www.tasteofhome.com/wp-content/uploads/2018/01/Beef-with-Ramen-Noodles_EXPS_FT21_22747_F_1116_1.jpg',
      alt: 'Quick & Easy',
      label: 'Quick & Easy',
      details: 'Time-saving recipes perfect for your busy lifestyle.',
    },
    {
      imgSrc:
        'https://b.zmtcdn.com/data/collections/43b737e798bd1e84733ef1b23fec7002_1676553218.jpg',
      alt: 'Desserts',
      label: 'Desserts',
      details: 'Sweet treats to satisfy your cravings.',
    },
    {
      imgSrc:
        'https://img.washingtonpost.com/rf/image_908w/2010-2019/WashingtonPost/2015/03/03/Foreign/Images/iStock_000018231648_Large1425426370.jpg',
      alt: 'Vegetarian',
      label: 'Vegetarian',
      details: 'Fresh and wholesome vegetarian delights.',
    },
    {
      imgSrc:
        'https://www.azada.co.uk/wp-content/uploads/2020/09/dreamstime_s_156301140.jpg',
      alt: 'Seasonal',
      label: 'Seasonal',
      details: 'Celebrate the flavors of each season.',
    },
  ];

  return (
    <section className="py-5 bg-gray-100" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-4xl font-extrabold text-gray-900">
          Trending Section
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{
                scale: 1.1,
                rotate: 10,
                transition: { type: 'spring', stiffness: 300, damping: 15 },
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 10,
              }}
              transition={{
                opacity: { duration: 0.6, ease: 'easeOut' },
                y: { duration: 0.8, ease: 'easeOut', delay: index * 0.1 },
              }}
              onClick={() => setSelectedCategory(category)} // Open modal on click
            >
              <img
                src={category.imgSrc}
                alt={category.alt}
                className="w-[120px] h-[120px] object-cover rounded-full mb-4 mx-auto shadow-xl transform transition duration-300 ease-in-out hover:shadow-2xl cursor-pointer"
              />
              <p className="text-lg font-semibold text-gray-800">{category.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedCategory(null)}
            >
              ✖
            </button>
            <img
              src={selectedCategory.imgSrc}
              alt={selectedCategory.alt}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">
              {selectedCategory.label}
            </h3>
            <p className="text-gray-700">{selectedCategory.details}</p>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExploreMore;
