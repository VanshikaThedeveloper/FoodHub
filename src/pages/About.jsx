import React from "react";
import { useNavigate } from "react-router-dom";
import pizza from '../assets/pizza1.jpg' 
import chef from '../assets/chef.jpg'
import food from '../assets/foodImg.jpg'
import desert from '../assets/desert.jpg'

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="pt-20 pb-16 bg-gradient-to-br from-orange-50 to-orange-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4">
          About <span className="text-gray-800">FoodieHub 🍽️</span>
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          Welcome to <strong>FoodieHub</strong> — where passion for food meets excellence in flavor.
          Since our founding in 2015, we’ve been committed to serving mouth-watering dishes made
          from the freshest ingredients. Whether you’re dining in, ordering online, or grabbing a
          quick bite — our goal is to make every meal an unforgettable experience.
        </p>
      </section>

      {/* Image & Info Section */}
      <section className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16">
        <img
          src={pizza}
          alt="Restaurant"
          className="w-full md:w-1/2 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
        />
        <div className="max-w-md">
          <h3 className="text-3xl font-bold text-orange-600 mb-4">Our Story</h3>
          <p className="text-gray-700 leading-relaxed">
            FoodieHub started as a small family restaurant with a big dream — to bring happiness to
            every plate. Our chefs combine global flavors with local ingredients to create unique,
            comforting, and delicious meals. Every dish tells a story — one of warmth, love, and
            creativity.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="mt-20 px-6 md:px-12">
        <h3 className="text-3xl font-bold text-center text-orange-600 mb-10">
          Why Choose FoodieHub?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 text-center">
            <img
              src={chef}
              alt="Chef"
              className="w-full h-56 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
            />
            <h4 className="text-2xl font-semibold text-orange-500 mb-2">
              Master Chefs 👨‍🍳
            </h4>
            <p className="text-gray-600">
              Our experienced chefs blend passion and skill to craft dishes that delight every taste
              bud. We believe cooking is an art — and every meal is a masterpiece.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 text-center">
            <img
              src={food}
              alt="Fresh Ingredients"
              className="w-full h-56 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
            />
            <h4 className="text-2xl font-semibold text-orange-500 mb-2">
              Fresh Ingredients 🥗
            </h4>
            <p className="text-gray-600">
              We use only the finest and freshest locally-sourced ingredients to ensure every bite
              is bursting with flavor and nutrition.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 text-center">
            <img
              src={desert}
              alt="Restaurant Ambience"
              className="w-full h-56 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
            />
            <h4 className="text-2xl font-semibold text-orange-500 mb-2">
              Cozy Ambience 💫
            </h4>
            <p className="text-gray-600">
              Whether it’s a family dinner or a date night, FoodieHub offers a warm, cozy, and
              vibrant environment perfect for every occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Ending Section */}
      <section className="mt-20 text-center px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
          Taste the Love, Feel the Flavor ❤️
        </h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Join us for an unforgettable culinary journey where every meal is made with care,
          creativity, and love. Your happiness is our secret ingredient!
        </p>
        <button onClick={() => navigate("/menu")}  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300">
          Explore Our Menu
        </button>
      </section>
    </div>
  );
}
