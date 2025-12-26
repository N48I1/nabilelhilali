import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Code, Cpu, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Experience', href: '#experience', icon: Terminal },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primaryDark rounded-lg flex items-center justify-center text-text-main font-bold font-mono">
                    N
                </div>
                <span className="font-bold text-lg tracking-tight text-text-main">N48I1</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-muted hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                >
                  <link.icon size={14} />
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="bg-primary hover:bg-primaryDark text-text-main px-4 py-2 rounded-md text-sm font-bold transition-all shadow-lg shadow-primary/20">
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-text-main hover:bg-surfaceHighlight focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/5 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-primary font-bold block px-3 py-2"
            >
                Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;