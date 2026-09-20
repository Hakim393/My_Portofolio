import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: {
      en: 'Backend Engineering',
      id: 'Teknik Backend',
    },
    description: {
      en: 'Building scalable server logic, RESTful endpoints, and secure auth layers.',
      id: 'Membangun logika server yang skalabel, RESTful endpoint, dan autentikasi aman.',
    },
    skills: [
      {
        name: 'Node.js',
        description: {
          en: 'Asynchronous event-driven JavaScript runtime for servers.',
          id: 'Runtime JavaScript berbasis event dan asynchronous untuk server.',
        },
        category: 'backend',
      },
      {
        name: 'Express.js',
        description: {
          en: 'Minimalist web framework for routing, middleware, and APIs.',
          id: 'Framework web minimalis untuk routing, middleware, dan API.',
        },
        category: 'backend',
      },
      {
        name: 'REST API',
        description: {
          en: 'Architecting structured, stateless endpoints with status standards.',
          id: 'Arsitektur endpoint terstruktur dan stateless dengan standar kode HTTP.',
        },
        category: 'backend',
      },
      {
        name: 'JWT (JSON Web Token)',
        description: {
          en: 'Stateless session authentication and authorization tokens.',
          id: 'Autentikasi sesi stateless dan token otorisasi pengguna.',
        },
        category: 'backend',
      },
    ],
  },
  {
    title: {
      en: 'Database & ORM Tools',
      id: 'Database & Alat ORM',
    },
    description: {
      en: 'Relational data modeling, schema migrations, and query optimization.',
      id: 'Pemodelan data relasional, migrasi skema, dan optimalisasi query.',
    },
    skills: [
      {
        name: 'PostgreSQL',
        description: {
          en: 'Advanced open-source relational SQL database with ACID compliance.',
          id: 'Database relasional SQL open-source dengan kepatuhan ACID.',
        },
        category: 'database',
      },
      {
        name: 'MySQL',
        description: {
          en: 'Relational database management for structured transactional storage.',
          id: 'Manajemen database relasional untuk penyimpanan terstruktur.',
        },
        category: 'database',
      },
      {
        name: 'Drizzle ORM',
        description: {
          en: 'TypeScript-first ORM with SQL-like syntax and zero overhead.',
          id: 'ORM TypeScript-first dengan sintaks intuitif dan performa tinggi.',
        },
        category: 'orm',
      },
      {
        name: 'Prisma',
        description: {
          en: 'Next-generation type-safe node/browser database toolkit.',
          id: 'Toolkit database type-safe untuk Node.js dengan migrasi deklaratif.',
        },
        category: 'orm',
      },
    ],
  },
  {
    title: {
      en: 'Frontend & Web Core',
      id: 'Frontend & Dasar Web',
    },
    description: {
      en: 'Creating accessible, responsive, and performant user interfaces.',
      id: 'Membuat antarmuka pengguna yang aksesibel, responsif, dan cepat.',
    },
    skills: [
      {
        name: 'TypeScript',
        description: {
          en: 'Typed superset of JavaScript ensuring compile-time safety.',
          id: 'Superset JavaScript bertipe untuk keandalan kode saat kompilasi.',
        },
        category: 'web',
      },
      {
        name: 'JavaScript',
        description: {
          en: 'Core ECMAScript for interactive web and browser behaviors.',
          id: 'Bahasa fundamental untuk logika interaktif dan fungsionalitas web.',
        },
        category: 'web',
      },
      {
        name: 'React',
        description: {
          en: 'Component-driven frontend UI library with state synchronization.',
          id: 'Library frontend berbasis komponen dengan sinkronisasi state.',
        },
        category: 'frontend',
      },
      {
        name: 'Next.js',
        description: {
          en: 'Production React framework with SSR and static generation.',
          id: 'Framework React produksi dengan SSR dan static site generation.',
        },
        category: 'frontend',
      },
      {
        name: 'HTML5 & CSS3',
        description: {
          en: 'Semantic document markup, modern CSS layouts (Flexbox & Grid).',
          id: 'Markup dokumen semantik dan layout modern (Flexbox & Grid).',
        },
        category: 'web',
      },
    ],
  },
  {
    title: {
      en: 'Development & Engineering Tools',
      id: 'Alat Pengembangan & Rekayasa',
    },
    description: {
      en: 'Version control, documentation, and API testing workflow.',
      id: 'Kontrol versi, dokumentasi, dan alur pengujian API.',
    },
    skills: [
      {
        name: 'Git',
        description: {
          en: 'Distributed version control system for atomic commits & branching.',
          id: 'Sistem kontrol versi terdistribusi untuk komit dan percabangan.',
        },
        category: 'tools',
      },
      {
        name: 'GitHub',
        description: {
          en: 'Remote code repository management and collaboration workflow.',
          id: 'Manajemen repositori kode jarak jauh dan alur kolaborasi tim.',
        },
        category: 'tools',
      },
      {
        name: 'Swagger (OpenAPI)',
        description: {
          en: 'Standardized interactive API documentation and testing interface.',
          id: 'Dokumentasi dan antarmuka pengujian API interaktif berstandar.',
        },
        category: 'tools',
      },
    ],
  },
];
