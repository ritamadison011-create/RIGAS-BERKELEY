/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Award, ShieldAlert, CheckCircle, Clock, Users, ArrowUpRight, Zap, Target } from 'lucide-react';
import { companyDetails } from '../data';

export default function AboutView() {
  const [activeValueTab, setActiveValueTab] = useState<'integrity' | 'safety' | 'quality'>('safety');

  const historyTimeline = [
    {
      year: "2020",
      title: "Corporate Inception",
      description: "RIGAS BERKELEY LLC is chartered in Chicago, IL, acquiring our central fabrication facility at 6412 N. WASHTENAW to deliver specialty pipe welding and rig-up consultations to Midwestern logistics terminals."
    },
    {
      year: "2022",
      title: "Fleet Infrastructure Expansion",
      description: "Acquired high-capacity lattice crawler cranes up to 600 Tons, sounds-insulated megawatt backup generators, and rotary compressors to establish a comprehensive industrial leasing wing."
    },
    {
      year: "2024",
      title: "Deepwater Deployment Certification",
      description: "Secured complete BOSIET/HUET safety vetting to deploy certified mechanical turnaround crews for major offshore rigs, completing Project Triton in the Gulf of Mexico with zero incident reports."
    },
    {
      year: "2026",
      title: "Digital Vault Compliant Portal",
      description: "Launched secure AES-256 encrypted client portal for real-time document verification, allowing partners to download ASME inspection lists and upload Certificates of Insurance (COI) instantly."
    }
  ];

  return (
    <div className="space-y-20 font-sans text-gray-300">
      
      {/* Introduction Banner */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-4">
            <span className="h-[1px] w-12 bg-[#148062]"></span>
            <span className="text-xs font-mono text-[#148062] uppercase tracking-widest font-bold">
              WHO WE ARE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.1] uppercase italic">
            Pioneering Rig Solutions & <span className="text-[#148062] not-italic font-sans">Strategic</span> Heavy Support
          </h2>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
            Founded in Chicago in 2020, RIGAS BERKELEY LLC bridges the gap between traditional energy heavy construction and modern digital workflow compliance. We provide engineering diagnostics, custom alloy pipe fabrication, heavy-duty crawler crane leasing, and offshore mechanical support for leading operators.
          </p>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
            Our offices and fabrication layouts, located at <strong className="text-white font-medium">6412 N. WASHTENAW, CHICAGO, IL 60645-0000</strong>, are designed to ship heavy steel packages worldwide via maritime and rail avenues, with real-time tracking logs provided to every client.
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#148062]" />
              <span className="text-xs text-white font-semibold uppercase tracking-wider">API-Q1 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#148062]" />
              <span className="text-xs text-white font-semibold uppercase tracking-wider">ASME U-Stamp Certified</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 aspect-video rounded-sm overflow-hidden bg-[#0a0f1a] border border-gray-800 shadow-2xl relative">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
            alt="Engineering Lab"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
            <div className="text-xs font-mono text-gray-400">
              Rig design lab - RIGAS BERKELEY Chicago Yards
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-[#0a0f1a] py-16 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#050B15]/50 border border-gray-800 p-8 rounded-sm space-y-4">
            <div className="w-10 h-10 bg-[#148062]/10 border border-[#148062]/30 text-[#148062] rounded-sm flex items-center justify-center">
              <Target className="w-5.5 h-5.5" />
            </div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Our Mission Statement</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              To supply the global energy sector with dependable heavy machinery, precision structural welding fabrication, and experienced field personnel. We execute demanding rig-up, pipeline, and maintenance tasks ahead of schedule, with absolute commitment to zero-harm safety records and strict compliance.
            </p>
          </div>

          <div className="bg-[#050B15]/50 border border-gray-800 p-8 rounded-sm space-y-4">
            <div className="w-10 h-10 bg-[#148062]/10 border border-[#148062]/30 text-[#148062] rounded-sm flex items-center justify-center">
              <Zap className="w-5.5 h-5.5" />
            </div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Our Vision Statement</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              To be the premier industrial partner for demanding offshore and onshore energy projects, recognized globally for engineering ingenuity, flawless heavy-lift rigging operations, and leading digital compliance verification services.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Values Tab Panel */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] font-mono tracking-widest text-[#148062] font-bold uppercase">
            Our DNA
          </span>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight uppercase italic">Our Pillars & Core Values</h3>
          <p className="text-xs text-gray-400">
            Every rigger, welder, and director at Rigas Berkeley LLC operates under these strict core priorities.
          </p>
        </div>

        {/* Tab triggers */}
        <div className="flex border-b border-gray-800 justify-center">
          <button
            onClick={() => setActiveValueTab('safety')}
            className={`px-6 py-3 font-mono text-xs uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeValueTab === 'safety'
                ? 'border-[#148062] text-white font-bold'
                : 'border-transparent text-gray-500 hover:text-white'
            }`}
          >
            Safety Culture First
          </button>
          <button
            onClick={() => setActiveValueTab('integrity')}
            className={`px-6 py-3 font-mono text-xs uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeValueTab === 'integrity'
                ? 'border-[#148062] text-white font-bold'
                : 'border-transparent text-gray-500 hover:text-white'
            }`}
          >
            Engineering Integrity
          </button>
          <button
            onClick={() => setActiveValueTab('quality')}
            className={`px-6 py-3 font-mono text-xs uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              activeValueTab === 'quality'
                ? 'border-[#148062] text-white font-bold'
                : 'border-transparent text-gray-500 hover:text-white'
            }`}
          >
            Uncompromised Quality
          </button>
        </div>

        {/* Tab content panel */}
        <div className="bg-[#0a0f1a] border border-gray-800 rounded-sm p-8 max-w-3xl mx-auto min-h-[160px] flex items-center">
          {activeValueTab === 'safety' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#148062]" />
                Zero Recordable Incident Goal
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Safety represents our absolute operational ceiling. We mandate continuous PPE adherence, morning JSA (Job Safety Analysis) stand-ups, and empower every helper with absolute Stop Work Authority. Our perfect 0.00 TRIR record over 1,000,000 hours is the proof.
              </p>
            </div>
          )}
          {activeValueTab === 'integrity' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-[#148062]" />
                Absolute Technical Accountability
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We believe in architectural and operational honesty. We do not use mock telemetry or simulate certifications. Every drawing we publish is wet-signed by a licensed Professional Engineer (PE) and registered securely in our database.
              </p>
            </div>
          )}
          {activeValueTab === 'quality' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#148062]" />
                AWS & ASME Certification Compliance
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Our welding fabrication bays produce steel packages that undergo strict non-destructive evaluation (NDE). We use premium raw alloys and double-wall designs for storage tanks to prevent environmental trace leaks.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Historical Professional Timeline */}
      <section className="bg-[#0a0f1a] py-16 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#148062] font-bold uppercase">
              Corporate Chronology
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight uppercase italic">Professional History Timeline</h3>
            <p className="text-xs text-gray-400">
              Tracking our development path from local midwest consultations to global rig engineering operations.
            </p>
          </div>

          <div className="relative border-l border-gray-800 md:border-l-0 md:flex md:justify-between md:items-start max-w-5xl mx-auto pl-6 md:pl-0 pt-4 md:space-x-8">
            {/* Horizontal line for desktop */}
            <div className="hidden md:block absolute top-[45px] left-0 right-0 h-0.5 bg-gray-800 z-0"></div>

            {historyTimeline.map((item, idx) => (
              <div key={idx} className="relative space-y-4 pb-8 md:pb-0 md:flex-1 text-left z-10 group">
                {/* Sonar dot indicator */}
                <div className="absolute -left-10 md:left-1/2 md:-translate-x-1/2 top-1.5 md:top-[18px] w-8 h-8 rounded-sm bg-[#050B15] border border-gray-800 flex items-center justify-center transition-all group-hover:border-[#148062]">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#148062]"></span>
                </div>

                <div className="md:text-center space-y-2 pt-1 md:pt-12">
                  <span className="text-sm font-mono font-extrabold text-[#148062]">
                    {item.year}
                  </span>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{item.title}</h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed max-w-xs md:mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
