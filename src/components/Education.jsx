import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  School
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

const iconMap = {
  GraduationCap: GraduationCap,
  School: School,
  Award: Award
};

export function Education() {
  return (
    <section id="education" className="py-20 bg-slate-100/60 dark:bg-dark-surface/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Formal engineering education in Computer Science and foundational academic milestones.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {resumeData.education.map((edu, index) => {
            const Icon = iconMap[edu.icon] || GraduationCap;
            return (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all group hover:border-brand-500/40 relative overflow-hidden"
              >
                {/* Accent Background Gradient */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform"></div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/60 dark:border-slate-800/80 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-semibold text-brand-600 dark:text-cyan-400 uppercase tracking-wide">
                        {edu.type}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Score & Duration Badge */}
                  <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-2 self-stretch sm:self-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
                    <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-500" />
                      <span>{edu.duration}</span>
                    </div>

                    <div className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                      <span>Score: {edu.score}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
