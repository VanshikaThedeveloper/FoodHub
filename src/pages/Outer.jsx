import { useNavigate } from "react-router-dom";
import outerbg from "../assets/outer3.jpg"; // Make sure you have an image in 1assets folder

export default function Outer() {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${outerbg})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#000000a5] bg-opacity-60"></div>

      {/* Main content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-orange-400 drop-shadow-lg mb-4">
          The Best Restaurant in Town 🍴
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Taste delicious meals that are <span className="text-orange-300 font-semibold">budget-friendly</span> and unforgettable.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/login")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-3 rounded-full text-lg shadow-lg transition duration-300"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-semibold px-10 py-3 rounded-full text-lg transition duration-300"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
