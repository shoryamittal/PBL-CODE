import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Startup', company: '', industry: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('Success! Redirecting...');
        setTimeout(() => navigate('/network'), 1000);
      } else {
        setStatus('Registration failed. Email might exist.');
      }
    } catch (err) {
      setStatus('Server error.');
    }
  };

  return (
    <div className="flex justify-center items-center py-20 px-4">
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-extrabold mb-2 text-center text-slate-900">Join the Network</h2>
        <p className="text-slate-500 text-center mb-8">Create your profile to get started.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Full Name" required className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setFormData({...formData, name: e.target.value})} />
          
          <input type="email" placeholder="Email Address" required className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setFormData({...formData, email: e.target.value})} />
          
          <select className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setFormData({...formData, role: e.target.value})}>
            <option value="Startup">Startup Founder</option>
            <option value="Investor">Investor</option>
            <option value="Mentor">Mentor</option>
          </select>
          
          <input type="text" placeholder="Company Name" required className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setFormData({...formData, company: e.target.value})} />
            
          <button type="submit" className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200">
            Create Profile
          </button>
        </form>
        {status && <p className="mt-4 text-center font-semibold text-slate-600">{status}</p>}
      </div>
    </div>
  );
}
