"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, ExternalLink, Link as LinkIcon, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { experiences, featuredProjects, profile, projects, skills } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

const sectionTitle = "text-5xl font-black leading-none md:text-7xl";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-24 md:px-16">
      <Reveal>
        <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">About Me</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <h2 className={sectionTitle}>Clean code. Smooth UX. Real business impact.</h2>
          <div>
            <p className="text-lg leading-8 text-zinc-300">{profile.about}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.025 }}
                  className="rounded-full border border-white/10 bg-white/[.03] px-4 py-2 text-sm font-bold text-zinc-300 transition hover:border-orange-400 hover:text-orange-400"
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
    <section id="experience" className="border-y border-white/10 bg-zinc-950/50 px-6 py-24 md:px-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">Experience</p>
          <h2 className={`mt-5 ${sectionTitle}`}>Work Timeline</h2>
        </Reveal>
        <div className="relative mt-14 grid gap-5 before:absolute before:left-4 before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-orange-400/30 md:before:block">
          {experiences.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -38 : 38 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="group relative grid gap-4 rounded-3xl border border-white/10 bg-black/50 p-6 transition hover:border-orange-400/70 md:ml-12 md:grid-cols-[180px_1fr]"
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
  const x = useTransform(scrollYProgress, [0.15, 0.75], [0, -70]);

  return (
    <section id="featured" className="relative overflow-hidden px-6 py-24 md:px-16">
      <motion.div style={{ x }} className="pointer-events-none absolute left-0 top-10 whitespace-nowrap text-[10rem] font-black uppercase leading-none text-white/[.03] md:text-[16rem]">
        Featured Work
      </motion.div>
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">Featured Project</p>
              <h2 className={`mt-5 ${sectionTitle}`}>Senior-level case studies.</h2>
            </div>
            <p className="max-w-md text-zinc-400">A curated set of the strongest projects: real products, production website, health tech, banking, marketplace, and product leadership.</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 p-6 card-glow"
            >
              <div className="absolute right-[-90px] top-[-90px] h-56 w-56 rounded-full bg-orange-400/10 blur-3xl transition group-hover:bg-orange-400/20" />
              <div className="relative flex min-h-[320px] flex-col justify-between">
                <div>
                  <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-black text-orange-300">
                    <Sparkles className="h-4 w-4" /> Featured Case Study
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-400">{project.category}</p>
                  <h3 className="mt-3 text-4xl font-black md:text-5xl">{project.name}</h3>
                  <p className="mt-5 leading-8 text-zinc-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span key={tech} className="rounded-full bg-white/[.06] px-3 py-1 text-xs font-bold text-zinc-300">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={`/projects/${project.slug}`} className="rounded-full bg-orange-400 px-5 py-3 font-black text-black transition hover:scale-105 hover:bg-orange-300">
                    Read Case Study <ArrowRight className="ml-2 inline h-4 w-4" />
                  </Link>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-3 font-black text-white transition hover:border-orange-400 hover:text-orange-400">
                      Live Website <ExternalLink className="ml-2 inline h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:px-16">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">Projects</p>
            <h2 className={`mt-5 ${sectionTitle}`}>All Selected Works</h2>
          </div>
          <p className="max-w-md text-zinc-400">Every card opens a detail page, so this portfolio feels like a product case-study website — bukan cuma gallery tempelan.</p>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
            whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 p-6 card-glow"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-500 opacity-0 transition group-hover:opacity-100" />
            <div className="mb-8 flex h-44 items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-orange-400/25 via-zinc-900 to-black">
              <Code2 className="h-16 w-16 text-orange-400 transition group-hover:scale-110" />
            </div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-400">{project.category}</p>
            <h3 className="mt-3 text-3xl font-black">{project.name}</h3>
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
    <section id="contact" className="px-6 py-24 md:px-16">
      <Reveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-orange-400 p-8 text-black md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.35em]">Get In Touch</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-end">
            <div>
              <h2 className="text-5xl font-black leading-none md:text-8xl">Let’s build something solid.</h2>
              <p className="mt-6 max-w-2xl text-lg font-semibold text-black/70">Open for Flutter development, mobile app improvement, MVP build, corporate website, and product collaboration. Gaskeun, tapi tetap rapi.</p>
            </div>
            <div className="grid gap-3">
              <a className="flex items-center gap-3 rounded-2xl bg-black p-4 font-bold text-white transition hover:scale-[1.02]" href={`mailto:${profile.email}`}><Mail className="text-orange-400" /> {profile.email}</a>
              <a className="flex items-center gap-3 rounded-2xl bg-black p-4 font-bold text-white transition hover:scale-[1.02]" href={profile.linkedin}><LinkIcon className="text-orange-400" /> linkedin.com/in/vikyfand</a>
              <p className="flex items-center gap-3 rounded-2xl bg-black p-4 font-bold text-white"><LinkIcon className="text-orange-400" /> {profile.social}</p>
              <p className="flex items-center gap-3 rounded-2xl bg-black p-4 font-bold text-white"><Phone className="text-orange-400" /> {profile.phone}</p>
              <p className="flex items-center gap-3 rounded-2xl bg-black p-4 font-bold text-white"><MapPin className="text-orange-400" /> {profile.location}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
