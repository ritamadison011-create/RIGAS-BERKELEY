/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Lock, FileText, Globe } from 'lucide-react';
import { companyDetails } from '../data';

export default function PrivacyView() {
  return (
    <div className="font-sans text-slate-300 max-w-4xl mx-auto px-4 space-y-10 animate-fade-in">
      
      {/* Intro */}
      <div className="border-b border-slate-900 pb-6 space-y-3">
        <span className="text-[10px] font-mono text-[#148062] uppercase tracking-widest font-bold">
          Legal Blueprint
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
          Privacy Policy & Data Security Standards
        </h2>
        <p className="text-xs text-slate-500 font-mono">
          LAST MODIFIED: July 14, 2026 • RIGAS BERKELEY LLC LEGAL DEPT
        </p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-slate-400">
        
        {/* Section 1 */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Lock className="w-4.5 h-4.5 text-[#148062]" />
            1. Scope of Data Security Safeguards
          </h4>
          <p>
            RIGAS BERKELEY LLC, having corporate offices and fabrication yards at <strong className="text-white font-medium">6412 N. WASHTENAW, CHICAGO, IL 60645-0000</strong>, prioritizes the security and digital integrity of our client operations. When users access our secure Client Portal or upload engineering documents, all packets are encrypted in transit and at rest using military-grade AES-256 standards.
          </p>
          <p>
            This policy defines the parameters under which coordinates, phone numbers, safety credentials, and weld inspection blueprints are logged and audited.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4.5 h-4.5 text-[#148062]" />
            2. Collected Information & Specifications
          </h4>
          <p>
            We collect structural project parameters, estimated budgets, site locations, and personal identifiers (such as Full Name, corporate email addresses, and phone contacts) solely to fulfill contract estimations and safety dispatch protocols.
          </p>
          <p>
            We do not share, sell, or license your technical blueprints, lease applications, or background credentials with third-party advertising grids or external corporate entities. All details remain strictly within Rigas Berkeley database vaults.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Globe className="w-4.5 h-4.5 text-[#148062]" />
            3. Cookies & Analytical Telemetry
          </h4>
          <p>
            Our website uses lightweight session cookies to persist client portal logins and track site preferences. Standard browser analytical tools log anonymized IP metrics to assist our developers in improving the responsiveness and loading speed of our industrial web-app.
          </p>
          <p>
            You may choose to disable cookies in your browser settings; however, doing so will lock out the automated verification triggers inside the secure document uploader of the Client Portal.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <FileText className="w-4.5 h-4.5 text-[#148062]" />
            4. Access Rights & Compliance Contact
          </h4>
          <p>
            You hold absolute rights to inspect, update, or request the total deletion of your personal contact data or historic project quotes from our active databases. For compliance inquiries, please call our 24/7 communications desk directly at <strong className="text-white font-mono">{companyDetails.phone}</strong> or send an electronic letter to <strong className="text-white font-mono">{companyDetails.email}</strong>.
          </p>
        </div>

      </div>

    </div>
  );
}
