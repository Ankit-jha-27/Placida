import React, { useState } from 'react';
import YouTube from 'react-youtube';
import toast, { Toaster } from 'react-hot-toast';

const videoLinks = [
  { id: '149tYQEhqvY', title: '15 Minute Guided Meditation to Release Suppressed Emotions' },
  { id: 'zODzQ5K-Da8', title: 'Kundalini Yoga for Emotional and Mental Balance' },
  { id: 'hUeeZf-Cfps', title: 'How to Achieve Emotional Balance | Jack Canfield' },
  { id: 'QHkXvPq2pQE', title: 'Reset: Decompress Your Body and Mind' },
  { id: 'LiUnFJ8P4gM', title: '4-7-8 Calm Breathing Exercise | 10 Minutes of Deep Relaxation' },
  { id: '4lZ2xTpNiqE', title: 'How to Stay Calm When Emotions Run Wild: Emotional Regulation Tips' },
];

const MentalHealth = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [timeLeft, setTimeLeft] = useState({});

  const handleVideoClick = (title) => toast.success(`Enjoy watching: ${title}`);

  const onPlayerReady = (event, id) => {
    const player = event.target;
    const updateTime = () => {
      const duration = player.getDuration();
      const currentTime = player.getCurrentTime();
      const remaining = Math.max(duration - currentTime, 0);
      setTimeLeft((prev) => ({ ...prev, [id]: Math.floor(remaining) }));
    };
    setInterval(updateTime, 1000);
  };

  const filteredVideos = videoLinks.filter(({ title }) =>
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen -mt-16 bg-gradient-to-b from-blue-100 to-white px-6 flex flex-col items-center">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Header */}
      <header className="mb-6 text-center mt-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-4">
          🌿 Mental Health Resources
        </h1>
        <p className="text-gray-700 max-w-xl mx-auto text-lg">
          Explore calming sessions to support your well-being. Breathe deeply, take your time, and remember—you’re not alone.
        </p>
      </header>

      {/* Search Bar */}
      <div className="mb-10 w-full max-w-md">
        <input
          type="text"
          placeholder="Search videos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Video Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {filteredVideos.map(({ id, title }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => handleVideoClick(title)}
          >
            <YouTube
              videoId={id}
              opts={{ width: '100%', height: '200', playerVars: { modestbranding: 1, rel: 0, controls: 1 } }}
              onReady={(event) => onPlayerReady(event, id)}
            />
            <div className="p-4 bg-blue-50 flex justify-between items-center">
              <h3 className="text-md font-semibold text-blue-700">{title}</h3>
              {timeLeft[id] !== undefined && (
                <span className="text-sm text-gray-600">{timeLeft[id]}s left</span>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>If you're struggling, please reach out to a mental health professional. You matter 💙</p>
      </footer>
    </div>
  );
};

export default MentalHealth;
