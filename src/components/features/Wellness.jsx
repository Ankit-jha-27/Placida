import React from "react";
import { NavLink } from "react-router-dom";
import { FaWind, FaPalette, FaComments } from "react-icons/fa";

const Wellness = () => {
  const games = [
    {
      title: "Breathing Game",
      description:
        "Relax and improve focus through guided breathing exercises.",
      icon: <FaWind className="text-4xl text-blue-500" />,
      link: "breathing", // relative path
    },
    {
      title: "Color Match Game",
      description:
        "Enhance your mood and creativity by matching vibrant colors.",
      icon: <FaPalette className="text-4xl text-pink-500" />,
      link: "color-match",
    },
    {
      title: "Word Association Game",
      description:
        "Stimulate your mind with engaging word association challenges.",
      icon: <FaComments className="text-4xl text-green-500" />,
      link: "word-association",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 pt-28 flex flex-col items-center">
      {/* Increased pt-28 for more top spacing */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          Wellness Games
        </h1>
        <p className="text-gray-600 max-w-xl">
          Engage in fun, interactive games designed to boost your mental
          wellness and focus.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {games.map((game, index) => (
          <NavLink
            to={game.link}
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center 
                       hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            {game.icon}
            <h2 className="text-xl font-semibold mt-4 mb-2">{game.title}</h2>
            <p className="text-gray-500 text-center">{game.description}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Wellness;
