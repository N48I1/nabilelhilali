import React from 'react';
import { Terminal, Cpu, Shield, Activity, User, Mail } from 'lucide-react';

interface NavDockProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const NavDock: React.FC<NavDockProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'hero', icon: Terminal, label: '/home' },
    { id: 'about', icon: User, label: '/whoami' },
    { id: 'skills', icon: Cpu, label: '/skills' },
    { id: 'projects', icon: Activity, label: '/ops' },
    { id: 'experience', icon: Shield, label: '/logs' },
    { id: 'contact', icon: Mail, label: '/comms' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-4">
      <div className="flex items-center justify-between bg-cyber-black/90 border border-cyber-primary/50 backdrop-blur-md px-4 py-3 rounded-lg shadow-[0_0_20px_rgba(0,255,65,0.2)]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`group relative flex flex-col items-center justify-center gap-1 transition-all duration-300 ${
              activeSection === item.id ? 'text-cyber-green scale-110' : 'text-gray-500 hover:text-cyber-text'
            }`}
          >
            <item.icon size={20} />
            <span className="absolute -top-8 bg-cyber-green text-cyber-black text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold">
              {item.label}
            </span>
            {activeSection === item.id && (
              <span className="absolute -bottom-1 w-1 h-1 bg-cyber-green rounded-full shadow-[0_0_5px_#00ff41]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavDock;