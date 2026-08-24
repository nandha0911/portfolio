import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Sun,
  Moon,
  Bot,
  FileText,
  Sparkles,
  Terminal,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Mail
} from 'lucide-react';
import { resumeData } from '../data/resumeData';
import profileImg from '../assets/profile.jpg';

export function Navbar({ isDark, toggleTheme, onOpenChat, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about', id: 'about', icon: Terminal },
    { label: 'Skills', href: '#skills', id: 'skills', icon: Code2 },
    { label: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { label: 'Projects', href: '#projects', id: 'projects', icon: Sparkles },
    { label: 'Education', href: '#education', id: 'education', icon: GraduationCap },
    { label: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
    { label: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-dark-bg/85 backdrop-blur-md shadow-lg border-b border-slate-200/60 dark:border-slate-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-brand-500/40 shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform bg-slate-900">
              <img
                src={profileImg}
                alt={resumeData.personal.name}
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white dark:border-dark-bg rounded-full animate-pulse"></span>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {resumeData.personal.name}
              </span>
              <span className="block text-xs font-mono text-brand-600 dark:text-cyan-400 font-medium">
                Data Scientist & AI
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/70 dark:border-slate-800/70 backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-brand-500 text-white shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* AI Assistant Quick Pill */}
            <button
              onClick={onOpenChat}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-electric-500/10 dark:bg-electric-500/20 text-electric-600 dark:text-electric-400 border border-electric-500/30 hover:bg-electric-500 hover:text-white transition-all shadow-sm group"
              title="Ask AI Chatbot about Nandha's portfolio"
            >
              <Bot className="w-3.5 h-3.5 animate-bounce group-hover:animate-none" />
              <span>Ask AI</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full bg-brand-500 text-white hover:bg-brand-600 shadow-md shadow-brand-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-slate-800 transition-colors"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 dark:bg-dark-surface/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl transition-all">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-electric-500/10 dark:bg-electric-500/20 text-electric-600 dark:text-electric-400 font-medium text-xs border border-electric-500/20"
            >
              <Bot className="w-4 h-4" />
              <span>Ask AI Chatbot</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-brand-500 text-white font-medium text-xs shadow-md shadow-brand-500/20"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </button>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4 text-brand-500" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
