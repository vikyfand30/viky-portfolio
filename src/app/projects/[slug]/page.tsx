import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Rocket } from "lucide-react";
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

function BrowserMockup({ name }: { name: string }) {
  return (
    <div className="gradient-border card-glow overflow-hidden rounded-[2rem] bg-zinc-950 p-4">
      <div className="rounded-[1.4rem] border border-white/10 bg-black/60 p-4">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-orange-400" />
            <span className="h-3 w-3 rounded-full bg-white/20" />
            <span className="h-3 w-3 rounded-full bg-white/20" />
          </div>
          <span className="rounded-full bg-white/[.06] px-3 py-1 text-xs font-black text-zinc-400">Case Study</span>
        </div>
        <div className="grid gap-4 md:grid-cols-[.8fr_1.2fr]">
          <div className="rounded-2xl bg-orange-400/20 p-5">
            <Rocket className="h-10 w-10 text-orange-400" />
            <p className="mt-16 text-2xl font-black">{name}</p>
          </div>
          <div className="grid gap-3">
            <div className="h-10 rounded-2xl bg-white/10" />
            <div className="h-24 rounded-2xl bg-white/[.06]" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-20 rounded-2xl bg-white/[.06]" />
              <div className="h-20 rounded-2xl bg-white/[.06]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-5 pb-16 pt-24 md:px-16 md:pb-20 md:pt-28">
        <div className="noise absolute inset-0 opacity-20" />
        <div className="absolute right-[-35%] top-20 h-[360px] w-[360px] rounded-full bg-orange-500/20 blur-3xl md:right-[-10%] md:h-[460px] md:w-[460px]" />

        <div className="relative mx-auto max-w-6xl">
          <Link href="/#projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-black text-zinc-300 transition hover:border-orange-400 hover:text-orange-400">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-orange-400 md:text-sm">{project.category}</p>
              <h1 className="mt-5 break-words text-[clamp(3rem,13vw,5.6rem)] font-black leading-[0.95] tracking-[-.055em] md:text-8xl md:leading-[.9]">{project.name}</h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-300 md:text-xl md:leading-9">{project.description}</p>
            </div>

            <aside className="rounded-[2rem] border border-white/10 bg-zinc-950 p-5 card-glow md:p-6">
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
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-full bg-orange-400 px-5 py-3 text-center font-black text-black transition hover:scale-[1.02] hover:bg-orange-300">
                    Open Live Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                )}
              </div>
            </aside>
          </div>

          <div className="mt-10">
            <BrowserMockup name={project.name} />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950/50 px-5 py-16 md:px-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {[
            ["Overview", project.overview],
            ["Challenge", project.challenge],
            ["Solution", project.solution],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[2rem] border border-white/10 bg-black/50 p-5 md:p-6">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-400 md:text-sm">{title}</p>
              <p className="mt-5 leading-8 text-zinc-300">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:px-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-orange-400 md:text-sm">Tech Stack</p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-.05em] md:text-6xl">Tools & responsibilities.</h2>
          </div>
          <div>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-sm font-bold text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-10 rounded-[2rem] border border-white/10 bg-zinc-950 p-5 md:p-6">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-400 md:text-sm">Results</p>
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

      <section className="px-5 pb-16 md:px-16 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-orange-400 md:text-sm">More Case Studies</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[previousProject, nextProject].map((item, index) => (
              <Link
                key={`${item.slug}-${index}`}
                href={`/projects/${item.slug}`}
                className="group rounded-[2rem] border border-white/10 bg-zinc-950 p-5 transition hover:-translate-y-1 hover:border-orange-400/70 md:p-6"
              >
                <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">{index === 0 ? "Previous" : "Next"}</p>
                <h3 className="mt-3 text-2xl font-black transition group-hover:text-orange-400 md:text-3xl">{item.name}</h3>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-400">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-16 md:pb-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-orange-400 p-6 text-black md:rounded-[2.5rem] md:p-12">
          <h2 className="text-4xl font-black leading-none tracking-[-.05em] md:text-6xl">Need a product like this?</h2>
          <p className="mt-4 max-w-2xl text-base font-semibold leading-8 text-black/70 md:text-lg">Let’s discuss mobile app development, Flutter improvement, MVP build, or a professional website that looks like it actually belongs in 2026.</p>
          <Link href="/#contact" className="mt-8 inline-block rounded-full bg-black px-6 py-4 font-black text-white transition hover:scale-105">
            Contact Viky
          </Link>
        </div>
      </section>
    </main>
  );
}
