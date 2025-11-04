// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  // Update cart count dynamically from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCartCount();

    // Listen for storage changes (in case cart updates in other tabs/components)
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <header className="bg-orange-500 text-white py-4 fixed top-0 w-full z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">🍕 FoodieHub</h1>

        {/* Navigation Links */}
        <ul className="flex gap-6 items-center">
          <li>
            <Link to="/home" className="hover:text-yellow-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-yellow-200 transition">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-200 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-200 transition">
              Contact
            </Link>
          </li>

          {/* 🛒 Cart Link */}
          <li className="relative">
            <Link
              to="/cart"
              className="hover:text-yellow-200 transition flex items-center gap-1"
            >
              🛒 Cart
              {cartCount > 0 && (
                <span className="ml-1 bg-yellow-300 text-orange-800 text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
