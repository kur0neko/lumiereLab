const navLinks = [
  {
    name: "WORK",
    link: "#work",
  },
  {
    name: "EXPERIENCE",
    link: "#experience",
  },
  {
    name: "SKILLS",
    link: "#skills",
  },
  {
    name: "TESTIMONIALS",
    link: "#testimonials",
  },
];

const resumeLink={resume: "/pdf/main.pdf"};


const PROJECTS = [
  // Featured (big first card)
  {
    id: "foodreal",
    title:
      "I’m currently working on a mobile app that promotes healthy home cooking through an intuitive and user-friendly experience.",
    description:
      "A high-performance mobile app built with React Native, Expo, and TailwindCSS, featuring AI integration and a user-friendly, industry-standard design.",
    image: "/images/DemoGif.gif",
    //imageAlt: "Ryde App Interface",
    links: [{ label: "View on GitHub", href: "https://github.com/kur0neko/FoodReal" }],
    featured: true,
  },

  // Existing smaller cards
  {
    id: "note-hub",
    title:
      "Note Hub: Note taking web application (Python, Flask, SQLAlchemy, Django)",
    description:
      "NoteHub is the Note Web application built with Flask python framework, WTforms, SQL alchemy, and Jinja web template engine.",
    image: "/images/project4.png",
    //imageAlt: "Library Management Platform",
    bg: "bg-[#FFEFDB]",
    links: [{ label: "View on GitHub", href: "https://github.com/kur0neko/DesignWebsiteWithFlask" }],
  },
  {
    id: "iris-net",
    title:
      "Neural Network Classifier for Iris Dataset (PyTorch, NumPy, Pandas, Python, Scikit-learn)",
    description:
      "A neural network model that classify iris flowers into Setosa, Versicolor, or Virginica species based on sepal and petal measurements.",  
    image: "/images/project3.png",
    //imageAlt: "YC Directory App",
    bg: "bg-[#FFE7EB]",
    links: [{ label: "View on GitHub", href: "https://github.com/kur0neko/NeuralNetwork_Flower" }],
  },

  // ➕ Add 3 more here (example placeholders)
  {
    id: "Mirai Project",
    title: "A customized Linux based on Rasbian Debain Mirai v1.3",
    description:
      "I create a custom Linux based on Debian for ARM arch64 Raspberrypi CM4 with Clockwork Pi v3.14 board using Yocto Project and Pi-gen for Deb version",
    image: "/images/project5.png",
    //imageAlt: "Smart Study Buddy App",
    bg: "bg-[#A4D8D8]",
    links: [ { label: "Build image file Here on Github", href: "https://github.com/kur0neko/MiraiOS"},
    ],
  },
  {
    id: "Schmitt",
    title: "Square and Triangle wave generator using Schmitt Trigger Op-amp.",
    description:
      "Collaborated project computer engineering classmate we designed, constructed waveform generator using op-amp and transistos",
    image: "/images/project6.png",
    //imageAlt: "Embedded Sensor Hub",
    bg: "bg-[#DFCCF1]",
    links: [
      // { label: "Case Study", href: "https://..." },
      { label: "View Document on GitHub", href: "https://github.com/kur0neko/Square-and-Triangle-Wave-Generator" },
    ],
  },
  {
    id: "FPGA",
    title: "FPGA RISC-V Pipeline with verilog",
    description:
      "FPGA Pipeline designed RISC-V Architecture using Vivado, System verilog",
    image: "/images/project7.png",
    //imageAlt: "Realtime Chat App",
    bg: "bg-[#F6A6B5]",
    links: [
      // { label: "Live Demo", href: "https://..." },
       { label: "View on GitHub", href: "https://github.com/kur0neko/FPGA-RISC-V" },
    ],
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 10, suffix: "+", label: "Years of Programing Experiences" },
  { value: 3, suffix: "+", label: "Information Technology Field" },
  { value: 3, suffix: "+", label: "Software developer" },
  { value: 1, suffix: "+", label: "Mobile App developer" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-12.png",
  },
  {
    imgPath: "/images/logos/company-logo-13.png",
  },
  {
    imgPath: "/images/logos/company-logo-14.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-16.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
 
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Programming Langues",
    desc: " MASM, NASM, C, C++, Python, JavaScript, mySQL, Verilog, HTML, CSS, Java, Swift, Flutter, Go, React, React native ",
  },
  {
    imgPath: "/images/chat.png",
    title: "Deep learning/ ML",
    desc: "PyTorch, TensorFlow, NumPy, Scikit-learn, OpenCV, Jupyter, CUDA",
  },
  {
    imgPath: "/images/time.png",
    title: "Embedded Systems",
    desc: "Raspberry Pi CM4, FPGA (Verilog/SystemVerilog), LTspice, Oscilloscope, KiCad",
  },
   {
    imgPath: "/images/time.png",
    title: "Software",
    desc: "Docker, VMware, Vivado, SolidWorks, Office 365, Figma, Adobe Photoshop",
  },
  {
    imgPath: "/images/time.png",
    title: "Hardware",
    desc: "IT support, BIOS Flashing, RAID, VPN, Networking, NAS configuration, Hardware Troubleshooting",
  },
  {
    imgPath: "/images/time.png",
    title: "OS Environment ",
    desc: "Proficient with Mac, Linux and Window ",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

//need to change
const expCards = [
  {
    logoPath: "/images/GreenBall3.png",
    title: "Hardware Test Engineer - Tezerakt LLC (contracted to Google via xWF program) (Full-time)",
    date: "Oct 2025 - Current",
    responsibilities: [
      "Performed environmental chamber testing on Google enterprise and development hardware to validate design reliability under extreme conditions (temperature, humidity, and stress).",
      "Run various test suites to push the Google enterprise hardware, and the google development tools hardware to its limits ",
      "Monitored chamber conditions and system metrics in real time to ensure accurate environmental simulation without risking hardware integrity.",
      "Configured and prepared test setups, including network integration, firmware updates, and hardware calibration, before chamber entry."
    ],
  },
  {
    review: "Nathan’s work on NASA’s Proposal Writing and Evaluation program stood out for its technical insight and innovation. He co-authored a proposal selected for further development and consistently brought forward creative engineering ideas that demonstrated both clarity and depth.",
    imgPath: "/images/NASALLOGO.png",
    logoPath: "/images/BlueB.png",
    title: "Reseacher",
    date: "August 2024 - December 2024",
    responsibilities: [
      "Conducted in-depth research on high-voltage battery systems and investigated laser-based charging methods to support extended-duration space missions.",
      "Co-wrote and presented a technical proposal that was selected by NASA Marshall Space Flight Center for further review due to its innovation and practical feasibility.",
      "Collaborated with engineers and analysts to evaluate new aerospace concepts and contributed to the design of early-stage prototypes used for proof-of-concept modeling.",
    ],
    pdfLink: "/pdf/NPWEE_Research.pdf"
  },
   {
    review: "During the NASA Mission Concept Academy, Nathan played a critical role in planning a simulated lunar discovery mission. He led project cost modeling and milestone forecasting, showing excellent command of NASA analysis tools and a collaborative, mission-driven mindset.",
    imgPath: "/images/NASALLOGO.png",
    logoPath: "/images/BlueB.png",
    title: "Reseacher",
    date: "January 2024 - August 2024",
    responsibilities: [
      "Played an active role as Program Analyst & Computer Engineer in a simulated NASA Discovery Mission, contributing to technical planning for a lunar water sample retrieval and return operation.",
      "Assisted in managing mission schedules by forecasting and aligning critical milestones using NASA’s project review and tracking systems.",
      "Conducted mission cost analysis by researching historical data and applying NASA’s official tools to estimate budgets, resources, and instrumentation needs.",
    ],
    pdfLink: "/pdf/MCAPreliminaryDesignReview.pdf"
  },
  {
    review: "Nathan was instrumental in maintaining the integrity of Mountain Cascade’s IT infrastructure. His deep understanding of Windows server environments, hands-on BIOS and RAID configuration, and end-to-end hardware lifecycle management made him a trusted and reliable technician.",
    imgPath: "/images/MCIINC.png",
    logoPath: "/images/GreenBall3.png",
    title: "IT Technician & IT specialist (Full-Time)",
    date: "March 2020 - August 2023",
    responsibilities: [
      "Provided end-to-end IT support by identifying, troubleshooting, and resolving hardware and software issues in a busy corporate environment.",
      "Performed hands-on technical work including BIOS flashing, RAID configuration, VPN setup, and regular maintenance of servers and workstations.",
      "Managed the company’s hardware inventory while coordinating repairs, system upgrades, and workstation setup for new and existing staff.",
    ],
  },
  {
    review: "At Amber System Technology, Nathan demonstrated impressive full-stack skills and client-focused development. He customized POS systems and led frontend solutions that aligned tightly with client requirements, delivering clean, effective user experiences with modern tech.",
    imgPath: "/images/AST.png",
    logoPath: "/images/RedBall2.png",
    title: "Frontend Developer (Part-Time)",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Designed and refined the user interface of point-of-sale systems to ensure smooth navigation, visual appeal, and ease of use for business clients.",
      "Led front-end development of custom software by collaborating with clients to understand their goals and turning those into functional features.",
      "Developed and maintained full-stack web applications that improved operational workflows and provided scalable long-term solutions for small businesses.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "David Morse",
    //mentions: "@estherhoward",
    review:
       "Over the 3 ½ years he was at Mountain Cascade, I came to see him as a quick learner with excellent problem-solving skills. He is someone I knew I could rely on and he is well liked and respected at Mountain Cascade.",
    imgPath: "/images/noimg.png",
    link: "/pdf/NathanLetterOfRec.pdf",
  },
  {
    name: "Suzanne Chen",
    //mentions: "@wadewarren",
    review:
      "Nathan is passionate about learning and contribute creative ideas for projects. He is dedicated to the development and great team player.",
    imgPath: "/images/SuzanneChen.png",
  },
  {
    name: "Steven Lucker",
    //mentions: "@guyhawkins",
    review:
      "I worked with Nutthawat (Nathan) for about a year at MCI, he was on the technology side of things and I was on the building side. Other than seeing each other in passing at the office, I mostly interfaced with Nathan whenever we had question or issues with our back end systems that kept the company running. Nathan was always extremely personable and professional and took every question we had seriously. Weather it was a simple “I forgot my password” request or a company wide server issue, Nathan worked diligently to resolve any issue.",
    imgPath: "/images/StevenLucker.png",
  },
  //{
   // name: "Marvin McKinney",
    //mentions: "@marvinmckinney",
   // review:
   //   "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
   // imgPath: "/images/client5.png",
  //},
  //{
   // name: "Floyd Miles",
   // mentions: "@floydmiles",
   // review:
    //  "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
   // imgPath: "/images/client4.png",
 // },
  //{
   // name: "Albert Flores",
   // mentions: "@albertflores",
    //review:
    //  "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    //imgPath: "/images/client6.png",
 // },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/nathn_0110?igsh=OXpxOWR2MXhjdG00&utm_source=qr", 
  },
 // {
   // name: "fb",
   // imgPath: "/images/fb.png",
   // url: , 
 // },
 // {
   // name: "x",
    //imgPath: "/images/x.png",
   // url: , 
 // },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/nathan-panyangnoi/", 
  }
];

export {
  resumeLink,
  words,
  abilities,
  logoIconsList,
  PROJECTS,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
