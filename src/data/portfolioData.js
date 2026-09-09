export const portfolioData = {
  personal: {
    name: "Paras Sahu",
    role: "Fullstack Web Developer",
    tagline: "Building scalable Node.js architectures, leading enterprise modernizations, and accelerating delivery with Generative AI.",
    bio: "Innovative Full-Stack Developer specializing in building scalable Node.js architectures and leading enterprise system modernizations. Adept at leveraging Generative AI to accelerate development cycles, notably migrating legacy middleware into high-performing APIs. Extensive experience integrating complex enterprise platforms—including Salesforce, Dynamics 365, SAP, and secure OAuth/SAML gateways—to deliver robust solutions that streamline business operations and drive growth.",
    location: "Kawardha 491995, Chhattisgarh, India",
    email: "paraskumarsahu65@gmail.com",
    phones: {
      mobile: "7974674305",
      home: "9669324552"
    },
    phoneList: [
      { label: "Mobile", number: "7974674305", display: "+91 7974674305", href: "tel:7974674305", isPrimary: true },
      { label: "Home", number: "9669324552", display: "+91 9669324552", href: "tel:9669324552", isPrimary: false }
    ],
    whatsapp: "917974674305",
    github: "https://github.com/Paras65",
    linkedin: "https://www.linkedin.com/in/paras-sahu/",
    resumeUrl: "/cv.pdf",
    photoUrl: "/hero-img.png",
    yearsExperience: "5+ Years",
    currentCompany: "Capgemini",
    availability: "Open to High-Impact Opportunities & Technical Leadership"
  },
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Chhattisgarh Swami Vivekanand Technical University",
      period: "Jun 2016 – Jun 2020",
      thesis: "E-Book Seller Web App (Web Platforms)",
      description: "Comprehensive engineering capstone and thesis focused on web platforms, digital literature distribution, relational database modelling, and secure payment processing."
    }
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Capgemini",
      product: "Enterprise Integration Modernization",
      period: "9 Jun 2025 – Present",
      duration: "Present",
      isCurrent: true,
      highlights: [
        "Spearheaded the end-to-end modernization of enterprise integrations by migrating legacy MuleSoft APIs to a scalable Node.js architecture.",
        "Leveraged Generative AI tools to automate the code conversion process, significantly reducing manual development effort and accelerating the migration timeline.",
        "Successfully migrated and re-architected complex backend integrations, ensuring seamless connectivity with SAP systems, SAP HANA databases, and external REST APIs.",
        "Maintained zero system downtime and ensured data integrity during the transition of critical business workflows."
      ],
      tags: ["Node.js", "Generative AI", "MuleSoft Migration", "SAP Systems", "SAP HANA", "REST APIs", "Microservices", "System Modernization"]
    },
    {
      role: "Node Developer",
      company: "AROSYS / VYAKAR TECHNOLOGIES PVT. LTD.",
      product: "LeadAngel",
      payrollName: "AROSYS / VYAKAR TECHNOLOGIES PVT. LTD.",
      period: "1 April 2021 – 22 May 2025",
      duration: "4 Years, 1 Month",
      isCurrent: false,
      highlights: [
        "Deconstructed a monolithic backend structure into modular microservices, significantly improving deployment speed and system maintainability.",
        "Engineered seamless integrations with enterprise scheduling and communication tools, migrating Google Calendar, Microsoft Calendar, Slack, and Twilio APIs to the modern backend framework.",
        "Fortified system security by developing strictly governed, secure REST APIs equipped with modern authentication (OAuth/JWT) for all external data exchanges.",
        "Enhanced overall system performance during the microservices transition by identifying and rewriting inefficient MySQL queries, resulting in faster data processing for all external APIs."
      ],
      tags: ["Node.js", "Express.js", "Microservices", "MySQL", "MongoDB", "OAuth 2.0", "JWT", "Google Calendar API", "Microsoft Calendar", "Slack API", "Twilio", "Salesforce CRM", "Dynamics 365"]
    }
  ],
  skillCategories: [
    {
      category: "Emerging Tech & AI",
      description: "Generative AI tooling, automated code migration & workflow acceleration",
      skills: [
        { name: "Generative AI", level: "Advanced", icon: "Sparkles" },
        { name: "Code Conversion & Automation", level: "Advanced", icon: "Bot" }
      ]
    },
    {
      category: "Backend & APIs",
      description: "Scalable Node.js architectures, event loops, GraphQL & enterprise middleware",
      skills: [
        { name: "Node.js", level: "Expert", icon: "Server" },
        { name: "Express.js", level: "Expert", icon: "Cpu" },
        { name: "REST APIs", level: "Expert", icon: "Workflow" },
        { name: "GraphQL", level: "Advanced", icon: "Network" },
        { name: "MuleSoft Migration", level: "Advanced", icon: "Layers" }
      ]
    },
    {
      category: "Languages",
      description: "Strongly typed and asynchronous development languages",
      skills: [
        { name: "JavaScript (ES6+)", level: "Expert", icon: "FileJson" },
        { name: "TypeScript", level: "Advanced", icon: "Braces" },
        { name: "HTML5", level: "Expert", icon: "FileCode" },
        { name: "CSS3", level: "Advanced", icon: "Palette" }
      ]
    },
    {
      category: "Databases & Storage",
      description: "Relational, in-memory, document, and analytical databases",
      skills: [
        { name: "MySQL", level: "Expert", icon: "Database" },
        { name: "MongoDB", level: "Advanced", icon: "FolderArchive" },
        { name: "SAP HANA", level: "Advanced", icon: "Database" }
      ]
    },
    {
      category: "Enterprise & Third-Party Integrations",
      description: "Enterprise CRM ecosystems, ERPs, messaging protocols & calendars",
      skills: [
        { name: "Salesforce CRM", level: "Advanced", icon: "Layers" },
        { name: "Dynamics 365 (D365)", level: "Advanced", icon: "Building2" },
        { name: "SAP Systems", level: "Advanced", icon: "Building2" },
        { name: "Stripe OAuth", level: "Advanced", icon: "CreditCard" },
        { name: "Slack API", level: "Advanced", icon: "MessageSquare" },
        { name: "Twilio", level: "Advanced", icon: "PhoneCall" },
        { name: "Microsoft Teams", level: "Advanced", icon: "Users" },
        { name: "Google & MS Calendar", level: "Advanced", icon: "Calendar" }
      ]
    },
    {
      category: "Security & Authentication",
      description: "Enterprise identity federation, access control & encryption standards",
      skills: [
        { name: "OAuth 2.0", level: "Expert", icon: "Key" },
        { name: "JWT (JSON Web Tokens)", level: "Expert", icon: "ShieldCheck" },
        { name: "SAML", level: "Advanced", icon: "Lock" },
        { name: "SSO (Single Sign-On)", level: "Advanced", icon: "Shield" }
      ]
    },
    {
      category: "Cloud & DevOps",
      description: "Cloud platforms, containerization & CI/CD deployment pipelines",
      skills: [
        { name: "Google Cloud (GCP)", level: "Intermediate", icon: "Cloud" },
        { name: "Docker", level: "Advanced", icon: "Box" },
        { name: "Kubernetes", level: "Intermediate", icon: "Boxes" },
        { name: "Git", level: "Expert", icon: "GitBranch" },
        { name: "GitHub", level: "Expert", icon: "Github" },
        { name: "Bitbucket", level: "Advanced", icon: "GitCommit" },
        { name: "NPM", level: "Expert", icon: "Package" }
      ]
    },
    {
      category: "Frontend Frameworks",
      description: "Modern, responsive, user-centric interfaces & state management",
      skills: [
        { name: "React", level: "Expert", icon: "Code2" },
        { name: "Bootstrap", level: "Advanced", icon: "Layout" },
        { name: "Tailwind CSS", level: "Advanced", icon: "Sparkles" }
      ]
    }
  ],
  projects: [
    {
      id: "mulesoft-nodejs-modernization",
      title: "Enterprise Middleware Modernization",
      subtitle: "MuleSoft to Node.js & SAP HANA Migration (Capgemini)",
      category: "Enterprise Architecture",
      featured: true,
      description: "Spearheaded the end-to-end modernization of enterprise integrations by migrating legacy MuleSoft APIs to high-performance Node.js microservices. Leveraged Generative AI for automated code conversion, achieving zero system downtime and seamless SAP HANA connectivity.",
      technologies: ["Node.js", "Generative AI", "SAP HANA", "SAP Systems", "MuleSoft", "REST APIs", "Docker"],
      highlights: [
        "Leveraged Generative AI tools to automate legacy code conversion and accelerate migration speed",
        "Re-architected complex backend integrations connecting SAP systems & SAP HANA databases",
        "Maintained 100% data integrity and zero system downtime across business-critical workflows",
        "Engineered standardized RESTful microservices replacing legacy middleware bottlenecks"
      ],
      githubUrl: "https://github.com",
      liveUrl: "#"
    },
    {
      id: "leadangel-crm-connector",
      title: "LeadAngel Enterprise Microservices Engine",
      subtitle: "Monolith to Microservices & B2B Sync (4+ Years)",
      category: "Backend & Integrations",
      featured: true,
      description: "Deconstructed a monolithic backend into modular microservices, architecting high-throughput scheduling and communication integrations with Google Calendar, MS Calendar, Slack, Twilio, Salesforce, and Dynamics 365.",
      technologies: ["Node.js", "Express.js", "Microservices", "MySQL", "MongoDB", "OAuth 2.0", "JWT", "Salesforce CRM", "Dynamics 365"],
      highlights: [
        "Deconstructed monolith into high-efficiency microservices for faster deployments and maintainability",
        "Integrated Google Calendar, Microsoft Calendar, Slack, and Twilio communication APIs",
        "Rewrote inefficient MySQL queries to accelerate sub-second data processing under high load",
        "Secured all external data exchanges with strictly governed OAuth 2.0 and JWT token handshakes"
      ],
      githubUrl: "https://github.com",
      liveUrl: "#"
    },
    {
      id: "trip-booking-app",
      title: "Full Stack Web App Trip Booking",
      subtitle: "End-to-End Travel Reservation System",
      category: "Full Stack",
      featured: false,
      description: "Built a full-stack trip booking web app featuring real-time destination search, trip customization, and booking management. Developed RESTful APIs for seamless front-end and back-end interaction.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "RESTful APIs"],
      highlights: [
        "Built responsive UI with real-time destination search and multi-criteria filtering",
        "Developed modular REST APIs for trip customization and reservation workflows",
        "Architected MongoDB schemas for complex tour packages and customer bookings"
      ],
      githubUrl: "https://github.com",
      liveUrl: "#"
    },
    {
      id: "ebook-seller-app",
      title: "E-Book Seller Web Application",
      subtitle: "Academic Engineering Thesis Project (CSVTU)",
      category: "Full Stack",
      featured: false,
      description: "Academic engineering thesis capstone: a complete digital bookstore facilitating book catalog browsing, previewing, and seamless digital transactions.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "MySQL", "Node.js"],
      highlights: [
        "Authored academic engineering thesis on web platforms and digital commerce",
        "Engineered searchable digital catalogue with preview excerpts and cart checkout logic",
        "Constructed normalized relational MySQL schemas for transactions, inventory, and users"
      ],
      githubUrl: "https://github.com",
      liveUrl: "#"
    }
  ]
};

export default portfolioData;

