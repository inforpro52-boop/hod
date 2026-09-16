import React from 'react';
import { motion } from 'motion/react';
import { LEGAL_DOMAINS } from '../data/content';
import { Briefcase, Cpu, ShieldCheck, BookOpen, AlertCircle, ArrowRight, FileCheck, Scale } from 'lucide-react';

interface JuristeSectionProps {
  onConsultProject: (domainName?: string) => void;
}

export const JuristeSection: React.FC<JuristeSectionProps> = ({ onConsultProject }) => {
  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#C9A45C]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#C9A45C]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#C9A45C]" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#C9A45C]" />;
      default:
        return <Scale className="w-5 h-5 text-[#C9A45C]" />;
    }
  };

  return (
    <section
      id="juriste"
      aria-label="Expertise Juridique"
      className="py-24 bg-[#0B1F33] text-[#F7F3EA] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A45C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#071524] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A45C]/10 border border-[#C9A45C]/30 text-[#C9A45C] text-xs font-semibold tracking-widest uppercase">
            <span>Pôle Expertise Institutionnelle</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#F7F3EA] leading-tight">
            L'expertise juridique au service des personnes et des organisations
          </h2>

          <div className="w-16 h-0.5 bg-[#C9A45C] mx-auto" />

          <p className="text-base text-[#F7F3EA]/80 font-light max-w-2xl mx-auto">
            Une approche prospective et rigoureuse de la règle de droit, conçue pour sécuriser
            les engagements contractuels, anticiper les transformations réglementaires et guider
            les décisions d'envergure.
          </p>
        </div>

        {/* Legal domains grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {LEGAL_DOMAINS.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[#071524] border border-[#C9A45C]/25 rounded-xl p-8 hover:border-[#C9A45C]/70 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-[#0B1F33] border border-[#C9A45C]/30 text-[#C9A45C]">
                    {getDomainIcon(domain.iconName)}
                  </div>
                  <span className="text-xs font-serif text-[#C9A45C]/80 italic">
                    Domaine d'intervention
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-serif text-[#F7F3EA] hover:text-[#C9A45C] transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-[#C9A45C] uppercase tracking-wider font-medium mt-1">
                    {domain.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#F7F3EA]/75 leading-relaxed font-light">
                  {domain.description}
                </p>

                {/* Key Points */}
                <div className="pt-2 space-y-2">
                  {domain.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#F7F3EA]/85">
                      <FileCheck className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onConsultProject(domain.title)}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C9A45C] hover:text-[#dfbe7b] uppercase transition-colors"
                >
                  <span>Échanger sur ce domaine</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Obligatory Ethical Disclaimer Banner */}
        <div className="p-5 rounded-xl bg-[#071524]/90 border border-[#C9A45C]/30 max-w-4xl mx-auto mb-10 flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" />
          <div className="text-xs text-[#F7F3EA]/80 leading-relaxed">
            <strong className="text-[#C9A45C] font-semibold uppercase tracking-wider block mb-0.5">
              Notice Déontologique & Mentions Professionnelles
            </strong>
            Ce site web vitrine présente les activités professionnelles, académiques et éditoriales de
            Hod Fragonard. La consultation du présent site et la transmission d'un message via le formulaire
            de contact ne constituent en aucun cas une consultation juridique directe, ni n'établissent de
            relation contractuelle ou mandat automatique sans accord préalable formel et écrit.
          </div>
        </div>

        {/* Section Primary Call to Action */}
        <div className="text-center">
          <button
            id="juriste-cta-btn"
            onClick={() => onConsultProject()}
            className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase text-[#0B1F33] bg-[#C9A45C] hover:bg-[#dfbe7b] transition-all rounded shadow-xl shadow-[#C9A45C]/20 hover:shadow-2xl hover:-translate-y-0.5"
          >
            <span>Échanger sur un projet</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
