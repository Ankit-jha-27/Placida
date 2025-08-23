import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Typed from "typed.js";

export default function HeroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        '<span class="bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent">You are stronger than you feel</span>',
        '<span class="bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent">Healing starts with small steps</span>',
        '<span class="bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent">Your feelings are valid</span>'
      ],
      typeSpeed: 60,
      backSpeed: 0,
      backDelay: 2500,
      fadeOut: true,
      loop: true,
      showCursor: false,
      smartBackspace: false
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="relative w-screen min-h-screen -mt-20 flex items-center px-8 bg-gradient-to-br from-sky-100 via-blue-200 to-emerald-100 overflow-hidden">
      
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 w-full">

        {/* Left Section: Animated Quote */}
        <motion.header
          className="max-w-xl mb-8 md:mb-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-semibold mb-4 leading-snug drop-shadow-sm">
            <span ref={typedRef}></span>
          </h1>
        </motion.header>

        {/* Right Section: Cards */}
        <div className="grid gap-6 w-full md:w-[350px]">
          {/* Mood Tracker Card */}
          <motion.article
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <NavLink
              to="/mood"
              className="bg-gradient-to-r from-emerald-300 to-teal-400 p-6 rounded-3xl border border-white
                         cursor-pointer hover:scale-105 transition-transform duration-300 
                         shadow-xl hover:shadow-emerald-400/60 block"
            >
              <h2 className="text-xl font-semibold mb-2 text-black">😊 Mood Tracker</h2>
              <p className="text-sm text-black">
                Understand and reflect on your daily emotions.
              </p>
            </NavLink>
          </motion.article>

          {/* Journal Card */}
          <motion.article
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <NavLink
              to="/journal"
              className="bg-gradient-to-r from-purple-300 to-violet-400 p-6 rounded-3xl border border-white
                         cursor-pointer hover:scale-105 transition-transform duration-300 
                         shadow-xl hover:shadow-purple-400/60 block"
            >
              <h2 className="text-xl font-semibold mb-2 text-black">📖 Journal</h2>
              <p className="text-sm text-black">
                Write, release, and find clarity in your thoughts.
              </p>
            </NavLink>
          </motion.article>
        </div>
      </div>

      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-100 rounded-full filter blur-3xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  );
}
