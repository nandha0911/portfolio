import React from 'react';
import {
  X,
  Printer,
  Download,
  FileJson,
  Mail,
  Phone,
  MapPin,
  Building,
  GraduationCap,
  Award,
  Code2
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { resumeData } from '../data/resumeData';

export function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resumeData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "Nandha_R_Resume_Data.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        {/* Modal Top Bar */}
        <div className="p-4 sm:px-6 bg-slate-50 dark:bg-dark-card border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 ml-2">
              Nandha_R_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-500 text-white text-xs font-semibold hover:bg-brand-600 shadow-sm transition-all"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadJson}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-all"
              title="Download Data JSON"
            >
              <FileJson className="w-3.5 h-3.5 text-brand-500" />
              <span className="hidden sm:inline">JSON</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Printable Resume Canvas */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 space-y-6 print:p-0 print:m-0 font-sans">
          {/* Header */}
          <div className="border-b-2 border-slate-800 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  {resumeData.personal.name}
                </h1>
                <p className="text-sm font-semibold text-teal-700 font-mono">
                  {resumeData.personal.title}
                </p>
              </div>

              <div className="text-xs text-slate-600 space-y-0.5 sm:text-right font-mono">
                <div>{resumeData.personal.location}</div>
                <div>{resumeData.personal.phone}</div>
                <div>{resumeData.personal.email}</div>
                <div>linkedin: {resumeData.personal.linkedinUsername} | github: {resumeData.personal.githubUsername}</div>
              </div>
            </div>

            {/* Objective */}
            <div className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-700 italic">
              <strong>Objective: </strong> {resumeData.personal.objective}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-800 border-b border-slate-300 pb-1 font-mono">
              EDUCATION
            </h2>
            <div className="space-y-2.5 text-xs">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-slate-900">{edu.duration}</span>
                    <span className="font-semibold text-slate-800 ml-2">{edu.degree}</span>
                    <div className="text-slate-600 text-[11px]">{edu.institution}, {edu.location}</div>
                  </div>
                  <div className="font-bold text-teal-800 shrink-0 ml-4">{edu.score}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-800 border-b border-slate-300 pb-1 font-mono">
              TECHNICAL SKILLS
            </h2>
            <div className="text-xs text-slate-800 space-y-1">
              <div>
                <strong>Programming Languages: </strong> Java, Python, SQL
              </div>
              <div>
                <strong>AI & Machine Learning: </strong> RAG, ChromaDB, Ollama, Predictive Modeling, Regression, Classification, Feature Engineering, Hyperparameter Tuning, Benchmarking, EDA
              </div>
              <div>
                <strong>NLP & Speech AI: </strong> Speech Recognition (SR), Natural Language Processing (NLP), Text-to-Speech (TTS), Sentence Transformers, BM25 Hybrid Search
              </div>
              <div>
                <strong>Frameworks & APIs: </strong> FastAPI, Streamlit, LLM APIs, Python Data Pipelines
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-800 border-b border-slate-300 pb-1 font-mono">
              EXPERIENCE
            </h2>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="text-xs space-y-1">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>{exp.period}</span>
                  <span>{exp.role} {exp.company}-{exp.location}</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700 text-[11px] leading-relaxed">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-800 border-b border-slate-300 pb-1 font-mono">
              PROJECTS
            </h2>
            <div className="space-y-3 text-xs">
              {resumeData.projects.map((proj, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span className="uppercase text-teal-900">{proj.title}</span>
                    <span className="text-slate-600 font-mono">{proj.date}</span>
                  </div>
                  <div className="text-[11px] text-slate-700 leading-snug">
                    <strong>Objective: </strong>{proj.objective}
                  </div>
                  <div className="text-[11px] text-slate-700 leading-snug">
                    <strong>Description: </strong>{proj.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-800 border-b border-slate-300 pb-1 font-mono">
              CERTIFICATES & ACHIEVEMENTS
            </h2>
            <ol className="list-decimal list-outside pl-4 space-y-1 text-xs text-slate-800">
              <li>Participated in IIIT KOTTAYAM Engineering College on training program (Data Science in Python).</li>
              <li>Participated in KSR Engineering college Paper Presentation 2023 (IOT in military security).</li>
              <li>Won 1st prize in Kongu Engineering college IPL AUCTION 2025.</li>
              <li>Course Completed in Edunet Foundation 2025 (Green Skill and AI).</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
