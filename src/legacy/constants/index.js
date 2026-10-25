export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
   {
    id: 5,
    name: 'Resume',
    href: 'https://drive.google.com/file/d/1Eqnkj6SikLFzKep6wFWY5U3ZhmqBmiFa/view?usp=sharing',
  },
  {
    id: 6,
    name: 'Loyalty Automations UX Case Study',
    href: 'https://loyalty-automations-case-study.onrender.com/',
  }
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Loyalty Automation — CRM Dashboard',
    desc: 'The full client-facing dashboard for a sales CRM: pipeline, lead scoring and automation rules in one interface. Cut manual coordination by 40%.',
    subdesc:
      'Component library and layout system built from scratch so four engineers could ship screens that matched. Redux-backed pipeline state kept filters, selection and board views in sync across routes. Responsive from desktop down to the phone a salesperson actually uses in the field.',
    href: 'https://www.loyaltyautomation.com/',
    caseStudy: 'https://loyalty-automations-case-study.onrender.com/',
    texture: 'assets/sp3.png',
    texture2: 'assets/sp4.png',
    logo: 'assets/loyalty2.png',
    logoStyle: {
      backgroundColor: '#0F172A',
      border: '0.2px solid #1E293B',
      boxShadow: '0px 0px 60px 0px #F59E0B',
    },
    spotlight: 'assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: 'assets/react.svg' },
      { id: 2, name: 'Redux Toolkit', path: 'assets/framer.png' },
      { id: 3, name: 'Node.js', path: 'assets/nodejs.png' },
      { id: 4, name: 'MongoDB', path: 'assets/cp.jpg' },
    ],
  },
  {
    title: 'Inbound Aerospace — Platform UI',
    desc: 'The web platform a space-tech startup used to raise $1M, built against a pitch date that could not move.',
    subdesc:
      'Responsive dashboard UI with JWT-authenticated routes and modular data views. Held up under live investor demos across browsers and screen sizes. Deployed on Render behind GitHub CI/CD with same-day feedback cycles.',
    href: 'https://inboundaerospace.com/',
    texture: 'assets/sp5.png',
    texture2: 'assets/sp6.png',
    logo: 'assets/inbound-logo.png',
    logoStyle: {
      backgroundColor: '#134E4A',
      border: '0.2px solid #0F766E',
      boxShadow: '0px 0px 60px 0px #06B6D4',
    },
    spotlight: 'assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: 'assets/react.svg' },
      { id: 2, name: 'Express.js', path: 'assets/nodejs.png' },
      { id: 3, name: 'MongoDB', path: 'assets/cp.jpg' },
      { id: 4, name: 'JWT', path: 'assets/framer.png' },
    ],
  },
  {
    title: 'Eye-u — eCommerce Storefront',
    desc: 'A full retail storefront built around product discovery — category navigation, campaign banners and a trust strip, all responsive down to a phone.',
    subdesc:
      'Modular component system for listings, filters and promo banners so new campaigns drop in without layout rework. Sticky utility header carrying search, account and support alongside Best Sellers, Mega Sale and category entry points. Fast-loading product grids with a clear visual hierarchy.',
    href: '',
    texture: 'assets/sp11.png',
    texture2: 'assets/sp12.png',
    logo: 'assets/eye-u-logo.jpg',
    logoStyle: {
      backgroundColor: '#3B2208',
      border: '0.2px solid #7C4A12',
      boxShadow: '0px 0px 60px 0px #F0A63C',
    },
    spotlight: 'assets/spotlight4.png',
    tags: [
      { id: 1, name: 'React.js', path: 'assets/react.svg' },
      { id: 2, name: 'Tailwind CSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'Responsive UI', path: 'assets/framer.png' },
      { id: 4, name: 'JavaScript', path: 'assets/js.png' },
    ],
  },
  {
    title: 'iGEM IIT Madras — Competition Wiki',
    desc: 'The official team wiki for an international competition, built to the iGEM Foundation specification.',
    subdesc:
      'Led the WebOps subteam and set the quality bar and delivery timeline. Balanced dense scientific content against readability and visual storytelling. Pixel-accurate across screen sizes and compliant with the judging spec.',
    href: 'https://2024.igem.wiki/iit-madras/',
    texture: 'assets/sp7.png',
    texture2: 'assets/sp8.png',
    logo: 'assets/cosmo.webp',
    logoStyle: {
      backgroundColor: '#2A1458',
      border: '0.2px solid #4C1D95',
      boxShadow: '0px 0px 60px 0px #8B6CF0',
    },
    spotlight: 'assets/spotlight5.png',
    tags: [
      { id: 1, name: 'React.js', path: 'assets/react.svg' },
      { id: 2, name: 'TypeScript', path: 'assets/typescript.png' },
      { id: 3, name: 'HTML5', path: 'assets/html.png' },
      { id: 4, name: 'CSS3', path: 'assets/tailwindcss.png' },
    ],
  },
  {
    title: 'ChennaiSunday — Corporate Site Rebuild',
    desc: 'A mobile-first rebuild of a company website, from information architecture through to SSL and search visibility.',
    subdesc:
      'Rebuilt every page as reusable components with a consistent spacing and type scale. Dynamic project pages with animated transitions and a clear content hierarchy. Domain, SSL, SEO and hosting configured and maintained end to end.',
    href: 'https://www.chennaisunday.com/',
    texture: 'assets/sp1.png',
    texture2: 'assets/sp2.png',
    logo: 'assets/cs2.png',
    logoStyle: {
      backgroundColor: '#1E1B4B',
      border: '0.2px solid #312E81',
      boxShadow: '0px 0px 60px 0px #6366F1',
    },
    spotlight: 'assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: 'assets/react.svg' },
      { id: 2, name: 'Node.js', path: 'assets/nodejs.png' },
      { id: 3, name: 'Express.js', path: 'assets/cp.jpg' },
      { id: 4, name: 'SEO', path: 'assets/framer.png' },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Zetta Tech',
    pos: 'Forward Deployment Engineer',
    duration: 'May - Jul 2026',
    title:
      'Built the real-time agent cockpit in React, streaming live transcription, sentiment and ranked battlecards over WebSockets. Modelled live-call state in Redux so every panel stayed consistent, and shipped the multi-tenant WhatsApp Business console through Meta App Review.',
    icon: 'assets/cs_logo.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Loyalty Automation',
    pos: 'Founding Developer',
    duration: 'May - Aug 2025',
    title:
      'Led a 4-member team shipping the MVP in React, Node/Express and MongoDB in 8 weeks. Owned the dashboard frontend, built the reusable component library and Redux-backed pipeline views, and set the branch, lint and review conventions. Cut manual coordination by 40%.',
    icon: 'assets/loyalty2.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Inbound Aerospace',
    pos: 'Full-Stack Intern',
    duration: 'May - Jul 2024',
    title:
      'Built the platform that anchored a $1M raise, with a React frontend, Express APIs, MongoDB and JWT auth, deployed on Render behind GitHub CI/CD. Translated founder sketches into a responsive interface that held up under live investor demos.',
    icon: 'assets/inbound-logo.png',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'ChennaiSunday Systems',
    pos: 'Web Developer & Consultant',
    duration: '2022 - Present',
    title:
      'Rebuilt the corporate site mobile-first in the MERN stack with reusable components and animated project pages. Improved accessibility and information hierarchy, handled domain, SSL and SEO end to end, and mentored 10+ developers into IT roles.',
    icon: 'assets/cs2.png',
    animation: 'idle',
  },
];
