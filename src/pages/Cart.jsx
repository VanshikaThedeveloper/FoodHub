// src/pages/Cart.jsx
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart whenever it changes & update header badge
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage")); // trigger header update
  }, [cart]);

  // Increase quantity
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setCart(updatedCart);
    toast.success("Quantity increased ➕", { autoClose: 800 });
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
    toast.info("Quantity updated ➖", { autoClose: 800 });
  };

  // Remove item
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    toast.error("Item removed from cart ❌");
  };

  // Calculate total
  const getTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  // Place order
  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast.info("Your cart is empty!");
      return;
    }
    toast.success("🎉 Order placed successfully!", { autoClose: 2000 });
    setCart([]);
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="pt-20 pb-16 px-6 bg-orange-50 min-h-screen">
      <h2 className="text-center text-4xl font-extrabold text-orange-600 mb-8">
        Your Cart 🛒
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Your cart is empty. Add some delicious items from the menu!
        </p>
      ) : (
        <div className="max-w-5xl mx-auto">
          {/* Cart Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col sm:flex-row items-center p-5"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-36 h-36 object-cover rounded-xl mb-4 sm:mb-0 sm:mr-4"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-orange-600">
                    {item.name}
                  </h3>
                  <p className="text-gray-700 mt-1 font-semibold">
                    ₹{item.price}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex justify-center sm:justify-start items-center gap-3 mt-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full font-bold hover:bg-gray-300 transition"
                    >
                      −
                    </button>
                    <span className="text-lg font-semibold">
                      {item.quantity || 1}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-orange-500 text-white px-3 py-1 rounded-full font-bold hover:bg-orange-600 transition"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-12 text-center bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">
              Order Summary
            </h3>
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Total Items: {cart.length}
            </p>
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Total Amount: ₹{getTotal()}
            </p>
            <button
              onClick={handlePlaceOrder}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-md"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
