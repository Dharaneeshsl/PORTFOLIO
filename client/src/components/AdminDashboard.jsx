import React, { useState } from 'react';
import { fetchAdminMessages } from '../api';

export default function AdminDashboard() {
  const [token, setToken] = useState('');
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchAdminMessages(token);
      setMessages(data);
    } catch (err) {
      setError(err.message);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-text p-8">
      <h1 className="text-3xl font-bold mb-6 text-accent">Admin Dashboard</h1>
      <div className="mb-6 flex flex-col md:flex-row gap-4 items-center">
        <input
          type="password"
          placeholder="Admin Token"
          value={token}
          onChange={e => setToken(e.target.value)}
          className="px-4 py-2 rounded bg-black bg-opacity-40 border border-accent text-white focus:outline-none"
        />
        <button
          onClick={handleFetch}
          className="bg-accent text-black px-6 py-2 rounded-full font-bold shadow-neon hover:bg-white hover:text-accent transition-colors"
          disabled={loading || !token}
        >
          {loading ? 'Loading...' : 'Fetch Messages'}
        </button>
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-black bg-opacity-30 rounded-glass shadow-glass">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-accent">Name</th>
              <th className="px-4 py-2 text-left text-accent">Email</th>
              <th className="px-4 py-2 text-left text-accent">Message</th>
              <th className="px-4 py-2 text-left text-accent">Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map(msg => (
              <tr key={msg._id} className="border-t border-accent">
                <td className="px-4 py-2 text-white">{msg.name}</td>
                <td className="px-4 py-2 text-white">{msg.email}</td>
                <td className="px-4 py-2 text-subtext max-w-xs break-words">{msg.message}</td>
                <td className="px-4 py-2 text-subtext">{new Date(msg.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {messages.length === 0 && !loading && !error && <div className="text-subtext mt-8">No messages found.</div>}
    </div>
  );
} 