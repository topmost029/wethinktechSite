import { Camera, Sun, Cpu, Lightbulb, MapPin, type LucideIcon } from "lucide-react";
import heroCctv from "@/assets/hero-cctv.jpg";
import heroSolar from "@/assets/hero-solar.jpg";
import heroIot from "@/assets/hero-iot.jpg";
import heroTech from "@/assets/hero-tech.jpg";
import heroGps from "@/assets/hero-gps.jpg";

export type SectionCopy = { eyebrow: string; title: string; subtitle?: string };

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  tagline: string;
  desc: string;
  image: string;
  features: string[];
  overview: string;
  overviewSection: SectionCopy;
  capabilities: { title: string; desc: string }[];
  capabilitiesSection: SectionCopy;
  industries: string[];
  industriesHeading: string;
  process: { step: string; title: string; desc: string }[];
  processSection: SectionCopy;
  benefits: string[];
  benefitsHeading: string;
  faqs: { q: string; a: string }[];
  faqsSection: SectionCopy;
  stats: { value: string; label: string }[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "cctv-smart-surveillance",
    icon: Camera,
    title: "CCTV & Smart Surveillance",
    shortTitle: "CCTV & Surveillance",
    tagline: "See Everything. Miss Nothing.",
    desc: "Enterprise-grade surveillance with AI analytics, remote monitoring and intelligent alerts.",
    image: heroCctv,
    features: ["HD & 4K Cameras", "AI Analytics", "Remote Monitoring", "Access Control"],
    overview:
      "We deploy intelligent surveillance ecosystems that combine ultra-HD cameras, AI-powered analytics, and cloud-based monitoring to keep your people, premises and assets secure 24/7. From single sites to multi-location enterprises, our solutions scale with your business.",
    capabilities: [
      { title: "AI Video Analytics", desc: "Person, vehicle and behavior detection with smart alerts that filter out false positives." },
      { title: "Cloud & Hybrid NVR", desc: "Secure encrypted storage with instant remote playback from any device, anywhere." },
      { title: "Access Control Integration", desc: "Unified credentials linking cameras, doors, turnstiles and visitor management." },
      { title: "Number Plate Recognition", desc: "ANPR for entry gates, parking, fleet yards and toll points with searchable logs." },
      { title: "Thermal & Low-Light", desc: "Perimeter and outdoor coverage that performs in total darkness and harsh weather." },
      { title: "24/7 Remote Monitoring", desc: "Optional manned monitoring with verified alarm response and escalation." },
    ],
    industries: ["Banking & Finance", "Retail & Malls", "Hospitality", "Education", "Estates & Real Estate", "Industrial & Warehousing"],
    process: [
      { step: "01", title: "Site Survey", desc: "Free on-site assessment of coverage, lighting, network and risk hotspots." },
      { step: "02", title: "Design & Quote", desc: "Tailored camera plan, BoQ and transparent pricing within 48 hours." },
      { step: "03", title: "Installation", desc: "Certified engineers deploy, configure and commission with zero downtime." },
      { step: "04", title: "Support & Optimization", desc: "Ongoing SLA-backed maintenance, firmware updates and analytics tuning." },
    ],
    benefits: [
      "Deter theft, vandalism and unauthorized access",
      "Reduce insurance premiums with verified monitoring",
      "Evidence-grade footage for compliance and investigations",
      "Centralized view across unlimited sites",
    ],
    faqs: [
      { q: "Can I view my cameras from my phone?", a: "Yes — every system ships with secure mobile apps for iOS and Android, with multi-site support." },
      { q: "Do you provide maintenance after installation?", a: "We offer flexible AMC packages covering preventive maintenance, replacements and 24/7 support." },
      { q: "What internet speed do I need?", a: "Minimum 5 Mbps upload for HD streaming; we also offer offline-first hybrid recording options." },
    ],
    overviewSection: { eyebrow: "Why CCTV with WeThinkTech", title: "Surveillance that thinks before it alerts", subtitle: "Beyond cameras on walls — AI-driven eyes on every angle that matters." },
    capabilitiesSection: { eyebrow: "Surveillance Stack", title: "From lens to dashboard, fully covered", subtitle: "Hardware, analytics and cloud — engineered to work as one system." },
    processSection: { eyebrow: "Deployment Journey", title: "From site survey to switched-on in days", subtitle: "A four-step rollout designed for zero downtime to your business." },
    faqsSection: { eyebrow: "Surveillance FAQs", title: "Questions clients ask before installing" },
    industriesHeading: "Where our cameras stand guard",
    benefitsHeading: "What better surveillance unlocks",
    stats: [
      { value: "24/7", label: "Active monitoring" },
      { value: "4K", label: "Ultra-HD clarity" },
      { value: "<2s", label: "Smart alert latency" },
      { value: "99.9%", label: "Uptime SLA" },
    ],
    seoTitle: "CCTV Installation Nigeria | Smart Surveillance Solutions",
    seoDescription:
      "Professional CCTV installation and AI smart surveillance solutions in Nigeria. HD/4K cameras, remote monitoring, access control and 24/7 support by WeThinkTech.",
  },
  {
    slug: "renewable-energy",
    icon: Sun,
    title: "Renewable Energy Solutions",
    shortTitle: "Renewable Energy",
    tagline: "Power That Pays You Back.",
    desc: "Solar and hybrid energy systems engineered for reliability and long-term ROI.",
    image: heroSolar,
    features: ["Solar Installation", "Lithium Batteries", "Hybrid Systems", "Maintenance"],
    overview:
      "Cut diesel costs, eliminate downtime and decarbonize your operations with custom-engineered solar and hybrid power systems. We design, install and maintain residential, commercial and industrial-scale deployments with bankable warranties.",
    capabilities: [
      { title: "Solar PV Systems", desc: "Tier-1 panels, MPPT controllers and grid-tie or off-grid inverters built for African conditions." },
      { title: "Lithium Battery Storage", desc: "LFP battery banks with 10-year warranties, smart BMS and modular scalability." },
      { title: "Hybrid Solar + Grid + Generator", desc: "Intelligent switching that prioritizes solar, falls back gracefully and minimizes fuel burn." },
      { title: "Energy Audits", desc: "Load profiling and ROI modelling to right-size every component for your usage." },
      { title: "Remote Monitoring", desc: "Live dashboards for generation, consumption, battery health and fault alerts." },
      { title: "Maintenance & Optimization", desc: "Scheduled cleaning, performance tuning and rapid-response field service." },
    ],
    industries: ["Homes & Estates", "Offices & SMEs", "Schools & Hospitals", "Telecoms & ISPs", "Agriculture", "Industrial Facilities"],
    process: [
      { step: "01", title: "Energy Audit", desc: "We profile your loads, tariff and outage patterns to define the right system." },
      { step: "02", title: "Engineering Design", desc: "Single-line diagrams, structural plans and bankable proposals." },
      { step: "03", title: "Deployment", desc: "Certified installation by experienced engineers with safety-first practices." },
      { step: "04", title: "Monitor & Maintain", desc: "Remote performance monitoring plus regular onsite maintenance." },
    ],
    benefits: [
      "Up to 70% reduction in monthly energy costs",
      "Eliminate generator dependency and noise pollution",
      "Lower carbon footprint and ESG-ready reporting",
      "Predictable energy costs over 10-25 years",
    ],
    faqs: [
      { q: "How long is the payback period?", a: "Most commercial systems pay back in 2-4 years depending on diesel and grid usage." },
      { q: "Can solar power my whole building?", a: "Yes, with the right sizing — we can design pure off-grid or hybrid systems for any load." },
      { q: "Do you offer financing?", a: "We partner with green finance providers for lease-to-own and PPA models." },
    ],
    overviewSection: { eyebrow: "Why go solar with us", title: "Energy that powers up — and pays back", subtitle: "Bankable solar and hybrid systems engineered for African grid realities." },
    capabilitiesSection: { eyebrow: "Power Stack", title: "Every component, sized to your load", subtitle: "Panels, batteries, inverters and monitoring — sourced and engineered as one." },
    processSection: { eyebrow: "From Audit to Activation", title: "Four steps to energy independence", subtitle: "Transparent engineering with milestones you can hold us to." },
    faqsSection: { eyebrow: "Solar FAQs", title: "What buyers ask before going solar" },
    industriesHeading: "Who we keep powered",
    benefitsHeading: "The payoff of clean, reliable power",
    stats: [
      { value: "70%", label: "Avg. energy bill cut" },
      { value: "25yr", label: "Panel warranty" },
      { value: "10yr", label: "Battery warranty" },
      { value: "2-4yr", label: "Typical payback" },
    ],
    seoTitle: "Solar Energy Solutions Nigeria | Hybrid Power Systems",
    seoDescription:
      "Reliable solar energy solutions in Nigeria — solar installation, lithium batteries and hybrid power systems for homes, offices and industries.",
  },
  {
    slug: "iot-device-management",
    icon: Cpu,
    title: "IoT Device Management",
    shortTitle: "IoT Management",
    tagline: "One Cloud. Every Device.",
    desc: "Manage every connected device from a single secure cloud platform.",
    image: heroIot,
    features: ["Device Monitoring", "Cloud Management", "Firmware Updates", "Analytics"],
    overview:
      "Bring every sensor, gateway and connected endpoint under one secure cloud roof. Our IoT platform provides real-time telemetry, OTA firmware updates, role-based access and powerful analytics across thousands of devices.",
    capabilities: [
      { title: "Centralized Fleet View", desc: "Live status, location and health of every device on a single pane of glass." },
      { title: "OTA Firmware Updates", desc: "Push secure, signed updates to fleets without site visits — staged or instant." },
      { title: "Edge-to-Cloud Telemetry", desc: "MQTT/HTTPS pipelines with offline buffering and tamper-proof logs." },
      { title: "Custom Dashboards", desc: "Build KPIs, alerts and reports tailored to your operations." },
      { title: "Device Provisioning", desc: "Zero-touch onboarding with certificate-based identity per device." },
      { title: "Open APIs", desc: "RESTful and webhook integrations into your ERP, BI or ticketing tools." },
    ],
    industries: ["Smart Buildings", "Logistics & Fleet", "Manufacturing", "Utilities & Metering", "Healthcare", "Agritech"],
    process: [
      { step: "01", title: "Discovery", desc: "Map your devices, protocols, connectivity and integration needs." },
      { step: "02", title: "Onboard", desc: "Provision devices, configure policies and connect to the platform." },
      { step: "03", title: "Operate", desc: "Monitor, control and update fleets from the cloud, in real time." },
      { step: "04", title: "Optimize", desc: "Use telemetry analytics to drive efficiency, uptime and cost savings." },
    ],
    benefits: [
      "Eliminate manual site visits with remote OTA updates",
      "Detect and resolve incidents before they impact operations",
      "Scale from 10 to 100,000+ devices without re-architecting",
      "Enterprise-grade security with encryption at rest and in transit",
    ],
    faqs: [
      { q: "What protocols do you support?", a: "MQTT, HTTPS, CoAP, Modbus, BACnet, LoRaWAN and most industry standards." },
      { q: "Is the platform multi-tenant?", a: "Yes — role-based access controls let you isolate sites, teams and customers." },
      { q: "Can it integrate with my existing systems?", a: "Absolutely. We provide REST APIs, webhooks and pre-built connectors for popular ERPs and BI tools." },
    ],
    overviewSection: { eyebrow: "Why our IoT platform", title: "One console for every connected thing", subtitle: "Sensors, gateways and edge devices unified under enterprise-grade control." },
    capabilitiesSection: { eyebrow: "Platform Capabilities", title: "Operate fleets like a single device", subtitle: "Provision, monitor, update and analyze — without a site visit." },
    processSection: { eyebrow: "Rollout Path", title: "From first device to full fleet in weeks", subtitle: "A staged approach proven across thousands of endpoints." },
    faqsSection: { eyebrow: "IoT FAQs", title: "What architects ask before adopting" },
    industriesHeading: "Sectors running on our platform",
    benefitsHeading: "Operational wins our platform delivers",
    stats: [
      { value: "100k+", label: "Devices supported" },
      { value: "OTA", label: "Zero-touch updates" },
      { value: "REST", label: "Open API access" },
      { value: "AES-256", label: "End-to-end encryption" },
    ],
    seoTitle: "IoT Device Management Platform | Cloud Connected Devices",
    seoDescription:
      "Manage thousands of connected devices from one secure cloud platform. OTA updates, real-time monitoring, analytics and APIs for IoT at scale.",
  },
  {
    slug: "tech-consultancy",
    icon: Lightbulb,
    title: "Tech Consultancy & Advisory",
    shortTitle: "Consultancy",
    tagline: "Strategy That Ships.",
    desc: "Strategic guidance to plan, modernize and operate your technology stack.",
    image: heroTech,
    features: ["Digital Transformation", "Infrastructure Planning", "Technology Audits", "IT Strategy"],
    overview:
      "From CIO advisory to hands-on transformation programs, we help you choose the right technology, architect it properly and operate it reliably. Vendor-neutral recommendations grounded in measurable business outcomes.",
    capabilities: [
      { title: "Digital Transformation", desc: "Roadmaps that align technology investments with revenue and efficiency goals." },
      { title: "Infrastructure Planning", desc: "Cloud, hybrid and on-prem architecture designed for resilience and cost control." },
      { title: "Technology Audits", desc: "Independent assessment of your stack, vendors, security and operations." },
      { title: "Cybersecurity Strategy", desc: "Risk frameworks, policies and tooling aligned to ISO/NIST best practices." },
      { title: "Vendor Selection", desc: "Unbiased RFP support to negotiate the right tools at the right price." },
      { title: "Fractional CTO / CIO", desc: "Executive-level technology leadership on a retainer that scales with you." },
    ],
    industries: ["Financial Services", "Healthcare", "Education", "Government & Public Sector", "Retail", "Energy"],
    process: [
      { step: "01", title: "Discover", desc: "Stakeholder interviews, current-state audit and benchmarking." },
      { step: "02", title: "Define", desc: "Clear target architecture, roadmap and prioritized backlog." },
      { step: "03", title: "Deliver", desc: "Hands-on program management with milestone-based execution." },
      { step: "04", title: "Sustain", desc: "Governance, KPI tracking and continuous improvement support." },
    ],
    benefits: [
      "Vendor-neutral advice tied to business outcomes",
      "Faster, lower-risk technology decisions",
      "Reduced TCO through right-sizing and consolidation",
      "Executive clarity and board-ready reporting",
    ],
    faqs: [
      { q: "Do you implement the recommendations?", a: "Yes — we can stop at advisory or take on full program delivery, your choice." },
      { q: "How do you charge?", a: "Fixed-scope projects, monthly retainers or outcome-based engagements." },
      { q: "Are you tied to any vendor?", a: "No. We are vendor-neutral and recommend whatever best fits your needs and budget." },
    ],
    overviewSection: { eyebrow: "Why partner with us", title: "Advisory that turns into outcomes", subtitle: "Vendor-neutral strategy backed by hands-on delivery muscle." },
    capabilitiesSection: { eyebrow: "Advisory Practice", title: "Where we move the needle", subtitle: "From boardroom strategy to in-the-trenches execution." },
    processSection: { eyebrow: "Engagement Model", title: "A four-phase path to measurable change", subtitle: "Discover, define, deliver, sustain — repeatable and accountable." },
    faqsSection: { eyebrow: "Advisory FAQs", title: "What leaders ask before engaging us" },
    industriesHeading: "Sectors we advise",
    benefitsHeading: "Outcomes you can take to the board",
    stats: [
      { value: "100%", label: "Vendor-neutral" },
      { value: "C-Suite", label: "Senior advisors" },
      { value: "ISO/NIST", label: "Aligned frameworks" },
      { value: "ROI", label: "Outcome-led delivery" },
    ],
    seoTitle: "Technology Consultancy & IT Advisory Services",
    seoDescription:
      "Vendor-neutral technology consultancy and IT advisory — digital transformation, infrastructure planning, technology audits and CIO services.",
  },
  {
    slug: "gps-tracking-asset-management",
    icon: MapPin,
    title: "GPS Tracking & Asset Management",
    shortTitle: "GPS Tracking",
    tagline: "Know Where. Know When.",
    desc: "Real-time visibility for vehicles, equipment and critical assets.",
    image: heroGps,
    features: ["Fleet Tracking", "Geofencing", "Asset Monitoring", "Reporting"],
    overview:
      "Track every vehicle, container and high-value asset in real time. Our GPS platform combines hardware, connectivity and analytics to cut fuel costs, prevent theft and improve operational efficiency across your fleet.",
    capabilities: [
      { title: "Real-Time Fleet Tracking", desc: "Live location, speed, ignition and driver behavior on web and mobile dashboards." },
      { title: "Geofencing & Alerts", desc: "Custom zones with instant push, SMS and email alerts on entry, exit or idling." },
      { title: "Fuel Monitoring", desc: "Detect siphoning, drift and refueling events with calibrated fuel sensors." },
      { title: "Driver Behavior Scoring", desc: "Reduce accidents and insurance claims with harsh-braking and over-speed reports." },
      { title: "Asset & Container Tracking", desc: "Long-life battery trackers for trailers, generators, equipment and high-value cargo." },
      { title: "API & Dispatch Integration", desc: "Plug into your TMS, ERP or dispatch software for end-to-end visibility." },
    ],
    industries: ["Logistics & Haulage", "Ride-Hailing & Taxi", "Construction", "Oil & Gas", "Cold Chain", "Government Fleets"],
    process: [
      { step: "01", title: "Assess Fleet", desc: "Understand fleet size, vehicle types and operational pain points." },
      { step: "02", title: "Install Hardware", desc: "Tamper-proof GPS units fitted by certified technicians at your location." },
      { step: "03", title: "Onboard Team", desc: "Training for dispatchers, managers and drivers on the dashboard and apps." },
      { step: "04", title: "Track & Improve", desc: "Ongoing reports and optimization to drive measurable savings." },
    ],
    benefits: [
      "Cut fuel costs by 15-30% through better routing and behavior",
      "Recover stolen vehicles fast with covert tracking",
      "Improve customer ETAs and dispatch efficiency",
      "Lower insurance premiums with verified telematics data",
    ],
    faqs: [
      { q: "Will drivers know they're tracked?", a: "Yes — we recommend transparent rollout, but covert tracking is available for high-risk assets." },
      { q: "What happens if a vehicle goes off-network?", a: "Devices store location data offline and auto-sync once back in coverage." },
      { q: "Is there a monthly fee?", a: "Yes — affordable per-device monthly subscriptions cover SIM, platform and support." },
    ],
    overviewSection: { eyebrow: "Why our tracking platform", title: "Total visibility over moving value", subtitle: "Vehicles, trailers and high-value assets — tracked, scored and protected." },
    capabilitiesSection: { eyebrow: "Telematics Suite", title: "More than dots on a map", subtitle: "A complete telematics stack built for African road and route realities." },
    processSection: { eyebrow: "Rollout Plan", title: "From first install to fleet-wide savings", subtitle: "We handle hardware, training and tuning so adoption sticks." },
    faqsSection: { eyebrow: "GPS FAQs", title: "What fleet managers ask us most" },
    industriesHeading: "Fleets that trust us",
    benefitsHeading: "Measurable savings, week one",
    stats: [
      { value: "30%", label: "Fuel saved on avg." },
      { value: "Live", label: "Real-time updates" },
      { value: "24/7", label: "Recovery support" },
      { value: "Offline", label: "Buffered tracking" },
    ],
    seoTitle: "GPS Tracking Services Nigeria | Fleet & Asset Management",
    seoDescription:
      "Real-time GPS tracking services for fleets and assets in Nigeria. Geofencing, fuel monitoring, driver scoring and 24/7 support by WeThinkTech.",
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
