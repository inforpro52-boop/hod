import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ENGAGEMENTS_DATA } from '../data/content';
import { ProjectEngagement } from '../types';
import { Target, Users, Sparkles, Heart, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

interface EngagementsSectionProps {
  onInitiateProject: () => void;
}

export const EngagementsSection: React.FC<EngagementsSectionProps> = ({ onInitiateProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tous les engagements' },
    { id: 'jeunesse', label: 'Jeunesse & Mentorat' },
    { id: 'leadership', label: 'Leadership Féminin' },
    { id: 'entrepreneuriat', label: 'Entrepreneuriat' },
    { id: 'associatif', label: 'Projets Associatifs' },
    { id: 'initiatives', label: 'Initiatives Personnelles' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? ENGAGEMENTS_DATA
    : ENGAGEMENTS_DATA.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'jeunesse':
        return <Users className="w-5 h-5 text-[#C9A45C]" />;
      case 'leadership':
        return <Sparkles className="w-5 h-5 text-[#C9A45C]" />;
      case 'entrepreneuriat':
        return <Compass className="w-5 h-5 text-[#C9A45C]" />;
      case 'associatif':
        return <Heart className="w-5 h-5 text-[#C9A45C]" />;
      default:
        return <Target className="w-5 h-5 text-[#C9A45C]" />;
    }
  };

  return (
    <section
      id="engagements"
      aria-label="Engagements et projets"
      className="py-24 bg-[#FFFFFF] text-[#20252B] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F33]/5 border border-[#C9A45C]/30 text-[#0B1F33] text-xs font-semibold tracking-widest uppercase">
            <span>Action & Impact Sociétal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#0B1F33] leading-tight">
            Engagements & Projets
          </h2>

          <div className="w-16 h-0.5 bg-[#C9A45C] mx-auto" />

          <p className="text-base text-[#20252B]/80 font-light max-w-2xl mx-auto">
            Entrepreneuriat, transmission intergénérationnelle, promotion du leadership féminin
            et projets d'intérêt général : des initiatives concrètes pour transformer les idées en actions pérennes.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-200 border ${
                selectedCategory === cat.id
                  ? 'bg-[#0B1F33] text-[#C9A45C] border-[#0B1F33] shadow-md'
                  : 'bg-[#F7F3EA] text-[#20252B]/75 border-transparent hover:border-[#C9A45C]/40 hover:text-[#0B1F33]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-[#F7F3EA] rounded-xl p-6 sm:p-8 border border-[#C9A45C]/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Meta */}
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-[#0B1F33] text-[#C9A45C] shadow-sm">
                      {getCategoryIcon(project.category)}
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider text-[#0B1F33]/70 uppercase bg-white/70 px-2.5 py-1 rounded-full border border-[#C9A45C]/20">
                      {project.year}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold tracking-widest text-[#C9A45C] uppercase">
                      {project.categoryLabel}
                    </span>
                    <h3 className="text-xl font-bold font-serif text-[#0B1F33] mt-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#0B1F33]/80 italic mt-0.5">
                      Rôle : {project.role}
                    </p>
                  </div>

                  <p className="text-xs text-[#20252B]/80 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Impact Highlight */}
                  <div className="p-3 bg-white rounded-lg border-l-2 border-[#C9A45C] space-y-1">
                    <span className="text-[10px] font-bold text-[#C9A45C] uppercase tracking-wider block">
                      Impact & Réalisation
                    </span>
                    <p className="text-xs text-[#0B1F33] font-medium leading-snug">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-5 mt-5 border-t border-[#20252B]/10">
                  <button
                    onClick={onInitiateProject}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0B1F33] hover:text-[#C9A45C] uppercase transition-colors"
                  >
                    <span>Proposer un partenariat</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C9A45C]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
