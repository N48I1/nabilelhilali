import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Certification } from '../types';
import { ShieldCheck } from 'lucide-react';

interface CertCardProps {
  cert: Certification;
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

const CertCard: React.FC<CertCardProps> = ({ cert }) => {
  let LogoComponent;
  
  if (cert.name.includes('NSE 1')) {
    LogoComponent = <FortinetLogo level={1} color="#3b82f6" />; // Blue
  } else if (cert.name.includes('NSE 2')) {
    LogoComponent = <FortinetLogo level={2} color="#3b82f6" />; // Blue
  } else if (cert.name.includes('NSE 3')) {
    LogoComponent = <FortinetLogo level={3} color="#a855f7" />; // Purple
  } else if (cert.name.includes('Cisco')) {
    LogoComponent = <CiscoLogo />;
  } else {
    LogoComponent = <ShieldCheck size={48} className="text-gray-400 mb-3" />;
  }

  return (
    <div className="w-72 h-48 flex-shrink-0 mx-4 bg-white/5 backdrop-blur-md rounded-xl p-6 relative border border-white/10 flex flex-col items-center justify-center text-center group overflow-hidden transition-all hover:bg-white/10 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/10 blur-[40px] rounded-full group-hover:bg-primary/20 transition-all"></div>
       
       <div className="relative z-10 flex flex-col items-center">
           {LogoComponent}
           
           <h3 className="font-sans font-bold text-base text-white leading-tight mb-2">
              {cert.name}
           </h3>
           
           <div className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium tracking-wide border ${
              cert.status === 'Completed' 
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
              : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
           }`}>
              {cert.status}
           </div>
       </div>
    </div>
  );
};

const CertificationsBanner: React.FC = () => {
  // Duplicate the list enough times to ensure smooth scrolling on large screens
  const extendedCerts = [...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="mb-12 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center gap-3">
            <ShieldCheck className="text-primary" /> 
            Certifications
        </h2>
      </div>

      <div className="w-full relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div>
        
        {/* Marquee Container */}
        <div className="flex animate-scroll hover:[animation-play-state:paused] w-max">
            <div className="flex items-center gap-4">
                {extendedCerts.map((cert, idx) => (
                    <CertCard key={`cert-${idx}`} cert={cert} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsBanner;