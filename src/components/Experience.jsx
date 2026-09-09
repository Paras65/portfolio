import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Terminal, Award } from 'lucide-react';

const Experience = ({ experience = [] }) => {
  const expList = experience.length > 0 ? experience : [
    {
      role: "Node Developer",
      company: "AROSYS / VYAKAR TECHNOLOGIES PVT. LTD.",
      product: "LeadAngel",
      period: "April 2021 – May 2025",
      duration: "4 Years, 1 Month",
      highlights: [
        "Managed high-throughput server-client data interchange and developed scalable backend logic.",
        "Engineered server-side architectures and maintained central database clusters (MySQL & MongoDB).",
        "Ensured high performance, low latency, and maximum responsiveness to frontend requests.",
        "Integrated modern frontend user-facing elements seamlessly with backend microservices.",
        "Integrated multi-channel enterprise systems including Google, SAML, Stripe OAuth, Salesforce, and Microsoft Dynamics 365."
      ],
      tags: ["Node.js", "Express.js", "MySQL", "MongoDB", "Salesforce API", "Dynamics 365", "OAuth 2.0", "SAML SSO", "REST APIs", "Docker"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5" />
          Career Progression
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Work <span className="text-cyan-400">Experience</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Proven track record of architecting scalable enterprise systems and mission-critical backend infrastructures.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {expList.map((job, index) => (
          <div
            key={index}
            className="relative glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl hover:border-cyan-500/40 transition-all duration-300"
          >
            {/* Top Bar: Role & Duration */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {job.product && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                      <Terminal className="w-3.5 h-3.5" />
                      {job.product}
                    </div>
                  )}
                  {job.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-medium">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Current Position
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {job.role}
                </h3>
                <p className="text-base text-cyan-400 font-semibold mt-0.5">
                  {job.company}
                </p>
              </div>

              <div className="flex flex-col md:items-end gap-1.5 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>{job.period}</span>
                </div>
                <span className="inline-block px-2.5 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700 font-semibold">
                  {job.duration}
                </span>
              </div>
            </div>

            {/* Core Responsibilities & Impact */}
            <div className="py-6 space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold">
                Key Responsibilities & System Achievements:
              </h4>
              <ul className="space-y-3">
                {job.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    <ChevronRight className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t border-slate-800/80">
              <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Technology Stack:
              </h5>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

