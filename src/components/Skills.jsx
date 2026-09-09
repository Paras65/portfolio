import React, { useState } from 'react';
import { 
  Code2, Server, Database, Cloud, Network, Shield,
  Layers, Cpu, FileCode, Palette, Layout, Sparkles,
  FileJson, Braces, FolderArchive, GitBranch, Github,
  GitCommit, Package, Box, Boxes, Workflow, Building2,
  MessageSquare, PhoneCall, Users, Key, ShieldCheck, Lock, CreditCard,
  Bot, Brain, Calendar, Zap
} from 'lucide-react';

const iconMap = {
  Code2, Server, Database, Cloud, Network, Shield,
  Layers, Cpu, FileCode, Palette, Layout, Sparkles,
  FileJson, Braces, FolderArchive, GitBranch, Github,
  GitCommit, Package, Box, Boxes, Workflow, Building2,
  MessageSquare, PhoneCall, Users, Key, ShieldCheck, Lock, CreditCard,
  Bot, Brain, Calendar, Zap
};

const categoryIcons = {
  'Emerging Tech & AI': Sparkles,
  'Backend & APIs': Server,
  'Languages': FileJson,
  'Databases & Storage': Database,
  'Enterprise & Third-Party Integrations': Network,
  'Security & Authentication': ShieldCheck,
  'Cloud & DevOps': Cloud,
  'Frontend Frameworks': Layout
};

const Skills = ({ skillCategories = [] }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = [
    'All',
    'Emerging Tech & AI',
    'Backend & APIs',
    'Languages',
    'Databases & Storage',
    'Enterprise & Third-Party Integrations',
    'Security & Authentication',
    'Cloud & DevOps',
    'Frontend Frameworks'
  ];

  const filteredCategories = selectedFilter === 'All'
    ? skillCategories
    : skillCategories.filter(cat => cat.category === selectedFilter);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider">
          <Cpu className="w-3.5 h-3.5" />
          Technical Stack & Tooling
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Core <span className="text-cyan-400">Skills</span> & Expertise
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Proven technologies and tools utilized to engineer production-ready, mission-critical applications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
              selectedFilter === filter
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:text-white hover:border-slate-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => {
          const CategoryIcon = categoryIcons[category.category] || Layers;

          return (
            <div
              key={category.category}
              className="glass-card rounded-2xl p-6 border border-slate-800/90 shadow-xl hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Category Title with Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {category.category}
                    </h3>
                  </div>
                </div>

                {category.description && (
                  <p className="text-xs text-slate-400 mb-5 line-clamp-2">
                    {category.description}
                  </p>
                )}

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 text-slate-200 text-xs font-mono transition-all hover:bg-slate-800/80"
                      >
                        <SkillIcon className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>{category.skills.length} Technologies</span>
                <span className="text-cyan-400/80">Production Verified</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

