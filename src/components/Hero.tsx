import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, BookOpen, Compass, Scale, Sparkles, ChevronRight } from 'lucide-react';
import { SITE_INFO } from '../data/content';

interface HeroProps {
  onDiscoverJourney: () => void;
  onDiscoverBooks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverJourney, onDiscoverBooks }) => {
  return (
    <section
      id="hero"
      aria-label="Section d'accueil"
      className="relative min-h-[92vh] flex items-center justify-center bg-[#0B1F33] text-[#F7F3EA] overflow-hidden pt-28 pb-16 lg:py-32"
    >
      {/* Editorial geometric decorative lines and ambient background lights */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C9A45C]/15 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#071524] rounded-full blur-[100px]" />
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C9A45C08_1px,transparent_1px),linear-gradient(to_bottom,#C9A45C08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Typography & Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Subtle Gold Accent Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C9A45C]/40 bg-[#0B1F33]/80 backdrop-blur-md shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-ping" />
              <span className="text-xs tracking-[0.25em] uppercase text-[#C9A45C] font-medium">
                Site Officiel
              </span>
            </motion.div>

            {/* Main Name */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight font-serif text-[#F7F3EA] leading-[1.08]"
              >
                HOD FRAGONARD
              </motion.h1>

              {/* Pillars subline with gold separator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.8 }}
                className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-[#C9A45C] tracking-[0.2em] uppercase font-light"
              >
                <span>Juriste</span>
                <span className="text-[#C9A45C]/50">•</span>
                <span>Autrice</span>
                <span className="text-[#C9A45C]/50">•</span>
                <span>Entrepreneure</span>
              </motion.div>
            </div>

            {/* Asymmetric vertical gold rule and statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative pl-6 py-2 border-l-2 border-[#C9A45C]"
            >
              <blockquote className="text-xl sm:text-2xl md:text-2xl font-serif italic text-[#F7F3EA]/95 leading-relaxed">
                « Le droit, les idées et l'engagement au service d'une vision. »
              </blockquote>
              <p className="mt-2 text-sm text-[#F7F3EA]/70 max-w-xl font-light">
                À la croisée de l'analyse juridique institutionnelle, de la transmission littéraire
                et de l'initiative entrepreneuriale pour un impact durable et citoyen.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto"
            >
              <button
                id="hero-btn-parcours"
                onClick={onDiscoverJourney}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 text-xs font-semibold tracking-widest uppercase text-[#0B1F33] bg-[#C9A45C] hover:bg-[#dfbe7b] transition-all duration-300 rounded shadow-lg shadow-[#C9A45C]/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Découvrir mon parcours</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-btn-ouvrages"
                onClick={onDiscoverBooks}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 text-xs font-semibold tracking-widest uppercase text-[#F7F3EA] border border-[#C9A45C]/60 hover:border-[#C9A45C] hover:bg-[#C9A45C]/10 transition-all duration-300 rounded backdrop-blur-sm"
              >
                <BookOpen className="w-4 h-4 text-[#C9A45C]" />
                <span>Découvrir mes ouvrages</span>
              </button>
            </motion.div>

            {/* Three key credential tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded bg-[#C9A45C]/10 text-[#C9A45C]">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-[#F7F3EA]/50 uppercase tracking-wider font-semibold">Expertise</p>
                  <p className="text-xs text-[#F7F3EA] font-medium">Droit & Gouvernance</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded bg-[#C9A45C]/10 text-[#C9A45C]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-[#F7F3EA]/50 uppercase tracking-wider font-semibold">Écrits</p>
                  <p className="text-xs text-[#F7F3EA] font-medium">Essais & Réflexions</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded bg-[#C9A45C]/10 text-[#C9A45C]">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-[#F7F3EA]/50 uppercase tracking-wider font-semibold">Action</p>
                  <p className="text-xs text-[#F7F3EA] font-medium">Projets & Impact</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Outer decorative golden frame */}
              <div className="absolute -inset-3 rounded-lg border border-[#C9A45C]/40 -rotate-1 pointer-events-none" />
              <div className="absolute -inset-1 rounded-lg border border-[#C9A45C]/20 rotate-1 pointer-events-none" />

              {/* Main portrait container */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-black/60 bg-[#071524] border border-[#C9A45C]/30 aspect-[3/4]">
                <img
                  src={SITE_INFO.heroImage}
                  alt={SITE_INFO.portraitAlt}
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />

                {/* Subtle gradient scrim at bottom edge only */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1F33]/80 to-transparent pointer-events-none" />

                {/* Portrait overlay card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-4 left-4 right-4 p-4 rounded bg-[#0B1F33]/90 backdrop-blur-md border border-[#C9A45C]/30 shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#C9A45C] font-semibold">
                        Portrait Officiel
                      </p>
                      <p className="text-base font-serif font-bold text-[#F7F3EA]">
                        Hod Fragonard
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#C9A45C]/20 border border-[#C9A45C]/40 text-[#C9A45C] text-[11px] font-medium">
                      <Sparkles className="w-3 h-3" />
                      <span>Engagement 2026</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating aesthetic citation badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="hidden sm:block absolute -top-4 -right-4 p-3.5 rounded bg-[#F7F3EA] text-[#0B1F33] shadow-xl border border-[#C9A45C]/40 max-w-[200px]"
              >
                <p className="text-[11px] font-serif italic leading-snug">
                  « La rigueur dans l'analyse, l'audace dans l'action. »
                </p>
                <div className="mt-1.5 h-[1px] w-8 bg-[#C9A45C]" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Subtle scroll down indicator */}
        <div className="pt-12 flex justify-center">
          <a
            href="#introduction"
            aria-label="Faire défiler vers la section introduction"
            className="flex flex-col items-center gap-1 text-xs uppercase tracking-widest text-[#F7F3EA]/50 hover:text-[#C9A45C] transition-colors"
          >
            <span>Explorer</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-4 h-4 text-[#C9A45C]" />
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
};
