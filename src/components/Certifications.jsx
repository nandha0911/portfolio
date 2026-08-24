import React from 'react';
import {
  Award,
  Trophy,
  CheckCircle,
  FileCheck,
  Calendar,
  Building2,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & Achievements
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Professional training programs, inter-college competitive wins, and specialized technical certifications.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {resumeData.certifications.map((cert) => {
            const isPrize = cert.badge.includes('1st Prize');
            return (
              <div
                key={cert.id}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 relative overflow-hidden group flex flex-col justify-between ${
                  isPrize
                    ? 'bg-gradient-to-br from-amber-500/5 via-white to-amber-500/10 dark:from-amber-950/20 dark:via-dark-card dark:to-amber-900/10 border-amber-500/30 shadow-md hover:shadow-amber-500/10 hover:border-amber-500/60'
                    : 'bg-slate-50/70 dark:bg-dark-card border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-500/40'
                }`}
              >
                {/* Glow Effect for Top Prize */}
                {isPrize && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none"></div>
                )}

                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                        isPrize
                          ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30'
                          : 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                      }`}
                    >
                      {cert.badge}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-brand-500" />
                      {cert.year}
                    </span>
                  </div>

                  {/* Title & Institution */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                      <Building2 className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>{cert.issuer}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Category: {cert.category}</span>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
