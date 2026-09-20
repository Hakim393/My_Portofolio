import { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'kstore-seapedia',
    title: 'KStore / SEAPEDIA',
    tagline: {
      en: 'Backend-Oriented E-Commerce Architecture & Logistics API',
      id: 'Arsitektur E-Commerce Berorientasi Backend & API Logistik',
    },
    shortDescription: {
      en: 'A robust e-commerce engine focusing on backend order dispatch, JWT-secured authentication, PostgreSQL transactions, admin management, and courier logistics integration.',
      id: 'Sistem e-commerce tangguh dengan fokus pada pemrosesan pesanan backend, autentikasi berbasis JWT, transaksi database PostgreSQL, dashboard admin, dan integrasi logistik kurir.',
    },
    fullDescription: {
      en: 'KStore / SEAPEDIA is a specialized e-commerce platform built to solve transactional integrity and real-time shipment synchronization. The project emphasizes a clean backend service layer with modular routing, input validation middleware, token-based user authorization, and structured database relational schemas. Administrators can manage inventories, track incoming purchase requests, and trigger courier logistics dispatches seamlessly.',
      id: 'KStore / SEAPEDIA adalah platform e-commerce yang dirancang untuk menjaga integritas transaksi dan sinkronisasi logistik pengiriman secara real-time. Proyek ini memprioritaskan arsitektur backend yang bersih dengan modular routing, middleware validasi input, otorisasi berbasis token JWT, dan skema relasional database terstruktur. Administrator dapat mengelola inventaris, memantau pesanan masuk, serta memproses pengiriman kurir dengan akurat.',
    },
    role: {
      en: 'Backend & System Developer',
      id: 'Pengembang Backend & Sistem',
    },
    category: 'Backend',
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'REST API', 'Git', 'Swagger'],
    image: '/images/projects/kstore-seapedia/cover.svg',
    githubUrl: 'https://github.com/Hakim393/Backend-Seapedia',
    featured: true,
    architectureHighlights: {
      en: [
        'Modular Express.js controller-service architectural pattern',
        'ACID-compliant PostgreSQL transactional order reservation pipeline',
        'Stateful/stateless JWT token authentication with role-based access control',
        'Courier rate calculation and automated dispatch webhook endpoints',
        'Standardized error handling middleware with uniform JSON responses',
      ],
      id: [
        'Pola arsitektur modular Express.js controller-service',
        'Alur pemesanan dengan transaksi PostgreSQL yang mematuhi prinsip ACID',
        'Autentikasi token JWT dengan kontrol akses berbasis peran (RBAC)',
        'Endpoint perhitungan ongkos kirim dan webhook status logistik kurir',
        'Middleware penanganan error standar dengan format respons JSON seragam',
      ],
    },
    keyFeatures: {
      en: [
        'User Registration & Secure Session Management (Bcrypt + JWT)',
        'Product Catalog & Inventory Stock Lock Mechanism',
        'Cart & Multi-item Checkout Flow',
        'Admin Dashboard APIs for Inventory & Order Statusing',
        'Courier Logistics Integration & Shipping Rate Dispatch',
        'Comprehensive Swagger/OpenAPI Endpoint Documentation',
      ],
      id: [
        'Registrasi Pengguna & Manajemen Sesi Aman (Bcrypt + JWT)',
        'Katalog Produk & Mekanisme Penguncian Stok Saat Checkout',
        'Alur Keranjang Belanja & Pembayaran Multi-Item',
        'API Dashboard Admin untuk Pemantauan Stok & Status Pesanan',
        'Integrasi Logistik Kurir & Perhitungan Tarif Ekspedisi',
        'Dokumentasi Endpoint Terstandarisasi Menggunakan Swagger/OpenAPI',
      ],
    },
  },
  {
    slug: '24institute',
    title: '24Institute',
    tagline: {
      en: 'Academic Platform & Tech Mentorship Information System',
      id: 'Platform Akademik & Sistem Informasi Mentorship Teknologi',
    },
    shortDescription: {
      en: 'An intuitive educational platform providing structured technology bootcamps, course catalogs, syllabus explorer, and online learner registration.',
      id: 'Platform pendidikan teknologi interaktif yang menyajikan silabus bootcamp, katalog kursus terstruktur, dan pendaftaran peserta belajar daring.',
    },
    fullDescription: {
      en: '24Institute was engineered to provide prospective technology learners with transparent access to course curricula, instructor credentials, and bootcamp tracks. Built with modern component-driven frontend architecture and backed by clean API endpoints, it ensures lightning-fast page responsiveness and smooth registration onboarding across all mobile and desktop devices.',
      id: '24Institute dikembangkan guna memberikan akses transparan bagi calon peserta kursus teknologi untuk mengeksplorasi kurikulum pembelajaran, profil mentor, dan jalur bootcamp. Dibangun dengan arsitektur frontend modern berbasis komponen dan didukung endpoint API terstruktur, platform ini memastikan kecepatan akses optimal serta proses registrasi yang ramah pengguna.',
    },
    role: {
      en: 'Full-Stack Web Developer',
      id: 'Full-Stack Web Developer',
    },
    category: 'Full-Stack',
    technologies: ['React', 'TypeScript', 'Node.js', 'REST API', 'Tailwind CSS', 'Git'],
    image: '/images/projects/24institute/cover.svg',
    githubUrl: 'https://github.com/24Institute/backend-24institute',
    featured: true,
    architectureHighlights: {
      en: [
        'Component-based modular layout with clear separation of concerns',
        'Dynamic course filtering system with client-side query state',
        'Responsive layouts tested across mobile, tablet, and widescreen viewports',
        'Integrated registration validation preventing malformed applicant inputs',
      ],
      id: [
        'Layout modular berbasis komponen dengan pemisahan dependensi yang rapi',
        'Sistem filter kursus dinamis dengan state URL dan memori klien',
        'Tampilan responsif teruji di perangkat ponsel, tablet, hingga desktop lebar',
        'Validasi formulir pendaftaran terpadu untuk mencegah data tidak valid',
      ],
    },
    keyFeatures: {
      en: [
        'Interactive Bootcamp Syllabus and Module Overview',
        'Student Enrollment and Registration Intake Flow',
        'Mentor & Instructor Credential Highlights',
        'Category-based Course Search and Difficulty Filter',
        'Mobile-Optimized Touch-Friendly Interface',
      ],
      id: [
        'Silabus Bootcamp Interaktif & Rincian Modul Pembelajaran',
        'Alur Pendaftaran & Intake Peserta Kursus Baru',
        'Sorotan Kredensial Mentor & Praktisi Industri',
        'Pencarian Kursus Berdasarkan Kategori & Tingkat Kesulitan',
        'Antarmuka Ramah Sentuhan yang Dioptimalkan untuk Mobile',
      ],
    },
  },
  {
    slug: 'smk-voctech-2',
    title: 'SMK VOCTECH 2',
    tagline: {
      en: 'Vocational High School Portal & Academic Profile Hub',
      id: 'Portal Sekolah Menengah Kejuruan & Pusat Informasi Akademik',
    },
    shortDescription: {
      en: 'Official web portal and information management hub for SMK VOCTECH 2, highlighting vocational departments, academic calendars, and admissions.',
      id: 'Portal web resmi dan pusat informasi akademik SMK VOCTECH 2, menampilkan program keahlian kejuruan, kalender sekolah, dan layanan PPDB.',
    },
    fullDescription: {
      en: 'Developed to bridge communication between the school, students, parents, and prospective applicants. The portal organizes vocational majors (such as Software Engineering and Computer Network Engineering), school announcements, facility profiles, and admissions inquiry channels into a clean, accessible layout designed for high readability and fast loading on mobile networks.',
      id: 'Dikembangkan sebagai jembatan informasi antara pihak sekolah, peserta didik, orang tua siswa, dan calon pendaftar. Portal ini menyajikan informasi program kejuruan (seperti Rekayasa Perangkat Lunak dan Teknik Komputer Jaringan), pengumuman resmi, fasilitas sekolah, dan alur pendaftaran siswa baru secara terstruktur, mudah diakses, dan ringan dimuat.',
    },
    role: {
      en: 'Frontend & Web Developer',
      id: 'Frontend & Web Developer',
    },
    category: 'Web Portal',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
    image: '/images/projects/smk-voctech/cover.svg',
    githubUrl: 'https://github.com/Hakim393?tab=repositories',
    featured: true,
    architectureHighlights: {
      en: [
        'Accessible semantic HTML markup adhering to WCAG readability guidelines',
        'Lightweight bundle footprint for reliable access on slower mobile bandwidths',
        'Structured information hierarchy separating announcements from curriculum',
        'Cross-browser consistency across Chromium, WebKit, and Gecko engines',
      ],
      id: [
        'Markup semantik HTML yang aksesibel mematuhi panduan keterbacaan WCAG',
        'Ukuran aset ringan untuk keandalan akses pada jaringan seluler',
        'Hierarki informasi terstruktur memisahkan pengumuman penting dari profil jurusan',
        'Konsistensi lintas browser pada engine Chromium, WebKit, dan Gecko',
      ],
    },
    keyFeatures: {
      en: [
        'Vocational Program & Competency Curriculum Showcase',
        'Academic Announcement & Examination Schedule Board',
        'New Student Admission (PPDB) Guidelines & Information Desk',
        'Campus Gallery & Facilities Documentation',
        'Contact & Parental Consultation Directory',
      ],
      id: [
        'Informasi Program Keahlian & Kurikulum Berbasis Industri',
        'Papan Pengumuman Akademik & Jadwal Kegiatan Siswa',
        'Panduan Penerimaan Peserta Didik Baru (PPDB) & Helpdesk',
        'Galeri Dokumentasi Fasilitas & Laboratorium Praktik',
        'Direktori Kontak Sekolah & Layanan Konsultasi',
      ],
    },
  },
];
