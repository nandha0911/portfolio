import React from 'react';
import {
  Mail,
  Phone
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { resumeData } from '../data/resumeData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-12 pb-10 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10 border-b border-slate-800">
          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Navigation
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2.5 text-xs sm:text-sm text-slate-300">
              <button onClick={() => scrollTo('about')} className="hover:text-brand-400 transition-colors">
                About Me
              </button>
              <button onClick={() => scrollTo('skills')} className="hover:text-brand-400 transition-colors">
                Technical Skills
              </button>
              <button onClick={() => scrollTo('experience')} className="hover:text-brand-400 transition-colors">
                Experience & Timeline
              </button>
              <button onClick={() => scrollTo('projects')} className="hover:text-brand-400 transition-colors">
                Featured Projects
              </button>
              <button onClick={() => scrollTo('education')} className="hover:text-brand-400 transition-colors">
                Education & Certifications
              </button>
              <button onClick={() => scrollTo('contact')} className="hover:text-brand-400 transition-colors">
                Contact
              </button>
            </div>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3 md:text-right">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Direct Contact & Socials
            </h4>
            <div className="space-y-2 text-xs text-slate-300 md:flex md:flex-col md:items-end">
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
              <p className="text-slate-400 font-mono text-[11px]">
                📍 {resumeData.personal.location}
              </p>
            </div>

            <div className="flex items-center gap-2.5 pt-2 md:justify-end">
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-800 hover:bg-[#0a66c2] text-slate-300 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-800 hover:bg-black text-slate-300 hover:text-white transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {currentYear} {resumeData.personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with React, Tailwind CSS & AI RAG Knowledge System
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
