import React from "react";
import FeatureCard from "./FeatureCard";
import { UserCircleIcon, SparklesIcon, HeartIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

export default function FeaturesSection() {
  const features = [
    {
      title: "Mental Health",
      description: "Gentle guidance and resources for emotional balance.",
      icon: <UserCircleIcon className="h-10 w-10 text-emerald-600" />,
      link: "/mental-health",
      gradient: "from-emerald-200 to-teal-300",
    },
    {
      title: "Wellness",
      description: "Daily habits and self-care tips for a healthier you.",
      icon: <SparklesIcon className="h-10 w-10 text-indigo-600" />,
      link: "/wellness",
      gradient: "from-indigo-200 to-purple-300",
    },
    {
      title: "Meditation",
      description: "Guided breathing and mindfulness sessions.",
      icon: <HeartIcon className="h-10 w-10 text-pink-600" />,
      link: "/meditation",
      gradient: "from-pink-200 to-rose-300",
    },
    {
      title: "Relationships",
      description: "Fostering compassion and healthy connections.",
      icon: <ChatBubbleLeftIcon className="h-10 w-10 text-yellow-600" />,
      link: "/relationships",
      gradient: "from-yellow-200 to-orange-300",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-20 bg-gradient-to-b from-sky-50 via-blue-50 to-emerald-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Caring Support, Every Step of the Way
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Explore tools and resources to help you nurture your mental and emotional well-being.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            link={feature.link}
            gradient={feature.gradient}
            className="rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 text-gray-800"
          />
        ))}
      </div>
    </section>
  );
}
