import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHospital,
  FaMapMarkedAlt,
  FaVideo,
  FaHeartbeat,
  FaClipboardList,
  FaCommentDots,
} from "react-icons/fa";

const features = [
  { id: "hub", title: "Collaborative Health Resource Hub", icon: <FaHospital />, gradient: "from-green-400 to-teal-500" },
  { id: "reporting", title: "Community Health Reporting and Mapping", icon: <FaMapMarkedAlt />, gradient: "from-blue-400 to-indigo-500" },
  { id: "telemedicine", title: "Telemedicine and Virtual Consultation", icon: <FaVideo />, gradient: "from-purple-400 to-pink-500" },
  { id: "wellness", title: "Preventive Healthcare and Wellness Education", icon: <FaHeartbeat />, gradient: "from-yellow-400 to-orange-500" },
  { id: "tracker", title: "Health Campaign and Program Tracker", icon: <FaClipboardList />, gradient: "from-red-400 to-rose-500" },
  { id: "feedback", title: "Feedback and Referral Loop", icon: <FaCommentDots />, gradient: "from-cyan-400 to-blue-500" },
];

export default function Features() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-100 to-gray-50">
      
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-wide leading-tight">
        Discover What{" "}
        <span className="bg-gradient-to-r from-emerald-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
          Placida
        </span>{" "}
        Offers You
      </h2>

      {/* Features Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {features.map((feature) => (
          <NavLink
            to={`/features/${feature.id}`}
            key={feature.id}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center min-h-[220px] p-6 rounded-3xl 
               transition-transform duration-300 transform hover:scale-105 shadow-md 
               ${isActive 
                 ? `bg-gradient-to-br ${feature.gradient} text-white shadow-xl` 
                 : `bg-gradient-to-br ${feature.gradient} text-white hover:shadow-xl`
               }`
            }
          >
            <div className="text-5xl mb-4 drop-shadow-lg">{feature.icon}</div>
            <h3 className="text-2xl md:text-xl lg:text-2xl font-bold tracking-tight text-center mb-2">
              {feature.title}
            </h3>
            <p className="text-sm md:text-base font-medium text-center text-white/80 leading-relaxed">
              Learn more →
            </p>
          </NavLink>
        ))}
      </div>
    </section>
  );
}
