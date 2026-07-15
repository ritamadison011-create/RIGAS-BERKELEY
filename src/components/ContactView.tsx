/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Info, Sparkles, MessageSquare } from 'lucide-react';
import { companyDetails } from '../data';

interface ContactViewProps {
  onOpenQuote: () => void;
}

export default function ContactView({ onOpenQuote }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject line is required';
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please write a brief explanatory message';
    }
    if (!formData.acceptTerms) newErrors.acceptTerms = 'You must acknowledge our data protection policies';

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

  return (
    <div className="font-sans text-gray-300 space-y-16 max-w-7xl mx-auto px-4">
      
      {/* Intro */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <span className="text-xs font-mono text-[#148062] uppercase tracking-widest bg-[#148062]/5 px-3 py-1 rounded-sm border border-[#148062]/10 font-bold">
          Get in Touch
        </span>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight uppercase italic">Direct Communications Desk</h3>
        <p className="text-xs text-gray-400">
          RIGAS BERKELEY LLC dispatchers, estimators, and engineers maintain 24/7 coverage. Submit your technical parameters below for rapid triage.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Coordinates & Information */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-[#0a0f1a] border border-gray-800 rounded-sm p-6 space-y-6">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono border-b border-gray-850 pb-1">
              RIGAS BERKELEY LLC HQ
            </h4>

            <div className="space-y-4 font-sans">
              {/* Address */}
              <div className="flex gap-3.5 items-start">
                <div className="p-2 bg-[#050B15] border border-gray-850 text-[#148062] rounded-sm shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block leading-none">Head Office & Fabrication Yard:</span>
                  <p className="text-xs text-white font-medium">
                    {companyDetails.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3.5 items-start">
                <div className="p-2 bg-[#050B15] border border-gray-850 text-[#148062] rounded-sm shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block leading-none">24/7 Operations Desk:</span>
                  <p className="text-xs text-white font-mono font-bold">
                    {companyDetails.phone}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3.5 items-start">
                <div className="p-2 bg-[#050B15] border border-gray-850 text-[#148062] rounded-sm shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block leading-none">Estimations Email:</span>
                  <p className="text-xs text-white font-mono">
                    {companyDetails.email}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3.5 items-start">
                <div className="p-2 bg-[#050B15] border border-gray-850 text-[#148062] rounded-sm shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block leading-none">Business Hours:</span>
                  <p className="text-xs text-white">
                    {companyDetails.hours.weekly}
                  </p>
                  <p className="text-[10px] text-emerald-400 font-mono font-bold uppercase pt-1">
                    {companyDetails.hours.emergency}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Call to action boxes */}
          <div className="bg-gradient-to-r from-[#148062]/10 to-emerald-950/20 border border-gray-800/80 rounded-sm p-6 space-y-4">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 font-mono">
              <MessageSquare className="w-4 h-4 text-[#148062]" />
              Need an immediate Turnaround Estimate?
            </h5>
            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              Skip general contact and transmit complete piping, welding, or crane leasing parameters straight to our estimators.
            </p>
            <button
              onClick={onOpenQuote}
              className="w-full bg-[#148062] hover:bg-[#10674E] text-white text-xs font-bold py-2.5 rounded-lg transition-colors shadow-md shadow-teal-500/10 uppercase font-mono tracking-wider cursor-pointer"
            >
              Request Custom Project Quote
            </button>
          </div>

        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7 bg-[#0a0f1a] border border-gray-800 rounded-sm p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-[9px] font-mono text-gray-500 block uppercase">
              Secure Encrypted Transmission Form
            </span>
            <h4 className="text-base font-serif font-bold text-white uppercase tracking-wider italic">
              Send an Inquiry Message
            </h4>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-fade-in font-sans">
              <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto animate-bounce">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-1.5">
                <h5 className="text-base font-bold text-white uppercase tracking-wider">Message Dispatched</h5>
                <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                  Your communication has been logged in our secure database. Our dispatch operators at 6412 N. Washtenaw will call you shortly.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', subject: '', message: '', acceptTerms: false });
                }}
                className="bg-[#050B15] hover:bg-slate-900 border border-gray-850 text-xs text-white px-5 py-2 rounded-sm transition-colors cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400">Your Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-[#050B15] border ${errors.name ? 'border-red-500' : 'border-gray-850'} text-xs text-white rounded-sm p-3 focus:outline-none focus:border-[#148062]`}
                    placeholder="John Doe"
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
                    className={`w-full bg-[#050B15] border ${errors.email ? 'border-red-500' : 'border-gray-850'} text-xs text-white rounded-sm p-3 focus:outline-none focus:border-[#148062]`}
                    placeholder="email@example.com"
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
                    className={`w-full bg-[#050B15] border ${errors.phone ? 'border-red-500' : 'border-gray-850'} text-xs text-white rounded-sm p-3 focus:outline-none focus:border-[#148062]`}
                    placeholder="+1 (555) 012-3456"
                  />
                  {errors.phone && <p className="text-[10px] text-red-500">{errors.phone}</p>}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400">Inquiry Subject *</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full bg-[#050B15] border ${errors.subject ? 'border-red-500' : 'border-gray-850'} text-xs text-white rounded-sm p-3 focus:outline-none focus:border-[#148062]`}
                    placeholder="e.g. Alloy Fabrication Yard Leadtimes"
                  />
                  {errors.subject && <p className="text-[10px] text-red-500">{errors.subject}</p>}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-400">Your Message *</label>
                <textarea
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className={`w-full bg-[#050B15] border ${errors.message ? 'border-red-500' : 'border-gray-850'} text-xs text-white rounded-sm p-3 focus:outline-none focus:border-[#148062] resize-none`}
                  placeholder="Explain the parameters of your project, required crane capacity, structural steel alloys, or estimated shutdown timelines..."
                />
                {errors.message && <p className="text-[10px] text-red-500">{errors.message}</p>}
              </div>

              {/* Acknowledge Data Protection */}
              <div className="space-y-1.5 font-sans">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={e => setFormData({ ...formData, acceptTerms: e.target.checked })}
                    className="mt-0.5 rounded-sm accent-[#148062] border-gray-800"
                  />
                  <span className="text-[11px] leading-relaxed text-gray-500 select-none">
                    I acknowledge that the information submitted is protected securely and will be processed exclusively by RIGAS BERKELEY LLC to initiate engineering assessments.
                  </span>
                </label>
                {errors.acceptTerms && <p className="text-[10px] text-red-500 pl-7">{errors.acceptTerms}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-2 border-t border-gray-850 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#148062] hover:bg-[#10674E] disabled:bg-[#050B15] text-white text-xs font-bold px-6 py-2.5 rounded-sm transition-colors flex items-center gap-1.5 shadow-md shadow-teal-500/10 uppercase cursor-pointer"
                >
                  {isSubmitting ? 'Transmitting...' : 'Send secure message'}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
