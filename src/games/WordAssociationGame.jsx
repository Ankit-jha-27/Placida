import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WordGame = () => {
  const [words, setWords] = useState([]);
  const [input, setInput] = useState("");

  const addWord = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setWords([...words, input.trim()]);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-green-100 to-emerald-200 p-8 relative overflow-hidden">
      {/* Floating background blobs */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-green-200 rounded-full filter blur-3xl opacity-40"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-300 rounded-full filter blur-3xl opacity-40"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-green-800 mb-4 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Word Relaxation Game 🌿
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-700 mb-6 text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Type words that make you feel relaxed or happy.  
        Watch your positive word list grow beautifully!
      </motion.p>

      {/* Input Form */}
      <form
        onSubmit={addWord}
        className="flex space-x-2 mb-6"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a calming word..."
          className="border border-green-400 rounded-xl p-3 w-64 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-5 rounded-xl shadow-lg transition-all"
        >
          Add
        </button>
      </form>

      {/* Word List */}
      <div className="flex flex-wrap gap-3 max-w-md justify-center">
        <AnimatePresence>
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {word}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WordGame;
