import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Camera, X, Maximize2 } from 'lucide-react';

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
  const [lightbox, setLightbox] = useState<GalleryPhoto | null>(null);

  if (PHOTOS.length === 0) return null;

  // Duplicate enough times for a seamless -50% scroll loop
  const extended = [...PHOTOS, ...PHOTOS, ...PHOTOS, ...PHOTOS];

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
              onClick={() => setLightbox(photo)}
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
      {lightbox && createPortal(
        <div
          className="fixed inset-0 z-[20000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 md:-right-12 p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.caption[language]}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            <p className="mt-4 text-center text-white text-sm font-medium">{lightbox.caption[language]}</p>
          </motion.div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default AchievementsGallery;
