/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { companyDetails } from '../data';
// @ts-ignore
import rigasLogo from '../assets/images/rigas_berkeley_logo_1784076638029.jpg';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ sender: 'client' | 'bot'; text: string }>>([
    { sender: 'bot', text: 'Hello! Welcome to RIGAS BERKELEY LLC Operational Support.' },
    { sender: 'bot', text: 'How can we assist you with rig operations, rentals, or engineering specs today?' }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMsg = message;
    setChatHistory(prev => [...prev, { sender: 'client', text: userMsg }]);
    setMessage('');

    // Simulate real-time automated help response after short interval
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev,
        {
          sender: 'bot',
          text: 'Thank you. Your message has been routed to our Chicago dispatch team. A Rig Logistics Coordinator will reach you directly at your convenience.'
        }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      {/* Closed Button Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-14 h-14 bg-[#148062] hover:bg-[#10674E] text-white rounded-full shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:scale-105 group relative"
          title="Direct Operational Dispatch Help"
          id="whatsapp-trigger"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-slate-900"></span>
          </span>
          <MessageSquare className="w-6 h-6 transition-transform group-hover:rotate-6" />
        </button>
      )}

      {/* Open Chat Widget */}
      {isOpen && (
        <div className="w-80 md:w-96 bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slide-up duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-950 px-4 py-3.5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 overflow-hidden">
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-slate-900 z-10"></span>
                <img
                  src={rigasLogo}
                  alt="Rigas Berkeley Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white tracking-wide">Rigas Berkeley Dispatch</p>
                <p className="text-xs text-slate-400">Average response: 3 mins</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-800 rounded-lg"
              id="whatsapp-close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 max-h-72 overflow-y-auto p-4 space-y-3 bg-[#070b13] flex flex-col">
            {chatHistory.map((chat, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] rounded-xl p-3 text-xs leading-relaxed ${
                  chat.sender === 'client'
                    ? 'bg-[#148062] text-white self-end rounded-tr-none'
                    : 'bg-slate-900 border border-slate-800 text-slate-200 self-start rounded-tl-none'
                }`}
              >
                {chat.text}
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSend} className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Query about equipment or drilling support..."
              className="flex-1 bg-slate-900 border border-slate-800 text-xs text-white rounded-lg px-3 py-2 focus:outline-none focus:border-[#148062] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#148062] hover:bg-[#10674E] text-white p-2 rounded-lg transition-colors flex items-center justify-center shrink-0"
              title="Send Message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Contact Details footer shortcut */}
          <div className="bg-slate-900 px-4 py-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
            <span>Direct Tel: {companyDetails.phone}</span>
            <span className="font-semibold text-slate-400">RIGAS BERKELEY LLC</span>
          </div>
        </div>
      )}
    </div>
  );
}
