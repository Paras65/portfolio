import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, ExternalLink, Copy, Check } from 'lucide-react';
import { submitContactForm } from '../services/api';

const Contact = ({ personal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    message: '',
    error: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, message: '', error: '' });

    try {
      const response = await submitContactForm(formData);
      setStatus({
        submitting: false,
        success: true,
        message: response.message || 'Thank you! Your message has been sent.',
        error: ''
      });
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        message: '',
        error: err.message || 'Failed to submit message. Please try sending via your email app.'
      });
    }
  };

  const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(
    formData.subject || 'Full-Stack Engineering Inquiry'
  )}&body=${encodeURIComponent(
    formData.message ? `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}` : ''
  )}`;

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5" />
          Get In Touch
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Contact <span className="text-cyan-400">Me</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Have an engineering opening, a high-throughput project, or want to discuss enterprise integrations? Let's connect!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-white">
              Contact Information
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Feel free to reach out directly via phone or email, or submit the form to send a direct message to my inbox.
            </p>

            <div className="space-y-4 pt-2">
              {/* Phone Numbers with Mobile & Home & WhatsApp */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Phone Contacts</h4>
                  <div className="text-sm font-semibold text-white mt-2 space-y-2.5">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-cyan-400 font-normal">Mobile:</span>
                        <a href="tel:7974674305" className="hover:text-cyan-300 transition-colors">
                          +91 7974674305
                        </a>
                        <button
                          type="button"
                          onClick={() => copyToClipboard('+91 7974674305', 'mobile')}
                          className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
                          title="Copy Mobile"
                        >
                          {copiedField === 'mobile' ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-medium">
                              <Check className="w-3 h-3" /> Copied!
                            </span>
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                      <a
                        href="https://wa.me/917974674305"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 transition-colors"
                      >
                        <MessageSquare className="w-3 h-3 text-emerald-400" />
                        <span>Chat WhatsApp</span>
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-400 font-normal">Home:</span>
                      <a href="tel:9669324552" className="hover:text-cyan-300 transition-colors">
                        +91 9669324552
                      </a>
                      <button
                        type="button"
                        onClick={() => copyToClipboard('+91 9669324552', 'home')}
                        className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
                        title="Copy Home"
                      >
                        {copiedField === 'home' ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-medium">
                            <Check className="w-3 h-3" /> Copied!
                          </span>
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email Address</h4>
                  <div className="flex items-center justify-between flex-wrap gap-2 mt-1.5">
                    <a href={`mailto:${personal.email}`} className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors break-all">
                      {personal.email}
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(personal.email, 'email')}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500/40 text-[11px] font-mono transition-all"
                      title="Copy Email"
                    >
                      {copiedField === 'email' ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-cyan-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Location</h4>
                  <p className="text-sm font-semibold text-white mt-1">
                    {personal.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Deliver directly to <span className="text-cyan-300 font-mono">paraskumarsahu65@gmail.com</span>
                </p>
              </div>
              <span className="hidden sm:inline-block font-mono text-[11px] px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                Direct Delivery
              </span>
            </div>

            {/* Submission Alerts */}
            {status.success && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="text-sm">{status.message}</div>
              </div>
            )}

            {status.error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="text-sm">{status.error}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300">
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-xs font-mono text-slate-300">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Software Engineering Collaboration / Hiring Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-mono text-slate-300">
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Paras, I'd like to discuss our project..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-colors resize-y"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl glass-card text-slate-300 hover:text-white hover:border-cyan-500/40 text-sm font-medium transition-all"
                >
                  <span>Open in Mail App</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
