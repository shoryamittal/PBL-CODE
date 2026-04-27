import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, Briefcase, Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="pt-24 pb-20 px-4 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-8 border border-blue-100">
          🚀 The #1 Network for Founders & Investors
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Funding & Mentorship <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Built for Startups.
          </span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Connect with visionary investors, find experienced mentors, and scale your business to the next level using our smart-matching algorithm.
        </p>
        <Link to="/register" className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-200">
          Get Started Today
        </Link>
      </section>

      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition">
            <Target className="text-blue-600 w-10 h-10 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Smart Matching</h3>
            <p className="text-slate-600">Connect with investors whose thesis perfectly matches your industry and stage.</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition">
            <Briefcase className="text-indigo-600 w-10 h-10 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Direct Pitches</h3>
            <p className="text-slate-600">Bypass cold emails. Pitch directly to verified VCs actively deploying capital.</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition">
            <Users className="text-purple-600 w-10 h-10 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Expert Mentorship</h3>
            <p className="text-slate-600">Gain invaluable guidance from exited founders and industry veterans.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
