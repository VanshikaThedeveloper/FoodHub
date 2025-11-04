import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import cake from '../assets/cake.jpg'
import fruitbowl from '../assets/fruits.jpg'
import brownie from '../assets/brownee.jpg'

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  // Sample menu data
  const menuItems = [
    {
      id: 1,
      name: "Chocolate Cake",
      category: "Desserts",
      price: 280,
      img: cake,
    },
    {
      id: 2,
      name: "Greek Salad",
      category: "Healthy",
      price: 220,
      img: "https://cdn.pixabay.com/photo/2016/03/05/19/02/salad-1238245_1280.jpg",
    },
    {
      id: 3,
      name: "Cold Coffee",
      category: "Drinks",
      price: 150,
      img: "https://cdn.pixabay.com/photo/2016/03/05/19/02/coffee-1238246_1280.jpg",
    },
    {
      id: 4,
      name: "Margherita Pizza",
      category: "All",
      price: 250,
      img: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
    },
    {
      id: 5,
      name: "Fruit",
      category: "Healthy",
      price: 130,
      img: fruitbowl,
    },
    {
      id: 6,
      name: "Brownie Sundae",
      category: "Desserts",
      price: 200,
      img: brownie,
    },
  ];

  // Get stored cart from localStorage on load
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  // Add to cart function
  const addToCart = (item) => {
    const exists = cart.find((cartItem) => cartItem.id === item.id);
    if (exists) {
      toast.info(`${item.name} is already in your cart.`);
    } else {
      setCart([...cart, item]);
      toast.success(`${item.name} added to cart! 🛒`);
    }
  };

  // Categories
  const categories = ["All", "Desserts", "Healthy", "Drinks"];

  return (
    <div className="pt-20 pb-16 px-4 md:px-10 bg-orange-50 min-h-screen">
      {/* Header */}
      <h2 className="text-center text-4xl font-extrabold text-orange-600 mb-8">
        Our Menu 🍴
      </h2>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition duration-300 ${
              selectedCategory === cat
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-white border border-orange-400 text-orange-500 hover:bg-orange-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-orange-600">{item.name}</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Category: <span className="font-medium">{item.category}</span>
              </p>
              <p className="text-lg font-semibold mt-2 text-gray-800">
                ₹{item.price}
              </p>
              <button
                onClick={() => addToCart(item)}
                className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
