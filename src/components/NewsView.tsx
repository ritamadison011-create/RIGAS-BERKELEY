/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Calendar, User, Clock, ChevronRight, ArrowLeft, Newspaper } from 'lucide-react';
import { newsArticlesData } from '../data';
import { NewsArticle } from '../types';

export default function NewsView() {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  return (
    <div className="font-sans text-gray-300 space-y-12 max-w-7xl mx-auto px-4">
      {selectedArticle ? (
        /* ==================== SINGLE BLOG ARTICLE DETAILS VIEW ==================== */
        <div className="max-w-3xl mx-auto bg-[#0a0f1a] border border-gray-800 rounded-sm p-6 sm:p-8 space-y-6 animate-fade-in">
          
          {/* Back button */}
          <button
            onClick={() => setSelectedArticle(null)}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white font-semibold uppercase tracking-wider bg-transparent border border-gray-800 px-3.5 py-2 rounded-sm transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Corporate Ledger
          </button>

          {/* Heading meta */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-[#148062]/10 border border-[#148062]/20 text-[9px] font-mono text-[#148062] font-bold uppercase rounded-sm">
                {selectedArticle.category}
              </span>
              <span className="text-[10px] text-gray-500">{selectedArticle.date}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight leading-snug uppercase italic">
              {selectedArticle.title}
            </h2>
            
            <div className="flex items-center gap-4 text-xs text-gray-500 font-mono border-y border-gray-850 py-3 mt-4">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4 text-gray-500" />
                Authored: {selectedArticle.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-gray-500" />
                {selectedArticle.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video rounded-sm overflow-hidden bg-[#050B15] border border-gray-800 max-h-[350px]">
            <img
              src={selectedArticle.imageUrl}
              alt={selectedArticle.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Article text body */}
          <div className="space-y-4 text-gray-300 text-xs sm:text-sm leading-relaxed font-sans pt-4">
            <p className="font-semibold text-white text-xs sm:text-sm">
              {selectedArticle.summary}
            </p>
            <p className="text-gray-400 font-sans">
              {selectedArticle.content}
            </p>
            <p className="text-gray-400 font-sans">
              As RIGAS BERKELEY LLC continues our global operations track record, our central engineering teams located at 6412 N. Washtenaw, Chicago, IL, consistently audit our machinery and welding yards to guarantee premium quality across every field shift.
            </p>
          </div>
        </div>
      ) : (
        /* ==================== LIST OF CORPORATE ANNOUNCEMENTS ==================== */
        <div className="space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-mono text-[#148062] uppercase tracking-widest bg-[#148062]/5 px-3 py-1 rounded-sm border border-[#148062]/10 font-bold">
              Press Core
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight uppercase italic">The Rigas Berkeley Ledger</h3>
            <p className="text-xs text-gray-400">
              Track our daily developments, welding milestones, active logistics routes, and strategic petroleum market insights.
            </p>
          </div>

          {/* List layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {newsArticlesData.map(article => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-[#0a0f1a] hover:bg-[#0d1424] border border-gray-800 hover:border-gray-700 rounded-sm overflow-hidden cursor-pointer transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="aspect-video bg-[#050B15] overflow-hidden relative">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-[#050B15]/90 text-[9px] font-mono text-[#148062] font-bold px-2.5 py-0.5 rounded-sm border border-gray-800/80 uppercase">
                    {article.category}
                  </span>
                </div>

                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[10px] text-gray-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gray-500" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gray-500" />
                        {article.readTime}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-[#148062] transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-3 font-sans">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-850 flex items-center justify-between text-[10px] font-mono uppercase font-bold text-gray-400 group-hover:text-white transition-colors">
                    <span>Read Article</span>
                    <ChevronRight className="w-4 h-4 text-[#148062]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
}
