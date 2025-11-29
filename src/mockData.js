// src/mockData.js

export const conferenceData = {
  // 🔷 Conference Overview
  code: "ICCI–2026",
  acronym: "ICCSI–2026",
  title:
    "International Conference on Computational Intelligence and Sustainable Innovation",
  dates: "21–22 May 2026",
  preConferenceDate: "Not Mentioned",
  location:
    "School of Computer Science and Applications (SCSA), S-VYASA Deemed-to-be-University, Bengaluru, Karnataka, India",
  organizedBy:
    "School of Computer Science and Applications (SCSA), S-VYASA Deemed-to-be-University",
  collaborators: [
    "International Association of Academicians (IAASSE), USA",
    "California State University, San Bernardino, USA",
  ],
  // emails (unique)
  email: "iccsi2026@gmail.com",
  altEmails: ["icdsai@iaasse.org", "svyasa@svyasa.edu.in"],
  phone: "Not Provided",

  // 🧠 ABOUT SECTION (pointwise)
  about: {
    description:
      "The International Conference on Computational Intelligence and Sustainable Innovation (ICCI–2026) invites researchers, academicians, and industry professionals to share innovative ideas, methodologies, and technologies contributing to sustainable development through computational intelligence.",

    sections: [
      {
        title: "About S-VYASA",
        points: [
          "A+ NAAC accredited and AICTE approved Deemed-to-be-University",
          "Offers programs from undergraduate to Ph.D. levels",
          "Blends traditional Gurukula-style education with modern scientific methods",
          "Promotes Life Training and Character Building through Yoga as a way of life",
          "Emphasizes hands-on learning and in-depth research",
        ],
      },
      {
        title: "About the School of Computer Science and Applications (SCSA)",
        points: [
          "A leading department under S-VYASA School of Advanced Studies",
          "Focuses on cybersecurity, artificial intelligence, cloud computing, and data science",
          "Provides strong theoretical and practical foundations in computing",
          "Trains students to excel in emerging digital technologies",
          "Encourages applied research and innovation",
        ],
      },
      {
        title: "About IAASSE",
        points: [
          "Connects researchers with global audiences",
          "Provides advanced publication technology and professional guidance",
          "Supports authors with a streamlined and impactful publication process",
          "A preferred platform for scholarly visibility and international research dissemination",
        ],
      },
    ],
  },

  // 📌 TRACKS SECTION (deduplicated & normalized)
  tracks: [
    {
      id: 1,
      title: "Artificial Intelligence & Machine Learning in Sustainable Systems",
      description:
        "AI-driven solutions for environmental sustainability, smart cities, agriculture, healthcare, disaster management, and climate resilience.",
      topics: [
        "AI-driven optimization for renewable energy systems",
        "Deep learning for precision agriculture and food sustainability",
        "Reinforcement learning in smart city management",
        "Explainable AI (XAI) for transparent decision-making",
        "Climate risk prediction using cognitive computing",
        "AI models with reduced carbon footprint / sustainable AI",
        "AI-based pollution control systems",
        "Neural networks for smart transportation and smart grids",
        "AI for natural disaster prediction and management",
        "Ethics and accountability in AI for sustainability",
        "Integration of Indian Knowledge System (IKS) with AI for renewable energy and agriculture",
      ],
    },
    {
      id: 2,
      title: "Data Science, Big Data Analytics & Computational Intelligence",
      description:
        "Data-driven decision-making for healthcare, smart cities, bioinformatics, public policy, and environmental sustainability.",
      topics: [
        "Big Data analytics for sustainability and policy planning",
        "Computational intelligence for bioinformatics and healthcare",
        "Predictive analytics for energy and resource management",
        "Cloud-based data pipelines for real-time decision-making",
        "Evolutionary and swarm intelligence algorithms",
        "Fuzzy logic and neuro-fuzzy models for decision support",
        "Data-driven governance for smart cities",
        "Data mining techniques for sustainable business models",
        "Visualization and storytelling for sustainable analytics",
        "Privacy-preserving machine learning in big data systems",
        "AyurGenomics and IKS-enabled data science for personalized healthcare",
      ],
    },
    {
      id: 3,
      title: "Cyber-Physical Systems, Cloud/Edge Computing & Cyber-Security",
      description:
        "Secure and intelligent computing technologies for IoT, supply chains, healthcare, rural technology, and green data centers.",
      topics: [
        "Smart IoT architectures for green technology",
        "Edge and fog computing for low-power and rural systems",
        "Cyber-physical system modeling for intelligent manufacturing",
        "Cloud sustainability and green data centers",
        "Blockchain for secure and transparent sustainable supply chains",
        "Cyber-security frameworks for smart infrastructure",
        "Trust management and identity in IoT ecosystems",
        "Quantum and post-quantum security models",
        "Digital twins for sustainability assessment and prediction",
        "Secure software engineering for cyber-physical systems",
        "IKS-informed edge/fog computing for rural technology",
      ],
    },
    {
      id: 4,
      title: "Multi-Disciplinary Innovations for Sustainable Development",
      description:
        "Interdisciplinary research integrating AI, healthcare, education, public policy, wellness, environmental sustainability, and ethical governance.",
      topics: [
        "AI & IoT in agriculture and rural development",
        "Social media analytics for behavioral and social sustainability",
        "Digital learning ecosystems for quality education",
        "E-governance and computational public policy tools",
        "Technology-based waste management and recycling solutions",
        "Wearable devices and digital therapeutics for wellbeing",
        "Sustainable entrepreneurship and innovation ecosystems",
        "Green computing and ICT for environmental stewardship",
        "Technology in evidence-based Yoga research and neuro-cognitive studies",
        "Data analytics in healthcare and psychophysiological monitoring",
        "AI and analytics for strategic decision-making and corporate sustainability (ESG)",
        "Holistic well-being analytics integrating Ayurveda and Yoga with AI",
      ],
    },
  ],

  // 📅 TIMELINE SECTION (structured)
  timeline: [
    { label: "Call for Paper", date: "December 10, 2025" },
    { label: "Paper Submission Deadline", date: "February 10, 2026" },
    { label: "Review Process (First Round)", date: "February 11 – March 10, 2026" },
    {
      label: "Notification of Acceptance (with/without Revision)",
      date: "March 15, 2026",
    },
    {
      label: "Registration & Presentation Scheduling",
      date: "March 20 – April 10, 2026",
    },
    {
      label: "Second Review (Camera Ready Version)",
      date: "April 15 – April 25, 2026",
    },
    {
      label: "Final Acceptance & Publication Confirmation",
      date: "April 30, 2026",
    },
    { label: "Conference Dates", date: "21–22 May 2026" },
  ],

  // 🧑‍🏫 COMMITTEES (cleaned / consolidated)
 // inside export const conferenceData = { ... }
committees: {
  // 🔹 CHIEF PATRON
  chiefPatron: [
    {
      name: "Dr. H. R. Nagendra",
      profession: "President",
      college: "S-VYASA Deemed to be University",
    },
  ],

  // 🔹 PATRONS
  patron: [
    {
      name: "Prof. K. Subrahmanyam",
      profession: "Chancellor",
      college: "S-VYASA Deemed to be University",
    },
    {
      name: "Dr. B. R. Ramakrishna",
      profession: "Pro-Chancellor",
      college: "S-VYASA Deemed to be University",
    },
    {
      name: "Dr. N. K. Manjunath Sharma",
      profession: "Vice-Chancellor",
      college: "S-VYASA Deemed to be University",
    },
    {
      name: "Prof. S. Siva Sankara Sai",
      profession: "Registrar",
      college: "S-VYASA Deemed to be University",
    },
    {
      name: "Mr. Anish Antony",
      profession: "Executive Director",
      college: "School of Advanced Studies, S-VYASA Deemed to be University",
    },
  ],

  // 🔹 VICE CHANCELLOR (single)
  viceChancellor: [
    {
      name: "Dr. N. K. Manjunath Sharma",
      profession: "Vice-Chancellor",
      college: "S-VYASA Deemed to be University",
    },
  ],

  // 🔹 REGISTRAR (single)
  registrar: [
    {
      name: "Prof. S. Siva Sankara Sai",
      profession: "Registrar",
      college: "S-VYASA Deemed to be University",
    },
  ],

  // 🔹 HONORARY CHAIRS
  honoraryChairs: [
    {
      name: "Dr. Sridhar S",
      profession: "Director, Academics",
      college: "S-VYASA Deemed to be University",
    },
    {
      name: "Dr. Karthiyayini O",
      profession: "Director, Academics",
      college: "S-VYASA Deemed to be University",
    },
  ],

  // 🔹 GENERAL CHAIR
  generalChair: [
    {
      name: "Dr. Sachin Sharma",
      profession: "Dean",
      college: "School of Computer Science and Applications, S-VYASA Deemed to be University",
    },
  ],

  // 🔹 CONFERENCE CHAIRS
  conferenceChairs: [
    {
      name: "Dr. Bharathi S",
      profession: "Associate Dean",
      college: "S-VYASA Deemed to be University",
    },
    {
      name: "Dr. Jai Singh W",
      profession: "Professor",
      college: "S-VYASA Deemed to be University",
    },
    {
      name: "Dr. Jaisingh W",
      profession: "Conference Chair",
      college: "S-VYASA Deemed to be University",
    },
  ],

  // 🔹 ORGANISING CHAIRS (no profession in text → default “Organising Committee” + S-VYASA)
  organisingChairs: [
    {
      name: "Dr. K. Harshavardhana Reddy",
      profession: "Organising Committee",
      college: "S-VYASA Deemed to be University",
    },
    {
      name: "Dr. B. Vasumathi",
      profession: "Organising Committee",
      college: "S-VYASA Deemed to be University",
    },
    {
      name: "Dr. Rajesh L",
      profession: "Organising Committee",
      college: "S-VYASA Deemed to be University",
    },
    {
      name: "Ms. Shilpashree S",
      profession: "Organising Committee",
      college: "S-VYASA Deemed to be University",
    },
  ],

  // 🔹 WEBSITE & PUBLICITY CHAIRS (default profession)
  websitePublicityChairs: [
    {
      name: "Dr. Bharathi S",
      profession: "Website & Publicity Committee",
      college: "S-VYASA Deemed to be University",
    },
    {
      name: "Preetham",
      profession: "Website & Publicity Committee",
      college: "S-VYASA Deemed to be University",
    },
    {
      name: "Dr. Geethanjali",
      profession: "Website & Publicity Committee",
      college: "S-VYASA Deemed to be University",
    },
    {
      name: "Dr. Ashwini",
      profession: "Website & Publicity Committee",
      college: "S-VYASA Deemed to be University",
    },
    {
      name: "Mr. Balakiran",
      profession: "Website & Publicity Committee",
      college: "S-VYASA Deemed to be University",
    },
  ],

  // 🔹 TECHNICAL REVIEW CHAIRS
  technicalReviewChairs: [
    {
      name: "Dr. Vasumathi",
      profession: "Technical Review Committee",
      college: "S-VYASA Deemed to be University",
    },
    {
      name: "Dr. Divya",
      profession: "Technical Review Committee",
      college: "S-VYASA Deemed to be University",
    },
    {
      name: "Ajith",
      profession: "Technical Review Committee",
      college: "S-VYASA Deemed to be University",
    },
    {
      name: "Mrs. Pankaja",
      profession: "Technical Review Committee",
      college: "S-VYASA Deemed to be University",
    },
  ],

  // 🔹 TECHNICAL COMMITTEE (default profession “Technical Committee”)
  technicalCommittee: [
    { name: "Dr. Geethanjali B", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Dr. Ashvini Alashetty", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Dr. Divya M O", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Mr. Balakiran S", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Mr. Vaibhav Srivastav", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Mr. Dhilip Raja P", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Mr. Prasath P", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Ms. Pankaja Benkal", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Ms. Sreeshma Mohan", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Ms. Akshatha Rithesh", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Ms. Deepika C", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Ms. Suganya Saravanan", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Ms. Srujana B", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Mr. Preetham Paul Socrates P", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Mr. Ajith", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Ms. Ramlakshmi B", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Ms. Harshitha J", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Mr. Mukul", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Ms. Prathima D", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Ms. Neethu K", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Ms. Rakshita Gurav", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
    { name: "Ms. Moushreeta Debroy", profession: "Technical Committee", college: "S-VYASA Deemed to be University" },
  ],

  // 🔹 PLAGIARISM CHECK CHAIRS
  plagiarismCheckChairs: [
    { name: "Vaibhav", profession: "Plagiarism Check Committee", college: "S-VYASA Deemed to be University" },
    { name: "Deelip", profession: "Plagiarism Check Committee", college: "S-VYASA Deemed to be University" },
    { name: "Prasath", profession: "Plagiarism Check Committee", college: "S-VYASA Deemed to be University" },
  ],

  // 🔹 FINANCE CHAIRS
  financeChairs: [
    { name: "Dr. Rajesh", profession: "Finance Committee", college: "S-VYASA Deemed to be University" },
    { name: "Akshatha", profession: "Finance Committee", college: "S-VYASA Deemed to be University" },
  ],

  // 🔹 PRINTING & PUBLICATION CHAIRS
  printingPublicationChairs: [
    { name: "Dr. Jai Singh", profession: "Printing & Publication Committee", college: "S-VYASA Deemed to be University" },
    { name: "Neethu", profession: "Printing & Publication Committee", college: "S-VYASA Deemed to be University" },
    { name: "Shrishma", profession: "Printing & Publication Committee", college: "S-VYASA Deemed to be University" },
    { name: "Prathima", profession: "Printing & Publication Committee", college: "S-VYASA Deemed to be University" },
    { name: "Srujana", profession: "Printing & Publication Committee", college: "S-VYASA Deemed to be University" },
  ],

  // 🔹 ADVISORY CHAIRS (text-only label)
  advisoryChairs: [
    {
      name: "National & International Experts",
      profession: "",
      college: "",
    },
  ],

  // 🔹 ADVISORY COMMITTEE (use your detailed text; no default profession override)
  advisoryCommittee: [
    {
      name: "Prof. Omar O Rana",
      profession: "",
      college: "Cardiff University, UK",
    },
    {
      name: "Prof. Dr. Midhunchakkaravarthy",
      profession: "Dean, School of AI Computing and Multimedia",
      college: "Lincoln University College, Malaysia",
    },
    {
      name: "Dr. Prabhu Pachiyannan",
      profession: "",
      college: "College of Computer and Information Sciences, IMSIU, Saudi Arabia",
    },
    {
      name: "Dr. Thangavel Murugan",
      profession: "",
      college: "College of Information Technology, United Arab Emirates University, UAE",
    },
    {
      name: "Prof. Lalit Garg",
      profession: "",
      college: "University of Malta, Malta",
    },
    {
      name: "Dr. Lalit Garg",
      profession: "Faculty of Information and Communication Technology",
      college: "University of Malta, Malta",
    },
    {
      name: "Prof. Imene Brigui",
      profession: "",
      college: "Emlyon Business School, Écully, France",
    },
    {
      name: "Prof. Haiming Liu",
      profession: "",
      college: "School of Electronics and Computer Science, University of Southampton, UK",
    },
    {
      name: "Prof. Ernest Cachia",
      profession: "Head, Computer Information Systems",
      college: "University of Malta, Malta",
    },
    {
      name: "Prof. Sanjay Misra",
      profession: "",
      college: "Ostfold University College, Halden, Norway",
    },
    {
      name: "Mr. Srinivas Murri",
      profession: "Lead Data Engineer",
      college: "Meta (formerly Facebook), Bellevue, Washington, USA",
    },
    {
      name: "Prof. LO Man-fung",
      profession: "",
      college: "Hong Kong Polytechnic University, Hong Kong",
    },
    {
      name: "Dr. Angesh Anupum",
      profession: "",
      college: "Cardiff Metropolitan University, UK",
    },
    {
      name: "Dr. Seena Joseph",
      profession: "",
      college: "University of Wales Trinity Saint David, UK",
    },
    {
      name: "Dr. Peter A. Xuereb",
      profession: "Faculty of Information and Communication Technology",
      college: "University of Malta, Malta",
    },
    {
      name: "Dr. B. Senthil Murugan",
      profession: "",
      college: "School of Computer Science Engineering and Information Systems (SCORE), VIT, India",
    },
    {
      name: "Dr. R. Mahalakshmi",
      profession: "Professor",
      college: "Presidency University, Bengaluru, Karnataka, India",
    },
    {
      name: "Prof. Rajiv Misra",
      profession: "",
      college: "IIT Patna, India",
    },
    {
      name: "Prof. Ashish Karan",
      profession: "Director, AI & Cybersecurity",
      college: "Indian Army",
    },
    {
      name: "Prof. R. P. Singh",
      profession: "Provost",
      college: "Adani University, Gujarat, India",
    },
    {
      name: "Dr. Nishtha Kesswani",
      profession: "",
      college: "CURAJ, India",
    },
  ],
},

  // 🎯 SPONSORS
  sponsors: [
    { name: "Elsevier SSRN", role: "Digital Library / Publication Partner" },
    { name: "International Association of Academicians (IAASSE), USA", role: "Collaborating Partner" },
    { name: "California State University, San Bernardino, USA", role: "Academic Collaborator" },
    { name: "Springer / Scopus Indexed (partner)", role: "Publication Partner" },
    { name: "S-VYASA University", role: "Host Institution" },
    { name: "Industry Partners", role: "Technical Sponsors" },
  ],

  // 📝 REGISTRATION
  registration: {
    indiaAuthorCategories: [
      { label: "Authors - Full Time Students (India)", fee: "Rs. 8,000" },
      { label: "Faculty / Research Scholars - Authors (India)", fee: "Rs. 9,500" },
      { label: "Authors - Industry (India)", fee: "Rs. 11,000" },
    ],
    includes: [
      "Conference kit & materials",
      "Access to all technical sessions",
      "Workshop participation",
      "Certificate of participation/presentation",
    ],
    policy: [
      "Paper submission implies the intent of at least one of the authors to register and present the paper, if accepted.",
      "After a double-blind peer review, qualifying regular papers may be accepted as either Full Papers or Short Papers.",
      "All accepted and presented papers of the conference will be included in SSRN digital library.",
      "No extra fee is charged from authors for inclusion in the digital/eLibrary.",
      "Most articles will have full text available online in open access at no extra cost to authors.",
      "No subscription is required for any organization, school, or individual author as a prerequisite to submission or download.",
      "Authors will grant a non-exclusive, revocable license that allows providing services to users.",
      "The proceedings page will be permanently available without additional fees.",
    ],
    indexing: {
      services: [
        "ISI Conference Proceedings Citation Index – ISI Web of Science",
        "Google Scholar",
        "Scopus",
        "DBLP",
      ],
      note:
        "Post conference, proceedings will be made available to major indexing services. Inclusion depends on the focus of each indexing service. If included, one can typically expect it in 12–18 months, while DBLP and Google Scholar are faster.",
    },
    submissionGuidelines: {
      summary:
        "Papers reporting original and unpublished research results pertaining to the related topics are solicited. Full paper manuscripts must be in English of up to 7 pages (pages can be more than 7 by paying extra charges).",
      length:
        "The length of the submitted manuscript should fall between 3,500 to 6,000 words, 12pt, single-spaced text, left-justified.",
      copyEditing:
        "Manuscripts should be submitted grammatically and stylistically adequate.",
      references:
        "Manuscripts should include a thorough literature review and approximately 25–30 references. All paraphrased or quoted material must include in-text citations. Manuscripts and references must strictly follow APA style.",
      titlePage:
        "Submissions should include the title, author(s), affiliation(s), e-mail address(es), abstract, and postal address(es) on the first page.",
      onlineSubmissionPlatform: "EASY CHAIR",
    },
    registrationLink: "https://easychair.org/conference/?conf=iccsi2026" 
  },

  // 📌 CONTACT / VENUE SECTION
  contact: {
    address:
      "School of Computer Science and Applications (SCSA), S-VYASA (Deemed-to-be-University), Bengaluru, Karnataka, India",
    mapLink: "https://maps.google.com?q=svyasa+bengaluru",
    website: "https://www.svyasa.edu.in",
    conferenceWebsite: "",
    email: "iccsi2026@gmail.com",
    iaasseEmail: "icdsai@iaasse.org",
    emails: ["iccsi2026@gmail.com", "icdsai@iaasse.org"],
  },
};
