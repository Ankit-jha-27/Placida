import React from "react";
import { HeartPulse } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Brand Section */}
        <div>
          <div className="flex items-center space-x-3">
            <HeartPulse className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold">Placida</span>
          </div>
          <p className="mt-4 text-white/80 max-w-md">
            A collaborative digital ecosystem for mental health and well-being. 
            Building connections, awareness, and support for a healthier tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/mental-health" className="hover:underline">Mental Health</a></li>
            <li><a href="/wellness" className="hover:underline">Wellness</a></li>
            <li><a href="/meditation" className="hover:underline">Meditation</a></li>
            <li><a href="/relationships" className="hover:underline">Relationships</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-white/70 text-sm">
        © {new Date().getFullYear()} Placida. All rights reserved.
      </div>
    </footer>
  );
}
