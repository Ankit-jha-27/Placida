import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white p-8 flex flex-col items-center">
     
      <h1 className="text-4xl font-bold text-emerald-700 mb-6 text-center">
        About Us
      </h1>

      {/* Content */}
      <div className="max-w-4xl text-gray-700 text-lg space-y-4">
        <p>
          Welcome to <span className="font-semibold text-emerald-600">Placida</span>!
        </p>

        <p>
          At <span className="font-semibold text-emerald-600">Placida</span>, we believe that mental wellness and emotional balance are essential for living a fulfilling life. Our mission is to create a <span className="font-semibold">safe, supportive, and engaging space</span> where everyone can take care of their mind and soul—anytime, anywhere.
        </p>

        <p>
          Our platform brings together <span className="font-semibold">practical tools and resources</span> to help you:
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li><span className="font-semibold">Enhance mental health</span> with guided exercises and expert-backed content.</li>
          <li><span className="font-semibold">Track your mood and emotions</span> to understand patterns and improve well-being.</li>
          <li><span className="font-semibold">Practice meditation and mindfulness</span> to reduce stress and improve focus.</li>
          <li><span className="font-semibold">Build stronger relationships</span> through guidance and self-reflection exercises.</li>
          <li><span className="font-semibold">Journal your thoughts and experiences</span> fostering self-awareness and personal growth.</li>
        </ul>

        <p>
          We are passionate about <span className="font-semibold">empowering individuals</span> to take control of their mental and emotional wellness. Whether you are looking to manage stress, improve focus, or simply practice self-care, <span className="font-semibold text-emerald-600">Placida</span> is here to support you every step of the way.
        </p>

        <p>
          <span className="font-semibold">Why choose us?</span>
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>User-friendly and intuitive interface.</li>
          <li>Scientifically-informed techniques for emotional well-being.</li>
          <li>Tools to foster reflection, growth, and community connection.</li>
          <li>Safe, secure, and private experience for all users.</li>
        </ul>

        <p>
          Join us in making <span className="font-semibold">mental wellness a daily habit</span>, because small steps every day can lead to big changes in your life.
        </p>
      </div>
    </div>
  );
};

export default About;
