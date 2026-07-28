const skillCategories = [
  {
    title: "Backend & Core",
    skills: ["Java", "Spring Boot", "Quarkus", "Kotlin", "Node.js"]
  },
  {
    title: "Frontend & Mobile",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Jetpack Compose"]
  },
  {
    title: "Infraestructura & Datos",
    skills: ["Docker", "Linux", "MySQL", "PostgreSQL", "RabbitMQ", "Git"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto border-t border-zinc-900">
      <div className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-2">Stack Tecnológico</h2>
        <p className="text-sm text-zinc-400">Herramientas y tecnologías con las que muevo los datos y levanto infraestructura.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-zinc-950 border border-zinc-900 rounded-xl p-6">
            <h3 className="text-sm font-mono font-semibold text-emerald-400 uppercase tracking-wider mb-4">
              // {category.title}
            </h3>
            <ul className="space-y-2.5">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="text-sm text-zinc-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}