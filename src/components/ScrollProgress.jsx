import React, { useState, useEffect } from 'react';

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-200/40 dark:bg-slate-800/40 backdrop-blur-sm">
      <div
        className="h-full bg-gradient-to-r from-brand-400 via-cyan-400 to-electric-500 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(45,212,191,0.7)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
