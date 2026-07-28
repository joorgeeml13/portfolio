import { GitBranch, Server, Smartphone } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "Synapse Ecosystem",
    description: "Ecosistema de microservicios backend utilizando Quarkus, Spring Cloud Gateway, RabbitMQ y bases de datos MySQL para procesamiento distribuido.",
    tags: ["Quarkus", "Spring Cloud", "RabbitMQ", "MySQL"],
    icon: Server,
    link: "https://github.com/orgs/SynapseDevTeam/repositories"
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
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            icon={project.icon}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}