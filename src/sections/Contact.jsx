import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import Alert from '../components/Alert.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { CONTACT } from '../constants/index.js';
import useAlert from '../hooks/useAlert.js';
import useParallax from '../hooks/useParallax.js';

const Contact = () => {
  const formRef = useRef();
  const numeralRef = useParallax(-70);

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    // Without EmailJS credentials the request always fails, so fall back to the
    // visitor's own mail client instead of showing an unexplained error.
    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`);
      const body = encodeURIComponent(`${form.message}\n\n-- ${form.name} (${form.email})`);
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;

      showAlert({ show: true, text: 'Opening your mail app...', type: 'success' });
      setTimeout(() => hideAlert(false), 3000);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: 'Pranav Ram PS',
          from_email: form.email,
          to_email: CONTACT.email,
          message: form.message,
        },
        publicKey,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({ show: true, text: 'Message sent successfully', type: 'success' });
          setTimeout(() => {
            hideAlert(false);
            setForm({ name: '', email: '', message: '' });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showAlert({ show: true, text: 'Something went wrong', type: 'danger' });
          setTimeout(() => hideAlert(false), 3000);
        },
      );
  };

  const field =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 font-generalsans text-[15px] ' +
    'text-white placeholder:text-white-500 transition-colors duration-300 focus:border-accent-indigo focus:outline-none';

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      {alert.show && <Alert {...alert} />}

      <div ref={numeralRef} className="ghost-numeral absolute -right-4 top-16 hidden lg:block">
        07
      </div>

      <div className="section-shell">
        <SectionHeader
          index="07"
          label="CONTACT"
          title="Let’s build something people enjoy using."
          intro="Open to frontend roles and internships. The fastest way to reach me is email — I reply the same day."
          accent="cyan"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* direct details */}
          <Reveal direction="left">
            <div className="glass glass-pad h-full">
              <p className="eyebrow-dim">DIRECT</p>

              <div className="mt-6 flex flex-col gap-5">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group block font-generalsans text-lg text-white transition-colors hover:text-accent-cyan">
                  {CONTACT.email}
                  <span className="block h-px w-0 bg-accent-cyan transition-all duration-500 group-hover:w-full" />
                </a>

                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="font-generalsans text-white-600 transition-colors hover:text-white">
                  {CONTACT.phone}
                </a>

                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white-500">
                  {CONTACT.location}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                <a href={CONTACT.github} target="_blank" rel="noreferrer" className="chip">
                  GitHub ↗
                </a>
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="chip">
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </Reveal>

          {/* form */}
          <Reveal direction="right" delay={0.08}>
            <div className="glass glass-pad">
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="eyebrow-dim">
                    YOUR NAME
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Ada Lovelace"
                    className={`mt-3 ${field}`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="eyebrow-dim">
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={`mt-3 ${field}`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="eyebrow-dim">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about the role or the project."
                    className={`mt-3 resize-none ${field}`}
                  />
                </div>

                <button type="submit" disabled={loading} className="pill-solid mt-2 justify-center disabled:opacity-60">
                  {loading ? 'Sending...' : 'Send message'}
                  <span aria-hidden="true">↗</span>
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
