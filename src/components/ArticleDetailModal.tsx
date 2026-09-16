import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Article } from '../types';
import { X, Clock, Calendar, Tag, Share2, Check, Copy, Linkedin, Twitter } from 'lucide-react';

interface ArticleDetailModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`${article.title} — par Hod Fragonard`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'noopener,noreferrer');
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-modal-title"
      >
        <motion.article
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          className="relative bg-[#FFFFFF] text-[#20252B] rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#C9A45C]/30 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Fermer la vue de l'article"
            className="absolute top-4 right-4 p-2 rounded-full bg-[#0B1F33]/70 hover:bg-[#0B1F33] text-[#F7F3EA] transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Article Header Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-2xl bg-[#0B1F33]">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-[#F7F3EA] space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#C9A45C] text-[#0B1F33] text-xs font-semibold uppercase tracking-wider">
                {article.category}
              </span>
              <h2 id="article-modal-title" className="text-xl sm:text-2xl md:text-3xl font-bold font-serif leading-tight">
                {article.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#F7F3EA]/80 pt-1">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C9A45C]" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                  {article.readTime}
                </span>
                <span className="text-[#C9A45C] font-serif italic">Par Hod Fragonard</span>
              </div>
            </div>
          </div>

          {/* Article Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Excerpt Lead */}
            <p className="text-base sm:text-lg font-serif italic text-[#0B1F33] border-l-3 border-[#C9A45C] pl-4 leading-relaxed bg-[#F7F3EA] p-3 rounded-r-lg">
              {article.excerpt}
            </p>

            {/* Paragraphs */}
            <div className="space-y-4 text-base text-[#20252B]/85 font-light leading-relaxed">
              {article.content.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-[#C9A45C]" />
                Mots-clés :
              </span>
              {article.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 text-xs rounded-md bg-[#F7F3EA] text-[#0B1F33] border border-[#C9A45C]/30"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Share bar */}
            <div className="p-4 rounded-xl bg-[#F7F3EA] border border-[#C9A45C]/30 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
                <Share2 className="w-4 h-4 text-[#C9A45C]" />
                <span>Partager cette réflexion</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShareLinkedIn}
                  aria-label="Partager sur LinkedIn"
                  className="p-2 rounded-lg bg-[#0B1F33] text-[#F7F3EA] hover:bg-[#C9A45C] hover:text-[#0B1F33] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  onClick={handleShareTwitter}
                  aria-label="Partager sur X / Twitter"
                  className="p-2 rounded-lg bg-[#0B1F33] text-[#F7F3EA] hover:bg-[#C9A45C] hover:text-[#0B1F33] transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCopyLink}
                  aria-label="Copier le lien de l'article"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0B1F33] text-[#F7F3EA] hover:bg-[#C9A45C] hover:text-[#0B1F33] text-xs font-medium transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Lien copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copier le lien</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </AnimatePresence>
  );
};
