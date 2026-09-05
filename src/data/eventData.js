export const EVENT_INFO = {
  name: "ENGINEERING DAY 2026",
  theme: "Innovate. Engineer. Transform.",
  tagline: "Where ideas become engineering solutions.",
  date: "15 September 2026",
  time: "10:00 AM – 4:00 PM",
  venue: "Faculty of Engineering & Technology- GK (DU) Haridwar 249404",
  targetDateIso: "2026-09-15T10:00:00+05:30",
  // Organizers can replace this URL with their actual Google Form link
  googleFormUrl: "https://forms.gle/UbMhMjN5DvDqteMY6",
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
    id: "openai-challenge",
    name: "OpenAI Challenge",
    category: "Artificial Intelligence",
    teamSize: "Individual / Group",
    prize: "Certificates & Rewards",
    registrationFee: "Free",
    duration: "3 Hours",
    icon: "Sparkles",
    coordinator: {
      name: "Ujjwal Raj",
      department: "Computer Science & Engineering",
      phone: "+91 76672 55571"
    },
    shortDesc: "Build cutting-edge AI prompts, agents, and generative solutions using OpenAI APIs, LLMs, and prompt engineering.",
    overview: "The OpenAI Challenge tests your ability to leverage modern generative AI, Large Language Models (LLMs), and prompt engineering to build intelligent agents and automated solutions for real-world problems.",
    problemStatement: "Architect and deploy an AI solution using OpenAI APIs or LLM frameworks to automate a complex task, analyze data, or generate interactive user experiences under time constraints.",
    eligibility: "Open to all GKV students from 1st Year to Final Year across all courses/branches, as well as Research Scholars (Ph.D. / M.Phil).",
    rules: [
      "Participation can be individual or in a group.",
      "OpenAI API keys / LLM playground tools are permitted.",
      "All prompts and code must be developed live during the event duration.",
      "Final solution must be demonstrated with a live working output."
    ],
    judgingCriteria: [
      "Prompt design & AI Agent intelligence (35%)",
      "Functionality & Problem Solving (30%)",
      "User Experience & Innovation (20%)",
      "Final Pitch & Demo (15%)"
    ],
    requiredMaterials: [
      "Personal Laptop & Charger",
      "Pre-configured development environment / API credentials"
    ],
    instructions: "Venue not decided yet."
  },
  {
    id: "project-exhibition",
    name: "Project Exhibition",
    category: "Innovation & Hardware",
    teamSize: "Individual / Group",
    prize: "Certificates & Trophies",
    registrationFee: "Free",
    duration: "Full Day",
    icon: "Lightbulb",
    coordinator: {
      name: "Priyanshu Raj",
      department: "Electrical & Electronics Engineering",
      phone: "+91 81028 38007"
    },
    shortDesc: "Showcase working engineering prototypes, hardware models, IoT devices, and innovative software solutions to jury & visitors.",
    problemStatement: "Set up a working booth demonstrating your engineering project, explaining the problem statement, prototype architecture, circuit/software design, and real-world impact. Explore proposed topics department-wise below or propose your own innovative topic.",
    departmentTopics: [
      {
        department: "Mechanical Engineering",
        topics: [
          "Hydraulic Robotic Arm",
          "Mini Conveyor Belt",
          "Scissor Lift Working Model",
          "Automatic Waste-Sorting Mechanism",
          "Solar-Powered Mechanical System",
          "Wind Energy Working Model",
          "Gear Train & Power Transmission Model",
          "CAD-Based Innovative Product",
          "Four-Stroke Engine Working Model/Animation",
          "Energy Generation from Mechanical Motion"
        ]
      },
      {
        department: "Computer Science & Engineering",
        topics: [
          "College Inquiry Chatbot",
          "Student Attendance Management System",
          "Online Quiz Application",
          "Student Performance Dashboard",
          "AI-Based Resume Screening",
          "Career Guidance Chatbot",
          "Simple Educational Website/App",
          "Library Management System",
          "Cybersecurity Awareness Application",
          "AI Study Assistant for Students"
        ]
      },
      {
        department: "Electronics & Communication Engineering",
        topics: [
          "Automatic Street Light",
          "Smart Traffic Light",
          "Water Level Indicator",
          "Fire & Smoke Detection System",
          "Automatic Night Lamp",
          "Smart Home Automation",
          "IR Object Detection",
          "Temperature Monitoring System",
          "Smart Parking Prototype",
          "Electronic Voting Machine Model"
        ]
      },
      {
        department: "Electrical Engineering",
        topics: [
          "Solar-Powered House",
          "Automatic Street Light",
          "Solar Mobile Charger",
          "Mini Wind Energy Generator",
          "Smart Energy Meter",
          "Home Energy Consumption Calculator",
          "Automatic Power Backup",
          "Energy-Efficient Lighting",
          "Solar-Wind Hybrid System",
          "EV Charging Station Model"
        ]
      },
      {
        department: "Robotics & Automation",
        topics: [
          "Line Following Robot",
          "Obstacle Avoiding Robot",
          "Low-Cost Robotic Arm",
          "Pick-and-Place Robot",
          "Bluetooth-Controlled Robot",
          "Robot Arm CAD Model",
          "PLC Automation Simulation",
          "Automatic Waste Segregation",
          "Smart Factory Model",
          "MATLAB/Python Robot Simulation"
        ]
      },
      {
        department: "Basic Science & Technology",
        topics: [
          "Low-Cost Water Purification Model",
          "Rainwater Harvesting Model",
          "Solar Energy Demonstration",
          "Waste-to-Useful-Product Model",
          "Natural Indicator from Plants",
          "Soil Quality Testing Demonstration",
          "Smart Plant Monitoring System",
          "Food Adulteration Detection Demonstration",
          "Low-Cost Scientific Experiment Kit",
          "Environmental Pollution Monitoring Model"
        ]
      },
      {
        department: "Environmental Science",
        topics: [
          "Smart Waste Management",
          "Rainwater Harvesting",
          "Plastic Waste Conversion Concept",
          "Air Quality Monitoring",
          "Water Quality Monitoring",
          "Composting Model",
          "Smart Campus Environment Monitor",
          "Solar-Based Environmental System",
          "Biodiversity Garden Model",
          "Sustainable Village Model"
        ]
      },
      {
        department: "Pharmacy",
        topics: [
          "Smart Medicine Reminder System",
          "Digital Medicine Information System",
          "Drug Storage Monitoring Concept",
          "Pharmacist–Patient Information Kiosk",
          "Herbal Product Information Model",
          "Medication Schedule Planner",
          "Pharmacy Inventory Management App",
          "Drug Awareness Interactive Model",
          "Healthcare Waste Management Model",
          "AI-Assisted Drug Information Concept"
        ]
      },
      {
        department: "Management & Commerce",
        topics: [
          "Student Startup Business Model",
          "Digital Marketing Campaign",
          "E-Commerce Business Model",
          "Campus Startup Idea",
          "Business Dashboard using Excel",
          "Customer Feedback Analysis",
          "Small Business Financial Model",
          "Social Media Marketing Strategy",
          "Entrepreneurship Idea Pitch",
          "Sustainable Business Model"
        ]
      },
      {
        department: "Arts, Humanities & Languages",
        topics: [
          "Digital Heritage Museum",
          "Indian Knowledge System Digital Archive",
          "Virtual Historical Timeline",
          "Sanskrit/Hindi Digital Learning Tool",
          "Digital Storytelling Project",
          "Indian Cultural Heritage Model",
          "Psychological Awareness Campaign",
          "Heritage Conservation Model",
          "Traditional Knowledge Documentation",
          "Interactive Indian History Exhibition"
        ]
      },
      {
        department: "Yogic Science & Physical Education",
        topics: [
          "Smart Yoga Training System",
          "Yoga Posture Demonstration Model",
          "Digital Fitness Tracker",
          "Student Fitness Assessment Dashboard",
          "Sports Performance Analysis",
          "Smart Sports Equipment Concept",
          "Yoga & Meditation Digital App",
          "Physical Activity Monitoring System",
          "Sports Injury Prevention Model",
          "Healthy Campus Model"
        ]
      },
      {
        department: "Forensic Science",
        topics: [
          "Digital Crime Investigation Concept",
          "Fingerprint Identification Demonstration",
          "Cybercrime Awareness Model",
          "Forensic Evidence Management System",
          "Crime Scene Reconstruction Model",
          "Document Examination Demonstration",
          "Digital Forensic Investigation Workflow",
          "Forensic Awareness Exhibition",
          "Evidence Collection Simulation",
          "AI in Forensic Investigation Concept"
        ]
      },
      {
        department: "Food Technology & Nutrition",
        topics: [
          "Food Adulteration Detection",
          "Smart Food Storage Concept",
          "Food Waste Management",
          "Low-Cost Food Preservation",
          "Healthy Food Product Development",
          "Nutrition Awareness Dashboard",
          "Food Safety Monitoring System",
          "Sustainable Packaging Model",
          "Food Processing Demonstration",
          "Smart Kitchen Concept"
        ]
      },
      {
        department: "Interdisciplinary Mega Projects",
        topics: [
          "Smart Campus 2030 (Open to All)",
          "Smart Waste Management (ME + CSE + EE + ECE + Env)",
          "Smart Agriculture (ME + Robotics + CSE + Science)",
          "Water Conservation System (ME + Civil/Science + CSE + EE)",
          "Smart Energy Campus (EE + ME + CSE + ECE)",
          "Women Safety Technology (CSE + ECE + Robotics + Mgmt)",
          "Rural Technology Innovation (Open to All)",
          "AI for Education (CSE + Psychology + Mgmt + Languages)",
          "Green & Sustainable University (Open to All)",
          "Future Village – Smart & Sustainable (Open to All)"
        ]
      }
    ],
    eligibility: "Open to all GKV students from 1st Year to Final Year across all courses/branches, as well as Research Scholars (Ph.D. / M.Phil).",
    rules: [
      "Individual or team entries are permitted.",
      "Projects must have a functional physical prototype or live software demo.",
      "Teams must display a technical poster explaining project objectives and specs.",
      "Jury members will visit booths for live Q&A evaluation."
    ],
    judgingCriteria: [
      "Innovation & Working Prototype Quality (40%)",
      "Technical Complexity & Engineering Soundness (30%)",
      "Practical Utility & Real-World Application (15%)",
      "Presentation & Q&A Response (15%)"
    ],
    requiredMaterials: [
      "Working Hardware/Software Prototype",
      "Project Poster / Specs Sheet",
      "Extension board (if power needed)"
    ],
    instructions: "Venue not decided yet."
  },
  {
    id: "poster-presentation",
    name: "Poster Presentation",
    category: "Research & Design",
    teamSize: "Individual / Group",
    prize: "Certificates & Awards",
    registrationFee: "Free",
    duration: "2 Hours",
    icon: "Compass",
    coordinator: {
      name: "****",
      department: "***",
      phone: "+91 ****"
    },
    shortDesc: "Present technical paper concepts, architectural designs, sustainable engineering, and research findings through creative posters.",
    overview: "A platform for aspiring researchers and engineers to articulate innovative ideas, emerging technology trends, and sustainable engineering concepts using visual technical posters.",
    problemStatement: "Design and visually present a comprehensive technical poster on cutting-edge topics such as Renewable Energy, AI in Healthcare, Smart Infrastructure, or Quantum Computing. Explore proposed topics department-wise below or propose your own innovative topic.",
    departmentTopics: [
      {
        department: "Mechanical Engineering",
        topics: [
          "Future of Electric Vehicles",
          "Hydrogen as Future Fuel",
          "3D Printing & Additive Manufacturing",
          "Sustainable Manufacturing",
          "Green Manufacturing & Green Energy",
          "Industry 4.0 & Smart Manufacturing",
          "Advanced Materials for Future Engineering",
          "Artificial Intelligence in Mechanical Engineering",
          "Digital Manufacturing & Digital Twins",
          "Engineering for a Sustainable Future"
        ]
      },
      {
        department: "Computer Science & Engineering",
        topics: [
          "Generative AI: Opportunities & Challenges",
          "Artificial Intelligence in Education",
          "Responsible & Ethical AI",
          "Cybersecurity in the Digital Era",
          "Internet of Things",
          "Cloud Computing",
          "Quantum Computing",
          "Data Science for Society",
          "Blockchain Technology",
          "Future of Human-AI Collaboration"
        ]
      },
      {
        department: "Electronics & Communication Engineering",
        topics: [
          "5G & Future 6G",
          "Smart Sensors",
          "Semiconductor Technology",
          "Satellite Communication",
          "Wearable Electronics",
          "IoT & Connected Devices",
          "VLSI Technology",
          "Wireless Communication",
          "Electronics for Smart Cities",
          "Future Communication Systems"
        ]
      },
      {
        department: "Electrical Engineering",
        topics: [
          "Renewable Energy Technologies",
          "Smart Grid",
          "Electric Vehicles & Charging Infrastructure",
          "Green Hydrogen",
          "Future of Solar Energy",
          "Battery & Energy Storage Technology",
          "Energy Conservation",
          "Sustainable Power Generation",
          "AI in Power Systems",
          "Electrical Engineering for Net-Zero India"
        ]
      },
      {
        department: "Robotics & Automation",
        topics: [
          "AI in Robotics",
          "Future of Humanoid Robots",
          "Robots in Healthcare",
          "Industrial Automation",
          "Autonomous Vehicles",
          "Human-Robot Collaboration",
          "Robotics in Agriculture",
          "Smart Factory & Industry 4.0",
          "Autonomous Systems",
          "Ethics & Challenges in Robotics"
        ]
      },
      {
        department: "Basic Science & Technology",
        topics: [
          "Climate Change & Its Scientific Impact",
          "Renewable Energy & Future Energy Needs",
          "Nanotechnology for Society",
          "Sustainable Chemistry",
          "Artificial Intelligence in Science",
          "Biodiversity Conservation",
          "Water Pollution & Treatment",
          "Plastic Pollution & Alternatives",
          "Biotechnology for Sustainable Development",
          "Science for a Sustainable Future"
        ]
      },
      {
        department: "Environmental Science",
        topics: [
          "Climate Change",
          "Plastic-Free India",
          "Water Conservation",
          "Sustainable Cities",
          "Net-Zero Campus",
          "Renewable Energy",
          "Biodiversity Conservation",
          "Green Technology",
          "Environmental Impact of AI/Data Centres",
          "Role of Youth in Environmental Protection"
        ]
      },
      {
        department: "Pharmacy",
        topics: [
          "Role of AI in Pharmacy",
          "Drug Safety & Pharmacovigilance",
          "Herbal Medicines & Modern Pharmacy",
          "Nanotechnology in Drug Delivery",
          "Antibiotic Resistance",
          "Future of Personalized Medicine",
          "Digital Transformation in Healthcare",
          "Pharmaceutical Waste Management",
          "Nutrition & Preventive Healthcare",
          "Pharmacy for Sustainable Healthcare"
        ]
      },
      {
        department: "Management & Commerce",
        topics: [
          "AI in Business",
          "Future of Entrepreneurship",
          "Digital India & Digital Business",
          "Start-up Ecosystem in India",
          "Sustainable Business",
          "FinTech Revolution",
          "E-Commerce & Consumer Behaviour",
          "Women Entrepreneurship",
          "Rural Entrepreneurship",
          "Business for Atmanirbhar Bharat"
        ]
      },
      {
        department: "Arts, Humanities & Languages",
        topics: [
          "Indian Knowledge System & Modern Education",
          "Ancient Indian Scientific Contributions",
          "Sanskrit & Artificial Intelligence",
          "Indian Heritage & Technology",
          "Mental Well-Being in Student Life",
          "Role of Language in Nation Building",
          "Digital Preservation of Heritage",
          "Indian Philosophy & Sustainable Living",
          "Cultural Diversity of India",
          "Literature, Society & Technology"
        ]
      },
      {
        department: "Yogic Science & Physical Education",
        topics: [
          "Yoga & Modern Lifestyle",
          "Yoga for Student Well-Being",
          "Technology in Sports",
          "AI in Sports Performance",
          "Fitness & Preventive Health",
          "Yoga & Sustainable Living",
          "Sports Science",
          "Mental Wellness & Physical Activity",
          "Traditional Indian Practices & Modern Life",
          "Future of Digital Fitness"
        ]
      },
      {
        department: "Forensic Science",
        topics: [
          "Cyber Forensics",
          "AI in Crime Investigation",
          "Digital Evidence",
          "DNA Forensics",
          "Fingerprint Science",
          "Forensic Toxicology",
          "Cybercrime in the Digital Era",
          "Future of Forensic Science",
          "Forensic Science & Justice",
          "Ethics in Digital Investigation"
        ]
      },
      {
        department: "Food Technology & Nutrition",
        topics: [
          "Food Security & Sustainability",
          "Food Waste Reduction",
          "Sustainable Food Packaging",
          "Food Safety in India",
          "Nutrition & Healthy Lifestyle",
          "AI in Food Technology",
          "Future of Functional Foods",
          "Traditional Indian Foods & Nutrition",
          "Sustainable Food Processing",
          "Food Technology for Rural Development"
        ]
      },
      {
        department: "Interdisciplinary Poster Themes",
        topics: [
          "AI and Future Society",
          "Engineering for a Developed India",
          "Innovation for Atmanirbhar Bharat",
          "Technology for Rural Development",
          "Smart India – Smart Solutions",
          "Climate Change & Engineering Solutions",
          "Green Technology for a Sustainable Future",
          "Future of Jobs in the Age of AI",
          "Technology for Women's Safety",
          "Innovation for Society",
          "Indian Knowledge System & Modern Technology",
          "Youth Innovation for Nation Building",
          "AI + Robotics + IoT: Future Technologies",
          "Sustainable Development through Innovation",
          "From Idea to Innovation: Solving Real Problems"
        ]
      }
    ],
    eligibility: "Open to all GKV students from 1st Year to Final Year across all courses/branches, as well as Research Scholars (Ph.D. / M.Phil).",
    rules: [
      "Individual or team participation.",
      "Standard poster dimensions: A1 size (or printed 3ft x 2ft banner).",
      "Plagiarism in content or diagrams will lead to disqualification.",
      "Each team gets 5 minutes to present to jury panel followed by 2 minutes Q&A."
    ],
    judgingCriteria: [
      "Clarity of Concept & Research Depth (35%)",
      "Visual Design, Layout & Neatness (30%)",
      "Innovation & Technical Soundness (20%)",
      "Presentation & Communication Skills (15%)"
    ],
    requiredMaterials: [
      "Printed Technical Poster (A1 / 3ft x 2ft)",
      "Push pins or mounting tape"
    ],
    instructions: "Venue not decided yet."
  },
  {
    id: "debugging",
    name: "Debugging",
    category: "Software Coding",
    teamSize: "Individual",
    prize: "Certificates & Rewards",
    registrationFee: "Free",
    duration: "1.5 Hours",
    icon: "Code",
    coordinator: {
      name: "Mohit Kumar",
      department: "Computer Science & Engineering",
      phone: "+91 76679 89449"
    },
    shortDesc: "Hunt down bugs, fix syntax/logic flaws, and optimize broken code snippets under intense time constraints.",
    overview: "Speed and precision meet code logic. Debugging challenges your ability to trace erroneous code, fix hidden memory/logic bugs, and optimize execution speed across C, C++, Python, or Java.",
    problemStatement: "Correct faulty code snippets containing logical bugs, runtime exceptions, and edge-case failures within the shortest time possible.",
    eligibility: "Open to all GKV students from 1st Year to Final Year across all courses/branches, as well as Research Scholars (Ph.D. / M.Phil).",
    rules: [
      "Strictly individual participation.",
      "No external internet searching or AI assistants allowed during test rounds.",
      "Round 1: Speed bug fixing written/online quiz.",
      "Round 2: Complex algorithm debugging on compiler platform."
    ],
    judgingCriteria: [
      "Number of test cases passed (60%)",
      "Time taken to submit correct code (30%)",
      "Code cleanliness & formatting (10%)"
    ],
    requiredMaterials: [
      "Computers provided in CS Lab",
      "Pen & scratch paper"
    ],
    instructions: "Venue not decided yet."
  },
  {
    id: "quiz-competition",
    name: "Quiz Competition",
    category: "Technical Quiz",
    teamSize: "Individual",
    prize: "Certificates & Prizes",
    registrationFee: "Free",
    duration: "1 Hour",
    icon: "HelpCircle",
    coordinator: {
      name: "***",
      department: "***",
      phone: "+91 ****"
    },
    shortDesc: "Test your computer science fundamentals, tech trivia, IT history, programming concepts, and engineering logic.",
    overview: "The ultimate battle of CS minds! Quiz Competition tests rapid recall of computer hardware, software engineering history, networking, algorithms, and tech industry trivia.",
    problemStatement: "Answer multiple-choice and buzzer questions covering programming fundamentals, IT trivia, cyber security, computer organization, and tech icons.",
    eligibility: "Open to all GKV students from 1st Year to Final Year across all courses/branches, as well as Research Scholars (Ph.D. / M.Phil).",
    rules: [
      "Individual entry.",
      "Round 1: Written Multiple-Choice Screening (20 mins).",
      "Round 2: Rapid-fire Buzzer & Visual Round for Top 6 Qualifiers.",
      "Use of mobile phones during quiz rounds is strictly forbidden."
    ],
    judgingCriteria: [
      "Screening test score in Round 1 (50%)",
      "Buzzer round accuracy & speed in Round 2 (50%)"
    ],
    requiredMaterials: [
      "Pen & scratch paper provided"
    ],
    instructions: "Venue not decided yet."
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
    time: "10:00 AM",
    title: "Registration & Check-in",
    category: "Ceremonies",
    location: "Main Auditorium Foyer",
    desc: "Collect event badges, welcome kit, and registration tokens."
  },
  {
    time: "10:00 AM",
    title: "Opening Ceremony & Keynote",
    category: "Ceremonies",
    location: "FET GK (DU) Auditorium",
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
    location: "FET GK (DU) Auditorium",
    desc: "Awarding trophies, cash prizes of ₹50,000+, certificates, and sponsor goodies."
  },
  {
    time: "04:00 PM",
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
    a: "Eligible candidates are students from all courses of GKV (Gurukul Kangri Deemed to be University). Participation is strictly for GKV students and NOT open to outsiders."
  },
  {
    q: "What is the registration fee?",
    a: "All 5 events (OpenAI Challenge, Project Exhibition, Poster Presentation, Debugging, and Quiz Competition) are 100% FREE for all participants!"
  },
  {
    q: "Can I participate individually or in a team?",
    a: "Debugging and Quiz Competition are for individual participants. OpenAI Challenge, Project Exhibition, and Poster Presentation support both Individual and Group entries."
  },
  {
    q: "Will participants receive certificates?",
    a: "Yes! All verified participants receive official Certificates of Participation, and winners receive Winner Certificates and trophies."
  },
  {
    q: "How do I register for events?",
    a: "Click the 'REGISTER' button and fill the form."
  }
];

export const CONTACT_INFO = {
  venueName: "Main Campus Engineering Complex",
  address: "College Campus, Academic Block III, Innovation & Robotics Floor",
  cityStatePin: "Tech City, Pin 400001",
  date: "15 September 2026",
  time: "10:00 AM – 4:00 PM",
  email: "engineeringday2026@college.edu",
  facultyCoordinators: [
    {
      name: "Dr. Nishant Munjal ",
      // role: "Faculty Convener & HOD",
      department: "Computer Science & Engineering",
      email: "nishant@gkv.ac.in"
    },
    {
      name: "Dr. Sanjeev Lambha",
      // role: "Faculty Co-Coordinator",
      department: "Mechanical Engineering",
      email: "sanjeev.lambha@gkv.ac.in"
    }
  ],
  eventLeads: [
    {
      name: "Not decided Yet",
      role: "Overall Student Convener",
      phone: "+91 99999999999999",
     
    },
    {
      name: "Not decided Yet",
      role: "Technical Operations Lead",
      phone: "+91 999999999999999",
      
    }
  ],
  socials: {
    instagram: "https://instagram.com/engineeringday2026",
    linkedin: "https://linkedin.com/company/engineeringday2026",
    youtube: "https://youtube.com/@engineeringday2026"
  }
};
