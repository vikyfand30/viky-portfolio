import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About, Contact, Experience, FeaturedProjects, Projects } from "@/components/Sections";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 Viky Fandreano. Built with Next.js, Tailwind CSS & Framer Motion.
      </footer>
    </main>
  );
}
