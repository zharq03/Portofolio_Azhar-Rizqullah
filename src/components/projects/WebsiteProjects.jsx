import ProjectGrid from './ProjectGrid';
import { useLanguage } from '../../context/LanguageContext';

export default function WebsiteProjects() {
  const { language } = useLanguage();

  const projects = [
    {
      title: "SIMAS-KS — Sistem Informasi Manajemen Asrama Mahasiswa",
      image: "/assets/projects/simasks.png",
      roles: ["Product Owner", "Full-Stack Developer", "Business Analyst"],
      desc: language === 'id'
        ? "Mengembangkan platform digital resmi untuk pengelolaan Asrama Mahasiswa Kabupaten Sambas di Yogyakarta secara kolaboratif (tim 2 orang). Merancang arsitektur sistem dari hulu ke hilir, meliputi pengelolaan keuangan dinamis dengan sinkronisasi otomatis denda piket, sistem presensi piket adaptif berbasis waktu (WIB) dengan verifikasi bukti foto, laporan analitik pengurus dengan visualisasi grafik Recharts, serta ekspor PDF laporan presensi."
        : "Co-developed the official management system for the Sambas Regency Student Dormitory in Yogyakarta in a 2-person team. Handled the end-to-end system architecture, including dynamic financial ledger sync with picket fines, time-adaptive attendance verification with photo proof upload, division performance dashboards with Recharts, and automated PDF report exporting.",
      tech: ["Next.js", "React.js", "Tailwind CSS", "Prisma ORM", "Recharts", "jsPDF", "System Architecture"],
      link: "https://amksyogyakarta.my.id/",
      linkText: language === 'id' ? "Kunjungi Website" : "Visit Website",
    },
    {
      title: "Kabar Baik Studio — Digital Wedding Invitation Platform",
      image: "/assets/projects/kabarbaik.png",
      roles: ["Founder", "Product Owner", "Full-Stack Developer"],
      desc: language === 'id'
        ? "Mendirikan dan mengembangkan platform undangan pernikahan digital secara mandiri. Kepemilikan ujung-ke-ujung dari definisi kebutuhan hingga desain, pengembangan, dan peluncuran. Bertanggung jawab mengumpulkan kebutuhan klien, menerjemahkannya menjadi fitur produk, mengelola roadmap, dan mengawasi pengiriman. Saat ini melayani klien nyata melalui kabarbaik.web.id."
        : "Founded and independently built a live digital wedding invitation platform. End-to-end ownership from requirements definition through design, development, and deployment. Responsible for gathering client requirements, translating them into product features, managing the roadmap, and overseeing delivery. Currently serving real clients via kabarbaik.web.id.",
      tech: ["React.js", "Tailwind CSS", "Figma", "Requirements Analysis", "Product Management"],
      link: "https://kabarbaik.web.id/",
      linkText: language === 'id' ? "Kunjungi Website" : "Visit Website",
    },
    {
      title: "FaceDX – Website Deteksi & Perawatan Kulit Berbasis AI",
      image: "/assets/projects/webfacedx.png",
      roles: ["Full-Stack Developer", "AI/ML Developer", "UI/UX Designer"],
      desc: language === 'id'
        ? "Proyek skripsi: platform deteksi kondisi kulit wajah berbasis deep learning dengan akurasi model 90%. Bertanggung jawab atas siklus hidup produk lengkap — dari pengumpulan kebutuhan, desain sistem, pengembangan (React + Flask + Python), hingga deployment dan penulisan jurnal ilmiah."
        : "Thesis project: a facial skin condition detection platform based on deep learning with 90% model accuracy. Responsible for the full product lifecycle — from requirements gathering, system design, development (React + Flask + Python), to deployment and writing scientific journals.",
      tech: ["React.js", "Tailwind CSS", "Flask", "Python", "Deep Learning", "Figma"],
      link: "https://facedx.web.id/",
      linkText: language === 'id' ? "Kunjungi Website" : "Visit Website",
    },
    {
      title: "Placement Test & IELTS Platform — Scholarstoday.id",
      image: "/assets/projects/Schoolars.png",
      roles: ["Product Support Intern", "Front-End Developer", "UI/UX Collaborator"],
      desc: language === 'id'
        ? "Berkontribusi sebagai Product Support Intern pada platform beasiswa live yang melayani 1.000+ pengguna. Menerjemahkan prototipe Figma menjadi spesifikasi implementasi, memfasilitasi usability testing dengan 50+ pengguna, dan berkontribusi langsung pada pengiriman modul profil penerima beasiswa, dashboard acara, dan donasi menggunakan React & Tailwind CSS."
        : "Contributed as a Product Support Intern on a live scholarship platform serving 1,000+ users. Translated Figma prototypes into implementation specifications, facilitated usability testing with 50+ users, and contributed directly to shipping scholar profiles, event dashboards, and donation modules using React & Tailwind CSS.",
      tech: ["Figma", "React.js", "Tailwind CSS", "Agile/Scrum", "Usability Testing"],
      link: "https://scholarstoday.id/",
      linkText: language === 'id' ? "Kunjungi Website" : "Visit Website",
    },
    {
      title: "Profile AMKS",
      image: "/assets/projects/Amkss.png",
      roles: ["Front-End Developer", "UI/UX Designer"],
      desc: language === 'id'
        ? "Merancang dan mengembangkan website profil asrama AMKS menggunakan React.js dan Tailwind CSS. Melakukan pengumpulan kebutuhan dengan pengurus asrama, mendefinisikan user stories, dan menghasilkan desain di Figma sebelum implementasi."
        : "Designed and developed the AMKS dormitory profile website using React.js and Tailwind CSS. Conducted requirements gathering with dormitory administrators, defined user stories, and created designs in Figma prior to implementation.",
      tech: ["Figma", "React.js", "Tailwind CSS"],
      link: "https://www.amks.web.id/",
      linkText: language === 'id' ? "Kunjungi Website" : "Visit Website",
    },
    {
      title: "WebAPP Edufarm",
      image: "/assets/projects/EduFarm.png",
      roles: ["UI/UX Designer", "Front-End Developer"],
      desc: language === 'id'
        ? "Berkolaborasi dalam tim untuk mengembangkan platform pembelajaran pertanian Edufarm. Bertanggung jawab atas desain responsif web & mobile serta pengembangan front-end dengan React.js."
        : "Collaborated in a team to develop the Edufarm agricultural learning platform. Responsible for responsive web & mobile design and front-end development with React.js.",
      tech: ["React.js", "Tailwind CSS", "Figma"],
      link: "https://edufarm-ramas-projects-5fc87afb.vercel.app/",
      linkText: language === 'id' ? "Kunjungi Website" : "Visit Website",
      extraLink: "https://appetize.io/app/b_f74czjtfovtbemmnhbh3xrug2m",
      extraLinkText: language === 'id' ? "Preview Aplikasi" : "App Preview",
    },
    {
      title: "Website Katalog Sonbros Wedding",
      image: "/assets/projects/sonbros.png",
      roles: ["Founder", "Full-Stack Developer"],
      desc: language === 'id'
        ? "Mendirikan dan mengembangkan website katalog undangan pernikahan Sonbros. Proyek ini menjadi cikal bakal Kabar Baik Studio — pengalaman pertama mengelola produk digital dari ide hingga go-live."
        : "Founded and developed the Sonbros wedding invitation catalog website. This project was the precursor to Kabar Baik Studio — first experience managing a digital product from idea to go-live.",
      tech: ["React.js", "Tailwind CSS", "Figma"],
      link: "https://www.sonbrosweding.my.id/",
      linkText: language === 'id' ? "Kunjungi Website" : "Visit Website",
    },
    {
      title: "Website Katalog Kress",
      image: "/assets/projects/kress.png",
      roles: ["Full-Stack Developer"],
      desc: language === 'id'
        ? "Mengembangkan website katalog untuk Kress (keripik singkong) dengan antarmuka dinamis menggunakan React.js."
        : "Developed the catalog website for Kress (cassava chips) with a dynamic interface using React.js.",
      tech: ["React.js"],
      link: "https://kress.vercel.app",
      linkText: language === 'id' ? "Kunjungi Website" : "Visit Website",
    },
    {
      title: "Proyek Website Yearbook Asrama AMKS",
      image: "/assets/projects/amks.png",
      roles: ["Full-Stack Developer", "UI/UX Designer"],
      desc: language === 'id'
        ? "Mengembangkan website yearbook responsif untuk Asrama AMKS menggunakan HTML dan CSS, dengan desain high-fidelity yang mencerminkan semangat komunitas."
        : "Developed a responsive yearbook website for the AMKS Dormitory using HTML and CSS, with a high-fidelity design reflecting the spirit of the community.",
      tech: ["HTML", "CSS"],
      link: null,
      linkText: null,
    },
    {
      title: "Proyek Website Wisata Lokal",
      image: "/assets/projects/travel.png",
      roles: ["Front-End Developer", "UI/UX Designer"],
      desc: language === 'id'
        ? "Mengembangkan website wisata lokal menggunakan PHP, HTML, CSS, dan Bootstrap untuk tampilan responsif dan intuitif."
        : "Developed a local tourism website using PHP, HTML, CSS, and Bootstrap for a responsive and intuitive layout.",
      tech: ["PHP", "HTML", "CSS", "Bootstrap"],
      link: null,
      linkText: null,
    },
  ];

  return <ProjectGrid projects={projects} />;
}