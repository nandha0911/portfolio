import React, { useState, useEffect, useRef } from 'react';
import {
  Bot,
  X,
  Send,
  Sparkles,
  Trash2,
  Minimize2,
  Maximize2,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { generateAIResponse } from '../utils/llmService.js';
import { resumeData } from '../data/resumeData.js';

export function AIChatbot({ isOpen, onToggle }) {
  // Read API key silently from env or localStorage if available
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_OPENAI_API_KEY || '';
  const provider = import.meta.env.VITE_OPENAI_API_KEY ? 'openai' : 'gemini';

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `👋 Hi! I'm **Ask Me**, Nandha R's AI Assistant.\n\nI have complete knowledge of Nandha's **skills, data science experience at Gradtwin, AI/ML projects (PaperBrain RAG, Voice Assistant, Property Valuation), education, and certifications**.\n\nHow can I help you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      action: null
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    { label: '👋 Tell me about yourself', query: 'Tell me about yourself' },
    { label: '🧠 What are your skills?', query: 'What are your technical skills and tools?' },
    { label: '💼 Show your projects', query: 'What projects have you worked on?' },
    { label: '🚀 Explain your experience', query: 'Explain your experience as a Data Scientist at Gradtwin' },
    { label: '📚 Education details', query: 'What are your educational qualifications?' },
    { label: '🏆 Certifications & awards', query: 'What certifications and achievements do you have?' },
    { label: '📞 How can I contact you?', query: 'How can I contact Nandha?' },
    { label: '📄 Tell me about the RAG project', query: 'Tell me about the PaperBrain PDF Summarizer RAG chatbot' }
  ];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = async (textToSend) => {
    const text = (textToSend || inputQuery).trim();
    if (!text) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    try {
      const response = await generateAIResponse({
        query: text,
        apiKey: apiKey,
        provider: provider,
        history: messages
      });

      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: response.text,
        action: response.action,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const errorMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: "I don't have that information in the portfolio. Please contact the portfolio owner directly for more details.",
        action: { label: 'Contact Nandha R', targetId: 'contact' },
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: `Chat cleared! What else would you like to know about **${resumeData.personal.name}**?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: null
      }
    ]);
  };

  const handleActionClick = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to format basic markdown (bold, lists, links)
  const renderFormattedText = (content) => {
    const lines = content.split('\n');
    return (
      <div className="space-y-1.5 text-xs sm:text-[13px] leading-relaxed">
        {lines.map((line, i) => {
          if (!line.trim()) return <div key={i} className="h-1"></div>;

          // Format bold **text**
          const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

          return (
            <p
              key={i}
              dangerouslySetInnerHTML={{ __html: formatted }}
              className="text-inherit"
            />
          );
        })}
      </div>
    );
  };

  return (
    <>
      {/* Floating Chatbot Bubble Trigger */}
      <div className="fixed bottom-5 right-5 z-40">
        {!isOpen && (
          <button
            onClick={onToggle}
            aria-label="Open AI Assistant"
            className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-brand-500 via-teal-500 to-electric-600 text-white shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <div className="relative">
              <Bot className="w-6 h-6 animate-pulse" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-white rounded-full"></span>
            </div>
            <div className="text-left">
              <span className="font-bold text-xs tracking-wide block">Ask Me (AI)</span>
              <span className="text-[9px] font-mono text-teal-100 block">AI Portfolio Assistant</span>
            </div>
            <Sparkles className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-12 transition-transform ml-1" />
          </button>
        )}
      </div>

      {/* Floating Chat Modal Window */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 flex flex-col rounded-3xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden ${
            isExpanded
              ? 'inset-3 sm:inset-10'
              : 'bottom-4 right-4 w-[95vw] sm:w-[440px] h-[600px] max-h-[90vh]'
          }`}
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white flex items-center justify-between gap-2 shrink-0 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative p-2 rounded-2xl bg-gradient-to-tr from-brand-400 to-electric-500 shadow-md">
                <Bot className="w-5 h-5 text-white" />
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 rounded-full border border-slate-900"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm leading-none flex items-center gap-1.5">
                  <span>Ask Me</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-brand-500/20 text-brand-300 border border-brand-500/30">
                    AI Assistant
                  </span>
                </h3>
                <p className="text-[11px] text-slate-300 mt-1">
                  Portfolio & Resume Guide
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                title="Clear Chat History"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? 'Minimize' : 'Expand'}
                className="hidden sm:block p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={onToggle}
                title="Close Chat"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="px-3.5 py-1.5 bg-brand-500/10 dark:bg-brand-500/15 border-b border-brand-500/20 text-[11px] text-brand-700 dark:text-brand-300 flex items-center justify-between font-mono">
            <span className="flex items-center gap-1.5 truncate">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
              <span className="truncate">Answers grounded in Nandha's portfolio & resume</span>
            </span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50 dark:bg-dark-bg/60">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {isBot && (
                    <div className="w-7 h-7 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 mt-0.5 border border-brand-500/20">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 space-y-2 shadow-sm ${
                      isBot
                        ? 'bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200'
                        : 'bg-gradient-to-r from-brand-500 to-teal-600 text-white'
                    }`}
                  >
                    {renderFormattedText(msg.text)}

                    {/* Optional Action Button */}
                    {msg.action && (
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                        <button
                          onClick={() => handleActionClick(msg.action.targetId)}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-brand-500/10 hover:bg-brand-500/20 text-brand-600 dark:text-brand-400 font-bold text-xs transition-colors"
                        >
                          <span>{msg.action.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    )}

                    <div
                      className={`text-[10px] font-mono text-right ${
                        isBot ? 'text-slate-400' : 'text-teal-100'
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Typing Animation */}
            {isTyping && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 border border-brand-500/20">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800 rounded-2xl px-4 py-3 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-brand-500 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-electric-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-[11px] font-mono text-slate-400 ml-1.5">Thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Question Chips */}
          <div className="px-3 py-2 bg-white dark:bg-dark-surface border-t border-slate-200/60 dark:border-slate-800/80 overflow-x-auto scrollbar-none flex gap-1.5 shrink-0">
            {suggestedQuestions.map((sq, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(sq.query)}
                className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-brand-500/10 dark:hover:bg-brand-500/20 hover:text-brand-600 dark:hover:text-brand-400 text-slate-700 dark:text-slate-300 text-[11px] font-medium whitespace-nowrap transition-colors border border-slate-200/60 dark:border-slate-700/60"
              >
                {sq.label}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white dark:bg-dark-surface border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              placeholder="Ask anything about Nandha's skills, projects..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
            />

            <button
              type="submit"
              disabled={!inputQuery.trim() || isTyping}
              className="p-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-white transition-all shadow-md shadow-brand-500/20"
              title="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
