import React from 'react';
import { motion } from 'motion/react';
import { Scale, Feather, Compass, ArrowRight, ShieldCheck, BookOpen, Target } from 'lucide-react';
import { THREE_PILLARS } from '../data/content';

export const IntroductionSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-6 h-6 text-[#C9A45C]" />;
      case 'Feather':
        return <Feather className="w-6 h-6 text-[#C9A45C]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#C9A45C]" />;
      default:
        return <Scale className="w-6 h-6 text-[#C9A45C]" />;
    }
  };

  return (
    <section
      id="introduction"
      aria-label="Introduction aux trois piliers"
      className="py-24 bg-[#F7F3EA] text-[#20252B] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F33]/5 border border-[#C9A45C]/30 text-[#0B1F33] text-xs font-semibold tracking-widest uppercase">
            <span>Identité & Vocation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[#0B1F33] leading-tight">
            « Une femme de droit, de lettres et d'engagement. »
          </h2>

          <div className="w-16 h-0.5 bg-[#C9A45C] mx-auto my-3" />

          <p className="text-base sm:text-lg text-[#20252B]/80 font-light leading-relaxed">
            Hod Fragonard conjugue l'exactitude du raisonnement juridique, l'humanisme de la
            création littéraire et le pragmatisme de l'action entrepreneuriale pour façonner une
            société plus juste, éclairée et résiliente.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {THREE_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-[#FFFFFF] rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#C9A45C]/20 flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-transparent group-hover:bg-[#C9A45C] transition-colors rounded-t" />

              <div className="space-y-5">
                {/* Icon and Category Label */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-[#0B1F33] text-[#F7F3EA] shadow-md group-hover:scale-110 transition-transform">
                    {getIcon(pillar.iconName)}
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#C9A45C] uppercase">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-serif text-[#0B1F33] group-hover:text-[#C9A45C] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold tracking-wider text-[#C9A45C] uppercase mt-1">
                    {pillar.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#20252B]/75 leading-relaxed font-light">
                  {pillar.description}
                </p>

                {/* Editorial Quote inside card */}
                <div className="p-3.5 bg-[#F7F3EA]/70 rounded-lg border-l-2 border-[#C9A45C]">
                  <p className="text-xs font-serif italic text-[#0B1F33]/90">
                    « {pillar.quote} »
                  </p>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-6 mt-6 border-t border-[#20252B]/10">
                <a
                  href={pillar.linkTarget}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#0B1F33] uppercase group-hover:text-[#C9A45C] transition-colors"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
