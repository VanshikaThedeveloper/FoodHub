// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Outer from "./pages/Outer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import ContactUs from "./pages/Contact";

export default function App() {
  return (
    <Router>

      <Header />
      <Routes>
        <Route path="/" element={<Outer />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
      {/* Toast container to show popups anywhere in app */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
  <Footer />
    </Router>
  );
}
