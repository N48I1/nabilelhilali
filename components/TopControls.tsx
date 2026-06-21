import React from 'react';
import { Globe } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '../context/LanguageContext';

const TopControls: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <ThemeToggle />
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 transition-colors"
        aria-label={language === 'en' ? 'Switch to French' : 'Passer en Anglais'}
        title={language === 'en' ? 'Switch to French' : 'Passer en Anglais'}
      >
        <Globe size={16} className="text-primary" />
        <span className="text-[11px] font-bold text-text-main leading-none">{language.toUpperCase()}</span>
      </button>
    </div>
  );
};

export default TopControls;
