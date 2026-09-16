import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera, Image as ImageIcon } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('TOUS');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const filterTabs = [
    'TOUS',
    'CONFÉRENCES',
    'DÉDICACES',
    'ÉVÉNEMENTS',
    'PROFESSIONNEL',
    'MÉDIAS',
  ];

  const filteredItems = selectedCategory === 'TOUS'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveItemIndex(index);
  };

  const closeLightbox = () => {
    setActiveItemIndex(null);
  };

  const nextImage = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section
      id="galerie"
      aria-label="Galerie photographique et interventions"
      className="py-24 bg-[#0B1F33] text-[#F7F3EA] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A45C]/10 border border-[#C9A45C]/30 text-[#C9A45C] text-xs font-semibold tracking-widest uppercase">
            <span>Moments & Archives Officielles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#F7F3EA] leading-tight">
            Galerie
          </h2>

          <div className="w-16 h-0.5 bg-[#C9A45C] mx-auto" />

          <p className="text-base text-[#F7F3EA]/80 font-light max-w-2xl mx-auto">
            Retrospective en images des colloques juridiques, séances de dédicaces, rencontres
            institutionnelles et plateaux médias de Hod Fragonard.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setSelectedCategory(tab);
                setActiveItemIndex(null);
              }}
              className={`px-4 py-2 text-xs font-semibold tracking-wider rounded-full uppercase transition-all duration-200 border ${
                selectedCategory === tab
                  ? 'bg-[#C9A45C] text-[#0B1F33] border-[#C9A45C] shadow-lg shadow-[#C9A45C]/20'
                  : 'bg-[#071524] text-[#F7F3EA]/70 border-white/10 hover:border-[#C9A45C]/40 hover:text-[#F7F3EA]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                onClick={() => openLightbox(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#071524] border border-[#C9A45C]/20 aspect-[4/3] shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/95 via-[#0B1F33]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Caption info overlay */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-2.5 py-1 rounded bg-[#0B1F33]/80 text-[#C9A45C] text-[10px] font-semibold tracking-wider uppercase border border-[#C9A45C]/30">
                      {item.category}
                    </span>
                    <div className="p-2 rounded-full bg-[#C9A45C] text-[#0B1F33] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold font-serif text-[#F7F3EA] group-hover:text-[#C9A45C] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#F7F3EA]/70 mt-1">
                      {item.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItemIndex !== null && filteredItems[activeItemIndex] && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Agrandissement de la photographie"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              aria-label="Fermer la vue agrandie"
              className="absolute top-5 right-5 p-3 rounded-full bg-[#0B1F33]/80 hover:bg-[#C9A45C] text-[#F7F3EA] hover:text-[#0B1F33] transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Photographie précédente"
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0B1F33]/80 hover:bg-[#C9A45C] text-[#F7F3EA] hover:text-[#0B1F33] transition-colors z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Photographie suivante"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0B1F33]/80 hover:bg-[#C9A45C] text-[#F7F3EA] hover:text-[#0B1F33] transition-colors z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content */}
            <motion.div
              key={activeItemIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[70vh] rounded-xl overflow-hidden shadow-2xl border border-[#C9A45C]/30 bg-[#071524]">
                <img
                  src={filteredItems[activeItemIndex].imageUrl}
                  alt={filteredItems[activeItemIndex].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Caption Card */}
              <div className="mt-4 p-4 rounded-xl bg-[#0B1F33]/90 border border-[#C9A45C]/30 text-center max-w-2xl w-full">
                <span className="text-[10px] font-bold text-[#C9A45C] uppercase tracking-widest block mb-1">
                  {filteredItems[activeItemIndex].category} • {filteredItems[activeItemIndex].date}
                </span>
                <h4 className="text-base sm:text-lg font-serif font-bold text-[#F7F3EA]">
                  {filteredItems[activeItemIndex].title}
                </h4>
                <p className="text-xs text-[#F7F3EA]/80 mt-1 font-light">
                  {filteredItems[activeItemIndex].caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
