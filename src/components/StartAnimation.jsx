import React, { useState, useEffect } from 'react';
import { Bot, Sparkles, Terminal, Cpu, Database, ChevronRight } from 'lucide-react';

export function StartAnimation({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const statusLogs = [
    { text: "Booting AI Neural Core...", icon: Cpu },
    { text: "Mounting ChromaDB & RAG Vector Engine...", icon: Database },
    { text: "Calibrating 97.8% AutoML Ensemble...", icon: Sparkles },
    { text: "Loading DataClean AI & PaperBrain Models...", icon: Bot },
    { text: "System Online. Welcome to Nandha R's Portfolio.", icon: Terminal }
  ];

  useEffect(() => {
    // Progress counter animation
    const startTime = Date.now();
    const duration = 1800; // 1.8 seconds total duration

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      
      setProgress(rawProgress);

      // Update status text based on progress thresholds
      if (rawProgress < 25) setStatusIndex(0);
      else if (rawProgress < 50) setStatusIndex(1);
      else if (rawProgress < 75) setStatusIndex(2);
      else if (rawProgress < 95) setStatusIndex(3);
      else setStatusIndex(4);

      if (rawProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600); // Wait for fade-out transition to finish
        }, 300);
      }
    }, 25);

    // Allow user to skip by pressing Escape or Space
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 300);
  };

  const CurrentIcon = statusLogs[statusIndex].icon;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-950 text-white overflow-hidden transition-all duration-700 ${
        isFadingOut
          ? 'opacity-0 scale-105 pointer-events-none blur-sm'
          : 'opacity-100 scale-100'
      }`}
      aria-label="Website Loading Animation"
    >
      {/* Dynamic Cyber Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      {/* Decorative Glowing Ambient Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 z-20 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-teal-500/50 text-xs font-mono backdrop-blur-md transition-all group"
      >
        <span>Skip Intro</span>
        <span className="text-[10px] text-slate-500 px-1 py-0.2 rounded bg-slate-800 border border-slate-700">ESC</span>
        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Center Holographic HUD Card */}
      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center">
        {/* Animated Cyber Core Rings with Avatar */}
        <div className="relative mb-6 flex items-center justify-center">
          {/* Outer Rotating Dashed Ring */}
          <div className="absolute w-36 h-36 rounded-full border-2 border-dashed border-teal-500/40 animate-[spin_10s_linear_infinite]" />
          
          {/* Counter-Rotating Concentric Ring */}
          <div className="absolute w-32 h-32 rounded-full border border-indigo-400/30 animate-[spin_6s_linear_infinite_reverse]" />
          
          {/* Pulsing Core Glow */}
          <div className="absolute w-28 h-28 rounded-full bg-gradient-to-tr from-teal-500/20 to-indigo-500/30 blur-md animate-pulse" />

          {/* AI Core Holographic Centerpiece */}
          <div className="relative w-20 h-20 rounded-2xl p-0.5 bg-gradient-to-tr from-teal-400 via-cyan-400 to-indigo-500 shadow-2xl shadow-teal-500/40 flex items-center justify-center">
            <div className="w-full h-full rounded-[14px] bg-slate-900/90 flex items-center justify-center border border-white/20 backdrop-blur-md">
              <Bot className="w-9 h-9 text-teal-300 animate-pulse" />
            </div>
          </div>

          {/* Corner Orbiting Sparkle Dot */}
          <div className="absolute -top-1 right-2 w-3.5 h-3.5 rounded-full bg-teal-400 shadow-lg shadow-teal-400/80 animate-ping" />
        </div>

        {/* Brand Monogram & Title */}
        <div className="space-y-1 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-[11px] font-mono tracking-widest uppercase mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span>AI Engineer & Data Scientist</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-teal-200 bg-clip-text text-transparent">
            Nandha R
          </h1>
          <p className="text-xs font-mono text-slate-400 tracking-wide">
            Automated Data Cleaning • RAG AI • Predictive ML
          </p>
        </div>

        {/* Holographic Progress HUD */}
        <div className="w-full space-y-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 backdrop-blur-md shadow-xl">
          {/* Progress Percentage & Status */}
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-teal-300 truncate max-w-[260px]">
              <CurrentIcon className="w-3.5 h-3.5 animate-spin-slow shrink-0 text-teal-400" />
              <span className="truncate">{statusLogs[statusIndex].text}</span>
            </div>
            <span className="text-white font-bold tracking-wider">{progress}%</span>
          </div>

          {/* Progress Bar Track */}
          <div className="relative w-full h-2 rounded-full bg-slate-800 overflow-hidden border border-slate-700/50">
            <div
              className="h-full bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 rounded-full transition-all duration-100 shadow-[0_0_12px_rgba(45,212,191,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Bottom Diagnostics Footer */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1 border-t border-slate-800/60">
            <span>MEM: 64MB / STREAM: OK</span>
            <span>MODEL: XGBOOST 97.8%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartAnimation;
