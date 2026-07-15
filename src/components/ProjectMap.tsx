/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MapPin, Globe, Compass, Activity, Server, ZoomIn, ZoomOut } from 'lucide-react';
import { Project } from '../types';
import { projectsData, companyDetails } from '../data';

// Custom coordinate mapping: Map lat [-90, 90] and lng [-180, 180] to SVG coords [0, 800] x [0, 450]
function mapCoordinates(lat: number, lng: number, width: number, height: number) {
  // Simple Mercator-like projection scale
  const x = ((lng + 180) / 360) * width;
  // Latitude goes from 90 at top to -90 at bottom
  const y = ((90 - lat) / 180) * height;
  return { x, y };
}

export default function ProjectMap() {
  const [selectedProject, setSelectedProject] = useState<Project>(projectsData[0]);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const width = 800;
  const height = 400;

  const hqCoords = mapCoordinates(41.8, -87.6, width, height); // Chicago HQ

  const filteredProjects = filterCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filterCategory);

  const categories = ['All', 'Offshore', 'Onshore', 'Infrastructure', 'Engineering', 'Fabrication'];

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6 font-sans overflow-hidden">
      {/* Header telemetry info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-4">
        <div className="space-y-1">
          <span className="text-[10px] font-mono tracking-widest text-[#ff6a00] font-bold uppercase flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#ff6a00] animate-pulse" />
            Global telemetry network
          </span>
          <h3 className="text-xl font-bold text-white tracking-tight">Active Operation Sites & Projects</h3>
          <p className="text-xs text-slate-400">
            Real-time mechanical updates and safe-hour counters across RIGAS BERKELEY LLC project sites.
          </p>
        </div>

        {/* Filter categories tabs */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all duration-200 ${
                filterCategory === cat
                  ? 'bg-[#ff6a00] text-white font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Map Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* SVG Interactive Map Frame (Col 1 to 8) */}
        <div className="lg:col-span-8 bg-[#040811] border border-slate-900 rounded-xl relative p-3 overflow-hidden flex flex-col justify-between group min-h-[350px]">
          {/* Map utilities top rail */}
          <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 z-10">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>GRID MERCATOR SAT: ON</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2))}
                className="hover:text-[#ff6a00] p-1 bg-slate-900 border border-slate-800 rounded"
                title="Zoom In"
              >
                <ZoomIn className="w-3 h-3" />
              </button>
              <button 
                onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 1))}
                className="hover:text-[#ff6a00] p-1 bg-slate-900 border border-slate-800 rounded"
                title="Zoom Out"
              >
                <ZoomOut className="w-3 h-3" />
              </button>
              <span className="bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded">
                SCALE: {Math.round(zoomLevel * 100)}%
              </span>
            </div>
          </div>

          {/* SVG Map Canvas */}
          <div className="flex-1 w-full flex items-center justify-center relative overflow-hidden my-2">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full h-auto transition-transform duration-300"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              {/* Grid Lines */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0f172a" strokeWidth="0.5" />
                </pattern>
                {/* Glow Filter */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Grid Background */}
              <rect width={width} height={height} fill="url(#grid)" />

              {/* World Map Continent Outlines (Minimal geometric proxy for aesthetic look) */}
              {/* North America */}
              <path d="M 50,50 L 120,40 L 220,60 L 260,110 L 220,180 L 180,180 L 170,220 L 150,220 L 140,240 L 110,210 L 110,170 L 60,140 Z" fill="#091325" stroke="#1e293b" strokeWidth="1" />
              {/* South America */}
              <path d="M 180,230 L 240,260 L 260,320 L 230,390 L 190,380 L 170,290 Z" fill="#091325" stroke="#1e293b" strokeWidth="1" />
              {/* Eurasia / Africa */}
              <path d="M 330,40 L 450,40 L 620,50 L 720,100 L 710,180 L 580,210 L 480,180 L 410,110 L 320,100 Z" fill="#091325" stroke="#1e293b" strokeWidth="1" />
              {/* Africa */}
              <path d="M 360,160 L 430,160 L 480,210 L 490,260 L 420,340 L 380,280 L 350,200 Z" fill="#091325" stroke="#1e293b" strokeWidth="1" />
              {/* Australia */}
              <path d="M 640,280 L 710,290 L 700,340 L 630,330 Z" fill="#091325" stroke="#1e293b" strokeWidth="1" />

              {/* Connection Vectors from HQ in Chicago to project sites */}
              {filteredProjects.map((p) => {
                const projectCoords = mapCoordinates(p.coordinates.lat, p.coordinates.lng, width, height);
                const isSelected = selectedProject.id === p.id;
                return (
                  <g key={`link-${p.id}`}>
                    <path
                      d={`M ${hqCoords.x},${hqCoords.y} Q ${(hqCoords.x + projectCoords.x)/2},${Math.min(hqCoords.y, projectCoords.y) - 30} ${projectCoords.x},${projectCoords.y}`}
                      fill="none"
                      stroke={isSelected ? '#ff6a00' : '#1e293b'}
                      strokeWidth={isSelected ? '1.5' : '0.75'}
                      strokeDasharray={isSelected ? '5,5' : 'none'}
                      className="transition-all duration-300"
                    />
                  </g>
                );
              })}

              {/* RIGAS BERKELEY Chicago HQ Node */}
              <g transform={`translate(${hqCoords.x}, ${hqCoords.y})`}>
                <circle r="8" fill="rgba(255,106,0,0.2)" />
                <circle r="4" fill="#ff6a00" filter="url(#glow)" />
                <rect x="-35" y="-22" width="70" height="14" rx="3" fill="#020617" stroke="#ff6a00" strokeWidth="0.5" />
                <text x="0" y="-12" textAnchor="middle" fill="#white" fontSize="7" fontFamily="monospace" fontWeight="bold">CHICAGOHQ</text>
              </g>

              {/* Project Site Nodes */}
              {filteredProjects.map((p) => {
                const pt = mapCoordinates(p.coordinates.lat, p.coordinates.lng, width, height);
                const isSelected = selectedProject.id === p.id;

                return (
                  <g
                    key={p.id}
                    transform={`translate(${pt.x}, ${pt.y})`}
                    onClick={() => setSelectedProject(p)}
                    className="cursor-pointer group/node"
                  >
                    {/* Glowing active sonar effect */}
                    <circle
                      r={isSelected ? '14' : '8'}
                      className={`transition-all duration-500 fill-none ${
                        p.status === 'Active' || p.status === 'In Progress' 
                          ? 'stroke-orange-500/30 animate-pulse-slow' 
                          : 'stroke-emerald-500/30'
                      }`}
                      strokeWidth="2"
                    />
                    <circle
                      r={isSelected ? '6' : '4'}
                      className={`transition-all duration-300 ${
                        isSelected 
                          ? 'fill-[#ff6a00]' 
                          : p.status === 'Active' || p.status === 'In Progress' 
                            ? 'fill-orange-400 group-hover/node:fill-[#ff6a00]' 
                            : 'fill-emerald-400'
                      }`}
                      filter="url(#glow)"
                    />
                    
                    {/* Pin Label tooltip on hover */}
                    <rect
                      x="-45"
                      y="10"
                      width="90"
                      height="16"
                      rx="3"
                      fill="#090d16"
                      stroke={isSelected ? '#ff6a00' : '#1e293b'}
                      strokeWidth="0.75"
                      className="opacity-80 group-hover/node:opacity-100 transition-opacity"
                    />
                    <text
                      x="0"
                      y="21"
                      textAnchor="middle"
                      fill={isSelected ? '#white' : '#94a3b8'}
                      fontSize="7"
                      fontFamily="sans-serif"
                      fontWeight={isSelected ? 'bold' : 'normal'}
                    >
                      {p.title.split(' ')[1] || p.title}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Legend and stats indicators footer */}
          <div className="flex flex-wrap justify-between items-center pt-2 border-t border-slate-900 text-[10px] text-slate-400 gap-4">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff6a00]" />
                HQ / Yards
              </span>
              <span className="flex items-center gap-1.5 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                Active Exploration
              </span>
              <span className="flex items-center gap-1.5 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                Completed Target
              </span>
            </div>
            <div className="text-slate-500 font-mono text-[9px]">
              LAT: {selectedProject.coordinates.lat.toFixed(4)}° | LNG: {selectedProject.coordinates.lng.toFixed(4)}°
            </div>
          </div>
        </div>

        {/* Selected Project Telemetry Drawer Panel (Col 9 to 12) */}
        <div className="lg:col-span-4 bg-slate-900/50 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="px-2 py-0.5 bg-slate-800 rounded border border-slate-700 text-[9px] font-mono text-[#ff6a00] font-bold uppercase">
                  {selectedProject.category} Asset
                </span>
                <h4 className="text-base font-bold text-white mt-1.5 tracking-tight">{selectedProject.title}</h4>
              </div>
              <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold ${
                selectedProject.status === 'Completed' 
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                  : 'bg-orange-500/10 border border-orange-500/30 text-orange-400'
              }`}>
                {selectedProject.status}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed min-h-[90px]">
              {selectedProject.description}
            </p>

            <div className="space-y-2 border-t border-slate-800/60 pt-3 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Global Coordinate Location:</span>
                <span className="text-slate-300 font-medium">{selectedProject.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Operational Timeline:</span>
                <span className="text-slate-300 font-medium">{selectedProject.timeline}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Quality Vetting (CSAT):</span>
                <span className="text-emerald-400 font-bold">{selectedProject.clientSatisfaction}</span>
              </div>
            </div>
          </div>

          {/* Project Statistics Metrics Grid */}
          <div className="bg-slate-950 border border-slate-850 rounded-xl p-3 space-y-2">
            <span className="text-[9px] font-mono text-slate-500 block uppercase">Rig-site Metric Telemetry:</span>
            <div className="grid grid-cols-2 gap-2">
              {selectedProject.stats.map((st, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800/40 rounded-lg p-2 flex flex-col justify-center">
                  <span className="text-[10px] text-slate-500 truncate">{st.label}</span>
                  <span className="text-xs font-mono font-bold text-white mt-0.5">{st.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
