// İnterfeyslər (əgər başqa yerdə deyilsə, burada saxlamaq olar)
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

// ABOUT səhifəsi üçün məlumatlar
export const ABOUT_DATA = {
  name: 'Mobil Mustafayev',
  title: 'a Full-Stack Developer | Angular & Nest.js',
  introduction: `Hello! I'm Mobil, a Full-Stack Developer specializing in creating robust, end-to-end web applications. With expertise in <span class="text-yellow-400 font-semibold">Angular</span> for dynamic frontends and <span class="text-yellow-400 font-semibold">Nest.js</span> for efficient backends, my goal is to build meaningful and impactful digital solutions.`,
  philosophy: `In an era of rapidly evolving technology, I focus on the entire development lifecycle. From database design to API development and user interface implementation, I strive to deliver clean, maintainable, and scalable products that <span class="text-yellow-400">create real value</span>.`,
};

// SKILLS səhifəsi üçün məlumatlar
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
      { name: 'Nest.js', icon: 'icons/nestjs.svg', level: 'Advanced' }, // Nest.js ikonu əlavə edin
      { name: 'Node.js', icon: 'icons/nodejs.svg', level: 'Advanced' },
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

// SERVICES səhifəsi üçün məlumatlar
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    description:
      'Building complete, end-to-end web applications, from the database to the user interface, using modern technologies like Angular and Nest.js.',
    iconSvgPath: 'M10 20l4-16m4 4l-4 16M5 12H3m18 0h-2M12 5V3m0 18v-2', // Code Icon
    iconClasses: 'text-blue-400',
  },
  {
    id: 2,
    title: 'Backend & API Development',
    description:
      'Crafting secure, scalable, and efficient RESTful APIs with Nest.js, connecting your frontend to powerful server-side logic and databases.',
    iconSvgPath: 'M13 10V3L4 14h7v7l9-11h-7z', // API/Plug Icon
    iconClasses: 'text-red-400',
  },
  {
    id: 3,
    title: 'Advanced Frontend Development',
    description:
      'Creating intuitive, high-performance, and visually appealing user interfaces with a strong focus on user experience using Angular.',
    iconSvgPath:
      'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', // Palette/Design Icon
    iconClasses: 'text-green-400',
  },
  {
    id: 4,
    title: 'Maintenance & Modernization',
    description:
      'Providing ongoing support, updates, and modernizing existing applications to ensure they run smoothly, securely, and stay up-to-date.',
    iconSvgPath:
      'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z', // Cog/Settings Icon
    iconClasses: 'text-teal-400',
  },
];
// Bu kodu portfolio.data.ts faylınızın sonuna əlavə edin

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
