import React from "react";
import FeatureCard from "./FeatureCard";
import { UserCircleIcon, SparklesIcon, HeartIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

export default function FeaturesSection() {
  const features = [
    {
      title: "Mental Health",
      description: "Explore resources and tips to keep your mind healthy.",
      icon: <UserCircleIcon className="h-10 w-10 text-emerald-500" />,
      link: "/mental-health",
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      title: "Wellness",
      description: "Find exercises, routines, and tips to stay well.",
      icon: <SparklesIcon className="h-10 w-10 text-indigo-500" />,
      link: "/wellness",
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      title: "Meditation",
      description: "Guided meditation and breathing exercises.",
      icon: <HeartIcon className="h-10 w-10 text-pink-500" />,
      link: "/meditation",
      gradient: "from-pink-400 to-red-500",
    },
    {
      title: "Relationships",
      description: "Advice and support for healthy relationships.",
      icon: <ChatBubbleLeftIcon className="h-10 w-10 text-yellow-500" />,
      link: "/relationships",
      gradient: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-20 bg-emerald-200">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            link={feature.link}
            gradient={feature.gradient}
          />
        ))}
      </div>
    </section>
  );
}
