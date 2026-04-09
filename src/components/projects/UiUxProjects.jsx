import ProjectGrid from './ProjectGrid';

export default function UiUxProjects() {
  const projects = [
    {
      title: "Marica UI/UX Design system",
      image: "/assets/projects/marica.png",
      roles: ["UI/UX Designer"],
      desc: "Redesain Web Marica sebuah Platform belajar anak tk",
      tech: ["Riset", "Figma", "Prototyping", "User Flow"],
      link: "https://www.figma.com/design/QIS3ML0BpoGjJmeuii3YxJ/Tugas-pt.sebangku.?node-id=0-1&t=V30tAztMwUdgFUHP-1",
      linkText: "Lihat Desain",
    },
    {
      title: "Sistem Perpustakan Design UI/UX",
      image: "/assets/projects/perpus.png",
      roles: ["UI/UX Designer"],
      desc: "Desain lengkap user interface dan user experience untuk sistem perpustakaan sekolah.",
      tech: ["Figma", "Wireframe", "Usability"],
      link: "https://www.figma.com/design/5zdVZBQqWx60BSoesHJzeK/Perpustakaan-SMKN-1-Paloh?node-id=269-129&t=wFKM11w8zp3yU6dd-1",
      linkText: "Lihat Desain",
    },
    {
      title: "Kress UI Design",
      image: "/assets/projects/sinkong.png",
      roles: ["UI/UX Designer"],
      desc: "Desain anatarmuka web keripik singkong.",
      tech: ["Figma", "Design System"],
      link: "https://www.figma.com/design/fab81zOIlACaBnAW1rTRvp/Keripik-singkong?node-id=0-1&t=c4YmLBXSnVbdDFWq-1",
      linkText: "Lihat Design",
    },
    {
      title: "SonBros wedding UI Design",
      image: "/assets/projects/uisonbros.png",
      roles: ["UI/UX Designer"],
      desc: "Desain antarmuka website untuk acara pernikahan SonBros.",
      tech: ["Figma", "Prototyping", "User Flow"],
      link: "https://www.figma.com/design/xAo4CU3s4RadDNLlOC6BJ2/IG_sonbros.Weding?node-id=43-74&t=P3BARe4fxed3XEXK-1",
      linkText: "Lihat Desain",
    },
    {
      title: "Face Dx UI/UX",
      image: "/assets/projects/wajah.png",
      roles: ["UI/UX Designer"],
      desc: "Desain lengkap user interface dan user experience untuk website pengecekan jenis kulit wajah dan rekomendasi perawatan kulit facedx.",
      tech: ["Figma", "Wireframe", "Usability"],
      link: "https://www.figma.com/design/QKnRYdCIacJIMvhJYwrEhp/Face-Detector?node-id=37-2&t=Xq3KkavIJSaXbNuD-1",
      linkText: "Lihat Desain",
    },
    {
      title: "EduFarm Design System",
      image: "/assets/projects/uiedufarm.png",
      roles: ["UI/UX Designer"],
      desc: "Sistem desain lengkap untuk platform Edufarm (Web & Mobile).",
      tech: ["Figma", "Design System"],
      link: "https://www.figma.com/design/fgsYuyKJa7g2sksPnBDsuI/Design-Edufarm?node-id=2897-556&t=ixHqfh5Do3krgG3N-1",
      linkText: "Lihat Design",
    },
    {
      title: "Scholars Today Ui/UX Design",
      image: "/assets/projects/scholarstd.png",
      roles: ["UI/UX Designer"],
      desc: "Design lengkap untuk website placement test Scholars Today.",
      tech: ["Figma", "Design System"],
      link: "#https://www.figma.com/design/g0nmKNFkjNFSgc9pEqCrMs/Placement-Test_Scholars-Today?node-id=0-1&t=d1Aaa5ADRc7y2fur-1",
      linkText: "Lihat Design ",
    },
    {
      title: "Pijar Music UI/UX Design",
      image: "/assets/projects/Tiket.png",
      roles: ["UI/UX Designer"],
      desc: "Sistem desain lengkap untuk Webite Pembelian Tiket Konser music.",
      tech: ["Figma", "Design System"],
      link: "https://www.figma.com/design/e3kZt3pdWpBMEPHdb7sKvG/Design-Pijar-Music-Event?node-id=0-1&t=x1CLev2C6OdYRMlT-1",
      linkText: "Lihat Design ",
    },
  ];

  return <ProjectGrid projects={projects} />;
}