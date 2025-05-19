
import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/food-hero.png";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse bg-amber-100 md:flex-row items-center justify-between py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-10">
      {/* Left content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
          Savor the <span className="text-orange-500">Speed</span>, <br />
          Love the <span className="text-yellow-400">Flavor</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed italic tracking-wide">
          SwiftMeal brings <span className="text-orange-500 font-semibold">gourmet flavors</span> to your doorstep — piping hot, lightning fast, and irresistibly fresh.
        </p>
        <Link
          to="/menu"
          className="inline-block bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
        >
          🍽️ Explore Menu
        </Link>
      </div>

      {/* Right image */}
      <div className="md:w-1/2 mb-12 md:mb-0 relative flex justify-center">
        <div className="transition-transform duration-500 hover:scale-105">
          <img
            src={heroImage}
            alt="Delicious food"
            className="w-full max-w-md md:max-w-lg rounded-3xl shadow-2xl border-4 border-white"
          />
        </div>
        <span className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 text-sm rounded-full shadow-lg font-semibold">
          Hot & Fresh!
        </span>
      </div>
    </section>
  );
};

export default Hero;
