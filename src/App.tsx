/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import {
  Search,
  Menu,
  X,
  ShieldAlert,
  HardHat,
  Lock,
  Phone,
  MapPin,
  Mail,
  ChevronDown,
  ArrowUpRight,
  Info,
  Layers,
  Wrench
} from 'lucide-react';

// Import Views
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import ProjectsView from './components/ProjectsView';
import IndustriesView from './components/IndustriesView';
import EquipmentView from './components/EquipmentView';
import SafetyView from './components/SafetyView';
import CareersView from './components/CareersView';
import NewsView from './components/NewsView';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';
import PrivacyView from './components/PrivacyView';

// Import Global Widgets

import WhatsAppButton from './components/WhatsAppButton';
import RequestQuoteModal from './components/RequestQuoteModal';
// @ts-ignore
import rigasLogo from './assets/images/rigas_logo_new_1784166643182.jpg';

// Import Data for global search
import { servicesData, projectsData, equipmentData, companyDetails } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Array<{ type: string; title: string; tab: string }>>([]);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle live global search
  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    if (!val.trim()) {
      setSearchResults([]);
      return;
    }

    const query = val.toLowerCase();
    const results: Array<{ type: string; title: string; tab: string }> = [];

    // Search Services
    servicesData.forEach(s => {
      if (s.title.toLowerCase().includes(query) || s.shortDescription.toLowerCase().includes(query)) {
        results.push({ type: 'Service', title: s.title, tab: 'Services' });
      }
    });

    // Search Equipment
    equipmentData.forEach(e => {
      if (e.name.toLowerCase().includes(query) || e.category.toLowerCase().includes(query)) {
        results.push({ type: 'Equipment', title: e.name, tab: 'Equipment' });
      }
    });

    // Search Projects
    projectsData.forEach(p => {
      if (p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)) {
        results.push({ type: 'Project', title: p.title, tab: 'Projects' });
      }
    });

    setSearchResults(results.slice(0, 5));
  };

  // Nav categories for header layout organization
  const navigationTabs = [
    'Home',
    'About Us',
    'Services',
    'Projects',
    'Industries',
    'Equipment',
    'Safety',
    'Careers',
    'News',
    'Gallery',
    'Contact',
    'Privacy Policy'
  ];

  const handleOpenQuoteWithService = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-zinc-100 flex flex-col justify-between selection:bg-[#148062] selection:text-white font-sans antialiased">
      
      {/* 1. TOP STATS / BLUEPRINT INFORMATION BANNER */}
      <div className="bg-[#0D0D0E] border-b border-zinc-800/80 text-[9px] font-mono text-zinc-500 py-2 px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <span className="flex items-center gap-1.5 text-zinc-400 font-medium tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#148062] animate-pulse"></span>
            SYS: ACTIVE // TRIR 0.00 APPROVED
          </span>
          <span className="hidden sm:inline text-zinc-800">|</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-zinc-600" />
            COORD: {companyDetails.address.toUpperCase()}
          </span>
        </div>
        
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-1 text-zinc-400">
            <Phone className="w-3 h-3 text-[#148062]" />
            DISPATCH // {companyDetails.phone}
          </span>
        </div>
      </div>

      {/* 2. PREMIUM STUDIO STICKY HEADER & INTEGRATED GRID LINE */}
      <header className="sticky top-0 z-40 bg-white border-b border-zinc-200 py-3.5 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          
          {/* Company branding logo - sleek tech look */}
          <div
            onClick={() => {
              setActiveTab('Home');
              window.scrollTo(0,0);
            }}
            className="flex items-center gap-3 cursor-pointer shrink-0 group"
          >
            <div className="w-9 h-9 flex items-center justify-center select-none rounded-none overflow-hidden border border-zinc-200 bg-white transition-transform duration-200 group-hover:scale-105">
              <img
                src={rigasLogo}
                alt="Rigas Berkeley LLC Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold font-sans text-zinc-900 tracking-normal uppercase leading-none">
                RIGAS BERKELEY <span className="text-[#148062] font-sans font-bold">LLC</span>
              </h1>
              <p className="text-[9px] text-zinc-500 uppercase tracking-[0.25em] font-mono mt-1.5 leading-none">
                DESIGN & HEAVY ENG
              </p>
            </div>
          </div>

          {/* Desktop scrollable / wrapped Navigation Links (Velocity Studio style) */}
          <nav className="hidden lg:flex items-center gap-5 overflow-x-auto py-1 max-w-[65%] no-scrollbar border-l border-zinc-200 pl-6">
            {navigationTabs.map((tab, idx) => {
              const isActive = activeTab === tab;
              const formattedIndex = String(idx + 1).padStart(2, '0');
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    window.scrollTo(0,0);
                  }}
                  className={`py-1 text-[11px] font-mono tracking-wider uppercase whitespace-nowrap transition-all duration-200 flex items-baseline gap-1 ${
                    isActive
                      ? 'text-[#148062] font-bold'
                      : 'text-zinc-500 hover:text-black'
                  }`}
                >
                  <span className={`text-[8px] font-mono ${isActive ? 'text-[#148062]' : 'text-zinc-400'}`}>[{formattedIndex}]</span>
                  <span>{tab === 'Privacy Policy' ? 'PRIVACY' : tab === 'About Us' ? 'ABOUT' : tab}</span>
                </button>
              );
            })}
          </nav>

          {/* Search bar & Client Portal Button right side desktop */}
          <div className="flex items-center gap-4 shrink-0">
            
            {/* Get Scope & Fee Button matching Screenshot */}
            <button
              onClick={() => handleOpenQuoteWithService()}
              className="hidden sm:inline-flex bg-[#148062] hover:bg-[#10674E] text-white px-5 py-2 text-xs md:text-sm font-semibold rounded-lg transition-colors font-sans cursor-pointer items-center gap-1.5 shadow-sm"
            >
              Get your scope & fee
            </button>

            {/* Search Box */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-none text-zinc-500 hover:text-black transition-colors"
                title="Search corporate catalog"
              >
                <Search className="w-3.5 h-3.5" />
              </button>

              {isSearchOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-white border border-zinc-200 p-4 shadow-xl z-50 space-y-3 animate-scale-in text-zinc-900">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={e => handleSearchChange(e.target.value)}
                      placeholder="Search services, specs, rigs..."
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-none py-2 pl-3 pr-8 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#148062]"
                      autoFocus
                    />
                    <Search className="absolute right-2.5 top-2.5 w-4 h-4 text-zinc-400" />
                  </div>

                  {/* Search suggestions results dropdown */}
                  {searchResults.length > 0 ? (
                    <div className="space-y-1 pt-1 border-t border-zinc-100">
                      <span className="text-[9px] font-mono text-zinc-400 uppercase block px-1">
                        Matching Records found:
                      </span>
                      {searchResults.map((res, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setActiveTab(res.tab);
                            setSearchQuery('');
                            setSearchResults([]);
                            setIsSearchOpen(false);
                            window.scrollTo(0,0);
                          }}
                          className="w-full text-left px-2 py-1.5 hover:bg-zinc-50 flex justify-between items-center text-xs text-zinc-700 transition-colors rounded-none"
                        >
                          <span className="truncate pr-2 font-medium">{res.title}</span>
                          <span className="text-[9px] font-mono text-white uppercase font-bold bg-[#148062] px-1.5 py-0.5 rounded-none whitespace-nowrap">
                            {res.type}
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : searchQuery ? (
                    <div className="text-center text-zinc-400 text-[11px] py-2 font-mono">
                      No matching records found
                    </div>
                  ) : (
                    <div className="text-[10px] text-zinc-400 font-mono leading-relaxed p-1">
                      Type keywords like "crane", "welding", "derrick" to instantly filter our engineering catalog.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Drawer Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-none text-zinc-500 hover:text-black transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

          </div>

        </div>
      </header>

      {/* 3. MOBILE MENU SLIDE-IN DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="w-4/5 max-w-sm h-full bg-[#0A0A0B] border-l border-zinc-800 p-6 flex flex-col justify-between overflow-y-auto animate-slide-left rounded-none"
            onClick={e => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center select-none rounded-none overflow-hidden border border-zinc-800 bg-[#121214]">
                    <img
                      src={rigasLogo}
                      alt="Rigas Berkeley LLC Logo"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-sm font-bold tracking-tight uppercase text-white">RIGAS BERKELEY <span className="text-[#148062] font-sans font-bold">LLC</span></span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 bg-[#121214] rounded-none text-zinc-400 hover:text-white border border-zinc-800"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile menu link list */}
              <nav className="flex flex-col gap-2">
                {navigationTabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setIsMobileMenuOpen(false);
                      window.scrollTo(0,0);
                    }}
                    className={`w-full text-left p-3 rounded-none text-xs font-mono uppercase tracking-wider border transition-colors ${
                      activeTab === tab
                        ? 'bg-[#121214] border-[#148062] text-white font-bold'
                        : 'bg-transparent border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900/40'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-gray-800 space-y-4">
              <div className="text-center text-[10px] font-mono text-slate-500">
                CHICAGO OFFICE: {companyDetails.phone}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. ACTIVE SUB-VIEW DYNAMIC PORTAL CONTAINER */}
      <main className="flex-1 py-10 px-6 max-w-7xl mx-auto w-full">
        {activeTab === 'Home' && (
          <HomeView onNavigate={setActiveTab} onOpenQuote={handleOpenQuoteWithService} />
        )}
        {activeTab === 'About Us' && (
          <AboutView />
        )}
        {activeTab === 'Services' && (
          <ServicesView onOpenQuote={handleOpenQuoteWithService} />
        )}
        {activeTab === 'Projects' && (
          <ProjectsView />
        )}
        {activeTab === 'Industries' && (
          <IndustriesView />
        )}
        {activeTab === 'Equipment' && (
          <EquipmentView />
        )}
        {activeTab === 'Safety' && (
          <SafetyView />
        )}
        {activeTab === 'Careers' && (
          <CareersView />
        )}
        {activeTab === 'News' && (
          <NewsView />
        )}
        {activeTab === 'Gallery' && (
          <GalleryView />
        )}
        {activeTab === 'Contact' && (
          <ContactView onOpenQuote={() => setIsQuoteModalOpen(true)} />
        )}
        {activeTab === 'Privacy Policy' && (
          <PrivacyView />
        )}

      </main>

      {/* 5. CORPORATE FOOTER SYSTEM (VELOCITY STYLE) */}
      <footer className="bg-[#0D0D0E] border-t border-zinc-800 pt-16 pb-8 px-6 text-zinc-500 text-xs font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-zinc-800/60 pb-12">
          
          {/* Logo & Corporate profile */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 flex items-center justify-center select-none rounded-none overflow-hidden border border-zinc-800 bg-[#121214]">
                <img
                  src={rigasLogo}
                  alt="Rigas Berkeley LLC Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-base font-bold font-sans text-white tracking-wider uppercase leading-none">
                  RIGAS BERKELEY <span className="text-[#148062] font-sans font-bold">LLC</span>
                </h3>
                <span className="text-[9px] font-mono text-zinc-500 block uppercase tracking-widest mt-1.5 font-bold">Heavy Engineering Yards</span>
              </div>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed max-w-sm font-sans">
              Founded in Chicago in 2020. Supplies AWS-certified welding fabrication, deepwater rig-up support personnel, high-capacity crawler crane leasing, and secure digital document compliance portals.
            </p>
            <div className="pt-2">
              <span className="text-[10px] font-mono text-[#148062] font-bold uppercase block tracking-wider">
                // GLOBAL HSE STANDARDS AUDITED
              </span>
            </div>
          </div>

          {/* Quick links directory */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] font-mono">
              [ DIRECTORY ]
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              {navigationTabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    window.scrollTo(0,0);
                  }}
                  className="text-left text-zinc-500 hover:text-[#148062] transition-colors uppercase font-mono text-[10px]"
                >
                  {tab === 'Privacy Policy' ? 'Privacy' : tab === 'About Us' ? 'About' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Contact and address */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] font-mono">
              [ COORDINATES ]
            </h4>
            <div className="space-y-3 text-[11px] leading-relaxed font-mono text-zinc-400 text-[10px]">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />
                <span>6412 N. WASHTENAW, CHICAGO, IL 60645-0000</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#148062] shrink-0" />
                <span>+1 (312) 217-3841 (DISPATCH)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                <span>ESTIMATING@RIGASBERKELEY.COM</span>
              </p>
            </div>
          </div>

        </div>

        {/* Regulatory copy and disclaimers */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600 font-mono">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} RIGAS BERKELEY LLC. ALL RIGHTS RESERVED.</p>
            <p className="text-[9px]">API STANDARD Q1, AWS D1.1, ASME SEC VIII CERTIFIED COMPLIANCE.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => { setActiveTab('Privacy Policy'); window.scrollTo(0,0); }} className="hover:text-white transition-colors uppercase">
              PRIVACY POLICY
            </button>
          </div>
        </div>
      </footer>

      {/* 6. FLOATING GLOBAL WHATSAPP CHAT DRAWER */}
      <WhatsAppButton />

      {/* 7. FLOATING GLOBAL REQUEST QUOTE MODAL */}
      <RequestQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedServiceId={selectedServiceId}
      />

    </div>
  );
}
