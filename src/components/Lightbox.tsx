/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Eye } from 'lucide-react';
import { GalleryItem } from '../types';
import { galleryData } from '../data';

export default function LightboxGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Oil Rigs', 'Heavy Equipment', 'Engineering Teams', 'Projects', 'Industrial Facilities'];

  const filteredItems = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === selectedCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    // Find index of this item in the filtered array
    const idx = filteredItems.findIndex(i => i.id === item.id);
    if (idx !== -1) {
      setActiveImageIndex(idx);
    }
  };

  const handleCloseLightbox = () => {
    setActiveImageIndex(null);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex(prev => {
      if (prev === null) return 0;
      return prev === 0 ? filteredItems.length - 1 : prev - 1;
    });
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex(prev => {
      if (prev === null) return 0;
      return prev === filteredItems.length - 1 ? 0 : prev + 1;
    });
  };

  const activeImage = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  return (
    <div className="space-y-8 font-sans">
      {/* Category controls */}
      <div className="flex flex-wrap gap-2 justify-center border-b border-zinc-800/80 pb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setActiveImageIndex(null);
            }}
            className={`px-4 py-2.5 rounded-none text-[10px] font-mono uppercase tracking-[0.15em] transition-all duration-200 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#148062] text-white font-bold'
                : 'bg-[#121214] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map(item => (
          <div
            key={item.id}
            onClick={() => handleOpenLightbox(item)}
            className="group bg-[#121214] border border-zinc-800 rounded-none overflow-hidden cursor-pointer hover:border-[#148062] transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image frame */}
            <div className="relative aspect-video sm:aspect-square overflow-hidden bg-[#0A0A0B]">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover grayscale opacity-75 group-hover:opacity-100 group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              
              {/* Overlay hover effect */}
              <div className="absolute inset-0 bg-[#0A0A0B]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-[#148062] text-white p-3 rounded-none shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              {/* Tag category overlay */}
              <span className="absolute bottom-3 left-3 bg-[#0A0A0B]/95 border border-zinc-800 text-[8px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-none text-zinc-400">
                {item.category.toUpperCase()}
              </span>
            </div>

            {/* Descriptor details */}
            <div className="p-5 space-y-2 bg-[#0D0D0E] border-t border-zinc-800/60 flex-1 flex flex-col justify-between">
              <h4 className="text-xs font-bold text-white tracking-wide group-hover:text-[#148062] transition-colors line-clamp-1 uppercase font-sans">
                {item.title}
              </h4>
              <p className="text-[11px] text-zinc-400 leading-normal line-clamp-2 font-normal">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox full-screen overlay */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-[#0A0A0B]/95 backdrop-blur-md lightbox-overlay animate-fade-in"
          onClick={handleCloseLightbox}
        >
          {/* Close button on top right */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2.5 hover:bg-zinc-800 rounded-none transition-colors z-50 border border-zinc-800 bg-[#121214] cursor-pointer"
            title="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation layout */}
          <div className="relative w-full max-w-4xl h-[70vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
            
            {/* Prev Trigger */}
            <button
              onClick={handlePrev}
              className="absolute left-0 md:-left-18 text-zinc-400 hover:text-white p-3.5 bg-[#121214] hover:bg-[#148062] hover:text-white rounded-none border border-zinc-800 transition-all duration-200 z-10 shrink-0 cursor-pointer"
              title="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Active Image Box */}
            <div className="relative max-h-full max-w-full rounded-none overflow-hidden border border-zinc-800 bg-[#0A0A0B] shadow-2xl flex items-center justify-center">
              <img
                src={activeImage.imageUrl}
                alt={activeImage.title}
                className="max-h-[65vh] max-w-full object-contain animate-scale-in"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 left-4 bg-[#148062] text-white text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-none uppercase flex items-center gap-1.5 shadow">
                <ZoomIn className="w-3 h-3" />
                OPERATIONAL PHOTO PREVIEW // RIGAS BERKELEY
              </span>
            </div>

            {/* Next Trigger */}
            <button
              onClick={handleNext}
              className="absolute right-0 md:-right-18 text-zinc-400 hover:text-white p-3.5 bg-[#121214] hover:bg-[#148062] hover:text-white rounded-none border border-zinc-800 transition-all duration-200 z-10 shrink-0 cursor-pointer"
              title="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Text summary indicators beneath */}
          <div
            className="text-center mt-6 max-w-xl space-y-2 bg-[#121214] border border-zinc-800 rounded-none p-5 animate-slide-up z-10"
            onClick={e => e.stopPropagation()}
          >
            <span className="text-[9px] font-mono text-[#148062] font-bold uppercase tracking-widest">
              CATEGORY: {activeImage.category.toUpperCase()} • IMAGE {activeImageIndex !== null ? activeImageIndex + 1 : 0} OF {filteredItems.length}
            </span>
            <h4 className="text-sm font-bold text-white tracking-tight uppercase font-sans">{activeImage.title}</h4>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-md mx-auto">{activeImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
