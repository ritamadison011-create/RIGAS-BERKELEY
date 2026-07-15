/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Briefcase, MapPin, DollarSign, CheckCircle, ChevronRight, Send, AlertCircle, FileText, Sparkles, BookOpen } from 'lucide-react';
import { careerOpeningsData } from '../data';

export default function CareersView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
    acceptSafetyRules: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [resumeName, setResumeName] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.position) newErrors.position = 'Please select a target position';
    if (!formData.coverLetter.trim() || formData.coverLetter.length < 10) {
      newErrors.coverLetter = 'Please write a brief summary of your credentials';
    }
    if (!formData.acceptSafetyRules) newErrors.acceptSafetyRules = 'You must agree to safety physical evaluations';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeName(file.name);
    }
  };

  return (
    <div className="font-sans text-gray-300 space-y-20">
      
      {/* 1. Life at Rigas Berkeley Banner */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-4">
            <span className="h-[1px] w-12 bg-[#148062]"></span>
            <span className="text-xs font-mono text-[#148062] uppercase tracking-widest font-bold">
              BUILD YOUR FUTURE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.1] uppercase italic">
            Forge a Premium <span className="text-[#148062] not-italic font-sans">Industrial</span> Career
          </h2>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
            RIGAS BERKELEY LLC is continuously seeking highly certified petroleum engineers, NCCCO crane operators, safety directors, and AWS/ASME alloy welders. We deliver state-of-the-art tooling, union-equivalent wages, comprehensive healthcare, and rotational field arrangements. Learn why our turnover rate is one of the lowest in the energy sector.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-2 text-xs">
              <CheckCircle className="w-5 h-5 text-[#148062] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Continuous Training</strong>
                <span className="text-gray-500 text-[11px]">Paid certifications (BOSIET, HUET, NCCCO and ASME welding upgrades).</span>
              </div>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <CheckCircle className="w-5 h-5 text-[#148062] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Family First Health Coverage</strong>
                <span className="text-gray-500 text-[11px]">100% premium coverage for medical, dental, and vision insurance.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 aspect-square rounded-sm overflow-hidden bg-[#050B15] border border-gray-800 shadow-2xl relative">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600"
            alt="Life at RIGAS BERKELEY LLC"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent flex items-end p-6">
            <div className="text-xs font-mono text-gray-400">
              Rig mechanics performing overhauls - Chicago, IL
            </div>
          </div>
        </div>
      </section>

      {/* 2. Current Openings list */}
      <section className="bg-[#0a0f1a] py-16 border-y border-gray-800">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#148062] font-bold uppercase">
              Current Vetting
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight uppercase italic">Active Professional Openings</h3>
            <p className="text-xs text-gray-400">
              All candidates must pass comprehensive drug panels, background evaluations, and hold active certifications.
            </p>
          </div>

          <div className="space-y-4">
            {careerOpeningsData.map(opening => (
              <div
                key={opening.id}
                className="bg-[#050B15]/50 border border-gray-800 hover:border-gray-750 p-6 rounded-sm space-y-4 transition-all"
              >
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                  <div>
                    <span className="text-[9px] font-mono text-[#148062] font-bold uppercase block tracking-wider">
                      {opening.department}
                    </span>
                    <h4 className="text-base font-bold text-white uppercase tracking-wider">{opening.title}</h4>
                  </div>
                  <span className="px-2.5 py-1 bg-[#148062]/10 border border-[#148062]/20 text-[9px] font-mono font-bold text-[#148062] rounded-sm uppercase sm:self-center">
                    {opening.type}
                  </span>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-gray-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    {opening.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-gray-500" />
                    {opening.salaryRange}
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-sans border-t border-gray-850/60 pt-3">
                  {opening.description}
                </p>

                {/* Requirements details lists */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-gray-500 block uppercase">Technical requirements:</span>
                    <ul className="space-y-1">
                      {opening.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-gray-400 font-sans">
                          <ChevronRight className="w-3.5 h-3.5 text-[#148062] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-gray-500 block uppercase">Benefits Package:</span>
                    <ul className="space-y-1">
                      {opening.benefits.map((ben, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-gray-400 font-sans">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Job Application Form */}
      <section className="max-w-2xl mx-auto px-6 pb-8">
        <div className="bg-[#0a0f1a] border border-gray-800 rounded-sm p-6 sm:p-8 space-y-6 relative overflow-hidden">
          {/* Decorative design glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#148062] rounded-full filter blur-[100px] opacity-5 pointer-events-none"></div>

          <div className="space-y-1 text-center">
            <span className="text-[10px] font-mono tracking-widest text-[#148062] font-bold uppercase flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#148062]" />
              SECURE TALENT INTAKE
            </span>
            <h3 className="text-xl font-serif font-bold text-white tracking-tight uppercase italic">Apply to join RIGAS BERKELEY LLC</h3>
            <p className="text-xs text-gray-400">
              Submit your parameters directly to our Chicago Human Resources desk.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-fade-in">
              <div className="w-14 h-14 bg-[#148062]/10 border border-[#148062]/30 rounded-sm flex items-center justify-center text-[#148062] mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white uppercase tracking-wider">Application Transmitted</h4>
                <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                  Your background details have been logged securely. Our safety compliance director Sarah Lin will review your resume within 3 business days.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', position: '', coverLetter: '', acceptSafetyRules: false });
                  setResumeName(null);
                }}
                className="bg-[#050B15] hover:bg-[#0c1424] border border-gray-800 text-xs text-white px-5 py-2 rounded-sm transition-colors cursor-pointer"
              >
                Apply for another opening
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400">Your Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-[#050B15] border ${errors.name ? 'border-red-500' : 'border-gray-800'} text-xs text-white rounded-sm p-3 focus:outline-none focus:border-[#148062]`}
                    placeholder="e.g. John Doe"
                  />
                  {errors.name && <p className="text-[10px] text-red-500">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-[#050B15] border ${errors.email ? 'border-red-500' : 'border-gray-800'} text-xs text-white rounded-sm p-3 focus:outline-none focus:border-[#148062]`}
                    placeholder="name@gmail.com"
                  />
                  {errors.email && <p className="text-[10px] text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-[#050B15] border ${errors.phone ? 'border-red-500' : 'border-gray-800'} text-xs text-white rounded-sm p-3 focus:outline-none focus:border-[#148062]`}
                    placeholder="+1 (555) 012-3456"
                  />
                  {errors.phone && <p className="text-[10px] text-red-500">{errors.phone}</p>}
                </div>

                {/* Target Position */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400">Target Position *</label>
                  <select
                    value={formData.position}
                    onChange={e => setFormData({ ...formData, position: e.target.value })}
                    className={`w-full bg-[#050B15] border ${errors.position ? 'border-red-500' : 'border-gray-800'} text-xs text-white rounded-sm p-3 focus:outline-none focus:border-[#148062] h-[42px]`}
                  >
                    <option value="">-- Choose Position --</option>
                    {careerOpeningsData.map(o => (
                      <option key={o.id} value={o.id}>{o.title}</option>
                    ))}
                    <option value="apprentice">Junior Field Helper / Apprentice</option>
                  </select>
                  {errors.position && <p className="text-[10px] text-red-500">{errors.position}</p>}
                </div>
              </div>

              {/* Cover Letter */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400">Brief Summary of Vetting / Credentials *</label>
                <textarea
                  value={formData.coverLetter}
                  onChange={e => setFormData({ ...formData, coverLetter: e.target.value })}
                  rows={4}
                  className={`w-full bg-[#050B15] border ${errors.coverLetter ? 'border-red-500' : 'border-gray-800'} text-xs text-white rounded-sm p-3 focus:outline-none focus:border-[#148062] resize-none`}
                  placeholder="Summarize your years of experience, active safety certificates (BOSIET, NCCCO, etc.), or ASME structural steel weld grades..."
                />
                {errors.coverLetter && <p className="text-[10px] text-red-500">{errors.coverLetter}</p>}
              </div>

              {/* Resume upload */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400">Upload Professional Resume (Optional)</label>
                <div className="relative border border-dashed border-gray-800 rounded-sm p-3 bg-[#050B15] flex items-center justify-between hover:border-gray-700 transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.docx,.doc"
                    onChange={handleResumeChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-gray-500" />
                    <span className="text-xs text-gray-400">PDF, DOC, DOCX up to 10MB</span>
                  </div>
                  <span className="bg-[#0a0f1a] border border-gray-800 text-[10px] font-mono text-gray-400 px-2.5 py-1.5 rounded-sm uppercase font-semibold">
                    Browse File
                  </span>
                </div>
                {resumeName && (
                  <p className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 mt-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    Uploaded: {resumeName}
                  </p>
                )}
              </div>

              {/* Safety Evaluation Checkbox */}
              <div className="space-y-1.5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.acceptSafetyRules}
                    onChange={e => setFormData({ ...formData, acceptSafetyRules: e.target.checked })}
                    className="mt-0.5 rounded-sm accent-[#148062] border-gray-800 cursor-pointer"
                  />
                  <span className="text-[11px] leading-relaxed text-gray-400 select-none">
                    I verify that I hold the listed certificates, and I authorize RIGAS BERKELEY LLC to complete routine background checks and medical physical evaluations in accordance with OSHA standards.
                  </span>
                </label>
                {errors.acceptSafetyRules && <p className="text-[10px] text-red-500 pl-7">{errors.acceptSafetyRules}</p>}
              </div>

              {/* Submit */}
              <div className="pt-2 border-t border-gray-850 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#148062] hover:bg-[#10674E] disabled:bg-gray-800 text-white text-xs font-mono font-bold px-6 py-2.5 rounded-lg transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(20,128,98,0.3)] uppercase cursor-pointer"
                >
                  {isSubmitting ? 'Transmitting...' : 'Submit Job Application'}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
