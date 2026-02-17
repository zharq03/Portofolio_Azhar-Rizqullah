export default function ProyekPage() {
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
      title: "FaceDX – Aplikasi Perawatan Wajah Berbasis AI",
      image: "/assets/projects/FaceDX.png",
      roles: ["Deep Learning Developer", "Chatbot Developer", "Desainer UI/UX"],
      desc: "Merancang dan mengembangkan aplikasi perawatan wajah berbasis deep learning dengan asisten kecantikan berupa chatbot. Menggunakan model MobileNet untuk deteksi kondisi kulit.",
      tech: ["Figma", "Flowise", "Kotlin", "MobileNet"],
      link: "https://github.com/RivalRasyid/mobile-app-dev/releases/download/FaceDXv2/FaceDX.V2.apk",
      linkText: "Download APK",
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

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 tracking-tight">
        My Projects
      </h1>
      <p className="text-center mb-16 md:mb-20 text-lg md:text-xl">
        Beberapa proyek terbaik yang pernah saya kerjakan dan banggakan
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="group border border-zinc-800/50 rounded-3xl overflow-hidden hover:border-red-600/50 hover:shadow-xl hover:shadow-red-900/10 transition-all duration-300 flex flex-col h-full"
          >
            <div className="relative overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-red-500 transition-colors">
                {proj.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-5">
                {proj.roles.map((role, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full  border border-zinc-700"
                  >
                    {role}
                  </span>
                ))}
              </div>

              {/* Deskripsi dengan expand on hover */}
              <div className="relative mb-6 overflow-hidden transition-all duration-500 group-hover:max-h-[200px] max-h-24">
                <p className=" text-base leading-relaxed">
                  {proj.desc}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full border border-zinc-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-medium transition-colors"
                  >
                    {proj.linkText || "Kunjungi Project"} →
                  </a>
                )}

                {proj.extraLink && (
                  <div className="mt-3">
                    <a
                      href={proj.extraLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-gray-300 text-sm transition-colors"
                    >
                      {proj.extraLinkText || "Lihat Demo Lain"} →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}