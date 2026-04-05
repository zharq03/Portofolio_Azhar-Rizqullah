import ProjectGrid from './ProjectGrid';

export default function MobileAppProjects() {
  const projects = [
    {
      title: "FaceDX – Aplikasi Perawatan Wajah Berbasis AI",
      image: "/assets/projects/FaceDX.png",
      roles: ["Deep Learning Developer", "Chatbot Developer", "Desainer UI/UX"],
      desc: "Merancang dan mengembangkan aplikasi perawatan wajah berbasis deep learning dengan asisten kecantikan berupa chatbot. Menggunakan model MobileNet untuk deteksi kondisi kulit.",
      tech: ["Figma", "Flowise", "Kotlin", "MobileNet"],
      link: "https://github.com/RivalRasyid/mobile-app-dev/releases/download/FaceDXv2/FaceDX.V2.apk",
      linkText: "Download APK",
    },
  ];

  return <ProjectGrid projects={projects} />;
}