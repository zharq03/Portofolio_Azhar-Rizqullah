export default function ProjectGrid({ projects }) {
  return (
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-6 md:p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-red-500 transition-colors">
              {proj.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-5">
              {proj.roles.map((role, i) => (
                <span key={i} className="px-3 py-1 text-xs rounded-full border border-zinc-700 text-gray-300">
                  {role}
                </span>
              ))}
            </div>

            <p className="text-base leading-relaxed text-gray-300 mb-6 flex-grow">
              {proj.desc}
            </p>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-xs rounded-full border border-zinc-700 text-gray-400">
                    {t}
                  </span>
                ))}
              </div>

              {proj.link && proj.link !== "#" && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-medium transition-colors"
                >
                  {proj.linkText} →
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}