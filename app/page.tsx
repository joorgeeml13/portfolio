import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Projects from "./components/layout/Projects";
import Skills from "./components/layout/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}