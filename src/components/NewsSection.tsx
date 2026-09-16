import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ARTICLES_DATA } from '../data/content';
import { Article } from '../types';
import { ArticleDetailModal } from './ArticleDetailModal';
import { Search, Calendar, Clock, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('TOUS');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = [
    'TOUS',
    'Juridique',
    'Littérature',
    'Entrepreneuriat',
    'Leadership',
    'Conférences',
    'Événements',
    'Médias',
  ];

  const filteredArticles = ARTICLES_DATA.filter((article) => {
    const matchesCategory =
      selectedCategory === 'TOUS' || article.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="actualites"
      aria-label="Actualités et réflexions"
      className="py-24 bg-[#F7F3EA] text-[#20252B] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F33]/5 border border-[#C9A45C]/40 text-[#0B1F33] text-xs font-semibold tracking-widest uppercase">
            <span>Espace Magazine & Tribunes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#0B1F33] leading-tight">
            Actualités & réflexions
          </h2>

          <div className="w-16 h-0.5 bg-[#C9A45C] mx-auto" />

          <p className="text-base text-[#20252B]/80 font-light max-w-2xl mx-auto">
            Analyses de fond, chroniques doctrinales, retours d'interventions et pensées d'actualité
            signées par Hod Fragonard.
          </p>
        </div>

        {/* Search Bar and Category Filters */}
        <div className="space-y-6 mb-12">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher par mot-clé, sujet ou thème..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#C9A45C]/30 text-xs text-[#20252B] focus:outline-none focus:ring-2 focus:ring-[#C9A45C] shadow-sm"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider transition-all duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-[#0B1F33] text-[#C9A45C] border-[#0B1F33] shadow-sm'
                    : 'bg-white text-[#20252B]/75 border-gray-200 hover:border-[#C9A45C]/40 hover:text-[#0B1F33]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#C9A45C]/25 flex flex-col justify-between"
              >
                <div>
                  {/* Article Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-[#0B1F33]">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#0B1F33]/90 backdrop-blur-md text-[#C9A45C] border border-[#C9A45C]/30 shadow-md">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Article Info */}
                  <div className="p-6 sm:p-8 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-[#20252B]/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#C9A45C]" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-serif text-[#0B1F33] group-hover:text-[#C9A45C] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#20252B]/80 leading-relaxed font-light line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 sm:p-8 pt-0">
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0B1F33] group-hover:text-[#C9A45C] transition-colors pt-4 border-t border-gray-100 w-full"
                  >
                    <span>Lire la suite</span>
                    <ArrowRight className="w-4 h-4 text-[#C9A45C] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-xl border border-dashed border-[#C9A45C]/40 max-w-md mx-auto space-y-2">
            <p className="text-sm font-serif font-bold text-[#0B1F33]">
              Aucun article ne correspond à votre recherche
            </p>
            <p className="text-xs text-gray-500">
              Essayez de réinitialiser vos filtres ou de modifier votre terme de recherche.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('TOUS');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-1.5 text-xs rounded bg-[#0B1F33] text-[#F7F3EA]"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>

      {/* Article Detail Modal */}
      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
};
