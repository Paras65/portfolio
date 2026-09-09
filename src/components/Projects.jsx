import React from 'react';
import { ExternalLink, Github, FolderGit2, CheckCircle2, Sparkles, Layers, ArrowUpRight } from 'lucide-react';

const Projects = ({ projects = [] }) => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider">
          <FolderGit2 className="w-3.5 h-3.5" />
          Featured Engineering Work
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Highlighted <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Selected web applications and integration architectures built with reliability, performance, and clean code in mind.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id || project.title}
            className={`glass-card rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 ${
              project.featured
                ? 'border-cyan-500/30 shadow-xl shadow-cyan-500/5'
                : 'border-slate-800 shadow-lg'
            }`}
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400">
                  {project.category || 'Full Stack'}
                </span>
                {project.featured && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-xs font-mono text-cyan-400/90 mt-1 mb-3">
                  {project.subtitle}
                </p>
              )}

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && (
                <div className="space-y-2 mb-6">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              {/* Tech Stack Chips */}
              <div className="pt-4 border-t border-slate-800/80 mb-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 text-[11px] font-mono border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-2 pt-2 flex-wrap">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-w-[110px] flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold font-mono transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl && project.githubUrl !== '#' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-w-[110px] flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-semibold font-mono transition-all"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    <span>View Code</span>
                  </a>
                )}

                <a
                  href="#contact"
                  className="flex-1 min-w-[120px] flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900/80 hover:bg-cyan-500 text-slate-300 hover:text-slate-950 border border-slate-800 hover:border-cyan-500 text-xs font-semibold font-mono transition-all"
                >
                  <span>Inquire Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

