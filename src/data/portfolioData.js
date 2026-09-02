// ─────────────────────────────────────────────────────────────
// All personal content lives here. Edit this file to update
// anything on the site — no need to touch the components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Subrhamanyam Bhattaram',
  fullName: 'Subrhamanyam (B.V.S.) Bhattaram',
  initials: 'SB',
  badge: 'Available for Opportunities',
  roles: [
    'Front-End Web Developer',
    'AI & ML Undergraduate',
    'Prompt Engineering Specialist',
    'Modern UI & React Explorer'
  ],
  location: 'Nellore, Andhra Pradesh, India',
  email: 'subbubhattaram@gmail.com',
  github: 'https://github.com/subbu957',
  githubUser: 'subbu957',
  linkedin: 'https://www.linkedin.com/in/subrhamanyam-bhattaram-658656303',
  photo: '/assets/profile.jpg',
  resumeUrl: '/assets/resume.pdf',
  summary:
    "B.Tech AI & ML student building hands-on experience in front-end web development, Python, and responsive UI design. I craft clean, interactive web experiences with HTML5, CSS3, JavaScript and React, bridging aesthetic interfaces with practical AI integrations.",
  aboutParagraphs: [
    "I'm a second-year B.Tech student in Artificial Intelligence & Machine Learning at Narayana Engineering College, Nellore. Alongside my coursework, I've been teaching myself front-end development — HTML5, CSS3, modern JavaScript, and React — building functional web applications from scratch.",
    "I'm drawn to the intersection of clean interface design and practical engineering: writing modular, readable code, keeping UIs responsive across all devices, and leveraging prompt engineering and AI/ML concepts to build smarter, future-ready tools.",
  ],
  stats: [
    { label: 'Degree & Branch', value: 'B.Tech AI & ML', sub: '2023 – 2027' },
    { label: 'Core Focus', value: 'Front-End & UI', sub: 'React, JS, Tailwind' },
    { label: 'Certifications', value: '4+ Programs', sub: 'IBM, YUVA, Quantum' },
    { label: 'Status', value: 'Open for Roles', sub: 'Internships & Projects' },
  ],
  strengths: [
    {
      title: 'Clear Technical Communication',
      desc: 'Fluent in both written and spoken communication, explaining complex technical concepts with clarity.'
    },
    {
      title: 'Fast & Self-Driven Learner',
      desc: 'Proactively picked up modern front-end engineering alongside rigorous full-time B.Tech coursework.'
    },
    {
      title: 'Detail & Pixel Precision',
      desc: 'Obsessed with semantic HTML, fluid responsive layouts, clean CSS architecture, and smooth micro-interactions.'
    },
    {
      title: 'Modern Developer Workflow',
      desc: 'Daily practitioner of Git/GitHub version control, VS Code optimization, and Chrome DevTools debugging.'
    },
  ],
}

export const skills = [
  {
    category: 'Front-End Development',
    iconName: 'Layout',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Web Design', 'DOM Manipulation', 'Event Handling'],
  },
  {
    category: 'Frameworks & Styling',
    iconName: 'Code2',
    items: ['React.js', 'TailwindCSS', 'Bootstrap', 'Framer Motion'],
  },
  {
    category: 'AI & Prompt Engineering',
    iconName: 'Sparkles',
    items: ['Prompt Engineering (IBM Certified)', 'Python Automation', 'Machine Learning Basics', 'LLM Integration'],
  },
  {
    category: 'Database & Backend Basics',
    iconName: 'Database',
    items: ['SQL', 'MySQL', 'Relational Schemas', 'CRUD Operations'],
  },
  {
    category: 'Developer Tools',
    iconName: 'Wrench',
    items: ['Git', 'GitHub', 'VS Code', 'Chrome DevTools', 'Vite', 'Jupyter Notebook'],
  },
  {
    category: 'Computer Science Core',
    iconName: 'Cpu',
    items: ['Object-Oriented Programming (OOP)', 'Data Structures & Algorithms', 'Cross-Browser Compatibility'],
  },
]

export const projects = [
  {
    title: 'Student SGPA / CGPA Calculator',
    badge: 'Featured Project',
    category: 'Web App',
    description:
      'A production-ready front-end web application for calculating student semester and cumulative grade point averages in real time. Features dynamic course rows, instant grade weighting, and comprehensive error handling.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Flexbox'],
    github: 'https://github.com/subbu957',
    demo: 'https://b-tech-student-calculator.vercel.app',
    highlights: ['Real-time calculation engine', 'Responsive across mobile, tablet & desktop', 'Tested cross-browser'],
  },
  {
    title: 'Modern Developer Portfolio v2',
    badge: 'Live Showcase',
    category: 'Web App',
    description:
      'High-performance personal developer portfolio built with React, Vite, TailwindCSS, and Framer Motion. Engineered with dark glassmorphic aesthetics, animated aurora backdrops, and interactive UI micro-interactions.',
    stack: ['React', 'Vite', 'TailwindCSS', 'Framer Motion'],
    github: 'https://github.com/subbu957',
    demo: '#home',
    highlights: ['Interactive role switcher', 'Glassmorphism & animated mesh glows', 'Accessible & mobile-first'],
  },
  {
    title: 'AI Prompt Engineering Studio',
    badge: 'AI & Automation',
    category: 'AI / Python',
    description:
      'A collection of systematic prompt templates, testing harnesses, and automation workflows designed for generative AI models, leveraging techniques learned from the IBM Prompt Engineering certification.',
    stack: ['Prompt Engineering', 'Python', 'LLM APIs', 'Markdown'],
    github: 'https://github.com/subbu957',
    demo: null,
    highlights: ['Few-shot & chain-of-thought patterns', 'Structured output generation', 'Automated evaluation workflows'],
  },
  {
    title: 'Python Automation & Utility Hub',
    badge: 'Tooling',
    category: 'AI / Python',
    description:
      'Modular Python utility scripts for streamlining repetitive student workflows, including data parsing, file organization, and automated academic schedule reminders.',
    stack: ['Python 3', 'Automation', 'Data Structures'],
    github: 'https://github.com/subbu957',
    demo: null,
    highlights: ['Clean OOP architecture', 'CLI interface for fast execution', 'Error logging & reporting'],
  },
]

export const education = [
  {
    school: 'Narayana Engineering College (Autonomous)',
    location: 'Nellore, Andhra Pradesh',
    credential: 'B.Tech — Artificial Intelligence & Machine Learning',
    period: '2023 – 2027',
    detail: 'Coursework: Data Structures & Algorithms, OOP, Database Management Systems, Computer Networks, Software Engineering, Web Technologies',
  },
  {
    school: 'Narayana Junior College',
    location: 'Arvindha Nagar, Nellore, Andhra Pradesh',
    credential: 'Intermediate (MPC) — 86.4%',
    period: '2021 – 2023',
  },
  {
    school: 'Ratnam High School',
    location: 'Lakshmipuram, Nellore, Andhra Pradesh',
    credential: 'Secondary School Certificate (Class 6–10) — 599 Marks',
    period: 'Completed 2020',
  },
]

export const journey = [
  {
    title: 'Front-end fundamentals',
    detail: 'Mastered HTML5, CSS3, and JavaScript — DOM manipulation, asynchronous fetching, event delegation, and responsive layouts.',
  },
  {
    title: 'Shipped a real project',
    detail: 'Engineered and deployed the Student SGPA/CGPA Calculator, actively utilized by peers with intuitive UX.',
  },
  {
    title: 'AI & prompt engineering',
    detail: 'Earned IBM certification in Prompt Engineering (via edX) and completed the hands-on YUVA AI program.',
  },
  {
    title: 'Hackathon exposure',
    detail: 'Participated in Agentathon 2025 (GDG Hyderabad), exploring agentic AI integration with web platforms.',
  },
  {
    title: 'Sharing what I learn',
    detail: 'Publishing technical insights on LinkedIn about web development best practices and practical AI applications.',
  },
]

export const certifications = [
  { name: 'Introduction to Prompt Engineering', issuer: 'IBM via edX', year: '2024' },
  { name: 'YUVA AI Program', issuer: 'YUVA', year: '2025' },
  { name: 'Quantum Fundamentals Program', issuer: 'Qubitech, WISER & Amaravati Quantum Valley', year: '2025' },
  { name: 'Sustainable Information Technology', issuer: 'Narayana Engineering College', year: '2023 – Present' },
]

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]
