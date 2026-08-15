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
    "I'm building a full-stack product, exploring AI, and sharpening my problem solving through competitive programming — taking an idea from architecture all the way to deployment.",
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
  /** Short badge on the card — e.g. "Currently Building". Omit for no badge. */
  badge?: string
  /** One line under the badge on where the work actually stands. */
  status: string
  tech: string[]
  /** What's being built. Framed as scope in progress, not shipped features. */
  buildingNow: string[]
  liveUrl: string | null
  repoUrl: string | null
}

export const projects: Project[] = [
  {
    id: 'hasino',
    name: 'Hasino',
    tagline: 'Salon discovery & booking platform',
    description:
      'Currently building Hasino — a salon discovery and booking platform focused on making salon bookings simpler for customers and salon owners.',
    badge: 'Currently Building',
    status: 'In active development · not finished',
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
    buildingNow: [
      'Customer booking flow — discovery through to a confirmed slot',
      'Salon owner panel for onboarding and managing services',
      'Role-based access across customer, owner and admin',
      'Chair-based capacity so a salon cannot be double-booked',
      'Authentication with Clerk, data in PostgreSQL via Prisma',
      'An Android build of the customer app through Capacitor',
    ],
    liveUrl: fromEnv(env.VITE_HASINO_LIVE_URL),
    repoUrl: fromEnv(env.VITE_HASINO_REPO_URL),
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
    id: 'hasino',
    title: 'Started building Hasino',
    description:
      'A salon discovery and booking platform for customers and salon owners — the project I spend most of my build time on.',
  },
  {
    id: 'aiexplore',
    title: 'Started exploring AI & LLMs',
    description: 'ML fundamentals, the Python data stack, and building applications on top of LLMs and the Gemini API.',
  },
  {
    id: 'ongoing',
    title: 'Still building, still solving',
    description: 'Competitive programming alongside the build — 350+ problems solved and counting.',
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
