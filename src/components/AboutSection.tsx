import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SITE_INFO } from '../data/content';
import { CheckCircle2, ChevronRight, Award, GraduationCap, X, FileText, Sparkles, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [showJourneyModal, setShowJourneyModal] = useState(false);

  return (
    <section
      id="a-propos"
      aria-label="À propos de Hod Fragonard"
      className="py-24 bg-[#FFFFFF] text-[#20252B] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image and Decorative Elements */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Gold frame shadow */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C9A45C]/30 rounded-lg pointer-events-none" />

              <div className="relative rounded-lg overflow-hidden shadow-xl bg-[#0B1F33] border border-[#C9A45C]/30 aspect-[3/4]">
                <img
                  src={SITE_INFO.secondaryPortrait}
                  alt="Hod Fragonard — Juriste et Autrice"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/80 to-transparent text-[#F7F3EA]">
                  <p className="text-xs uppercase tracking-widest text-[#C9A45C] font-semibold">
                    Posture & Démarche
                  </p>
                  <p className="text-base font-serif font-bold">
                    Rigueur doctrinale, clarté littéraire & vision
                  </p>
                </div>
              </div>

              {/* Floating verified values card */}
              <div className="absolute -bottom-6 -right-6 bg-[#F7F3EA] border border-[#C9A45C]/40 rounded-lg p-4 shadow-xl max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#0B1F33] text-[#C9A45C]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0B1F33] uppercase tracking-wider">
                      Engagement Citoyen
                    </p>
                    <p className="text-[11px] text-[#20252B]/80">
                      Au service des personnes et des organisations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1F33]/5 border border-[#C9A45C]/40 text-[#0B1F33] text-xs font-semibold tracking-widest uppercase">
              <span>Parcours & Convictions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#0B1F33] leading-tight">
              À propos de Hod Fragonard
            </h2>

            <div className="w-16 h-0.5 bg-[#C9A45C]" />

            <div className="space-y-4 text-base text-[#20252B]/85 font-light leading-relaxed">
              <p>
                Juriste de formation, autrice par vocation et entrepreneure par engagement,{' '}
                <strong className="font-semibold text-[#0B1F33]">Hod Fragonard</strong> a bâti son parcours
                sur une conviction inébranlable : le savoir juridique et la maîtrise des mots constituent
                les instruments les plus puissants pour éclairer les décisions, protéger les équilibres
                et ouvrir de nouvelles perspectives d'action.
              </p>

              <p>
                Son travail d'analyse juridique accompagne les personnes morales et physiques dans la
                sécurisation de leurs projets les plus exigeants, avec un souci constant de probité et
                de clarté. Parallèlement, sa démarche d'autrice explore les enjeux sociétaux cruciaux :
                l'autonomie, la transmission intergénérationnelle et l'importance du débat d'idées.
              </p>

              <p>
                Sur le terrain de l'entrepreneuriat, elle impulse des initiatives concrètes favorisant
                l'émergence de nouveaux talents et le rayonnement d'un leadership responsable, inclusif
                et pérenne.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-[#F7F3EA] border border-[#C9A45C]/20">
                <div className="flex items-center gap-2 text-[#0B1F33] font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A45C]" />
                  <span>Excellence</span>
                </div>
                <p className="text-xs text-[#20252B]/75">
                  Exigence méthodologique et rigueur analytique sans compromis.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#F7F3EA] border border-[#C9A45C]/20">
                <div className="flex items-center gap-2 text-[#0B1F33] font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A45C]" />
                  <span>Transmission</span>
                </div>
                <p className="text-xs text-[#20252B]/75">
                  Partager le savoir et outiller les générations futures.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#F7F3EA] border border-[#C9A45C]/20">
                <div className="flex items-center gap-2 text-[#0B1F33] font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A45C]" />
                  <span>Intégrité</span>
                </div>
                <p className="text-xs text-[#20252B]/75">
                  Alignement constant entre principes éthiques et décisions d'action.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="about-btn-parcours"
                onClick={() => setShowJourneyModal(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-widest uppercase text-[#0B1F33] bg-[#C9A45C] hover:bg-[#dfbe7b] transition-all rounded shadow-md hover:shadow-lg"
              >
                <span>Découvrir mon parcours</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-widest uppercase text-[#0B1F33] border border-[#0B1F33]/30 hover:border-[#0B1F33] hover:bg-[#0B1F33]/5 transition-all rounded"
              >
                <span>Prendre attache</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Parcours Détaillé */}
      <AnimatePresence>
        {showJourneyModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="journey-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#F7F3EA] rounded-xl max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-2xl border border-[#C9A45C]/40 p-6 sm:p-8"
            >
              <div className="flex items-center justify-between border-b border-[#C9A45C]/30 pb-4 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C9A45C] font-semibold">
                    Document officiel
                  </span>
                  <h3 id="journey-modal-title" className="text-2xl font-serif font-bold text-[#0B1F33]">
                    Parcours & Jalons Institutionnels
                  </h3>
                </div>
                <button
                  onClick={() => setShowJourneyModal(false)}
                  aria-label="Fermer la fenêtre du parcours"
                  className="p-2 rounded-full hover:bg-[#0B1F33]/10 text-[#0B1F33] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Strict Notice regarding validated data */}
              <div className="mb-6 p-4 rounded-lg bg-[#0B1F33] text-[#F7F3EA] border-l-4 border-[#C9A45C]">
                <p className="text-xs font-medium text-[#C9A45C] uppercase tracking-wider mb-1">
                  Transparence & Conformité
                </p>
                <p className="text-xs text-[#F7F3EA]/90 leading-relaxed">
                  Conformément aux règles déontologiques et éditoriales de la cliente, les éléments
                  biographiques ci-dessous présentent les axes de compétence officiels. Les diplômes, dates
                  et distinctions universitaires précises seront mis à jour dès validation par le secrétariat
                  de Hod Fragonard : <span className="underline">[BIOGRAPHIE OFFICIELLE DÉTAILLÉE À FOURNIR PAR LA CLIENTE]</span>.
                </p>
              </div>

              {/* Journey Milestones Timeline */}
              <div className="space-y-6 relative border-l-2 border-[#C9A45C]/40 ml-4 pl-6">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#C9A45C] border-2 border-[#F7F3EA]" />
                  <span className="text-xs font-bold text-[#C9A45C] uppercase tracking-wider">
                    Pôle Juridique
                  </span>
                  <h4 className="text-lg font-bold font-serif text-[#0B1F33]">
                    Pratique du Droit & Conseil Stratégique
                  </h4>
                  <p className="text-sm text-[#20252B]/80 mt-1">
                    Conseil juridique spécialisé auprès de directions générales, négociation contractuelle
                    et structuration d'initiatives réglementaires.
                  </p>
                  <p className="text-xs text-[#0B1F33]/60 italic mt-1">
                    Domaines : Droit des affaires, innovation technologique et gouvernance éthique.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#C9A45C] border-2 border-[#F7F3EA]" />
                  <span className="text-xs font-bold text-[#C9A45C] uppercase tracking-wider">
                    Pôle Littéraire & Pensée
                  </span>
                  <h4 className="text-lg font-bold font-serif text-[#0B1F33]">
                    Publication d’Essais & Chroniques d'Idées
                  </h4>
                  <p className="text-sm text-[#20252B]/80 mt-1">
                    Auteure d'essais et de contributions éditoriales portant sur la justice,
                    la citoyenneté et le rôle de la femme dans la sphère décisionnelle.
                  </p>
                  <p className="text-xs text-[#0B1F33]/60 italic mt-1">
                    Ouvrages de référence : « Le Droit comme Horizon », « Voix Audacieuses ».
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#C9A45C] border-2 border-[#F7F3EA]" />
                  <span className="text-xs font-bold text-[#C9A45C] uppercase tracking-wider">
                    Pôle Entrepreneuriat & Impact
                  </span>
                  <h4 className="text-lg font-bold font-serif text-[#0B1F33]">
                    Initiatives Citoyennes & Mentorat de la Jeunesse
                  </h4>
                  <p className="text-sm text-[#20252B]/80 mt-1">
                    Fondation et parrainage de programmes de mentorat pour jeunes talents, animation de
                    réseaux de leadership féminin et conférences d'éloquence.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#C9A45C]/20 flex justify-end">
                <button
                  onClick={() => setShowJourneyModal(false)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#0B1F33] text-[#F7F3EA] rounded hover:bg-[#1a334d]"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
