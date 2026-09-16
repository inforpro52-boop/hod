import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, ShieldCheck, Mail, Sparkles } from 'lucide-react';
import { SITE_INFO } from '../data/content';

interface HeaderProps {
  onNavigateToContact: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateToContact, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Juriste', href: '#juriste' },
    { label: 'Autrice', href: '#autrice' },
    { label: 'Engagements & projets', href: '#engagements' },
    { label: 'Actualités', href: '#actualites' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'Presse & médias', href: '#presse' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top progress bar */}
      <div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#C9A45C] via-[#E8D39B] to-[#C9A45C] z-[100] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1F33]/95 backdrop-blur-md shadow-xl shadow-black/20 border-b border-[#C9A45C]/20 py-3.5'
            : 'bg-[#0B1F33]/85 backdrop-blur-sm border-b border-[#C9A45C]/10 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            id="brand-logo-link"
            className="group flex flex-col focus:outline-none focus:ring-2 focus:ring-[#C9A45C] rounded-sm p-1"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#F7F3EA] font-serif group-hover:text-[#C9A45C] transition-colors">
                HOD FRAGONARD
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C9A45C] animate-pulse" />
            </div>
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] text-[#C9A45C] uppercase font-light">
              Juriste • Autrice • Entrepreneure
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7" aria-label="Navigation principale">
            {navLinks.slice(0, 7).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`text-[13px] tracking-wide font-medium transition-all duration-200 relative py-1 ${
                  activeSection === link.href.substring(1)
                    ? 'text-[#C9A45C] font-semibold'
                    : 'text-[#F7F3EA]/85 hover:text-[#C9A45C]'
                }`}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C9A45C]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              id="header-contact-btn"
              onClick={onNavigateToContact}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider text-[#0B1F33] uppercase bg-[#C9A45C] hover:bg-[#dfbe7b] transition-all duration-200 shadow-md shadow-[#C9A45C]/20 rounded hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Me contacter</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={onNavigateToContact}
              className="px-3 py-1.5 text-[11px] font-semibold tracking-wider text-[#0B1F33] uppercase bg-[#C9A45C] rounded"
            >
              Contact
            </button>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 text-[#F7F3EA] hover:text-[#C9A45C] focus:outline-none focus:ring-2 focus:ring-[#C9A45C] rounded"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[65px] bg-[#0B1F33] z-40 lg:hidden flex flex-col justify-between p-6 overflow-y-auto border-t border-[#C9A45C]/20"
          >
            <div className="space-y-4 pt-4">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#C9A45C] font-semibold border-b border-white/10 pb-2">
                Navigation officielle
              </p>
              <div className="flex flex-col space-y-3">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-lg font-serif text-[#F7F3EA] hover:text-[#C9A45C] transition-colors py-2 flex items-center justify-between border-b border-white/5"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C9A45C]/60" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToContact();
                }}
                className="w-full py-3.5 text-center text-xs font-semibold tracking-widest text-[#0B1F33] uppercase bg-[#C9A45C] hover:bg-[#dfbe7b] rounded shadow-lg"
              >
                ME CONTACTER
              </button>
              <div className="text-center text-xs text-[#F7F3EA]/60 flex items-center justify-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>Le droit, les idées et l'engagement</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
