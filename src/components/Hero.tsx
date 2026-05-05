"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, BadgeCheck, Code2, Smartphone } from "lucide-react";
import { profile, stats } from "@/data/portfolio";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 150]);
  const rotate = useTransform(scrollY, [0, 700], [0, -8]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 pb-20 pt-28 md:px-16 md:pt-36">
      <motion.div style={{ y }} className="absolute right-[-38%] top-24 h-[360px] w-[360px] rounded-full bg-orange-500/25 blur-3xl md:right-[-10%] md:h-[520px] md:w-[520px]" />
      <motion.div style={{ y: useTransform(scrollY, [0, 700], [0, -80]) }} className="absolute left-[-30%] top-[42%] h-[280px] w-[280px] rounded-full bg-white/10 blur-3xl md:left-[-12%]" />
      <div className="noise absolute inset-0 opacity-25" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-orange-300 md:text-sm">
            <BadgeCheck className="h-4 w-4" /> Mobile Developer Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .08 }}
            className="max-w-full text-[clamp(3rem,16vw,5.8rem)] font-black uppercase leading-[0.95] tracking-[-0.055em] sm:text-8xl sm:leading-[0.9] md:text-9xl xl:text-[10.5rem]"
          >
            Viky
            <br />
            <span className="text-orange-400">Fandreano</span>
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18 }} className="mt-6 text-2xl font-black text-orange-400 md:text-5xl">
            {profile.role}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .32 }} className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
            {profile.headline} {profile.about}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .44 }} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#featured" className="group inline-flex justify-center rounded-full bg-orange-400 px-6 py-4 font-black text-black transition hover:scale-105 hover:bg-orange-300">
              Explore Case Studies <ArrowDownRight className="ml-2 h-5 w-5 transition group-hover:rotate-45" />
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex justify-center rounded-full border border-white/20 px-6 py-4 font-black transition hover:border-orange-400 hover:text-orange-400">
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div style={{ rotate }} initial={{ opacity: 0, scale: .9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8 }} className="gradient-border card-glow relative rounded-[2rem] bg-zinc-950/80 p-4 md:rounded-[2.5rem] md:p-6">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="rounded-[1.6rem] bg-gradient-to-br from-zinc-900 via-black to-zinc-950 p-6 md:rounded-[2rem] md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="rounded-3xl bg-orange-400 p-4 text-black"><Smartphone className="h-9 w-9 md:h-12 md:w-12" /></div>
              <div className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs font-black text-zinc-300">Available</div>
            </div>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-zinc-500 md:mt-10">Focus Area</p>
            <h3 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Flutter Apps, Startup Products & Mobile UX</h3>
            <div className="mt-7 grid grid-cols-2 gap-3 md:gap-4">
              {stats.map((s, index) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: .55 + index * .08 }}
                  className="rounded-2xl border border-white/10 bg-white/[.035] p-4 transition hover:-translate-y-1 hover:border-orange-400/50"
                >
                  <p className="text-xl font-black text-orange-400 md:text-2xl">{s.value}</p>
                  <p className="mt-1 text-xs leading-5 text-zinc-400 md:text-sm">{s.label}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/50 p-4 text-sm text-zinc-300">
              <Code2 className="h-5 w-5 text-orange-400" /> Production-ready mindset, not just pretty UI.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
