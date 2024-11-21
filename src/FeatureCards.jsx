import React from "react";

const FeatureCard = ({ title, description, backContent, frontImage, backImage }) => {
  return (
    <div className="feature-card group relative w-full h-80 rounded-xl overflow-hidden shadow-md bg-white transition-transform transform hover:-translate-y-2">
      {/* Front Content */}
      <div
        className="front absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${frontImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 group-hover:opacity-50 transition-opacity"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm mt-1">{description}</p>
        </div>
      </div>

      {/* Back Content */}
      <div
        className="back absolute inset-0 flex flex-col justify-center items-center text-center bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ backgroundImage: `url(${backImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative z-10 text-white">
          <p className="text-lg font-medium">{backContent}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
