// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

import bg from '../assets/bg.jpeg'
import About from "./About";

export default function Home() {
  const navigate = useNavigate();

  return (

    <div className="flex flex-col">
   
    <div
      className="relative min-h-screen flex items-center justify-center text-center text-white bg-cover bg-center pt-20 pb-16"
      style={{
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
        backgroundPosition: 'center',
}}


    >
      
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-[#000000ab] bg-opacity-1"></div>

      <section className="relative z-10 px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-orange-400 mb-4 drop-shadow-lg">
          Welcome to FoodieHub 🍔
        </h2>
        <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Discover delicious meals crafted with love. Explore our diverse menu and satisfy your cravings anytime, anywhere.
        </p>

        <button onClick={() => navigate("/menu")} className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-sm md:text-base transition duration-300 shadow-lg">
          Explore Menu
        </button>
      </section>

    </div>

    <About />
     </div>
  );
}
