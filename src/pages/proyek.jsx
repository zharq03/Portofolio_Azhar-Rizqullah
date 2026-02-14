export default function ProyekPage() {
  const projects = [
    {
      title: 'Portfolio Website Dark Mode',
      desc: 'Website portfolio modern dengan dark mode, multi-page, dan animasi smooth.',
      image: '/assets/projects/portfolio.png',
      tech: ['Next.js', 'Tailwind', 'Framer Motion'],
      github: 'https://github.com/...',
      live: 'https://azharrizqullah.my.id',
    },
    // tambahkan proyek lain di sini
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-6xl font-bold text-center mb-3">My Projects</h1>
      <p className="text-center  mb-16 text-xl">Beberapa proyek terbaik yang pernah saya kerjakan</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <div key={i} className="group  rounded-3xl overflow-hidden hover:scale-[1.02] transition">
            <img src={proj.image} className="w-full h-64 object-cover" alt={proj.title} />
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3">{proj.title}</h3>
              <p className=" mb-6 line-clamp-3">{proj.desc}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {proj.tech.map((t) => (
                  <span key={t} className="px-4 py-1  text-xs rounded-full ">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 text-sm">
                <a href={proj.github} target="_blank" className="hover:text-accent-red flex items-center gap-2">
                  <span>GitHub</span> →
                </a>
                <a href={proj.live} target="_blank" className="hover:text-accent-red flex items-center gap-2">
                  Live Demo →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}