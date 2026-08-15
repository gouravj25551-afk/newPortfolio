/**
 * Single source of truth for every piece of content on the site.
 * Update this file to update the portfolio — no component edits required.
 *
 * URLs left as `null` are treated as "not provided yet". The UI hides or
 * disables the matching button instead of inventing a link. Fill them in
 * below (or via the VITE_* env vars) whenever the real URLs exist.
 */

const env = import.meta.env

/** Returns the env value if it is a real, non-empty string; otherwise null. */
const fromEnv = (value: unknown): string | null =>
  typeof value === 'string' && value.trim().length > 0 ? value.trim() : null

export const profile = {
  name: 'Gourav Jain',
  role: 'B.Tech in Computer Science & AI',
  institution: 'Rishihood University × Newton School of Technology',
  positioning:
    'Computer Science & AI student building real-world products, learning backend engineering, AI and competitive programming.',
  headline: {
    lead: 'Building products at the intersection of',
    highlight: ['Code', 'AI', 'Real World Problems'],
  },
  subheadline:
    'I build full-stack products, explore AI, and sharpen my problem solving through competitive programming — taking ideas from architecture all the way to deployment.',
  interests: [
    'Full-stack development',
    'Backend engineering',
    'Artificial Intelligence',
    'Competitive Programming',
    'Building startups & products',
  ],
} as const

export type SocialLink = {
  id: string
  label: string
  /** null = URL not provided yet; the UI marks it as a placeholder. */
  href: string | null
  /** Shown when href is null, so the gap is obvious rather than faked. */
  placeholderHint: string
}

export const socials: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: fromEnv(env.VITE_LINKEDIN_URL),
    placeholderHint: 'Add VITE_LINKEDIN_URL',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: fromEnv(env.VITE_GITHUB_URL),
    placeholderHint: 'Add VITE_GITHUB_URL',
  },
  {
    id: 'x',
    label: 'X / Twitter',
    href: fromEnv(env.VITE_X_URL),
    placeholderHint: 'Add VITE_X_URL',
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    href: fromEnv(env.VITE_LEETCODE_URL),
    placeholderHint: 'Add VITE_LEETCODE_URL',
  },
  {
    id: 'email',
    label: 'Email',
    href: fromEnv(env.VITE_EMAIL) ? `mailto:${fromEnv(env.VITE_EMAIL)}` : null,
    placeholderHint: 'Add VITE_EMAIL',
  },
]

export type SkillCategory = {
  id: string
  title: string
  blurb: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    blurb: 'Interfaces that stay fast and readable as they grow.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Backend',
    blurb: 'APIs, auth and the plumbing behind a working product.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'API development', 'Authentication', 'Clerk'],
  },
  {
    id: 'databases',
    title: 'Databases',
    blurb: 'Schema design, relations and query-level thinking.',
    skills: ['PostgreSQL', 'MySQL', 'Prisma', 'Neon'],
  },
  {
    id: 'languages',
    title: 'Languages',
    blurb: 'The core toolkit I reach for, problem depending.',
    skills: ['Python', 'C++', 'JavaScript', 'TypeScript'],
  },
  {
    id: 'ai',
    title: 'AI / ML',
    blurb: 'Fundamentals first, then building things on top of them.',
    skills: [
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Machine Learning fundamentals',
      'Linear Regression',
      'Logistic Regression',
      'LLM fundamentals',
      'RAG concepts',
      'Gemini API',
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    blurb: 'How the work gets versioned, shipped and kept alive.',
    skills: ['Git', 'GitHub', 'Render', 'Capacitor', 'Postman'],
  },
  {
    id: 'cp',
    title: 'Competitive Programming',
    blurb: 'Where the algorithmic muscle actually gets built.',
    skills: [
      'Data Structures',
      'Algorithms',
      'Problem Solving',
      'LeetCode',
      'Codeforces',
      'CodeChef',
    ],
  },
]

export const problemSolving = {
  headline: 'Problem Solver',
  count: 350,
  countSuffix: '+',
  countLabel: 'Problems Solved',
  blurb:
    'Consistent practice across competitive programming platforms — building the kind of algorithmic instinct that shows up later in product code.',
  platforms: ['LeetCode', 'Codeforces', 'CodeChef'],
  focusAreas: ['Data Structures', 'Algorithms', 'Competitive Programming', 'Problem Solving'],
} as const

export type Project = {
  id: string
  name: string
  tagline: string
  description: string
  /** Renders the "Flagship Project" badge and the larger card treatment. */
  flagship?: boolean
  status: string
  tech: string[]
  features: string[]
  liveUrl: string | null
  repoUrl: string | null
}

export const projects: Project[] = [
  {
    id: 'hasino',
    name: 'Hasino',
    tagline: 'Salon discovery & booking platform',
    description:
      'A salon discovery and booking platform connecting customers with salons and salon owners — a customer app, an owner panel and an admin panel over one role-aware backend.',
    flagship: true,
    status: 'Primary product · in active development',
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'Neon',
      'Clerk',
      'Capacitor',
      'Render',
    ],
    features: [
      'Customer mobile app (Android via Capacitor)',
      'Salon owner panel with onboarding & services',
      'Admin panel with role-based access',
      'Service selection and cart flow',
      'Booking, rescheduling and no-show handling',
      'Chair-based booking capacity',
      'Salon-specific data isolation',
      'Clerk authentication across every role',
    ],
    liveUrl: fromEnv(env.VITE_HASINO_LIVE_URL),
    repoUrl: fromEnv(env.VITE_HASINO_REPO_URL),
  },
  {
    id: 'docdoor',
    name: 'DocDoor',
    tagline: 'OPD booking & live queue management',
    description:
      'A digital OPD booking and queue management platform that helps clinics manage patient bookings and live queues — cutting the waiting-room guesswork for patients and receptionists alike.',
    status: 'Product build',
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Socket.io'],
    features: [
      'Online OPD booking for patients',
      'Clinic / hospital registration',
      'Live queue management',
      'Estimated waiting time',
      'Receptionist panel',
      'Doctor / clinic panel',
      'Booking management & notifications',
      'Payment integration concepts',
    ],
    liveUrl: fromEnv(env.VITE_DOCDOOR_LIVE_URL),
    repoUrl: fromEnv(env.VITE_DOCDOOR_REPO_URL),
  },
]

/**
 * "More Projects" — append to this array as new work lands.
 * The UI is fully data-driven, so nothing else needs to change.
 */
export const moreProjects: Project[] = [
  {
    id: 'portfolio',
    name: 'Developer Portfolio',
    tagline: 'This site',
    description:
      'A dark-first portfolio built as a real product rather than a template — data-driven content, motion that stays out of the way, and an accessible, responsive layout.',
    status: 'Live',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    features: ['Data-driven content layer', 'Reduced-motion aware animation', 'Responsive & keyboard accessible'],
    liveUrl: fromEnv(env.VITE_PORTFOLIO_LIVE_URL),
    repoUrl: fromEnv(env.VITE_PORTFOLIO_REPO_URL),
  },
]

export const aiTrack = {
  eyebrow: 'Exploring AI and building with it',
  title: 'Learning the fundamentals, then shipping with them',
  blurb:
    "I'm not an AI researcher — I'm a builder learning the stack honestly. That means understanding the maths behind a model before wiring an API into a product.",
  groups: [
    {
      id: 'foundations',
      title: 'Foundations',
      items: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      items: ['ML fundamentals', 'Linear Regression', 'Logistic Regression'],
    },
    {
      id: 'llm',
      title: 'LLMs & Applications',
      items: ['LLM fundamentals', 'RAG', 'Gemini API', 'AI agents', 'AI product development'],
    },
  ],
} as const

export type Milestone = {
  id: string
  title: string
  description: string
}

export const timeline: Milestone[] = [
  {
    id: 'start',
    title: 'Started programming & web development',
    description: 'First lines of code, first pages on a screen — and the realisation that software is buildable.',
  },
  {
    id: 'frontend',
    title: 'Learned frontend fundamentals',
    description: 'HTML, CSS and JavaScript, with real attention to layout, state and how the browser actually works.',
  },
  {
    id: 'react',
    title: 'Started React',
    description: 'Moved from pages to components — composition, reusable UI and building interfaces that scale.',
  },
  {
    id: 'dsa',
    title: 'Started DSA & Competitive Programming',
    description: 'Began solving consistently on LeetCode, Codeforces and CodeChef to build algorithmic depth.',
  },
  {
    id: 'backend',
    title: 'Learned Node.js & Express',
    description: 'Crossed to the other side of the API — routing, middleware, auth and server-side architecture.',
  },
  {
    id: 'databases',
    title: 'Learned databases & PostgreSQL',
    description: 'Relational modelling with PostgreSQL and Prisma, plus the migrations and constraints that keep data honest.',
  },
  {
    id: 'docdoor',
    title: 'Built DocDoor',
    description: 'Turned a real clinic problem into an OPD booking and live queue management product.',
  },
  {
    id: 'hasino',
    title: 'Started building Hasino',
    description: 'A salon discovery and booking platform — customer app, owner panel and admin panel on one backend.',
  },
  {
    id: 'aiexplore',
    title: 'Started exploring AI & LLMs',
    description: 'ML fundamentals, the Python data stack, and building applications on top of LLMs and the Gemini API.',
  },
  {
    id: 'ongoing',
    title: 'Still shipping, still solving',
    description: 'Competitive programming alongside product work — 350+ problems solved and counting.',
  },
]

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'problem-solving', label: 'Problem Solving' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
] as const
