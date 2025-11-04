import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";
import { toast } from "react-toastify";
import outerbg from "../assets/outer1.jpg";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = loginUser(email, password);
    if (success) {
      toast.success("✅ Login successful!");
      setTimeout(() => navigate("/home"), 1500);
    } else {
      toast.error("❌ Invalid email or password!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen "
    style={{
                    backgroundImage: `url(${outerbg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
    >
       <div className="absolute inset-0 bg-[#000000a5] bg-opacity-60"></div>

      <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-orange-500">
          Welcome Back 🍔
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <span
            className="text-orange-500 font-semibold cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
