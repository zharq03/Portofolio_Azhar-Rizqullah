export default function Skills() {
  const skills = [
    { name: 'HTML & CSS', level: 'Beginner' },
    { name: 'React.js', level: 'Beginner' },
    { name: 'Tailwind CSS', level: 'Beginner' },
    { name: 'Figma / UI Design', level: 'Intermediate' },
    { name: 'Git & GitHub', level: 'Beginner' },
    { name: 'Responsive Design', level: 'Advanced' },
  ]

  return (
    <section id="keahlian" className="space-y-10">
      <h2 className="text-3xl font-bold text-center ">Keahlian</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <div key={i} className="card text-center">
            <h3 className="text-xl font-semibold text-accent-red mb-3">{skill.name}</h3>
            <p className="">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  )
}