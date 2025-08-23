import React from "react";
import { Heart, Users, MessageCircle, Lightbulb, Shield, Sparkles } from "lucide-react";

export default function Relationships() {
  const relationships = [
    { icon: Heart, title: "Active Listening", description: "Practice deep, empathetic listening without judgment.", color: "bg-rose-100 text-rose-700" },
    { icon: Users, title: "Emotional Validation", description: "Acknowledge and validate others' feelings.", color: "bg-blue-100 text-blue-700" },
    { icon: MessageCircle, title: "Open Communication", description: "Express your needs and boundaries clearly while remaining open to feedback.", color: "bg-green-100 text-green-700" },
    { icon: Lightbulb, title: "Mindful Awareness", description: "Stay present in your interactions and notice your emotional responses.", color: "bg-amber-100 text-amber-700" },
    { icon: Shield, title: "Healthy Boundaries", description: "Maintain your well-being while supporting others.", color: "bg-purple-100 text-purple-700" },
    { icon: Sparkles, title: "Growth Mindset", description: "Approach conflicts as opportunities for understanding and stronger connections.", color: "bg-teal-100 text-teal-700" },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-4">
          <Heart className="h-8 w-8 text-rose-500" />
          <span className="px-2 py-1 rounded-full bg-gray-200 text-sm font-medium">Relationships</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-rose-600">
          Fostering Compassion & Healthy Relationships
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Building meaningful relationships starts with understanding ourselves and extending genuine compassion to others.
        </p>
      </div>

      {/* Principles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {relationships.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <div
              key={index}
              className={`p-6 rounded-lg shadow hover:shadow-lg transition duration-300 ${principle.color}`}
            >
              <div className="flex items-center justify-center mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
              <p className="text-sm">{principle.description}</p>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="max-w-2xl mx-auto p-6 rounded-lg bg-gradient-to-br from-rose-50 to-purple-50 shadow">
          <h2 className="text-2xl font-bold mb-2">Start Your Relationships Journey</h2>
          <p className="mb-4 text-gray-700">
            Small, consistent actions in compassion and connection can transform your relationships and well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition">
              Talk to our Chatbot
            </button>
            <button className="px-6 py-3 border border-rose-300 text-rose-700 rounded-lg hover:bg-rose-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
