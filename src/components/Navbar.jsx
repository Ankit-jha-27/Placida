import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import placidaLogo from "../assets/placida-logo.png";


export default function Navbar({ isLoggedIn, userEmail, onSignOut }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const signOut = () => {
    if (onSignOut) onSignOut();
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/"); // redirect to home
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo + Text */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={placidaLogo} alt="Placida Logo" className="h-8 w-auto" />
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Placida
          </span>
        </NavLink>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-emerald-500 transition ${isActive ? "text-emerald-600 font-semibold" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `hover:text-indigo-500 transition ${isActive ? "text-indigo-600 font-semibold" : ""}`
              }
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-pink-500 transition ${isActive ? "text-pink-600 font-semibold" : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-yellow-500 transition ${isActive ? "text-yellow-600 font-semibold" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center space-x-4">
          <form onSubmit={handleSearch} className="flex items-center bg-gray-100 rounded-full px-3 py-1">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none px-2 text-sm"
            />
          </form>

          {!isLoggedIn ? (
            <>
              <NavLink
                to="/login"
                className="px-4 py-2 rounded-full text-gray-700 hover:text-emerald-600 transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/signUp"
                className="px-4 py-2 rounded-full bg-emerald-500 text-white font-medium shadow hover:bg-emerald-600 transition"
              >
                Sign Up
              </NavLink>
            </>
          ) : (
            <>
              <span className="px-4 py-2 rounded-full text-gray-700 font-medium">
                {userEmail}
              </span>
              <button
                onClick={signOut}
                className="px-4 py-2 rounded-full bg-red-500 text-white font-medium shadow hover:bg-red-600 transition"
              >
                Sign Out
              </button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {/* Logo in mobile menu */}
          <div className="flex items-center space-x-2 mb-4">
            <img src={placidaLogo} alt="Placida Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Placida
            </span>
          </div>

          <NavLink to="/" className="block text-gray-700 hover:text-emerald-500">Home</NavLink>
          <NavLink to="/features" className="block text-gray-700 hover:text-indigo-500">Features</NavLink>
          <NavLink to="/about" className="block text-gray-700 hover:text-pink-500">About</NavLink>
          <NavLink to="/contact" className="block text-gray-700 hover:text-yellow-500">Contact</NavLink>

          <form onSubmit={handleSearch} className="flex items-center bg-gray-100 rounded-full px-3 py-1">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none px-2 text-sm w-full"
            />
          </form>

          {!isLoggedIn ? (
            <div className="flex flex-col space-y-3 mt-4">
              <NavLink
                to="/login"
                className="px-4 py-2 rounded-full text-center border border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-600 transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/signUp"
                className="px-4 py-2 rounded-full text-center bg-emerald-500 text-white font-medium shadow hover:bg-emerald-600 transition"
              >
                Sign Up
              </NavLink>
            </div>
          ) : (
            <div className="flex flex-col space-y-3 mt-4">
              <span className="px-4 py-2 rounded-full text-center text-gray-700 font-medium">
                {userEmail}
              </span>
              <button
                onClick={signOut}
                className="px-4 py-2 rounded-full text-center bg-red-500 text-white font-medium shadow hover:bg-red-600 transition"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
