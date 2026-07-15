/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import {
  ShieldAlert,
  Wrench,
  Compass,
  TrendingUp,
  Activity,
  HardHat,
  ChevronRight,
  MapPin,
  Calendar,
  Star,
  Cpu,
  Clock,
  Phone,
  ArrowUpRight
} from 'lucide-react';
import { servicesData, projectsData, industriesData, equipmentData, newsArticlesData, testimonialsData, companyDetails } from '../data';
// @ts-ignore
import heroRigImg from '../assets/images/hero_drilling_rig_1784077952777.jpg';
// @ts-ignore
import blueprintReviewImg from '../assets/images/hero_blueprint_review_1784079105477.jpg';

interface HomeViewProps {
  onNavigate: (page: string) => void;
  onOpenQuote: (serviceId?: string) => void;
}

export default function HomeView({ onNavigate, onOpenQuote }: HomeViewProps) {
  // Counters state simulation
  const [safeHours, setSafeHours] = useState(1002340);
  const [rigsDeployed, setRigsDeployed] = useState(14);
  const [globalSites, setGlobalSites] = useState(6);

  useEffect(() => {
    const interval = setInterval(() => {
      setSafeHours(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-24 font-sans text-zinc-400">
      
      {/* 1. Hero / Introduction section - VELOCITY STUDIO CLONE LAYOUT */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden border-b border-zinc-800/80 bg-black">
        {/* Rig background picture */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroRigImg}
            alt="Drilling Rig Background"
            className="w-full h-full object-cover opacity-25 object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent"></div>
        </div>
        {/* Subtle grid accent background */}
        <div className="absolute inset-0 z-10 opacity-15 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 lg:py-24">
          
          {/* Left Column (Text & Controls matching the screenshot layout) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <h2 className="text-4.5xl md:text-5.5xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.02] font-sans">
              Your design & <br className="hidden sm:inline" />
              A&E team for <br />
              <span className="text-[#E0A32E]">lightning-fast</span> <br />
              deployments.
            </h2>
            
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
              Better, faster, safer heavy engineering - built to shave months off energy developers' timelines and accelerate capital and operational velocity.
            </p>

            {/* Pill Container Tag matches screenshot ⚡ ARCHITECTURE... */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#148062]/15 border border-[#148062]/40 px-5 py-2 rounded-full text-[10px] md:text-xs font-bold text-[#10B981] uppercase tracking-[0.12em]">
                <span>⚡ MECHANICAL · STRUCTURAL · CIVIL · PIPING</span>
              </div>
            </div>

            {/* Big green button matching "Get your scope & fee" in screenshot */}
            <div className="space-y-3">
              <div className="pt-2">
                <button
                  onClick={() => onOpenQuote()}
                  className="px-8 py-4 bg-[#148062] hover:bg-[#10674E] text-white font-sans font-bold text-sm md:text-base rounded-lg tracking-wide transition-all duration-200 flex items-center gap-2.5 cursor-pointer shadow-lg shadow-teal-900/20"
                >
                  <span>Get your scope & fee</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[10px] md:text-[11px] text-zinc-500 font-sans tracking-wide">
                We respond within one business day · No commitment required
              </p>
            </div>
          </div>

          {/* Right Column (Hero card with gold PRICE overlay matching screenshot) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-[#0A0A0B] border border-zinc-800 shadow-2xl group">
              <img
                src={blueprintReviewImg}
                alt="Rigas Berkeley Engineering Review"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle top indicator tag */}
              <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-md border border-zinc-800 text-[9px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                ACTIVE PIPING SCHEMATICS // BASIN.04
              </span>

              {/* Bottom right text overlay to match "PRICE a permit" in screenshot */}
              <div className="absolute bottom-6 right-6 text-right font-sans bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/5 shadow-2xl">
                <span className="block text-4xl sm:text-[2.75rem] font-black text-[#E0A32E] tracking-tighter leading-none uppercase select-none">
                  PRICE
                </span>
                <span className="block text-xs font-bold text-white tracking-widest leading-none uppercase mt-1">
                  your project scope
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Counters & Statistics Tracker (Stark Grid Section) */}
      <section className="bg-[#0D0D0E] border-y border-zinc-800/80 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80 text-center">
          <div className="space-y-1.5 py-6 md:py-0 md:px-8 text-left">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] block">[01] ACCUMULATED SAFE HOURS</span>
            <div className="text-3xl font-mono font-bold text-white tracking-wider">
              {safeHours.toLocaleString()} HR
            </div>
            <span className="text-[9px] text-[#E0A32E] font-mono font-bold uppercase tracking-[0.15em]">// 100% LTI FREE OPERATION</span>
          </div>
          <div className="space-y-1.5 py-6 md:py-0 md:px-8 text-left">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] block">[02] DEPLOYED ASSET LOCATIONS</span>
            <div className="text-3xl font-mono font-bold text-white tracking-wider">
              {rigsDeployed} SITES ACTIVE
            </div>
            <span className="text-[9px] text-zinc-500 font-mono font-bold uppercase tracking-[0.15em]">// DEEPWATER & ONSHORE BASINS</span>
          </div>
          <div className="space-y-1.5 py-6 md:py-0 md:px-8 text-left">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] block">[03] CENTRAL BASIN HUBS</span>
            <div className="text-3xl font-mono font-bold text-white tracking-wider">
              {globalSites} MAJOR SECTORS
            </div>
            <span className="text-[9px] text-zinc-500 font-mono font-bold uppercase tracking-[0.15em]">// HEADQUARTERS CHICAGOLAND YARDS</span>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us (Velocity Minimalist Feature Grid) */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-left space-y-3 max-w-2xl">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#148062] font-bold uppercase">
            // OPERATIONAL EXCELLENCE
          </span>
          <h3 className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tight uppercase">WHY PREMIER ENERGY CONSTRUCTORS PARTNER WITH US</h3>
          <p className="text-xs text-zinc-500 leading-relaxed max-w-xl">
            RIGAS BERKELEY LLC implements high-precision, blueprint-perfect standards across physical pipeline routes, drilling fields, and complex structural assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-800 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          <div className="bg-[#0D0D0E] p-8 space-y-4 hover:bg-[#121214] transition-colors">
            <span className="text-xs font-mono text-zinc-600 block tracking-wider">[01 // SAFETY]</span>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">RIGOROUS SAFETY VETTING</h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
              Operating under a zero-harm blueprint, our staff is certified in BOSIET, TWIC, and dynamic rigging techniques. We enforce proactive stop-work authority on-site.
            </p>
          </div>

          <div className="bg-[#0D0D0E] p-8 space-y-4 hover:bg-[#121214] transition-colors">
            <span className="text-xs font-mono text-zinc-600 block tracking-wider">[02 // ASSETS]</span>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">HEAVY ENGINEERING FLEET</h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
              We operate top-tier, certified heavy assets including lattice crawler cranes, sound-damped power skids, high-pressure rotary compressors, and multi-axis winch trucks.
            </p>
          </div>

          <div className="bg-[#0D0D0E] p-8 space-y-4 hover:bg-[#121214] transition-colors">
            <span className="text-xs font-mono text-zinc-600 block tracking-wider">[03 // PRECISION]</span>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">TURNAROUND ALIGNMENT</h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
              Utilizing Primavera P6 path optimization and detailed structural analysis, we keep facility shutdown turnarounds perfectly scheduled to resume production ahead of target.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Services Overview (Velocity Block Row) */}
      <section className="bg-[#0D0D0E] py-20 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-zinc-800/60 pb-8">
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#148062] font-bold uppercase">
                // COMPETENCE INDEX
              </span>
              <h3 className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tight uppercase">CERTIFIED SERVICE ARCHITECTURE</h3>
              <p className="text-xs text-zinc-500 max-w-md leading-relaxed">
                Deploying certified operators for high-pressure line fabrication, derrick rigs, heavy crawler lifts, and site management.
              </p>
            </div>
            <button
              onClick={() => onNavigate('Services')}
              className="text-xs font-mono text-[#148062] hover:text-white font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>VIEW CAPABILITY INDEX (15)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesData.slice(0, 3).map((service, sIdx) => (
              <div
                key={service.id}
                className="bg-[#121214] border border-zinc-800 rounded-none overflow-hidden flex flex-col justify-between group transition-all duration-200 hover:border-zinc-700"
              >
                <div className="aspect-video bg-[#0A0A0B] overflow-hidden relative border-b border-zinc-800">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#0A0A0B]/95 text-[9px] font-mono text-zinc-400 font-bold px-2.5 py-1 rounded-none border border-zinc-800 uppercase tracking-wider">
                    COMP.0{sIdx + 1} // {service.category.toUpperCase()}
                  </span>
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-white tracking-wide uppercase font-sans">{service.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onNavigate('Services');
                      window.scrollTo(0,0);
                    }}
                    className="text-[10px] font-mono text-zinc-400 hover:text-[#148062] font-bold uppercase flex items-center gap-1.5 transition-colors pt-4 border-t border-zinc-800/80 cursor-pointer text-left"
                  >
                    <span>TECHNICAL SPECIFICATIONS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industries We Serve (Minimalist Bento Row) */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-left space-y-3 max-w-xl">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#148062] font-bold uppercase">
            // SECTOR DIRECTORY
          </span>
          <h3 className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tight uppercase">INDUSTRIES WE STRENGTHEN</h3>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Delivering absolute precision on-site from deepwater blocks to heavy refinery infrastructures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border border-zinc-800 divide-y sm:divide-y-0 lg:divide-x divide-zinc-800">
          {industriesData.slice(0, 5).map((ind, iIdx) => (
            <div
              key={ind.id}
              onClick={() => onNavigate('Industries')}
              className="bg-[#0D0D0E] p-6 space-y-4 hover:bg-[#121214] transition-colors cursor-pointer group flex flex-col justify-between border-b sm:border-b-0 border-zinc-800"
            >
              <div className="space-y-3">
                <span className="text-[9px] font-mono text-zinc-600 block">[SEC.0{iIdx + 1}]</span>
                <h4 className="text-xs font-bold text-white group-hover:text-[#148062] transition-colors uppercase tracking-wider font-sans">
                  {ind.name}
                </h4>
                <p className="text-[11px] text-zinc-500 leading-normal line-clamp-2">
                  {ind.description}
                </p>
              </div>
              <span className="text-[9px] font-mono text-[#148062] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider self-start mt-4">// EXPAND SCHEMA →</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Featured Projects preview */}
      <section className="bg-[#0D0D0E] py-20 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-zinc-800/60 pb-8">
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#148062] font-bold uppercase">
                // PROJECT ARCHIVE
              </span>
              <h3 className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tight uppercase">FEATURED ENERGY INFRASTRUCTURES</h3>
              <p className="text-xs text-zinc-500 max-w-sm leading-relaxed">
                Track our active deepwater and heavy industrial construction assets completed across global regions.
              </p>
            </div>
            <button
              onClick={() => onNavigate('Projects')}
              className="px-6 py-3 bg-[#148062] hover:bg-[#10674E] text-white text-[11px] font-mono font-bold rounded-lg transition-colors flex items-center gap-2 uppercase tracking-wider cursor-pointer"
            >
              <span>INTERACTIVE PROJECT SCHEMA</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.slice(0, 2).map(project => (
              <div
                key={project.id}
                className="bg-[#121214] border border-zinc-800 rounded-none overflow-hidden flex flex-col justify-between group transition-all duration-200 hover:border-zinc-700"
              >
                <div className="aspect-video bg-[#0A0A0B] overflow-hidden relative border-b border-zinc-800">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-110 opacity-75 group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex gap-1.5">
                    <span className="bg-[#0A0A0B]/95 backdrop-blur-sm border border-zinc-800 text-[9px] font-mono text-[#E0A32E] font-bold uppercase px-2.5 py-1 rounded-none tracking-wider">
                      {project.status.toUpperCase()}
                    </span>
                    <span className="bg-white text-black text-[9px] font-mono font-bold uppercase px-2.5 py-1 rounded-none tracking-wider">
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-5">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">{project.location}</span>
                    <h4 className="text-base font-bold text-white tracking-tight uppercase">{project.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-2 line-clamp-2 font-normal">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Minified Stats */}
                  <div className="grid grid-cols-3 gap-0 border border-zinc-800 divide-x divide-zinc-800 text-center">
                    {project.stats.slice(0, 3).map((st, idx) => (
                      <div key={idx} className="bg-[#0A0A0B] p-3">
                        <span className="text-[8px] font-mono text-zinc-500 block truncate uppercase tracking-wider">{st.label}</span>
                        <span className="text-[11px] font-mono font-bold text-white mt-1 block tracking-wider">{st.value.toUpperCase()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Safety Commitment Banner */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-[#121214] border border-zinc-800 border-l-4 border-l-[#148062] rounded-none p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center justify-between relative overflow-hidden">
          {/* Background vector glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#148062]/5 rounded-full filter blur-[120px] pointer-events-none"></div>

          <div className="space-y-4 max-w-xl text-left z-10">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#148062] font-bold uppercase flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#148062]" />
              // ZERO-HARM PERFORMANCE PROTOCOL
            </span>
            <h3 className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tight leading-tight uppercase">
              SAFETY IS OUR COMPLIANCE BLUEPRINT
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
              We empower every single rigger, welder, helper, and safety coordinator with absolute <strong className="text-white font-semibold">Stop Work Authority</strong>. Our heavy industrial operations maintain an audited, perfect 0.00 TRIR standard across all global basins.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0 z-10 font-mono">
            <button
              onClick={() => onNavigate('Safety')}
              className="px-6 py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-[11px] rounded-none transition-colors text-center uppercase tracking-wider cursor-pointer"
            >
              HSE STANDARDS INDEX
            </button>
            <button
              onClick={() => onOpenQuote()}
              className="px-6 py-3.5 bg-[#148062] hover:bg-[#10674E] text-white font-bold text-[11px] rounded-lg transition-colors text-center uppercase tracking-wider cursor-pointer"
            >
              PROJECT INTAKE SCREEN
            </button>
          </div>
        </div>
      </section>

      {/* 8. Professional Testimonials Carousel preview */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-left space-y-3 max-w-xl">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#148062] font-bold uppercase">
            // OPERATOR ENDORSEMENTS
          </span>
          <h3 className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tight uppercase">VETTED BY BASIN AUTHORITIES</h3>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Direct reports from drilling managers and procurement officers who depend on Rigas Berkeley LLC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map(test => (
            <div
              key={test.id}
              className="bg-[#121214] border border-zinc-800 p-8 rounded-none flex flex-col justify-between space-y-8 hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex text-[#E0A32E] gap-1">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <p className="text-xs italic text-zinc-300 leading-relaxed font-sans">
                  "{test.quote}"
                </p>
              </div>

              <div className="border-t border-zinc-800/80 pt-5 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-white tracking-wide uppercase font-sans">{test.name}</h5>
                  <p className="text-[10px] text-zinc-500 mt-1 font-mono">
                    {test.role.toUpperCase()}, <strong className="text-zinc-400 font-semibold">{test.company.toUpperCase()}</strong>
                  </p>
                </div>
                <span className="text-[8px] font-mono text-zinc-600 tracking-wider">VERIFIED REPAD</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Latest News Blog Preview */}
      <section className="max-w-7xl mx-auto px-6 space-y-12 pb-16">
        <div className="flex justify-between items-end border-b border-zinc-800 pb-6">
          <div className="space-y-3">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#148062] font-bold uppercase">
              // CORPORATE LEDGER
            </span>
            <h3 className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tight uppercase">LATEST COMPANY ANNOUNCEMENTS</h3>
          </div>
          <button
            onClick={() => onNavigate('News')}
            className="text-xs font-mono text-zinc-500 hover:text-white transition-colors uppercase font-bold tracking-wider cursor-pointer"
          >
            READ ALL DOCUMENTS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticlesData.slice(0, 2).map(article => (
            <div
              key={article.id}
              onClick={() => onNavigate('News')}
              className="bg-[#121214] border border-zinc-800 p-6 rounded-none flex gap-6 items-center cursor-pointer hover:border-zinc-700 transition-colors group"
            >
              <div className="w-24 h-24 bg-[#0A0A0B] rounded-none overflow-hidden shrink-0 hidden sm:block border border-zinc-800">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2 min-w-0 flex-1">
                <div className="flex items-center gap-2 text-[9px] font-mono text-zinc-500">
                  <span className="text-[#148062] font-bold uppercase">{article.category}</span>
                  <span>•</span>
                  <span>{article.date.toUpperCase()}</span>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#148062] transition-colors truncate uppercase font-sans">
                  {article.title}
                </h4>
                <p className="text-[11px] text-zinc-400 leading-normal line-clamp-2">
                  {article.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
