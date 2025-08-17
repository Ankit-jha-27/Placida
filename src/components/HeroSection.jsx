import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Typed from "typed.js";

export default function HeroSection() {
  useEffect(() => {
    const typed = new Typed("#elem", {
      strings: [
       '<span class="text-indigo-300">Let calmness be your compass</span>',
      '<span class="text-indigo-300">Peace is a practice, not a pause</span>',
      '<span class="text-indigo-300">Harmony begins with a quiet mind</span>'
      ],
      typeSpeed: 80,
      backSpeed: 0, 
      fadeOut: true,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: false
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="relative w-screen h-[90vh] flex items-center px-8 bg-gradient-to-br from-emerald-400 via-teal-500 to-indigo-600 overflow-hidden">
      
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between w-full items-start md:items-center">
        
        {/* Left Section: Quote */}
        <motion.div
          className="max-w-xl mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-snug text-white drop-shadow-lg">
            <span id="elem" className="text-white/95"></span>
          </h1>
        </motion.div>

        {/* Right Section: Cards */}
        <div className="grid gap-6 w-full md:w-[350px]">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <NavLink
              to="/mood"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 rounded-3xl 
                         cursor-pointer hover:scale-105 transition-transform duration-300 
                         shadow-xl hover:shadow-emerald-400/50 block"
            >
              <h2 className="text-2xl font-semibold mb-2">😊 Mood Tracker</h2>
              <p className="text-sm text-white/90">
                Track your daily emotions and moods easily.
              </p>
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <NavLink
              to="/journal"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-3xl 
                         cursor-pointer hover:scale-105 transition-transform duration-300 
                         shadow-xl hover:shadow-purple-400/50 block"
            >
              <h2 className="text-2xl font-semibold mb-2">📖 Journal</h2>
              <p className="text-sm text-white/90">
                Reflect on your thoughts and document your day.
              </p>
            </NavLink>
          </motion.div>

        </div>
      </div>

      {/* Floating background shapes for calm aesthetic */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full filter blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  );
}
