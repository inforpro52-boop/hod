import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book } from '../types';
import { X, ShoppingBag, Calendar, BookOpen, Quote, Sparkles, ExternalLink, Info, Check } from 'lucide-react';

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
}

export const BookDetailModal: React.FC<BookDetailModalProps> = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-[#F7F3EA] text-[#20252B] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#C9A45C]/40 p-6 sm:p-8 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Fermer la vue détaillée de l'ouvrage"
            className="absolute top-5 right-5 p-2 rounded-full bg-[#0B1F33]/10 hover:bg-[#0B1F33]/20 text-[#0B1F33] transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Column: Cover & Bibliographic Meta */}
            <div className="md:col-span-5 space-y-6">
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#0B1F33] border border-[#C9A45C]/40 max-w-xs mx-auto">
                <img
                  src={book.coverUrl}
                  alt={`Couverture de ${book.title}`}
                  className="w-full h-auto aspect-[3/4] object-cover"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0B1F33]/90 text-[#C9A45C] text-[11px] font-semibold tracking-wider border border-[#C9A45C]/40">
                  {book.publicationYear}
                </div>
              </div>

              {/* Bibliographic Info Box */}
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#C9A45C]/30 shadow-sm space-y-2.5 text-xs text-[#20252B]/85">
                <h4 className="font-serif font-bold text-[#0B1F33] text-sm border-b border-[#C9A45C]/20 pb-1.5 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span>Fiche bibliographique</span>
                </h4>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500">Éditeur :</span>
                  <span className="font-medium text-right">{book.publisher}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500">Pagination :</span>
                  <span className="font-medium">{book.pages}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500">Langue :</span>
                  <span className="font-medium">{book.language}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">ISBN :</span>
                  <span className="font-mono text-xs text-[#C9A45C] font-semibold">{book.isbn}</span>
                </div>
              </div>

              {/* Purchase Actions */}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-[#0B1F33] font-bold">
                  Acquérir cet ouvrage
                </p>
                <div className="space-y-2">
                  {book.purchaseLinks && book.purchaseLinks.length > 0 ? (
                    book.purchaseLinks.map((link, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-lg bg-[#FFFFFF] border border-[#C9A45C]/30"
                      >
                        <span className="text-xs font-semibold text-[#0B1F33]">{link.platform}</span>
                        {link.available ? (
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#C9A45C] text-[#0B1F33] text-xs font-semibold hover:bg-[#dfbe7b]"
                          >
                            <span>Commander</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="text-[11px] text-[#C9A45C] font-medium italic">
                            [LIEN LIVRE À FOURNIR PAR LA CLIENTE]
                          </span>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#C9A45C]/30 text-xs text-gray-500 italic">
                      [LIEN D'ACHAT À FOURNIR PAR LA CLIENTE]
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Title, Full presentation, Excerpt & Reviews */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F33]/10 text-[#0B1F33] text-[11px] font-semibold tracking-wider uppercase mb-2">
                  <Sparkles className="w-3 h-3 text-[#C9A45C]" />
                  <span>Ouvrage Officiel</span>
                </div>
                <h3 id="book-modal-title" className="text-2xl sm:text-3xl font-bold font-serif text-[#0B1F33]">
                  {book.title}
                </h3>
                <p className="text-sm font-semibold tracking-wide text-[#C9A45C] uppercase mt-1">
                  {book.subtitle}
                </p>
              </div>

              {/* Full Summary */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#0B1F33]">
                  Présentation de l'ouvrage
                </h4>
                <p className="text-sm sm:text-base text-[#20252B]/85 leading-relaxed font-light">
                  {book.fullSummary}
                </p>
              </div>

              {/* Excerpt Section */}
              {book.excerpt && (
                <div className="p-5 rounded-xl bg-[#0B1F33] text-[#F7F3EA] border-l-4 border-[#C9A45C] shadow-md space-y-2">
                  <div className="flex items-center gap-2 text-[#C9A45C] text-xs uppercase tracking-wider font-semibold">
                    <Quote className="w-4 h-4" />
                    <span>Extrait choisi</span>
                  </div>
                  <blockquote className="text-sm font-serif italic leading-relaxed text-[#F7F3EA]/90">
                    {book.excerpt}
                  </blockquote>
                </div>
              )}

              {/* Reviews */}
              {book.reviews && book.reviews.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#0B1F33]">
                    Échos & Réception critique
                  </h4>
                  <div className="space-y-2">
                    {book.reviews.map((rev, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3.5 rounded-lg bg-[#FFFFFF] border border-[#C9A45C]/20 shadow-xs"
                      >
                        <p className="text-xs italic text-[#20252B]/80 font-serif">
                          « {rev.quote} »
                        </p>
                        <p className="text-[11px] font-semibold text-[#C9A45C] mt-1 text-right">
                          — {rev.source}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Events */}
              {book.relatedEvents && book.relatedEvents.length > 0 && (
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#C9A45C]/30 space-y-2">
                  <div className="flex items-center gap-2 text-[#0B1F33] text-xs font-bold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span>Événements & Rencontres liés</span>
                  </div>
                  <ul className="space-y-1">
                    {book.relatedEvents.map((evt, eIdx) => (
                      <li key={eIdx} className="text-xs text-[#20252B]/80 flex items-center gap-2">
                        <Check className="w-3 h-3 text-[#C9A45C]" />
                        <span>{evt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
