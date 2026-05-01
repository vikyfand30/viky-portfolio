"use client";

import { motion } from "framer-motion";

const links = ["about", "experience", "featured", "projects", "contact"];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/#home" className="font-black tracking-tight">
          VIKY<span className="text-orange-400">.</span>
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link} href={`/#${link}`} className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-400 transition hover:text-orange-400">
              {link}
            </a>
          ))}
        </div>
        <a href="/#contact" className="rounded-full bg-orange-400 px-4 py-2 text-sm font-black text-black transition hover:scale-105 hover:bg-orange-300">
          Hire Me
        </a>
      </nav>
    </motion.header>
  );
}
