import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative text-white py-24 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="/10835190-hd_3840_2160_24fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>

      {/* Content */}
      <motion.div
        className="relative container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight tracking-wide font-[Poppins]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          Discover the Science, Culture, <br /> and Flavor of Every Bite!
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-2xl mb-8 max-w-2xl mx-auto font-[Roboto]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          Your ultimate guide to recipes, flavors, and food insights—all in one
          app.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            type: "spring",
            stiffness: 200,
          }}
        >
          <Link
            to="dashboard"
            className="px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Get Started
          </Link>
          <Link
            to="contact"
            className="px-8 py-3 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-white hover:text-green-600 transition-colors duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>

         {/* Additional Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full opacity-30"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-28 h-28 bg-green-700 rounded-full opacity-40"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
    </section>
  );
};

export default HeroSection;
