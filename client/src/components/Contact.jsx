import React, { useState } from 'react';
import { sendContact } from '../api';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', honeypot: '' });
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
      setSuccess('Message sent successfully! I will get back to you soon.');
      setForm({ name: '', email: '', message: '', honeypot: '' });
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-transparent relative z-10" id="contact" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind or just want to explore opportunities? <br />
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full max-w-lg mx-auto bg-zinc-900/50 backdrop-blur-md border border-white/5 rounded-2xl shadow-2xl p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden"
          aria-label="Contact form"
        >
          {/* Subtle glow effect behind form */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          {/* Honeypot */}
          <input
            type="text"
            name="honeypot"
            value={form.honeypot}
            onChange={handleChange}
            style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="relative group">
            <label htmlFor="contact-name" className="sr-only">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl bg-black/40 text-white placeholder-gray-500 border border-white/10 focus:border-accent/50 focus:bg-black/60 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300"
              aria-required="true"
            />
          </div>

          <div className="relative group">
            <label htmlFor="contact-email" className="sr-only">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl bg-black/40 text-white placeholder-gray-500 border border-white/10 focus:border-accent/50 focus:bg-black/60 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300"
              aria-required="true"
            />
          </div>

          <div className="relative group">
            <label htmlFor="contact-message" className="sr-only">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-5 py-4 rounded-xl bg-black/40 text-white placeholder-gray-500 border border-white/10 focus:border-accent/50 focus:bg-black/60 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300 resize-none"
              aria-required="true"
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-lg text-center"
              role="alert"
            >
              {error}
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-4 py-2 bg-green-500/10 border border-green-500/20 text-green-500 text-sm rounded-lg text-center"
              role="status"
            >
              {success}
            </motion.div>
          )}

          <button
            type="submit"
            className={`
              mt-2 bg-accent text-black font-bold py-4 rounded-xl shadow-lg 
              hover:shadow-[0_0_20px_rgba(0,255,231,0.4)] hover:bg-white hover:scale-[1.02] 
              active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 text-lg
              ${loading ? 'opacity-70 cursor-not-allowed' : ''}
            `}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" /> Sending...
              </>
            ) : (
              <>
                <FaPaperPlane className="text-sm" /> Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
