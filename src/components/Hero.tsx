"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Smartphone } from "lucide-react";
import { profile, stats } from "@/data/portfolio";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 140]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pt-32 md:px-16">
      <motion.div style={{ y }} className="absolute right-[-10%] top-24 h-[440px] w-[440px] rounded-full bg-orange-500/20 blur-3xl" />
      <div className="noise absolute inset-0 opacity-25" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
        <div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-orange-400">
            Mobile Developer Portfolio
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="text-6xl font-black uppercase leading-[.9] md:text-8xl xl:text-9xl">
            Viky<br />Fandreano
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-6 text-2xl font-semibold text-orange-400 md:text-5xl">
            {profile.role}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }} className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
            {profile.headline} {profile.about}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 }} className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="group rounded-full bg-orange-400 px-6 py-4 font-black text-black transition hover:scale-105 hover:bg-orange-300">
              View Projects <ArrowDownRight className="ml-2 inline h-5 w-5 transition group-hover:rotate-45" />
            </a>
            <a href={`mailto:${profile.email}`} className="rounded-full border border-white/20 px-6 py-4 font-black transition hover:border-orange-400 hover:text-orange-400">
              Contact Me
            </a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .9, rotate: -4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .8 }} className="card-glow relative rounded-[2.5rem] border border-white/10 bg-zinc-950/80 p-6">
          <div className="rounded-[2rem] bg-gradient-to-br from-zinc-900 to-black p-8">
            <Smartphone className="h-14 w-14 text-orange-400" />
            <p className="mt-10 text-sm font-black uppercase tracking-[0.3em] text-zinc-500">Available for</p>
            <h3 className="mt-3 text-4xl font-black">Flutter Apps, Startup Products & Mobile UX</h3>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[.03] p-4">
                  <p className="text-2xl font-black text-orange-400">{s.value}</p>
                  <p className="mt-1 text-sm text-zinc-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
