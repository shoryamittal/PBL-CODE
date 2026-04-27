import React, { useState, useEffect } from 'react';
import { Building2 } from 'lucide-react';

export default function Network() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch(`http://localhost:8000/network?role=${filter}`)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Error:", err));
  }, [filter]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-2">Network Directory</h2>
          <p className="text-slate-500 text-lg">Discover and connect with top talent and capital.</p>
        </div>
        <select 
          className="border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Roles</option>
          <option value="Startup">Startups</option>
          <option value="Investor">Investors</option>
          <option value="Mentor">Mentors</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {users.length === 0 ? <p className="text-slate-500">No users found.</p> : users.map(user => (
          <div key={user.id} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all cursor-pointer group">
            <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide 
              ${user.role === 'Startup' ? 'bg-blue-50 text-blue-700' : 
                user.role === 'Investor' ? 'bg-emerald-50 text-emerald-700' : 
                'bg-purple-50 text-purple-700'}`}>
              {user.role}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-4 group-hover:text-blue-600 transition">{user.company}</h3>
            <div className="flex items-center text-slate-500 mt-2 space-x-2">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-medium">{user.name}</span>
            </div>
            <button className="mt-6 w-full text-blue-600 font-bold text-sm border border-blue-600 py-2 rounded-lg hover:bg-blue-50 transition">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
