import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    // Simulate sending message
    toast.success("Your message has been sent!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 flex flex-col items-center">
      <Toaster position="top-center" reverseOrder={false} />
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Contact Us</h1>
      <p className="text-gray-600 max-w-lg text-center mb-8">
        Have a question, feedback, or just want to say hello? Fill out the form
        below and we’ll get back to you soon.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message..."
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="flex space-x-6 mt-8">
        <a href="#" className="text-blue-500 hover:text-blue-700">Facebook</a>
        <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
        <a href="#" className="text-blue-500 hover:text-blue-700">Instagram</a>
      </div>
    </div>
  );
};

export default Contact;
