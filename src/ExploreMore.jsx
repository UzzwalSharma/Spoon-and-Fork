import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExploreMore = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,  // Ensure the animation happens every time the section comes into view
    threshold: 0.2,      // Trigger when 20% of the section is in view
  });

  return (
    <section className="py-5 bg-gray-100" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-4xl font-extrabold text-gray-900">
          Trending Section
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {[ 
            // Array of objects for categories
            {
              imgSrc: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/11/21/FNK_Intsant-Pot-Texas-Style-Chili-Mac_H1.jpg.rend.hgtvcom.1280.960.suffix/1700604212111.jpeg',
              alt: 'Comfort Food',
              label: 'Comfort Food',
            },
            {
              imgSrc: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
              alt: 'Healthy Meals',
              label: 'Healthy Meals',
            },
            {
              imgSrc: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Beef-with-Ramen-Noodles_EXPS_FT21_22747_F_1116_1.jpg',
              alt: 'Quick & Easy',
              label: 'Quick & Easy',
            },
            {
              imgSrc: 'https://b.zmtcdn.com/data/collections/43b737e798bd1e84733ef1b23fec7002_1676553218.jpg',
              alt: 'Desserts',
              label: 'Desserts',
            },
            {
              imgSrc: 'https://img.washingtonpost.com/rf/image_908w/2010-2019/WashingtonPost/2015/03/03/Foreign/Images/iStock_000018231648_Large1425426370.jpg',
              alt: 'Vegetarian',
              label: 'Vegetarian',
            },
            {
              imgSrc: 'https://www.azada.co.uk/wp-content/uploads/2020/09/dreamstime_s_156301140.jpg',
              alt: 'Seasonal',
              label: 'Seasonal',
            },
          ].map((category, index) => (
            <motion.div
              key={index}  // Key ensures the component is rerendered when in view
              className="text-center animate__animated animate__fadeIn"
              whileHover={{
                scale: 1.1,  // Scale up the image
                rotate: 10,  // Slight rotation on hover
                transition: { type: 'spring', stiffness: 300, damping: 15 },
              }}
              initial={{ opacity: 0, y: 50 }}  // Initial state with opacity 0 and offset from the bottom
              animate={{
                opacity: inView ? 1 : 0,  // Fade in when in view
                y: inView ? 0 : 10,       // Move up when in view
              }}
              transition={{
                opacity: { duration: 0.6, ease: 'easeOut' },
                y: { duration: 0.8, ease: 'easeOut', delay: index * 0.1 },  // Stagger animation for smoothness
              }}
              exit={{
                opacity: 0,  // Reset opacity when not in view
                y: 50,       // Reset y-position when not in view
                transition: { duration: 0.5, ease: 'easeInOut' },
              }}
            >
              <img
                src={category.imgSrc}
                alt={category.alt}
                className="w-[120px] h-[120px] object-cover rounded-full mb-4 mx-auto shadow-xl transform transition duration-300 ease-in-out hover:shadow-2xl"
              />
              <p className="text-lg font-semibold text-gray-800">{category.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
