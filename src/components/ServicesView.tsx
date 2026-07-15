/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import {
  Wrench,
  Hammer,
  HardHat,
  ChevronRight,
  ShieldAlert,
  ArrowLeft,
  Settings,
  Flame,
  Truck,
  Layers,
  LineChart,
  HelpCircle
} from 'lucide-react';
import { servicesData } from '../data';
import { Service } from '../types';

interface ServicesViewProps {
  onOpenQuote: (serviceId?: string) => void;
}

export default function ServicesView({ onOpenQuote }: ServicesViewProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  const categories = ['All', 'Drilling & Construction', 'Engineering & Fabrication', 'Logistics & Equipment'];

  const filteredServices = activeCategoryFilter === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategoryFilter);

  // Return helper icon based on category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Drilling & Construction':
        return <HardHat className="w-5 h-5 text-[#148062]" />;
      case 'Engineering & Fabrication':
        return <Wrench className="w-5 h-5 text-[#148062]" />;
      case 'Logistics & Equipment':
        return <Truck className="w-5 h-5 text-[#148062]" />;
      default:
        return <Settings className="w-5 h-5 text-[#148062]" />;
    }
  };

  return (
    <div className="font-sans text-gray-300 space-y-12">
      {selectedService ? (
        /* ==================== DETAILED SERVICE SPECIFICATION VIEW ==================== */
        <div className="max-w-4xl mx-auto bg-[#0a0f1a] border border-gray-800 rounded-sm p-6 sm:p-8 space-y-8 animate-fade-in">
          
          {/* Back button */}
          <button
            onClick={() => setSelectedService(null)}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white font-semibold uppercase tracking-wider bg-transparent border border-gray-800 px-3.5 py-2 rounded-sm transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services Directory
          </button>

          {/* Heading Banner */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-gray-800 pb-8">
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-[#050B15]/90 border border-gray-800 text-[10px] font-mono text-[#148062] font-bold uppercase rounded-sm">
                  {selectedService.category} Focus
                </span>
                <span className="text-[10px] font-mono text-gray-500">API Standard Compliant</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight uppercase italic">
                {selectedService.title} Detailed Specifications
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xl font-sans">
                {selectedService.shortDescription}
              </p>
            </div>
            
            <div className="md:col-span-4 aspect-video sm:aspect-square rounded-sm overflow-hidden bg-[#050B15] border border-gray-800">
              <img
                src={selectedService.imageUrl}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Core Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Detailed Explanation */}
            <div className="md:col-span-7 space-y-4">
              <h4 className="text-xs font-bold text-white tracking-widest uppercase font-mono border-b border-gray-800 pb-1">
                Operational Overview & Execution
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                {selectedService.detailedDescription}
              </p>

              {/* Technical Help Box */}
              <div className="bg-[#050B15] border border-gray-800 rounded-sm p-4 flex gap-3 text-[11px] leading-relaxed text-gray-400">
                <ShieldAlert className="w-5 h-5 text-[#148062] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-medium">Safe work-hour assurance:</strong> All operations under this vertical are supported by Rigas Berkeley's central safety coordinators, utilizing rigorous JSA audits prior to shift start.
                </div>
              </div>
            </div>

            {/* Features lists & parameters */}
            <div className="md:col-span-5 bg-[#0a0f1a] border border-gray-800 rounded-sm p-5 space-y-5">
              <h5 className="text-xs font-bold text-white tracking-wide uppercase font-mono">
                Key Technical Parameters:
              </h5>
              <ul className="space-y-3">
                {selectedService.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                    <ChevronRight className="w-4 h-4 text-[#148062] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-800 space-y-3">
                <button
                  onClick={() => onOpenQuote(selectedService.id)}
                  className="w-full bg-[#148062] hover:bg-[#10674E] text-white text-xs font-bold py-3 rounded-lg transition-all shadow-[0_0_15px_rgba(20,128,98,0.3)] uppercase font-mono tracking-widest cursor-pointer"
                >
                  Request Quote for {selectedService.title.split(' ')[0]}
                </button>
                <div className="text-center text-[10px] text-gray-500 font-mono">
                  Estimated quote turnaround: Under 24 hours
                </div>
              </div>
            </div>

          </div>

        </div>
      ) : (
        /* ==================== MAIN COMPACT SERVICES DIRECTORY VIEW ==================== */
        <div className="space-y-10">
          
          {/* Header instructions */}
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-mono text-[#148062] uppercase tracking-widest bg-[#148062]/5 px-3 py-1 rounded-sm border border-[#148062]/10 font-bold">
              Engineering Catalog
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight uppercase italic">Our 15 Core Rig & Pipeline Services</h3>
            <p className="text-xs text-gray-400">
              RIGAS BERKELEY LLC provides fully vetted technical personnel, welding fabrications, and equipment rentals. Select any card below to view detailed specifications.
            </p>
          </div>

          {/* Tab Filter buttons */}
          <div className="flex flex-wrap gap-1.5 justify-center border-b border-gray-800 pb-5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-sm text-[10px] font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategoryFilter === cat
                    ? 'bg-[#148062] text-white font-bold'
                    : 'bg-[#0a0f1a] border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout of all 15 services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
            {filteredServices.map(service => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="bg-[#0a0f1a] hover:bg-[#0d1424] border border-gray-800 hover:border-gray-700 rounded-sm overflow-hidden cursor-pointer transition-all duration-200 flex flex-col justify-between group h-full"
              >
                <div className="aspect-video bg-[#050B15] overflow-hidden relative">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#050B15]/90 text-[9px] font-mono text-[#148062] font-bold px-2.5 py-1 rounded-sm border border-gray-800 uppercase">
                    {service.category}
                  </span>
                </div>

                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-[#050B15] border border-gray-800 rounded-sm text-gray-400">
                        {getCategoryIcon(service.category)}
                      </div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider line-clamp-1 group-hover:text-[#148062] transition-colors">
                        {service.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-850 flex items-center justify-between text-[11px] font-mono uppercase font-bold text-gray-400 group-hover:text-white transition-colors">
                    <span>View Specifications</span>
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
