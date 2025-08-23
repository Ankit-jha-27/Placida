import React, { useState, useEffect, useRef } from "react";

// Distinct, visually appealing shades
const colors = ["#1E3A8A", "#B91C1C", "#D97706", "#059669", "#9333EA"];

const MoodColorGame = () => {
  const [highlightIndex, setHighlightIndex] = useState(null);
  const [targetIndex, setTargetIndex] = useState(null);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState("");
  const intervalRef = useRef(null);

  const startGame = () => {
    setResult("");
    setTargetIndex(Math.floor(Math.random() * colors.length));
    setRunning(true);

    intervalRef.current = setInterval(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * colors.length);
      } while (randomIndex === highlightIndex);
      setHighlightIndex(randomIndex);
    }, 200);
  };

  const stopGame = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };

  const resetGame = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setHighlightIndex(null);
    setTargetIndex(null);
    setResult("");
  };

  const handleSelect = (idx) => {
    if (targetIndex === null || running) return;
    if (idx === targetIndex) {
      setResult("✅ Correct! You guessed the mood color!");
    } else {
      setResult("❌ You lose! Try again.");
    }
  };

  useEffect(() => {
    if (running) {
      const timer = setTimeout(() => stopGame(), 3000);
      return () => clearTimeout(timer);
    }
  }, [running]);

  // Arrange boxes in a circle
  const radius = 120;
  const angleStep = (2 * Math.PI) / colors.length;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-8 relative">
      <h2 className="text-3xl font-bold text-white mb-4">🎯 Mood Color Challenge</h2>
      <p className="text-gray-300 mb-6 text-center max-w-md">
        Watch the glowing box, then guess the correct color when it stops.
      </p>

      <div className="relative w-[300px] h-[300px] mb-6">
        {colors.map((color, idx) => {
          const angle = idx * angleStep - Math.PI / 2;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <div
              key={idx}
              onClick={() => handleSelect(idx)}
              style={{
                backgroundColor: color,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                width: "60px",
                height: "60px",
                borderRadius: "12px",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              {highlightIndex === idx && (
                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.35)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    transition: "opacity 0.2s ease-in-out",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex space-x-4 mb-4">
        <button
          onClick={startGame}
          disabled={running}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Start
        </button>
        <button
          onClick={stopGame}
          disabled={!running}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Stop
        </button>
        <button
          onClick={resetGame}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <p
          className={`text-xl font-semibold ${
            result.includes("✅") ? "text-green-400" : "text-red-400"
          }`}
        >
          {result}
        </p>
      )}
    </div>
  );
};

export default MoodColorGame;
