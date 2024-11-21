import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative text-white py-24">
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
            src="public/10835190-hd_3840_2160_24fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>

      <div className="relative container mx-auto px-4 text-center">
        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight tracking-wide">
          Discover the Science, Culture, and Flavor of Every Bite!
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-2xl mb-8 max-w-2xl mx-auto">
          Your ultimate guide to recipes, flavors, and food insights—all in one app.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-6">
          <Link
            to="dashboard"
            className="px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Get Started
          </Link>
          <Link
            to="features"
            className="px-8 py-3 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-white hover:text-green-600 transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
