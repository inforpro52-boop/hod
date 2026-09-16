import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BOOKS_DATA } from '../data/content';
import { Book } from '../types';
import { BookDetailModal } from './BookDetailModal';
import { BookOpen, Sparkles, ArrowRight, Bookmark } from 'lucide-react';

export const AutriceSection: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <section
      id="autrice"
      aria-label="Publications littéraires et essais"
      className="py-24 bg-[#F7F3EA] text-[#20252B] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F33]/5 border border-[#C9A45C]/40 text-[#0B1F33] text-xs font-semibold tracking-widest uppercase">
            <span>Pôle Littéraire & Essais</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#0B1F33] leading-tight">
            Écrire pour transmettre.
          </h2>

          <div className="w-16 h-0.5 bg-[#C9A45C] mx-auto" />

          <p className="text-base text-[#20252B]/80 font-light max-w-2xl mx-auto">
            L'écriture comme espace de liberté, de clarification conceptuelle et d'élévation civique.
            Découvrez les ouvrages et essais de Hod Fragonard, pensés pour nourrir la réflexion et
            inspirer l'action.
          </p>
        </div>

        {/* Books Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BOOKS_DATA.map((book, idx) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-[#C9A45C]/25 flex flex-col justify-between"
            >
              <div>
                {/* Book Cover Container with Aspect Ratio */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#0B1F33] p-6 flex items-center justify-center">
                  <img
                    src={book.coverUrl}
                    alt={`Couverture de ${book.title}`}
                    className="h-full w-auto object-cover rounded shadow-lg group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1F33]/90 backdrop-blur-md text-[#C9A45C] text-[11px] font-semibold border border-[#C9A45C]/40">
                      <Bookmark className="w-3 h-3" />
                      <span>{book.publicationYear}</span>
                    </span>
                  </div>
                </div>

                {/* Book Details */}
                <div className="p-6 space-y-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#C9A45C] font-semibold">
                      Ouvrage de référence
                    </span>
                    <h3 className="text-xl font-bold font-serif text-[#0B1F33] group-hover:text-[#C9A45C] transition-colors mt-0.5">
                      {book.title}
                    </h3>
                    <p className="text-xs text-[#20252B]/70 font-medium italic mt-0.5">
                      {book.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-[#20252B]/80 line-clamp-3 leading-relaxed font-light">
                    {book.shortSummary}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  id={`btn-discover-book-${book.id}`}
                  onClick={() => setSelectedBook(book)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#0B1F33] hover:bg-[#1a334d] text-[#F7F3EA] text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow group-hover:shadow-md group-hover:border-b-2 group-hover:border-[#C9A45C]"
                >
                  <span>Découvrir l'ouvrage</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A45C] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Book Detail Modal */}
      <BookDetailModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
      />
    </section>
  );
};
