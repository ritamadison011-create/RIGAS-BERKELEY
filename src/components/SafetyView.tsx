/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, HardHat, ShieldAlert, Award, FileText, CheckCircle, Flame, Heart } from 'lucide-react';

export default function SafetyView() {
  const safetyCertificates = [
    { title: "API Spec Q1 Compliant", authority: "American Petroleum Institute", desc: "Verifies our Chicago yards conform to strict quality management standards for manufacturing exploration rigs." },
    { title: "OSHA 1910 / 1926 Standards", authority: "Occupational Safety & Health Admin", desc: "Daily field compliance audits and continuous oversight for heavy construction, welding, and high lift rigging." },
    { title: "ISO 14001:2015 Certification", authority: "Environmental Management Systems", desc: "Certified procedures designed to completely mitigate fluid discharge or toxic chemical traces at active sites." },
    { title: "AWS D1.1 Structural Steel", authority: "American Welding Society", desc: "All welders hold AWS/ASME Section IX certifications and undergo routine NDE weld evaluations." }
  ];

  const ppeMandates = [
    { item: "Flame-Resistant Clothing (FRC)", desc: "Mandatory NFPA 2112 certified dual-layer coveralls worn at all active sites and yards." },
    { item: "Class E Protective Helmets", desc: "High-impact non-conductive safety helmets equipped with integrated face shield brackets." },
    { item: "Steel-Toe Safety Footwear", desc: "ASTM F2413 certified steel-shank oil-resistant insulated boots required in all active zones." },
    { item: "Intrinsically Safe Radios & Sensors", desc: "Class-1 Div-1 spark-proof communication headsets and active multi-gas indicators." }
  ];

  return (
    <div className="font-sans text-gray-300 space-y-20">
      
      {/* 1. Philosophical Intro Banner */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono text-[#148062] uppercase tracking-widest bg-[#148062]/5 px-3 py-1.5 rounded-sm border border-[#148062]/20 font-bold">
            HSE COMMITMENT
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight uppercase italic">
            Safety represents our Absolute Operational Ceiling
          </h2>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-sans">
            At RIGAS BERKELEY LLC, we do not treat health, safety, and environmental (HSE) guidelines as checkboxes on a binder. They represent the foundational blueprint of our engineering firm. Every morning begins with a mandatory JSA (Job Safety Analysis) stand-up, auditing rig layouts, crane paths, and weather variables to ensure total preparedness.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 bg-[#0a0f1a] border border-gray-800 px-4 py-2.5 rounded-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-semibold text-white font-mono">0.00 TRIR Record</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0a0f1a] border border-gray-800 px-4 py-2.5 rounded-sm">
              <Heart className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-semibold text-white font-mono">1,000,000+ Safe Hours</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-sm blur opacity-15"></div>
          <div className="relative bg-[#0a0f1a] border border-gray-800 rounded-sm p-6 space-y-6">
            <div className="aspect-video rounded-sm overflow-hidden bg-[#050B15] border border-gray-850">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600"
                alt="Engineers wearing PPE"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Unconditional Stop Work Authority</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
                Every rigger, helper, welder, and driver is legally authorized and mandated to instantly stop any operation if they detect a mechanical hazard, soil compaction failure, or environmental risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PPE Requirements Grid */}
      <section className="bg-[#0a0f1a] py-16 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#148062] font-bold uppercase">
              Field Armour
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight uppercase italic">Mandated Personal Protective Equipment (PPE)</h3>
            <p className="text-xs text-gray-400">
              No personnel may cross safety barriers at RIGAS BERKELEY LLC yards or remote rig projects without this full array.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ppeMandates.map((ppe, idx) => (
              <div
                key={idx}
                className="bg-[#050B15] border border-gray-850 p-5 rounded-sm space-y-3"
              >
                <div className="w-9 h-9 bg-[#148062]/10 border border-[#148062]/30 text-[#148062] rounded-sm flex items-center justify-center">
                  <HardHat className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">{ppe.item}</h4>
                <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
                  {ppe.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HSE Standards & Risk Matrix */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-[#0a0f1a] border border-gray-800 rounded-sm p-6 space-y-5">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono border-b border-gray-850 pb-1">
            Emergency Response SOP
          </h4>
          <p className="text-xs text-gray-400 leading-relaxed font-sans">
            When subsea pressures trigger alerts or heavy rig-masts shift, speed is paramount. We maintain dedicated rapid response protocols, including helicopter emergency evacuations and hydraulic containment procedures.
          </p>
          <ul className="space-y-3 pt-2 text-xs font-sans">
            <li className="flex items-start gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-[#148062] shrink-0 mt-0.5" />
              <span>Rotational HUET escape drills for offshore crews</span>
            </li>
            <li className="flex items-start gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-[#148062] shrink-0 mt-0.5" />
              <span>Real-time satellite H2S leak tracking telemetry</span>
            </li>
            <li className="flex items-start gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-[#148062] shrink-0 mt-0.5" />
              <span>24/7 dispatcher lines linking directly to Chicago estimators</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono text-[#148062] uppercase tracking-widest bg-[#148062]/5 px-3 py-1 rounded-sm border border-[#148062]/20 font-bold">
            RISK ASSESSMENT
          </span>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight uppercase italic">Environmental & HSE Standards</h3>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-sans">
            We actively model environmental impact metrics for our client pipelines, ensuring that earthworks, horizontal drilling, and hydraulic pressure testing completely shield local aquifers against contamination. Our dual-wall fluid tanks and double-barrier containment manifolds are engineered to meet and exceed ISO environmental protocols.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#050B15] border border-gray-850 p-4 rounded-sm space-y-1">
              <h5 className="text-xs font-bold text-white uppercase tracking-wide">Incident Prevention</h5>
              <p className="text-[11px] text-gray-500 leading-relaxed font-sans">
                Ultrasonic stress testing of crawler crane boom welds is completed before every super-lift sequence, checking for fatigue cracks.
              </p>
            </div>
            <div className="bg-[#050B15] border border-gray-850 p-4 rounded-sm space-y-1">
              <h5 className="text-xs font-bold text-white uppercase tracking-wide">Training Programs</h5>
              <p className="text-[11px] text-gray-500 leading-relaxed font-sans">
                All Rigas Berkeley personnel undergo continuous hazard-communication, confined space entry, and heavy rigging refresh courses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Credentials & Safety Certificates */}
      <section className="bg-[#0a0f1a] py-16 border-y border-gray-850 pb-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#148062] font-bold uppercase">
              Vetting Core
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight uppercase italic">HSE Compliance & Certifications</h3>
            <p className="text-xs text-gray-400">
              RIGAS BERKELEY LLC operates in total alignment with major petroleum audit agencies and federal safety boards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyCertificates.map((cert, idx) => (
              <div
                key={idx}
                className="bg-[#050B15] border border-gray-850 p-6 rounded-sm flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-[#148062]/10 border border-[#148062]/30 text-[#148062] rounded-sm flex items-center justify-center shrink-0">
                  <Award className="w-5.5 h-5.5" />
                </div>
                <div className="space-y-1.5 font-sans">
                  <span className="text-[9px] font-mono text-gray-500 block uppercase">{cert.authority}</span>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">{cert.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {cert.desc}
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
