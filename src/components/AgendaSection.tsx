import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EVENTS_AGENDA } from '../data/content';
import { EventItem } from '../types';
import { Calendar, MapPin, Clock, Tag, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface AgendaSectionProps {
  onContactEvent: (eventTitle: string) => void;
}

export const AgendaSection: React.FC<AgendaSectionProps> = ({ onContactEvent }) => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const filteredEvents = EVENTS_AGENDA.filter((e) => {
    if (filter === 'all') return true;
    return e.status === filter;
  });

  const getTypeBadge = (type: EventItem['type']) => {
    switch (type) {
      case 'Conférence':
        return 'bg-[#0B1F33] text-[#C9A45C] border-[#C9A45C]/40';
      case 'Dédicace':
        return 'bg-[#C9A45C]/15 text-[#0B1F33] border-[#C9A45C]';
      case 'Intervention':
        return 'bg-emerald-900/10 text-emerald-800 border-emerald-500/30';
      case 'Événement professionnel':
        return 'bg-slate-800 text-[#F7F3EA] border-slate-600';
      default:
        return 'bg-[#0B1F33] text-[#F7F3EA] border-transparent';
    }
  };

  return (
    <section
      id="agenda"
      aria-label="Agenda et événements"
      className="py-24 bg-[#FFFFFF] text-[#20252B] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F33]/5 border border-[#C9A45C]/30 text-[#0B1F33] text-xs font-semibold tracking-widest uppercase">
            <span>Rencontres & Interventions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#0B1F33] leading-tight">
            Agenda & Rencontres
          </h2>

          <div className="w-16 h-0.5 bg-[#C9A45C] mx-auto" />

          <p className="text-base text-[#20252B]/80 font-light max-w-2xl mx-auto">
            Retrouvez les prochaines dates de conférences magistrales, séances de dédicaces,
            tables rondes professionnelles et colloques animés par Hod Fragonard.
          </p>
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-full bg-[#F7F3EA] border border-[#C9A45C]/30">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-[#0B1F33] text-[#C9A45C] shadow-sm'
                  : 'text-[#20252B]/70 hover:text-[#0B1F33]'
              }`}
            >
              Tous les événements
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === 'upcoming'
                  ? 'bg-[#0B1F33] text-[#C9A45C] shadow-sm'
                  : 'text-[#20252B]/70 hover:text-[#0B1F33]'
              }`}
            >
              À venir
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === 'past'
                  ? 'bg-[#0B1F33] text-[#C9A45C] shadow-sm'
                  : 'text-[#20252B]/70 hover:text-[#0B1F33]'
              }`}
            >
              Événements passés
            </button>
          </div>
        </div>

        {/* Event List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredEvents.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`p-6 sm:p-7 rounded-xl border transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${
                evt.status === 'upcoming'
                  ? 'bg-[#F7F3EA]/70 border-[#C9A45C]/40 hover:border-[#C9A45C] shadow-sm hover:shadow-md'
                  : 'bg-gray-50/70 border-gray-200 opacity-80'
              }`}
            >
              {/* Event Main Details */}
              <div className="space-y-2.5 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border uppercase tracking-wider ${getTypeBadge(
                      evt.type
                    )}`}
                  >
                    {evt.type}
                  </span>

                  {evt.status === 'upcoming' && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-[#C9A45C] bg-[#0B1F33] px-2.5 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3" />
                      Prochainement
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0B1F33]">
                  {evt.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#20252B]/80 font-light">
                  {evt.description}
                </p>

                {/* Date & Location Meta */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-[#0B1F33] pt-1">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span>{evt.date}</span>
                  </div>
                  {evt.time && (
                    <div className="flex items-center gap-1.5 text-[#20252B]/70">
                      <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                      <span>{evt.time}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 text-[#20252B]/70">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span>
                      {evt.location} ({evt.city})
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0 w-full md:w-auto">
                {evt.status === 'upcoming' ? (
                  <button
                    onClick={() => onContactEvent(evt.title)}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#0B1F33] text-[#F7F3EA] text-xs font-semibold uppercase tracking-wider hover:bg-[#C9A45C] hover:text-[#0B1F33] transition-all shadow"
                  >
                    <span>Participer / Réserver</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="text-xs text-gray-400 italic block text-center md:text-right">
                    Événement clôturé
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
