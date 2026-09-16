import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SITE_INFO } from '../data/content';
import { X, ShieldCheck, FileText, ArrowUpRight, Scale, BookOpen, Compass, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showLegalModal, setShowLegalModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Juriste', href: '#juriste' },
    { label: 'Autrice', href: '#autrice' },
    { label: 'Engagements & projets', href: '#engagements' },
    { label: 'Actualités & réflexions', href: '#actualites' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'Presse & médias', href: '#presse' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#0B1F33] text-[#F7F3EA] border-t border-[#C9A45C]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Presentation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="text-2xl font-bold font-serif tracking-widest text-[#F7F3EA]">
                HOD FRAGONARD
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-light">
                Juriste • Autrice • Entrepreneure
              </p>
            </div>

            <p className="text-sm text-[#F7F3EA]/75 max-w-md font-light leading-relaxed">
              « Le droit, les idées et l'engagement au service d'une vision. »
              Un site officiel dédié à la transmission, à l'excellence juridique et au rayonnement
              d'initiatives citoyennes d'envergure.
            </p>

            <div className="pt-2 text-xs text-[#F7F3EA]/60 space-y-1">
              <p>Correspondance : {SITE_INFO.displayEmail}</p>
              <p>Édition & Diffusion : {SITE_INFO.location}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C9A45C]">
              Navigation Rapide
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-[#F7F3EA]/80 font-light">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-[#C9A45C] transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C9A45C]/50" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Deontological & Institutional Statement */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C9A45C]">
              Notice Déontologique
            </h4>
            <p className="text-[11px] text-[#F7F3EA]/70 leading-relaxed font-light">
              Le présent site vitrine est une plateforme d'information et d'expression intellectuelle.
              Aucune démarche sur ce site ne constitue un conseil ou une consultation juridique personnalisée
              sans convention préalable dûment conclue.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C9A45C] hover:text-[#dfbe7b] uppercase tracking-wider"
              >
                <span>Écrire au secrétariat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F7F3EA]/60 font-light">
          <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
            <span>© {currentYear} Hod Fragonard. Tous droits réservés.</span>
            <span className="hidden md:inline">•</span>
            <button
              onClick={() => setShowLegalModal(true)}
              className="hover:text-[#C9A45C] underline-offset-4 hover:underline transition-colors"
            >
              Mentions Légales
            </button>
            <span>•</span>
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-[#C9A45C] underline-offset-4 hover:underline transition-colors"
            >
              Politique de Confidentialité
            </button>
          </div>

          {/* Explicit Mandated Credit */}
          <div className="text-center md:text-right">
            <span className="text-[#C9A45C] font-medium tracking-wide">
              Site conçu par {SITE_INFO.designedBy}
            </span>
          </div>
        </div>
      </div>

      {/* Mentions Légales Modal */}
      <AnimatePresence>
        {showLegalModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#F7F3EA] text-[#20252B] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#C9A45C]/40"
            >
              <div className="flex items-center justify-between border-b border-[#C9A45C]/30 pb-3 mb-4">
                <h3 id="legal-title" className="text-xl font-serif font-bold text-[#0B1F33]">
                  Mentions Légales
                </h3>
                <button
                  onClick={() => setShowLegalModal(false)}
                  className="p-1.5 rounded-full hover:bg-black/10 text-[#0B1F33]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#20252B]/85 leading-relaxed">
                <div>
                  <h4 className="font-bold text-[#0B1F33]">1. Éditeur du Site</h4>
                  <p>
                    Le présent site officiel est édité par ou pour le compte de <strong>Hod Fragonard</strong>,
                    juriste, autrice et entrepreneure.
                    <br />
                    Adresse électronique : [EMAIL PROFESSIONNEL À FOURNIR]
                    <br />
                    Directeur de la publication : Hod Fragonard.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0B1F33]">2. Conception & Développement</h4>
                  <p>
                    Site conçu et réalisé avec exigence technique par <strong>Jason_INFORMATIQUE</strong>.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0B1F33]">3. Propriété Intellectuelle</h4>
                  <p>
                    L'ensemble des éléments figurant sur le site (textes, chroniques, extraits littéraires,
                    photographies, graphismes, logos) est protégé par les lois relatives à la propriété
                    intellectuelle. Toute reproduction totale ou partielle sans autorisation expresse est
                    strictement interdite.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0B1F33]">4. Déontologie et Information Juridique</h4>
                  <p>
                    Les analyses et textes publiés sur le site ont une valeur d'information générale et ne
                    sauraient se substituer à une consultation juridique personnalisée adaptée aux faits d'une
                    espèce particulière.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 text-right">
                <button
                  onClick={() => setShowLegalModal(false)}
                  className="px-4 py-2 text-xs font-semibold uppercase bg-[#0B1F33] text-[#F7F3EA] rounded"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Politique de Confidentialité Modal */}
      <AnimatePresence>
        {showPrivacyModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#F7F3EA] text-[#20252B] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#C9A45C]/40"
            >
              <div className="flex items-center justify-between border-b border-[#C9A45C]/30 pb-3 mb-4">
                <h3 id="privacy-title" className="text-xl font-serif font-bold text-[#0B1F33]">
                  Politique de Confidentialité
                </h3>
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="p-1.5 rounded-full hover:bg-black/10 text-[#0B1F33]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#20252B]/85 leading-relaxed">
                <div>
                  <h4 className="font-bold text-[#0B1F33]">1. Données collectées</h4>
                  <p>
                    Les informations recueillies via le formulaire de contact (nom, prénom, email, téléphone,
                    sujet et message) sont uniquement destinées au traitement direct de votre demande par le
                    secrétariat de Hod Fragonard.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0B1F33]">2. Non-cession des données</h4>
                  <p>
                    Ces données ne font l'objet d'aucune cession, revente ou communication à des tiers à des
                    fins publicitaires ou commerciales.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0B1F33]">3. Vos Droits (RGPD)</h4>
                  <p>
                    Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un
                    droit d'accès, de rectification et de suppression des données vous concernant, exerçable sur
                    simple demande à l'adresse officielle de contact.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 text-right">
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="px-4 py-2 text-xs font-semibold uppercase bg-[#0B1F33] text-[#F7F3EA] rounded"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
