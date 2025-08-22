import React from "react";
import { LightBulbIcon, ClipboardDocumentListIcon, HeartIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Explore Resources",
    description: "Browse trusted wellness guides, mental health articles, and community tips.",
    icon: <LightBulbIcon className="h-10 w-10 text-emerald-600" />,
  },
  {
    title: "Track & Participate",
    description: "Join health campaigns, track your progress, and contribute to your community.",
    icon: <ClipboardDocumentListIcon className="h-10 w-10 text-teal-600" />,
  },
  {
    title: "Get Support",
    description: "Connect with experts, friends, and mentors for guidance and encouragement.",
    icon: <HeartIcon className="h-10 w-10 text-pink-600" />,
  },
  {
    title: "Share Feedback",
    description: "Help improve the platform by sharing your thoughts and suggestions.",
    icon: <ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-indigo-600" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-8 md:px-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          How It Works
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Placida makes it simple to take care of your health and connect with your community in just a few steps.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 bg-gray-50"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
