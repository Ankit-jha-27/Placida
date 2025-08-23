import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Journal = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  const createPaste = () => {
    if (title.trim() === '' || value.trim() === '') {
      toast.error('Please fill in both fields!');
      return;
    }

    console.log('Title:', title);
    console.log('Content:', value);

    setTitle('');
    setValue('');
    toast.success('Journal entry posted!');
  };

  return (
    <div className="min-h-screen -mt-16 bg-gray-800 text-white px-4 flex items-start justify-center">
      {/* Container below Navbar */}
      <div className="max-w-3xl w-full text-indigo-300 rounded-3xl shadow-2xl p-8 flex flex-col mt-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-teal-500">
          Daily Journal
        </h1>

        <input
          type="text"
          placeholder="Enter Title"
          className="rounded-2xl border border-gray-700 bg-gray-700 p-3 mb-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="How was your day?"
          className="rounded-2xl border border-gray-700 bg-gray-700 p-4 mb-4 min-h-[300px] text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button
          onClick={createPaste}
          className="self-end bg-gradient-to-r from-teal-500 to-indigo-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transform transition"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Journal;
