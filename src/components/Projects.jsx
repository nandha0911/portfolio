import React, { useState } from 'react';
import {
  Sparkles,
  Search,
  ExternalLink,
  Calendar,
  Layers,
  ArrowUpRight,
  ChevronRight,
  Cpu,
  Bot,
  BrainCircuit,
  Eye
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { resumeData } from '../data/resumeData';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'RAG & GenAI', 'Voice & Speech AI', 'Machine Learning'];

  const filteredProjects = resumeData.projects.filter((proj) => {
    if (selectedCategory !== 'All' && proj.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = proj.title.toLowerCase().includes(q);
      const matchDesc = proj.description.toLowerCase().includes(q);
      const matchObjective = proj.objective.toLowerCase().includes(q);
      const matchTech = proj.technologies.some((t) => t.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchObjective || matchTech;
    }
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 text-electric-600 dark:text-electric-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Innovations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projects & AI Systems
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            End-to-end intelligent applications from privacy-first RAG systems to predictive machine learning algorithms and voice assistants.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25 font-semibold scale-105'
                    : 'bg-slate-100 dark:bg-dark-card text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Real-Time Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects by name, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-800 dark:text-slate-200 shadow-sm"
            />
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-slate-50/80 dark:bg-dark-card border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-brand-500/50 hover:-translate-y-1"
            >
              <div className="p-6 sm:p-7 space-y-4">
                {/* Top Row: Category & Date */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-semibold">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-brand-500" />
                    <span>{project.date}</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Snippet / Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {project.objective}
                </p>

                {/* Technologies Preview */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 text-[11px] font-mono border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-0.5 rounded-md bg-slate-200/60 dark:bg-slate-800 text-slate-500 text-[11px] font-mono">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:px-6 bg-slate-100/70 dark:bg-slate-900/50 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors group/btn"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:border-slate-400 shadow-sm transition-all"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Result */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 p-8 rounded-3xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 max-w-lg mx-auto space-y-3">
            <Search className="w-8 h-8 text-slate-400 mx-auto" />
            <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">
              No matching projects found
            </h4>
            <p className="text-xs text-slate-500">
              Try adjusting your search terms or select "All" categories to view all featured AI projects.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-brand-500 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
