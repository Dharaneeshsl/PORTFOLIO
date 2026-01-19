import React, { useState } from 'react';
import { sendContact } from '../api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const validate = () => {
    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.');
      return false;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await sendContact(form);
      setSuccess('Message sent!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setError(err.message || 'Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-background flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-black bg-opacity-40 rounded-glass shadow-glass p-8 flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-background text-white border border-accent focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-background text-white border border-accent focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="px-4 py-2 rounded bg-background text-white border border-accent focus:outline-none focus:ring-2 focus:ring-accent"
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {success && <div className="text-green-400 text-sm">{success}</div>}
        <button 
          type="submit" 
          className={`bg-accent text-black px-6 py-2 rounded-full font-bold shadow-neon hover:bg-white hover:text-accent transition-colors flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`} 
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : 'Send Message'}
        </button>
      </form>
    </section>
  );
} 