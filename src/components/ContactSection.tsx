import React, { useState } from 'react';
import { Phone, MapPin, Send, Copy, Check, Download, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900 text-zinc-300 border border-zinc-800 mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
            Contact
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
            Open to discussing full-time opportunities, engineering collaborations, or inquiries regarding my projects and research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 space-y-5">
              
              {/* Email Block */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Email</div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800">
                  <div className="truncate pr-2">
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-mono text-zinc-200 hover:text-white transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <div className="text-xs text-emerald-400 font-medium pl-1">
                    ✓ Email copied to clipboard
                  </div>
                )}
              </div>

              {/* Phone & Location */}
              <div className="space-y-3 pt-3 border-t border-zinc-800/80 text-xs text-zinc-300">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/40 border border-zinc-800/60">
                  <Phone className="w-4 h-4 text-zinc-400" />
                  <span className="font-mono">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/40 border border-zinc-800/60">
                  <MapPin className="w-4 h-4 text-zinc-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Links & Resume */}
              <div className="pt-3 border-t border-zinc-800/80 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium text-zinc-300 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium text-zinc-300 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" /> LinkedIn
                  </a>
                </div>

                <a
                  href={personalInfo.resumeUrl}
                  download="Mayank_Shah_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-zinc-900 bg-zinc-100 hover:bg-white transition-all shadow-sm"
                >
                  <Download className="w-4 h-4 text-zinc-900" />
                  Download Resume (PDF)
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-7">
              <h3 className="text-lg font-bold text-zinc-100 mb-1">Direct Message</h3>
              <p className="text-xs text-zinc-400 mb-6">
                Send a note directly to my inbox at <strong className="text-zinc-300">{personalInfo.email}</strong>.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-zinc-950 border border-emerald-500/40 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-zinc-100">Message Received</h4>
                  <p className="text-xs text-zinc-400">
                    Thank you! I will respond promptly via email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message or job opportunity description..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-zinc-900 bg-zinc-100 hover:bg-white transition-all shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5 text-zinc-900" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
