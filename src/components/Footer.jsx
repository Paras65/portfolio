import React from 'react';
import { ArrowUp, Terminal, Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950/80 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Tagline */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="text-white font-mono font-bold text-sm">
              Paras Sahu
            </div>
            <div className="text-xs text-slate-400">
              Fullstack Web Developer • Node.js & Integrations
            </div>
          </div>
        </div>

        {/* Center: Tech note & Socials */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-400 font-mono">
          <span>Engineered with React, Node.js & Tailwind CSS</span>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Paras65"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/paras-sahu/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-400 font-mono">
            © {new Date().getFullYear()} Paras Sahu. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

