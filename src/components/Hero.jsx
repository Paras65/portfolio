import React from 'react';
import { ArrowRight, Mail, Phone, Code2, Database, ShieldCheck, Sparkles, MapPin, FileDown, Github, Linkedin } from 'lucide-react';

const Hero = ({ personal }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Glow Orbs Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[320px] h-[320px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Profile Avatar */}
        <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 mb-4">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-teal-400 to-blue-600 blur-md opacity-70 animate-pulse"></div>
          <img
            src={personal.photoUrl || "/hero-img.png"}
            alt={personal.name}
            className="relative w-full h-full object-cover rounded-full border-2 border-cyan-400 shadow-2xl shadow-cyan-500/30"
          />
        </div>

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-mono tracking-wide shadow-lg shadow-cyan-500/10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>{personal.availability || 'Available for New Opportunities'}</span>
        </div>

        {/* Hero Title & Identity */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent text-glow">
              {personal.name}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl font-mono text-cyan-300 font-medium">
            {personal.role}
          </p>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {personal.tagline}
          </p>
        </div>

        {/* Location & Quick Info */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-400 font-mono">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>{personal.location}</span>
          </div>
          <span className="hidden sm:inline text-slate-600">•</span>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>{personal.yearsExperience} Experience</span>
          </div>
          <span className="hidden sm:inline text-slate-600">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Software Engineer @ Capgemini</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={personal.resumeUrl || "/cv.pdf"}
            download="Paras_Sahu_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <FileDown className="w-4 h-4" />
            Download CV
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-card text-white hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all font-medium hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/40 transition-all font-medium text-sm"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            Contact Me
          </a>
          <div className="flex items-center gap-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-3.5 rounded-xl glass-card text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3.5 rounded-xl glass-card text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Tech Highlights Bar */}
        <div className="pt-10 max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-4 border border-slate-800/80 shadow-xl flex flex-wrap items-center justify-around gap-4 text-slate-400 text-xs sm:text-sm font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>Node.js & Microservices</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span>Generative AI Code Migration</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>SAP & SAP HANA</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Salesforce, D365 & OAuth/SAML</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

