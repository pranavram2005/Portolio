// ---------------------------------------------------------------------------
// Portfolio content, written for a Frontend Developer role:
// React.js + Redux, HTML5/CSS3/JavaScript, responsive & cross-browser work,
// Node.js API integration, and close collaboration with designers.
// ---------------------------------------------------------------------------

export const RESUME_URL =
  'https://drive.google.com/file/d/1Eqnkj6SikLFzKep6wFWY5U3ZhmqBmiFa/view?usp=sharing';

export const CASE_STUDY_URL = 'https://loyalty-automations-case-study.onrender.com/';

export const CONTACT = {
  email: 'pspranavram2005@gmail.com',
  phone: '+91 86101 74731',
  location: 'Chennai, India',
  github: 'https://github.com/pranavram2005',
  linkedin: 'https://www.linkedin.com/in/pranavram2005',
  instagram: 'https://www.instagram.com/pranavram2005',
};

// Top-level routes. Resume stays an outbound link rather than a route.
export const navLinks = [
  { id: 1, name: 'Home', to: '/' },
  { id: 2, name: 'About', to: '/about' },
  { id: 3, name: 'Projects', to: '/projects' },
  { id: 4, name: 'Vision', to: '/vision' },
  { id: 5, name: 'Snapshot', to: '/snapshot' },
  { id: 6, name: 'Pro', to: '/pro' },
];

export const hero = {
  eyebrow: 'FRONTEND DEVELOPER · REACT & REDUX · IIT MADRAS ’27',
  name: 'Pranav Ram',
  nameOutline: 'P S',
  tagline:
    'I build responsive React interfaces that hold up in production — Redux-driven state, accessible HTML and CSS, and Node APIs wired in behind them.',
  hints: ['◇ MOVE — RIPPLE', '◈ CLICK — PULSE', '◇ SCROLL — EXPLORE'],
};

// Ticker across the hero, in the order the JD lists its priorities.
export const marqueeItems = [
  'React.js',
  'Redux Toolkit',
  'JavaScript (ES6+)',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'REST APIs',
  'TypeScript',
  'Responsive Design',
  'Accessibility',
  'Vite',
  'Git & CI/CD',
];

export const about = {
  headline: 'Frontend developer who sweats the interface — and the state behind it.',
  paragraphs: [
    'I am a Biotechnology undergrad at IIT Madras who builds web software full time. Most of my work is the frontend of real products: component architecture in React, predictable state with Redux, and layouts that stay correct from a 360px phone to a wide desktop.',
    'I have shipped a CRM dashboard with a four-person team, the web platform behind a space-tech startup’s $1M raise, and an international competition wiki in React + TypeScript. In each one the job was the same — take a design, turn it into clean, reusable components, and keep it fast and accessible.',
    'I work closely with designers rather than around them. I would rather ask one more question about a spacing rule or an empty state than guess, and I review other people’s code the way I want mine reviewed.',
  ],
  facts: [
    { label: 'DEGREE', value: 'B.Tech Biotechnology, IIT Madras — Class of 2027' },
    { label: 'FOCUS', value: 'React · Redux · responsive UI · design systems' },
    { label: 'LEETCODE', value: '400+ DSA problems solved' },
    { label: 'JEE MAINS', value: 'Top 5.5% of 1.2M+ candidates' },
    {
      label: 'COURSEWORK',
      value: 'DSA · OOP · DBMS · Operating Systems · Modern App Dev · Probability & Statistics',
    },
  ],
};

export const toolkit = {
  summary:
    'Component architecture · Redux state modelling · responsive & cross-browser CSS · API integration · accessibility',
  groups: [
    {
      label: 'CORE',
      items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript'],
    },
    {
      label: 'FRAMEWORKS & STATE',
      items: ['React.js', 'Redux Toolkit', 'React Router', 'Next.js', 'Context API'],
    },
    {
      label: 'STYLING & UI',
      items: ['Tailwind CSS', 'SCSS', 'Framer Motion', 'GSAP', 'Figma → code', 'Responsive design'],
    },
    {
      label: 'BACKEND & APIS',
      items: ['Node.js', 'Express', 'REST APIs', 'JWT auth', 'MongoDB', 'PostgreSQL'],
    },
    {
      label: 'QUALITY',
      items: [
        'Code reviews',
        'Cross-browser testing',
        'Accessibility (WCAG)',
        'Lighthouse',
        'Debugging',
      ],
    },
    {
      label: 'TOOLING',
      items: ['Git & GitHub', 'Vite', 'GitHub Actions', 'Docker', 'Vercel · Render'],
    },
  ],
};

export const workExperiences = [
  {
    id: 1,
    name: 'Zetta Tech',
    pos: 'Forward Deployment Engineer',
    duration: 'MAY–JUL ’26',
    badge: 'LIVE FOR 20+ AGENTS',
    summary:
      'Built the agent-facing UI for a production real-estate CRM — a live screen that updates mid-call without the user ever reaching for refresh.',
    points: [
      'Built the real-time agent cockpit in React, streaming live transcription, sentiment and ranked battlecards over WebSockets with sub-second updates.',
      'Modelled the live-call state in Redux so transcript, sentiment and card ranking stayed consistent across panels under a constant event stream.',
      'Shipped the multi-tenant WhatsApp Business console — shared inbox, broadcasts and template builder — through Meta App Review, live across 5+ client orgs.',
      'Cut manual conversation handling by 70% with a filter builder UI that compiles nested conditions into a single query.',
    ],
    icon: 'assets/cs_logo.png',
  },
  {
    id: 2,
    name: 'Loyalty Automation',
    pos: 'Founding Developer',
    duration: 'MAY–AUG ’25',
    badge: 'LED 4 ENGINEERS',
    summary:
      'A CRM that captures enquiries, qualifies leads and automates the sales workflow end to end.',
    points: [
      'Led a 4-member team shipping the MVP in React, Node/Express and MongoDB in 8 weeks, on deadline.',
      'Owned the dashboard frontend — reusable component library, Redux-backed pipeline views, and a layout that works on a phone in the field.',
      'Ran code reviews and set the branch, lint and review conventions the team worked to.',
      'Cut manual coordination by 40%; first-response time fell from ~24h to under 4.',
    ],
    icon: 'assets/loyalty2.png',
  },
  {
    id: 3,
    name: 'Inbound Aerospace',
    pos: 'Full-Stack Intern',
    duration: 'MAY–JUL ’24',
    badge: '$1M ROUND',
    summary:
      'The web platform behind a space-tech startup’s $1M funding round, on a fixed, immovable pitch deadline.',
    points: [
      'Built the platform that anchored the raise — React frontend, Express APIs, MongoDB, JWT auth, deployed on Render behind GitHub CI/CD.',
      'Translated founder sketches into a responsive interface that held up under live investor demos across browsers and devices.',
      'Delivered across a 10-week cycle with founder feedback deployed same-day through the entire diligence window.',
    ],
    icon: 'assets/inbound-logo.png',
  },
  {
    id: 4,
    name: 'ChennaiSunday Systems',
    pos: 'Web Developer & Consultant',
    duration: '2022 — PRESENT',
    badge: 'MOBILE-FIRST REBUILD',
    summary:
      'Rebuilt the corporate site around mobile responsiveness, information hierarchy and search visibility.',
    points: [
      'Rebuilt the site mobile-first in the MERN stack with reusable components and animated project pages.',
      'Improved accessibility and information hierarchy; handled domain, SSL and SEO configuration end to end.',
      'Mentored 10+ developers into IT roles, reviewing their code and portfolio work.',
    ],
    icon: 'assets/cs2.png',
  },
];

// ---------------------------------------------------------------------------
// PROJECTS
// `images` holds the two screenshots shown for each project and `logo` its
// mark - all original assets already shipped with this portfolio.
// Order is deliberate: the lead case study first, ChennaiSunday last.
// ---------------------------------------------------------------------------
export const myProjects = [
  {
    id: 'loyalty',
    title: 'Loyalty Automation — CRM Dashboard',
    stack: ['REACT', 'REDUX', 'NODE', 'MONGODB'],
    summary:
      'The full client-facing dashboard for a sales CRM: pipeline, lead scoring and automation rules in one interface.',
    points: [
      'Component library and layout system built from scratch so four engineers could ship screens that matched.',
      'Redux-backed pipeline state kept filters, selection and board views in sync across routes.',
      'Responsive from desktop down to the phone a salesperson actually uses in the field.',
    ],
    metric: { value: '40%', label: 'LESS MANUAL COORDINATION' },
    href: 'https://www.loyaltyautomation.com/',
    caseStudy: CASE_STUDY_URL,
    images: ['assets/sp3.png', 'assets/sp4.png'],
    logo: 'assets/loyalty2.png',
    accent: 'indigo',
    // Lead project: rendered full-width with the UX case study as its primary CTA.
    featured: true,
    featuredNote:
      'A full UX case study documents the work end to end — research, flows, the design system and the shipped build.',
  },
  {
    id: 'inbound',
    title: 'Inbound Aerospace — Platform UI',
    stack: ['REACT', 'EXPRESS', 'MONGODB', 'JWT'],
    summary:
      'The web platform a space-tech startup used to raise $1M, built against a pitch date that could not move.',
    points: [
      'Responsive dashboard UI with JWT-authenticated routes and modular data views.',
      'Held up under live investor demos across browsers and screen sizes.',
      'Deployed on Render behind GitHub CI/CD with same-day feedback cycles.',
    ],
    metric: { value: '$1M', label: 'ROUND CLOSED ON IT' },
    href: 'https://inboundaerospace.com/',
    images: ['assets/sp5.png', 'assets/sp6.png'],
    logo: 'assets/inbound-logo.png',
    accent: 'blue',
  },
  {
    id: 'eyeu',
    title: 'Eye-u — eCommerce Storefront',
    stack: ['REACT', 'TAILWIND CSS', 'RESPONSIVE UI'],
    summary:
      'A full retail storefront built around product discovery — category navigation, campaign banners and a trust strip, all responsive down to a phone.',
    points: [
      'Modular component system for listings, filters and promo banners so new campaigns drop in without layout rework.',
      'Sticky utility header carrying search, account and support alongside Best Sellers, Mega Sale and category entry points.',
      'Fast-loading product grids and a clear visual hierarchy that keeps the buy path obvious on every screen size.',
    ],
    metric: { value: '4', label: 'TRUST SIGNALS ABOVE THE FOLD' },
    href: '#',
    images: ['assets/sp11.png', 'assets/sp12.png'],
    logo: 'assets/eye-u-logo.jpg',
    accent: 'amber',
  },
  {
    id: 'igem',
    title: 'iGEM IIT Madras — Competition Wiki',
    stack: ['REACT', 'TYPESCRIPT', 'HTML/CSS'],
    summary:
      'The official team wiki for an international competition, built to the iGEM Foundation specification.',
    points: [
      'Led the WebOps subteam and set the quality bar and delivery timeline.',
      'Balanced dense scientific content against readability and visual storytelling.',
      'Pixel-accurate across screen sizes and compliant with the judging spec.',
    ],
    metric: { value: 'INTL', label: 'COMPETITION DELIVERY' },
    href: 'https://2024.igem.wiki/iit-madras/',
    images: ['assets/sp7.png', 'assets/sp8.png'],
    logo: 'assets/cosmo.webp',
    accent: 'violet',
  },
  {
    id: 'chennaisunday',
    title: 'ChennaiSunday — Corporate Site Rebuild',
    stack: ['REACT', 'NODE', 'EXPRESS', 'SEO'],
    summary:
      'A mobile-first rebuild of a company website, from information architecture through to SSL and search visibility.',
    points: [
      'Rebuilt every page as reusable components with a consistent spacing and type scale.',
      'Dynamic project pages with animated transitions and a clear content hierarchy.',
      'Domain, SSL, SEO and hosting configured and maintained end to end.',
    ],
    metric: { value: '100%', label: 'RESPONSIVE REBUILD' },
    href: 'https://www.chennaisunday.com/',
    images: ['assets/sp1.png', 'assets/sp2.png'],
    logo: 'assets/cs2.png',
    accent: 'cyan',
  },
];

export const leadership = [
  {
    id: 1,
    role: 'Head of WebOps · iGEM IIT Madras',
    duration: 'APR ’25 — PRESENT',
    text: 'Own all web development for the team’s international competition wiki. Supervise a developer subteam, holding timelines and the quality bar.',
  },
  {
    id: 2,
    role: 'WebOps Coordinator · Shaastra',
    duration: 'APR ’24 — APR ’25',
    text: 'Asia’s largest student-run technical festival. Built and maintained the Sampark and Spark event sites with a focus on performance, SEO and accessibility.',
  },
  {
    id: 3,
    role: 'Coordinator · Biotechnology Club',
    duration: 'JUN ’24 — PRESENT',
    text: 'Projects at the intersection of biology and the web — spearheaded the Drug–Microbiome Interaction Database and its frontend visualisations.',
  },
];

export const vision = {
  headline: 'An interface is a promise',
  headlineAccent: 'that the thing behind it works.',
  intro:
    'The frontend is where every decision a team makes becomes visible. I treat that surface as the product, not the wrapper around it.',
  principles: [
    {
      label: 'COMPONENTS THAT COMPOUND',
      text: 'A component written once and reused twenty times is worth more than twenty clever ones. Predictable props, obvious names, no surprises.',
    },
    {
      label: 'STATE YOU CAN REASON ABOUT',
      text: 'Redux earns its keep when state is shared and the flow has to be traceable. Local state stays local. The split should be boring.',
    },
    {
      label: 'RESPONSIVE IS NOT A BREAKPOINT',
      text: 'It is the whole range between them — touch targets, reflow, long strings in other languages, and the browser your user actually has.',
    },
  ],
  quote: 'BUILD INTERFACES PEOPLE DO NOT HAVE TO THINK ABOUT.',
};

// ---------------------------------------------------------------------------
// HOME PAGE BANDS (parchment layout, ported from portfolio1)
// ---------------------------------------------------------------------------

// Horizontal pinned scroll: what the work actually consists of.
export const craftPanels = [
  {
    num: '01',
    emoji: '⚛️',
    tint: '#2f9fb8',
    title: 'React Architecture',
    text: 'Component libraries other engineers can build on — predictable props, obvious names, and a layout system that keeps four people shipping the same product.',
  },
  {
    num: '02',
    emoji: '🧠',
    tint: '#e2725b',
    title: 'State You Can Trace',
    text: 'Redux where state is shared and the flow has to be followed; local state where it belongs. The split should be boring, and it usually is.',
  },
  {
    num: '03',
    emoji: '📐',
    tint: '#7c6bd6',
    title: 'Responsive Systems',
    text: 'Not two breakpoints — the whole range between them. Touch targets, reflow, long strings, and the browser your user actually has.',
  },
  {
    num: '04',
    emoji: '🔌',
    tint: '#4bbf8f',
    title: 'APIs Wired In',
    text: 'Node and Express behind the screen, REST contracts agreed early, and loading and empty states designed rather than discovered in review.',
  },
  {
    num: '05',
    emoji: '♿',
    tint: '#b08540',
    title: 'Accessible By Default',
    text: 'Semantic HTML, keyboard paths that work, contrast that passes. Accessibility is cheaper as a habit than as a retrofit.',
  },
];

// Rocket-along-path journey on the home page.
export const journeyStops = [
  {
    left: '50%',
    top: '5%',
    title: 'IIT Madras',
    text: 'B.Tech Biotechnology — where the curiosity got a lab coat.',
  },
  {
    left: '21%',
    top: '37%',
    title: 'Learn & build',
    text: 'Freelance sites, React experiments and a rebuilt corporate platform — nights and weekends.',
  },
  {
    left: '79%',
    top: '66%',
    title: 'Ship to users',
    text: 'Production frontends at Zetta, Loyalty Automation and Inbound Aerospace.',
  },
  {
    left: '50%',
    top: '97%',
    title: 'What’s next',
    text: 'Bigger interfaces, better systems.',
    linkLabel: 'See the vision →',
    linkTo: '/vision',
  },
];

export const homeMetrics = [
  { count: 4, label: 'Engineering roles shipped' },
  { count: 400, suffix: '+', label: 'DSA problems solved' },
  { value: '2027', label: 'Graduating · IIT Madras' },
];

export const teasers = [
  {
    to: '/about',
    tint: '#2f9fb8',
    icon: '👋',
    title: 'About',
    text: 'The person behind the commits — how I got here and how I work with a team.',
    go: 'Meet me →',
  },
  {
    to: '/projects',
    tint: '#e2725b',
    icon: '🛠️',
    title: 'Projects',
    text: 'Interfaces I owned end to end, the problems behind them, and the numbers.',
    go: 'See the work →',
  },
  {
    to: '/vision',
    tint: '#7c6bd6',
    icon: '🔭',
    title: 'Vision',
    text: 'What I think a frontend owes the person on the other side of it.',
    go: 'Read the vision →',
  },
];

export const funFacts = [
  {
    emoji: '🧬',
    title: 'Biotech by degree',
    text: 'Web by practice. The lab taught me to read a system before changing it.',
  },
  {
    emoji: '👥',
    title: 'Led four engineers',
    text: 'Shipped a CRM MVP in eight weeks and set the review conventions behind it.',
  },
  {
    emoji: '🎓',
    title: 'Mentored 10+ devs',
    text: 'Reviewed code and portfolios for developers moving into their first IT roles.',
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-13, 11, 0] : [-27, 13.5, -3],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-16, -15, -13],
  };
};
