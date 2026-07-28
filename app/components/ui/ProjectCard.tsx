import type { LucideIcon } from "lucide-react";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  link: string;
}

export default function ProjectCard({ title, description, tags, icon: Icon, link }: ProjectCardProps) {
  return (
    <article className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-lg bg-zinc-800/60 text-zinc-300 group-hover:text-emerald-400 transition-colors">
            <Icon className="w-5 h-5" />
          </div>
          <a href={link} className="text-zinc-500 hover:text-zinc-200 transition-colors">
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <h3 className="text-lg font-semibold text-zinc-100 mb-2">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-6">{description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/50">
        {tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
