import ProjectGrid from './ProjectGrid';

export default function UiUxProjects() {
  const projects = [
    {
      title: "FaceDX Mobile App UI Design",
      image: "/assets/projects/FaceDX.png",
      roles: ["UI/UX Designer"],
      desc: "Desain antarmuka aplikasi mobile FaceDX untuk deteksi kulit wajah berbasis AI.",
      tech: ["Figma", "Prototyping", "User Flow"],
      link: "#",
      linkText: "Lihat di Figma",
    },
    {
      title: "Scholars Today Placement Test UI/UX",
      image: "/assets/projects/Schoolars.png",
      roles: ["UI/UX Designer"],
      desc: "Desain lengkap user interface dan user experience untuk website placement test.",
      tech: ["Figma", "Wireframe", "Usability"],
      link: "#",
      linkText: "Lihat Desain",
    },
    {
      title: "EduFarm Design System",
      image: "/assets/projects/EduFarm.png",
      roles: ["UI/UX Designer"],
      desc: "Sistem desain lengkap untuk platform Edufarm (Web & Mobile).",
      tech: ["Figma", "Design System"],
      link: "#",
      linkText: "Lihat Design System",
    },
  ];

  return <ProjectGrid projects={projects} />;
}