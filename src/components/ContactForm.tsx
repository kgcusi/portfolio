import { useState } from 'react';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';
import Section from './Section';
import { profile } from '../data/profile';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const fieldClass =
  'rounded-lg border border-line bg-accent-wash/50 px-3 py-2.5 text-[0.9375rem] text-ink ' +
  'placeholder:text-ink-muted focus:border-accent-ink focus:bg-surface';

const labelClass = 'text-2xs font-semibold uppercase text-ink-muted';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const botcheck = new FormData(e.currentTarget).get('botcheck');
    if (botcheck) return; // honeypot tripped: drop it silently

    setState('loading');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Portfolio enquiry from ${form.name}`,
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
    <Section id="contact" title="Contact" delay={0.15}>
      {state === 'success' ? (
        <div
          role="status"
          className="flex items-start gap-3 rounded-lg bg-accent-wash p-4"
        >
          <CheckCircle2
            size={20}
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-accent-ink"
          />
          <div className="flex flex-col gap-1">
            <p className="text-[0.9375rem] font-semibold text-ink">
              Message sent.
            </p>
            <p className="text-sm text-ink-body">
              Thanks for reaching out, I&rsquo;ll get back to you soon.
            </p>
          </div>
        </div>
      ) : (
        <>
          <p className="mb-5 max-w-prose text-[0.9375rem] leading-relaxed text-ink-body">
            Hiring, or have a system that needs building? Tell me what you&rsquo;re
            working on and I&rsquo;ll reply within a couple of days.
            You can also reach me directly at{' '}
            <a
              href={`mailto:${profile.email}`}
              className="font-semibold text-accent-ink underline decoration-accent decoration-2 underline-offset-4"
            >
              {profile.email}
            </a>
            .
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex max-w-lg flex-col gap-4"
            noValidate={false}
          >
            {/* Honeypot: hidden from people, irresistible to bots. */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className={labelClass}>
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className={labelClass}>
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className={labelClass}>
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="What are you building?"
                className={`${fieldClass} resize-y`}
              />
            </div>

            {/* Announced, not just rendered. */}
            <p role="alert" aria-live="assertive" className="empty:hidden">
              {state === 'error' && (
                <span className="text-sm text-red-700">
                  That didn&rsquo;t send. Please try again, or email me at{' '}
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-semibold underline underline-offset-4"
                  >
                    {profile.email}
                  </a>
                  .
                </span>
              )}
            </p>

            <button
              type="submit"
              disabled={state === 'loading'}
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm
                         font-semibold text-white shadow-card transition-colors hover:bg-ink-body
                         disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state === 'loading' ? (
                <>
                  <Loader2
                    size={16}
                    aria-hidden="true"
                    className="motion-safe:animate-spin"
                  />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={16} aria-hidden="true" />
                  Send message
                </>
              )}
            </button>
          </form>
        </>
      )}
    </Section>
  );
}
