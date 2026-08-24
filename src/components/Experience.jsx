import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  Building,
  Terminal,
  TrendingUp,
  Cpu,
  Database
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-100/60 dark:bg-dark-surface/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience & Industry Impact
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Hands-on data science & AI engineering experience developing machine learning workflows, data pipelines, and production RAG chatbots.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 pb-12 border-l-2 border-brand-500/30 dark:border-brand-500/40 last:pb-0">
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white dark:bg-dark-bg border-4 border-brand-500 shadow-md shadow-brand-500/50 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-ping"></span>
              </div>

              {/* Main Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all group hover:border-brand-500/50">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200/60 dark:border-slate-800/80 mb-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20">
                        {exp.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm font-semibold mt-1">
                      <Building className="w-4 h-4 text-brand-500" />
                      <span>{exp.company}</span>
                      <span className="text-slate-400">•</span>
                      <span className="flex items-center gap-1 font-normal text-xs text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-brand-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Key Responsibilities & Achievements */}
                <div className="space-y-3.5 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 font-bold">
                    Key Responsibilities & Deliverables:
                  </h4>
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <div className="p-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 mt-1 shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 font-bold mb-2.5">
                    Core Technologies & Competencies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono border border-slate-200/80 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
