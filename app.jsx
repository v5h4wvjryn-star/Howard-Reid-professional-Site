import React, { useState, useEffect } from 'react';
import { Briefcase, Code, User, Mail, Home, ArrowUp, Zap, Download, Linkedin, CheckCircle, Lightbulb, ArrowLeft, ArrowRight } from 'lucide-react';

// --- FULL PROJECT DETAIL DATA ---
const PROJECT_DETAILS = {
  'infra-optimization': {
    title: "Enterprise Infrastructure & Microsoft 365 Optimization",
    context: "Implemented a full Modern Workplace solution across a global organization, focusing on Zero Trust, operational efficiency, and cost reduction. The scope included end-user computing, print infrastructure, and cloud storage migration.",
    responsibilities: [
      "Directed the implementation of a Hybrid Azure AD and ZTNA framework to fortify the security posture for 2,000+ employees and 30+ applications.",
      "Spearheaded the migration of 165+ physical servers from on-premises data centers to Azure, achieving 99.9% uptime and high availability.",
      "Eliminated 23 physical print servers using PrinterLogic, dramatically reducing help desk tickets and management overhead.",
      "Oversaw the deployment of Dell/Intune connected provisioning, streamlining device setup.",
    ],
    benefits: [
      "Achieved $175K in annual labor savings by cutting device setup time from 6 hours to 35 minutes via Azure AD/Intune.",
      "Reduced help desk tickets by 70% and management time by 90% through print infrastructure overhaul.",
      "Led data migration to Azure, boosting application performance by 40% and slashing recovery time (RTO) to 4 hours.",
      "Strengthened security posture for 2,000+ employees across 30+ applications by implementing Hybrid Azure AD.",
    ],
    technical: [
      "Azure/Microsoft 365 (AAD, Intune, Exchange Online)", 
      "Zero Trust Network Architecture (ZTNA)", 
      "PrinterLogic", 
      "Active Directory/GPO", 
      "Windows Server/SCCM",
    ],
  },
  'telecom-overhaul': {
    title: "Global Telecom Overhaul & Cloud Voice Migration",
    context: "Spearheaded a strategic migration of legacy, fragmented telecom infrastructure to scalable, unified, cloud-based voice and communication systems to support over 2000 global users.",
    responsibilities: [
      "Managed the migration of 2000+ users across global locations from traditional phone systems to Microsoft Teams and RingCentral.",
      "Negotiated new long-term voice services contract, achieving significant recurring cost savings.",
      "Developed and executed the internal communication and training strategy for the mass adoption of new cloud collaboration tools.",
      "Ensured regulatory compliance across all operating regions during the transition.",
    ],
    benefits: [
      "Reduced annual telecom expenses by $400K by migrating 2000+ users to cloud-based systems.",
      "Achieved a 30% reduction in monthly operating expenses through contract negotiation.",
      "Enabled secure, reliable remote work capabilities for over 2000 employees globally.",
      "Improved collaboration and internal communication efficiency through a unified platform.",
    ],
    technical: [
      "Microsoft Teams Voice/RingCentral", 
      "SIP/VOIP Telephony", 
      "Cisco Call Manager/Unity", 
      "Global Network Architecture", 
      "Vendor Management",
    ],
  },
  'security-architecture': {
    title: "Hybrid Azure AD & Zero Trust Security Architecture",
    context: "A multi-phase project focused on modernizing Identity and Access Management (IAM) and network security to eliminate security gaps and achieve 100% multi-factor authentication (MFA) adoption across the enterprise.",
    responsibilities: [
      "Directed comprehensive cybersecurity initiatives, including third-party penetration tests, risk assessments, and compliance audits.",
      "Implemented Azure AD Join for 2000+ employees and 2800+ devices to secure access from any location.",
      "Established enterprise-wide cybersecurity awareness training (KnowBe4) to reduce human layer risk.",
      "Led the strategic integration of legacy systems into the modern IAM framework.",
    ],
    benefits: [
      "Achieved 100% MFA adoption and strengthened enterprise IAM for 1800+ users.",
      "Measurable reduction in security risk exposure by establishing a formal IT Security organization.",
      "Reduction in security incidents by 85% post-implementation of ZTNA policies.",
      "Improved overall security resilience and strengthened regulatory posture.",
    ],
    technical: [
      "Zero Trust Network Access (ZTNA)", 
      "Identity and Access Management (IAM)", 
      "Azure AD Join/Conditional Access", 
      "Multi-Factor Authentication (MFA)", 
      "KnowBe4/Security Awareness Training",
    ],
  },
  'pmo-itsm-development': {
    title: "PMO Establishment & IT Service Management (ITSM) Overhaul",
    context: "Created a formal Project Management Office (PMO) and implemented a centralized IT Service Desk to standardize processes, improve service delivery, and automate the employee lifecycle.",
    responsibilities: [
      "Established the PMO charter, standardized methodologies (Agile/Waterfall hybrid), and governance frameworks for IT projects.",
      "Implemented a comprehensive IT Service Desk solution (FreshService), covering Incident, Request, and Change Management.",
      "Integrated the Service Desk with HR platforms to automate employee onboarding, offboarding, and asset lifecycle management.",
      "Developed key performance indicators (KPIs) and reporting mechanisms to track project delivery success and service desk efficiency.",
    ],
    benefits: [
      "Improved project delivery success rates and organizational efficiency by standardizing methodologies.",
      "Automated over 60% of common IT requests through the new Service Desk and HR integration.",
      "Achieved 95% compliance on change management protocols, reducing unplanned downtime by 40%.",
      "Significantly improved end-user satisfaction with IT services due to clear processes and faster resolution times.",
    ],
    technical: [
      "FreshService (ITSM)", 
      "Project Management Office (PMO) Governance", 
      "Agile/Waterfall Methodologies", 
      "HRIS/IT System Integration (API)", 
      "SLA and KPI Reporting",
    ],
  },
  'ma-integration': {
    title: "M&A Integration & Strategic Divestiture Management",
    context: "Led multiple successful IT integrations following acquisitions and managed a complex IT separation (divestiture), ensuring seamless business continuity and achieving significant cost synergies.",
    responsibilities: [
      "Managed the full IT due diligence and post-merger integration of acquired entities, consolidating systems and aligning security policies.",
      "Directed the strategic divestiture of a $20M+ business unit, executing the complex separation of IT infrastructure, applications, and data within a tight 90-day transition timeline.",
      "Negotiated and managed Transition Service Agreements (TSAs) to maintain operational stability during the separation period.",
      "Identified and realized over $5 million in annual IT cost synergies through vendor contract consolidation and system rationalization.",
    ],
    benefits: [
      "Successfully executed three M&A integrations and one major IT divestiture with zero business disruption.",
      "Delivered $5M+ in annual IT cost synergies through vendor consolidation and system alignment across integrated entities.",
      "Secured the smooth, compliant separation of critical data and systems for a divested entity within the required timeframe.",
      "Established a repeatable, efficient M&A playbook for future transactions.",
    ],
    technical: [
      "Due Diligence & Valuation", 
      "Transition Service Agreements (TSAs)", 
      "Enterprise System Migration", 
      "Vendor Contract Consolidation", 
      "Data Security & Compliance",
    ],
  },
};
// --- END FULL PROJECT DETAIL DATA ---


// --- MOCK DATA ---
const MOCK_DATA = {
  name: "Howard Reid",
  tagline: "Visionary IT Leader | Strategic Advisor | Enterprise Transformation",
  // 💡 IMPORTANT: Replace the URL below with the public link to your professional photo.
  profileImageUrl: "https://placehold.co/128x128/9CA3AF/1F2937?text=HR", 
  
  story: "A passionate and results-driven professional with over 27 years of experience driving technology strategy, infrastructure modernization, and enterprise transformation. I've successfully driven multi-million dollar savings and strengthened security across global operations. A visionary leader known for aligning technology with business outcomes, fostering innovation, and optimizing resources at scale. I am committed to continuous learning and technical excellence, and I leverage technology to drive organizational success, support team development, foster collaborative partnerships, and mentor my team to enhance performance and achieve company objectives.",
  
  strengths: [
    { name: "Restorative", description: "Natural problem solver with a focus on diagnosing and fixing complex infrastructure challenges." },
    { name: "Strategic", description: "Strategic thinker with the ability to anticipate roadblocks and design scalable solutions." },
    { name: "Achiever", description: "High personal drive and accountability to deliver results in fast-paced environments." },
    { name: "Ideation", description: "Creative innovator who generates new ideas to optimize systems and processes." },
    { name: "Arranger", description: "Skilled at coordinating people, tools, and priorities to execute effectively under pressure." }
  ],
  
  skills: [
    { name: "IT Strategy & Architecture", level: 95, icon: <Briefcase className="w-5 h-5 text-indigo-400" /> },
    { name: "Cloud Migrations (Azure/AWS)", level: 90, icon: <Code className="w-5 h-5 text-blue-400" /> },
    { name: "Cybersecurity & Zero Trust", level: 92, icon: <Code className="w-5 h-5 text-red-400" /> },
    { name: "ITSM & Process Improvement", level: 88, icon: <Briefcase className="w-5 h-5 text-green-400" /> },
    { name: "M&A Integration & Divestiture", level: 85, icon: <Briefcase className="w-5 h-5 text-orange-400" /> },
    { name: "Budgeting & Vendor Management", level: 90, icon: <Briefcase className="w-5 h-5 text-yellow-400" /> },
  ],
  
  achievements: [ 
    { title: "Strategic Cost Optimization", detail: "Delivered $5M+ in annual IT cost synergies through strategic acquisition integration and achieved $750K annual savings through Azure cloud migration and Microsoft 365 optimization." },
    { title: "Infrastructure Modernization", detail: "Led enterprise-wide transformations including data center consolidation (165+ servers to cloud), Zero Trust network security implementation, and elimination of legacy infrastructure." },
    { title: "Security Leadership", detail: "Established a formal IT Security organization to strengthen enterprise cybersecurity strategy, governance and Zero Trust alignment, while institutionalizing enterprise-wide cybersecurity awareness training." },
    { title: "PMO & ITSM Development", detail: "Established and led a Project Management Office (PMO), implementing standardized governance, and built a comprehensive IT Service Desk with FreshService to automate employee lifecycle management." },
  ],

  // ALL Project Summaries used on the main page
  projectSummaries: [
    { id: 'infra-optimization', title: "Enterprise Infrastructure & Microsoft 365 Optimization", shortDescription: "Implemented a full Modern Workplace solution across a global organization, achieving $175K annual labor savings and reducing help desk tickets by 70%." },
    { id: 'security-architecture', title: "Hybrid Azure AD & Zero Trust Security Architecture", shortDescription: "Designed and implemented an AAD and ZTNA framework, achieving 100% MFA adoption and reducing security incidents by 85%." },
    { id: 'telecom-overhaul', title: "Global Telecom Overhaul & Cloud Voice Migration", shortDescription: "Spearheaded a strategic migration of legacy telecom to cloud voice, cutting annual expenses by $400K and enabling secure remote work." },
    { id: 'ma-integration', title: "M&A Integration & Strategic Divestiture Management", shortDescription: "Led M&A integrations and a major IT divestiture, realizing $5M+ in annual IT cost synergies with zero business disruption." },
    { id: 'pmo-itsm-development', title: "PMO Establishment & IT Service Management (ITSM) Overhaul", shortDescription: "Created a formal PMO and implemented FreshService ITSM, automating 60% of common requests and improving project success rates." },
  ],
  
  experience: [
    { period: "MAY 2025 - PRESENT", role: "Strategic Advisor, Business Development & IT Operations", company: "Blue Star Equity Group", location: "FORT WORTH, TX", highlights: [
        "Provided strategic, operational, and technology consulting across the equity group and its diverse portfolio companies.",
        "Architected foundational IT, Cloud, and Automation Frameworks to ensure scalable, rapid growth for multiple service businesses.",
        "Developed robust financial models and compelling business cases to support technology investments, successfully defining operational and strategic roadmaps."
    ]},
    { period: "JUN 2023 - AUG 2024", role: "Director of Infrastructure, IT Security, Operations & End User Computing", company: "Liberty Steel USA", location: "PEORIA, IL/DALLAS, TX", highlights: [
        "Managed $15M+ IT budget, improving security and reducing costs by 35% in network overhaul.",
        "Established a formal IT Security organization to strengthen enterprise cybersecurity posture and governance.",
        "Developed a centralized IT Service Desk with FreshService, standardizing Incident/Request/Change management processes."
    ]},
    { period: "MAY 2021 - JUN 2023", role: "Sr. Director of IT Strategy & Architecture", company: "Wilks Brothers LLC", location: "FORT WORTH, TX", highlights: [
        "Managed $12M IT budget, enhancing cloud efficiency and cutting costs by $750K annually.",
        "Led enterprise-wide transformations including data center consolidation (165+ servers to cloud) and Zero Trust network security implementation.",
        "Reduced telecom expenses by $400K annually by migrating 2000+ users to cloud based systems."
    ]},
  ],
  
  linkedinUrl: "https://www.linkedin.com/in/howardareid",
  // Note: The file name must match the one referenced in the HTML tag's download attribute.
  resumeDownloadLink: "/Howard-Reid-7.pdf" 
};
// --- END MOCK DATA ---

// --- UTILITY COMPONENTS ---

const useScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return { isVisible, scrollToTop };
};

const SkillBar = ({ name, level, icon }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-1 text-gray-700 dark:text-gray-300">
      <span className="flex items-center font-medium">
        {icon}
        <span className="ml-2">{name}</span>
      </span>
      <span className="font-semibold text-sm">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div 
        className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const AchievementCard = ({ title, detail }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition duration-300 transform hover:shadow-2xl">
    <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400 flex items-center">
      <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{detail}</p>
  </div>
);

const ExperienceItem = ({ period, role, company, location, highlights }) => (
  <div className="relative pl-8 sm:pl-32 pb-16 group">
    {/* Line and Dot */}
    <div className="absolute left-0 sm:left-10 top-0 w-px bg-gray-300 dark:bg-gray-700 h-full group-last:h-1/2"></div>
    <div className="absolute -left-1 sm:left-9 top-0 w-3 h-3 bg-indigo-600 rounded-full ring-4 ring-white dark:ring-gray-900 z-10"></div>
    
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
      <div className="sm:w-20 sm:text-right mb-2 sm:mb-0">
        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">{period}</span>
      </div>
      <div className="sm:flex-1 sm:pl-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{role}</h3>
        <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{company} <span className="text-gray-500 dark:text-gray-400 font-normal">| {location}</span></p>
        <ul className="list-disc space-y-2 text-gray-700 dark:text-gray-300 ml-4">
          {highlights.map((h, i) => (
            <li key={i} className="text-sm">{h}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// --- NEW COMPONENTS FOR PROJECTS ---

const ProjectSummaryCard = ({ id, title, shortDescription, onSelectProject }) => (
    <button
        onClick={() => onSelectProject(id)}
        className="text-left w-full h-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transition duration-300 hover:shadow-indigo-500/30 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
    >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-start">
            <Lightbulb className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-indigo-600" />
            {title}
        </h3>
        <p className="text-md text-gray-600 dark:text-gray-300 mb-5">{shortDescription}</p>
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold flex items-center justify-end">
            Read Full Case Study
            <ArrowRight className="w-4 h-4 ml-2"/> 
        </span>
    </button>
);

const ProjectDetailPage = ({ projectData, onGoBack }) => (
    <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl">
            <button
                onClick={onGoBack}
                className="mb-8 flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 transition duration-150"
            >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Projects List
            </button>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                {projectData.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 border-b pb-4 border-gray-200 dark:border-gray-700 italic">
                {projectData.context}
            </p>

            {/* Key Responsibilities */}
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-indigo-200 dark:border-indigo-800 pb-2">
                    <Briefcase className="w-6 h-6 mr-3 text-indigo-600" />
                    Key Responsibilities
                </h2>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                    {projectData.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start text-base">
                            <span className="w-2 h-2 mt-2 mr-3 bg-indigo-500 rounded-full flex-shrink-0"></span>
                            <span>{r}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Results and Benefits */}
            <div className="mb-10 p-6 bg-indigo-50 dark:bg-gray-900 rounded-xl">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-indigo-300 dark:border-indigo-700 pb-2">
                    <Zap className="w-6 h-6 mr-3 text-green-600" />
                    Results & Key Benefits
                </h2>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                    {projectData.benefits.map((b, i) => (
                        <li key={i} className="flex items-start text-base">
                            <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-500" />
                            <span>{b}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Technical Stack */}
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-indigo-200 dark:border-indigo-800 pb-2">
                    <Code className="w-6 h-6 mr-3 text-indigo-600" />
                    Technical Environment
                </h2>
                <div className="flex flex-wrap gap-3">
                    {projectData.technical.map((tech, i) => (
                        <span key={i} className="px-4 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 rounded-full text-sm font-medium shadow-sm">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-12 text-center p-6 bg-gray-100 dark:bg-gray-700 rounded-xl">
                <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold">
                    This project highlights my ability to drive massive enterprise change, cut costs, and improve security posture simultaneously.
                </p>
                <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="mt-4 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                >
                    Discuss this Project
                </button>
            </div>
        </div>
    </section>
);


// --- MAIN APP COMPONENT ---

// Export the App component for use in the HTML file
// window.App is assigned in the subsequent script tag in the HTML file for Babel
export default function App() {
  const { isVisible, scrollToTop } = useScrollToTop();
  const [darkMode, setDarkMode] = useState(true); 
  // State for multi-page simulation
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'project'
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    // Manages the dark mode class on the root HTML element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleScroll = (id) => {
    // Only scroll if we are on the home page
    if (currentPage === 'home') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
        // If navigation is clicked from a project page, return to home and then scroll
        setCurrentPage('home');
        setSelectedProjectId(null);
        // Timeout ensures the page state updates before attempting to scroll
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  };
  
  const handleSelectProject = (id) => {
    // Navigates to the project's 'own page' view
    setSelectedProjectId(id);
    setCurrentPage('project');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoBack = () => {
    // Handles the 'Back to Projects List' button and scrolls back to the list
    setSelectedProjectId(null);
    setCurrentPage('home');
    setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 50);
  };
  

  const navLinks = [
    { name: "Home", id: "home", icon: Home },
    { name: "Leadership", id: "leadership", icon: User },
    { name: "Skills", id: "skills", icon: Code },
    { name: "Projects", id: "projects", icon: Lightbulb },
    { name: "Experience", id: "experience", icon: Briefcase }, 
    { name: "Contact", id: "contact", icon: Mail },
  ];
  
  const currentProjectData = selectedProjectId ? PROJECT_DETAILS[selectedProjectId] : null;

  // --- RENDERING ---
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-inter">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button onClick={() => {setCurrentPage('home'); setSelectedProjectId(null);}} className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
            {MOCK_DATA.name}<span className="text-gray-900 dark:text-white">.me</span>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition duration-150 flex items-center"
              >
