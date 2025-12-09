import React from 'react';
import { Minus, Square, X } from 'lucide-react';

interface TerminalSectionProps {
  title: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const TerminalSection: React.FC<TerminalSectionProps> = ({ title, children, id, className = "" }) => {
  return (
    <div id={id} className={`border border-cyber-secondary bg-cyber-black/90 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,65,0.1)] ${className}`}>
      <div className="flex items-center justify-between px-3 py-1 border-b border-cyber-secondary bg-cyber-secondary/20">
        <div className="flex items-center gap-2">
            <span className="text-cyber-green text-xs font-mono">user@n48i1:~/{title.toLowerCase().replace(/\s/g, '_')}</span>
        </div>
        <div className="flex items-center gap-2">
          <Minus size={14} className="text-cyber-secondary hover:text-cyber-green cursor-pointer" />
          <Square size={12} className="text-cyber-secondary hover:text-cyber-green cursor-pointer" />
          <X size={14} className="text-cyber-secondary hover:text-cyber-alert cursor-pointer" />
        </div>
      </div>
      <div className="p-6 font-mono relative overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default TerminalSection;