import { useState, useRef } from 'react';
import type { FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, Mail, Phone } from 'lucide-react';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const containerRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_gprublb',
        'template_29p93zj',
        formRef.current,
        'e7t-YnurA3HOhaRaJ'
      );

      setIsSuccess(true);
      formRef.current.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send the message. Please try again!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-ocean-dark" ref={containerRef}>
      {/* Background */}
      <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold/80 font-bold tracking-[0.3em] uppercase text-xs mb-4 inline-block">
            Den Den Mushi
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-4">
            Join My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset to-gold">
              Crew
            </span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Got an adventure worth sailing for? Send a message through the Den Den Mushi and let's set sail together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-black font-display text-gold">Contact Intel</h3>

              <a href="mailto:rawhanramzi@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-gold transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold">Email</p>
                  <p className="text-sm font-bold">rawhanramzi@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919866100317" className="flex items-center gap-4 text-gray-300 hover:text-gold transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold">Phone</p>
                  <p className="text-sm font-bold">+91 9866100317</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-black font-display text-ocean-sky mb-4">Crew Links</h3>
              <div className="space-y-3">
                <a
                  href="https://www.github.com/Rawhan1819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors font-bold text-sm"
                >
                  <GithubIcon size={18} /> github.com/Rawhan1819
                </a>
                <a
                  href="https://www.linkedin.com/in/rawhan-ramzi-mohammed-449ab5291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors font-bold text-sm"
                >
                  <LinkedinIcon size={18} /> LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Zoro Motivational */}
            <div className="glass rounded-2xl p-6 border border-gold/10">
              <p className="italic text-white/60 text-sm leading-relaxed">
                "If I die here, then I'm a man that could only make it this far."
              </p>
              <p className="text-gold/50 text-xs mt-2 font-bold">— Roronoa Zoro</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass p-8 md:p-10 rounded-2xl flex flex-col gap-6 relative overflow-hidden"
            >
              {/* Subtle background */}
              <div className="absolute inset-0 bg-gradient-to-br from-ocean/5 to-transparent pointer-events-none" />

              {/* Fields */}
              <div className="grid md:grid-cols-2 gap-6 relative z-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-xs font-black tracking-[0.2em] text-gray-400">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="user_name"
                    required
                    className="bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all text-white placeholder-gray-600"
                    placeholder="Monkey D. Luffy"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-xs font-black tracking-[0.2em] text-gray-400">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="user_email"
                    required
                    className="bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all text-white placeholder-gray-600"
                    placeholder="luffy@strawhats.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 relative z-10">
                <label htmlFor="contact-message" className="text-xs font-black tracking-[0.2em] text-gray-400">
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className="bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all resize-none text-white placeholder-gray-600"
                  placeholder="Let's find the One Piece together..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="relative z-10 mt-2 px-8 py-4 bg-gradient-to-r from-gold to-sunset text-ocean-dark font-black tracking-widest uppercase rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.25)] hover:shadow-[0_0_35px_rgba(234,179,8,0.45)] transition-all flex items-center justify-center gap-3 group/btn disabled:opacity-60 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-ocean-dark"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Transmitting...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle size={20} />
                    Message Delivered!
                  </>
                ) : (
                  <>
                    <Send
                      size={18}
                      className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                    />
                    Send Transmission
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 text-center text-gray-600 text-sm border-t border-white/5 pt-8 relative z-10 px-6">
        <p className="font-bold">
          © {new Date().getFullYear()} Rawhan Ramzi Mohammed — All rights reserved.
        </p>
        <p className="mt-2 text-xs text-gray-700">
          Built with React, Tailwind & Vite &bull; Inspired by One Piece ☠
        </p>
      </footer>
    </section>
  );
};

export default Contact;
