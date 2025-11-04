import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields!");
      return;
    }

    toast.success("Message sent successfully! 📩");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-20 pb-16 bg-orange-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl font-extrabold text-orange-600 mb-12">
          Contact Us 📞
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-orange-500 mb-6">
              Get in Touch
            </h3>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Map & Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-orange-500 mb-3">
                Visit Us
              </h3>
              <p className="text-gray-700 mb-1">
                🍴 Best Restaurant Pvt. Ltd.
              </p>
              <p className="text-gray-700 mb-1">123 Food Street, New Delhi</p>
              <p className="text-gray-700 mb-1">📧 info@bestrestaurant.com</p>
              <p className="text-gray-700 mb-1">📞 +91 2222222222</p>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392385681!2d77.06889755781907!3d28.5272803432007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2f2c65b9e69%3A0x3c2d8a0e9b21f2a!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1675509809444!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Social Media */}
            <div className="flex space-x-5 justify-center md:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600 text-2xl"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600 text-2xl"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600 text-2xl"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
