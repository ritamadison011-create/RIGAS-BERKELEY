/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, CheckCircle, FileText, UploadCloud, ChevronRight, HelpCircle } from 'lucide-react';
import { servicesData } from '../data';

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string;
}

export default function RequestQuoteModal({ isOpen, onClose, selectedServiceId = '' }: RequestQuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: selectedServiceId,
    budget: '100k-500k',
    timeline: 'Immediate (1-3 Months)',
    description: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid business email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Corporate phone number is required';
    } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid telephone number';
    }
    if (!formData.service) newErrors.service = 'Please select a service vertical';
    if (!formData.description.trim() || formData.description.length < 15) {
      newErrors.description = 'Please describe the project scope in at least 15 characters';
    }
    if (!formData.acceptTerms) newErrors.acceptTerms = 'You must agree to safety clearance guidelines';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const randomId = Math.floor(1000 + Math.random() * 9000);
      setSubmittedCode(`RBG-2026-${randomId}`);
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 15 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, file: 'File exceeds maximum 15MB engineering limit.' }));
        return;
      }
      setFileName(file.name);
      setErrors(prev => {
        const copy = { ...prev };
        delete copy.file;
        return copy;
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-scale-in max-h-[90vh] flex flex-col font-sans">
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-[#ff6a00] font-bold uppercase">Engineering RFP Desk</span>
            <h3 className="text-lg font-bold text-white tracking-tight">Request Strategic Rig Support & Quote</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
            id="quote-close-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {submittedCode ? (
            /* Success State */
            <div className="text-center py-8 space-y-6">
              <div className="mx-auto w-16 h-16 bg-[#ff6a00]/10 border border-[#ff6a00]/40 rounded-full flex items-center justify-center text-[#ff6a00]">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">RFP Case Registered Successfully</h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                  Your project specifications have been logged securely. Our heavy operations desk in Chicago is auditing the layout metrics.
                </p>
              </div>

              {/* Receipt Plate */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 max-w-sm mx-auto text-left space-y-3">
                <div className="flex justify-between text-xs border-b border-slate-800 pb-2">
                  <span className="text-slate-500 font-mono">CASE TRACKING:</span>
                  <span className="font-mono text-white font-bold">{submittedCode}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Service Category:</span>
                  <span className="text-slate-300 font-medium">
                    {servicesData.find(s => s.id === formData.service)?.title || formData.service}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Estimated Budget:</span>
                  <span className="text-[#ff6a00] font-semibold">${formData.budget.replace('k', ',000').replace('-', ' - $')}</span>
                </div>
                <div className="flex justify-between text-xs pt-1 border-t border-slate-800">
                  <span className="text-slate-500">Assigned Desk:</span>
                  <span className="text-slate-300">Chicago Estimating Core</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-500">
                A customized RFP estimate workbook and preliminary CAD analysis will be emailed to <span className="text-slate-300 font-medium">{formData.email}</span> within 24 business hours.
              </div>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs px-6 py-2.5 rounded-lg transition-colors font-medium"
                >
                  Return to Site
                </button>
              </div>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-400">Your Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-slate-900 border ${errors.name ? 'border-red-500' : 'border-slate-800'} text-xs text-white rounded-lg p-3 focus:outline-none focus:border-[#ff6a00] transition-colors`}
                    placeholder="e.g. Robert Vance"
                  />
                  {errors.name && <p className="text-[10px] text-red-500">{errors.name}</p>}
                </div>

                {/* Company */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-400">Company Name *</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    className={`w-full bg-slate-900 border ${errors.company ? 'border-red-500' : 'border-slate-800'} text-xs text-white rounded-lg p-3 focus:outline-none focus:border-[#ff6a00] transition-colors`}
                    placeholder="e.g. Triton Energy Partners"
                  />
                  {errors.company && <p className="text-[10px] text-red-500">{errors.company}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-400">Business Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-slate-900 border ${errors.email ? 'border-red-500' : 'border-slate-800'} text-xs text-white rounded-lg p-3 focus:outline-none focus:border-[#ff6a00] transition-colors`}
                    placeholder="operations@company.com"
                  />
                  {errors.email && <p className="text-[10px] text-red-500">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-400">Corporate Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-slate-900 border ${errors.phone ? 'border-red-500' : 'border-slate-800'} text-xs text-white rounded-lg p-3 focus:outline-none focus:border-[#ff6a00] transition-colors`}
                    placeholder="+1 (555) 019-2834"
                  />
                  {errors.phone && <p className="text-[10px] text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Service Vertical */}
                <div className="space-y-1.5 md:col-span-1">
                  <label className="text-xs font-medium text-slate-400">Vertical Focus *</label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className={`w-full bg-slate-900 border ${errors.service ? 'border-red-500' : 'border-slate-800'} text-xs text-white rounded-lg p-3 focus:outline-none focus:border-[#ff6a00] h-[42px]`}
                  >
                    <option value="">-- Choose Vertical --</option>
                    {servicesData.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                    <option value="custom-engineering">Custom Mechanical Fabrication</option>
                  </select>
                  {errors.service && <p className="text-[10px] text-red-500">{errors.service}</p>}
                </div>

                {/* Budget */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-400">Estimated Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 text-xs text-white rounded-lg p-3 focus:outline-none focus:border-[#ff6a00] h-[42px]"
                  >
                    <option value="under-100k">Under $100k USD</option>
                    <option value="100k-500k">$100k - $500k USD</option>
                    <option value="500k-2m">$500k - $2M USD</option>
                    <option value="over-2m">Over $2M USD</option>
                  </select>
                </div>

                {/* Timeline */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-400">Deployment Schedule</label>
                  <select
                    value={formData.timeline}
                    onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 text-xs text-white rounded-lg p-3 focus:outline-none focus:border-[#ff6a00] h-[42px]"
                  >
                    <option value="Immediate (1-3 Months)">Immediate (1-3 Mo)</option>
                    <option value="Quarterly (3-6 Months)">Quarterly (3-6 Mo)</option>
                    <option value="Long Term Planning">Strategic Prep (6+ Mo)</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-400">RFP Project Scope & Technical Requirements *</label>
                <textarea
                  value={formData.description}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className={`w-full bg-slate-900 border ${errors.description ? 'border-red-500' : 'border-slate-800'} text-xs text-white rounded-lg p-3 focus:outline-none focus:border-[#ff6a00] transition-colors resize-none`}
                  placeholder="Provide parameters such as derrick height, piping alloys, ocean current limits, specialized crawler crane lifts, or rental mobilization schedules..."
                />
                <div className="flex justify-between items-center text-[10px] text-slate-500">
                  <span>Minimum 15 characters</span>
                  <span>{formData.description.length} chars entered</span>
                </div>
                {errors.description && <p className="text-[10px] text-red-500">{errors.description}</p>}
              </div>

              {/* File Attachment Upload */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-400">Technical Brief / CAD Draw Sheets (Optional)</label>
                <div className="border-2 border-dashed border-slate-800 rounded-xl p-4 bg-slate-950 flex flex-col items-center justify-center relative hover:border-slate-700 transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.dwg,.xlsx,.zip,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <UploadCloud className="w-8 h-8 text-[#ff6a00]/80 mb-2" />
                  <p className="text-xs font-medium text-white">Drag or browse drawings here</p>
                  <p className="text-[10px] text-slate-500 mt-1">Supports PDF, DWG, XLSX, ZIP up to 15MB</p>
                  {fileName && (
                    <div className="mt-2 flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded border border-slate-800">
                      <FileText className="w-3.5 h-3.5 text-[#ff6a00]" />
                      <span className="text-[10px] font-mono text-slate-300 truncate max-w-xs">{fileName}</span>
                    </div>
                  )}
                  {errors.file && <p className="text-[10px] text-red-500 mt-1.5">{errors.file}</p>}
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="space-y-1">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={e => setFormData({ ...formData, acceptTerms: e.target.checked })}
                    className="mt-0.5 rounded accent-[#ff6a00] border-slate-800"
                  />
                  <span className="text-[11px] leading-relaxed text-slate-400 select-none">
                    I verify that our organization holds general liability insurance and we request RIGAS BERKELEY LLC to compile a custom operational evaluation and price matrix based on our uploaded specs.
                  </span>
                </label>
                {errors.acceptTerms && <p className="text-[10px] text-red-500 pl-7">{errors.acceptTerms}</p>}
              </div>

              {/* Form Actions */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                <div className="flex items-center gap-1.5 text-slate-500 text-[10px]">
                  <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
                  <span>Encrypted SSL Secure RFPs</span>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="bg-transparent hover:bg-slate-900 text-slate-400 hover:text-white text-xs px-5 py-2.5 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#ff6a00] hover:bg-[#e05d00] disabled:bg-slate-800 text-white text-xs px-6 py-2.5 rounded-lg font-bold transition-colors flex items-center gap-1.5 shadow-md shadow-orange-500/10"
                    id="submit-rfp-btn"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-1">
                        <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-3.5 h-3.5"></span>
                        Analyzing Specs...
                      </span>
                    ) : (
                      <>
                        Submit Specifications
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
