export default function Projects() {
  const projects = [
    {
      title: 'Placements Test Scholars Today',
      tech: 'React.js • Tailwind CSS',
      link: 'https://scholarstoday.id/',
      image: '/assets/images/schtdy.png',
    },
    {
      title: 'FaceDX',
      tech: 'Figma • Kotlin (mobile)',
      link: 'https://github.com/RivalRasyid/mobile-app-dev/releases/download/FaceDXv2/FaceDX.V2.apk',
      image: '/assets/images/FaceDX.png',
    },
    // tambahkan project lain sesuai kebutuhan
  ]

  return (
    <section id="portofolio" className="space-y-10">
      <h2 className="text-3xl font-bold text-center ">Portofolio</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <div key={i} className="card overflow-hidden group">
            {proj.image && (
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className=" mb-4">{proj.tech}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-red hover:underline font-medium"
              >
                Lihat Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}