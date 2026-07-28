import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-start justify-center min-h-[85vh]">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
        <Terminal className="w-3.5 h-3.5" />
        <span>Backend & Systems Developer</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-100 max-w-2xl mb-6">
        Construyo arquitecturas robustas y código sin rodeos.
      </h1>

      <p className="text-lg text-zinc-400 max-w-xl mb-10 leading-relaxed">
        Especializado en el desarrollo de servicios backend, ecosistemas distribuidos y aplicaciones multiplataforma. Enfocado en rendimiento, escalabilidad y orden estructural.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <a 
          href="#projects"
          className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-950 font-medium px-5 py-2.5 rounded-lg hover:bg-zinc-200 transition-colors text-sm"
        >
          Ver proyectos
          <ArrowRight className="w-4 h-4" />
        </a>
        <a 
          href="mailto:hola@jmatias.dev"
          className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium px-5 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-100 transition-colors text-sm font-mono"
        >
          hola@jmatias.dev
        </a>
      </div>
    </section>
  );
}