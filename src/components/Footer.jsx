import React from "react";
import { Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import placidaLogo from "../assets/placida-logo.png";


export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand + Contact */}
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold tracking-wide">Placida</span>
          </div>
          <p className="mt-4 text-white/80 leading-relaxed">
            A collaborative digital ecosystem for mental health and well-being. 
            Building connections, awareness, and support for a healthier tomorrow.
          </p>

          
          <div className="mt-6 space-y-2 text-white/80">
            <p className="flex items-center gap-2">
              <Mail className="h-5 w-5" /> support@placida.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-5 w-5" /> +XYZ
            </p>
          </div>

          
          <div className="flex space-x-4 mt-4">
            <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/90">
            <li><a href="/" className="hover:underline hover:text-white">Home</a></li>
            <li><a href="/mental-health" className="hover:underline hover:text-white">Mental Health</a></li>
            <li><a href="/wellness" className="hover:underline hover:text-white">Wellness</a></li>
            <li><a href="/meditation" className="hover:underline hover:text-white">Meditation</a></li>
            <li><a href="/relationships" className="hover:underline hover:text-white">Relationships</a></li>
          </ul>
        </div>

       
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-white/80 mb-4">
            Subscribe to our newsletter for mental health tips and resources.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <button
              type="submit"
              className="bg-white text-emerald-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      
      <div className="mt-10 text-center text-white/70 text-sm">
        © {new Date().getFullYear()} Placida. All rights reserved.
      </div>
    </footer>
  );
}
