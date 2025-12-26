import React, { useState, useEffect } from 'react';
import { User, Cpu, Code, Shield, Mail, Monitor, Terminal, Users } from 'lucide-react';

const Taskbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Scroll spy functionality to highlight active section
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'engagements', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'hero', icon: Monitor, label: 'System' },
    { id: 'about', icon: User, label: 'Profile' },
    { id: 'skills', icon: Cpu, label: 'Arsenal' },
    { id: 'projects', icon: Code, label: 'Operations' },
    { id: 'experience', icon: Shield, label: 'Logs' },
    { id: 'engagements', icon: Users, label: 'Community' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[400px] sm:w-auto sm:max-w-none">
      <div className="taskbar-container flex items-center justify-between sm:justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 bg-surface/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">

        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl transition-all duration-300 ease-out ${activeSection === item.id
                ? 'bg-white/10 text-primary -translate-y-1 sm:-translate-y-2 shadow-[0_5px_15px_rgba(16,185,129,0.2)]'
                : 'text-gray-400 hover:text-text-main hover:bg-white/5 hover:-translate-y-1'
              }`}
          >
            <item.icon
              className={`w-5 h-5 sm:w-[22px] sm:h-[22px] transition-transform duration-300 ${activeSection === item.id ? 'scale-105' : 'group-hover:scale-105'}`}
            />

            {/* Active Dot */}
            {activeSection === item.id && (
              <span className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_#10b981]" />
            )}

            {/* Tooltip */}
            <span className="hidden sm:block absolute -top-12 bg-[#1E2430] border border-white/10 text-text-main text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0 whitespace-nowrap pointer-events-none shadow-xl">
              {item.label}
              {/* Tooltip Arrow */}
              <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1E2430] border-r border-b border-white/10 rotate-45"></span>
            </span>
          </button>
        ))}

        {/* Separator */}
        <div className="w-px h-6 sm:h-8 bg-white/10 mx-0.5 sm:mx-1"></div>

        {/* External/Action Links */}
        <button
          onClick={() => window.location.href = `mailto:nabil.elhilali.25@gmail.com`}
          className="group relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl text-gray-400 hover:text-text-main hover:bg-white/5 hover:-translate-y-1 transition-all duration-300"
        >
          <Mail className="w-5 h-5 sm:w-[22px] sm:h-[22px] group-hover:scale-105 transition-transform" />
          <span className="hidden sm:block absolute -top-12 bg-[#1E2430] border border-white/10 text-text-main text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0 whitespace-nowrap pointer-events-none shadow-xl">
            Contact
            <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1E2430] border-r border-b border-white/10 rotate-45"></span>
          </span>
        </button>

        <a
          href="https://github.com/n48i1"
          target="_blank"
          rel="noreferrer"
          className="group relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl text-gray-400 hover:text-text-main hover:bg-white/5 hover:-translate-y-1 transition-all duration-300"
        >
          <Terminal className="w-5 h-5 sm:w-[22px] sm:h-[22px] group-hover:scale-105 transition-transform" />
          <span className="hidden sm:block absolute -top-12 bg-[#1E2430] border border-white/10 text-text-main text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0 whitespace-nowrap pointer-events-none shadow-xl">
            Terminal
            <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1E2430] border-r border-b border-white/10 rotate-45"></span>
          </span>
        </a>

      </div>
    </div>
  );
};

export default Taskbar;