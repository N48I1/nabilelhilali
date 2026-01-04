import React, { useState, useEffect } from 'react';
import { Wifi, Volume2, Battery, Cpu, Activity, Globe } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '../context/LanguageContext';

const TopBar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-8 bg-background border-b border-white/5 z-50 flex items-center justify-between px-3 sm:px-4 font-mono text-xs select-none transition-colors">
      {/* Left: Workspaces */}
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-blue-500 font-bold tracking-wider">ARCH</span>
        </div>

        {/* Workspaces - Hidden on Mobile */}
        <div className="hidden sm:flex gap-2 text-gray-500">
          <span className="text-primary font-bold hover:bg-white/5 px-2 py-0.5 rounded cursor-pointer transition-colors">[1]</span>
          <span className="hover:text-gray-300 hover:bg-white/5 px-2 py-0.5 rounded cursor-pointer transition-colors">[2]</span>
          <span className="hover:text-gray-300 hover:bg-white/5 px-2 py-0.5 rounded cursor-pointer transition-colors">[3]</span>
          <span className="hover:text-gray-300 hover:bg-white/5 px-2 py-0.5 rounded cursor-pointer transition-colors">[4]</span>
        </div>
      </div>

      {/* Center: Window Title - Desktop Only */}
      <div className="hidden md:flex items-center text-text-muted">
        <span className="text-primary mr-2">➜</span>
        <span>~/portfolio/n48i1</span>
      </div>

      {/* Right: Modules */}
      <div className="flex items-center gap-3 sm:gap-6">
        {/* CPU/RAM - Desktop Only */}
        <div className="hidden lg:flex items-center gap-2 text-text-muted">
          <Cpu size={12} className="text-red-400" />
          <span>CPU: 12%</span>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-text-muted">
          <Activity size={12} className="text-yellow-400" />
          <span>RAM: 4.2G</span>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2 sm:gap-3 pl-0 sm:pl-3 sm:border-l border-white/10">
          <Wifi size={12} className="text-text-muted" />
          <Volume2 size={12} className="text-text-muted hidden sm:block" />
          <Battery size={12} className="text-primary" />
          <ThemeToggle />
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 hover:text-white transition-colors ml-2 sm:ml-2 px-2 py-1 sm:px-0 sm:py-0 rounded bg-white/5 sm:bg-transparent border border-white/10 sm:border-0"
            title={language === 'en' ? 'Switch to French' : 'Passer en Anglais'}
          >
            <Globe size={12} className="text-primary" />
            <span className="text-[10px] font-bold sm:inline">{language.toUpperCase()}</span>
          </button>
        </div>

        {/* Clock */}
        <div className="flex items-center gap-2 bg-surfaceHighlight px-2 sm:px-3 py-0.5 sm:py-1 rounded text-text-main ml-1 sm:ml-2">
          <span className="text-primary font-bold hidden sm:inline">{formatDate(time)}</span>
          <span className="w-px h-3 bg-white/20 hidden sm:block"></span>
          <span className="font-bold sm:font-normal">{formatTime(time)}</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;