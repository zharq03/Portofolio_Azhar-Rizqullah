import ProjectGrid from './ProjectGrid';

export default function SosmedProjects() {
  const projects = [
    {
      title: "Atem Official Instagram Management",
      image: "/assets/projects/pimpong.png",
      roles: ["Social Media Admin", "Graphic Designer"],
      desc: "Mengelola akun Instagram ATENA dengan desain postingan yang konsisten dan menarik.",
      tech: ["Canva","Figma", "Photoshop", "Content Strategy"],
      link: "https://www.instagram.com/atena_amikom/",
      linkText: "Lihat Portfolio",
    },
    {
      title: "Ikmas Official Instagram Management",
      image: "/assets/projects/imkmas.png",
      roles: ["Social Media Admin", "Visual Designer"],
      desc: "Membuat desain postingan Ikatan kekeluargaan mahasiswa kabupaten sambas yang eye-catching.",
      tech: ["Canva", "Branding", "Content Planning"],
      link: "https://www.instagram.com/ikmas.yogyakarta/",
      linkText: "Lihat Portfolio",
    },
    {
      title: "AMKS Official Instagram Management",
      image: "/assets/projects/igamks.png",
      roles: ["Social Media Admin", "Visual Designer"],
      desc: "Membuat desain postingan untuk AMKS yang clean dan menarik.",
      tech: ["Canva","Figma", "Branding", "Content Planning"],
      link: "https://www.instagram.com/amks.yogyakarta/",
      linkText: "Lihat Portfolio",
    },
  ];

  return <ProjectGrid projects={projects} />;
}