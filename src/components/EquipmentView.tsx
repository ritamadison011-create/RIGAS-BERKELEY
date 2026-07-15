/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronRight, ArrowLeft, Settings, ShieldAlert, Cpu, Eye, CheckCircle, Info } from 'lucide-react';
import { equipmentData } from '../data';
import { Equipment } from '../types';

export default function EquipmentView() {
  const [selectedEquip, setSelectedEquip] = useState<Equipment | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  const categories = ['All', 'Drilling Rigs', 'Cranes', 'Generator & Compressors', 'Pumps & Tanks', 'Control & Support'];

  const getFilteredEquipment = () => {
    if (activeCategoryFilter === 'All') return equipmentData;
    if (activeCategoryFilter === 'Generator & Compressors') {
      return equipmentData.filter(e => e.category === 'Generators' || e.category === 'Compressors');
    }
    if (activeCategoryFilter === 'Pumps & Tanks') {
      return equipmentData.filter(e => e.category === 'Pumps' || e.category === 'Storage Tanks');
    }
    if (activeCategoryFilter === 'Control & Support') {
      return equipmentData.filter(e => e.category === 'Control Systems' || e.category === 'Hydraulic Equipment' || e.category === 'Heavy Trucks' || e.category === 'Support Vehicles' || e.category === 'Pipe Handling Equipment');
    }
    return equipmentData.filter(e => e.category === activeCategoryFilter);
  };

  const filteredItems = getFilteredEquipment();

  return (
    <div className="font-sans text-gray-300 space-y-12">
      {selectedEquip ? (
        /* ==================== DETAILED TECHNICAL SPECIFICATION SHEET ==================== */
        <div className="max-w-4xl mx-auto bg-[#0a0f1a] border border-gray-800 rounded-sm p-6 sm:p-8 space-y-8 animate-fade-in">
          
          {/* Back button */}
          <button
            onClick={() => setSelectedEquip(null)}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white font-semibold uppercase tracking-wider bg-transparent border border-gray-800 px-3.5 py-2 rounded-sm transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Equipment Fleet
          </button>

          {/* Heading Banner */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-gray-800 pb-8">
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-[#050B15]/90 border border-gray-800 text-[10px] font-mono text-[#148062] font-bold uppercase rounded-sm">
                  Vetted Category: {selectedEquip.category}
                </span>
                <span className="text-[10px] font-mono text-gray-500">API Standard Compliant</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight uppercase italic">
                {selectedEquip.name}
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xl font-sans">
                Technical evaluation, physical dimensions, and application guidelines for RIGAS BERKELEY LLC rental and operations.
              </p>
            </div>
            
            <div className="md:col-span-4 aspect-video sm:aspect-square rounded-sm overflow-hidden bg-[#050B15] border border-gray-800">
              <img
                src={selectedEquip.imageUrl}
                alt={selectedEquip.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Grid Technical Parameters */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Specs Table List */}
            <div className="md:col-span-7 space-y-4">
              <h4 className="text-xs font-bold text-white tracking-widest uppercase font-mono border-b border-gray-800 pb-1">
                Rigid Fleet Specifications Log
              </h4>
              <div className="bg-[#050B15] border border-gray-850 rounded-sm overflow-hidden">
                <table className="w-full text-xs text-left">
                  <tbody>
                    {Object.entries(selectedEquip.specifications).map(([key, value], idx) => (
                      <tr key={idx} className="border-b border-gray-850 last:border-b-0 hover:bg-[#0a0f1a] transition-colors">
                        <td className="px-4 py-3 font-medium text-gray-400 font-mono uppercase bg-[#0a0f1a]/50">{key}</td>
                        <td className="px-4 py-3 text-white font-mono">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Operational compliance disclaimer */}
              <div className="bg-[#050B15] border border-gray-850 rounded-sm p-4 flex gap-3 text-[11px] leading-relaxed text-gray-400">
                <ShieldAlert className="w-5 h-5 text-[#148062] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-medium">Compliance certification:</strong> This asset is verified strictly with ASME, OSHA, and API guidelines. Full digital maintenance checklists are accessible upon corporate dispatch request.
                </div>
              </div>
            </div>

            {/* Applications & Features Columns */}
            <div className="md:col-span-5 space-y-6">
              
              <div className="space-y-3">
                <h5 className="text-xs font-bold text-white tracking-wide uppercase font-mono">
                  Integrated Assets:
                </h5>
                <ul className="space-y-2">
                  {selectedEquip.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-4 h-4 text-[#148062] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 border-t border-gray-800 pt-4">
                <h5 className="text-xs font-bold text-white tracking-wide uppercase font-mono">
                  Field Applications:
                </h5>
                <ul className="space-y-2">
                  {selectedEquip.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-400 font-sans">
                      <span className="w-1.5 h-1.5 rounded-sm bg-gray-500 mt-2 shrink-0"></span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>
      ) : (
        /* ==================== MAIN COMPACT EQUIPMENT CARDS LIST ==================== */
        <div className="space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-mono text-[#148062] uppercase tracking-widest bg-[#148062]/5 px-3 py-1 rounded-sm border border-[#148062]/10 font-bold">
              Operational Fleet
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight uppercase italic">Our Heavy Industrial Equipment</h3>
            <p className="text-xs text-gray-400">
              RIGAS BERKELEY LLC owns a pristine fleet of modern construction and oilfield utility machinery. Available for lease or deployed directly with certified operators.
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

          {/* Grid layout of 12 machinery listings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
            {filteredItems.map(equip => (
              <div
                key={equip.id}
                onClick={() => setSelectedEquip(equip)}
                className="bg-[#0a0f1a] hover:bg-[#0d1424] border border-gray-800 hover:border-gray-700 rounded-sm overflow-hidden cursor-pointer transition-all duration-200 flex flex-col justify-between group h-full"
              >
                <div className="aspect-video bg-[#050B15] overflow-hidden relative">
                  <img
                    src={equip.imageUrl}
                    alt={equip.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 left-3 bg-[#050B15]/80 backdrop-blur-sm border border-gray-800/80 px-2 py-0.5 rounded-sm text-[9px] font-mono font-bold text-gray-300 uppercase">
                    {equip.category}
                  </span>
                </div>

                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-[#148062] transition-colors line-clamp-1">
                      {equip.name}
                    </h4>
                    
                    {/* Compact list preview specs */}
                    <div className="space-y-1 text-[10px] font-mono text-gray-500 pt-2 border-t border-gray-850/60">
                      {Object.entries(equip.specifications).slice(0, 2).map(([key, value], idx) => (
                        <div key={idx} className="flex justify-between">
                          <span className="truncate max-w-[120px]">{key}:</span>
                          <span className="text-gray-400 font-medium truncate max-w-[150px]">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-850 flex items-center justify-between text-[10px] font-mono uppercase font-bold text-gray-400 group-hover:text-white transition-colors">
                    <span>Technical Spec Sheet</span>
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
