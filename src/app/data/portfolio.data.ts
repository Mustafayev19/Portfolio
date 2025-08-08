import { Injectable } from '@angular/core';

// === INTERFACES ===
export interface Skill {
  name: string;
  icon?: string;
  level?: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconSvgPath?: string;
  iconClasses?: string; // Düzəliş edildi
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

// === ABOUT PAGE DATA ===
export const ABOUT_DATA = {
  name: 'Mobil Mustafayev',
  title: 'a Full-Stack Developer | Angular & Nest.js',
  introduction: `Hello! I'm Mobil. With a background in emergency services where precision and problem-solving are critical, I bring a unique sense of discipline and dedication to Full-Stack Development. I specialize in building end-to-end applications, using <span class="text-yellow-400 font-semibold">Angular</span> for dynamic frontends and <span class="text-yellow-400 font-semibold">Nest.js</span> for efficient, scalable backends.`,
  philosophy: `In an era of rapidly evolving technology, I focus on the entire development lifecycle. From database design to API development and user interface implementation, I strive to deliver clean, maintainable, and scalable products that <span class="text-yellow-400">create real value</span>.`,
};

// === SKILLS PAGE DATA ===
export const SKILL_CATEGORIES: { name: string; skills: Skill[] }[] = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'Angular', icon: 'icons/angular.svg', level: 'Proficient' },
      { name: 'TypeScript', icon: 'icons/typescript.svg', level: 'Proficient' },
      {
        name: 'JavaScript (ES6+)',
        icon: 'icons/javascript.svg',
        level: 'Proficient',
      },
      { name: 'RxJS', icon: 'icons/rxjs.svg', level: 'Proficient' },
      { name: 'NgRx', icon: 'icons/ngrx.svg', level: 'Familiar' },
      { name: 'HTML5', icon: 'icons/html.svg', level: 'Proficient' },
      { name: 'CSS3 / SCSS', icon: 'icons/css.svg', level: 'Proficient' },
      { name: 'Tailwind CSS', icon: 'icons/tailwind.svg', level: 'Proficient' },
      { name: 'Bootstrap', icon: 'icons/bootstrap.svg', level: 'Proficient' },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Nest.js', icon: 'icons/nest.js.svg', level: 'Proficient' },
      { name: 'Node.js', icon: 'icons/node.js.svg', level: 'Proficient' },
      { name: 'REST APIs', icon: 'icons/restfull.svg', level: 'Proficient' },
      { name: 'PostgreSQL', icon: 'icons/postgresql.svg', level: 'Proficient' },
      { name: 'Prisma ORM', icon: 'icons/prisma.svg', level: 'Proficient' },
    ],
  },
  {
    name: 'Tools & Methodology',
    skills: [
      { name: 'Git & GitHub', icon: 'icons/github.svg', level: 'Proficient' },
      { name: 'NPM', icon: 'icons/npm.svg', level: 'Proficient' },
      {
        name: 'Responsive Design',
        icon: 'icons/responsive.svg',
        level: 'Proficient',
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
  },
  {
    id: 2,
    title: 'Backend & API Development',
    description:
      'Crafting secure, scalable, and efficient RESTful APIs with Nest.js, connecting your frontend to powerful server-side logic and databases.',
    iconSvgPath: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    id: 3,
    title: 'Advanced Frontend Development',
    description:
      'Creating intuitive, high-performance, and visually appealing user interfaces with a strong focus on user experience using Angular.',
    iconSvgPath:
      'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    id: 4,
    title: 'Maintenance & Modernization',
    description:
      'Providing ongoing support, updates, and modernizing existing applications to ensure they run smoothly, securely, and stay up-to-date.',
    iconSvgPath:
      'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
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
    name: 'Dugi Studio - Art School & E-commerce Platform',
    year: '2025',
    description:
      'A full-featured business management and e-commerce platform for an art school, built from scratch based on client needs. The main site uses Server-Side Rendering (SSR) for optimal SEO and performance. The powerful admin panel (CSR) allows the client to dynamically manage students, courses, online product sales, and site content.',
    technologies: [
      'Angular (SSR/CSR)',
      'Nest.js',
      'PostgreSQL',
      'Prisma',
      'JWT',
      'i18n',
      'E-commerce',
      'Deployment (Railway)',
    ],
    imageUrl: 'images/dugistudio.webp',
    liveUrl: 'https://www.dugistudio.art/',
  },
  {
    id: 2,
    name: 'CarRental Pro - Full-Stack Platform',
    year: '2024',
    description:
      'A comprehensive full-stack car rental platform with a rich admin panel. Built with a focus on clean architecture using Bootstrap and custom CSS for the UI. *Please note: Due to the free hosting tier, the server may take 30-40 seconds to "wake up" on the first visit.*',
    technologies: [
      'Angular',
      'Nest.js',
      'Bootstrap',
      'CSS3',
      'PostgreSQL',
      'Prisma',
    ],
    imageUrl: 'images/carrental.webp',
    liveUrl: 'https://mustafayev-carrental.netlify.app/',
  },
  {
    id: 3,
    name: 'FoodRecipe Discovery',
    year: '2025',
    description:
      'A functional recipe discovery application using the Spoonacular API. It demonstrates complex API data handling and filtering. While currently a public-facing tool, it has the foundation to be expanded with user accounts and login systems.',
    technologies: [
      'Angular',
      'TypeScript',
      'Spoonacular API',
      'RxJS',
      'Tailwind CSS',
    ],
    imageUrl: 'images/foodrecipe.webp',
    liveUrl: 'https://mustafayev-foodrecipe.netlify.app/',
  },
  {
    id: 4,
    name: 'WeatherMood - Real-time Forecasts',
    year: '2024',
    description:
      'A clean and intuitive weather application demonstrating real-time data fetching from a third-party API. This project serves as a solid foundation for a more complex weather service using premium data sources.',
    technologies: ['Angular', 'TypeScript', 'Weather API', 'Animations'],
    imageUrl: 'images/weathermood.webp',
    liveUrl: 'https://mustafayev-weathermood.netlify.app/',
  },
  {
    id: 5,
    name: 'Booktime - API Integration Demo',
    year: '2023',
    description:
      'A proof-of-concept project demonstrating integration with the Google Books API. This project showcases the fundamental skills required to build a more advanced, full-featured reading list application with user accounts.',
    technologies: ['Angular', 'TypeScript', 'Google Books API'],
    imageUrl: 'images/booktime.webp',
    liveUrl: 'https://mustafayev-booktime.netlify.app/',
  },
  {
    id: 6,
    name: 'This Portfolio',
    year: '2025',
    description:
      'The very portfolio you are browsing now. Designed and built from scratch to showcase my skills in modern web development, with a focus on performance, aesthetics, and clean code.',
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Animations'],
    imageUrl: 'images/portfolio.webp',
    liveUrl: '#',
  },
];

// === RESUME PAGE DATA ===
export const RESUME_DATA = {
  pageTitle: 'My Resume',
  downloadPdfUrl: 'pdf/Mobil_Mustafayev_Resume.pdf',
  summary: `A highly motivated and self-taught Full-Stack Developer with a proven ability to architect and deliver complex, end-to-end web platforms. Specializing in Angular for dynamic frontends and Nest.js for robust, secure backends. My focus is on writing clean, maintainable code and turning business requirements into functional, user-friendly, and fully responsive solutions for a seamless experience on all devices.`,
  keySkills: [
    'Angular',
    'Nest.js',
    'TypeScript',
    'Responsive Design',
    'Tailwind CSS',
    'Bootstrap',
    'PostgreSQL',
    'Prisma',
    'JWT Authentication',
    'REST APIs',
    'Internationalization (i18n)',
    'E-commerce',
    'Node.js',
    'Git & GitHub',
    'Deployment (Railway)',
  ],
  experience: [
    {
      jobTitle: 'Dugi Studio - Art School & E-commerce Platform',
      company: 'Freelance Client Project',
      location: 'Remote',
      dates: '2024',
      responsibilities: [
        'Architected and developed a comprehensive full-stack platform for an art school, based on direct client requirements.',
        'Built a powerful admin panel (CSR) allowing the client to dynamically manage students, courses, and online product sales.',
        'Engineered a secure backend using Nest.js, implementing JWT authentication with bcrypt hashing for user data protection.',
        'Developed the main site with Server-Side Rendering (SSR) for optimal SEO and performance.',
      ],
    },
    {
      jobTitle: 'CarRental Pro - Full-Stack Platform',
      company: 'Personal Project',
      location: 'Remote',
      dates: '2024',
      responsibilities: [
        'Developed a complete car rental platform from scratch, including user-facing booking interfaces and an administrative dashboard.',
        'Built a secure RESTful API with Nest.js for managing vehicles, users, and bookings.',
        'Implemented a clean and modern UI with Bootstrap and custom CSS, focusing on a responsive-first approach.',
      ],
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getAboutData() {
    return ABOUT_DATA;
  }

  getSkillCategories() {
    return SKILL_CATEGORIES;
  }

  getServices() {
    return SERVICES_DATA;
  }

  getContactData() {
    return CONTACT_DATA;
  }

  getProjects() {
    return PROJECTS_DATA;
  }

  getResumeData() {
    return RESUME_DATA;
  }
}
