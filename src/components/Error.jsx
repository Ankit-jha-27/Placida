import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      
      <h1 className="text-9xl drop-shadow-md">
        404
      </h1>

     
      <p className="mt-6 text-2xl md:text-3xl font-semibold text-gray-800">
        Oops! Page Not Found
      </p>
      <p className="mt-2 text-gray-600">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      
      <Link
        to="/home"
        className="mt-6 inline-flex items-center px-6 py-3 rounded-full bg-emerald-500 text-white font-semibold text-lg shadow-md hover:bg-emerald-600 transition duration-300"
      >
        <HomeIcon className="h-6 w-6 mr-2" />
        Back to Home
      </Link>
    </div>
  );
}
