import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { DATA } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { Certification } from '../types';
import { ShieldCheck, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <text x="50" y="45" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">NSE</text>
    <text x="50" y="65" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" fontFamily="sans-serif">{level}</text>
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

const certLogo = (cert: Certification) => {
  if (cert.logoUrl) {
    return <img src={cert.logoUrl} alt={cert.name} className="w-16 h-16 mb-3 object-contain drop-shadow-md" />;
  }
  if (cert.name.includes('NSE 1')) return <FortinetLogo level={1} color="#3b82f6" />;
  if (cert.name.includes('NSE 2')) return <FortinetLogo level={2} color="#3b82f6" />;
  if (cert.name.includes('NSE 3')) return <FortinetLogo level={3} color="#a855f7" />;
  if (cert.name.includes('Cisco')) return <CiscoLogo />;
  return <ShieldCheck size={48} className="text-gray-400 mb-3" />;
};

interface CertCardProps {
  cert: Certification;
  onOpen?: () => void;
}

const CertCard: React.FC<CertCardProps> = ({ cert, onOpen }) => {
  const canOpen = !!cert.imageUrl;

  return (
    <div
      onClick={canOpen ? onOpen : undefined}
      role={canOpen ? 'button' : undefined}
      tabIndex={canOpen ? 0 : undefined}
      onKeyDown={canOpen ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen?.(); } } : undefined}
      aria-label={canOpen ? `${cert.name} — view certificate` : cert.name}
      className={`relative bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden group hover:bg-white/10 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-colors ${canOpen ? 'cursor-pointer' : ''}`}
      style={{ width: '22rem', height: '15rem', flexShrink: 0, margin: '0 1rem' }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/10 blur-[40px] rounded-full group-hover:bg-primary/20 transition-all"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
        <div>{certLogo(cert)}</div>
        <h3 className="font-sans font-bold text-base text-text-main leading-tight mb-2">{cert.name}</h3>
        <div className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium tracking-wide border ${cert.status === 'Completed' || cert.status === 'Terminé'
          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
          : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
          }`}>
          {cert.status}
        </div>
        {canOpen && (
          <div className="absolute top-2 right-2 opacity-50 group-hover:opacity-100 transition-opacity">
            <Maximize2 size={14} className="text-text-main/70" />
          </div>
        )}
      </div>
    </div>
  );
};

const CertificationsBanner: React.FC = () => {
  const { language } = useLanguage();
  const { CERTIFICATIONS } = DATA[language];
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  useEffect(() => setMounted(true), []);

  // Only certificates that have an image are viewable in the lightbox
  const viewable = CERTIFICATIONS.filter(c => !!c.imageUrl);
  const indexByName = useRef<Record<string, number>>({});
  indexByName.current = {};
  viewable.forEach((c, i) => { indexByName.current[c.name] = i; });

  const len = viewable.length;
  const isOpen = lbIndex !== null;
  const close = useCallback(() => setLbIndex(null), []);
  const next = useCallback(() => setLbIndex(i => (i === null ? i : (i + 1) % len)), [len]);
  const prev = useCallback(() => setLbIndex(i => (i === null ? i : (i - 1 + len) % len)), [len]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, next, prev, close]);

  const extendedCerts = [...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS];
  const active = lbIndex !== null ? viewable[lbIndex] : null;

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="mb-12 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-text-main flex items-center justify-center gap-3">
          <ShieldCheck className="text-primary" />
          Certifications
        </h2>
      </div>

      <div className="w-full relative min-h-[18rem]">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div>

        <div
          className="flex animate-scroll w-max"
          style={{ animationPlayState: (isPaused || isOpen) ? 'paused' : 'running' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-center gap-4 px-4">
            {extendedCerts.map((cert, idx) => (
              <CertCard
                key={`cert-${idx}`}
                cert={cert}
                onOpen={() => {
                  const vi = indexByName.current[cert.name];
                  if (vi !== undefined) setLbIndex(vi);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen lightbox with keyboard navigation */}
      {mounted && active && createPortal(
        <div
          className="fixed inset-0 z-[20000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={close}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {len > 1 && (
            <>
              <button
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous certificate"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next certificate"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          <motion.div
            key={lbIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-full max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.imageUrl}
              alt={`${active.name} certificate`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10 bg-white"
            />
            <p className="mt-4 text-center text-white text-sm font-semibold">{active.name}</p>
            {len > 1 && (
              <p className="mt-1 text-center text-white/50 text-xs font-mono">{(lbIndex ?? 0) + 1} / {len}</p>
            )}
          </motion.div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default CertificationsBanner;
