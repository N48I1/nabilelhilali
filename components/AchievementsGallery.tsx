import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Camera, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryPhoto {
  src: string;
  caption: { en: string; fr: string };
  position?: string;
}

const PHOTOS: GalleryPhoto[] = [
  {
    src: '/assets/macc-2026-team.jpg',
    caption: { en: 'MACC 2026 — 1st Place, National Final', fr: 'MACC 2026 — 1ère Place, Finale Nationale' }
  },
  {
    src: '/assets/macc-2026-award.jpg',
    caption: { en: 'Honored by UMP-Oujda president, Pr. Yassine Zarhloule', fr: 'À l\'honneur avec le président de l\'UMP-Oujda, Pr. Yassine Zarhloule' },
    position: 'center 40%'
  },
  {
    src: '/assets/macc-2026-trophy.jpg',
    caption: { en: 'MACC 2026 trophy — DGSSI', fr: 'Trophée MACC 2026 — DGSSI' },
    position: 'center 20%'
  },
  {
    src: '/assets/ump-laptops.jpg',
    caption: { en: 'Awarded laptops by UMP-Oujda president, Pr. Yassine Zarhloule', fr: 'Remise d\'ordinateurs portables par le président de l\'UMP-Oujda, Pr. Yassine Zarhloule' }
  },
  {
    src: '/assets/aiac-2026-team.jpg',
    caption: { en: 'AIAC CTF — team award', fr: 'CTF AIAC — remise des prix' },
    position: 'center top'
  },
  {
    src: '/assets/git-workshop.jpg',
    caption: { en: 'Git & GitHub workshop — ENIAD Berkane', fr: 'Atelier Git & GitHub — ENIAD Berkane' }
  },
  {
    src: '/assets/linux-101.jpg',
    caption: { en: 'Linux 101 workshop — ENIAD Berkane', fr: 'Atelier Linux 101 — ENIAD Berkane' }
  },
  {
    src: '/assets/git-github-talk.jpg',
    caption: { en: 'Presenting Git & GitHub', fr: 'Présentation Git & GitHub' },
    position: 'center 75%'
  }
];

const AchievementsGallery: React.FC = () => {
  const { language } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const len = PHOTOS.length;
  const isOpen = lightboxIndex !== null;

  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(() => setLightboxIndex(i => (i === null ? i : (i + 1) % len)), [len]);
  const prev = useCallback(() => setLightboxIndex(i => (i === null ? i : (i - 1 + len) % len)), [len]);

  // Keyboard navigation while the lightbox is open
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

  if (len === 0) return null;

  // Duplicate enough times for a seamless -50% scroll loop
  const extended = [...PHOTOS, ...PHOTOS, ...PHOTOS, ...PHOTOS];
  const active = lightboxIndex !== null ? PHOTOS[lightboxIndex] : null;

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="mb-10 text-center relative z-10">
        <h3 className="text-xl md:text-2xl font-bold text-text-main flex items-center justify-center gap-3">
          <Camera className="text-amber-400" size={22} />
          {language === 'fr' ? 'Galerie' : 'Gallery'}
        </h3>
      </div>

      <div className="w-full relative min-h-[18rem]">
        {/* Edge gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div>

        <div
          className="flex animate-scroll w-max"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {extended.map((photo, idx) => (
            <button
              key={`photo-${idx}`}
              onClick={() => setLightboxIndex(idx % len)}
              className="group relative shrink-0 mx-3 w-[27rem] h-[17rem] rounded-xl overflow-hidden border border-white/10 bg-surfaceHighlight hover:border-amber-400/40 transition-colors"
              aria-label={photo.caption[language]}
            >
              <img
                src={photo.src}
                alt={photo.caption[language]}
                loading="lazy"
                style={{ objectPosition: photo.position || 'center' }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Caption + zoom affordance */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <p className="text-white text-xs font-medium leading-tight">{photo.caption[language]}</p>
              </div>
              <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={14} className="text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen lightbox */}
      {active && createPortal(
        <div
          className="fixed inset-0 z-[20000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={close}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next */}
          <button
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>

          <motion.div
            key={lightboxIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-full max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.caption[language]}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            <p className="mt-4 text-center text-white text-sm font-medium">{active.caption[language]}</p>
            <p className="mt-1 text-center text-white/50 text-xs font-mono">{(lightboxIndex ?? 0) + 1} / {len}</p>
          </motion.div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default AchievementsGallery;
