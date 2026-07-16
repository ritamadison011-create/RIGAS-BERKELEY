/* ==========================================================================
   RIGAS BERKELEY LLC - Single Page Application Core Engine
   ========================================================================== */

// ==================== 1. CORPORATE DATA STORE ====================

const servicesData = [
  { id: "derrick-steel-erection", title: "Derrick Steel Erection", category: "Derrick Steel", specs: { "API Standard": "API-4F 5th Ed", "Max Hook Capacity": "1,500,000 lbs", "Steel Grade": "ASTM A572 Gr 50" }, desc: "ASME certified structural steel assembly, mast modifications, and heavy derrick rig-ups." },
  { id: "heavy-crawler-cranes", title: "Heavy Crawler Cranes", category: "Heavy Logistics", specs: { "Max Lift": "600 Tons", "Boom Length": "Up to 340 ft", "Certification": "OSHA 1926.1400" }, desc: "High-capacity lattice-boom crawler crane leasing with NCCCO-certified operators." },
  { id: "subsea-wellhead-engineering", title: "Subsea Wellhead Support", category: "Offshore Engineering", specs: { "Max Depth": "10,000 ft", "Design Spec": "API 17D / API 6A", "Pressure Rating": "15,000 PSI" }, desc: "Engineering support, gasket sealing, and valve telemetry for deepwater wells." },
  { id: "asme-alloy-welding", title: "ASME Structural Alloy Welding", category: "Derrick Steel", specs: { "Welding Codes": "ASME Sec VIII Div 1", "Pipe Spec": "ASME B31.3", "NDE Verification": "100% UT/X-Ray" }, desc: "High-pressure piping manifolds, skid systems, and custom steel fabrications." },
  { id: "heavy-haul-logistics", title: "Heavy Haul & Logistics", category: "Heavy Logistics", specs: { "Max Load": "180,000 lbs", "Sensor Setup": "Geotechnical Ice Sensors", "Route Survey": "3D CAD Swept Path" }, desc: "Logistics, route clearance, and specialized transport for over-dimensional superloads." },
  { id: "api-q1-compliance", title: "API-Q1 Compliance Auditing", category: "Compliance Auditing", specs: { "Auditor Level": "Lead Inspector Q1", "Standards Covered": "API Q1 / ISO 9001", "Turnaround Audits": "Full Manifold / Valve" }, desc: "Full-spectrum quality management audits and certifications for rig operations." }
];

const equipmentData = [
  { id: "rb-dr-01", name: "RBG-1500 Land Drilling Rig", category: "Drilling Rigs", specifications: { "Max Depth": "20,000 ft", "Hook Load": "1,000,000 lbs", "Drawworks HP": "1,500 HP" }, features: ["Triplex Mud Pumps", "Top Drive System"], applications: ["Ultra-deep gas wells", "Heavy shale operations"], imageUrl: "assets/images/hero_drilling_rig_new_1784166672041.jpg" },
  { id: "rb-cr-02", name: "Liebherr LR 1600 Crawler Crane", category: "Cranes", specifications: { "Max Lift": "600 Tons", "Max Boom": "340 ft", "Counterweight": "190 Tons" }, features: ["Narrow track capability", "Redundant crane safety systems"], applications: ["Refinery construction", "Offshore vessel loading"], imageUrl: "assets/images/gallery_crane_lift_new_1784166697548.jpg" },
  { id: "rb-ge-03", name: "Caterpillar 3516B Multi-MW Generator", category: "Generator & Compressors", specifications: { "Output": "2,000 ekW", "Voltage": "4,160V", "Fuel Type": "Diesel/Dual Fuel" }, features: ["Sound-insulated canopy", "Remote SCADA panel"], applications: ["Rig site grid operations", "Emergency refinery backup"], imageUrl: "assets/images/gallery_worker_welder_new_1784166751430.jpg" },
  { id: "rb-pu-04", name: "Gardner Denver PZ-11 Mud Pump", category: "Pumps & Tanks", specifications: { "Output Pressure": "5,000 PSI", "Input Power": "1,600 HP", "Flow Rate": "620 GPM" }, features: ["High-strength steel cylinders", "Direct motor coupling"], applications: ["Deep drilling mud circulation", "High-volume piping testing"], imageUrl: "assets/images/gallery_drilling_auger_new_1784166725298.jpg" }
];

const projectsData = [
  { id: "proj-1", name: "Project Triton Deepwater Rig-Up", basin: "Gulf of Mexico", status: "Active Operations", lat: 27.5, lng: -90.2, details: "Full mast structural steel retrofit for 20,000 PSI high-pressure blow-out preventer installation on active semi-submersible rig.", specs: { "LTI safe hours": "450,000 hrs", "Active Cranes": "Liebherr LR 1600", "Welding Specs": "ASME Section VIII UT compliant" } },
  { id: "proj-2", name: "Chicago Yard ASME Skid Prefab", basin: "Chicago Onshore", status: "Fabrication Complete", lat: 41.9, lng: -87.6, details: "Design and heavy weld fabrication of 4 major multi-valve pressure skids at our Chicago N. Washtenaw yard.", specs: { "LTI safe hours": "320,000 hrs", "Alloy Used": "Inconel 625 / Duplex Steel", "Audit Spec": "API-Q1 Vetted" } },
  { id: "proj-3", name: "Project Aurora Arctic Logistics", basin: "International", status: "Mobilization Phase", lat: 70.3, lng: -148.5, details: "Polar transport logistics for a modular 150-foot drill tower assembly across active winter ice roads into Prudhoe Bay.", specs: { "LTI safe hours": "180,000 hrs", "Geotech Sensors": "Active Thick-ice bridges", "Temp Limits": "-45 degrees F" } }
];

const industriesData = [
  { id: "oilfield-drilling", name: "Upstream Oilfield Drilling", description: "Supporting deep offshore and onshore drilling contractors with mast retrofits, subsea wellheads, and heavy riggings.", features: ["Mast structural steel certifications", "Subsea wellhead gasket testing", "API 4F derrick engineering audits"] },
  { id: "petrochemical-refining", name: "Petrochemical Refining", description: "Providing heavy turnaround crawler cranes, high-capacity rigging layouts, and certified metal weld fabrication for refineries.", features: ["ASME Section VIII pressure vessel codes", "600-Ton crane lifts planning", "Refinery shutdown turnarounds"] },
  { id: "heavy-infrastructure", name: "Heavy Industrial Infrastructure", description: "Custom fabrication of modular heavy equipment, skid bases, and high-load transport logs for industrial hubs.", features: ["Custom alloy steel structural welds", "Dual-fuel multi-MW energy arrays", "3D CAD route clearance sweeps"] }
];

const testimonialsData = [
  { name: "Marcus Vance", role: "VP of Drilling", company: "Apex Global Energy Corp", quote: "Rigas Berkeley executed our derrick structural upgrade with military precision. passed NDE first run and finished ahead of schedule." },
  { name: "Elena Rostova", role: "Lead Procurement", company: "Sovereign Oilfield & Mining", quote: "Leasing crawler cranes from their fleet was incredibly smooth. All equipment arrived with full maintenance logs." }
];

const faqData = [
  { question: "Where is RIGAS BERKELEY LLC's headquarters located?", answer: "Our central corporate offices and heavy steel fabrication yard are located at 6412 N. WASHTENAW, CHICAGO, IL 60645-0000." },
  { question: "Are your welding fabrications certified to ASME standards?", answer: "Yes. All structural weldings and high-pressure pipe manifolds are strictly certified under ASME Section VIII Division 1 and AWS D1.1 specifications." }
];

const galleryData = [
  { id: "gal-1", title: "Compliance Audit Manifold System", category: "Oil Rigs", imageUrl: "assets/images/gallery_safety_audit_new_1784166737955.jpg", description: "Our certified compliance inspector conducting safety audits at an active drilling manifold station." },
  { id: "gal-2", title: "Trenchless Auger Rig", category: "Heavy Equipment", imageUrl: "assets/images/gallery_drilling_auger_new_1784166725298.jpg", description: "A heavy-duty horizontal boring and auger drilling rig undergoing calibration." },
  { id: "gal-3", title: "Technical Pipeline Audit", category: "Engineering Teams", imageUrl: "assets/images/gallery_safety_audit_new_1784166737955.jpg", description: "Specialized petroleum technician auditing high-pressure valve telemetry." },
  { id: "gal-4", title: "Offshore Heavy Generator Lift", category: "Projects", imageUrl: "assets/images/gallery_crane_lift_new_1784166697548.jpg", description: "Multi-ton modular equipment being safely hoisted onto the deck of an offshore construction vessel." },
  { id: "gal-5", title: "Derrick Rotary Drilling Floor", category: "Oil Rigs", imageUrl: "assets/images/gallery_drill_floor_new_1784166710321.jpg", description: "High-power casing and drill-pipe alignment procedures on the active rotary drilling floor." }
];

const careerOpeningsData = [
  { id: "car-1", title: "Heavy Structural Welder (ASME Sec VIII / AWS D1.1)", department: "Chicago Metal Yard", salary: "$42.00 - $48.50 / hr + Full Benefits", details: "Must hold active AWS D1.1 or ASME Section IX certification. Requires heavy carbon steel, duplex alloy, and flux-cored pipe welding experience." },
  { id: "car-2", title: "Certified Crane Operator (NCCCO Lattice-Boom Crawler)", department: "Leasing & Field Deployment", salary: "$45.00 - $55.00 / hr + Overtime", details: "Requires active NCCCO certification for lattice-boom crawler cranes. Experience lifting multi-ton refinery modules or offshore logistics vessels." }
];

const newsArticlesData = [
  {
    id: "safety-milestone-2025",
    title: "Rigas Berkeley LLC Celebrates Flawless HSE Safety Milestone",
    category: "Safety News",
    date: "May 12, 2025",
    author: "HSE Committee",
    summary: "Our derrick engineering and heavy rigging crews reach a joint record of 1,000,000 consecutive exposure hours without a single recordable incident (Zero LTI).",
    content: "At RIGAS BERKELEY LLC, safety is not merely a box to check—it is the foundational cornerstone of our corporate operational philosophy. We are immensely proud to announce that our combined onshore operations, heavy Chicago fabrication yards, and offshore service deployments have officially crossed 1,000,000 consecutive safe work hours. This spectacular achievement stands as a testament to our strict PPE mandates, mandatory morning JSA (Job Safety Analysis) circle reviews, and the absolute power of 'Stop Work Authority' held by every single rigger, welder, and helper on our sites.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    readTime: "4 min read"
  },
  {
    id: "offshore-derrick-innovations",
    title: "Deepwater Derrick Upgrades: Engineering for 20,000 PSI Resurfacing",
    category: "Equipment Innovations",
    date: "Feb 18, 2025",
    author: "Drilling Systems Wing",
    summary: "As developers transition into high-pressure high-temperature reservoirs, Rigas Berkeley engineers custom structure steel retrofits to hold the newest 20k BOP stacks.",
    content: "The energy industry is actively moving into deep reservoirs where bottom-hole pressures touch unprecedented thresholds of 20,000 PSI. Controlling this pressure requires drilling contractors to deploy massive, heavy blow-out preventers (BOPs) that exceed standard hoisting system margins. Rigas Berkeley's mechanical engineering team is actively modeling custom high-grade alloy structural stiffeners that reinforce existing jack-up masts and derrick hulls, allowing older rigs to securely handle high-pressure equipment upgrades without requiring capital-intensive new ship construction.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    readTime: "6 min read"
  },
  {
    id: "arctic-logistics-case",
    title: "Navigating Ice Roads: Heavy Transport Logistics in Polar Regions",
    category: "Industry Updates",
    date: "Jan 04, 2025",
    author: "Logistics Operations Team",
    summary: "An inside look at how RIGAS BERKELEY LLC successfully navigated extreme frost-lines to transport a modular 150-ft drill tower into Prudhoe Bay.",
    content: "Transporting over 100 superloads of heavy steel, generators, and drill pipes across temporary frozen ice bridges requires extensive preparation. Geotechnical sensors must continuously measure ice-sheet thickness to guarantee it supports loads up to 180,000 lbs. During Project Aurora, our expert logistics dispatchers worked hand-in-hand with state environmental groups, monitoring local weather radars 24/7 to adjust truck speeds and spacing. This precision ensured we delivered every modular block with absolute safety and zero environmental trace.",
    imageUrl: "https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&q=80&w=800",
    readTime: "5 min read"
  }
];

const initialClientDocs = [
  { id: "doc-1", name: "Rig-304-Derrick-Ultrasonic-Inspection-Checklist.pdf", size: "4.2 MB", uploadedAt: "2026-06-20", status: "Approved", category: "Inspection Checklist" },
  { id: "doc-2", name: "Project-Triton-Offshore-Service-Contract-Amended.pdf", size: "12.8 MB", uploadedAt: "2026-07-02", status: "Approved", category: "Contract" },
  { id: "doc-3", name: "Chicago-Yard-ASME-Certification-COI.pdf", size: "1.8 MB", uploadedAt: "2026-07-11", status: "Approved", category: "Certificate of Insurance" }
];


// ==================== 2. LOCAL APPLICATION STATE ====================

let activeTab = "Home";
let selectedProject = projectsData[0];
let selectedIndustry = industriesData[0];
let activeServicesCategory = "All";
let activeEquipmentCategory = "All";
let currentLightboxIdx = 0;
let searchQuery = "";
let clientDocs = [...initialClientDocs];
let clientIsLoggedIn = false;


// ==================== 3. ROUTER & MAIN NAVIGATION ====================

const navigationItems = [
  { label: "Home", icon: "home" },
  { label: "About Us", icon: "users" },
  { label: "Services", icon: "cpu" },
  { label: "Projects", icon: "map" },
  { label: "Industries", icon: "compass" },
  { label: "Equipment", icon: "settings" },
  { label: "Safety", icon: "shield-alert" },
  { label: "Careers", icon: "user-check" },
  { label: "News", icon: "newspaper" },
  { label: "Gallery", icon: "image" },
  { label: "Client Portal", icon: "lock" },
  { label: "Contact", icon: "mail" }
];

function initNavigation() {
  const desktopNav = document.getElementById("desktop-nav");
  const mobileNavLinks = document.getElementById("mobile-nav-links");
  
  // Render Desktop Nav
  desktopNav.innerHTML = navigationItems.map(item => `
    <button onclick="navigateToTab('${item.label}')" class="nav-btn-desk px-2.5 py-1.5 rounded-md text-[11px] font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
      activeTab === item.label ? 'bg-[#148062]/10 border border-[#148062]/30 text-white font-bold' : 'text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent'
    }">
      <i data-lucide="${item.icon}" class="w-3.5 h-3.5"></i>
      ${item.label}
    </button>
  `).join('');

  // Render Mobile Nav Links
  mobileNavLinks.innerHTML = navigationItems.map(item => `
    <button onclick="navigateToTab('${item.label}'); toggleMobileMenu();" class="w-full text-left px-4 py-3 rounded-md text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2.5 transition-all ${
      activeTab === item.label ? 'bg-[#148062]/20 border border-[#148062]/40 text-white font-bold' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
    }">
      <i data-lucide="${item.icon}" class="w-4 h-4"></i>
      ${item.label}
    </button>
  `).join('');

  lucide.createIcons();
}

function navigateToTab(tabId) {
  // Hide all panels
  document.querySelectorAll(".view-panel").forEach(p => p.classList.add("hidden"));
  
  activeTab = tabId;
  const viewId = `view-${tabId.replace(' ', '-')}`;
  const targetPanel = document.getElementById(viewId);
  
  if (targetPanel) {
    targetPanel.classList.remove("hidden");
    targetPanel.classList.add("animate-fade-in");
  }

  // Highlight navigation elements
  initNavigation();
  
  // Render subcontents
  renderTabContent(tabId);
  
  // Scroll to top
  window.scrollTo(0, 0);
}


// ==================== 4. TAB VIEW RENDERERS ====================

function renderTabContent(tabId) {
  const containerId = `view-${tabId.replace(' ', '-')}`;
  const container = document.getElementById(containerId);
  if (!container) return;

  switch (tabId) {
    case "Home":
      renderHome(container);
      break;
    case "About Us":
      renderAbout(container);
      break;
    case "Services":
      renderServices(container);
      break;
    case "Projects":
      renderProjects(container);
      break;
    case "Industries":
      renderIndustries(container);
      break;
    case "Equipment":
      renderEquipment(container);
      break;
    case "Safety":
      renderSafety(container);
      break;
    case "Careers":
      renderCareers(container);
      break;
    case "News":
      renderNews(container);
      break;
    case "Gallery":
      renderGallery(container);
      break;
    case "Client Portal":
      renderClientPortal(container);
      break;
    case "Contact":
      renderContact(container);
      break;
    case "Privacy Policy":
      renderPrivacyPolicy(container);
      break;
  }
}

// --- RENDER: HOME ---
function renderHome(container) {
  container.innerHTML = `
    <!-- Hero Banner Plate -->
    <div class="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 p-8 md:p-16 flex flex-col md:flex-row items-center gap-10">
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div class="relative space-y-6 md:w-1/2 z-10">
        <span class="text-xs font-mono text-[#148062] uppercase tracking-widest font-bold border border-[#148062]/20 bg-[#148062]/5 px-3 py-1 rounded-sm">Est. 2020 | Chicago Yard</span>
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight uppercase italic">
          High-Pressure <br><span class="text-[#148062]">Rigging & Metal</span> Fabrication
        </h2>
        <p class="text-xs md:text-sm text-zinc-400 leading-relaxed font-sans">
          RIGAS BERKELEY LLC delivers ASME Section VIII pressure welding, lattice crawler crane leases, subsea wellhead telemetry support, and certified offshore operator staffing.
        </p>
        <div class="flex flex-wrap gap-4 pt-2">
          <button onclick="navigateToTab('Services')" class="bg-[#148062] hover:bg-[#10674E] text-white px-6 py-3 text-xs font-bold font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer">
            Explore Services
          </button>
          <button onclick="navigateToTab('Client Portal')" class="border border-zinc-700 bg-transparent hover:bg-zinc-900 text-white px-6 py-3 text-xs font-bold font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer">
            Access Vault Portal
          </button>
        </div>
      </div>
      <div class="md:w-1/2 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden border border-zinc-850 relative">
        <img src="assets/images/hero_drilling_rig_new_1784166672041.jpg" alt="Active Rig drilling floor" class="w-full h-full object-cover">
        <div class="absolute bottom-4 left-4 bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 px-3 py-1.5 rounded-sm text-[10px] font-mono text-zinc-400">
          OFFSHORE DISPATCH DECK ACTIVE
        </div>
      </div>
    </div>

    <!-- Live Performance Metrics Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="bg-[#0a0f1a] border border-zinc-800 p-6 rounded-lg text-center space-y-2">
        <div class="text-3xl font-display font-extrabold text-white">1,000,000+</div>
        <div class="text-[10px] font-mono text-[#148062] uppercase tracking-wider font-bold">Safe Hours Worked (Zero LTI)</div>
        <p class="text-[11px] text-zinc-500">Uncompromised safety across Chicago yard & offshore turnarounds.</p>
      </div>
      <div class="bg-[#0a0f1a] border border-zinc-800 p-6 rounded-lg text-center space-y-2">
        <div class="text-3xl font-display font-extrabold text-white">600 TONS</div>
        <div class="text-[10px] font-mono text-accent uppercase tracking-wider font-bold">Max Heavy Crane Capacity</div>
        <p class="text-[11px] text-zinc-500">Prismatic fleet led by high-capacity lattice Liebherr crawler systems.</p>
      </div>
      <div class="bg-[#0a0f1a] border border-zinc-800 p-6 rounded-lg text-center space-y-2">
        <div class="text-3xl font-display font-extrabold text-white">ASME SEC VIII</div>
        <div class="text-[10px] font-mono text-[#148062] uppercase tracking-wider font-bold">Welding & Prefab Code</div>
        <p class="text-[11px] text-zinc-500">100% UT certified alloy piping manifolds & mechanical skids.</p>
      </div>
    </div>

    <!-- Dual Service Teaser Grid -->
    <div class="space-y-6">
      <div class="flex justify-between items-end border-b border-zinc-800 pb-3">
        <div>
          <span class="text-[10px] font-mono text-[#148062] uppercase tracking-widest font-bold">Featured Catalog</span>
          <h3 class="text-lg font-serif text-white uppercase italic font-bold">Specialized Engineering Verticals</h3>
        </div>
        <button onclick="navigateToTab('Services')" class="text-xs font-mono text-[#148062] hover:underline flex items-center gap-1 font-bold">
          All Specifications <i data-lucide="chevron-right" class="w-4 h-4"></i>
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${servicesData.slice(0, 3).map(serv => `
          <div onclick="navigateToTab('Services')" class="bg-[#0a0f1a] border border-zinc-800 p-5 rounded-md hover:border-zinc-700 cursor-pointer transition-all flex flex-col justify-between">
            <div class="space-y-3">
              <span class="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">${serv.category}</span>
              <h4 class="text-sm font-display font-bold text-white uppercase tracking-wide">${serv.title}</h4>
              <p class="text-xs text-zinc-400 line-clamp-2">${serv.desc}</p>
            </div>
            <span class="text-[10px] font-mono text-[#148062] font-bold uppercase mt-4 block">View Specs Sheet &rarr;</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Client Testimonials Plate -->
    <div class="bg-zinc-950 border border-zinc-850 rounded-xl p-8 space-y-6 relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="text-center max-w-lg mx-auto space-y-1 relative z-10">
        <span class="text-[10px] font-mono text-[#ff6a00] uppercase tracking-wider font-bold">Operator Reviews</span>
        <h4 class="text-xl font-serif text-white uppercase italic font-bold">Vetted By Global Producers</h4>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        ${testimonialsData.map(test => `
          <div class="bg-[#0a0f1a] border border-zinc-800 p-6 rounded-md space-y-4">
            <p class="text-xs italic text-zinc-300 leading-relaxed">"${test.quote}"</p>
            <div class="flex items-center justify-between border-t border-zinc-850/60 pt-3">
              <div>
                <h5 class="text-xs font-bold text-white uppercase tracking-wider">${test.name}</h5>
                <p class="text-[10px] font-mono text-[#148062]">${test.role} - ${test.company}</p>
              </div>
              <div class="flex text-[#ff6a00]">
                <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
                <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
                <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
                <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
                <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- FAQ Accordion section -->
    <div class="space-y-6 max-w-3xl mx-auto">
      <div class="text-center space-y-1">
        <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Direct Answers</span>
        <h4 class="text-lg font-serif text-white uppercase italic font-bold">Frequently Asked Inquiries</h4>
      </div>
      <div class="space-y-3">
        ${faqData.map((faq, idx) => `
          <div class="bg-[#0a0f1a] border border-zinc-800 rounded-sm">
            <button onclick="toggleAccordion(${idx});" class="w-full text-left p-4 flex items-center justify-between font-serif text-xs font-bold text-white uppercase italic tracking-wide">
              <span>${faq.question}</span>
              <i data-lucide="chevron-down" id="faq-chevron-${idx}" class="w-4 h-4 text-zinc-500 transition-transform"></i>
            </button>
            <div id="faq-content-${idx}" class="hidden px-4 pb-4 text-xs text-zinc-400 leading-relaxed border-t border-zinc-850/40 pt-3">
              ${faq.answer}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  lucide.createIcons();
}

function toggleAccordion(idx) {
  const content = document.getElementById(`faq-content-${idx}`);
  const chevron = document.getElementById(`faq-chevron-${idx}`);
  if (content && chevron) {
    const isHidden = content.classList.contains("hidden");
    if (isHidden) {
      content.classList.remove("hidden");
      chevron.classList.add("rotate-180");
    } else {
      content.classList.add("hidden");
      chevron.classList.remove("rotate-180");
    }
  }
}

// --- RENDER: ABOUT US ---
function renderAbout(container) {
  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
      <!-- Left side: Narrative & Video frame (Col 1-7) -->
      <div class="md:col-span-7 space-y-6">
        <span class="text-xs font-mono text-[#148062] uppercase tracking-widest font-bold border border-[#148062]/10 bg-[#148062]/5 px-3 py-1 rounded-sm">Corporate Statement</span>
        <h3 class="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight uppercase italic leading-tight">
          Pioneering Heavy Logistics <br>& Rig Repair Diagnostics
        </h3>
        
        <!-- Tab controller inside About -->
        <div class="flex gap-1 border-b border-zinc-800 pb-2">
          <button onclick="selectAboutTab('statement');" id="about-btn-statement" class="about-tab-btn px-4 py-2 text-[10px] font-mono uppercase tracking-wider font-bold text-white border-b-2 border-[#148062]">Vance Statement</button>
          <button onclick="selectAboutTab('yard');" id="about-btn-yard" class="about-tab-btn px-4 py-2 text-[10px] font-mono uppercase tracking-wider text-zinc-500">N. Washtenaw Metal Yard</button>
          <button onclick="selectAboutTab('audit');" id="about-btn-audit" class="about-tab-btn px-4 py-2 text-[10px] font-mono uppercase tracking-wider text-zinc-500">ASME Audit Protocols</button>
        </div>

        <div id="about-tab-content" class="text-xs text-zinc-400 leading-relaxed font-sans space-y-4">
          <!-- Statement initially loaded -->
          <p>Founded in Chicago, RIGAS BERKELEY LLC has spent years establishing a bulletproof reputation within high-stakes industrial energy networks. We specialize in retrofitting offshore masts, certified heavy structural welding, and providing high-load crawler crane support.</p>
          <p>We work exclusively with elite clients to maintain mechanical safety clearances, ensuring that all deepwater turnarounds pass rigorous non-destructive evaluations on the first attempt.</p>
        </div>

        <div class="aspect-video w-full rounded-lg overflow-hidden border border-zinc-800 relative bg-zinc-950">
          <img src="assets/images/hero_blueprint_review_new_1784166684154.jpg" alt="Metal fabrication yard review" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5">
            <span class="text-[10px] font-mono text-[#148062] uppercase">Compliance Checklist Desk</span>
            <h5 class="text-xs font-bold text-white font-sans uppercase">ISO-9001 and API SPEC Q1 Registered Management</h5>
          </div>
        </div>
      </div>

      <!-- Right side: Chronological history timeline (Col 8-12) -->
      <div class="md:col-span-5 bg-[#0a0f1a] border border-zinc-800 p-6 rounded-lg space-y-6">
        <h4 class="text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-800 pb-2 font-mono">
          Chronological Operations Logs
        </h4>
        <div class="space-y-6 relative pl-4 border-l border-zinc-800">
          <div class="relative space-y-1.5">
            <div class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#148062] border-2 border-[#050B15]"></div>
            <span class="text-[10px] font-mono text-[#148062] font-bold">2020: Foundation</span>
            <p class="text-[11px] text-zinc-400">Rigas Berkeley LLC incorporates in Chicago with a focus on high-capacity crane logistics and local onshore refinery shutdowns.</p>
          </div>
          <div class="relative space-y-1.5">
            <div class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#ff6a00] border-2 border-[#050B15]"></div>
            <span class="text-[10px] font-mono text-accent font-bold">2022: Metal Yard Launch</span>
            <p class="text-[11px] text-zinc-400">Opens the heavy-load metal fabrication yard at 6412 N. Washtenaw, acquiring ASME Section VIII certification for pressure piping assemblies.</p>
          </div>
          <div class="relative space-y-1.5">
            <div class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#148062] border-2 border-[#050B15]"></div>
            <span class="text-[10px] font-mono text-[#148062] font-bold">2024: Deepwater Turnarounds</span>
            <p class="text-[11px] text-zinc-400">Launches specialized offshore services, conducting major deepwater derrick structural retrofits for 20k PSI well controls in the Gulf of Mexico.</p>
          </div>
          <div class="relative space-y-1.5">
            <div class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#050B15] animate-pulse"></div>
            <span class="text-[10px] font-mono text-emerald-400 font-bold">2026: 1,000,000 Safe Hours</span>
            <p class="text-[11px] text-zinc-400">Reaches a key industrial milestone of one million safe exposure hours with zero lost-time incidents across all onshore fabrication and offshore logistics sites.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function selectAboutTab(tabName) {
  document.querySelectorAll(".about-tab-btn").forEach(btn => btn.classList.remove("text-white", "border-b-2", "border-[#148062]"));
  document.querySelectorAll(".about-tab-btn").forEach(btn => btn.classList.add("text-zinc-500"));

  const activeBtn = document.getElementById(`about-btn-${tabName}`);
  if (activeBtn) {
    activeBtn.classList.remove("text-zinc-500");
    activeBtn.classList.add("text-white", "border-b-2", "border-[#148062]");
  }

  const contentDiv = document.getElementById("about-tab-content");
  if (tabName === 'statement') {
    contentDiv.innerHTML = `
      <p>Founded in Chicago, RIGAS BERKELEY LLC has spent years establishing a bulletproof reputation within high-stakes industrial energy networks. We specialize in retrofitting offshore masts, certified heavy structural welding, and providing high-load crawler crane support.</p>
      <p>We work exclusively with elite clients to maintain mechanical safety clearances, ensuring that all deepwater turnarounds pass rigorous non-destructive evaluations on the first attempt.</p>
    `;
  } else if (tabName === 'yard') {
    contentDiv.innerHTML = `
      <p>Our premier steel works and heavy fabrication hub is strategically located at 6412 N. Washtenaw in Chicago. Equipped with automated cutting lines, high-frequency pipe bending systems, and a certified pressure vessel weld core.</p>
      <p>The facility provides 24/7 logistics dispatching, allowing modular steel assemblies and skids to ship immediately via lake waterways, cargo rails, and major interstates to heavy drilling sectors worldwide.</p>
    `;
  } else if (tabName === 'audit') {
    contentDiv.innerHTML = `
      <p>Safety clearance requires strict compliance documentation. Rigas Berkeley LLC employs certified AWS inspectors and ASNT Level II technicians who oversee all structural assemblies and high-pressure manifold welds.</p>
      <p>Our quality verification records include 100% UT (Ultrasonic Testing), magnetic particle scans, and complete material trace certificates (MTRs), loaded directly to our secure client compliance portal.</p>
    `;
  }
}

// --- RENDER: SERVICES ---
function renderServices(container) {
  const serviceCategories = ['All', 'Derrick Steel', 'Heavy Logistics', 'Offshore Engineering', 'Compliance Auditing'];
  
  const filteredServices = activeServicesCategory === 'All' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeServicesCategory);

  container.innerHTML = `
    <div class="space-y-8">
      <div class="text-center max-w-xl mx-auto space-y-2">
        <span class="text-xs font-mono text-[#148062] uppercase tracking-widest font-bold">Specifications Desk</span>
        <h3 class="text-2xl md:text-3xl font-serif font-bold text-white uppercase italic">Industrial Services Catalog</h3>
        <p class="text-xs text-zinc-400">ASME-certified steel installations, heavy crane logistics, wellhead diagnostics, and compliance inspections.</p>
      </div>

      <!-- Categories Selector inside Services -->
      <div class="flex flex-wrap gap-1.5 justify-center border-b border-zinc-800 pb-4">
        ${serviceCategories.map(cat => `
          <button onclick="filterServicesCategory('${cat}');" class="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer rounded-sm ${
            activeServicesCategory === cat ? 'bg-[#148062] text-white font-bold' : 'bg-[#0a0f1a] border border-zinc-800 text-zinc-400 hover:text-white'
          }">
            ${cat}
          </button>
        `).join('')}
      </div>

      <!-- Grid Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${filteredServices.map(serv => `
          <div class="bg-[#0a0f1a] border border-zinc-800 p-6 rounded-sm space-y-4 hover:border-zinc-700 transition-all flex flex-col justify-between">
            <div class="space-y-3">
              <span class="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">${serv.category}</span>
              <h4 class="text-sm font-display font-bold text-white uppercase tracking-wider">${serv.title}</h4>
              <p class="text-xs text-zinc-400 leading-relaxed font-sans">${serv.desc}</p>
              
              <!-- Compact list specs -->
              <div class="bg-[#050B15] border border-zinc-850 p-3 rounded-sm space-y-1.5 text-[10px] font-mono">
                ${Object.entries(serv.specs).map(([key, val]) => `
                  <div class="flex justify-between border-b border-zinc-900 last:border-0 pb-1 last:pb-0">
                    <span class="text-zinc-500 uppercase">${key}:</span>
                    <span class="text-white font-bold">${val}</span>
                  </div>
                `).join('')}
              </div>
            </div>
            
            <button onclick="openCustomQuoteModal('${serv.id}')" class="w-full bg-[#148062]/10 border border-[#148062]/30 hover:bg-[#148062] hover:text-white text-[#148062] transition-colors py-2.5 text-xs font-mono font-bold uppercase tracking-wider rounded-sm mt-4 cursor-pointer text-center">
              Request Specific Fee Spec
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function filterServicesCategory(cat) {
  activeServicesCategory = cat;
  renderTabContent("Services");
}

function openCustomQuoteModal(serviceId) {
  openQuoteModal(serviceId);
}

// --- RENDER: PROJECTS ---
function renderProjects(container) {
  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left side: The dynamic interactive SVG map (Col 1-7) -->
      <div class="lg:col-span-7 bg-[#0a0f1a] border border-zinc-800 p-6 rounded-lg space-y-6">
        <div class="flex justify-between items-start">
          <div class="space-y-1">
            <span class="text-[10px] font-mono text-[#148062] uppercase tracking-wider font-bold">Interactive Telemetry Map</span>
            <h4 class="text-lg font-serif text-white uppercase italic font-bold">Active Deployments Matrix</h4>
          </div>
          <span class="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-sm uppercase font-bold animate-pulse">
            GPS LIVE CONNECTED
          </span>
        </div>

        <!-- SVG Map Area -->
        <div class="aspect-[16/10] w-full bg-[#050B15] border border-zinc-850 rounded-md relative p-4 overflow-hidden flex items-center justify-center">
          <svg viewBox="0 0 800 500" class="w-full h-full text-zinc-800">
            <!-- Grid backdrop -->
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0f172a" stroke-width="1"/>
              </pattern>
            </defs>
            <rect width="800" height="500" fill="url(#grid)" />
            
            <!-- Continental abstract paths (Very minimal, styled as glowing telemetry lines) -->
            <path d="M 50,150 Q 150,50 300,100 T 550,80 T 750,120 M 50,350 Q 200,420 400,380 T 700,420" fill="none" stroke="#0f172a" stroke-width="2" stroke-dasharray="5,5" />
            
            <!-- Coordinate circles & lines -->
            <line x1="200" y1="0" x2="200" y2="500" stroke="#0f172a" stroke-width="0.5" stroke-dasharray="10,10" />
            <line x1="500" y1="0" x2="500" y2="500" stroke="#0f172a" stroke-width="0.5" stroke-dasharray="10,10" />
            <line x1="0" y1="250" x2="800" y2="250" stroke="#0f172a" stroke-width="0.5" stroke-dasharray="10,10" />
            
            <!-- Render Dynamic Project Markers -->
            ${projectsData.map(proj => {
              // Convert lat/lng to SVG viewport ratios
              // Normalizing: lat roughly (20 to 75), lng roughly (-155 to -50)
              const x = ((proj.lng + 160) / 110) * 800;
              const y = ((75 - proj.lat) / 55) * 500;
              const isSelected = selectedProject.id === proj.id;
              
              return `
                <g class="cursor-pointer" onclick="selectMapProject('${proj.id}')" onmouseover="showMapTooltip('${proj.id}', ${x}, ${y})" onmouseout="hideMapTooltip()">
                  <!-- Concentric tracking rings -->
                  <circle cx="${x}" cy="${y}" r="${isSelected ? 18 : 10}" class="animate-pulse-glow" fill="none" stroke="${isSelected ? '#ff6a00' : '#148062'}" stroke-width="1.5" opacity="0.4" />
                  <circle cx="${x}" cy="${y}" r="4" fill="${isSelected ? '#ff6a00' : '#148062'}" />
                </g>
              `;
            }).join('')}
          </svg>

          <!-- SVG Tooltip Popover -->
          <div id="map-tooltip" class="hidden absolute bg-slate-950/95 border border-zinc-800 px-3 py-2 rounded-md shadow-2xl pointer-events-none z-25 text-[10px] space-y-1">
            <div id="tooltip-name" class="font-bold text-white uppercase"></div>
            <div class="flex gap-2 text-zinc-500">
              <span>Basin: <strong id="tooltip-basin" class="text-zinc-300"></strong></span>
              <span>Status: <strong id="tooltip-status" class="text-[#148062]"></strong></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right side: Selection details panel (Col 8-12) -->
      <div class="lg:col-span-5 bg-[#0a0f1a] border border-zinc-800 p-6 rounded-lg space-y-6">
        <div class="space-y-1 pb-4 border-b border-zinc-800">
          <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Deployment Logs Telemetry</span>
          <h4 id="proj-details-name" class="text-xl font-serif font-bold text-white uppercase italic tracking-tight line-clamp-1">${selectedProject.name}</h4>
        </div>

        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-[#050B15] border border-zinc-850 p-3 rounded-sm">
              <span class="text-[9px] font-mono text-zinc-500 uppercase">Geographical Basin</span>
              <div id="proj-details-basin" class="text-xs font-bold text-white font-sans uppercase pt-1">${selectedProject.basin}</div>
            </div>
            <div class="bg-[#050B15] border border-zinc-850 p-3 rounded-sm">
              <span class="text-[9px] font-mono text-zinc-500 uppercase">Operational Status</span>
              <div id="proj-details-status" class="text-xs font-bold text-emerald-400 font-sans uppercase pt-1">${selectedProject.status}</div>
            </div>
          </div>

          <div class="space-y-2">
            <span class="text-[9px] font-mono text-zinc-500 uppercase">Narrative & Brief</span>
            <p id="proj-details-desc" class="text-xs text-zinc-400 leading-relaxed font-sans">${selectedProject.details}</p>
          </div>

          <div class="space-y-3 border-t border-zinc-850 pt-4">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Site Verification Checklist:</span>
            <div class="space-y-2" id="proj-details-specs">
              ${Object.entries(selectedProject.specs).map(([key, val]) => `
                <div class="flex justify-between items-center bg-[#050B15] px-3.5 py-2.5 border border-zinc-850 rounded-sm">
                  <span class="text-[10px] font-mono text-zinc-400 uppercase">${key}</span>
                  <span class="text-xs font-mono text-[#148062] font-bold">${val}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function selectMapProject(projId) {
  selectedProject = projectsData.find(p => p.id === projId) || projectsData[0];
  renderTabContent("Projects");
}

function showMapTooltip(projId, x, y) {
  const proj = projectsData.find(p => p.id === projId);
  const tooltip = document.getElementById("map-tooltip");
  if (proj && tooltip) {
    document.getElementById("tooltip-name").innerText = proj.name;
    document.getElementById("tooltip-basin").innerText = proj.basin;
    document.getElementById("tooltip-status").innerText = proj.status;
    
    tooltip.style.left = `${x - 20}px`;
    tooltip.style.top = `${y - 65}px`;
    tooltip.classList.remove("hidden");
  }
}

function hideMapTooltip() {
  const tooltip = document.getElementById("map-tooltip");
  if (tooltip) tooltip.classList.add("hidden");
}

// --- RENDER: INDUSTRIES ---
function renderIndustries(container) {
  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left side: Split industry buttons (Col 1-5) -->
      <div class="lg:col-span-5 space-y-2">
        <span class="text-[10px] font-mono text-zinc-500 uppercase block px-2 pb-1 border-b border-zinc-850">Industrial Sectors serving:</span>
        <div class="space-y-1.5">
          ${industriesData.map(ind => `
            <button onclick="selectIndustryTab('${ind.id}')" class="w-full text-left p-4 rounded-sm border transition-all cursor-pointer flex items-center justify-between group ${
              selectedIndustry.id === ind.id ? 'bg-[#0a0f1a] border-[#ff6a00]' : 'bg-transparent border-zinc-850 hover:border-zinc-750'
            }">
              <div class="flex items-center gap-3.5 min-w-0">
                <div class="p-2 rounded-sm border transition-colors shrink-0 ${
                  selectedIndustry.id === ind.id ? 'bg-[#ff6a00]/10 border-[#ff6a00]/30 text-[#ff6a00]' : 'bg-[#0a0f1a] border-zinc-850 text-zinc-500 group-hover:text-white'
                }">
                  <i data-lucide="compass" class="w-4 h-4"></i>
                </div>
                <span class="text-xs font-bold uppercase tracking-wider truncate ${
                  selectedIndustry.id === ind.id ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                }">${ind.name}</span>
              </div>
              <i data-lucide="chevron-right" class="w-4 h-4 text-zinc-600 group-hover:translate-x-0.5 transition-transform"></i>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Right side: Vector diagram & details (Col 6-12) -->
      <div class="lg:col-span-7 bg-[#0a0f1a] border border-zinc-800 p-6 sm:p-8 rounded-lg space-y-6">
        <div class="flex justify-between items-start gap-4">
          <div class="space-y-1">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1">
              <i data-lucide="activity" class="w-3.5 h-3.5 text-accent animate-pulse"></i>
              API APPROVED VETTED SPEC
            </span>
            <h4 class="text-xl font-serif font-bold text-white uppercase italic tracking-tight">${selectedIndustry.name} Operations</h4>
          </div>
          <span class="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-sm uppercase font-bold">API Approved</span>
        </div>

        <!-- Abstract custom vector diagrams SVG -->
        <div class="aspect-video w-full rounded bg-[#050B15] border border-zinc-850 p-4 flex flex-col justify-between relative overflow-hidden">
          <div class="flex justify-between text-[8px] font-mono text-zinc-600">
            <span>DIAGRAM: ${selectedIndustry.id.toUpperCase()}_LOG</span>
            <span>SYSTEM SCALE: N/A</span>
          </div>
          
          <div class="flex-1 w-full flex items-center justify-center my-2">
            <svg viewBox="0 0 400 200" class="w-full max-w-xs h-auto opacity-70">
              <rect width="400" height="200" fill="#020617" rx="3" />
              <path d="M 0,100 L 400,100 M 100,0 L 100,200 M 200,0 L 200,200 M 300,0 L 300,200" stroke="#0f172a" stroke-width="1" stroke-dasharray="3,3" />
              
              ${selectedIndustry.id === 'oilfield-drilling' ? `
                <!-- Drilling rig derrick outline -->
                <path d="M 120,180 L 180,40 L 220,40 L 280,180 Z" fill="none" stroke="#ff6a00" stroke-width="1.5" />
                <path d="M 150,110 L 250,110 M 165,80 L 235,80 M 180,40 L 180,180" stroke="#334155" stroke-width="1" />
                <path d="M 180,80 L 220,180" stroke="#ff6a00" stroke-width="2.5" />
                <circle cx="200" cy="40" r="4" fill="#ff6a00" />
              ` : selectedIndustry.id === 'petrochemical-refining' ? `
                <!-- Tank & piping layout -->
                <rect x="80" y="60" width="80" height="110" rx="6" fill="none" stroke="#334155" stroke-width="1.5" />
                <rect x="220" y="40" width="40" height="130" fill="none" stroke="#334155" stroke-width="1.5" />
                <path d="M 160,110 L 220,110" stroke="#ff6a00" stroke-width="3" fill="none" />
                <circle cx="190" cy="110" r="5" fill="#ff6a00" />
                <path d="M 120,170 Q 190,210 240,170" stroke="#334155" stroke-width="1.5" fill="none" />
              ` : `
                <!-- Heavy crawler crawler track & boom -->
                <rect x="80" y="140" width="100" height="25" rx="3" fill="none" stroke="#334155" stroke-width="1.5" />
                <circle cx="100" cy="152" r="8" fill="#1e293b" />
                <circle cx="130" cy="152" r="8" fill="#1e293b" />
                <circle cx="160" cy="152" r="8" fill="#1e293b" />
                <line x1="130" y1="140" x2="280" y2="40" stroke="#ff6a00" stroke-width="3" />
                <line x1="280" y1="40" x2="280" y2="120" stroke="#334155" stroke-width="1" />
              `}
            </svg>
          </div>
          
          <div class="text-[8px] font-mono text-zinc-600 text-right">API SPEC CHECK: PASS</div>
        </div>

        <div class="space-y-4">
          <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">${selectedIndustry.description}</p>
          <div class="space-y-2 border-t border-zinc-850 pt-4">
            <span class="text-[10px] font-mono text-zinc-500 uppercase">Sector Focus Parameters:</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${selectedIndustry.features.map(feat => `
                <div class="flex items-start gap-2 text-xs text-zinc-400 font-sans">
                  <span class="w-1.5 h-1.5 rounded-sm bg-accent mt-2 shrink-0"></span>
                  <span>${feat}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  lucide.createIcons();
}

function selectIndustryTab(indId) {
  selectedIndustry = industriesData.find(i => i.id === indId) || industriesData[0];
  renderTabContent("Industries");
}

// --- RENDER: EQUIPMENT ---
function renderEquipment(container) {
  const equipCategories = ['All', 'Drilling Rigs', 'Cranes', 'Generator & Compressors', 'Pumps & Tanks'];
  
  const getFilteredEquipment = () => {
    if (activeEquipmentCategory === 'All') return equipmentData;
    if (activeEquipmentCategory === 'Generator & Compressors') {
      return equipmentData.filter(e => e.category === 'Generators' || e.category === 'Compressors');
    }
    if (activeEquipmentCategory === 'Pumps & Tanks') {
      return equipmentData.filter(e => e.category === 'Pumps' || e.category === 'Storage Tanks');
    }
    return equipmentData.filter(e => e.category === activeEquipmentCategory);
  };

  const filteredItems = getFilteredEquipment();

  container.innerHTML = `
    <div class="space-y-8">
      <div class="text-center max-w-xl mx-auto space-y-2">
        <span class="text-xs font-mono text-accent uppercase tracking-widest font-bold">Operational Lease Fleet</span>
        <h3 class="text-2xl md:text-3xl font-serif font-bold text-white uppercase italic">Heavy Machinery Inventory</h3>
        <p class="text-xs text-zinc-400">Available for corporate lease with full logs, maintenance certifications, and certified operators.</p>
      </div>

      <!-- Categories Selector inside Equipment -->
      <div class="flex flex-wrap gap-1.5 justify-center border-b border-zinc-800 pb-4">
        ${equipCategories.map(cat => `
          <button onclick="filterEquipmentCategory('${cat}');" class="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer rounded-sm ${
            activeEquipmentCategory === cat ? 'bg-accent text-white font-bold' : 'bg-[#0a0f1a] border border-zinc-800 text-zinc-400 hover:text-white'
          }">
            ${cat}
          </button>
        `).join('')}
      </div>

      <!-- Equipment Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${filteredItems.map(equip => `
          <div class="bg-[#0a0f1a] border border-zinc-800 rounded-sm overflow-hidden hover:border-zinc-700 transition-all flex flex-col justify-between">
            <div class="aspect-video bg-[#050B15] relative overflow-hidden">
              <img src="${equip.imageUrl}" alt="${equip.name}" class="w-full h-full object-cover">
              <span class="absolute bottom-2 left-2 bg-zinc-950/80 backdrop-blur-sm border border-zinc-800/85 px-2 py-0.5 rounded-sm text-[9px] font-mono font-bold text-[#148062] uppercase">
                ${equip.category}
              </span>
            </div>
            
            <div class="p-5 space-y-4 flex-1 flex flex-col justify-between">
              <div class="space-y-3">
                <h4 class="text-xs font-bold text-white uppercase tracking-wider line-clamp-1">${equip.name}</h4>
                <div class="space-y-1 text-[10px] font-mono text-zinc-500 border-t border-zinc-850/60 pt-2">
                  ${Object.entries(equip.specifications).slice(0, 3).map(([key, val]) => `
                    <div class="flex justify-between">
                      <span class="truncate uppercase max-w-[120px]">${key}:</span>
                      <span class="text-zinc-300 font-bold truncate max-w-[150px]">${val}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
              
              <button onclick="viewEquipmentSpecs('${equip.id}')" class="w-full bg-[#148062]/10 border border-[#148062]/30 hover:bg-[#148062] hover:text-white text-[#148062] transition-colors py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-sm mt-4 cursor-pointer">
                View Full Specs Sheet
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function filterEquipmentCategory(cat) {
  activeEquipmentCategory = cat;
  renderTabContent("Equipment");
}

function viewEquipmentSpecs(equipId) {
  const equip = equipmentData.find(e => e.id === equipId);
  if (!equip) return;
  
  // Show detailed spec sheet alert/drawer/modal
  const container = document.getElementById("view-Equipment");
  container.innerHTML = `
    <div class="max-w-3xl mx-auto bg-[#0a0f1a] border border-zinc-800 rounded-lg p-6 sm:p-8 space-y-8 animate-fade-in">
      <button onclick="renderTabContent('Equipment');" class="flex items-center gap-1.5 text-[10px] text-zinc-400 hover:text-white font-bold uppercase tracking-wider border border-zinc-800 px-3.5 py-2 rounded-sm transition-all cursor-pointer">
        &larr; Back to Equipment Fleet
      </button>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-zinc-850 pb-6">
        <div class="md:col-span-8 space-y-3">
          <span class="px-2.5 py-1 bg-[#148062]/10 border border-[#148062]/20 text-[9px] font-mono text-[#148062] font-bold uppercase rounded-sm">Category: ${equip.category}</span>
          <h3 class="text-2xl font-serif font-bold text-white uppercase italic tracking-tight">${equip.name}</h3>
          <p class="text-[11px] text-zinc-500 font-sans">Full mechanical evaluation and dimensional data sheet registered to Rigas Berkeley LLC logistics networks.</p>
        </div>
        <div class="md:col-span-4 aspect-video rounded-sm overflow-hidden border border-zinc-850 bg-zinc-950">
          <img src="${equip.imageUrl}" alt="${equip.name}" class="w-full h-full object-cover">
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <h4 class="text-[10px] font-bold text-white uppercase tracking-wider font-mono border-b border-zinc-850 pb-1.5">Technical Specs Sheet</h4>
          <div class="bg-[#050B15] border border-zinc-850 rounded-sm overflow-hidden">
            <table class="w-full text-[11px] text-left">
              <tbody>
                ${Object.entries(equip.specifications).map(([key, val]) => `
                  <tr class="border-b border-zinc-850/65 last:border-b-0 hover:bg-zinc-950/40 transition-all">
                    <td class="px-4 py-2.5 text-zinc-400 font-mono uppercase bg-zinc-950/20">${key}</td>
                    <td class="px-4 py-2.5 text-white font-mono font-bold">${val}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div class="space-y-6">
          <div class="space-y-2">
            <h4 class="text-[10px] font-bold text-white uppercase tracking-wider font-mono">Specialized Integrations:</h4>
            <ul class="space-y-1.5">
              ${equip.features.map(feat => `
                <li class="flex items-center gap-2 text-xs text-zinc-400 font-sans">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#148062]"></span>
                  <span>${feat}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="space-y-2 border-t border-zinc-850 pt-4">
            <h4 class="text-[10px] font-bold text-white uppercase tracking-wider font-mono">Vetted Applications:</h4>
            <ul class="space-y-1.5">
              ${equip.applications.map(app => `
                <li class="flex items-center gap-2 text-xs text-zinc-400 font-sans">
                  <span class="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  <span>${app}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-[#050B15] border border-zinc-850 p-4 rounded-sm flex gap-3 text-[11px] leading-relaxed text-zinc-400">
        <i data-lucide="shield-alert" class="w-5 h-5 text-accent shrink-0 mt-0.5"></i>
        <div>
          <strong class="text-white">Safety Regulatory Compliance:</strong> This operational asset undergoes strict inspections after every lease return. Full digital load tests and AWS structural welding certificates are archived in the Client Portal secure vault.
        </div>
      </div>
    </div>
  `;
  lucide.createIcons();
}

// --- RENDER: SAFETY ---
function renderSafety(container) {
  container.innerHTML = `
    <div class="max-w-4xl mx-auto space-y-10">
      <div class="text-center max-w-xl mx-auto space-y-2">
        <span class="text-xs font-mono text-[#148062] uppercase tracking-widest font-bold">Absolute Mandate</span>
        <h3 class="text-2xl md:text-3xl font-serif font-bold text-white uppercase italic">Zero Harm Safety Policy</h3>
        <p class="text-xs text-zinc-400">At RIGAS BERKELEY LLC, safety is our primary metric. We hold over 1,000,000 Safe exposure hours with zero lost-time incidents across our teams.</p>
      </div>

      <!-- Three Safety Pillars -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-[#0a0f1a] border border-zinc-800 p-5 rounded-md space-y-3">
          <div class="w-10 h-10 rounded-full bg-[#148062]/10 border border-[#148062]/30 flex items-center justify-center text-[#148062]">
            <i data-lucide="shield-check" class="w-5 h-5"></i>
          </div>
          <h4 class="text-xs font-bold text-white uppercase tracking-wider font-mono">API Spec Q1 Compliant</h4>
          <p class="text-xs text-zinc-400 leading-relaxed font-sans">All management systems, inspections, and crew dispatching conform strictly to API Spec Q1 standard regulations.</p>
        </div>
        <div class="bg-[#0a0f1a] border border-zinc-800 p-5 rounded-md space-y-3">
          <div class="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
            <i data-lucide="alert-triangle" class="w-5 h-5"></i>
          </div>
          <h4 class="text-xs font-bold text-white uppercase tracking-wider font-mono">Stop Work Authority</h4>
          <p class="text-xs text-zinc-400 leading-relaxed font-sans">Every single helper, rigger, welder, or operator on our sites holds absolute, non-punitive Stop Work Authority.</p>
        </div>
        <div class="bg-[#0a0f1a] border border-zinc-800 p-5 rounded-md space-y-3">
          <div class="w-10 h-10 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
            <i data-lucide="award" class="w-5 h-5"></i>
          </div>
          <h4 class="text-xs font-bold text-white uppercase tracking-wider font-mono">ASNT Level II Evaluations</h4>
          <p class="text-xs text-zinc-400 leading-relaxed font-sans">Structural welds pass non-destructive testing (Ultrasonic/Magnetic Particle) certified by Level II technicians.</p>
        </div>
      </div>

      <!-- Critical PPE checklist desk -->
      <div class="bg-[#0a0f1a] border border-zinc-800 p-6 sm:p-8 rounded-lg space-y-6">
        <h4 class="text-sm font-bold text-white uppercase tracking-wider font-mono border-b border-zinc-850 pb-2 flex items-center gap-2">
          <i data-lucide="check-square" class="w-5 h-5 text-[#148062]"></i>
          Active Field Safety & PPE Mandates
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="flex items-start gap-3 bg-[#050B15] p-4 rounded border border-zinc-850">
            <i data-lucide="check" class="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"></i>
            <div>
              <h5 class="text-xs font-bold text-white uppercase">Daily Morning JSA Briefs</h5>
              <p class="text-[11px] text-zinc-400">Job Safety Analysis reviews conducted at our Chicago yard and offshore rig decks before any hoisting or welding operations.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 bg-[#050B15] p-4 rounded border border-zinc-850">
            <i data-lucide="check" class="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"></i>
            <div>
              <h5 class="text-xs font-bold text-white uppercase">Flame-Resistant Clothing (FRC)</h5>
              <p class="text-[11px] text-zinc-400">Mandatory dual-layer NFPA 2112 certified FRC wear at all active petrochemical refineries and onshore drill pads.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 bg-[#050B15] p-4 rounded border border-zinc-850">
            <i data-lucide="check" class="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"></i>
            <div>
              <h5 class="text-xs font-bold text-white uppercase">Impact Gloves & Steel-Toes</h5>
              <p class="text-[11px] text-zinc-400">High-vis impact-resistant gloves and ASTM impact safety steel boots mandated across all metal handling sites.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 bg-[#050B15] p-4 rounded border border-zinc-850">
            <i data-lucide="check" class="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"></i>
            <div>
              <h5 class="text-xs font-bold text-white uppercase">H2S Sensors & Breathing Packs</h5>
              <p class="text-[11px] text-zinc-400">Continuous H2S detection badges and rapid-escape self-contained breathing apparatus required for sour well zones.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  lucide.createIcons();
}

// --- RENDER: CAREERS ---
function renderCareers(container) {
  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <!-- Left: Active Postings list (Col 1-7) -->
      <div class="lg:col-span-7 space-y-6">
        <div class="space-y-2 border-b border-zinc-800 pb-3">
          <span class="text-xs font-mono text-[#148062] uppercase tracking-widest font-bold">Join the Elite Crew</span>
          <h3 class="text-2xl font-serif font-bold text-white uppercase italic">Active Operations Openings</h3>
          <p class="text-xs text-zinc-400">Rigorous safety, ASME code welding, crane operations, and global offshore fields.</p>
        </div>

        <div class="space-y-4">
          ${careerOpeningsData.map(car => `
            <div class="bg-[#0a0f1a] border border-zinc-800 p-5 rounded-md space-y-3">
              <div class="flex justify-between items-start gap-4">
                <div>
                  <h4 class="text-xs font-bold text-white uppercase tracking-wider font-display">${car.title}</h4>
                  <span class="text-[9px] font-mono text-[#148062] uppercase tracking-widest font-bold bg-[#148062]/5 px-2 py-0.5 rounded-sm border border-[#148062]/10">${car.department}</span>
                </div>
                <span class="text-[10px] font-mono text-[#ff6a00] font-bold">${car.salary}</span>
              </div>
              <p class="text-[11px] text-zinc-400 leading-relaxed font-sans">${car.details}</p>
              
              <!-- Quick apply trigger -->
              <button onclick="scrollToCareerForm('${car.title}')" class="text-[10px] font-mono text-white font-bold uppercase tracking-wider flex items-center gap-1 hover:text-[#148062] transition-colors cursor-pointer bg-transparent border-0 p-0">
                Proceed to Online Application &rarr;
              </button>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Right: Secure online intake form (Col 8-12) -->
      <div class="lg:col-span-5 bg-[#0a0f1a] border border-zinc-800 p-6 rounded-lg space-y-6" id="career-form-anchor">
        <div class="space-y-1 border-b border-zinc-800 pb-3">
          <span class="text-[10px] font-mono text-[#148062] uppercase tracking-widest block">Corporate Application Portal</span>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider font-mono">Job Intake & Resume Upload</h4>
        </div>

        <form id="career-form" onsubmit="handleCareerSubmit(event);" class="space-y-4 text-xs font-sans">
          <div class="space-y-1.5">
            <label class="font-medium text-zinc-400">Full Name *</label>
            <input type="text" id="car-name" required placeholder="e.g. John Miller" class="w-full bg-[#050B15] border border-zinc-800 rounded-sm p-2.5 text-white placeholder-zinc-600 focus:outline-none focus:border-[#148062]">
          </div>

          <div class="space-y-1.5">
            <label class="font-medium text-zinc-400">Contact Telephone *</label>
            <input type="tel" id="car-phone" required placeholder="e.g. +1 (312) 555-0192" class="w-full bg-[#050B15] border border-zinc-800 rounded-sm p-2.5 text-white placeholder-zinc-600 focus:outline-none focus:border-[#148062]">
          </div>

          <div class="space-y-1.5">
            <label class="font-medium text-zinc-400">Apply Position *</label>
            <select id="car-position" required class="w-full bg-[#050B15] border border-zinc-800 rounded-sm p-2.5 text-white focus:outline-none focus:border-[#148062] h-[38px]">
              <option value="">-- Choose Role --</option>
              ${careerOpeningsData.map(car => `
                <option value="${car.title}">${car.title}</option>
              `).join('')}
            </select>
          </div>

          <!-- Drag and drop uploader inside Career -->
          <div class="space-y-1.5">
            <label class="font-medium text-zinc-400">Upload Certifications / Resume (Optional)</label>
            <div class="border-2 border-dashed border-zinc-800 rounded-lg p-4 bg-zinc-950 flex flex-col items-center justify-center relative hover:border-zinc-700 transition-colors">
              <input type="file" id="car-file" accept=".pdf,.docx" onchange="handleCareerFile(this);" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
              <i data-lucide="upload-cloud" class="w-7 h-7 text-[#148062]/80 mb-2"></i>
              <span class="font-bold text-[11px] text-white">Drag resume or browse</span>
              <span class="text-[9px] text-zinc-500 mt-0.5">Supports PDF or DOCX up to 10MB</span>
              <div id="car-file-indicator" class="hidden mt-2 bg-zinc-900 border border-zinc-800 px-2.5 py-1 text-[9px] font-mono text-[#148062] rounded"></div>
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="flex items-start gap-2.5 cursor-pointer">
              <input type="checkbox" required class="mt-0.5 accent-[#148062]">
              <span class="text-[10px] text-zinc-500 leading-relaxed select-none">I verify that all statements are accurate and I authorize Rigas Berkeley HR representatives to review my details.</span>
            </label>
          </div>

          <button type="submit" class="w-full bg-[#148062] hover:bg-[#10674E] text-white py-3 text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  `;
  lucide.createIcons();
}

function scrollToCareerForm(positionTitle) {
  const formAnchor = document.getElementById("career-form-anchor");
  const positionSelect = document.getElementById("car-position");
  if (positionSelect) {
    positionSelect.value = positionTitle;
  }
  if (formAnchor) {
    formAnchor.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleCareerFile(input) {
  const file = input.files[0];
  const indicator = document.getElementById("car-file-indicator");
  if (file && indicator) {
    if (file.size > 10 * 1024 * 1024) {
      alert("File exceeds maximum 10MB corporate resume limit.");
      input.value = "";
      indicator.classList.add("hidden");
      return;
    }
    indicator.innerText = `ATTACHED: ${file.name} (${(file.size / (1024 * 1024)).toFixed(2)} MB)`;
    indicator.classList.remove("hidden");
  }
}

function handleCareerSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("car-name").value;
  const position = document.getElementById("car-position").value;
  
  if (!name || !position) return;
  
  const randomId = Math.floor(1000 + Math.random() * 9000);
  const trackId = `RBG-CAREER-${randomId}`;
  
  const formBox = document.getElementById("career-form-anchor");
  formBox.innerHTML = `
    <div class="text-center py-8 space-y-5 animate-fade-in text-sans">
      <div class="w-14 h-14 bg-[#148062]/10 border border-[#148062]/30 rounded-full flex items-center justify-center mx-auto text-[#148062]">
        <i data-lucide="check-circle" class="w-8 h-8"></i>
      </div>
      <div class="space-y-1.5">
        <h4 class="text-sm font-bold text-white uppercase">Application Submitted</h4>
        <p class="text-xs text-zinc-400 leading-relaxed">Your professional background has been registered to Rigas Berkeley LLC hiring pools in Chicago.</p>
      </div>
      <div class="bg-zinc-950 border border-zinc-850 p-4 rounded-sm text-left text-[10px] font-mono space-y-1">
        <div class="flex justify-between border-b border-zinc-900 pb-1.5">
          <span class="text-zinc-500">APPLICANT TRACK:</span>
          <span class="text-white font-bold">${trackId}</span>
        </div>
        <div class="flex justify-between pt-1">
          <span class="text-zinc-500">Position Applied:</span>
          <span class="text-[#148062] font-bold">${position}</span>
        </div>
      </div>
      <div class="text-[10px] text-zinc-500">Our HR coordinator will email or text you within 3 business days regarding the scheduling of your practical welding or crane evaluation tests.</div>
      <button onclick="renderTabContent('Careers');" class="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white text-xs px-5 py-2 rounded-sm transition-colors cursor-pointer">
        Return to Jobs list
      </button>
    </div>
  `;
  lucide.createIcons();
}

// --- RENDER: CLIENT PORTAL ---
function renderClientPortal(container) {
  if (!clientIsLoggedIn) {
    container.innerHTML = `
      <div class="max-w-md mx-auto bg-[#0a0f1a] border border-zinc-800 rounded-lg p-6 sm:p-8 space-y-6 text-center">
        <div class="w-12 h-12 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center text-accent mx-auto">
          <i data-lucide="lock" class="w-6 h-6"></i>
        </div>
        <div class="space-y-1.5">
          <h3 class="text-lg font-serif font-bold text-white uppercase italic">Secure Client Vault Portal</h3>
          <p class="text-xs text-zinc-400">Access ASME weld tracer, API-Q1 safety compliance logs, and derrick inspection reports.</p>
        </div>

        <form id="portal-login-form" onsubmit="handlePortalLogin(event);" class="space-y-4 text-xs font-sans text-left">
          <div class="space-y-1.5">
            <label class="font-medium text-zinc-400">Encrypted Portal Access Key *</label>
            <input type="password" id="portal-passkey" required placeholder="Enter corporate access code" class="w-full bg-[#050B15] border border-zinc-800 rounded-sm p-3 text-white placeholder-zinc-700 focus:outline-none focus:border-accent">
            <span class="text-[9px] text-zinc-600 block leading-normal">Enter demo credentials: <strong class="text-zinc-400">Washtenaw2026</strong> or <strong class="text-zinc-400">RB-Chicago</strong></span>
          </div>
          <button type="submit" class="w-full bg-accent hover:bg-[#e05d00] text-white py-3 text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center">
            Authenticate & Open Vault
          </button>
        </form>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  // Logged-in state view: Complete directory logs, search filters, dragging uploader simulation
  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left side: Document uploader (Col 1-4) -->
      <div class="lg:col-span-4 bg-[#0a0f1a] border border-zinc-800 p-5 rounded-md space-y-5">
        <div class="space-y-1 border-b border-zinc-850 pb-3">
          <div class="flex justify-between items-center">
            <span class="text-[9px] font-mono text-[#148062] uppercase tracking-widest font-bold">Encrypted Vault</span>
            <button onclick="handlePortalLogout();" class="text-[10px] font-mono text-accent hover:underline uppercase bg-transparent border-0 p-0 cursor-pointer">Lock Session</button>
          </div>
          <h4 class="text-xs font-bold text-white uppercase tracking-wider font-mono">Secure Document Dispatch</h4>
        </div>

        <!-- Drag drop uploader inside Portal -->
        <div class="border-2 border-dashed border-zinc-800 rounded-lg p-5 bg-zinc-950 flex flex-col items-center justify-center relative hover:border-zinc-700 transition-colors">
          <input type="file" id="portal-upload-input" accept=".pdf,.docx,.xlsx" onchange="handlePortalUpload(this);" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
          <i data-lucide="upload-cloud" class="w-8 h-8 text-[#148062] mb-2"></i>
          <span class="font-bold text-[11px] text-white">Drag design drawings here</span>
          <span class="text-[9px] text-zinc-500 mt-1">Supports PDF, DOCX, XLSX up to 15MB</span>
          <div id="portal-upload-status" class="hidden mt-2 bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-[9px] font-mono text-[#148062] rounded"></div>
        </div>

        <div class="bg-[#050B15] border border-zinc-850 p-3.5 rounded-sm text-[10px] leading-relaxed text-zinc-500 font-sans space-y-2">
          <div class="flex items-center gap-1.5 text-zinc-400 font-bold uppercase font-mono">
            <i data-lucide="lock" class="w-3.5 h-3.5 text-[#148062]"></i>
            SSL Encryption Active
          </div>
          <p>This dynamic uploader logs custom inspection sheets to Rigas Berkeley's auditing database. Submissions undergo immediate engineering review.</p>
        </div>
      </div>

      <!-- Right side: Documents table directories list (Col 5-12) -->
      <div class="lg:col-span-8 bg-[#0a0f1a] border border-zinc-800 p-6 rounded-lg space-y-6">
        <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-zinc-850 pb-4">
          <div class="space-y-1">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Client Auditing Directory</span>
            <h4 class="text-lg font-serif font-bold text-white uppercase italic">Active Compliance Dossiers</h4>
          </div>
          <!-- Filter search box inside Portal -->
          <div class="relative w-full sm:w-64">
            <input type="text" id="portal-doc-search" oninput="filterPortalDocs(this.value);" placeholder="Filter dossiers..." class="w-full bg-[#050B15] border border-zinc-850 rounded-sm py-2 pl-3.5 pr-8 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-[#148062]">
            <i data-lucide="filter" class="absolute right-2.5 top-2.5 w-3.5 h-3.5 text-zinc-600"></i>
          </div>
        </div>

        <div class="table-scroll">
          <table class="w-full text-[11px] font-sans text-left border-collapse">
            <thead>
              <tr class="border-b border-zinc-850 text-zinc-500 font-mono uppercase tracking-wider text-[10px] bg-zinc-950/20">
                <th class="px-4 py-3 font-semibold">Document Name</th>
                <th class="px-4 py-3 font-semibold">Classification</th>
                <th class="px-4 py-3 font-semibold">Uploaded At</th>
                <th class="px-4 py-3 font-semibold text-center">Audit Status</th>
                <th class="px-4 py-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody id="portal-docs-tbody">
              <!-- Injected by script.js -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
  renderPortalDocsList();
  lucide.createIcons();
}

function handlePortalLogin(e) {
  e.preventDefault();
  const code = document.getElementById("portal-passkey").value;
  if (code === "Washtenaw2026" || code === "RB-Chicago") {
    clientIsLoggedIn = true;
    renderTabContent("Client Portal");
  } else {
    alert("Authentication failed: Access passkey invalid. Please verify the code.");
  }
}

function handlePortalLogout() {
  clientIsLoggedIn = false;
  renderTabContent("Client Portal");
}

function renderPortalDocsList(filter = "") {
  const tbody = document.getElementById("portal-docs-tbody");
  if (!tbody) return;

  const filteredDocs = clientDocs.filter(d => 
    d.name.toLowerCase().includes(filter.toLowerCase()) || 
    (d.category && d.category.toLowerCase().includes(filter.toLowerCase()))
  );

  if (filteredDocs.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="px-4 py-8 text-center text-zinc-500 italic">No matching compliance documents found.</td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filteredDocs.map(doc => {
    let statusClass = "text-amber-400 bg-amber-500/10 border border-amber-500/20";
    if (doc.status === 'Approved') {
      statusClass = "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20";
    }
    
    return `
      <tr class="border-b border-zinc-850/50 hover:bg-zinc-950/30 transition-all">
        <td class="px-4 py-3.5 font-medium text-white max-w-xs truncate" title="${doc.name}">
          <div class="flex items-center gap-2">
            <i data-lucide="file-text" class="w-4 h-4 text-zinc-500"></i>
            <div class="truncate">
              <div>${doc.name}</div>
              <div class="text-[9px] text-zinc-600 font-mono">${doc.size}</div>
            </div>
          </div>
        </td>
        <td class="px-4 py-3.5 text-zinc-400 font-mono text-[10px]">${doc.category || 'General Log'}</td>
        <td class="px-4 py-3.5 text-zinc-500 font-mono text-[10px]">${doc.uploadedAt}</td>
        <td class="px-4 py-3.5 text-center">
          <span class="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase ${statusClass}">
            ${doc.status || 'Pending Review'}
          </span>
        </td>
        <td class="px-4 py-3.5 text-right font-mono">
          <div class="flex items-center justify-end gap-2">
            <button onclick="downloadPortalDoc('${doc.name}');" class="p-1 bg-[#148062]/10 hover:bg-[#148062] hover:text-white border border-[#148062]/20 rounded transition-colors text-[#148062]" title="Download Secure Archive">
              <i data-lucide="download" class="w-3.5 h-3.5"></i>
            </button>
            <button onclick="deletePortalDoc('${doc.id}');" class="p-1 bg-red-500/10 hover:bg-red-500 hover:text-white border border-red-500/20 rounded transition-colors text-red-400" title="Revoke Dossier">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
  lucide.createIcons();
}

function filterPortalDocs(val) {
  renderPortalDocsList(val);
}

function handlePortalUpload(input) {
  const file = input.files[0];
  const statusIndicator = document.getElementById("portal-upload-status");
  if (file && statusIndicator) {
    if (file.size > 15 * 1024 * 1024) {
      alert("Error: Drawing file size exceeds maximum 15MB limit.");
      input.value = "";
      return;
    }
    
    // Simulate upload success
    statusIndicator.innerText = `UPLOADING: ${file.name}...`;
    statusIndicator.classList.remove("hidden");
    
    setTimeout(() => {
      const today = new Date().toISOString().split('T')[0];
      const newDoc = {
        id: `doc-${Date.now()}`,
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        uploadedAt: today,
        status: "Pending Verification",
        category: file.name.endsWith('.xlsx') ? "Engineering Spec" : "Inspection Checklist"
      };
      
      clientDocs.unshift(newDoc);
      input.value = "";
      statusIndicator.innerText = `SUCCESSFULLY DISPATCHED`;
      
      setTimeout(() => {
        statusIndicator.classList.add("hidden");
        renderPortalDocsList();
      }, 1000);
    }, 1200);
  }
}

function downloadPortalDoc(docName) {
  alert(`Secure Download Triggered:\nInitializing SSL decryption protocol for file archive:\n"${docName}"`);
}

function deletePortalDoc(docId) {
  if (confirm("Confirm: Are you sure you want to revoke this file from the secure auditing directory?")) {
    clientDocs = clientDocs.filter(d => d.id !== docId);
    renderPortalDocsList();
  }
}

// --- RENDER: CONTACT ---
function renderContact(container) {
  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
      <!-- Left side: Form & Coordinates (Col 1-7) -->
      <div class="md:col-span-7 space-y-6">
        <div class="space-y-2 border-b border-zinc-800 pb-3">
          <span class="text-xs font-mono text-[#148062] uppercase tracking-widest font-bold">24/7 Dispatch Desk</span>
          <h3 class="text-2xl font-serif font-bold text-white uppercase italic">Central Dispatcher Coordination</h3>
          <p class="text-xs text-zinc-400">Rigas Berkeley LLC maintains 24/7 communications for emergency turnarounds and leasing requests.</p>
        </div>

        <form id="contact-inquiry-form" onsubmit="handleContactSubmit(event);" class="space-y-4 text-xs font-sans">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="font-medium text-zinc-400">Your Full Name *</label>
              <input type="text" id="con-name" required placeholder="e.g. Robert Vance" class="w-full bg-[#050B15] border border-zinc-800 p-2.5 text-white placeholder-zinc-700 focus:outline-none focus:border-[#148062] rounded-sm">
            </div>
            <div class="space-y-1.5">
              <label class="font-medium text-zinc-400">Business Email *</label>
              <input type="email" id="con-email" required placeholder="operations@company.com" class="w-full bg-[#050B15] border border-zinc-800 p-2.5 text-white placeholder-zinc-700 focus:outline-none focus:border-[#148062] rounded-sm">
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="font-medium text-zinc-400">Inquiry Subject *</label>
            <input type="text" id="con-subject" required placeholder="Emergency turnaround or equipment rental" class="w-full bg-[#050B15] border border-zinc-800 p-2.5 text-white placeholder-zinc-700 focus:outline-none focus:border-[#148062] rounded-sm">
          </div>

          <div class="space-y-1.5">
            <label class="font-medium text-zinc-400">Detailed Message *</label>
            <textarea id="con-message" required rows="4" placeholder="Detail your project specifications or derrick alloy prefabs..." class="w-full bg-[#050B15] border border-zinc-800 p-2.5 text-white placeholder-zinc-700 focus:outline-none focus:border-[#148062] rounded-sm resize-none"></textarea>
          </div>

          <button type="submit" class="bg-[#148062] hover:bg-[#10674E] text-white px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer">
            Transmit Secure Message
          </button>
        </form>
      </div>

      <!-- Right side: Map cards (Col 8-12) -->
      <div class="md:col-span-5 bg-[#0a0f1a] border border-zinc-800 p-6 rounded-lg space-y-6">
        <h4 class="text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-850 pb-2 font-mono">Chicago Fabrication Offices</h4>
        
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <i data-lucide="map-pin" class="w-4 h-4 text-[#148062] shrink-0 mt-0.5"></i>
            <div class="text-xs text-zinc-300">
              <p class="font-bold text-white">Central Steel & Rig Yard</p>
              <p>6412 N. WASHTENAW</p>
              <p>CHICAGO, IL 60645-0000</p>
            </div>
          </div>
          
          <div class="flex items-center gap-3 border-t border-zinc-850 pt-3">
            <i data-lucide="phone" class="w-4 h-4 text-[#148062] shrink-0"></i>
            <div class="text-xs text-zinc-300">
              <p class="font-bold text-white">Dispatcher Hotlines</p>
              <p class="font-mono">+1 (312) 217-3841</p>
            </div>
          </div>

          <div class="flex items-center gap-3 border-t border-zinc-850 pt-3">
            <i data-lucide="mail" class="w-4 h-4 text-[#148062] shrink-0"></i>
            <div class="text-xs text-zinc-300">
              <p class="font-bold text-white">Direct Operations Email</p>
              <p class="font-mono">support@rigasberkeley.com</p>
            </div>
          </div>
        </div>

        <!-- Custom Mock Map Illustration (SVG) -->
        <div class="aspect-video w-full rounded bg-zinc-950 border border-zinc-850 flex items-center justify-center p-3 relative overflow-hidden">
          <svg viewBox="0 0 300 150" class="w-full h-full text-zinc-800">
            <rect width="300" height="150" fill="#020617" />
            <line x1="50" y1="0" x2="50" y2="150" stroke="#0f172a" stroke-width="1.5" />
            <line x1="180" y1="0" x2="180" y2="150" stroke="#0f172a" stroke-width="1.5" />
            <line x1="0" y1="70" x2="300" y2="70" stroke="#0f172a" stroke-width="1.5" />
            <!-- N Washtenaw label -->
            <text x="60" y="40" fill="#475569" font-size="7" font-family="Arial">N. WASHTENAW AVE</text>
            <text x="190" y="110" fill="#475569" font-size="7" font-family="Arial">W. DEVON AVE</text>
            <!-- Rigas Berkeley Yard pointer -->
            <circle cx="180" cy="70" r="10" class="animate-pulse-glow" fill="none" stroke="#148062" stroke-width="1" />
            <circle cx="180" cy="70" r="3.5" fill="#148062" />
            <text x="195" y="68" fill="white" font-size="7" font-family="Arial" font-weight="bold">RBG CHICAGO YARD</text>
          </svg>
        </div>
      </div>
    </div>
  `;
  lucide.createIcons();
}

function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("con-name").value;
  if (!name) return;
  alert(`Transmission Successful:\nHello ${name}, your corporate inquiry has been securely catalogued.\nOur dispatcher desk will contact your representatives within 2 hours.`);
  document.getElementById("contact-inquiry-form").reset();
}

// --- RENDER: PRIVACY POLICY ---
function renderPrivacyPolicy(container) {
  container.innerHTML = `
    <div class="max-w-3xl mx-auto bg-[#0a0f1a] border border-zinc-800 p-6 sm:p-8 rounded-lg space-y-6 font-sans text-xs text-zinc-400 leading-relaxed">
      <h3 class="text-xl font-serif font-bold text-white uppercase italic border-b border-zinc-850 pb-3">Digital Compliance & Privacy Policy</h3>
      <p class="text-[11px] font-mono text-zinc-500">Last Revised: February 25, 2026 | RIGAS BERKELEY LLC</p>
      
      <div class="space-y-4">
        <h4 class="text-xs font-bold text-white uppercase font-mono">1. Encrypted Document Transmission</h4>
        <p>All blueprints, specifications, ASME certificates of insurance, and CAD technical drawings uploaded via our Secure Vault Client Portal are encrypted in transit via SSL protocols. Rigas Berkeley LLC guarantees complete data protection and will never share corporate assets with external third parties without explicit authorization.</p>
      </div>

      <div class="space-y-4">
        <h4 class="text-xs font-bold text-white uppercase font-mono">2. Cookie Policy & Portal Memory</h4>
        <p>Our platform uses secure, lightweight client-side memory (such as sessionStorage) exclusively to maintain client portal authentication state. This prevents security leaks and preserves session integrity. No tracking cookies are deployed on your device.</p>
      </div>

      <div class="space-y-4">
        <h4 class="text-xs font-bold text-white uppercase font-mono">3. Industrial Regulatory Standards</h4>
        <p>All operations comply with standard API Spec Q1, ISO 9001 quality systems, and general OSHA directives. Inquiries, drawings, and applications are processed directly by our central Chicago coordinating core.</p>
      </div>

      <button onclick="navigateToTab('Home');" class="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white text-xs px-5 py-2 rounded-sm transition-colors cursor-pointer">
        Return to Home Page
      </button>
    </div>
  `;
}


// ==================== 5. GLOBAL SEARCH ENGINE ====================

function toggleSearchBox() {
  const dropdown = document.getElementById("search-dropdown");
  if (dropdown) {
    dropdown.classList.toggle("hidden");
    const input = document.getElementById("search-input");
    if (!dropdown.classList.contains("hidden") && input) {
      input.focus();
    }
  }
}

function handleSearch(query) {
  const resultsDiv = document.getElementById("search-results");
  if (!resultsDiv) return;

  if (!query.trim()) {
    resultsDiv.innerHTML = `<p class="text-zinc-500 italic text-center py-2">Type to search catalog...</p>`;
    return;
  }

  // Combine services & equipment
  const results = [];
  
  servicesData.forEach(s => {
    if (s.title.toLowerCase().includes(query.toLowerCase()) || s.desc.toLowerCase().includes(query.toLowerCase())) {
      results.push({ title: s.title, subtitle: `Service - ${s.category}`, action: `navigateToTab('Services'); filterServicesCategory('${s.category}');` });
    }
  });

  equipmentData.forEach(e => {
    if (e.name.toLowerCase().includes(query.toLowerCase()) || e.category.toLowerCase().includes(query.toLowerCase())) {
      results.push({ title: e.name, subtitle: `Equipment - ${e.category}`, action: `navigateToTab('Equipment'); viewEquipmentSpecs('${e.id}');` });
    }
  });

  if (results.length === 0) {
    resultsDiv.innerHTML = `<p class="text-zinc-500 italic text-center py-2">No matching specifications found.</p>`;
    return;
  }

  resultsDiv.innerHTML = results.map(res => `
    <div onclick="${res.action}; toggleSearchBox();" class="p-2 hover:bg-[#148062]/10 border border-transparent hover:border-[#148062]/30 rounded cursor-pointer transition-all">
      <div class="font-bold text-white truncate">${res.title}</div>
      <div class="text-[9px] font-mono text-zinc-500">${res.subtitle}</div>
    </div>
  `).join('');
}

// Mobile Search Actions
function handleMobileSearch(query) {
  const resultsDiv = document.getElementById("mobile-search-results");
  if (!resultsDiv) return;

  if (!query.trim()) {
    resultsDiv.classList.add("hidden");
    return;
  }

  const results = [];
  servicesData.forEach(s => {
    if (s.title.toLowerCase().includes(query.toLowerCase())) {
      results.push({ title: s.title, category: s.category, action: `navigateToTab('Services'); filterServicesCategory('${s.category}');` });
    }
  });
  equipmentData.forEach(e => {
    if (e.name.toLowerCase().includes(query.toLowerCase())) {
      results.push({ title: e.name, category: e.category, action: `navigateToTab('Equipment'); viewEquipmentSpecs('${e.id}');` });
    }
  });

  if (results.length === 0) {
    resultsDiv.innerHTML = `<p class="text-zinc-600 text-center py-2 text-[10px]">No results.</p>`;
    resultsDiv.classList.remove("hidden");
    return;
  }

  resultsDiv.innerHTML = results.map(res => `
    <div onclick="${res.action}; toggleMobileMenu();" class="p-2.5 hover:bg-zinc-900 border-b border-zinc-900 cursor-pointer text-[10px]">
      <div class="font-bold text-white truncate">${res.title}</div>
      <div class="text-[9px] font-mono text-[#148062]">${res.category}</div>
    </div>
  `).join('');
  resultsDiv.classList.remove("hidden");
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}


// ==================== 6. GENERAL RFP ESTIMATION MODAL ====================

let activeQuoteServiceId = "";

function openQuoteModal(serviceId = "") {
  activeQuoteServiceId = serviceId;
  const modal = document.getElementById("quote-modal");
  const content = document.getElementById("quote-modal-content");
  
  if (modal && content) {
    modal.classList.remove("hidden");
    renderQuoteForm(content);
  }
}

function closeQuoteModal() {
  const modal = document.getElementById("quote-modal");
  if (modal) {
    modal.classList.add("hidden");
  }
}

function renderQuoteForm(container) {
  container.innerHTML = `
    <form id="rfp-form" onsubmit="handleQuoteSubmit(event);" class="space-y-4 text-xs font-sans text-left">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="space-y-1.5">
          <label class="font-medium text-zinc-400">Full Name *</label>
          <input type="text" id="rfp-name" required placeholder="Robert Vance" class="w-full bg-[#050B15] border border-zinc-800 p-2.5 text-white placeholder-zinc-700 focus:outline-none focus:border-[#ff6a00] rounded-sm">
        </div>
        <div class="space-y-1.5">
          <label class="font-medium text-zinc-400">Company Name *</label>
          <input type="text" id="rfp-company" required placeholder="Triton Energy Partners" class="w-full bg-[#050B15] border border-zinc-800 p-2.5 text-white placeholder-zinc-700 focus:outline-none focus:border-[#ff6a00] rounded-sm">
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="space-y-1.5">
          <label class="font-medium text-zinc-400">Business Email *</label>
          <input type="email" id="rfp-email" required placeholder="operations@company.com" class="w-full bg-[#050B15] border border-zinc-800 p-2.5 text-white placeholder-zinc-700 focus:outline-none focus:border-[#ff6a00] rounded-sm">
        </div>
        <div class="space-y-1.5">
          <label class="font-medium text-zinc-400">Corporate Telephone *</label>
          <input type="tel" id="rfp-phone" required placeholder="+1 (312) 555-0192" class="w-full bg-[#050B15] border border-zinc-800 p-2.5 text-white placeholder-zinc-700 focus:outline-none focus:border-[#ff6a00] rounded-sm">
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="space-y-1.5">
          <label class="font-medium text-zinc-400">Service Focus *</label>
          <select id="rfp-service" required class="w-full bg-[#050B15] border border-zinc-800 p-2.5 text-white focus:outline-none focus:border-[#ff6a00] h-[38px] rounded-sm">
            <option value="">-- Choose Category --</option>
            ${servicesData.map(s => `
              <option value="${s.id}" ${activeQuoteServiceId === s.id ? 'selected' : ''}>${s.title}</option>
            `).join('')}
            <option value="custom">Custom Fabrication Yard Work</option>
          </select>
        </div>
        <div class="space-y-1.5">
          <label class="font-medium text-zinc-400">Budget Range</label>
          <select id="rfp-budget" class="w-full bg-[#050B15] border border-zinc-800 p-2.5 text-white focus:outline-none focus:border-[#ff6a00] h-[38px] rounded-sm">
            <option value="100k-500k">$100k - $500k USD</option>
            <option value="500k-2m">$500k - $2M USD</option>
            <option value="over-2m">Over $2M USD</option>
          </select>
        </div>
        <div class="space-y-1.5">
          <label class="font-medium text-zinc-400">Mobilization Schedule</label>
          <select id="rfp-timeline" class="w-full bg-[#050B15] border border-zinc-800 p-2.5 text-white focus:outline-none focus:border-[#ff6a00] h-[38px] rounded-sm">
            <option value="immediate">Immediate (1-3 Mo)</option>
            <option value="quarterly">Quarterly (3-6 Mo)</option>
            <option value="planning">Strategic Planning (6+ Mo)</option>
          </select>
        </div>
      </div>

      <div class="space-y-1.5">
        <label class="font-medium text-zinc-400">RFP Project Scope & Requirements *</label>
        <textarea id="rfp-desc" required rows="3" placeholder="Specify derrick height, ASME alloys, heavy rigging crawler cranes, or shipping deadlines..." class="w-full bg-[#050B15] border border-zinc-800 p-2.5 text-white placeholder-zinc-700 focus:outline-none focus:border-[#ff6a00] rounded-sm resize-none"></textarea>
      </div>

      <div class="space-y-1.5">
        <label class="font-medium text-zinc-400">Attach Technical Drawings / CAD brief (Optional)</label>
        <div class="border border-dashed border-zinc-800 rounded p-3 bg-zinc-950 flex flex-col items-center justify-center relative hover:border-zinc-700 transition-colors">
          <input type="file" id="rfp-file" accept=".pdf,.docx,.xlsx" onchange="handleRfpFile(this);" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
          <i data-lucide="upload-cloud" class="w-6 h-6 text-[#148062] mb-1"></i>
          <span class="font-bold text-[10px] text-white">Upload layout specifications</span>
          <div id="rfp-file-indicator" class="hidden mt-1.5 bg-zinc-900 border border-zinc-850 px-2 py-0.5 text-[8px] font-mono text-[#148062] rounded"></div>
        </div>
      </div>

      <div class="space-y-1">
        <label class="flex items-start gap-2.5 cursor-pointer">
          <input type="checkbox" required class="mt-0.5 accent-[#ff6a00]">
          <span class="text-[10px] text-zinc-500 leading-relaxed select-none">I verify that our organization holds comprehensive liability insurance and requests Rigas Berkeley to compile a formal operational proposal.</span>
        </label>
      </div>

      <div class="flex justify-end gap-2.5 border-t border-zinc-800 pt-3.5">
        <button type="button" onclick="closeQuoteModal();" class="px-4 py-2 bg-transparent text-zinc-400 hover:text-white transition-colors">Cancel</button>
        <button type="submit" class="bg-accent hover:bg-[#e05d00] text-white px-5 py-2 rounded-lg font-bold font-mono uppercase tracking-wider transition-colors cursor-pointer text-center">
          Transmit Specification RFP
        </button>
      </div>
    </form>
  `;
  lucide.createIcons();
}

function handleRfpFile(input) {
  const file = input.files[0];
  const indicator = document.getElementById("rfp-file-indicator");
  if (file && indicator) {
    if (file.size > 15 * 1024 * 1024) {
      alert("Error: Attachment file exceeds 15MB design specification limit.");
      input.value = "";
      indicator.classList.add("hidden");
      return;
    }
    indicator.innerText = `ATTACHED SPEC: ${file.name}`;
    indicator.classList.remove("hidden");
  }
}

function handleQuoteSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("rfp-name").value;
  const company = document.getElementById("rfp-company").value;
  const service = document.getElementById("rfp-service").value;
  const budget = document.getElementById("rfp-budget").value;
  
  if (!name || !company || !service) return;

  const randomId = Math.floor(1000 + Math.random() * 9000);
  const code = `RBG-2026-${randomId}`;

  const container = document.getElementById("quote-modal-content");
  container.innerHTML = `
    <div class="text-center py-6 space-y-5 text-sans">
      <div class="w-14 h-14 bg-accent/10 border border-accent/30 rounded-full flex items-center justify-center mx-auto text-accent">
        <i data-lucide="check-circle" class="w-8 h-8"></i>
      </div>
      <div class="space-y-1.5">
        <h4 class="text-base font-bold text-white uppercase">RFP CASE REGISTERED SUCCESSFULLY</h4>
        <p class="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">Your project layout has been logged securely. Our heavy operations desk in Chicago is auditing the specifications.</p>
      </div>

      <div class="bg-zinc-950 border border-zinc-850 p-4 rounded-md text-left text-[11px] font-mono space-y-2 max-w-sm mx-auto">
        <div class="flex justify-between border-b border-zinc-900 pb-1.5">
          <span class="text-zinc-500">CASE TRACKING:</span>
          <span class="text-white font-bold">${code}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-zinc-500">Client Firm:</span>
          <span class="text-zinc-300 font-bold">${company}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-zinc-500">Assigned Desk:</span>
          <span class="text-[#148062] font-bold">Chicago Estimating Core</span>
        </div>
      </div>

      <p class="text-[10px] text-zinc-500 max-w-md mx-auto">A detailed estimate and preliminary CAD analysis will be dispatched to <span class="text-zinc-300 font-bold">${document.getElementById("rfp-email").value}</span> within 24 business hours.</p>
      
      <button onclick="closeQuoteModal();" class="bg-[#148062] hover:bg-[#10674E] text-white px-5 py-2 rounded-sm transition-colors cursor-pointer text-xs font-bold uppercase tracking-wider">
        Return to Website
      </button>
    </div>
  `;
  lucide.createIcons();
}


// ==================== 7. PHOTO GALLERY LIGHTBOX SYSTEM ====================

// Injected into Home & Services view of gallery Data
function renderGallery(container) {
  // We can render a neat photo gallery grids panel
  container.innerHTML = `
    <div class="space-y-8">
      <div class="text-center max-w-xl mx-auto space-y-2">
        <span class="text-xs font-mono text-[#148062] uppercase tracking-widest font-bold">Visual Archives</span>
        <h3 class="text-2xl md:text-3xl font-serif font-bold text-white uppercase italic">Active Operations Gallery</h3>
        <p class="text-xs text-zinc-400">Historical logs and photographs from active onshore steel yards and offshore energy construction vessels.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${galleryData.map((img, idx) => `
          <div onclick="openLightbox(${idx});" class="bg-[#0a0f1a] border border-zinc-800 rounded-sm overflow-hidden cursor-pointer hover:border-zinc-700 transition-all group">
            <div class="aspect-video bg-[#050B15] relative overflow-hidden">
              <img src="${img.imageUrl}" alt="${img.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <span class="absolute bottom-2 left-2 bg-zinc-950/80 backdrop-blur-sm border border-zinc-800/80 px-2 py-0.5 rounded text-[8px] font-mono font-bold text-zinc-400 uppercase">
                ${img.category}
              </span>
            </div>
            <div class="p-4 space-y-1">
              <h4 class="text-xs font-bold text-white uppercase tracking-wide group-hover:text-[#148062] transition-colors">${img.title}</h4>
              <p class="text-[10px] text-zinc-500 line-clamp-1">${img.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderNews(container) {
  container.innerHTML = `
    <div class="space-y-8">
      <div class="text-center max-w-xl mx-auto space-y-2">
        <span class="text-xs font-mono text-[#148062] uppercase tracking-widest font-bold">Corporate Pressroom</span>
        <h3 class="text-2xl md:text-3xl font-serif font-bold text-white uppercase italic">Operations & Compliance News</h3>
        <p class="text-xs text-zinc-400">Read the latest reports on safety records, rigging equipment updates, and polar transport logistics.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${newsArticlesData.map(art => `
          <div class="bg-[#0a0f1a] border border-zinc-800 rounded-sm overflow-hidden flex flex-col justify-between">
            <div class="aspect-video bg-[#050B15] relative overflow-hidden">
              <img src="${art.imageUrl}" alt="${art.title}" class="w-full h-full object-cover">
              <span class="absolute top-2 left-2 bg-[#050B15]/80 backdrop-blur-sm border border-zinc-800 px-2 py-0.5 rounded text-[8px] font-mono font-bold text-zinc-400 uppercase">
                ${art.category}
              </span>
            </div>
            <div class="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div class="space-y-2">
                <span class="text-[9px] font-mono text-zinc-500">${art.date} | by ${art.author}</span>
                <h4 class="text-xs font-bold text-white uppercase tracking-wide leading-tight line-clamp-2">${art.title}</h4>
                <p class="text-[11px] text-zinc-400 leading-relaxed font-sans line-clamp-3">${art.summary}</p>
              </div>
              <button onclick="viewNewsDetail('${art.id}');" class="text-left text-[10px] font-mono text-[#148062] font-bold uppercase tracking-wider mt-4 block bg-transparent border-0 p-0 cursor-pointer">
                Read Full Report &rarr;
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function viewNewsDetail(artId) {
  const art = newsArticlesData.find(a => a.id === artId);
  if (!art) return;

  const container = document.getElementById("view-News");
  container.innerHTML = `
    <div class="max-w-2xl mx-auto bg-[#0a0f1a] border border-zinc-800 rounded-lg p-6 sm:p-8 space-y-6 animate-fade-in text-sans">
      <button onclick="renderTabContent('News');" class="flex items-center gap-1.5 text-[10px] text-zinc-400 hover:text-white font-bold uppercase tracking-wider border border-zinc-800 px-3.5 py-2 rounded-sm transition-all cursor-pointer">
        &larr; Back to Newsroom
      </button>

      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-[#148062]/10 border border-[#148062]/20 text-[9px] font-mono text-[#148062] font-bold uppercase rounded-sm">${art.category}</span>
          <span class="text-[10px] font-mono text-zinc-500">${art.date} | ${art.readTime}</span>
        </div>
        <h3 class="text-xl sm:text-2xl font-serif font-bold text-white uppercase italic tracking-tight leading-tight">${art.title}</h3>
        <p class="text-xs font-mono text-zinc-500">Report Compiled by: ${art.author}</p>
      </div>

      <div class="aspect-video w-full rounded overflow-hidden border border-zinc-850">
        <img src="${art.imageUrl}" alt="${art.title}" class="w-full h-full object-cover">
      </div>

      <div class="text-xs text-zinc-300 leading-relaxed font-sans space-y-4 pt-2">
        <p class="font-bold text-white">${art.summary}</p>
        <p>${art.content}</p>
      </div>
    </div>
  `;
}

function openLightbox(idx) {
  currentLightboxIdx = idx;
  const modal = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const title = document.getElementById("lightbox-title");
  const desc = document.getElementById("lightbox-desc");
  const counter = document.getElementById("lightbox-counter");
  
  if (modal && img) {
    const data = galleryData[currentLightboxIdx];
    img.src = data.imageUrl;
    title.innerText = data.title;
    desc.innerText = data.description;
    counter.innerText = `ASSET ${currentLightboxIdx + 1} OF ${galleryData.length} | CLASSIFIED LOG`;
    
    modal.classList.remove("hidden");
  }
}

function closeLightbox() {
  const modal = document.getElementById("lightbox");
  if (modal) modal.classList.add("hidden");
}

function prevLightboxImage() {
  currentLightboxIdx = (currentLightboxIdx - 1 + galleryData.length) % galleryData.length;
  openLightbox(currentLightboxIdx);
}

// Global hotkeys or triggers
function nextLightboxImage() {
  currentLightboxIdx = (currentLightboxIdx + 1) % galleryData.length;
  openLightbox(currentLightboxIdx);
}


// ==================== 8. CORE INITIALIZATION ====================

window.addEventListener("DOMContentLoaded", () => {
  // Initialize Header Navigation Links
  initNavigation();
  
  // Initially navigate to Home tab
  navigateToTab("Home");
});
