// === INTERFACES ===
export interface Skill {
  name: string;
  icon?: string;
  level?: string;
  description?: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconSvgPath?: string;
  iconClasses?: string;
}

export interface Project {
  id: number;
  name: string;
  year: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface ResumeExperience {
  jobTitle: string;
  company: string;
  location: string;
  dates: string;
  responsibilities: string[];
}

export interface ResumeEducation {
  degree: string;
  institution: string;
  location: string;
  dates: string;
  details?: string;
}

export interface ResumeCertification {
  name: string;
  issuingOrganization: string;
  date: string;
  credentialUrl?: string;
}

// === ABOUT PAGE DATA ===
export const ABOUT_DATA = {
  name: 'Mobil Mustafayev',
  title: 'a Full-Stack Developer | Angular & Nest.js',
  introduction: `Hello! I'm Mobil, a Full-Stack Developer specializing in creating robust, end-to-end web applications. With expertise in <span class="text-yellow-400 font-semibold">Angular</span> for dynamic frontends and <span class="text-yellow-400 font-semibold">Nest.js</span> for efficient backends, my goal is to build meaningful and impactful digital solutions.`,
  philosophy: `In an era of rapidly evolving technology, I focus on the entire development lifecycle. From database design to API development and user interface implementation, I strive to deliver clean, maintainable, and scalable products that <span class="text-yellow-400">create real value</span>.`,
};

// === SKILLS PAGE DATA ===
export const SKILL_CATEGORIES: { name: string; skills: Skill[] }[] = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'Angular', icon: 'icons/angular.svg', level: 'Expert' },
      { name: 'TypeScript', icon: 'icons/typescript.svg', level: 'Expert' },
      {
        name: 'JavaScript (ES6+)',
        icon: 'icons/javascript.svg',
        level: 'Expert',
      },
      { name: 'RxJS', icon: 'icons/rxjs.svg', level: 'Advanced' },
      {
        name: 'NgRx',
        icon: 'icons/ngrx.svg',
        level: 'Advanced',
        description: 'State Management',
      },
      { name: 'HTML5', icon: 'icons/html.svg', level: 'Expert' },
      { name: 'CSS3 / SCSS', icon: 'icons/css.svg', level: 'Expert' },
      { name: 'Tailwind CSS', icon: 'icons/tailwind.svg', level: 'Advanced' },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Nest.js', icon: 'icons/nest.js.svg', level: 'Advanced' },
      { name: 'Node.js', icon: 'icons/node.js.svg', level: 'Advanced' },
      { name: 'REST APIs', icon: 'icons/restfull.svg', level: 'Expert' },
      {
        name: 'PostgreSQL',
        icon: 'icons/postgresql.svg',
        level: 'Intermediate',
      },
      { name: 'Prisma ORM', icon: 'icons/prisma.svg', level: 'Intermediate' },
    ],
  },
  {
    name: 'Tools & Other Technologies',
    skills: [
      { name: 'Git & GitHub', icon: 'icons/github.svg', level: 'Expert' },

      { name: 'NPM', icon: 'icons/npm.svg', level: 'Expert' },
      {
        name: 'Responsive Design',
        icon: 'icons/responsive.svg',
        level: 'Expert',
      },
    ],
  },
];

// === SERVICES PAGE DATA ===
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    description:
      'Building complete, end-to-end web applications, from the database to the user interface, using modern technologies like Angular and Nest.js.',
    iconSvgPath: 'M10 20l4-16m4 4l-4 16M5 12H3m18 0h-2M12 5V3m0 18v-2',
    iconClasses: 'text-blue-400',
  },
  {
    id: 2,
    title: 'Backend & API Development',
    description:
      'Crafting secure, scalable, and efficient RESTful APIs with Nest.js, connecting your frontend to powerful server-side logic and databases.',
    iconSvgPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    iconClasses: 'text-red-400',
  },
  {
    id: 3,
    title: 'Advanced Frontend Development',
    description:
      'Creating intuitive, high-performance, and visually appealing user interfaces with a strong focus on user experience using Angular.',
    iconSvgPath:
      'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    iconClasses: 'text-green-400',
  },
  {
    id: 4,
    title: 'Maintenance & Modernization',
    description:
      'Providing ongoing support, updates, and modernizing existing applications to ensure they run smoothly, securely, and stay up-to-date.',
    iconSvgPath:
      'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
    iconClasses: 'text-teal-400',
  },
];

// === CONTACT PAGE DATA ===
export const CONTACT_DATA = {
  pageTitle: "Let's Connect",
  contactIntro:
    "I'm always excited to hear about new opportunities, collaborations, or just to chat. Feel free to reach out via the form or through any of the platforms below.",
  emailAddress: 'mustafayev.dev@gmail.com',
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mobil-mustafayev-a322b0265/',
      icon: 'icons/linkedin.svg',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Mustafayev19',
      icon: 'icons/github.svg',
    },
  ],
};

// === PROJECTS PAGE DATA ===
export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    name: 'CarRental Pro',
    year: '2024',
    description:
      'A comprehensive full-stack car rental platform allowing users to browse vehicles, check availability, and manage bookings, with an admin panel for fleet management.',
    technologies: ['Angular', 'Nest.js', 'Prisma', 'TypeScript', 'PostgreSQL'],
    imageUrl: 'https://placehold.co/600x400/0f172a/facc15?text=CarRental+Pro',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    name: 'Tracksy',
    year: '2024',
    description:
      'An advanced task and project management application. More than a simple to-do list, it includes features for project tracking, team collaboration, and productivity analytics.',
    technologies: ['Angular', 'Nest.js', 'Prisma', 'TypeScript', 'Socket.IO'],
    imageUrl: 'https://placehold.co/600x400/0f172a/facc15?text=Tracksy',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    name: 'Booktime',
    year: '2023',
    description:
      'A book discovery platform that leverages the Google Books API. Users can search for books, view details, read previews, and create personal reading lists.',
    technologies: ['Angular', 'TypeScript', 'Google Books API', 'Tailwind CSS'],
    imageUrl: 'images/booktime.png',
    liveUrl: 'https://mustafayev-booktime.netlify.app/',
    repoUrl: '#',
  },
  {
    id: 4,
    name: 'FoodRecipe ',
    year: '2023',
    description:
      'A recipe searching application built using the Spoonacular API, offering users access to thousands of recipes with advanced filtering options.',
    technologies: ['Angular', 'TypeScript', 'Spoonacular API', 'RxJS'],
    imageUrl: 'images/foodrecipe.png',
    liveUrl: 'https://mustafayev-foodrecipe.netlify.app/',
    repoUrl: '#',
  },
  {
    id: 5,
    name: 'WeatherMood',
    year: '2023',
    description:
      'An intuitive weather application providing real-time forecasts. Features a clean UI that changes dynamically based on the current weather conditions.',
    technologies: ['Angular', 'TypeScript', 'Weather API', 'Animations'],
    imageUrl: 'images/weathermood.webp',
    liveUrl: 'https://mustafayev-weathermood.netlify.app/',
    repoUrl: '#',
  },
  {
    id: 6,
    name: 'This Portfolio',
    year: '2024',
    description:
      'The very portfolio you are Browse now. Designed and built from scratch to showcase my skills in modern web development, with a focus on performance and aesthetics.',
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Formspree'],
    imageUrl: 'images/portfolio.png',
    liveUrl: '',
    repoUrl: '#',
  },
];

// === RESUME PAGE DATA ===
export const RESUME_DATA = {
  pageTitle: 'My Resume',
  downloadPdfUrl: 'assets/Mobil_Mustafayev_Resume.pdf',
  summary: `A highly motivated and self-taught Full-Stack Developer with a strong foundation in creating modern, responsive, and user-centric web applications. Proficient in building dynamic frontends with Angular and robust backends with Nest.js. Passionate about solving complex problems and turning ideas into high-quality, scalable code.`,
  experience: [
    {
      jobTitle: 'Full-Stack Developer (Project)',
      company: 'CarRental Pro',
      location: 'Personal Project',
      dates: '2024',
      responsibilities: [
        'Developed a complete car rental platform from scratch, including user-facing booking interfaces and an administrative dashboard.',
        'Built a secure RESTful API with Nest.js for managing vehicles, users, and bookings.',
        'Designed a PostgreSQL database schema and integrated it using Prisma ORM.',
        'Implemented a dynamic and responsive frontend using Angular and TypeScript.',
      ],
    },
    {
      jobTitle: 'Full-Stack Developer (Project)',
      company: 'Tracksy - Task Manager',
      location: 'Personal Project',
      dates: '2024',
      responsibilities: [
        'Created an advanced task management tool with features for project tracking and collaboration.',
        'Developed real-time communication features using Nest.js WebSockets.',
        'Designed and implemented a clean, component-based architecture in Angular.',
        'Ensured a seamless user experience with a focus on state management and performance.',
      ],
    },
  ],

  keySkills: [
    'Angular',
    'Nest.js',
    'TypeScript',
    'JavaScript (ES6+)',
    'Node.js',
    'RxJS',
    'NgRx',
    'HTML5',
    'CSS3 / SCSS',
    'Tailwind CSS',
    'PostgreSQL',
    'Prisma',
    'REST APIs',
    'Git & GitHub',
    'Docker',
  ],
};
