import React, { useState } from "react";
import {
  FaHospital,
  FaMapMarkedAlt,
  FaVideo,
  FaHeartbeat,
  FaClipboardList,
  FaCommentDots,
} from "react-icons/fa";
import FeatureCard from "./FeatureCard";

export default function Features() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const features = [
    {
      title: "Collaborative Health Resource Hub",
      icon: <FaHospital />,
      description: "A shared hub for community health resources.",
      link: "/features/collaborative-health-resource-hub",
    },
    {
      title: "Community Health Reporting & Mapping",
      icon: <FaMapMarkedAlt />,
      description: "Report and view health data on an interactive map.",
      link: "/features/reporting",
    },
    {
      title: "Telemedicine & Virtual Consultation",
      icon: <FaVideo />,
      description: "Access healthcare professionals remotely.",
      link: "/features/telemedicine",
    },
    {
      title: "Preventive Healthcare & Wellness Education",
      icon: <FaHeartbeat />,
      description: "Learn about wellness and preventive care.",
      link: "/features/wellness",
    },
    {
      title: "Health Campaign & Program Tracker",
      icon: <FaClipboardList />,
      description: "Track health initiatives in your area.",
      link: "/features/tracker",
    },
    {
      title: "Wellcida ChatBot",
      icon: <FaCommentDots />,
      description: "Your AI health & wellness assistant.",
      link: "#",
      onClick: () => setIsChatOpen(true), // Open chatbot
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-wide leading-snug text-gray-800">
        Discover What <span className="text-emerald-600">Placida</span> Offers You
      </h2>

      {/* Features Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            onClick={feature.onClick ? feature.onClick : undefined}
            className={feature.onClick ? "cursor-pointer transition-transform hover:scale-105" : ""}
          >
            <FeatureCard
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              link={feature.link}
            />
          </div>
        ))}
      </div>

      {/* Chatbot Popup */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl w-[600px] h-[600px] shadow-2xl relative overflow-hidden transform scale-95 transition-all duration-300 ease-out">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-lg font-bold z-10"
              onClick={() => setIsChatOpen(false)}
            >
              ✖
            </button>
            <iframe
              src="http://localhost:3000"
              className="w-full h-full border-none rounded-2xl"
              title="Wellcida ChatBot"
            />
          </div>
        </div>
      )}
    </section>
  );
}
