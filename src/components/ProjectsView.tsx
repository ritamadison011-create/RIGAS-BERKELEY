/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MapPin, Globe, Compass, Activity, Server, ZoomIn, Eye, Layers } from 'lucide-react';
import ProjectMap from './ProjectMap';
import { projectsData } from '../data';

export default function ProjectsView() {
  const [activeTab, setActiveTab] = useState<'map' | 'list'>('map');

  return (
    <div className="font-sans text-gray-300 space-y-12">
      
      {/* Introduction */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <span className="text-xs font-mono text-[#148062] uppercase tracking-widest bg-[#148062]/5 px-3 py-1 rounded-sm border border-[#148062]/10 font-bold">
          Operations Ledger
        </span>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight uppercase italic">Industrial Portfolio & Active Sites</h3>
        <p className="text-xs text-gray-400">
          RIGAS BERKELEY LLC deploys customized mechanical layouts, high-pressure tubing fabrication, and derrick rigs globally. Use our interactive map to audit active telemetry.
        </p>
      </div>

      {/* Sub navigation view toggler */}
      <div className="flex justify-center">
        <div className="bg-[#0a0f1a] border border-gray-800 p-1.5 rounded-sm flex gap-1">
          <button
            onClick={() => setActiveTab('map')}
            className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === 'map'
                ? 'bg-[#148062] text-white font-bold shadow-md shadow-teal-500/10'
                : 'bg-transparent text-gray-400 hover:text-white'
            }`}
          >
            Interactive Telemetry Map
          </button>
          <button
            onClick={() => setActiveTab('list')}
            className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === 'list'
                ? 'bg-[#148062] text-white font-bold shadow-md shadow-teal-500/10'
                : 'bg-transparent text-gray-400 hover:text-white'
            }`}
          >
            Structured Project List ({projectsData.length})
          </button>
        </div>
      </div>

      {/* Primary Display */}
      {activeTab === 'map' ? (
        <div className="max-w-7xl mx-auto px-4">
          <ProjectMap />
        </div>
      ) : (
        /* List grid portfolio style cards */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {projectsData.map(project => (
            <div
              key={project.id}
              className="bg-[#0a0f1a] hover:bg-[#0d1424] border border-gray-800 rounded-sm overflow-hidden flex flex-col justify-between group transition-all"
            >
              {/* Image box */}
              <div className="aspect-video bg-[#050B15] overflow-hidden relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 flex gap-1.5 z-10">
                  <span className={`px-2 py-0.5 rounded-sm text-[9px] font-mono font-bold uppercase ${
                    project.status === 'Completed'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                      : 'bg-amber-500/10 border border-amber-500/30 text-amber-400'
                  }`}>
                    {project.status}
                  </span>
                  <span className="bg-[#148062] text-white text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Descriptions & Stats */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-gray-500 text-[10px] font-mono">
                    <MapPin className="w-3.5 h-3.5 text-gray-500" />
                    <span>{project.location}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#148062] transition-colors uppercase tracking-wide">
                    {project.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3 font-sans">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-850 space-y-3">
                  <span className="text-[10px] font-mono text-gray-500 block uppercase">Operational stats:</span>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    {project.stats.slice(0, 4).map((st, idx) => (
                      <div key={idx} className="bg-[#050B15] border border-gray-850 p-2 rounded-sm flex flex-col justify-center">
                        <span className="text-[9px] text-gray-500 truncate uppercase">{st.label}</span>
                        <span className="text-xs font-mono font-bold text-white mt-0.5">{st.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono pt-2">
                    <span>Vetting: <strong className="text-emerald-400">{project.clientSatisfaction}</strong></span>
                    <span>{project.timeline}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}
