/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Service,
  Project,
  Industry,
  Equipment,
  CareerOpening,
  NewsArticle,
  GalleryItem,
  Testimonial,
  FAQItem,
  ClientDocument
} from './types';

// @ts-ignore
import gallery1 from './assets/images/gallery_worker_welder_1784077967150.jpg';
// @ts-ignore
import gallery2 from './assets/images/gallery_drilling_auger_1784077978544.jpg';
// @ts-ignore
import gallery3 from './assets/images/gallery_safety_audit_1784077991793.jpg';
// @ts-ignore
import gallery4 from './assets/images/gallery_crane_lift_1784078006271.jpg';
// @ts-ignore
import gallery5 from './assets/images/gallery_drill_floor_1784078019077.jpg';

// Company start year: 2020
// Address: 6412 N. WASHTENAW, CHICAGO, IL 60645-0000
// Phone: +1 (312) 217-3841

export const companyDetails = {
  name: "RIGAS BERKELEY LLC",
  shortName: "Rigas Berkeley",
  founded: 2020,
  address: "6412 N. WASHTENAW, CHICAGO, IL 60645-0000",
  phone: "+1 (312) 217-3841",
  email: "operations@rigasberkeley.com",
  portalEmail: "portal-security@rigasberkeley.com",
  hours: {
    weekly: "Mon - Fri: 8:00 AM - 5:00 PM CST",
    emergency: "24/7 Emergency Dispatch Support"
  }
};

export const servicesData: Service[] = [
  {
    id: "rig-installation",
    title: "Rig Installation",
    shortDescription: "Precision installation and commissioning of onshore and offshore drilling structures and modular platforms.",
    detailedDescription: "RIGAS BERKELEY LLC specializes in the full-cycle deployment of sophisticated drilling systems. From initial structural layout to structural component assembly, structural integrity tests, and mechanical rigging, our team coordinates state-of-the-art hoisting methods. We manage structural alignment down to millimeter tolerance, ensuring absolute safety before structural commissioning.",
    features: [
      "Rig assembly and site prep engineering",
      "Offshore modular lift logistics coordination",
      "Structural steel integrity verification",
      "Commissioning and mechanical completion testing"
    ],
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    category: "Drilling & Construction"
  },
  {
    id: "rig-maintenance",
    title: "Rig Maintenance",
    shortDescription: "Comprehensive turnaround, structure reinforcement, and mechanical overhaul of industrial rigs.",
    detailedDescription: "Ensuring near-zero unplanned downtime through deep inspection, part replacement, and system overhauls. We specialize in dynamic structures, drilling motors, drawworks, and top drives, performing major inspections, stress-strain analysis, and component replacement on-site without causing major timeline shifts.",
    features: [
      "Top drive and drawworks overhauls",
      "Structure-fatigue ultrasonic testing",
      "Turnaround and shutdown scheduling",
      "Subsea hydraulic unit servicing"
    ],
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    category: "Drilling & Construction"
  },
  {
    id: "drilling-support",
    title: "Drilling Support",
    shortDescription: "Advanced mechanical, logistical, and technical operational assistance throughout the drilling lifecycle.",
    detailedDescription: "We provide experienced rig-floor operators, mud technicians, mud logging support, directional drilling monitoring, and downhole tool maintenance. Our engineers assist your drilling supervisors in maximizing rate of penetration (ROP) while strictly managing bottom-hole pressure and fluid integrity.",
    features: [
      "Directional drilling support staff",
      "Downhole tool preparation and testing",
      "Drilling fluid density monitoring and mud logging",
      "ROP optimization and pressure engineering"
    ],
    imageUrl: "https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&q=80&w=800",
    category: "Drilling & Construction"
  },
  {
    id: "heavy-equipment-rental",
    title: "Heavy Equipment Rental",
    shortDescription: "Premium inventory of heavy-duty cranes, industrial excavators, large generators, and high-pressure compressors.",
    detailedDescription: "RIGAS BERKELEY LLC owns and operates a pristine fleet of modern construction and oilfield utility machinery. Available for short or long-term lease. All machinery is verified compliant with rigorous API and OSHA standards, and comes with comprehensive maintenance logs and option for certified operators.",
    features: [
      "Crawler cranes and rough-terrain cranes up to 600 Tons",
      "High-pressure air compressors (1500+ CFM, up to 350 PSI)",
      "Multi-megawatt sound-attenuated backup generators",
      "Industrial grade high-flow water/mud pumps"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    category: "Logistics & Equipment"
  },
  {
    id: "industrial-fabrication",
    title: "Industrial Fabrication",
    shortDescription: "Specialized welding, machining, and custom steel assembly for extreme pressure and high-temperature environments.",
    detailedDescription: "Our high-capacity fabrication yards construct certified offshore structural elements, skid-mounted equipment modules, manifolds, pressure vessels, and customized piping spools. We use premium certified alloys and subject every weld to rigorous non-destructive evaluation (NDE).",
    features: [
      "Skid-mounted process module design and assembly",
      "ASME-certified high-pressure vessel welding",
      "Heavy structural steel jackets and decks",
      "Ultrasonic, X-Ray, and magnetic particle weld testing"
    ],
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    category: "Engineering & Fabrication"
  },
  {
    id: "pipeline-support",
    title: "Pipeline Support",
    shortDescription: "Comprehensive integrity management, hydrostatic testing, and construction support for transport networks.",
    detailedDescription: "We provide heavy-equipment, specialized welders, and engineering consultants to deploy, pressure test, and maintain pipeline assets. This includes precise route grading, pipeline alignment, automatic welding, hydro-testing, cathodic protection system checks, and emergency repair response.",
    features: [
      "Automatic pipe-joining and tracking",
      "High-pressure hydrostatic testing up to 10,000 PSI",
      "Cathodic protection installation and maintenance",
      "Geotechnical routing and earthwork supervision"
    ],
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    category: "Engineering & Fabrication"
  },
  {
    id: "mechanical-engineering",
    title: "Mechanical Engineering",
    shortDescription: "Detailed engineering design, finite element analysis (FEA), and stress verification for rig infrastructure.",
    detailedDescription: "Our expert multi-disciplinary engineering wing designs custom structural fixtures, hoisting cradles, subsea equipment packages, and mud piping circuits. We conduct high-fidelity numerical fluid flow analysis (CFD) and structural analysis to ensure components handle extreme ocean depths or drilling stresses.",
    features: [
      "Rig structural stress and FEA analysis",
      "High-pressure high-temperature (HPHT) pipe stress sizing",
      "Drilling equipment design modification",
      "3D digital twin construction and dynamic load modeling"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    category: "Engineering & Fabrication"
  },
  {
    id: "project-management",
    title: "Project Management",
    shortDescription: "End-to-end management of complex energy infrastructure deployment, cost control, and compliance scheduling.",
    detailedDescription: "Rigas Berkeley provides comprehensive PMO support using advanced tracking systems. We manage scheduling, subcontractor compliance, supply chain dependencies, and risk mitigation profiles. Our projects consistently complete on schedule, under budget, and with outstanding safety records.",
    features: [
      "Earned Value Management (EVM) reporting",
      "Primavera P6 master schedule tracking",
      "Subcontractor vetting and HSE integration",
      "Regulatory compliance filing and approvals"
    ],
    imageUrl: "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?auto=format&fit=crop&q=80&w=800",
    category: "Logistics & Equipment"
  },
  {
    id: "construction-support",
    title: "Construction Support",
    shortDescription: "On-site civil and structural assistance, heavy foundation creation, and structural erection.",
    detailedDescription: "Supporting heavy civil energy construction sites, including foundation concrete pours, pile-driving management, anchor-bolt alignment, and crane assembly. We coordinate heavy transport systems to position oversized modular building blocks perfectly.",
    features: [
      "Deep foundation pile testing and alignment",
      "Modular building block erection logistics",
      "Heavy load runway and path preparation",
      "Site utility routing and temporary power grids"
    ],
    imageUrl: "https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&q=80&w=800",
    category: "Drilling & Construction"
  },
  {
    id: "emergency-response",
    title: "Emergency Response",
    shortDescription: "24/7 rapid deployment of technicians, structural welders, and heavy equipment for rig and pipeline emergencies.",
    detailedDescription: "When mechanical failures, structural damage, or hydraulic breaches happen, every second translates to massive loss. Our specialized emergency responders, certified for both offshore and confined workspace operations, launch within hours with specialized tools.",
    features: [
      "24/7 technical emergency dispatch hotline",
      "Onshore/Offshore rapid deployment certified teams",
      "Subsea containment and blowout preventer diagnostic assistance",
      "Structural reinforcement under extreme loads"
    ],
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    category: "Drilling & Construction"
  },
  {
    id: "equipment-inspection",
    title: "Equipment Inspection",
    shortDescription: "Comprehensive API-certified non-destructive examination (NDE) and structural integrity testing.",
    detailedDescription: "We provide high-precision rig, vessel, and downhole tool inspection services. Utilizing electromagnetic testing, ultrasonic scanning, and radiographical assessment, we identify micro-fractures, deep wall loss, and fatigue points before they result in critical asset failures.",
    features: [
      "API 510/570/653 certified inspection personnel",
      "Ultrasonic phased-array wall thickness mapping",
      "Derrick and drilling mast structural inspection",
      "Lifting gear and wire rope certification"
    ],
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    category: "Engineering & Fabrication"
  },
  {
    id: "technical-consulting",
    title: "Technical Consulting",
    shortDescription: "Specialized drilling consulting, design reviews, well control advice, and risk assessment.",
    detailedDescription: "Providing strategic insights for energy developers. We review drilling plans, evaluate equipment specifications for high-pressure reservoirs, compile technical feasibility assessments for deepwater operations, and audit asset integrity programs.",
    features: [
      "Well control blueprint validation and hazard mitigation",
      "Rig selection and capabilities gap assessments",
      "HSE risk matrix modeling and incident investigation",
      "Geotechnical and oceanic condition structural evaluations"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    category: "Engineering & Fabrication"
  },
  {
    id: "logistics-coordination",
    title: "Logistics Coordination",
    shortDescription: "Heavy haul transport, maritime vessel supply coordination, and complex cargo operations.",
    detailedDescription: "Moving oversized loads (like drilling masts, pressure vessels, and modular quarters) requires expert routing, permitting, and execution. Rigas Berkeley coordinates multi-modal ocean, rail, and heavy highway transport, securing escorts and compliance clearances globally.",
    features: [
      "Superload route scouting and utility clearance management",
      "Multi-modal freight routing (ocean, rail, truck)",
      "OSV (Offshore Supply Vessel) loading and marine scheduling",
      "Warehouse tracking and material marshalling"
    ],
    imageUrl: "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?auto=format&fit=crop&q=80&w=800",
    category: "Logistics & Equipment"
  },
  {
    id: "preventive-maintenance",
    title: "Preventive Maintenance",
    shortDescription: "Sensor-based condition monitoring, vibration analysis, and systematic grease and lubrication plans.",
    detailedDescription: "We implement dynamic preventive care programs using vibration diagnostics and oil tribology analysis. By monitoring real-time heat signatures and dynamic noise, our technicians identify bearings, gears, and engine shafts that require calibration, avoiding cataclysmic failures.",
    features: [
      "Rotating equipment acoustic and vibration telemetry reviews",
      "Lube oil wear-particle analysis (tribology)",
      "Rig alignment, dynamic balancing and thermal imaging",
      "Scheduled belt, seal, filter, and valve replacements"
    ],
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    category: "Logistics & Equipment"
  },
  {
    id: "industrial-shutdown-support",
    title: "Industrial Shutdown Support",
    shortDescription: "Fast, safe, and highly coordinated personnel and tools for refinery and platform turnaround shutdowns.",
    detailedDescription: "Shutdown turnarounds must be executed with military precision to minimize lost energy output. We coordinate hundreds of skilled craftsmen, scaffolding builders, vessel cleaners, and welders. Our managers plan critical paths (CPM) to deliver maintenance and restart the systems ahead of target timelines.",
    features: [
      "Vessel cleaning, nitrogen purging, and cold-cutting support",
      "Piping blinding, decoking, and catalytic exchange",
      "Critical-path tracking and 24-hour shift scheduling",
      "Pre-startup safety reviews and joint-tightness assurance"
    ],
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    category: "Drilling & Construction"
  }
];

export const projectsData: Project[] = [
  {
    id: "project-triton",
    title: "Project Triton Deepwater Upgrade",
    description: "Multi-system mechanical and structural enhancement of a semi-submersible drilling platform operating in the Gulf of Mexico. Rigas Berkeley fabricated and installed upgraded derrick framing and top drive structures to accommodate high-pressure drilling equipment.",
    location: "Gulf of Mexico (Deepwater Block 482)",
    category: "Offshore",
    timeline: "Jan 2024 - Nov 2024",
    clientSatisfaction: "98% (Exceeded Safety & Schedule Targets)",
    stats: [
      { label: "Water Depth", value: "8,500 ft" },
      { label: "Safe Hours worked", value: "340,000" },
      { label: "Steel Fabricated", value: "450 Tons" },
      { label: "Incident Rate", value: "0.00 TRIR" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200",
    coordinates: { lat: 26.5, lng: -90.2 },
    status: "Completed"
  },
  {
    id: "project-aurora",
    title: "Project Aurora Arctic Drilling",
    description: "Onshore drilling rig setup, logistics coordination, and mechanical support in sub-zero Arctic conditions. We coordinated the transport of heavy modular drill sets via ice-roads and engineered structural enclosures to protect operations against -45°F temperatures.",
    location: "North Slope, Alaska (Prudhoe Bay Area)",
    category: "Onshore",
    timeline: "Nov 2023 - May 2024",
    clientSatisfaction: "96% (Flawless cold-weather starting sequence)",
    stats: [
      { label: "Operating Temp", value: "-45°F" },
      { label: "Modular Loads", value: "112 Superloads" },
      { label: "Drilling Mast Height", value: "152 ft" },
      { label: "Spud to TD Time", value: "22 Days" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&q=80&w=1200",
    coordinates: { lat: 70.2, lng: -148.5 },
    status: "Completed"
  },
  {
    id: "project-titan",
    title: "Project Titan heavy Fabrication",
    description: "Large-scale fabrication of high-pressure skid modules and pipeline manifold headers. Every single weld was subjected to 100% radiographic and ultrasonic non-destructive testing at our Chicago fabrication yard.",
    location: "Chicago River Fabrication Facility, IL",
    category: "Fabrication",
    timeline: "Ongoing (Started Feb 2025)",
    clientSatisfaction: "99% (Perfect weld quality records)",
    stats: [
      { label: "Certified Welders", value: "32 Elite Welder Staff" },
      { label: "API Certification", value: "ASME Sec VIII" },
      { label: "NDE Weld Pass Rate", value: "100%" },
      { label: "Pressure Rating", value: "15,000 PSI" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200",
    coordinates: { lat: 41.8, lng: -87.6 },
    status: "In Progress"
  },
  {
    id: "project-boreas",
    title: "Project Boreas Platform Turnaround",
    description: "Critical path turnaround support and pipeline manifold replacements on an active production platform in the North Sea. Over 150 personnel deployed via helicopter, executing structural updates under strict maritime regulations.",
    location: "North Sea, United Kingdom Sector",
    category: "Offshore",
    timeline: "July 2024 - Sep 2024",
    clientSatisfaction: "97% (Refinery resumed 4 days ahead of schedule)",
    stats: [
      { label: "Helicopter Flights", value: "38 Rotations" },
      { label: "Valves Replaced", value: "124 Units" },
      { label: "Shutdown Duration", value: "24 Days" },
      { label: "Zero-Downtime restart", value: "Yes" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?auto=format&fit=crop&q=80&w=1200",
    coordinates: { lat: 57.1, lng: 1.9 },
    status: "Completed"
  },
  {
    id: "project-helios",
    title: "Project Helios Texas Pipeline",
    description: "Heavy equipment routing and mechanical alignment support for a 42-inch crude oil conveyor trunkline. We managed pipeline stringing, trenching equipment rental fleets, and hydrostatic validation operations.",
    location: "Permian Basin, West Texas",
    category: "Infrastructure",
    timeline: "May 2024 - Dec 2024",
    clientSatisfaction: "95% (Fully compliant environmental restoration)",
    stats: [
      { label: "Pipeline Length", value: "68 Miles" },
      { label: "Pipe Diameter", value: "42 inches" },
      { label: "Trenchers Leased", value: "14 Heavy Units" },
      { label: "Hydrotest Volume", value: "12M Gallons" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    coordinates: { lat: 31.9, lng: -102.3 },
    status: "Completed"
  },
  {
    id: "project-caspian",
    title: "Project Caspian Drillship Retrofit",
    description: "Detailed offshore engineering, deepwater piping installations, and blowout preventer (BOP) control system integration for an advanced exploration vessel preparing for deep reservoirs.",
    location: "Caspian Sea (Near Baku, Azerbaijan)",
    category: "Engineering",
    timeline: "Active (Scheduled finish Nov 2026)",
    clientSatisfaction: "Active project status (On Track)",
    stats: [
      { label: "Control Channels", value: "32 Electro-Hydraulic" },
      { label: "BOP rating", value: "20,000 PSI" },
      { label: "Engineering Drawing", value: "1,200 Approved" },
      { label: "Current Safety Hours", value: "185,000" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
    coordinates: { lat: 40.5, lng: 50.8 },
    status: "Active"
  }
];

export const industriesData: Industry[] = [
  {
    id: "oil-gas",
    name: "Oil & Gas Exploration",
    description: "Our core domain. We support drilling contractors and operators globally with specialized derrick erection, mechanical systems overhaul, and deepwater exploration logistics support.",
    features: ["Semi-submersible & Jack-up maintenance", "Drilling mast engineering", "Subsea control system alignment", "Blowout preventer diagnostic solutions"],
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "energy",
    name: "Renewable & Traditional Energy",
    description: "Bridging fossil and transitional power. We construct geothermal steam wells, deliver heavy fabrication and cranes for wind turbine anchor components, and assemble energy transport grids.",
    features: ["Geothermal deep drilling steel jacket structures", "Wind energy foundation support", "Energy substation heavy rigging", "Co-generation plant shutdowns"],
    imageUrl: "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "mining",
    name: "Heavy Mining & Excavation",
    description: "We deploy massive structural crawler cranes, hydraulic excavators, sound-insulated emergency generators, and custom dragline structural weld restorations to high-volume mining grids.",
    features: ["Dragline structural stress relief welding", "Heavy crusher plant erection", "Conveyor structure maintenance", "Ventilation fan power generator setups"],
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "construction",
    name: "Heavy Industrial Construction",
    description: "Providing high-capacity cranes, foundations piling control, heavy haul transport planning, and complex metal fabrication modules for critical infrastructure construction.",
    features: ["Superload crawler cranes (up to 600 Tons)", "Silo and heavy steel tank assembly", "Highway utility and pipe path grading", "Pre-cast heavy concrete rigging support"],
    imageUrl: "https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "manufacturing",
    name: "Heavy Manufacturing Plants",
    description: "Delivering continuous mechanical alignment, precision machinery foundations, high-volume process pipeline loops, and routine critical preventive maintenance shut-downs.",
    features: ["Press and forging line mechanical alignment", "Overhead gantry crane rail certifications", "Pneumatic plant compressor systems", "Industrial factory pipe manifold assembly"],
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "chemical-plants",
    name: "Chemical Processing Plants",
    description: "Managing hazardous chemical pipeline networks, custom heat-exchanger cleaning skids, high-alloy ASME pressure vessel fabrication, and certified valve overhaul logistics.",
    features: ["Duplex stainless steel pipe fabrication", "Class-1 explosion-proof electrical support", "Chemical reactor vessel inspections", "Nitrogen purging and high-pressure washing"],
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "petrochemical",
    name: "Petrochemical Refineries",
    description: "Engineering and turnaround services for crude fractionation towers, thermal cracker tubes, coke drum decoking support, and emergency line-rupture welding response.",
    features: ["Cracker furnace tube re-tubing", "Refinery column internal trays retrofitting", "Flare tip replacement rigging design", "High-temperature critical piping stress analysis"],
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "power-generation",
    name: "Power Generation Facilities",
    description: "Providing backup energy modules, steam turbine turbine-rotor housing maintenance, exhaust stack fabrication, and safety inspection for nuclear, coal, and hydro facilities.",
    features: ["Steam line alloy-grade welding and stress relief", "Large gas turbine generator rigging", "Cooling tower pipeline inspections", "Auxiliary boiler maintenance & repair"],
    imageUrl: "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "infrastructure",
    name: "Civil Water & Gas Infrastructure",
    description: "Deploying deep water main pumps, city gas pressure-reducing stations, high-capacity pipeline bridge spans, and heavy storage tank construction support.",
    features: ["City-gate gas pressure regulator skids", "High-capacity horizontal water main line pumps", "Bridge structural pipe hanger fabrications", "Potable water storage tank welding & inspection"],
    imageUrl: "https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "marine-operations",
    name: "Marine & Harbour Operations",
    description: "Providing offshore supply vessel (OSV) crane load testing, drydock vessel hull structural repairs, floating production storage and offloading (FPSO) marine mooring system installations.",
    features: ["FPSO mooring tensioner mechanical maintenance", "Port bulk loading terminal crane certifications", "Ocean vessel steel plating insert welding", "Marine salvage lifting rigging designs"],
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600"
  }
];

export const equipmentData: Equipment[] = [
  {
    id: "drilling-rigs",
    name: "Elite Onshore/Offshore Drilling Rigs",
    category: "Drilling Rigs",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600",
    specifications: {
      "Hook Load Capacity": "1,500,000 lbs (680 Metric Tons)",
      "Drilling Depth Rating": "30,000 ft (9,144 meters)",
      "Top Drive Rating": "1,150 HP, AC Electric Variable Frequency",
      "Drawworks": "3,000 HP Gear-Driven Gearbox",
      "Power Generation": "4x Cat 3512 Gensets with SCR/VFD modules"
    },
    features: [
      "Rigid box-on-box substructure for rapid deployment",
      "Integrated sound-attenuated drilling cabins",
      "Automated hydraulic iron roughnecks and pipe-handlers",
      "Fully digital control interface and telemetry"
    ],
    applications: [
      "Deep reservoir high-pressure exploration",
      "Arctic/extreme weather drilling pads",
      "Offshore modular jack-up deployments"
    ]
  },
  {
    id: "cranes",
    name: "Heavy Lift Lattice Boom Crawler Cranes",
    category: "Cranes",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600",
    specifications: {
      "Lift Capacity": "600 Tons (544 Metric Tons)",
      "Max Boom Length": "314 ft (96 meters)",
      "Counterweight": "420,000 lbs (190 Tons)",
      "Engine Specs": "Cummins QSG12 Tier 4 Final, 450 HP",
      "Track Dimensions": "36-ft track footprint with 60-inch heavy shoes"
    },
    features: [
      "Self-assembly system for rapid on-site rigging",
      "Full load-moment indicator (LMI) with telemetry",
      "Super-lift trailing attachment package",
      "Precise micro-hoisting hydraulics"
    ],
    applications: [
      "Heavy derrick derrick-lift and modular rig setups",
      "Refinery tower fractionator rigging",
      "Bridge structural girder placements"
    ]
  },
  {
    id: "excavators",
    name: "Industrial Hydraulic Mining Excavators",
    category: "Excavators",
    imageUrl: "https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&q=80&w=600",
    specifications: {
      "Operating Weight": "195,000 lbs (88 Tons)",
      "Bucket Capacity": "7.5 cubic yards",
      "Max Digging Depth": "28 ft (8.5 meters)",
      "Engine Power": "Cat C18 ACERT, 580 HP",
      "Hydraulic Flow": "4x 120 GPM at 5,000 PSI"
    },
    features: [
      "Reinforced heavy-duty boom and bucket arm",
      "Rear-view safety arrays and blindspot warning radar",
      "Eco-mode variable-flow load sensing system",
      "Comfort-ride ergonomic pressurized cockpit"
    ],
    applications: [
      "Pipeline corridor trenching",
      "Rig pad civil earthworks",
      "Mining overburden extraction"
    ]
  },
  {
    id: "generators",
    name: "Multi-Megawatt Sound-Attenuated Power Modules",
    category: "Generators",
    imageUrl: "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?auto=format&fit=crop&q=80&w=600",
    specifications: {
      "Continuous Power": "2,000 kW (2.5 MVA)",
      "Voltage Configurations": "480V / 4160V / 13800V Selectable",
      "Engine Unit": "Cat 3516B Twin-Turbocharged Diesel V16",
      "Fuel Capacity": "1,250 Gallon integrated double-wall sub-base tank",
      "Sound Level": "72 dBA at 23 ft (Ultra-quiet housing)"
    },
    features: [
      "Containerized ISO 40-foot durable design",
      "Synchronous parallel panel system for unlimited grid links",
      "Emissions-compliant selective catalytic reduction system (SCR)",
      "IntelliGen digital remote monitoring suite"
    ],
    applications: [
      "Offshore rig emergency backup power",
      "Remote location exploration base camp utilities",
      "Refinery turnaround shut-down power loops"
    ]
  },
  {
    id: "compressors",
    name: "High-Pressure Rotary Screw Compressors",
    category: "Compressors",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    specifications: {
      "Air Delivery Volume": "1,600 CFM (45 cubic meters/min)",
      "Rated Pressure": "350 PSI (24 Bar)",
      "Engine Drive": "John Deere 6135 Tier 4 Final, 475 HP",
      "Air Quality": "Integrated aftercooler and moisture separators",
      "Controls": "Electronic microprocessor load-modulation panel"
    },
    features: [
      "Heavy-duty dual axle oilfield skid mount",
      "Cold weather starting heater systems",
      "Four-point offshore certified crane lifting eyes",
      "Auto-shutdown security sensors for high temp and pressure"
    ],
    applications: [
      "Pipeline hydro-test drying operations",
      "Rig pneumatic tool networks",
      "Underbalanced oilwell air-drilling circuits"
    ]
  },
  {
    id: "pumps",
    name: "High-Flow Reciprocating Triplex Mud/Water Pumps",
    category: "Pumps",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600",
    specifications: {
      "Max Hydraulic Output": "1,600 HP (1,193 kW)",
      "Max Operating Pressure": "7,500 PSI (517 Bar)",
      "Max Displacement Volume": "820 GPM with 7-inch liners",
      "Suction Connection": "12-inch heavy flange",
      "Discharge Connection": "4-inch high-pressure union"
    },
    features: [
      "Solid alloy steel mono-block fluid end module",
      "Internal splash-lubrication with dynamic oil filters",
      "Quick-change piston and valve covers for zero-tool updates",
      "Vibration dampers on primary manifold outlet"
    ],
    applications: [
      "Drilling rig mud injection loops",
      "Pipeline high-volume hydrostatic test fillings",
      "Industrial high-pressure tank washing operations"
    ]
  },
  {
    id: "storage-tanks",
    name: "API-650 Dual-Wall Crude & Fluid Storage Tanks",
    category: "Storage Tanks",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600",
    specifications: {
      "Nominal Capacity": "1,000 Barrels (42,000 Gallons / 159,000 Liters)",
      "Design Standard": "API-12F / API-650 compliant",
      "Wall Build": "Double-wall carbon steel with chemical-resistant lining",
      "Dimensioning": "15 ft diameter, 32 ft height",
      "Fittings": "8-inch fluid inlet/outlets with pneumatic flame arrestors"
    },
    features: [
      "Interstitial space leak-detection sensor arrays",
      "External steam-coil heating grids for thick materials",
      "Durable epoxy chemical internal protective lining",
      "Integrated perimeter ladders and top guard rails"
    ],
    applications: [
      "Rig site mud and active brine storage",
      "Drilling crew diesel supply containment",
      "Refinery flowback and slop-water capture"
    ]
  },
  {
    id: "pipe-handling",
    name: "Automated Hydraulic Pipe Handling Cranes & Catwalks",
    category: "Pipe Handling Equipment",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600",
    specifications: {
      "Max Pipe Diameter": "30 inches OD casing pipe",
      "Max Length Handling": "48 ft Range-3 casing",
      "Lifting Capacity": "12,000 lbs (5.4 Tons) rapid pick-up",
      "Cycle Transport Time": "35 seconds to rig floor",
      "Hydraulic Unit": "Self-contained 120 HP electric pump pack"
    },
    features: [
      "Fully hands-free remote control wireless joystick deck",
      "Auto-centering pipe-carriage tracks",
      "Rigid safety barrier gates and impact buffers",
      "Modular collapse design for quick flatbed trucking"
    ],
    applications: [
      "Hands-free drill-pipe casing runs",
      "Drill collar logistics to rig floor",
      "Horizontal pipe yard racking systems"
    ]
  },
  {
    id: "control-systems",
    name: "Cyber-Rig Consolidated Integrated Control Systems",
    category: "Control Systems",
    imageUrl: "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?auto=format&fit=crop&q=80&w=600",
    specifications: {
      "Processor Units": "Triple-redundant Allen-Bradley ControlLogix PLCs",
      "Displays": "Dual 24-inch explosion-proof touch panels",
      "Network Protocol": "Fiber-optic EtherNet/IP fail-safe loop",
      "HSE Integration": "SIS (Safety Instrumented System) Emergency Trip Link",
      "Telemetry Link": "Satellite real-time SCADA data mirroring"
    },
    features: [
      "Active vibration, temperature and torque alarms",
      "Ergonomic cyber-chair piloting stations",
      "Integrated CCTV surveillance multi-view windowing",
      "Historical drilling log event database storage"
    ],
    applications: [
      "Centralized exploration rig drilling pilots",
      "Refinery complex SCADA monitoring",
      "Subsea BOP manifold emergency valve control"
    ]
  },
  {
    id: "hydraulic-equipment",
    name: "High-Volume Multi-Station Hydraulic Power Packs (HPU)",
    category: "Hydraulic Equipment",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    specifications: {
      "Operating Pressure": "5,000 PSI continuous (345 Bar)",
      "Reservoir Capacity": "450 Gallons (1,700 Liters) stainless tank",
      "Primary Pumps": "2x Rexroth Axial Piston Variable Pumps",
      "Electric Motor": "2x 150 HP Explosion-Proof TEFC Motors",
      "Filtration Rating": "3-micron absolute return line filters"
    },
    features: [
      "Integrated water-glycol shell-and-tube coolers",
      "Overpressure safety dump relief bypass circuits",
      "Stainless steel rigid manifold pipes with quick couplings",
      "Digital flow meters and oil level alarm telemetry"
    ],
    applications: [
      "Heavy rig derrick hydraulic raising",
      "Subsea riser tensioner system testing",
      "Blowout preventer test hydraulic lines"
    ]
  },
  {
    id: "heavy-trucks",
    name: "6x6 Heavy-Duty Rig-Up Winch Trucks",
    category: "Heavy Trucks",
    imageUrl: "https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&q=80&w=600",
    specifications: {
      "Chassis Layout": "Kenworth C500 6x6 Heavy All-Wheel Drive",
      "Engine Unit": "Cummins X15 Performance, 605 HP, 2,050 lb-ft Torque",
      "Transmission": "Allison 4700 RDS Automatic with aux box",
      "Winch Rigging": "Dual Braden 100,000 lb hydraulic oilfield winch",
      "Rear Tail-Roll": "8-inch heavy steel tail-roller with air-flaps"
    },
    features: [
      "Full steel subframe tail derrick and headache rack",
      "Over-width tires with central inflation monitoring (CTIS)",
      "Winch operator steel security cage cabin",
      "LED industrial workspace night illumination panels"
    ],
    applications: [
      "Heavy skid loading and rig moves",
      "Drill pipe transport trailer hauling",
      "Desert and swamp off-road asset recovery"
    ]
  },
  {
    id: "support-vehicles",
    name: "Offroad Emergency Mobile Repair Service Trucks",
    category: "Support Vehicles",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600",
    specifications: {
      "Truck Platform": "Ford F-550 Super Duty 4x4 Dually Chassis",
      "Utility Body": "Knapheide Heavy-Duty Galvanneal steel service box",
      "Onboard Crane": "Stellar 6,000 lb hydraulic telescoping loader crane",
      "Welder/Genset": "Miller Trailblazer 325 multiprocess welder & air generator",
      "Tooling Drawer": "Integrated pneumatic impact and high-grade alloy keys"
    },
    features: [
      "Full oxygen-acetylene secure tank storage lockbox",
      "Pressurized air hose reel (50 ft, 1/2-inch line)",
      "High-output LED telescoping scene floodlights",
      "Onboard rugged laptops with engine diagnostic ports"
    ],
    applications: [
      "On-site drilling rig mechanical diagnostics",
      "Field pipeline quick welding updates",
      "Remote heavy machinery oil and filter services"
    ]
  }
];

export const careerOpeningsData: CareerOpening[] = [
  {
    id: "senior-rig-engineer",
    title: "Senior Offshore Rig Engineer",
    department: "Engineering & Drilling Support",
    location: "Gulf of Mexico (Rotational 14/14 Schedule)",
    type: "Full-Time",
    salaryRange: "$165,000 - $195,000 / Year + Offshore Allowances",
    description: "We are seeking a highly experienced Rig Mechanical Engineer to supervise derrick structural integrity, top drive systems, and blowout prevention hardware upgrades on deepwater semi-submersible rigs. You will oversee custom modifications, engineering approvals, and ensure alignment with strict API and BSEE environmental guidelines.",
    requirements: [
      "B.S. in Mechanical or Petroleum Engineering",
      "7+ years experience managing mechanical systems on ultra-deepwater exploration rigs",
      "Active BOSIET / HUET offshore survival safety certifications",
      "Proficiency in rig load stress modeling and API standard code reviews"
    ],
    benefits: [
      "100% company-paid medical, dental, and vision coverages",
      "401(k) retirement system matching 6% dollar-for-dollar",
      "Generous offshore daily allowance bonus structured payments",
      "Premium flight and lodging logistics coordinate by Rigas Berkeley"
    ]
  },
  {
    id: "hse-manager",
    title: "Lead Health, Safety & Environment (HSE) Manager",
    department: "Safety & Compliance",
    location: "Chicago Headquarters, IL (with 35% site travel)",
    type: "Full-Time",
    salaryRange: "$120,000 - $145,000 / Year",
    description: "As our Lead HSE Manager, you will command the development, implementation, and audit of all safety policies, incident-prevention programs, and environmental compliance matrices across RIGAS BERKELEY LLC's Chicago fabrication yards and remote rig project sites. You will serve as our primary point-of-contact with OSHA and EPA representatives.",
    requirements: [
      "B.S. in Occupational Health & Safety, Environmental Science or equivalent",
      "CSP (Certified Safety Professional) designation strongly preferred",
      "5+ years lead HSE experience in oilfield services, heavy construction or industrial fabrication",
      "Thorough command of OSHA 1910/1926 standards, API Q1 protocols, and environmental laws"
    ],
    benefits: [
      "Comprehensive performance bonuses paid quarterly",
      "Dedicated company 4x4 utility vehicle provided with full fuel allowances",
      "Continuing education funding for safety leadership certifications",
      "Premium health and life insurance plans"
    ]
  },
  {
    id: "crane-operator",
    title: "Certified Heavy Lattice Crane Operator (NCCCO)",
    department: "Logistics & Equipment Operations",
    location: "Chicago Fabrication Yard & Field Projects",
    type: "Full-Time (Hourly with overtime)",
    salaryRange: "$48.00 - $62.00 / Hour + Overtime (1.5x)",
    description: "Looking for an NCCCO lattice-boom crawler certified crane operator to safely maneuver our 600-ton heavy lifts. You will assemble crane sections, perform precise lift-plan reviews, evaluate geotechnical pad compaction, and lift heavy derrick columns, manifold structures, and storage vessels in active fabrication and field environments.",
    requirements: [
      "Active NCCCO certification (LBC - Lattice Boom Crawler category)",
      "4+ years operating cranes over 200 tons in high-density rigging zones",
      "Perfect safety log tracking with zero structural incident reports",
      "Ability to read and calculate complex lift plans under variable wind conditions"
    ],
    benefits: [
      "Union-equivalent base hourly salary scale with guaranteed weekly hours",
      "Premium overtime rates and travel per-diem allowances",
      "Annual NCCCO renewal and safety training physicals paid by company",
      "Comprehensive medical coverage and retirement savings plan"
    ]
  },
  {
    id: "structural-welder",
    title: "ASME certified Structural / Pipe Welder",
    department: "Industrial Fabrication",
    location: "Chicago Yard, IL (6412 N. Washtenaw Area)",
    type: "Full-Time",
    salaryRange: "$35.00 - $48.00 / Hour + Shift Premiums",
    description: "We are hiring skilled structural pipe welders to fabricate heavy-duty skid modules, manifold headers, and pressure vessels. Welders must pass RIGAS BERKELEY LLC's internal 6G alloy steel test using GTAW/SMAW processes. Every weld undergoes complete radiographic and ultrasonic assessment.",
    requirements: [
      "AWS/ASME Section IX 6G welding qualification track record",
      "3+ years structural steel and high-pressure alloy pipe welding",
      "Ability to read engineering blueprints, welding symbols, and tolerances",
      "Strong work ethic and dedication to wearing mandated flame-resistant PPE"
    ],
    benefits: [
      "Comfortable climate-controlled fabrication bays with state-of-the-art ventilation",
      "Complete provision of premium welding helmets, safety gear, and custom tools",
      "Paid sick days, vacation leave, and company-matched 401(k) plans",
      "Substantial annual footwear and gear allowances"
    ]
  }
];

export const newsArticlesData: NewsArticle[] = [
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
    content: "Transporting over 100 superloads of heavy steel, generators, and drill pipes across temporary frozen ice bridges requires extensive preparation. Geotechnical sensors must continuously measure ice-sheet thickness to guarantee it supports loads up to 180,000 lbs. During Project Aurora, our expert logistics dispatchers worked hand-in-hand with state environmental groups, monitoring local weather radars 24/7 to adjust truck speeds and spacing. This precision ensured we delivered every modular building block with absolute safety and zero environmental trace.",
    imageUrl: "https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&q=80&w=800",
    readTime: "5 min read"
  },
  {
    id: "energy-market-2026",
    title: "Global Offshore Infrastructure Demands: Rig Markets in 2026",
    category: "Energy Market Insights",
    date: "July 02, 2025",
    author: "Corporate Strategy Division",
    summary: "Our energy market analysts compile deep insights into rig utilization trends, deepwater vessel backlogs, and global exploration investment metrics.",
    content: "As we evaluate energy demands, we observe substantial investment shifts. Deepwater exploration is seeing a massive surge across the Atlantic basin, resulting in jack-up and semi-submersible utilization rates climbing over 92% globally. RIGAS BERKELEY LLC is positioning itself to support this high demand by boosting fabrication outputs at our Chicago metal fabrication yard, hiring certified welding professionals, and expanding our technical consulting divisions to provide quick-turn rig engineering certifications for dynamic operators.",
    imageUrl: "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?auto=format&fit=crop&q=80&w=800",
    readTime: "7 min read"
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Lead Compliance Officer & Manifold System",
    category: "Oil Rigs",
    imageUrl: gallery1,
    description: "Our certified compliance inspector conducting real-time safety and pressure audits at an active drilling manifold station."
  },
  {
    id: "gal-2",
    title: "Trenchless Auger & Horizontal Drilling Rig",
    category: "Heavy Equipment",
    imageUrl: gallery2,
    description: "A heavy-duty horizontal boring and auger drilling rig undergoing evening calibration prior to dynamic boring deployment."
  },
  {
    id: "gal-3",
    title: "Technical Pipeline Audit & Calibration",
    category: "Engineering Teams",
    imageUrl: gallery3,
    description: "Specialized petroleum technician auditing high-pressure valve telemetry on the platform deck."
  },
  {
    id: "gal-4",
    title: "Offshore Heavy Generator Deck Hoist",
    category: "Projects",
    imageUrl: gallery4,
    description: "Multi-ton modular equipment being safely hoisted onto the deck of an offshore energy construction vessel."
  },
  {
    id: "gal-5",
    title: "Active Derrick Rotary Drilling Floor",
    category: "Oil Rigs",
    imageUrl: gallery5,
    description: "High-power casing and drill-pipe alignment procedures on the active rotary drilling floor."
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Marcus Vance",
    role: "VP of Drilling Operations",
    company: "Apex Global Energy Corp",
    quote: "Rigas Berkeley LLC executed our deep derrick structural upgrade with military precision. Their structural steel welds passed NDE on the first run, and they completed the installation 4 days ahead of schedule. Truly a premium industrial partner.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Elena Rostova",
    role: "Lead Procurement Officer",
    company: "Sovereign Oilfield & Mining",
    quote: "Leasing crawler cranes and multi-megawatt diesel generators from Rigas Berkeley's fleet was incredibly smooth. All equipment arrived with full maintenance logs, and their certified operator handled our site lifts flawlessly.",
    rating: 5
  },
  {
    id: "test-3",
    name: "David Sterling",
    role: "HSE Director",
    company: "Midwest Refining Partners",
    quote: "With over 150 Rigas Berkeley personnel deployed at our refinery turnaround, safety compliance was absolute. Zero incident reports, zero near-misses, and 100% adherence to our PPE policies. Their 'Safety First' approach is genuine.",
    rating: 5
  }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Where is RIGAS BERKELEY LLC's central fabrication yard and headquarters located?",
    answer: "Our central offices and heavy-load metal fabrication yards are strategically located at 6412 N. WASHTENAW, CHICAGO, IL 60645-0000. This location gives us immediate logistics access to transport heavy skid structures, pressure vessels, and equipment worldwide via maritime, rail, and heavy highway routes.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Are your welding fabrications certified to industrial standards?",
    answer: "Yes, all structural welding and vessel fabrications are strictly certified in accordance with ASME Section VIII Division 1, ASME B31.3 high-pressure piping specifications, and American Welding Society (AWS) D1.1 structural steel rules. We provide complete NDE verification logs (X-Ray, Ultrasonic, and Magnetic Particle reports) with every delivered component.",
    category: "Engineering"
  },
  {
    id: "faq-3",
    question: "Does Rigas Berkeley provide certified heavy crane and equipment operators with rentals?",
    answer: "Absolutely. We offer flexible options. You can lease our high-capacity lattice-boom crawler cranes, sounds-insulated generators, and triplex pumps as bare equipment, or with NCCCO-certified crane operators and experienced field mechanics. All operators hold extensive experience in active industrial oilfields and heavy refinery zones.",
    category: "Equipment"
  },

  {
    id: "faq-5",
    question: "Can Rigas Berkeley deploy emergency response crews offshore?",
    answer: "Yes, our rapid-response emergency technical teams are fully certified for both onshore and offshore deployments. This includes active BOSIET (Basic Offshore Safety Induction and Emergency Training), HUET (Helicopter Underwater Escape Training), and TWIC (Transportation Worker Identification Credential) compliance. Our hotlines remain active 24/7.",
    category: "Safety"
  }
];

export const mockClientDocuments: ClientDocument[] = [
  {
    id: "doc-1",
    name: "Rig-304-Derrick-Ultrasonic-Inspection-Checklist.pdf",
    type: "PDF",
    size: "4.2 MB",
    uploadedAt: "2026-06-20",
    status: "Approved",
    category: "Inspection Checklist",
    downloadUrl: "#"
  },
  {
    id: "doc-2",
    name: "Project-Triton-Offshore-Service-Contract-Amended.pdf",
    type: "PDF",
    size: "12.8 MB",
    uploadedAt: "2026-07-02",
    status: "Approved",
    category: "Contract",
    downloadUrl: "#"
  },
  {
    id: "doc-3",
    name: "Chicago-Yard-ASME-Certification-COI.pdf",
    type: "PDF",
    size: "1.8 MB",
    uploadedAt: "2026-07-11",
    status: "Approved",
    category: "Certificate of Insurance",
    downloadUrl: "#"
  },
  {
    id: "doc-4",
    name: "Boreas-HSE-Emergency-Evacuation-Protocol-Rev3.docx",
    type: "DOCX",
    size: "840 KB",
    uploadedAt: "2026-07-13",
    status: "Pending Verification",
    category: "HSE Plan",
    downloadUrl: "#"
  },
  {
    id: "doc-5",
    name: "Chicago-Fabrication-Steel-Composition-Spec.xlsx",
    type: "XLSX",
    size: "2.4 MB",
    uploadedAt: "2026-07-14",
    status: "Requires Review",
    category: "Engineering Spec",
    downloadUrl: "#"
  }
];
