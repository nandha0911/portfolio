import React from 'react';
import {
  User,
  Target,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { resumeData } from '../data/resumeData';

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-100/60 dark:bg-dark-surface/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Professional background, career vision, and foundational expertise based directly on my resume.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Career Objective & Summary */}
          <div className="lg:col-span-7 space-y-6">
            {/* Career Objective Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-brand-500/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform"></div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Career Objective
                </h3>
              </div>

              <blockquote className="text-base sm:text-lg italic font-medium text-slate-700 dark:text-slate-200 border-l-4 border-brand-500 pl-4 py-1 leading-relaxed">
                "{resumeData.personal.objective}"
              </blockquote>
            </div>

            {/* Profile Breakdown */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Professional Focus & Strengths
                </h3>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                As a <strong>Data Scientist</strong> at <strong>Gradtwin – Chennai</strong>, I combine computer science engineering principles with advanced machine learning, predictive modeling, and natural language processing to solve real-world technical problems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">End-to-End Data Pipelines</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">EDA, multi-source ingestion & high-volume ETL in Python.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">RAG AI & Vector Storage</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Production RAG, ChromaDB vector indexing & offline Ollama LLMs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                  <CheckCircle2 className="w-4 h-4 text-electric-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Predictive Modeling</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Regression, classification, systematic feature engineering & tuning.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Speech AI & Desktop UX</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Speech Recognition, NLP intent, TTS audio feedback & accessibility.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Fact Badges */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              {/* Profile Mini Header */}
              <div className="flex items-center gap-3.5 pb-3 border-b border-slate-200/60 dark:border-slate-800/80">
                <div className="relative">
                  <img
                    src="/profile.jpg"
                    alt={resumeData.personal.name}
                    className="w-14 h-14 rounded-2xl object-cover object-top border-2 border-brand-500/50 shadow-md"
                  />
                  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-dark-card rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {resumeData.personal.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                    Data Scientist @ Gradtwin
                  </p>
                </div>
              </div>

              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Quick Facts & Contact Info
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Location</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{resumeData.personal.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <Mail className="w-4 h-4 text-cyan-500 shrink-0" />
                  <div className="truncate">
                    <span className="text-xs text-slate-400 block font-mono">Email Address</span>
                    <a
                      href={`mailto:${resumeData.personal.email}`}
                      className="font-medium text-slate-800 dark:text-slate-200 hover:text-brand-500 transition-colors"
                    >
                      {resumeData.personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Phone Number</span>
                    <a
                      href={`tel:${resumeData.personal.phone.replace(/[^0-9+]/g, '')}`}
                      className="font-medium text-slate-800 dark:text-slate-200 hover:text-emerald-500 transition-colors"
                    >
                      {resumeData.personal.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <BookOpen className="w-4 h-4 text-electric-500 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Education</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">BE Computer Science (73.76%)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <Briefcase className="w-4 h-4 text-amber-500 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Current Workplace</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">Gradtwin (Chennai, Tamil Nadu)</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={resumeData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#0a66c2]/10 hover:bg-[#0a66c2] text-[#0a66c2] hover:text-white font-medium text-xs transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn ({resumeData.personal.linkedinUsername})</span>
                </a>
                <a
                  href={resumeData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-900 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 hover:text-white font-medium text-xs transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub ({resumeData.personal.githubUsername})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
