import React, { useState } from 'react';
import { Phone, MapPin, Send, Copy, Check, Download, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#BA5C44', '#5A6B52', '#C98E38'],
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#BA5C44', '#5A6B52', '#C98E38'],
    });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFFFFF] text-[#BA5C44] border border-[#D8D0C5] mb-3 shadow-2xs">
            <MessageSquare className="w-3.5 h-3.5 text-[#BA5C44]" />
            Direct Contact
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial font-medium text-[#211E1C] tracking-tight">
            Let's Start a Conversation
          </h2>
          <p className="text-xs sm:text-sm text-[#6E675F] mt-1 max-w-xl">
            Open to full-time engineering roles, internships, and discussions about my projects and research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FFFFFF] border border-[#E6E0D6] rounded-3xl p-6 sm:p-7 space-y-5 shadow-xs">
              
              {/* Email Card */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-[#8A8177] uppercase tracking-wider">
                  Primary Email
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E6E0D6]">
                  <div className="truncate pr-2">
                    <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-mono font-medium text-[#211E1C] hover:text-[#BA5C44] transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-[#FFFFFF] hover:bg-[#EFEAE2] border border-[#D8D0C5] text-[#5C554E] hover:text-[#211E1C] transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#5A6B52]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <div className="text-[11px] text-[#5A6B52] font-medium pl-1">
                    ✓ Email address copied to clipboard
                  </div>
                )}
              </div>

              {/* Phone & Location */}
              <div className="space-y-2.5 pt-2 border-t border-[#E6E0D6] text-xs text-[#3E3A36]">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#FAF8F5] border border-[#E6E0D6]">
                  <Phone className="w-4 h-4 text-[#BA5C44]" />
                  <span className="font-mono">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#FAF8F5] border border-[#E6E0D6]">
                  <MapPin className="w-4 h-4 text-[#5A6B52]" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Socials & Resume Download */}
              <div className="pt-2 border-t border-[#E6E0D6] space-y-3">
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-2xl text-xs font-semibold text-[#211E1C] bg-[#FAF8F5] hover:bg-[#EFEAE2] border border-[#D8D0C5] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-2xl text-xs font-semibold text-[#211E1C] bg-[#FAF8F5] hover:bg-[#EFEAE2] border border-[#D8D0C5] transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" /> LinkedIn
                  </a>
                </div>

                <a
                  href={personalInfo.resumeUrl}
                  download="Mayank_Shah_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl text-xs font-semibold text-[#FFFFFF] bg-[#BA5C44] hover:bg-[#9B452F] transition-all shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  Download Official Resume PDF
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#E6E0D6] rounded-3xl p-6 sm:p-7 shadow-xs">
              <h3 className="text-lg font-bold text-[#211E1C] mb-1">Direct Message</h3>
              <p className="text-xs text-[#6E675F] mb-6">
                Send a quick note directly to <strong className="text-[#211E1C]">{personalInfo.email}</strong>.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#5A6B52]/40 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#5A6B52]/20 text-[#5A6B52] flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#211E1C]">Message Received</h4>
                  <p className="text-xs text-[#6E675F]">
                    Thank you! I will respond promptly to your provided email address.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#3E3A36] mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#D8D0C5] text-xs text-[#211E1C] placeholder-[#8A8177] focus:outline-none focus:border-[#BA5C44] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#3E3A36] mb-1.5">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#D8D0C5] text-xs text-[#211E1C] placeholder-[#8A8177] focus:outline-none focus:border-[#BA5C44] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#3E3A36] mb-1.5">Message / Role Opportunity</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Mayank, we saw your work on PharmaHelp and VeritasAI and would like to chat..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#D8D0C5] text-xs text-[#211E1C] placeholder-[#8A8177] focus:outline-none focus:border-[#BA5C44] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#FFFFFF] bg-[#BA5C44] hover:bg-[#9B452F] transition-all shadow-xs cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Send Inquiry
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
