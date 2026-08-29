import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { StartAnimation } from './components/StartAnimation';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { AIChatbot } from './components/AIChatbot';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300 relative selection:bg-brand-500 selection:text-white">
      {/* High-Tech Intro Start Animation */}
      {isLoading && (
        <StartAnimation onComplete={() => setIsLoading(false)} />
      )}

      {/* Top Scroll Reading Progress */}
      <ScrollProgress />

      {/* Top Navigation */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        onOpenChat={() => setIsChatOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          isDark={isDark}
          onOpenChat={() => setIsChatOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenChat={() => setIsChatOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Floating Controls */}
      <BackToTop />
      
      {/* Floating AI Chatbot Assistant */}
      <AIChatbot
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen((prev) => !prev)}
      />

      {/* Interactive Resume Modal Viewer / Printable */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
