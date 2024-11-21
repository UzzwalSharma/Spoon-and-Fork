import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FeatureCard = ({ title, description, backContent, frontImage, backImage }) => {
  const cardRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="feature-card relative w-64 h-80 bg-gray-50 rounded-lg overflow-hidden shadow-xl cursor-pointer"
      initial={{ rotateY: 0 }}
      whileHover={{ rotateY: 180 }} // Flip on hover
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 20, // Smoother flip with damping
      }}
      style={{
        perspective: "1000px", // Add perspective for 3D effect
        transformStyle: "preserve-3d",
      }}
      ref={cardRef}
    >
      {/* Front of the card */}
      <motion.div
        className="front absolute inset-0 bg-gradient-to-tr from-blue-100 to-blue-50 flex flex-col items-center justify-center text-center transform-backface-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img
          src={frontImage}
          alt="feature"
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <motion.div
          className="p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.h3
            className="text-xl font-bold text-gray-700 tracking-wide"
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: isInView ? 0 : -20,
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
              delay: 0.4,
            }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="mt-2 text-base text-gray-600 font-medium"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isInView ? 0 : 20,
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
              delay: 0.5,
            }}
          >
            {description}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Back of the card */}
      <motion.div
        className="back absolute inset-0 bg-gradient-to-tr from-green-500 to-green-300 text-white flex flex-col items-center justify-center text-center transform rotateY-180 transform-backface-hidden"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isInView ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.6,
        }}
      >
        <motion.div className="text-xl p-4">
          <motion.img
            src={backImage}
            alt="feature details"
            className="w-full h-40 object-cover rounded-lg mb-4 shadow-lg"
            initial={{ scale: 0.9, rotate: 10 }}
            animate={{
              scale: isInView ? 1 : 0.9,
              rotate: isInView ? 0 : 10,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          />
          <motion.p
            className="text-base font-medium tracking-wide"
            initial={{ opacity: 0 }}
            animate={{
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.7,
            }}
          >
            {backContent}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;
