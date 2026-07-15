/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Lock,
  Mail,
  ShieldCheck,
  FileText,
  Search,
  Filter,
  Download,
  UploadCloud,
  CheckCircle,
  AlertCircle,
  Clock,
  LogOut,
  FolderOpen,
  Info,
  Trash2
} from 'lucide-react';
import { ClientDocument } from '../types';
import { mockClientDocuments, companyDetails } from '../data';

export default function ClientPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [loginError, setLoginError] = useState('');

  // Portal State
  const [documents, setDocuments] = useState<ClientDocument[]>(mockClientDocuments);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // File Upload states
  const [isDragging, setIsDragging] = useState(false);
  const [uploadCategory, setUploadCategory] = useState<ClientDocument['category']>('Inspection Checklist');
  const [uploadError, setUploadError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Demo credential helper
  const demoEmail = 'operations@rigasberkeley.com';
  const demoPin = '2020';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().toLowerCase() === demoEmail && pin.trim() === demoPin) {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid corporate credentials. Please review the Demo access guide below.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setEmail('');
    setPin('');
  };

  // Search and Category Filters
  const filteredDocs = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Inspection Checklist', 'Contract', 'Certificate of Insurance', 'Engineering Spec', 'HSE Plan'];

  // Handle Drag-and-Drop files
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const processFile = (file: File) => {
    if (file.size > 20 * 1024 * 1024) {
      setUploadError('File exceeds security parameters. Max size is 20MB.');
      return;
    }

    setUploadError('');
    setIsUploading(true);
    setUploadProgress(10);

    // Simulate safe upload & virus-scan loop
    const timer = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            const fileTypeMap: Record<string, ClientDocument['type']> = {
              'pdf': 'PDF',
              'xlsx': 'XLSX',
              'xls': 'XLSX',
              'docx': 'DOCX',
              'doc': 'DOCX',
              'zip': 'ZIP',
              'png': 'IMAGE',
              'jpg': 'IMAGE',
              'jpeg': 'IMAGE'
            };
            const ext = file.name.split('.').pop()?.toLowerCase() || 'pdf';
            const mappedType = fileTypeMap[ext] || 'PDF';

            const newDoc: ClientDocument = {
              id: `doc-${Date.now()}`,
              name: file.name,
              type: mappedType,
              size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
              uploadedAt: new Date().toISOString().split('T')[0],
              status: 'Pending Verification', // All uploaded files require verification
              category: uploadCategory,
              downloadUrl: '#'
            };

            setDocuments(prevDocs => [newDoc, ...prevDocs]);
            setIsUploading(false);
            setUploadProgress(0);
          }, 300);
          return 100;
        }
        return prev + 30;
      });
    }, 200);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDeleteDoc = (id: string) => {
    setDocuments(prev => prev.filter(d => d.id !== id));
  };

  return (
    <div className="w-full font-sans">
      {!isAuthenticated ? (
        /* ==================== LOGIN CONTAINER ==================== */
        <div className="max-w-md mx-auto bg-[#0a0f1a] border border-gray-800 rounded-sm shadow-2xl p-6 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-[#148062]/10 border border-[#148062]/30 text-[#148062] rounded-full flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-white tracking-tight uppercase italic">Secure Client Document Portal</h3>
            <p className="text-xs text-gray-400">
              Authorized RIGAS BERKELEY LLC personnel & partners only. Encrypted multi-factor tunnel.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 font-sans">
            {/* Error Message */}
            {loginError && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-sm p-3 flex items-start gap-2 text-[11px] text-red-400">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-400">Corporate Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-[#050B15] border border-gray-850 text-xs text-white rounded-sm pl-10 pr-4 py-3 focus:outline-none focus:border-[#148062] transition-colors"
                  placeholder="name@rigasberkeley.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-400">Operational PIN Key</label>
              <input
                type="password"
                value={pin}
                onChange={e => setPin(e.target.value)}
                className="w-full bg-[#050B15] border border-gray-850 text-xs text-white rounded-sm px-3 py-3 focus:outline-none focus:border-[#148062] transition-colors font-mono tracking-widest text-center"
                placeholder="••••"
                maxLength={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#148062] hover:bg-[#10674E] text-white font-bold text-xs py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md shadow-teal-500/10 uppercase tracking-wider font-mono cursor-pointer"
              id="portal-login-btn"
            >
              <ShieldCheck className="w-4.5 h-4.5" />
              Establish Secure Verification Session
            </button>
          </form>

          {/* Secure Demo credentials hint */}
          <div className="bg-[#050B15] border border-gray-850 rounded-sm p-4 space-y-2 font-sans">
            <div className="flex items-center gap-1.5 text-xs text-[#148062] font-semibold font-mono">
              <Info className="w-4 h-4" />
              <span>Partner Sandbox Portal Access Guide:</span>
            </div>
            <p className="text-[10px] text-gray-400 leading-relaxed">
              Verify compliance features, upload files, or download check-sheets using these certified corporate sandbox credentials:
            </p>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono p-2 bg-[#0a0f1a] rounded-sm border border-gray-850">
              <div>
                <span className="text-gray-500">EMAIL:</span>
                <p className="text-gray-300 font-bold truncate select-all">{demoEmail}</p>
              </div>
              <div>
                <span className="text-slate-500">SECURE PIN:</span>
                <p className="text-gray-300 font-bold select-all">{demoPin}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ==================== PORTAL DASHBOARD ==================== */
        <div className="space-y-6">
          {/* Header Dashboard status card */}
          <div className="bg-[#0a0f1a] border border-gray-800 rounded-sm p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#148062]/10 border border-[#148062]/30 text-[#148062] rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2 font-mono">
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-sm border border-emerald-500/20 font-bold">
                    SESSION ACTIVE (SSL)
                  </span>
                  <span className="text-xs text-gray-500">ID: {email}</span>
                </div>
                <h4 className="text-lg font-serif font-bold text-white tracking-tight mt-1 uppercase italic">Client Rig compliance console</h4>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white bg-[#050B15] border border-gray-850 px-3.5 py-2 rounded-sm transition-colors cursor-pointer"
              id="portal-logout-btn"
            >
              <LogOut className="w-4 h-4" />
              Logout Session
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Uploader section (Col 1 to 4) */}
            <div className="lg:col-span-4 bg-[#0a0f1a] border border-gray-800 rounded-sm p-5 space-y-4 font-sans">
              <div>
                <h5 className="text-sm font-serif font-bold text-white tracking-tight uppercase italic">Vault Document Submissions</h5>
                <p className="text-xs text-gray-400 mt-1">
                  Upload safety certificates, field inspector logs, or ASME engineering specifications.
                </p>
              </div>

              {/* Category picker */}
              <div className="space-y-1.5">
                <label className="text-xs text-gray-400 font-medium">Verify Category</label>
                <select
                  value={uploadCategory}
                  onChange={e => setUploadCategory(e.target.value as ClientDocument['category'])}
                  className="w-full bg-[#050B15] border border-gray-850 text-xs text-white rounded-sm p-3 focus:outline-none focus:border-[#148062]"
                >
                  <option value="Inspection Checklist">Inspection Checklist</option>
                  <option value="Contract">Contract</option>
                  <option value="Certificate of Insurance">Certificate of Insurance</option>
                  <option value="Engineering Spec">Engineering Spec</option>
                  <option value="HSE Plan">HSE Plan</option>
                </select>
              </div>

              {/* Drag-and-drop zone */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-sm p-6 flex flex-col items-center justify-center text-center transition-all relative ${
                  isDragging 
                    ? 'border-[#148062] bg-[#148062]/5 scale-[0.98]' 
                    : isUploading 
                      ? 'border-gray-850 bg-slate-900/30' 
                      : 'border-gray-850 bg-[#050B15] hover:border-gray-700'
                }`}
              >
                <input
                  type="file"
                  accept=".pdf,.xlsx,.docx,.zip,.jpg"
                  onChange={handleFileSelect}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                  disabled={isUploading}
                />
                
                {isUploading ? (
                  /* Upload spinner */
                  <div className="space-y-3 w-full">
                    <div className="w-10 h-10 border-2 border-t-transparent border-[#148062] rounded-full animate-spin mx-auto"></div>
                    <div>
                      <p className="text-xs font-semibold text-white">Scanning for malicious payloads...</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">Encrypting vault data ({uploadProgress}%)</p>
                    </div>
                    <div className="w-full bg-[#0a0f1a] h-1.5 rounded-sm overflow-hidden">
                      <div className="bg-[#148062] h-full transition-all duration-200" style={{ width: `${uploadProgress}%` }}></div>
                    </div>
                  </div>
                ) : (
                  /* Standard display */
                  <>
                    <UploadCloud className="w-10 h-10 text-[#148062] mb-2.5" />
                    <p className="text-xs font-semibold text-white">Drop verification PDF here</p>
                    <p className="text-[10px] text-gray-500 mt-1">or click to choose files</p>
                    <p className="text-[9px] text-[#148062] mt-3 font-mono uppercase bg-[#148062]/5 px-2 py-0.5 rounded-sm border border-[#148062]/20">
                      AES-256 SAFE STORAGE
                    </p>
                  </>
                )}
              </div>

              {uploadError && (
                <p className="text-[10px] text-red-500 text-center">{uploadError}</p>
              )}

              {/* Space utilization indicators */}
              <div className="bg-[#050B15] border border-gray-850 rounded-sm p-3 space-y-2">
                <div className="flex justify-between items-center text-[10px] text-gray-400">
                  <span>Vault Storage Capacity</span>
                  <span className="font-mono text-white">24.1 MB / 100 MB Used</span>
                </div>
                <div className="w-full bg-[#0a0f1a] h-2 rounded-sm overflow-hidden">
                  <div className="bg-[#148062] h-full rounded-sm" style={{ width: '24%' }}></div>
                </div>
                <div className="flex justify-between text-[9px] text-gray-500 pt-1">
                  <span>Authorized Quota Limit</span>
                  <span>Compliance Checked</span>
                </div>
              </div>
            </div>

            {/* Document directory list (Col 5 to 12) */}
            <div className="lg:col-span-8 space-y-4">
              {/* Filter and search control bar */}
              <div className="bg-[#0a0f1a] border border-gray-800 rounded-sm p-4 flex flex-col md:flex-row gap-4 items-center justify-between font-sans">
                <div className="relative w-full md:w-72">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search by exact filename..."
                    className="w-full bg-[#050B15] border border-gray-850 text-xs text-white rounded-sm pl-9 pr-3 py-2 focus:outline-none focus:border-[#148062]"
                  />
                </div>

                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto py-1">
                  <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span className="text-[10px] text-gray-500 font-mono uppercase mr-1">Dir:</span>
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-2.5 py-1 rounded-sm text-[10px] whitespace-nowrap transition-colors font-mono uppercase cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-[#148062] text-white font-semibold'
                          : 'bg-[#050B15] text-gray-400 hover:text-white border border-gray-850 hover:border-gray-700'
                      }`}
                    >
                      {cat.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Document rows */}
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                {filteredDocs.length === 0 ? (
                  <div className="text-center py-12 border border-gray-850 bg-[#0a0f1a] rounded-sm space-y-2">
                    <FolderOpen className="w-10 h-10 text-gray-600 mx-auto" />
                    <p className="text-sm font-semibold text-white">No documents match the filter</p>
                    <p className="text-xs text-gray-500 font-sans">Refine your search term or upload a new file above.</p>
                  </div>
                ) : (
                  filteredDocs.map(doc => (
                    <div
                      key={doc.id}
                      className="bg-[#0a0f1a] hover:bg-[#0d1424] border border-gray-800/80 hover:border-gray-700/80 rounded-sm p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all"
                    >
                      {/* Left: icon & title details */}
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-10 h-10 bg-[#050B15] border border-gray-850 rounded-sm flex items-center justify-center shrink-0">
                          <FileText className="w-5.5 h-5.5 text-[#148062]" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-white truncate max-w-xs md:max-w-md font-sans" title={doc.name}>
                            {doc.name}
                          </p>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-gray-500 mt-1 font-mono">
                            <span className="text-gray-400">{doc.category}</span>
                            <span>•</span>
                            <span>{doc.size}</span>
                            <span>•</span>
                            <span>Uploaded: {doc.uploadedAt}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: status and action buttons */}
                      <div className="flex items-center justify-between w-full sm:w-auto sm:justify-end gap-4 border-t border-gray-850 sm:border-0 pt-2 sm:pt-0 shrink-0 font-mono">
                        {/* Status tag */}
                        <div className="flex items-center gap-1.5">
                          {doc.status === 'Approved' && (
                            <span className="flex items-center gap-1 px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-sm text-[9px] font-bold text-emerald-400">
                              <CheckCircle className="w-3 h-3 text-emerald-400" />
                              VERIFIED
                            </span>
                          )}
                          {doc.status === 'Pending Verification' && (
                            <span className="flex items-center gap-1 px-2.5 py-0.5 bg-yellow-500/10 border border-yellow-500/20 rounded-sm text-[9px] font-bold text-yellow-400">
                              <Clock className="w-3 h-3 text-yellow-400 animate-pulse" />
                              AUDITING
                            </span>
                          )}
                          {doc.status === 'Requires Review' && (
                            <span className="flex items-center gap-1 px-2.5 py-0.5 bg-red-500/10 border border-red-500/20 rounded-sm text-[9px] font-bold text-red-400" title="Please re-upload with clear signatures.">
                              <AlertCircle className="w-3 h-3 text-red-400" />
                              REJECTED
                            </span>
                          )}
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-2">
                          <a
                            href={doc.downloadUrl}
                            onClick={(e) => {
                              e.preventDefault();
                              alert(`Simulating secure corporate download for: "${doc.name}"\nPayload encryption key verified. File is virus-free.`);
                            }}
                            className="bg-[#050B15] hover:bg-slate-900 border border-gray-850 p-2 rounded-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                            title="Download Encrypted PDF File"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </a>
                          
                          {/* Demo delete option */}
                          <button
                            onClick={() => handleDeleteDoc(doc.id)}
                            className="p-2 hover:bg-red-500/15 rounded-sm text-gray-600 hover:text-red-400 transition-colors cursor-pointer"
                            title="Delete Document"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
