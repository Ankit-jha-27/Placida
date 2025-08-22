import React from "react";
import { NavLink } from "react-router-dom";

export default function FeatureCard({ title, description, icon, link }) {
  return (
    <NavLink
      to={link}
      className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md 
                 hover:-translate-y-1 transition-all duration-300 
                 flex flex-col items-start"
    >
      {/* Icon in subtle circle background */}
      <div className="p-3 rounded-full bg-gray-100 mb-4">
        {icon}
      </div>

      <h3 className="text-lg font-semibold mb-2 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </NavLink>
  );
}
