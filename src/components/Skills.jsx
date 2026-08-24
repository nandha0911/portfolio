import React, { useState } from 'react';
import {
  Code2,
  Bot,
  BrainCircuit,
  Mic,
  Layers,
  Sparkles,
  Database,
  CheckCircle,
  Search
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

const iconMap = {
  Code2: Code2,
  Bot: Bot,
  BrainCircuit: BrainCircuit,
  Mic: Mic,
  Layers: Layers
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...resumeData.skills.categories.map(c => c.name)];

  const filteredCategories = resumeData.skills.categories.filter(cat => {
    if (selectedCategory !== 'All' && cat.name !== selectedCategory) {
      return false;
    }
    return true;
  }).map(cat => {
    if (!searchTerm) return cat;
    const matchingSkills = cat.skills.filter(s =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.badge.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Categorized technical capabilities, libraries, and frameworks extracted directly from my project implementations and data science work.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20 font-semibold scale-105'
                    : 'bg-slate-100 dark:bg-dark-card text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. RAG, Python)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-800 dark:text-slate-200"
            />
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Code2;
            return (
              <div
                key={category.name}
                className="p-6 rounded-3xl bg-slate-50/70 dark:bg-dark-card border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group hover:border-brand-500/40 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-200/60 dark:border-slate-800 mb-5">
                    <div className="p-2.5 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {category.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {category.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills List with Progress */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[11px] text-brand-600 dark:text-cyan-400 bg-brand-500/10 dark:bg-cyan-500/10 px-2 py-0.5 rounded-md font-medium">
                            {skill.badge}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-brand-400 to-cyan-500 rounded-full transition-all duration-700 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Pill Indicator */}
                <div className="pt-5 mt-4 border-t border-slate-200/40 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Resume-verified</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 p-8 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 text-slate-500">
            <p className="text-sm">No skills found matching "{searchTerm}". Try searching for Python, RAG, or SQL.</p>
          </div>
        )}
      </div>
    </section>
  );
}
