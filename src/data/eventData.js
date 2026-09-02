export const EVENT_INFO = {
  name: "ENGINEERING DAY 2026",
  theme: "Innovate. Engineer. Transform.",
  tagline: "Where ideas become engineering solutions.",
  date: "15 September 2026",
  time: "9:00 AM – 6:00 PM",
  venue: "Main Campus Auditorium & Tech Complex",
  targetDateIso: "2026-09-15T09:00:00+05:30",
  // Organizers can replace this URL with their actual Google Form link
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfHiGUVwyPQrC_V0nkOKBGj0pYpmOVNpDVmDsyWEX_-DX6OMA/viewform?usp=publish-editor",
  collegeLogos: [
    { id: 1, name: "College Emblem", badgeText: "COLLEGE LOGO 1" },
    { id: 2, name: "Autonomous / NAAC A+", badgeText: "COLLEGE LOGO 2" }
  ],
  stats: {
    participants: "500+",
    competitions: "10+",
    workshops: "5+",
    prizePool: "₹50,000+"
  }
};

export const COMPETITIONS = [
  {
    id: "robo-race",
    name: "Robo Race",
    category: "Robotics",
    teamSize: "2–4 Members",
    prize: "₹10,000",
    registrationFee: "₹200 per team",
    duration: "3 Hours",
    icon: "Bot",
    shortDesc: "Design an autonomous or remote-controlled bot to navigate a custom obstacle course in record time.",
    overview: "Robo Race tests the agility, mechanics, and control of your custom-built robots through a challenging track filled with ramps, gravel, sharp turns, and elevation drops.",
    problemStatement: "Construct a manual or autonomous wireless robot capable of negotiating a multi-terrain track containing speed bumps, sand traps, narrow bridges, and hairpin turns within the shortest time frame.",
    eligibility: "Open to all undergraduate & diploma engineering students.",
    rules: [
      "Max bot weight: 5 kg; max dimensions: 30cm x 30cm x 30cm.",
      "Power source must not exceed 24V DC.",
      "AC power supply will not be provided on the arena track.",
      "Lego kits or pre-assembled commercial chassis are strictly prohibited.",
      "In case of ties, lap times and penalty counts will determine the winner."
    ],
    judgingCriteria: [
      "Track completion speed (40%)",
      "Control accuracy & smooth navigation (30%)",
      "Technical design & chassis stability (20%)",
      "Safety & compliance with size limits (10%)"
    ],
    requiredMaterials: [
      "Custom Wireless Bot (RF, Bluetooth, or Wi-Fi)",
      "Spare Batteries & Charger",
      "Basic Tool Kit & Soldering Iron"
    ],
    instructions: "Arrive 30 minutes prior to the event for technical inspection and dimensions check at Arena A."
  },
  {
    id: "engineering-hackathon",
    name: "Engineering Hackathon",
    category: "Software / Technology",
    teamSize: "2–4 Members",
    prize: "₹15,000",
    registrationFee: "Free",
    duration: "6 Hours",
    icon: "Code",
    shortDesc: "Build real-world web, mobile, or AI prototypes to tackle pressing campus and urban sustainability challenges.",
    overview: "The flagship software event where code meets real impact. Teams brainstorm, architect, code, and pitch functional software solutions within 6 intense hours.",
    problemStatement: "Develop a working software application addressing one of three tracks: Smart Campus Management, AI for Sustainable Energy, or Student Mental Health Tech.",
    eligibility: "Open to all students from CS, IT, ECE, Data Science, and allied departments.",
    rules: [
      "All code must be written during the hackathon hours.",
      "Third-party APIs, open-source libraries, and AI coding helpers are permitted.",
      "Code must be pushed to a public GitHub repository.",
      "A live 3-minute project demonstration is required during final evaluation."
    ],
    judgingCriteria: [
      "Innovation & Originality (30%)",
      "Technical Execution & Working Prototype (30%)",
      "UI/UX Design & User Experience (20%)",
      "Impact & Pitch Presentation (20%)"
    ],
    requiredMaterials: [
      "Personal Laptops & Chargers",
      "Pre-installed IDEs and Dev Environments"
    ],
    instructions: "Check-in at the Computer Lab Complex at 10:00 AM sharp. High-speed Wi-Fi provided."
  },
  {
    id: "circuit-challenge",
    name: "Circuit Challenge",
    category: "Electrical & Electronics",
    teamSize: "2–3 Members",
    prize: "₹5,000",
    registrationFee: "₹100 per team",
    duration: "2.5 Hours",
    icon: "Cpu",
    shortDesc: "Debug, simulate, and wire high-speed analog/digital electronic circuits under time constraints.",
    overview: "Put your hardware knowledge, breadboard wiring speed, and oscilloscope troubleshooting skills to the ultimate test in this multi-round hardware challenge.",
    problemStatement: "Identify faults in a faulty circuit schematic, simulate corrected logic on Proteus/Multisim, and physically assemble the functional circuit on a breadboard.",
    eligibility: "Open to ECE, EEE, EIE, and Mechatronics students.",
    rules: [
      "Round 1: Circuit Debugging Written Quiz (20 mins).",
      "Round 2: Software Circuit Simulation (45 mins).",
      "Round 3: Hardware Breadboard Assembly & Signal Testing (60 mins).",
      "Component damage due to reverse polarity incurs penalty points."
    ],
    judgingCriteria: [
      "Accuracy of output waveform on oscilloscope (40%)",
      "Wiring neatness & component optimization (30%)",
      "Debugging speed in Round 1 & 2 (30%)"
    ],
    requiredMaterials: [
      "Breadboard and basic jumper wires (Provided on spot)",
      "Digital Multimeter (Optional to bring own)"
    ],
    instructions: "Report to Electrical Lab 3. Workstations and component kits will be assigned upon entry."
  },
  {
    id: "bridge-building",
    name: "Bridge Building Challenge",
    category: "Civil Engineering",
    teamSize: "2–4 Members",
    prize: "₹7,000",
    registrationFee: "₹150 per team",
    duration: "3 Hours",
    icon: "Building2",
    shortDesc: "Engineer a lightweight popsicle stick bridge to withstand maximum load capacity before failure.",
    overview: "Demonstrate structural analysis principles by designing, constructing, and testing a truss bridge model using only Popsicle sticks and adhesive.",
    problemStatement: "Construct a truss bridge spanning a clear 50 cm gap with maximum structural efficiency (Load Sustained / Self-Weight of Bridge).",
    eligibility: "Open to Civil, Mechanical, and Structural engineering students.",
    rules: [
      "Only provided Popsicle sticks and PVA glue can be used.",
      "Max bridge weight: 250 grams; Minimum span length: 50 cm.",
      "Bridges will be subjected to hydraulic vertical point loading until breakdown."
    ],
    judgingCriteria: [
      "Efficiency ratio = Ultimate Load Sustained / Self-Weight (60%)",
      "Aesthetic design & truss symmetry (20%)",
      "Compliance with dimensional constraints (20%)"
    ],
    requiredMaterials: [
      "Popsicle sticks & Glue provided at workshop",
      "Cutter, Ruler & Sandpaper"
    ],
    instructions: "Materials will be handed out at Civil Structures Lab at 10:30 AM."
  },
  {
    id: "cad-design",
    name: "CAD Design Challenge",
    category: "Mechanical / Design",
    teamSize: "1–2 Members",
    prize: "₹5,000",
    registrationFee: "₹100",
    duration: "2 Hours",
    icon: "Compass",
    shortDesc: "Transform complex 2D technical drawings into parametric 3D CAD models using SolidWorks or AutoCAD.",
    overview: "Test your speed, precision, and geometric modeling capabilities by converting detailed engineering blueprints into 3D CAD components.",
    problemStatement: "Model a multi-part mechanical assembly from given 2D orthographic projections, assign proper material densities, and compute total mass and center of gravity.",
    eligibility: "Open to Mechanical, Automobile, Aerospace, and Mechatronics students.",
    rules: [
      "Permitted software: SolidWorks, Fusion 360, or AutoCAD.",
      "Final model must be submitted in STEP and native CAD format.",
      "Dimension tolerances must strictly match specifications."
    ],
    judgingCriteria: [
      "3D Model Dimensional Accuracy (50%)",
      "Parametric feature tree organization (25%)",
      "Completion speed (25%)"
    ],
    requiredMaterials: [
      "CAD Workstations provided (You can also bring personal laptop with licensed CAD software)"
    ],
    instructions: "Mechanical CAD Lab 2. Session begins at 02:00 PM."
  }
];

export const FEATURED_EVENT = {
  title: "ENGINEERING INNOVATION CHALLENGE",
  subtitle: "Solve a real-world problem. Build a working solution.",
  description: "The grandest stage of Engineering Day 2026. Pitch your original invention, IoT device, renewable energy solution, or software platform to venture capitalists, faculty jury, and top industry sponsors.",
  pipeline: [
    { step: "01", name: "IDEATE", desc: "Identify a real problem" },
    { step: "02", name: "DESIGN", desc: "Architect system schematic" },
    { step: "03", name: "BUILD", desc: "Construct prototype" },
    { step: "04", name: "TEST", desc: "Validate & benchmark" },
    { step: "05", name: "DEMO", desc: "Exhibit to jury" },
    { step: "06", name: "WIN", desc: "Claim ₹15,000 + Funding" }
  ],
  prizePool: "₹15,000 Cash + Seed Incubation Grant",
  teamSize: "2 – 5 Innovators",
  timeline: "Submissions close Sept 10 | Live Demo Sept 15"
};

export const SCHEDULE = [
  {
    time: "09:00 AM",
    title: "Registration & Check-in",
    category: "Ceremonies",
    location: "Main Auditorium Foyer",
    desc: "Collect event badges, welcome kit, and registration tokens."
  },
  {
    time: "10:00 AM",
    title: "Opening Ceremony & Keynote",
    category: "Ceremonies",
    location: "Main Campus Auditorium",
    desc: "Inaugural address by Chief Guest, Dean of Engineering, and unveiling of Engineering Day 2026."
  },
  {
    time: "10:30 AM",
    title: "Competitions Begin",
    category: "Competitions",
    location: "Labs & Arena A/B",
    desc: "Robo Race, Circuit Challenge, Bridge Building, and Hackathon kickoff across respective halls."
  },
  {
    time: "01:00 PM",
    title: "Lunch & Networking Break",
    category: "Ceremonies",
    location: "Student Activity Center",
    desc: "Complimentary lunch boxes, sponsor booth visits, and interactive VR demos."
  },
  {
    time: "02:00 PM",
    title: "Workshops & Technical Sessions",
    category: "Workshops",
    location: "Seminar Halls 1, 2 & CS Labs",
    desc: "Hands-on masterclasses on AI/ML, Cloud Computing, IoT, and EV Engineering."
  },
  {
    time: "04:30 PM",
    title: "Project Demonstrations & Exhibition",
    category: "Competitions",
    location: "Central Exhibition Hall",
    desc: "Jury evaluation of Innovation Challenge projects and open public exhibition."
  },
  {
    time: "05:30 PM",
    title: "Prize Distribution Ceremony",
    category: "Ceremonies",
    location: "Main Campus Auditorium",
    desc: "Awarding trophies, cash prizes of ₹50,000+, certificates, and sponsor goodies."
  },
  {
    time: "06:00 PM",
    title: "Closing Ceremony & Group Photo",
    category: "Ceremonies",
    location: "Main Campus Lawn",
    desc: "Vote of thanks, light show, and celebratory closing photos."
  }
];

export const WORKSHOPS = [
  {
    id: "ws-ai-ml",
    topic: "AI & Machine Learning in Engineering",
    speaker: "Dr. A. R. Sharma (Senior AI Scientist, TechCorp)",
    duration: "2.5 Hours",
    venue: "Seminar Hall 1",
    icon: "BrainCircuit",
    desc: "Learn how generative AI, neural networks, and computer vision models are transforming industrial automation and predictive maintenance.",
    level: "Beginner to Intermediate"
  },
  {
    id: "ws-cloud",
    topic: "Cloud Computing & DevOps Pipelines",
    speaker: "Ms. Neha Verma (Cloud Architect, AWS Certified)",
    duration: "2 Hours",
    venue: "Computer Lab 4",
    icon: "Cloud",
    desc: "Hands-on session deploying microservices, Docker containers, and CI/CD pipelines to serverless cloud infrastructure.",
    level: "Hands-on Practical"
  },
  {
    id: "ws-iot",
    topic: "IoT & Embedded Systems Prototyping",
    speaker: "Prof. Rajesh K. (Head of Embedded Systems)",
    duration: "2 Hours",
    venue: "Electronics Lab 2",
    icon: "Wifi",
    desc: "Build real-time sensor monitoring systems using ESP32, MQTT protocols, and cloud dashboards.",
    level: "Hardware Hands-on"
  },
  {
    id: "ws-cyber",
    topic: "Cybersecurity & Ethical Hacking Basics",
    speaker: "Mr. Vikramaditya (Security Analyst & Bug Bounty Hunter)",
    duration: "2 Hours",
    venue: "Seminar Hall 2",
    icon: "ShieldCheck",
    desc: "Explore vulnerability assessment, network penetration fundamentals, and modern web application security practices.",
    level: "Beginner Friendly"
  },
  {
    id: "ws-ev",
    topic: "Electric Vehicles & Sustainable Engineering",
    speaker: "Eng. Siddharth Patel (EV Powertrain Engineer)",
    duration: "2 Hours",
    venue: "Mechanical Seminar Room",
    icon: "Zap",
    desc: "Understand battery management systems (BMS), electric motor drives, and zero-emission automotive design.",
    level: "Industrial Overview"
  },
  {
    id: "ws-future",
    topic: "Future of Engineering & Quantum Computing",
    speaker: "Dr. K. N. Rao (Research Fellow, Quantum Labs)",
    duration: "1.5 Hours",
    venue: "Main Auditorium",
    icon: "Atom",
    desc: "A visionary talk on how quantum algorithms and advanced metamaterials will define the next 50 years of technology.",
    level: "Open Keynote"
  }
];

export const PROJECTS_SHOWCASE = [
  {
    id: "proj-1",
    name: "Autonomous Solar-Powered Agro Rover",
    team: "Team GreenTerra",
    department: "Mechatronics & Agriculture Eng.",
    tech: "ESP32, Computer Vision, Solar PV",
    desc: "A self-navigating field rover that detects crop diseases using AI and automates targeted soil hydration.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "proj-2",
    name: "AI Smart Traffic Optimization Grid",
    team: "Team NeuralGrid",
    department: "Computer Science & Engineering",
    tech: "Python, OpenCV, YOLOv8, MQTT",
    desc: "Dynamically adjusts traffic signal timings based on real-time camera density streams to eliminate gridlocks.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "proj-3",
    name: "Bionic Exoskeleton Hand for Rehabilitation",
    team: "Team BioFlex",
    department: "Biomedical & Mechanical Eng.",
    tech: "EMG Sensors, 3D Printing, Servo Actuators",
    desc: "A low-cost 3D-printed motorized glove that assists stroke patients in regaining grip strength and finger dexterity.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
  }
];

export const PRIZES = {
  total: "₹50,000+",
  top3: [
    { rank: "1st", title: "FIRST PRIZE", amount: "₹15,000", color: "from-amber-400 to-yellow-600", badge: "🥇 WINNER GOLD" },
    { rank: "2nd", title: "SECOND PRIZE", amount: "₹10,000", color: "from-slate-300 to-slate-400", badge: "🥈 RUNNER UP" },
    { rank: "3rd", title: "THIRD PRIZE", amount: "₹5,000", color: "from-amber-700 to-amber-900", badge: "🥉 THIRD PLACE" }
  ],
  perks: [
    { icon: "Award", title: "Winner & Runner Certificates", desc: "Official accredited certificates of achievement signed by college leadership." },
    { icon: "FileCheck", title: "Participation Certificates", desc: "Digital verifiable certificates for all registered active participants." },
    { icon: "Gift", title: "Tech Goodies & Swag", desc: "Exclusive Engineering Day T-shirts, stickers, notebooks, and dev gear." },
    { icon: "Briefcase", title: "Internship Opportunities", desc: "Fast-track interview recommendations with our corporate sponsor partners." },
    { icon: "Sparkles", title: "Innovation Incubation", desc: "Free cloud credits and mentoring for top 3 Innovation Challenge projects." }
  ]
};

export const SPONSORS = [
  {
    tier: "TITLE SPONSOR",
    sponsors: [
      { name: "Apex Tech Innovations", logoText: "APEX TECH", tag: "Global Engineering Solutions" }
    ]
  },
  {
    tier: "GOLD SPONSORS",
    sponsors: [
      { name: "NexGen Robotics", logoText: "NEXGEN", tag: "Automation Systems" },
      { name: "CloudScale Systems", logoText: "CLOUDSCALE", tag: "Enterprise Cloud Infra" }
    ]
  },
  {
    tier: "SILVER SPONSORS",
    sponsors: [
      { name: "VoltDrive Motors", logoText: "VOLTDRIVE", tag: "EV Technologies" },
      { name: "CyberFortress Security", logoText: "CYBERFORT", tag: "Infosec & Defence" },
      { name: "BuildTech Structural", logoText: "BUILDTECH", tag: "Smart Infra Solutions" }
    ]
  },
  {
    tier: "TECHNOLOGY & COMMUNITY PARTNERS",
    sponsors: [
      { name: "Google Developer Groups", logoText: "GDG CAMPUS", tag: "Community Partner" },
      { name: "IEEE Student Branch", logoText: "IEEE COLLEGE", tag: "Technical Partner" },
      { name: "GitHub Campus Club", logoText: "GITHUB CLUB", tag: "Open Source Partner" }
    ]
  }
];

export const GALLERY_IMAGES = [
  { id: 1, title: "Robo Race Finals", category: "Competitions", url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Hackathon Night Coding", category: "Competitions", url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "AI/ML Workshop Session", category: "Workshops", url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "Project Exhibition Booths", category: "Projects", url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" },
  { id: 5, title: "Trophy & Prize Ceremony", category: "Ceremonies", url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80" },
  { id: 6, title: "Bridge Stress Testing", category: "Competitions", url: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80" }
];

export const FAQS = [
  {
    q: "Who can participate in Engineering Day 2026?",
    a: "Participation is open to all engineering, polytechnic, technology, science, and computer application students from any recognized college or university."
  },
  {
    q: "Is participation open to students from other colleges?",
    a: "Yes! We warmly welcome inter-college participation across all competitions, workshops, and project showcases."
  },
  {
    q: "Can I participate individually or do I need a team?",
    a: "Some events like Tech Quiz and CAD Challenge allow individual entries, while team events like Hackathon, Robo Race, and Innovation Challenge require 2 to 5 members."
  },
  {
    q: "How does registration on Google Forms work?",
    a: "You can click 'Register Now' on any event card to open our official Google Form directly inside a modal or in a new tab, or use our built-in instant ticket generator!"
  },
  {
    q: "What is the registration fee?",
    a: "Major events like the Engineering Hackathon, Innovation Challenge, and Tech Quiz are completely FREE! Other specialized hardware events carry a nominal team fee (₹100–₹200) to cover venue components."
  },
  {
    q: "Will participants receive certificates?",
    a: "Yes, all verified attendees and participants will receive accredited digital Certificates of Participation. Winners receive physical Winner Certificates and trophies."
  },
  {
    q: "Can I participate in multiple events?",
    a: "Yes, provided the event timings do not overlap in the official Schedule."
  },
  {
    q: "What should I bring on the event day?",
    a: "Please bring a valid college ID card, your registration pass (digital or printed), personal laptops/chargers (for software/hackathon events), and any specific project hardware required."
  },
  {
    q: "How will winners be selected?",
    a: "Each competition has a transparent, predefined scoring rubrics evaluated by an expert panel of professors and industry professionals."
  }
];

export const CONTACT_INFO = {
  venueName: "Main Campus Engineering Complex",
  address: "College Campus, Academic Block III, Innovation & Robotics Floor",
  cityStatePin: "Tech City, Pin 400001",
  date: "15 September 2026",
  time: "9:00 AM – 6:00 PM",
  email: "engineeringday2026@college.edu",
  facultyCoordinators: [
    {
      name: "Dr. M. K. Sharma",
      role: "Faculty Convener & HOD",
      department: "School of Engineering & Technology",
      phone: "+91 98765 43210",
      email: "faculty.convener@college.edu"
    },
    {
      name: "Prof. Rajesh Kumar",
      role: "Faculty Co-Coordinator",
      department: "Department of Electrical & Electronics",
      phone: "+91 98765 43211",
      email: "rajesh.kumar@college.edu"
    }
  ],
  eventLeads: [
    {
      name: "Aarav Verma",
      role: "Overall Student Convener",
      phone: "+91 91234 56789",
      email: "aarav.lead@student.edu"
    },
    {
      name: "Priya Deshmukh",
      role: "Technical Operations Lead",
      phone: "+91 91234 56790",
      email: "priya.tech@student.edu"
    }
  ],
  socials: {
    instagram: "https://instagram.com/engineeringday2026",
    linkedin: "https://linkedin.com/company/engineeringday2026",
    youtube: "https://youtube.com/@engineeringday2026"
  }
};
