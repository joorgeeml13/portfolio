import { GitBranch, Server, Smartphone, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Synapse Ecosystem",
    description: "Ecosistema de microservicios backend utilizando Quarkus, Spring Cloud Gateway, RabbitMQ y bases de datos MySQL para procesamiento distribuido.",
    tags: ["Quarkus", "Spring Cloud", "RabbitMQ", "MySQL"],
    icon: Server,
    link: "#"
  },
  {
    title: "MySound",
    description: "Aplicación móvil de streaming de audio inspirada en plataformas comerciales, desarrollada con Jetpack Compose, Spring Boot, Media3/ExoPlayer y autenticación JWT.",
    tags: ["Kotlin", "Jetpack Compose", "Spring Boot", "JWT"],
    icon: Smartphone,
    link: "#"
  },
  {
    title: "CloutDesk / Corporate Inventory",
    description: "Plataformas de gestión de datos y control de inventarios corporativos con paneles dinámicos, control de accesos y persistencia optimizada.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    icon: GitBranch,
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto border-t border-zinc-900">
      <div className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-2">Proyectos Destacados</h2>
        <p className="text-sm text-zinc-400">Sistemas y aplicaciones diseñados con foco en arquitectura y rendimiento.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <div 
              key={index}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-zinc-800/60 text-zinc-300 group-hover:text-emerald-400 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <a href={project.link} className="text-zinc-500 hover:text-zinc-200 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">{project.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/50">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}