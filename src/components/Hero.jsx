import React from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Bot,
  Sparkles,
  Database,
  Cpu,
  Binary,
  GraduationCap,
  Briefcase,
  ChevronDown,
  Terminal,
  Layers,
  Code
} from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { ParticleCanvas } from './ParticleCanvas';
import profileImg from '../assets/profile.jpg';

export function Hero({ isDark, onOpenChat, onOpenResume }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Interactive AI Neural Background */}
      <ParticleCanvas isDark={isDark} />

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/15 dark:bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-electric-500/10 dark:bg-electric-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/70 dark:bg-dark-surface/80 border border-slate-300/60 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-brand-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Data Scientist Intern @ Gradtwin Chennai</span>
              <span className="text-slate-400 dark:text-slate-500">|</span>
              <span className="text-brand-600 dark:text-cyan-400">RAG & ML Specialist</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wider uppercase text-brand-600 dark:text-brand-400 font-mono flex items-center justify-center lg:justify-start gap-2">
                <Terminal className="w-4 h-4" />
                <span>Hello, World! I am</span>
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                <span className="bg-gradient-to-r from-slate-900 via-brand-600 to-electric-600 dark:from-white dark:via-brand-300 dark:to-cyan-400 bg-clip-text text-transparent">
                  {resumeData.personal.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                Data Scientist & AI / ML Engineer
              </p>
            </div>

            {/* Summary / Introduction from Resume */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about architecting end-to-end <span className="text-brand-600 dark:text-brand-300 font-medium">Python data pipelines</span>, developing high-precision <span className="text-brand-600 dark:text-brand-300 font-medium">predictive ML models</span>, and deploying production-grade <span className="text-brand-600 dark:text-brand-300 font-medium">RAG AI systems</span> with ChromaDB, FastAPI, and local LLMs.
            </p>

            {/* Quick Skills Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 font-mono text-xs">
              {['Python', 'Java', 'SQL', 'RAG AI', 'ChromaDB', 'FastAPI', 'Ollama', 'Predictive Modeling'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:border-brand-500/50 transition-colors"
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              <button
                onClick={() => scrollTo('projects')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-teal-600 text-white font-semibold text-sm shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 font-semibold text-sm border border-slate-200 dark:border-slate-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-brand-500" />
                <span>Resume / CV</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300 font-semibold text-sm border border-slate-300 dark:border-slate-700/80 transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-500" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* AI Assistant Callout */}
            <div className="pt-2">
              <button
                onClick={onOpenChat}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-electric-500/10 dark:bg-electric-500/15 border border-electric-500/30 text-electric-700 dark:text-electric-300 text-xs font-medium hover:bg-electric-500/20 transition-all text-left"
              >
                <Bot className="w-4 h-4 text-electric-500 animate-pulse" />
                <span>Have questions? Click to chat with my <strong>AI Portfolio Assistant</strong>!</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive AI Avatar & Quick Stats Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Center Profile Visual Box */}
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl p-1 bg-gradient-to-tr from-brand-500 via-cyan-400 to-electric-600 shadow-2xl shadow-brand-500/25 group">
              <div className="w-full h-full rounded-[22px] bg-slate-900 flex flex-col justify-end p-5 text-center relative overflow-hidden border border-white/10">
                {/* Background Photo */}
                <img
                  src={profileImg}
                  alt={resumeData.personal.name}
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                {/* Micro Badge 1 (Top Left) */}
                <div className="absolute top-4 left-4 bg-slate-900/85 border border-slate-700/80 px-2.5 py-1 rounded-lg text-[10px] font-mono text-brand-300 flex items-center gap-1 shadow-lg backdrop-blur-md z-10">
                  <Database className="w-3 h-3 text-brand-400" />
                  <span>RAG & Vector DB</span>
                </div>

                {/* Micro Badge 2 (Top Right) */}
                <div className="absolute top-4 right-4 bg-slate-900/85 border border-slate-700/80 px-2.5 py-1 rounded-lg text-[10px] font-mono text-cyan-300 flex items-center gap-1 shadow-lg backdrop-blur-md z-10">
                  <Cpu className="w-3 h-3 text-cyan-400" />
                  <span>ML & NLP</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="relative z-10 space-y-1 text-left bg-slate-900/70 p-3 rounded-2xl border border-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {resumeData.personal.name}
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                  <p className="text-xs font-mono text-cyan-300 font-semibold">
                    Data Scientist Intern @ Gradtwin
                  </p>
                  <p className="text-[11px] text-slate-300">
                    BE CSE (2022–2026) | Salem, TN
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid under profile */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm mt-6">
              <div className="p-3 rounded-2xl bg-white/70 dark:bg-dark-surface/80 border border-slate-200/80 dark:border-slate-800 text-center shadow-sm backdrop-blur-md">
                <span className="block text-xl font-bold text-brand-600 dark:text-brand-400">3+</span>
                <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-tight">AI & ML Projects</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/70 dark:bg-dark-surface/80 border border-slate-200/80 dark:border-slate-800 text-center shadow-sm backdrop-blur-md">
                <span className="block text-xl font-bold text-cyan-600 dark:text-cyan-400">100%</span>
                <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-tight">Offline RAG</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/70 dark:bg-dark-surface/80 border border-slate-200/80 dark:border-slate-800 text-center shadow-sm backdrop-blur-md">
                <span className="block text-xl font-bold text-electric-600 dark:text-electric-400">1st 🏆</span>
                <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-tight">Kongu Auction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => scrollTo('about')}
            aria-label="Scroll to About Section"
            className="flex flex-col items-center text-slate-400 dark:text-slate-500 hover:text-brand-500 dark:hover:text-brand-400 transition-colors group"
          >
            <span className="text-xs font-mono mb-1 group-hover:translate-y-0.5 transition-transform">Explore More</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
