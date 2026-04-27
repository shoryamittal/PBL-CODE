import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-200">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">VentureConnect</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-semibold text-slate-600 hover:text-slate-900">Home</Link>
            <Link to="/network" className="font-semibold text-slate-600 hover:text-slate-900">Directory</Link>
            <div className="h-6 w-px bg-slate-200"></div>
            <Link to="/register" className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-slate-800 transition">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
