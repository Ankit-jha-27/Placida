import React, { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

const BreathingGame = () => {
  const [phase, setPhase] = useState("Inhale");
  const [timer, setTimer] = useState(4);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);
  const phaseTimeoutRef = useRef(null);

  const phases = ["Inhale", "Hold", "Exhale"];
  const durations = [4, 4, 6];
  let phaseIndexRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      startGame();
    } else {
      clearInterval(intervalRef.current);
      clearTimeout(phaseTimeoutRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(phaseTimeoutRef.current);
    };
  }, [isRunning]);

  const startGame = () => {
    clearInterval(intervalRef.current);
    clearTimeout(phaseTimeoutRef.current);

    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) return prev;
        return prev - 1;
      });
    }, 1000);

    phaseTimeoutRef.current = setTimeout(changePhase, durations[phaseIndexRef.current] * 1000);
  };

  const changePhase = () => {
    phaseIndexRef.current = (phaseIndexRef.current + 1) % phases.length;
    setPhase(phases[phaseIndexRef.current]);
    setTimer(durations[phaseIndexRef.current]);
    startGame();
  };

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    clearInterval(intervalRef.current);
    clearTimeout(phaseTimeoutRef.current);
    phaseIndexRef.current = 0;
    setPhase("Inhale");
    setTimer(4);
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-8">
      <h2 className="text-4xl font-bold text-blue-800 mb-4">Breathing Game</h2>

      {/* Breathing animation circle (smaller) */}
      <div
        className={`w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-1000 ${
          phase === "Inhale" ? "scale-125" : phase === "Exhale" ? "scale-90" : "scale-100"
        }`}
      >
        <span className="text-xl font-semibold text-gray-700">{phase}</span>
      </div>

      {/* Timer */}
      <div className="text-5xl font-bold text-gray-800 mt-4">{timer}s</div>

      <p className="text-gray-700 mt-6 text-center max-w-md">
        Follow the rhythm: inhale, hold, and exhale to relax your mind and body.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={handleStart}
          className="px-5 py-2 flex items-center gap-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          <FaPlay /> Start
        </button>
        <button
          onClick={handleStop}
          className="px-5 py-2 flex items-center gap-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          <FaPause /> Stop
        </button>
        <button
          onClick={handleReset}
          className="px-5 py-2 flex items-center gap-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          <FaRedo /> Reset
        </button>
      </div>
    </div>
  );
};

export default BreathingGame;
