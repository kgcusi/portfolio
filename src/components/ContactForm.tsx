import { useState } from 'react';
import { motion } from 'motion/react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          ...form,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setState('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full"
    >
      <h2 className="text-xs font-bold uppercase tracking-widest text-custom-sky mb-4">
        Contact
      </h2>
      {state === 'success' ? (
        <p className="text-custom-slate text-sm">
          Thanks for reaching out! I'll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-xs font-semibold text-custom-steel uppercase tracking-wide">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-custom-light/60 rounded-lg px-3 py-2 text-sm text-custom-dark placeholder:text-custom-steel focus:outline-none focus:ring-2 focus:ring-custom-sky/50 transition"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-semibold text-custom-steel uppercase tracking-wide">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="bg-custom-light/60 rounded-lg px-3 py-2 text-sm text-custom-dark placeholder:text-custom-steel focus:outline-none focus:ring-2 focus:ring-custom-sky/50 transition"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-semibold text-custom-steel uppercase tracking-wide">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={3}
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              className="bg-custom-light/60 rounded-lg px-3 py-2 text-sm text-custom-dark placeholder:text-custom-steel focus:outline-none focus:ring-2 focus:ring-custom-sky/50 transition resize-none"
            />
          </div>
          {state === 'error' && (
            <p className="text-red-500 text-xs">Something went wrong. Please try again.</p>
          )}
          <button
            type="submit"
            disabled={state === 'loading'}
            className="self-start bg-custom-dark text-white text-xs font-semibold px-5 py-2 rounded-lg hover:bg-custom-slate transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {state === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      )}
    </motion.div>
  );
}
