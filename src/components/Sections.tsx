"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink, Link as LinkIcon, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { experiences, featuredProjects, profile, projects, skills } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

const sectionTitle = "text-4xl font-black leading-none tracking-[-.05em] md:text-7xl";

function ProjectVisual({ title, featured = false }: { title: string; featured?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-orange-400/20 via-zinc-900 to-black p-4">
      <div className="absolute right-[-30px] top-[-30px] h-32 w-32 rounded-full bg-orange-400/20 blur-2xl" />
      <div className="relative rounded-[1.1rem] border border-white/10 bg-black/45 p-4">
        <div className="mb-5 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-orange-400" />
          <span className="h-3 w-3 rounded-full bg-white/20" />
          <span className="h-3 w-3 rounded-full bg-white/20" />
        </div>
        <div className="grid gap-3">
          <div className="h-8 rounded-xl bg-white/10" />
          <div className="grid grid-cols-[.7fr_1fr] gap-3">
            <div className="h-24 rounded-xl bg-orange-400/25" />
            <div className="grid gap-3">
              <div className="h-6 rounded-xl bg-white/10" />
              <div className="h-6 rounded-xl bg-white/10" />
              <div className="h-6 rounded-xl bg-white/10" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="h-16 rounded-xl bg-white/[.06]" />
            <div className="h-16 rounded-xl bg-white/[.06]" />
            <div className="h-16 rounded-xl bg-white/[.06]" />
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="truncate text-sm font-black text-zinc-300">{title}</p>
          {featured && <span className="rounded-full bg-orange-400 px-3 py-1 text-[10px] font-black text-black">CASE</span>}
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-20 md:px-16 md:py-28">
      <Reveal>
        <p className="text-xs font-black uppercase tracking-[0.35em] text-orange-400 md:text-sm">About Me</p>
        <div className="mt-6 grid gap-9 lg:grid-cols-[.9fr_1.1fr]">
          <h2 className={sectionTitle}>Clean code. Smooth UX. Real business impact.</h2>
          <div>
            <p className="text-base leading-8 text-zinc-300 md:text-lg">{profile.about}</p>
            <div className="mt-8 flex flex-wrap gap-2 md:gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.025 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="rounded-full border border-white/10 bg-white/[.03] px-3 py-2 text-xs font-bold text-zinc-300 transition hover:border-orange-400 hover:text-orange-400 md:px-4 md:text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-y border-white/10 bg-zinc-950/50 px-5 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-orange-400 md:text-sm">Experience</p>
          <h2 className={`mt-5 ${sectionTitle}`}>Work Timeline</h2>
        </Reveal>
        <div className="relative mt-12 grid gap-4 before:absolute before:left-4 before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-orange-400/30 md:mt-14 md:before:block">
          {experiences.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -38 : 38 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative grid gap-4 rounded-3xl border border-white/10 bg-black/50 p-5 transition hover:border-orange-400/70 md:ml-12 md:grid-cols-[180px_1fr] md:p-6"
            >
              <span className="absolute -left-[3.25rem] top-8 hidden h-4 w-4 rounded-full border border-orange-400 bg-black shadow-[0_0_30px_rgba(251,146,60,.7)] md:block" />
              <p className="font-black text-orange-400">{item.year}</p>
              <div>
                <h3 className="text-2xl font-black transition group-hover:text-orange-400">{item.company}</h3>
                <p className="mt-2 text-zinc-400">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProjects() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.12, 0.72], [0, -90]);

  return (
    <section id="featured" className="relative overflow-hidden px-5 py-20 md:px-16 md:py-28">
      <motion.div style={{ x }} className="pointer-events-none absolute left-0 top-8 whitespace-nowrap text-[6rem] font-black uppercase leading-none text-white/[.035] md:text-[16rem]">
        Featured Work
      </motion.div>
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-orange-400 md:text-sm">Featured Project</p>
              <h2 className={`mt-5 ${sectionTitle}`}>Senior-level case studies.</h2>
            </div>
            <p className="max-w-md text-zinc-400">Strongest works: health tech, banking, marketplace, corporate website, interactive coffee shop website, and founder-led product. Singkatnya: bukan portfolio pajangan doang.</p>
          </div>
        </Reveal>

        <div className="hide-scrollbar mt-10 flex snap-x gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className="gradient-border card-glow group relative min-w-[86vw] snap-center overflow-hidden rounded-[2rem] bg-zinc-950 p-5 sm:min-w-[70vw] md:p-6 lg:min-w-0"
            >
              <div className="absolute right-[-90px] top-[-90px] h-56 w-56 rounded-full bg-orange-400/10 blur-3xl transition group-hover:bg-orange-400/25" />
              <div className="relative grid gap-6 xl:grid-cols-[.9fr_1.1fr] xl:items-center">
                <ProjectVisual title={project.name} featured />
                <div className="flex min-h-[280px] flex-col justify-between">
                  <div>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-black text-orange-300 md:text-sm">
                      <Sparkles className="h-4 w-4" /> Featured Case Study
                    </div>
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-400">{project.category}</p>
                    <h3 className="mt-3 text-3xl font-black md:text-5xl">{project.name}</h3>
                    <p className="mt-5 leading-8 text-zinc-400">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.slice(0, 5).map((tech) => (
                        <span key={tech} className="rounded-full bg-white/[.06] px-3 py-1 text-xs font-bold text-zinc-300">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link href={`/projects/${project.slug}`} className="inline-flex justify-center rounded-full bg-orange-400 px-5 py-3 font-black text-black transition hover:scale-105 hover:bg-orange-300">
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-full border border-white/15 px-5 py-3 font-black text-white transition hover:border-orange-400 hover:text-orange-400">
                        Live Website <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-20 md:px-16 md:py-28">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-orange-400 md:text-sm">Projects</p>
            <h2 className={`mt-5 ${sectionTitle}`}>All Selected Works</h2>
          </div>
          <p className="max-w-md text-zinc-400">Every card opens a detail page with case-study structure, mobile-friendly layout, scroll reveal, hover state, live links, and CTA. Udah lebih senior, bukan spreadsheet berkedok website.</p>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
            whileHover={{ y: -10, rotateX: 1.5, rotateY: -1.5 }}
            className="card-glow group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 p-5 md:p-6"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-500 opacity-0 transition group-hover:opacity-100" />
            <ProjectVisual title={project.name} />
            <p className="mt-6 text-xs font-black uppercase tracking-[0.28em] text-orange-400">{project.category}</p>
            <h3 className="mt-3 text-3xl font-black transition group-hover:text-orange-400">{project.name}</h3>
            <p className="mt-4 leading-7 text-zinc-400">{project.description}</p>
            <div className="mt-6 rounded-2xl bg-white/[.04] p-4 text-sm text-zinc-300">
              <strong className="text-white">Impact:</strong> {project.impact}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={`/projects/${project.slug}`} className="text-sm font-black text-orange-400 transition group-hover:tracking-wide">
                View Case Study →
              </Link>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-sm font-black text-zinc-300 transition hover:text-orange-400">
                  Live ↗
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="px-5 py-20 pb-36 md:px-16 md:py-28 lg:pb-28">
      <Reveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-orange-400 p-6 text-black md:rounded-[2.5rem] md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.35em] md:text-sm">Get In Touch</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-end">
            <div>
              <h2 className="text-4xl font-black leading-none tracking-[-.06em] md:text-8xl">Let’s build something solid.</h2>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-black/70 md:text-lg">Open for Flutter development, mobile app improvement, MVP build, corporate website, and product collaboration. Gaskeun, tapi tetap rapi.</p>
            </div>
            <div className="grid gap-3">
              <a className="flex items-center gap-3 rounded-2xl bg-black p-4 font-bold text-white transition hover:scale-[1.02]" href={`mailto:${profile.email}`}><Mail className="shrink-0 text-orange-400" /> <span className="break-all">{profile.email}</span></a>
              <a className="flex items-center gap-3 rounded-2xl bg-black p-4 font-bold text-white transition hover:scale-[1.02]" href={profile.linkedin}><LinkIcon className="shrink-0 text-orange-400" /> linkedin.com/in/vikyfand</a>
              <p className="flex items-center gap-3 rounded-2xl bg-black p-4 font-bold text-white"><LinkIcon className="shrink-0 text-orange-400" /> {profile.social}</p>
              <p className="flex items-center gap-3 rounded-2xl bg-black p-4 font-bold text-white"><Phone className="shrink-0 text-orange-400" /> {profile.phone}</p>
              <p className="flex items-center gap-3 rounded-2xl bg-black p-4 font-bold text-white"><MapPin className="shrink-0 text-orange-400" /> {profile.location}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
