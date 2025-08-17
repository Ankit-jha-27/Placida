import React, { useState } from 'react';
import toast from 'react-hot-toast';

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState('');

  const moods = [
    { emoji: '😄', label: 'Happy' },
    { emoji: '😐', label: 'Neutral' },
    { emoji: '😢', label: 'Sad' },
    { emoji: '😡', label: 'Angry' },
    { emoji: '😴', label: 'Tired' },
  ];

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood.label);
    toast.success(`Mood "${mood.label}" recorded!`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-gray-800 rounded-3xl shadow-2xl p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-teal-400 text-center">
          Mood Tracker
        </h1>

        <p className="mb-6 text-gray-300 text-center">
          How are you feeling today? Select your current mood:
        </p>

        {/* Mood Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() => handleMoodSelect(mood)}
              className={`flex flex-col items-center justify-center w-24 h-24 rounded-2xl text-2xl shadow-lg transition transform hover:scale-105 ${
                selectedMood === mood.label
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              <span>{mood.emoji}</span>
              <span className="text-sm mt-2">{mood.label}</span>
            </button>
          ))}
        </div>

        {selectedMood && (
          <p className="mt-6 text-teal-300 text-lg text-center">
            Your current mood: <strong>{selectedMood}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default MoodTracker;
