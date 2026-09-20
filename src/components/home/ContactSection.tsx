import React, { useState } from 'react';
import { Mail, Linkedin, MessageSquare, Github, Copy, Check, Send, AlertCircle } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { profile } from '../../data/profile';
import { SectionTitle } from '../common/SectionTitle';

export const ContactSection: React.FC = () => {
  const { t } = usePortfolio();
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name || 'Portfolio Visitor'}`
    );
    const mailBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t((d) => d.contact.sectionTag)}
          title={t((d) => d.contact.title)}
          subtitle={t((d) => d.contact.subtitle)}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card with Quick Copy */}
            <div className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100">Email Address</h3>
                    <p className="text-xs text-stone-500 font-mono">{profile.email}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 transition-colors"
                  title={t((d) => d.contact.copyEmail)}
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 animate-in fade-in">
                  ✓ {t((d) => d.contact.copied)}
                </p>
              )}
            </div>

            {/* Direct Channel Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors flex items-center gap-3 text-stone-950 dark:text-white shadow-xs"
              >
                <Linkedin className="w-5 h-5 text-[#0a66c2]" />
                <div className="text-left">
                  <span className="text-xs font-bold block">LinkedIn</span>
                  <span className="text-[11px] text-stone-600 dark:text-stone-400 font-mono">Professional Profile</span>
                </div>
              </a>

              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors flex items-center gap-3 text-stone-950 dark:text-white shadow-xs"
              >
                <MessageSquare className="w-5 h-5 text-[#25d366]" />
                <div className="text-left">
                  <span className="text-xs font-bold block">WhatsApp</span>
                  <span className="text-[11px] text-stone-600 dark:text-stone-400 font-mono">Direct Messaging</span>
                </div>
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors flex items-center gap-3 text-stone-950 dark:text-white shadow-xs"
              >
                <Github className="w-5 h-5 text-stone-900 dark:text-white" />
                <div className="text-left">
                  <span className="text-xs font-bold block">GitHub</span>
                  <span className="text-[11px] text-stone-600 dark:text-stone-400 font-mono">Code Repositories</span>
                </div>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors flex items-center gap-3 text-stone-950 dark:text-white shadow-xs"
              >
                <Mail className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <div className="text-left">
                  <span className="text-xs font-bold block">Mail Client</span>
                  <span className="text-[11px] text-stone-600 dark:text-stone-400 font-mono">Compose Message</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Frontend Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-stone-950 dark:text-white">
                  {t((d) => d.contact.formTitle)}
                </h3>
                <div className="mt-2 p-3 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-start gap-2.5 text-xs text-stone-700 dark:text-stone-300">
                  <AlertCircle className="w-4 h-4 text-stone-600 dark:text-stone-400 shrink-0 mt-0.5" />
                  <p>{t((d) => d.contact.formNotice)}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold text-stone-800 dark:text-stone-200 mb-1.5"
                    >
                      {t((d) => d.contact.nameLabel)} *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2 rounded-lg text-sm bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-stone-400 placeholder:text-stone-500 dark:placeholder:text-stone-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-stone-800 dark:text-stone-200 mb-1.5"
                    >
                      {t((d) => d.contact.emailLabel)} *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2 rounded-lg text-sm bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-stone-400 placeholder:text-stone-500 dark:placeholder:text-stone-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-bold text-stone-800 dark:text-stone-200 mb-1.5"
                  >
                    {t((d) => d.contact.subjectLabel)}
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Internship Opportunity / Collaboration"
                    className="w-full px-3.5 py-2 rounded-lg text-sm bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-stone-400 placeholder:text-stone-500 dark:placeholder:text-stone-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-stone-800 dark:text-stone-200 mb-1.5"
                  >
                    {t((d) => d.contact.messageLabel)} *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-3.5 py-2 rounded-lg text-sm bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-stone-400 placeholder:text-stone-500 dark:placeholder:text-stone-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors shadow-xs active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>{t((d) => d.contact.sendButton)}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
