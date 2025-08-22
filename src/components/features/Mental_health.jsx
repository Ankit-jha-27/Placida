import React from "react";

const Mental_health = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 flex flex-col items-center">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          Mental Health
        </h1>
        <p className="text-gray-600 text-lg">
          Gentle guidance and resources for emotional balance.
        </p>
      </header>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Mindfulness</h2>
          <p className="text-gray-700">
            Simple exercises to stay present and reduce stress.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Therapy Resources</h2>
          <p className="text-gray-700">
            Find online counseling and local mental health professionals.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Support Communities</h2>
          <p className="text-gray-700">
            Connect with groups and communities that understand you.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Mental_health;
