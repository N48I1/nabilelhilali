import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { DATA } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { Certification } from '../types';
import { ShieldCheck, X, Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface CertCardProps {
  cert: Certification;
  index: number;
}

const FortinetLogo: React.FC<{ level: number; color: string }> = ({ level, color }) => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 mb-3 drop-shadow-md">
    <defs>
      <linearGradient id={`grad-${level}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M50 5 L90 25 V50 C90 75 50 95 50 95 C50 95 10 75 10 50 V25 L50 5 Z"
      fill={`url(#grad-${level})`}
      stroke="white"
      strokeWidth="2"
    />
    <text
      x="50"
      y="45"
      textAnchor="middle"
      fill="white"
      fontSize="14"
      fontWeight="bold"
      fontFamily="sans-serif"
    >
      NSE
    </text>
    <text
      x="50"
      y="65"
      textAnchor="middle"
      fill="white"
      fontSize="24"
      fontWeight="bold"
      fontFamily="sans-serif"
    >
      {level}
    </text>
  </svg>
);

const CiscoLogo: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 mb-3 drop-shadow-md">
    <circle cx="50" cy="50" r="45" fill="white" stroke="#0ea5e9" strokeWidth="2" />
    <path d="M20 65 L20 50" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
    <path d="M32 65 L32 35" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
    <path d="M44 65 L44 45" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
    <path d="M56 65 L56 40" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
    <path d="M68 65 L68 30" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
    <path d="M80 65 L80 55" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
    <text x="50" y="85" textAnchor="middle" fill="#0ea5e9" fontSize="14" fontWeight="bold">CCNA</text>
  </svg>
);

interface CertCardPropsExtended extends CertCardProps {
  onExpandChange?: (expanded: boolean) => void;
}

const CertCard: React.FC<CertCardPropsExtended> = ({ cert, onExpandChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [mounted, setMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  let LogoComponent;

  if (cert.logoUrl) {
    LogoComponent = (
      <img
        src={cert.logoUrl}
        alt={cert.name}
        className="w-16 h-16 mb-3 object-contain drop-shadow-md"
      />
    );
  } else if (cert.name.includes('NSE 1')) {
    LogoComponent = <FortinetLogo level={1} color="#3b82f6" />;
  } else if (cert.name.includes('NSE 2')) {
    LogoComponent = <FortinetLogo level={2} color="#3b82f6" />;
  } else if (cert.name.includes('NSE 3')) {
    LogoComponent = <FortinetLogo level={3} color="#a855f7" />;
  } else if (cert.name.includes('Cisco')) {
    LogoComponent = <CiscoLogo />;
  } else {
    LogoComponent = <ShieldCheck size={48} className="text-gray-400 mb-3" />;
  }

  const canExpand = !!cert.imageUrl;

  const handleMouseEnter = () => {
    if (canExpand && cardRef.current) {
      const r = cardRef.current.getBoundingClientRect();
      setRect(r);
      setIsExpanded(true);
      onExpandChange?.(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isFullScreen) {
      setIsExpanded(false);
      onExpandChange?.(false);
    }
  };

  return (
    <>
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        className={`relative bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden group hover:bg-white/10 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-colors ${isExpanded ? 'opacity-0' : 'opacity-100'}`}
        style={{ width: '22rem', height: '15rem', flexShrink: 0, margin: '0 1rem' }}
      >
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/10 blur-[40px] rounded-full group-hover:bg-primary/20 transition-all"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
          <div>{LogoComponent}</div>
          <h3 className="font-sans font-bold text-base text-text-main leading-tight mb-2">
            {cert.name}
          </h3>
          <div className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium tracking-wide border ${cert.status === 'Completed' || cert.status === 'Terminé'
            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
            : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
            }`}>
            {cert.status}
          </div>
          {canExpand && (
            <div className="absolute top-2 right-2 opacity-50">
              <Maximize2 size={12} className="text-text-main/50" />
            </div>
          )}
        </div>
      </div>

      {/* Expanded Portal Overlay (Hover) */}
      {mounted && isExpanded && canExpand && rect && createPortal(
        <div className="fixed inset-0 z-[9999]" style={{ pointerEvents: 'none' }}>
          <motion.div
            initial={{
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
              opacity: 0,
              scale: 1
            }}
            animate={{
              top: rect.top - (rect.height * 0.15),
              left: rect.left - (rect.width * 0.15),
              width: rect.width * 1.3,
              height: rect.height * 1.3,
              opacity: 1,
              scale: 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bg-slate-900 rounded-xl border border-white/20 shadow-2xl overflow-hidden flex flex-col z-[10000]"
            style={{ pointerEvents: 'auto' }}
            onMouseLeave={handleMouseLeave}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6">{LogoComponent}</div>
                <span className="text-xs font-bold text-text-main truncate max-w-[150px]">{cert.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFullScreen(true)}
                  className="p-1 hover:bg-white/10 rounded transition-colors"
                  title="Fullscreen"
                >
                  <Maximize2 size={14} className="text-gray-400 hover:text-primary" />
                </button>
                <button onClick={() => setIsExpanded(false)}>
                  <X size={14} className="text-gray-400 hover:text-text-main" />
                </button>
              </div>
            </div>

            {/* Certificate Image */}
            <div
              className="flex-1 bg-white relative overflow-hidden cursor-pointer"
              onClick={() => setIsFullScreen(true)}
            >
              <img
                src={cert.imageUrl}
                alt={`${cert.name} Certificate`}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>,
        document.body
      )}

      {/* Full Screen Modal */}
      {mounted && isFullScreen && createPortal(
        <div
          className="fixed inset-0 z-[20000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={() => setIsFullScreen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 md:-right-12 p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"
              onClick={() => setIsFullScreen(false)}
            >
              <X size={24} />
            </button>
            <img
              src={cert.imageUrl}
              alt={`${cert.name} Full Certificate`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white">{cert.name}</h3>
            </div>
          </motion.div>
        </div>,
        document.body
      )}
    </>
  );
};

const CertificationsBanner: React.FC = () => {
  const { language } = useLanguage();
  const { CERTIFICATIONS } = DATA[language];
  const [isPaused, setIsPaused] = useState(false);
  const extendedCerts = [...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS];

  const handleCardExpandChange = (expanded: boolean) => {
    setIsPaused(expanded);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="mb-12 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-text-main flex items-center justify-center gap-3">
          <ShieldCheck className="text-primary" />
          Certifications
        </h2>
      </div>

      <div className="w-full relative min-h-[18rem]">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div>

        {/* Marquee Container - pauses on hover OR when a card is expanded */}
        <div
          className="flex animate-scroll w-max"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-center gap-4 px-4">
            {extendedCerts.map((cert, idx) => (
              <CertCard key={`cert-${idx}`} index={idx} cert={cert} onExpandChange={handleCardExpandChange} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsBanner;