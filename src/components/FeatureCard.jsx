import React from "react";
import { NavLink } from "react-router-dom";

export default function FeatureCard({ title, description, icon, link, gradient }) {
  return (
    <NavLink
      to={link}
      className={`bg-gradient-to-r ${gradient} p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-200 flex flex-col items-start`}
    >
      {icon}
      <h3 className="text-xl font-semibold mt-4 mb-2 text-white">{title}</h3>
      <p className="text-white/90 text-sm">{description}</p>
    </NavLink>
  );
}
