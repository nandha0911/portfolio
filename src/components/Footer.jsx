import React from 'react';
import {
  Heart,
  Mail,
  Phone,
  ArrowUpRight,
  Terminal,
  Bot,
  FileText
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { resumeData } from '../data/resumeData';

export function Footer({ onOpenChat, onOpenResume }) {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-brand-500/40 shadow-md bg-slate-950 shrink-0">
                <img
                  src="/profile.jpg"
                  alt={resumeData.personal.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">
                  {resumeData.personal.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  Data Scientist & AI / ML Engineer
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Architecting end-to-end Python data pipelines, RAG AI chatbots, and predictive machine learning models at Gradtwin, Chennai.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={onOpenChat}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              >
                <Bot className="w-3.5 h-3.5 text-electric-400" />
                <span>Ask AI</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-500/20 hover:bg-brand-500/30 text-brand-300 text-xs font-medium border border-brand-500/30 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-brand-400 transition-colors">
                  About Me
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('skills')} className="hover:text-brand-400 transition-colors">
                  Technical Skills
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('experience')} className="hover:text-brand-400 transition-colors">
                  Experience & Timeline
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('projects')} className="hover:text-brand-400 transition-colors">
                  Featured Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('education')} className="hover:text-brand-400 transition-colors">
                  Education & Certifications
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href={`mailto:${resumeData.personal.email}`} className="hover:text-brand-400 transition-colors">
                  {resumeData.personal.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${resumeData.personal.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-emerald-400 transition-colors">
                  {resumeData.personal.phone}
                </a>
              </p>
              <p className="text-slate-400 pt-1 font-mono text-[11px]">
                📍 {resumeData.personal.location}
              </p>
            </div>

            <div className="flex items-center gap-2.5 pt-3">
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-[#0a66c2] text-slate-300 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-black text-slate-300 hover:text-white transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {currentYear} {resumeData.personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with React, Tailwind CSS & AI RAG Knowledge System
          </p>
        </div>
      </div>
    </footer>
  );
}
