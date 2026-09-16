import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRESS_KIT_DATA, SITE_INFO } from '../data/content';
import { Download, FileText, Camera, Mail, Phone, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';

export const PressSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_INFO.displayEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownloadPressKit = () => {
    // Generate an official press release summary document as text download
    const content = `DOSSIER DE PRESSE OFFICIEL — HOD FRAGONARD
Juriste • Autrice • Entrepreneure

==================================================
1. BIOGRAPHIE COURTE
${PRESS_KIT_DATA.shortBio}

==================================================
2. BIOGRAPHIE COMPLÈTE & PARCOURS
${PRESS_KIT_DATA.fullBio}

==================================================
3. THÈMES D'INTERVENTIONS MÉDIAS & CONFÉRENCES
${PRESS_KIT_DATA.speakingThemes.map((t, idx) => `  - ${t}`).join('\n')}

==================================================
4. CONTACTS PRESSE & RELATIONS PUBLIQUES
Rôle : ${PRESS_KIT_DATA.pressContact.role}
Email : ${SITE_INFO.displayEmail} (${SITE_INFO.email})
Téléphone : ${SITE_INFO.displayPhone} (${SITE_INFO.phone})
Délai de réponse : ${PRESS_KIT_DATA.pressContact.availability}

==================================================
Site officiel : https://hodfragonard.com
Tous droits réservés © 2026 Hod Fragonard
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Dossier_de_Presse_Hod_Fragonard_2026.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <section
      id="presse"
      aria-label="Presse et médias"
      className="py-24 bg-[#FFFFFF] text-[#20252B] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F33]/5 border border-[#C9A45C]/30 text-[#0B1F33] text-xs font-semibold tracking-widest uppercase">
            <span>Espace Journalistes & Organisateurs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#0B1F33] leading-tight">
            Presse & Médias
          </h2>

          <div className="w-16 h-0.5 bg-[#C9A45C] mx-auto" />

          <p className="text-base text-[#20252B]/80 font-light max-w-2xl mx-auto">
            Ressources officielles pour les rédactions, organisateurs de colloques et médias :
            biographies vérifiées, photographies libres de droits avec mention de crédit et contacts dédiés.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official High-Res Portrait & Download Kit CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative rounded-xl overflow-hidden bg-[#0B1F33] border border-[#C9A45C]/40 shadow-xl">
              <img
                src={SITE_INFO.officialPortraitHighRes}
                alt="Portrait presse officiel de Hod Fragonard"
                className="w-full h-auto aspect-[3/4] object-cover object-top"
              />
              <div className="p-4 bg-[#0B1F33] border-t border-[#C9A45C]/20 text-[#F7F3EA] flex items-center justify-between">
                <div>
                  <p className="text-xs font-serif font-bold">Portrait Officiel (HD)</p>
                  <p className="text-[10px] text-[#C9A45C] uppercase tracking-wider">
                    Libre de droits pour la presse
                  </p>
                </div>
                <a
                  href={SITE_INFO.officialPortraitHighRes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-[#C9A45C] text-[#0B1F33] hover:bg-[#dfbe7b] transition-colors"
                  title="Ouvrir la photo haute définition"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Press Kit Download Card */}
            <div className="p-6 rounded-xl bg-[#F7F3EA] border border-[#C9A45C]/30 shadow-sm space-y-3">
              <h3 className="font-serif font-bold text-[#0B1F33] text-base flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#C9A45C]" />
                <span>Dossier de presse complet</span>
              </h3>
              <p className="text-xs text-[#20252B]/80 leading-relaxed font-light">
                Téléchargez la notice biographique officielle, les thématiques d'interventions et les éléments visuels institutionnels validés.
              </p>
              <button
                id="press-download-kit-btn"
                onClick={handleDownloadPressKit}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#0B1F33] hover:bg-[#1a334d] text-[#F7F3EA] text-xs font-semibold uppercase tracking-wider transition-colors shadow"
              >
                <Download className="w-4 h-4 text-[#C9A45C]" />
                <span>Télécharger le dossier de presse</span>
              </button>
              {downloadSuccess && (
                <p className="text-[11px] text-emerald-600 font-semibold text-center animate-fade-in">
                  ✓ Dossier de presse téléchargé avec succès !
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Bio short, Bio complete, Intervention themes, and Press contact */}
          <div className="lg:col-span-8 space-y-8">
            {/* Short Bio */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#F7F3EA] border border-[#C9A45C]/30 space-y-3">
              <span className="text-xs font-bold text-[#C9A45C] uppercase tracking-wider block">
                Notice Biographique Synthétique (Prêt à publier)
              </span>
              <p className="text-sm sm:text-base text-[#20252B]/85 font-serif italic leading-relaxed">
                « {PRESS_KIT_DATA.shortBio} »
              </p>
            </div>

            {/* Full Bio Notice */}
            <div className="p-6 sm:p-7 rounded-xl bg-white border border-[#C9A45C]/20 shadow-sm space-y-3">
              <span className="text-xs font-bold text-[#0B1F33] uppercase tracking-wider block">
                Biographie Complète & Validation Déontologique
              </span>
              <p className="text-xs text-[#20252B]/80 leading-relaxed font-light">
                {PRESS_KIT_DATA.fullBio}
              </p>
              <p className="text-[11px] text-[#C9A45C] italic">
                Toute citation ou reprise institutionnelle doit mentionner : « Hod Fragonard, juriste, autrice et entrepreneure ».
              </p>
            </div>

            {/* Speaking Themes */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-[#0B1F33] text-lg">
                Thèmes d'intervention & Débats publics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRESS_KIT_DATA.speakingThemes.map((theme, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-3.5 rounded-lg bg-[#F7F3EA] border border-[#C9A45C]/20 flex items-start gap-2.5 text-xs text-[#20252B]/85"
                  >
                    <Sparkles className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span>{theme}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dedicated Press Contact Card */}
            <div className="p-6 rounded-xl bg-[#0B1F33] text-[#F7F3EA] border border-[#C9A45C]/40 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#C9A45C] font-semibold">
                    Contact Réservé aux Médias
                  </span>
                  <h4 className="text-lg font-serif font-bold text-[#F7F3EA]">
                    {PRESS_KIT_DATA.pressContact.role}
                  </h4>
                </div>
                <span className="text-[11px] bg-[#C9A45C]/20 text-[#C9A45C] px-2.5 py-1 rounded-full border border-[#C9A45C]/30">
                  {PRESS_KIT_DATA.pressContact.availability}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="flex items-center justify-between p-3 rounded bg-[#071524] border border-[#C9A45C]/20">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#C9A45C]" />
                    <span>{SITE_INFO.displayEmail}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[#C9A45C] hover:text-white transition-colors"
                    title="Copier l'adresse"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center p-3 rounded bg-[#071524] border border-[#C9A45C]/20 gap-2">
                  <Phone className="w-4 h-4 text-[#C9A45C]" />
                  <span>{SITE_INFO.displayPhone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
