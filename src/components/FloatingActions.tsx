import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SITE_INFO } from '../data/content';
import { MessageSquare, ArrowUp, X } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhatsappTooltip, setShowWhatsappTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <aside aria-label="Actions rapides" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Floating WhatsApp Button with Tooltip */}
      <div className="relative pointer-events-auto">
        <AnimatePresence>
          {showWhatsappTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              className="absolute right-14 top-2 bg-[#0B1F33] text-[#F7F3EA] text-xs py-2 px-3 rounded-lg shadow-xl border border-[#C9A45C]/40 whitespace-nowrap hidden sm:block"
            >
              <span>Échanger sur WhatsApp</span>
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#0B1F33] rotate-45 border-t border-r border-[#C9A45C]/40" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          id="floating-whatsapp-btn"
          href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=Bonjour%20Hod%20Fragonard,%20je%20vous%20contacte%20depuis%20votre%20site%20officiel.`}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowWhatsappTooltip(true)}
          onMouseLeave={() => setShowWhatsappTooltip(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Contacter via WhatsApp professionnel"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl flex items-center justify-center transition-colors border-2 border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          <MessageSquare className="w-6 h-6" />
        </motion.a>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="back-to-top-btn"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            aria-label="Retourner en haut de la page"
            className="pointer-events-auto w-12 h-12 rounded-full bg-[#0B1F33] hover:bg-[#1a334d] text-[#C9A45C] border border-[#C9A45C]/40 shadow-xl flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A45C]"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </aside>
  );
};
