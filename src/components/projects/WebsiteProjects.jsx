import ProjectGrid from './ProjectGrid';

export default function WebsiteProjects() {
  const projects = [
     {
      title: "FaceDX – Website Deteksi & Perawatan Kulit Berbasis AI",
      image: "/assets/projects/webfacedx.png",
      roles: ["Full-Stack Developer", "AI/ML Developer", "Desainer UI/UX"],
      desc: "Proyek skripsi saya: Pengembangan website FaceDX untuk deteksi kondisi kulit wajah dan rekomendasi perawatan berbasis kecerdasan buatan. Mencapai akurasi model sebesar 90% menggunakan teknik deep learning. Frontend dibangun dengan React dan Tailwind CSS, backend menggunakan Flask (Python), serta integrasi model machine learning. Sudah menulis jurnal ilmiah yang disubmit ke Jurnal Betrik (masih dalam tahap review).",
      tech: ["React.js", "Tailwind CSS", "Flask", "Python", "Deep Learning", "Figma"],
      link: "https://facedx.web.id/",
      linkText: "Kunjungi Website",
    },
    {
      title: "Placements Test dan IELTS Test Schoolars Today",
      image: "/assets/projects/Schoolars.png",
      roles: ["Front-End Developer", "Desainer UI/UX"],
      desc: "Merancang dan mengembangkan website placements test untuk Schoolars Today menggunakan React.js dan Tailwind CSS, dengan desain UI/UX di Figma untuk tampilan modern dan user-friendly.",
      tech: ["Figma", "React.js", "Tailwind CSS"],
      link: "https://scholarstoday.id/",
      linkText: "Kunjungi Website",
    },

    {
      title: "Profile AMKS",
      image: "/assets/projects/Amkss.png",
      roles: ["Front-End Developer", "Desainer UI/UX"],
      desc: "Merancang dan mengembangkan website portofolio untuk AMKS menggunakan React.js dan Tailwind CSS, dengan desain UI/UX di Figma untuk tampilan modern dan profesional.",
      tech: ["Figma", "React.js", "Tailwind CSS"],
      link: "https://www.amks.web.id/",
      linkText: "Kunjungi Website",
    },
    {
      title: "WebAPP Edufarm",
      image: "/assets/projects/EduFarm.png",
      roles: ["Desainer UI/UX", "Frontend Developer Web"],
      desc: "Bekerja dalam tim untuk mengembangkan aplikasi Edufarm – platform pembelajaran materi pertanian. Menggabungkan web dan mobile dengan desain responsif.",
      tech: ["React.js", "Tailwind CSS", "Figma"],
      link: "https://edufarm-ramas-projects-5fc87afb.vercel.app/",
      linkText: "Kunjungi Website",
      extraLink: "https://appetize.io/app/b_f74czjtfovtbemmnhbh3xrug2m",
      extraLinkText: "Preview Aplikasi",
    },
    {
      title: "Website Katalog Sonbros Wedding",
      image: "/assets/projects/sonbros.png",
      roles: ["Founder", "Full-Stack Developer"],
      desc: "Mendirikan dan mengembangkan website katalog undangan pernikahan Sonbros menggunakan React.js, Tailwind CSS, dan desain UI/UX di Figma.",
      tech: ["React.js", "Tailwind CSS", "Figma"],
      link: "https://www.sonbrosweding.my.id/",
      linkText: "Kunjungi Website",
    },
    {
      title: "Website Katalog Kress",
      image: "/assets/projects/kress.png",
      roles: ["Full-Stack Developer"],
      desc: "Mengembangkan website katalog untuk Kress (kripik singkong) dengan antarmuka dinamis dan fungsionalitas full-stack menggunakan React.js.",
      tech: ["React.js"],
      link: "https://kress.vercel.app",
      linkText: "Kunjungi Website",
    },
    {
      title: "Proyek Website Yearbook Asrama AMKS",
      image: "/assets/projects/amks.png",
      roles: ["Full-Stack Developer", "Desainer UI/UX"],
      desc: "Mengembangkan website yearbook responsif untuk Asrama AMKS menggunakan HTML dan CSS, dengan desain UI/UX fidelitas tinggi yang mencerminkan semangat komunitas.",
      tech: ["HTML", "CSS"],
      link: null,
      linkText: null,
    },
    {
      title: "Proyek Website Wisata Lokal",
      image: "/assets/projects/travel.png",
      roles: ["Front-End Developer", "Desainer UI/UX"],
      desc: "Mengembangkan website wisata lokal yang di-host di localhost, menggunakan PHP, HTML, CSS, dan Bootstrap untuk desain responsif dan intuitif.",
      tech: ["PHP", "HTML", "CSS", "Bootstrap"],
      link: null,
      linkText: null,
    },
  ];

  return <ProjectGrid projects={projects} />;
}