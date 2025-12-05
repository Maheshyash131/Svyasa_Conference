// src/mockData.js

export const conferenceData = {
  // 🔷 Conference Overview
  code: "ICCSI–2026",
  acronym: "ICCSI–2026",
  title:
    "International Conference on Computational Intelligence and Sustainable Innovation",
  dates: "21–22 May 2026",
    location:
    [ "School of Computer Science and Applications (SCSA) \n S-VYASA Deemed-to-be-University\n Bengaluru, Karnataka, India"],
  organizedBy:
    "School of Computer Science and Applications (SCSA), S-VYASA Deemed-to-be-University",
  // emails (unique)
  email: "iccsi@svyasa.edu.in",
  altEmails: ["icdsai@iaasse.org", "svyasa@svyasa.edu.in"],
  phone: "Not Provided",

  // 🧠 ABOUT SECTION (pointwise)
  about: {
    description:
      "The International Conference on Computational Intelligence and Sustainable Innovation (ICCSI–2026) invites researchers, academicians, and industry professionals to share innovative ideas, methodologies, and technologies contributing to sustainable development through computational intelligence.",

     highlight:
    "All papers accepted and presented in the conference will be published in the Conference Proceedings, which will be submitted to Scopus for indexing.",

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
          "A leading department under S-VYASA School of Computer Science and Applications",
          "Focuses on cybersecurity, artificial intelligence, cloud computing, and data science",
          "Provides strong theoretical and practical foundations in computing",
          "Trains students to excel in emerging digital technologies",
          "Encourages applied research and innovation",
        ],
      },
    ],
  },

  // 📌 TRACKS SECTION (deduplicated & normalized)
 tracks: [
  {
    id: 1,
    title: "Advances in Artificial Intelligence & Data Technologies",
    description:
      "Exploring cutting-edge developments in AI, data technologies, and intelligent systems for next-generation applications.",
    topics: [
      "Machine Learning",
      "Deep Learning",
      "Artificial Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "Expert Systems",
      "Cognitive Computing",
      "Generative AI",
      "Conversational AI & Chatbots",
      "Speech Recognition",
      "Image & Video Analytics",
      "Autonomous Intelligence & Robotics",
      "Recommendation Systems",
      "Explainable AI",
      "Ethical & Responsible AI",
      "Data Science",
      "Big Data Analytics",
      "Business Intelligence",
      "Data Visualization",
      "Data Engineering",
      "AI in Indian Knowledge System"
    ],
  },

  {
    id: 2,
    title: "Emerging Trends in Information & Quantum Technologies",
    description:
      "A deep exploration of modern information technologies, security frameworks, and quantum advancements shaping the future.",
    topics: [
      "Cloud Computing",
      "Distributed Systems",
      "Virtualization Technologies",
      "Next-generation Networks (5G, 6G)",
      "IoT & Sensor Networks",
      "Wireless Communication Systems",
      "Network Security",
      "Application Security",
      "Cryptography",
      "Cyber Threat Intelligence",
      "Quantum Computing",
      "Quantum Algorithms",
      "Quantum Machine Learning",
      "Quantum Cryptography",
      "Blockchain Technology",
      "Digital Twins",
      "Smart Cities & Industry 4.0"
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
      college: "School of Computer Science and Applications, S-VYASA Deemed to be University",
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
      school: "School of Computer Science and Applications",
      college: "S-VYASA Deemed to be University",
    },
    {
      name: "Dr. Jai Singh W",
      profession: "Professor",
      school: "School of Computer Science and Applications",
      college: "S-VYASA Deemed to be University",
    },
  ],

  // 🔹 ORGANISING CHAIRS
  organisingChairs: [
    {
      name: "Dr K Harshavardhana Reddy",
      profession: "",
      college: "School of Computer Science and Applications, S-VYASA Deemed to be University",
    },
    {
      name: "Dr .B Vasumathi",
      profession: "",
      college: "School of Computer Science and Applications, S-VYASA Deemed to be University",
    },
    {
      name: "Dr. Rajesh L",
      profession: "",
      college: "School of Computer Science and Applications, S-VYASA Deemed to be University",
    },
    {
      name: "Ms. Shilpashree S",
      profession: "",
      college: "School of Computer Science and Applications, S-VYASA Deemed to be University",
    },
    {
      name: "Dr.Ashvini Alashetty",
      profession: "",
      college: "School of Computer Science and Applications, S-VYASA Deemed to be University",
    },
  ],

  // 🔹 PUBLICITY CHAIRS
  publicityChairs: [
    {
      name: "Dr. Bharathi S",
      profession: "",
      college: "School of Computer Science and Applications, S-VYASA Deemed to be University",
    },
    {
      name: "Ms.Shilpashree S",
      profession: "",
      college: "School of Computer Science and Applications, S-VYASA Deemed to be University",
    },
    {
      name: "Mr.Balakiran S",
      profession: "",
      college: "School of Computer Science and Applications, S-VYASA Deemed to be University",
    },
    {
      name: "Mr Preetham Paul Socrates P",
      profession: "",
      college: "School of Computer Science and Applications, S-VYASA Deemed to be University",
    },
    {
      name: "Ms.Harshitha J",
      profession: "",
      college: "School of Computer Science and Applications, S-VYASA Deemed to be University",
    },
  ],

  // 🔹 TECHNICAL REVIEW CHAIRS
  technicalReviewChairs: [
    { name: "Dr .B Vasumathi", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Dr.Geethanjali B", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Dr.Ashvini Alashetty", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Dr Divya M O", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Ms. Pankaja Benkal", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Mr Ajith", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Mr Mukul", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
  ],

  // 🔹 PLAGIARISM CHECK CHAIRS
  plagiarismCheckChairs: [
    { name: "Ms. Prathima D", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Ms.Neethu K", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Ms. Sreeshma Mohan", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Ms.Srujana B", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Ms Rakshita Gurav", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Ms.Moushreeta Debroy", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
  ],

  // 🔹 FINANCE CHAIRS
  financeChairs: [
    { name: "Dr.Rajesh L", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Ms.Akshatha Rithesh", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
  ],

  // 🔹 PRINTING & PUBLICATION CHAIRS
  printingPublicationChairs: [
    { name: "Dr. Bharathi S", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Dr. Jai Singh W", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Ms Ramlakshmi B", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Ms. Deepika C", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Ms. Suganya Saravanan", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Mr.Vaibhav Srivastav", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Mr.Dhilip Raja P", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
    { name: "Mr.Prasath P", profession: "", college: "School of Computer Science and Applications, S-VYASA Deemed to be University" },
  ],

  // 🔹 ADVISORY CHAIRS (advisoryCommittee merged)
  advisoryChairs: [
    {
      name: "Dr.Sacchidanand",
      profession: "Former Vice Chancellor",
      college: "Rajiv Gandhi University of Health & Science",
    },
    {
      name: "Dr. Deepa Shenoy",
      profession: "Professor, Former Chairman IEEE, Bengaluru Region",
      college: "School of Computer Science and Applications, S-VYASA Deemed to be University",
    },
    {
      name: "Dr Balamurugan Easwaran",
      profession: "Deputy Vice Chancellor Academics",
      college: "Texila American University, Zambia",
    },
    {
      name: "Norazman Bin Mohamad Nor",
      profession: "Dean, Faculty of Engineering",
      college: "MAHSA University, Malaysia",
    },
    {
      name: "Prof.Dr.Midhun chakkaravarthy",
      profession: "Dean, School of AI Computing and Multimedia",
      college: "Lincoln University College, Malaysia",
    },
    {
      name: "Dr Prabhu Pachiyannan",
      profession: "",
      college: "College of Computer and Information Sciences, IMSIU, Saudi Arabia",
    },
    {
      name: "Dr. Thangavel Murugan",
      profession: "",
      college: "College of Information Technology, UAE University, UAE",
    },
    {
      name: "Dr. Aswath Babu .H",
      profession: "",
      college: "Indian Institute of Information Technology Dharwad",
    },
    {
      name: "Dr. R. Mahalakshmi",
      profession: "Professor",
      college: "Presidency University, Bengaluru, India",
    },
    {
      name: "Dr Ab Rouf Khan",
      profession: "",
      college: "SKUAST, Jammu and Kashmir, India",
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
      { label: "Authors - Full Time Students (India)", fee: "Rs. 7,000" },
      { label: "Faculty / Research Scholars - Authors (India)", fee: "Rs. 8,000" },
      { label: "Authors - Industry (India)", fee: "Rs. 9,000" },
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
        "Papers reporting original and unpublished research results pertaining to the related topics are solicited.\n Full paper manuscripts must be in English of up to 7 pages (pages can be more than 7 by paying extra charges).\n The plagiarism and AI content should be less than 10 percentage.",
      length:
        "The length of the submitted manuscript should fall between 3,500 to 6,000 words, 12pt, single-spaced text, left-justified.",
      copyEditing:
        "Manuscripts should be submitted grammatically and stylistically adequate. The plagiarism and AI content should be less than 10 percentage.",
      acknowledgements:
        "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support",
      references:
        "Manuscripts should include a thorough literature review and approximately 25–30 references. All paraphrased or quoted material must include in-text citations. Manuscripts and references must strictly follow APA style.",
      titlePage:
        "Submissions should include the title, author(s), affiliation(s), e-mail address(es), abstract, and postal address(es) on the first page.",
      onlineSubmissionPlatform: "",
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
    emails: ["iccsi2026@gmail.com"],
    iaasseEmail: "icdsai@iaasse.org",
    // emails: ["iccsi2026@gmail.com"],
  },
};
