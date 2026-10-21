// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Precious Ogbonnaya',
  initials: 'PO',
  title: 'Full-Stack Developer | AI-Powered Applications',
  location: 'Lagos, Nigeria',
  intro:
    "I'm a full-stack developer who enjoys taking ideas from a blank folder to usable software. I've built and shipped applications independently, working across frontend interfaces, backend APIs, databases, authentication, and AI integrations. I'm looking to join a team where I can contribute to building useful software at a larger scale.",
  // Put your PDF in /public (e.g. public/Precious-Ogbonnaya-CV.pdf) and set this to '/Precious-Ogbonnaya-CV.pdf'.
  cvUrl: null,
  // Put a real photo in /public and set this to its path. Leave null to hide it.
  photoUrl: null,
  email: 'ppedwards895@gmail.com',
  phone: '+234 915 631 8838',
  portfolio: 'preciousogbonnaya.vercel.app',
  github: 'github.com/preciousprincee',
  linkedin: 'linkedin.com/in/preciousogbonnaya',
  x: 'x.com/heisfortunes',
}

export const nav = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

// status: short honest label. liveUrl / repoUrl: leave null until verified.
// contributions: leave [] if not confirmed yet.
export const projects = [
  {
    name: 'VendorIQ',
    category: 'SaaS / Inventory Management',
    color: '#00D6A0',
    status: 'Built as a full-stack application',
    description:
      'Small shop owners often track stock in notebooks and sales in their heads, so they rarely know which products make money. VendorIQ puts products, sales, stock levels and expenses in one system, so an owner can see how the business is actually doing.',
    contributions: [
      'Built the React frontend',
      'Developed the backend with Django and Django REST Framework',
      'Designed the PostgreSQL database',
      'Implemented authentication and role-based access',
      'Built inventory and sales management',
      'Worked on business insights and financial tracking',
    ],
    tech: ['React', 'Django', 'Django REST Framework', 'PostgreSQL'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    name: 'Evolve AI',
    category: 'AI Application',
    color: '#A78BFA',
    status: 'MVP',
    description:
      'An AI companion for meaningful conversations by text and voice. Users onboard, sign in, chat, or switch to a full-screen call mode with a voice matched to the companion\u2019s persona.',
    contributions: [
      'Built the app with React and Vite',
      'Developed the backend with Node.js and Express',
      'Integrated the Groq API for conversations',
      'Worked with Supabase',
      'Implemented onboarding and authentication flows',
      'Built chat and full-screen call mode, with persona-based voice selection',
    ],
    tech: ['React', 'Vite', 'Node.js', 'Express', 'Supabase', 'Groq API'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    name: 'PayGrace',
    category: 'Fintech / Data and Airtime',
    color: '#60A5FA',
    status: 'Concept',
    description:
      'A data and airtime vending application concept, intended to make buying mobile data and airtime simpler.',
    contributions: [],
    tech: ['React', 'Supabase', 'Django'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    name: 'SecurityMe',
    category: 'Community Safety / Mobile',
    color: '#FB923C',
    status: 'Concept, partly developed',
    description:
      'A location-aware community safety application concept that would let people report incidents, receive nearby alerts and reach emergency assistance.',
    contributions: [],
    tech: ['React Native', 'Django'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    name: 'LyricsBench',
    category: 'Music Technology / Software Project',
    color: '#F472B6',
    status: 'Details to be added',
    // TODO: no LyricsBench files or README were available. Fill in description,
    // contributions, tech and status once confirmed.
    description: 'A music technology project. Full details will be added here.',
    contributions: [],
    tech: [],
    liveUrl: null,
    repoUrl: null,
  },
]

export const skills = [
  { group: 'Languages and frameworks', items: ['JavaScript', 'TypeScript', 'Python', 'React', 'Next.js', 'Node.js', 'Express', 'Django'] },
  { group: 'Databases and APIs', items: ['PostgreSQL', 'Supabase', 'SQL', 'REST API design'] },
  { group: 'AI and cloud', items: ['Groq API', 'AWS', 'Microsoft Azure', 'Azure Active Directory'] },
  { group: 'Tools and automation', items: ['Git', 'GitHub', 'Power Automate', 'Power Apps'] },
]

export const experience = [
  {
    org: 'FrieslandCampina WAMCO, Lagos',
    role: 'IT Support Specialist',
    period: 'July 2024 \u2013 December 2024',
    points: [
      'Automated recurring manual workflows using Power Automate.',
      'Diagnosed and resolved hardware, software, and network issues.',
      'Provided support through phone, chat, and email.',
      'Documented solutions in a reusable knowledge base.',
    ],
  },
  {
    org: 'Femish IT Solutions and Systems, Lagos',
    role: 'Software Developer Intern',
    period: 'January 2023 \u2013 April 2023',
    points: [
      'Supported senior developers in building and maintaining software.',
      'Worked with different programming languages, frameworks, and tools.',
      'Contributed to technical documentation.',
      'Communicated development progress within a team.',
    ],
  },
]

export const education = [
  { school: 'Federal University of Agriculture, Abeokuta (FUNAAB)', award: 'B.Sc. Information Technology', period: '2025\u20132028 (in progress)' },
  { school: 'Adeseun Ogundoyin Polytechnic, Eruwa', award: 'National Diploma in Computer Science', period: '2023' },
]

export const certifications = [
  { name: 'Data Science with Python Django', issuer: 'Simplilearn', year: '2023' },
  { name: 'React JS', issuer: 'Sololearn', year: '2023' },
  { name: 'Python Core', issuer: 'Sololearn', year: '2022' },
  { name: 'Responsive Web Design', issuer: 'Aptech', year: '2021' },
]
