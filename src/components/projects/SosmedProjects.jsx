import ProjectGrid from './ProjectGrid';

export default function SosmedProjects() {
  const projects = [
    {
      title: "Social Media Content - Sonbros Wedding",
      image: "/assets/projects/sonbros.png",
      roles: ["Social Media Admin", "Graphic Designer"],
      desc: "Mengelola akun Instagram Sonbros Wedding dengan desain postingan yang konsisten dan menarik.",
      tech: ["Canva", "Photoshop", "Content Strategy"],
      link: "#",
      linkText: "Lihat Portfolio",
    },
    {
      title: "Kress Official Instagram Management",
      image: "/assets/projects/kress.png",
      roles: ["Social Media Admin", "Visual Designer"],
      desc: "Membuat desain postingan produk kripik singkong yang eye-catching.",
      tech: ["Canva", "Branding", "Content Planning"],
      link: "#",
      linkText: "Lihat Portfolio",
    },
  ];

  return <ProjectGrid projects={projects} />;
}