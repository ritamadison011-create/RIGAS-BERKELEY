/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Compass, ChevronRight, Activity, Cpu, ShieldCheck, Flame, Layers } from 'lucide-react';
import { industriesData } from '../data';
import { Industry } from '../types';

export default function IndustriesView() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(industriesData[0]);

  return (
    <div className="font-sans text-gray-300 space-y-12 max-w-7xl mx-auto px-4">
      
      {/* Intro */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <span className="text-xs font-mono text-[#ff6a00] uppercase tracking-widest bg-[#ff6a00]/5 px-3 py-1 rounded-sm border border-[#ff6a00]/10 font-bold">
          Sectors We Serve
        </span>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight uppercase italic">Vast Interdisciplinary Support Cap</h3>
        <p className="text-xs text-gray-400">
          RIGAS BERKELEY LLC designs, welds, and leases equipment custom-engineered to handle the extreme loads, severe pressures, and harsh corrosion factors unique to each sector.
        </p>
      </div>

      {/* Two column interactive grid: Left list selector, Right details illustration */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left selector menu (Col 1 to 5) */}
        <div className="lg:col-span-5 space-y-2">
          <span className="text-[10px] font-mono text-gray-500 block uppercase px-2 pb-1 border-b border-gray-850">
            Industrial Sectors Matrix:
          </span>
          <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-2">
            {industriesData.map(ind => {
              const isSelected = selectedIndustry.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`w-full text-left p-4 rounded-sm border transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-[#0a0f1a] border-[#ff6a00] shadow-md'
                      : 'bg-transparent border-gray-850 hover:border-gray-750'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`p-2 rounded-sm border transition-colors shrink-0 ${
                      isSelected 
                        ? 'bg-[#ff6a00]/10 border-[#ff6a00]/30 text-[#ff6a00]' 
                        : 'bg-[#0a0f1a] border-gray-850 text-gray-400 group-hover:text-white'
                    }`}>
                      <Compass className="w-4 h-4" />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-wider truncate ${
                      isSelected ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                    }`}>
                      {ind.name}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-[#ff6a00] translate-x-0.5' : 'text-gray-600'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right graphic and content parameters (Col 6 to 12) */}
        <div className="lg:col-span-7 bg-[#0a0f1a] border border-gray-800 rounded-sm p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-start gap-4">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 text-[#ff6a00] animate-pulse" />
                Vetted engineering specs
              </span>
              <h4 className="text-xl font-serif font-bold text-white tracking-tight uppercase italic">
                {selectedIndustry.name} Operations
              </h4>
            </div>
            
            <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-sm uppercase font-bold">
              API APPROVED
            </span>
          </div>

          {/* Abstract Custom Vector Illustration of the Industry (SVG) */}
          <div className="aspect-video w-full rounded-sm overflow-hidden bg-[#050B15] border border-gray-850 relative p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start text-[9px] font-mono text-gray-500 z-10">
              <span>ILLUSTRATION DIAGRAM: {selectedIndustry.id.toUpperCase()}_FOCUS</span>
              <span>SCALE: N/A</span>
            </div>

            {/* Custom SVG Drawing depending on selected industry to act as graphic illustration */}
            <div className="flex-1 w-full flex items-center justify-center relative my-2">
              <svg viewBox="0 0 400 200" className="w-full max-w-sm h-auto opacity-70">
                <defs>
                  <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#020617" />
                  </linearGradient>
                </defs>
                <rect width="400" height="200" fill="url(#blueGlow)" rx="2" />
                {/* Structural abstract grid */}
                <path d="M 0,100 L 400,100 M 100,0 L 100,200 M 200,0 L 200,200 M 300,0 L 300,200" stroke="#0f172a" strokeWidth="1" strokeDasharray="3,3" />
                
                {/* Abstract Crane, Rig, Piping, refinery tower vector drawing */}
                {selectedIndustry.id.includes('oil') || selectedIndustry.id.includes('petro') || selectedIndustry.id.includes('chemical') ? (
                  /* Refinery towers & pipes drawing */
                  <g>
                    <rect x="80" y="40" width="30" height="130" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                    <line x1="95" y1="40" x2="95" y2="20" stroke="#ff6a00" strokeWidth="1.5" />
                    <circle cx="95" cy="20" r="3" fill="#ff6a00" />
                    <rect x="140" y="70" width="45" height="100" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                    {/* Intersecting pipe loops */}
                    <path d="M 95,90 L 160,90 L 160,110 L 250,110 L 250,170" fill="none" stroke="#ff6a00" strokeWidth="2.5" />
                    <circle cx="160" cy="90" r="4" fill="#ff6a00" />
                    <circle cx="250" cy="110" r="4" fill="#ff6a00" />
                    {/* Secondary vessel */}
                    <circle cx="280" cy="120" r="25" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                    <text x="280" y="123" textAnchor="middle" fill="#94a3b8" fontSize="6" fontFamily="monospace">API-650</text>
                  </g>
                ) : selectedIndustry.id.includes('energy') || selectedIndustry.id.includes('power') || selectedIndustry.id.includes('infra') ? (
                  /* Electrical grid / sub-station vectors */
                  <g>
                    {/* Tower truss lines */}
                    <path d="M 120,170 L 140,50 L 160,170 M 130,110 L 150,110 M 125,140 L 155,140" stroke="#334155" strokeWidth="1.5" fill="none" />
                    <line x1="140" y1="50" x2="140" y2="170" stroke="#334155" strokeWidth="1" />
                    {/* Power lines */}
                    <path d="M 140,50 Q 200,80 280,50" fill="none" stroke="#ff6a00" strokeWidth="1.5" strokeDasharray="4,4" />
                    <circle cx="140" cy="50" r="4" fill="#ff6a00" />
                    <circle cx="280" cy="50" r="4" fill="#ff6a00" />
                    {/* Substation */}
                    <rect x="250" y="110" width="60" height="60" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                    <text x="280" y="145" textAnchor="middle" fill="#94a3b8" fontSize="6" fontFamily="monospace">TRANSFORMER</text>
                  </g>
                ) : (
                  /* Heavy Crane or general manufacturing vectors */
                  <g>
                    {/* Crawler body */}
                    <rect x="80" y="140" width="70" height="20" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="2" />
                    <circle cx="95" cy="160" r="8" fill="#1e293b" />
                    <circle cx="115" cy="160" r="8" fill="#1e293b" />
                    <circle cx="135" cy="160" r="8" fill="#1e293b" />
                    {/* Crane boom */}
                    <line x1="115" y1="140" x2="250" y2="40" stroke="#ff6a00" strokeWidth="3" />
                    {/* Hook cable */}
                    <line x1="250" y1="40" x2="250" y2="120" stroke="#334155" strokeWidth="1.5" />
                    <rect x="235" y="120" width="30" height="25" rx="3" fill="#0f172a" stroke="#ff6a00" strokeWidth="1" />
                    <text x="250" y="135" textAnchor="middle" fill="white" fontSize="6" fontFamily="monospace">LOAD</text>
                  </g>
                )}
              </svg>
            </div>

            <div className="absolute bottom-4 right-4 bg-[#0a0f1a]/90 border border-gray-850 text-[10px] font-mono text-gray-400 px-2 py-0.5 rounded-sm">
              SECTOR ID: {selectedIndustry.id}
            </div>
          </div>

          {/* Description copy text */}
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
              {selectedIndustry.description}
            </p>

            <div className="space-y-2 border-t border-gray-850 pt-4">
              <span className="text-[10px] font-mono text-gray-500 block uppercase">Sector Focus Parameters:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedIndustry.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-400 font-sans">
                    <span className="w-1.5 h-1.5 rounded-sm bg-[#ff6a00] shrink-0 mt-2"></span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
