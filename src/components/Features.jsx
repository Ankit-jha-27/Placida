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
  { id: "collaborative-health-resource-hub", title: "Collaborative Health Resource Hub", icon: <FaHospital /> },
  { id: "reporting", title: "Community Health Reporting & Mapping", icon: <FaMapMarkedAlt /> },
  { id: "telemedicine", title: "Telemedicine & Virtual Consultation", icon: <FaVideo /> },
  { id: "wellness", title: "Preventive Healthcare & Wellness Education", icon: <FaHeartbeat /> },
  { id: "tracker", title: "Health Campaign & Program Tracker", icon: <FaClipboardList /> },
  { id: "feedback", title: "Feedback & Referral Loop", icon: <FaCommentDots /> },
];

export default function Features() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-wide leading-tight text-gray-800">
        Discover What{" "}
        <span className="text-emerald-600">
          Placida
        </span>{" "}
        Offers You
      </h2>

      {/* Features Flex Layout */}
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature) => (
          <NavLink
            to={`/features/${feature.id}`}
            key={feature.id}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-full sm:w-[45%] lg:w-[30%] min-h-[220px] 
               p-6 rounded-2xl border border-gray-200 bg-white shadow-sm 
               transition-all duration-300 transform hover:scale-105 hover:shadow-md 
               ${isActive ? "ring-2 ring-emerald-400" : ""}`
            }
          >
            <div className="text-5xl mb-4 text-emerald-600">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-center mb-3 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-500 text-center">
              Learn more →
            </p>
          </NavLink>
        ))}
      </div>
    </section>
  );
}
