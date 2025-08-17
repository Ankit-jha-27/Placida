import React from "react";
import HeroImg from "../assets/heroImg.jpg";
import { NavLink } from "react-router-dom";

export default function LandingPage({ onSignIn, onSignUp }) {
  return (
    <section
      className="relative w-screen h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          "Your mind is your sanctuary. Nurture it with peace."
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Join Placida and start your journey towards a healthier, calmer mind.
        </p>

       
        <div className="">
        <NavLink to="/home">
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full text-lg font-semibold shadow-md transition duration-300">
              Get Started
            </button>
          </NavLink>
        </div>
  
      </div>
    </section>
  );
}
