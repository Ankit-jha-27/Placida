// src/components/FeaturesSection.jsx
import React from "react";
import FeatureCard from "./FeatureCard";
import {
  UserCircleIcon,
  SparklesIcon,
  HeartIcon,
  ChatBubbleLeftIcon
} from "@heroicons/react/24/outline";

export default function FeaturesSection() {
  const features = [
    {
      title: "Mental Health",
      description: "Gentle guidance and resources for emotional balance.",
      icon: <UserCircleIcon className="h-10 w-10 text-emerald-600" />,
      link: "/mental-health",
    },
    {
      title: "Wellness Gamification",
      description: "Fun games and activities to boost your mental well-being every day",
      icon: <SparklesIcon className="h-10 w-10 text-indigo-600" />,
      link: "/wellness",
    },
    {
      title: "Meditation",
      description: "Guided breathing and mindfulness sessions.",
      icon: <HeartIcon className="h-10 w-10 text-pink-600" />,
      link: "/meditation",
    },
    {
      title: "Relationships",
      description: "Fostering compassion and healthy connections.",
      icon: <ChatBubbleLeftIcon className="h-10 w-10 text-yellow-600" />,
      link: "/relationships",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-emerald-50 via-teal-50 to-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Explore Our Features
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          A space designed to support your emotional well-being through mindful resources, 
          self-care tips, and a community that truly cares.
        </p>
      </div>

      {/* Features - Flexbox Layout */}
      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="w-full sm:w-[48%] lg:w-[23%]">
            <FeatureCard
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              link={feature.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
