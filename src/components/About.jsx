import React from 'react';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, Zap, Layers, BookOpen } from 'lucide-react';

const About = ({ personal, education }) => {
  const edu = education && education.length > 0 ? education[0] : {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Chhattisgarh Swami Vivekanand Technical University",
    period: "Jun 2016 – Jun 2020",
    thesis: "E-Book Seller Web App"
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5" />
          Background & Foundation
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Engineering reliable server-side systems, frictionless data pipelines, and responsive digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Bio & Core Values */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6 h-full">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              Professional Profile
            </h3>
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              {personal.bio}
            </p>

            <div className="pt-4 border-t border-slate-800/80">
              <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider font-mono mb-4">
                What I Bring to Engineering Teams:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Scalable Node.js Microservices Architecture',
                  'Generative AI Automated Code Migration',
                  'Legacy MuleSoft to High-Performance Node.js',
                  'SAP Systems & SAP HANA Connectivity',
                  'Enterprise CRM Sync (Salesforce, D365)',
                  'SAML, OAuth 2.0 & JWT Security Governance',
                  'Sub-Second MySQL & MongoDB Query Optimization',
                  'Google & MS Calendar, Slack, Twilio APIs'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Education & Thesis Card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6 bg-gradient-to-br from-slate-900/90 to-slate-950/90">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Education</span>
                  <h3 className="text-lg font-bold text-white">Degree & Academic Focus</h3>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                {edu.period}
              </span>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold text-white">
                {edu.degree}
              </h4>
              <p className="text-sm text-cyan-300 font-medium">
                {edu.institution}
              </p>
            </div>

            {/* Thesis Highlight Box */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase">
                <BookOpen className="w-4 h-4" />
                Engineering Thesis
              </div>
              <p className="text-sm font-semibold text-white">
                {edu.thesis}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {edu.description || "In-depth engineering project covering full-stack architecture, relational database modelling, shopping cart workflows, and secure digital content cataloging."}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <span className="text-2xl font-extrabold text-white font-mono">5+</span>
                <p className="text-xs text-slate-400 mt-0.5">Years Professional Exp.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <span className="text-2xl font-extrabold text-cyan-400 font-mono">0</span>
                <p className="text-xs text-slate-400 mt-0.5">Downtime System Migrations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

