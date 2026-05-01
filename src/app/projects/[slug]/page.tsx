import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} Case Study | Viky Fandreano`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-6 pb-20 pt-28 md:px-16">
        <div className="noise absolute inset-0 opacity-20" />
        <div className="absolute right-[-10%] top-20 h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <Link href="/#projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-black text-zinc-300 transition hover:border-orange-400 hover:text-orange-400">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">{project.category}</p>
              <h1 className="mt-5 text-6xl font-black leading-none md:text-8xl">{project.name}</h1>
              <p className="mt-7 max-w-3xl text-xl leading-9 text-zinc-300">{project.description}</p>
            </div>

            <aside className="rounded-[2rem] border border-white/10 bg-zinc-950 p-6 card-glow">
              <div className="grid gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">Role</p>
                  <p className="mt-2 text-lg font-black text-white">{project.role}</p>
                </div>
                {project.year && (
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">Period</p>
                    <p className="mt-2 text-lg font-black text-white">{project.year}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">Impact</p>
                  <p className="mt-2 text-lg font-black text-orange-400">{project.impact}</p>
                </div>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-full bg-orange-400 px-5 py-3 text-center font-black text-black transition hover:scale-[1.02] hover:bg-orange-300">
                    Open Live Project <ExternalLink className="ml-2 inline h-4 w-4" />
                  </a>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950/50 px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            ["Overview", project.overview],
            ["Challenge", project.challenge],
            ["Solution", project.solution],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[2rem] border border-white/10 bg-black/50 p-6">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-400">{title}</p>
              <p className="mt-5 leading-8 text-zinc-300">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">Tech Stack</p>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">Tools & responsibilities.</h2>
          </div>
          <div>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-sm font-bold text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-10 rounded-[2rem] border border-white/10 bg-zinc-950 p-6">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-orange-400">Results</p>
              <ul className="mt-5 grid gap-4">
                {project.results.map((result) => (
                  <li key={result} className="rounded-2xl bg-white/[.04] p-4 text-zinc-300">
                    <span className="mr-3 text-orange-400">✦</span>{result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-16">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-orange-400 p-8 text-black md:p-12">
          <h2 className="text-4xl font-black md:text-6xl">Need a product like this?</h2>
          <p className="mt-4 max-w-2xl text-lg font-semibold text-black/70">Let’s discuss mobile app development, Flutter improvement, MVP build, or a professional website that looks like it actually belongs in 2026.</p>
          <Link href="/#contact" className="mt-8 inline-block rounded-full bg-black px-6 py-4 font-black text-white transition hover:scale-105">
            Contact Viky
          </Link>
        </div>
      </section>
    </main>
  );
}
