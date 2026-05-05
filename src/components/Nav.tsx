"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Home, Mail, Menu, User, X, Zap } from "lucide-react";

const links = [
  { label: "Home", href: "/#home", icon: Home },
  { label: "About", href: "/#about", icon: User },
  { label: "Featured", href: "/#featured", icon: Zap },
  { label: "Projects", href: "/#projects", icon: Briefcase },
  { label: "Contact", href: "/#contact", icon: Mail },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-6 md:py-4">
          <a href="/#home" className="group flex items-center gap-2 font-black tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-orange-400 text-black transition group-hover:rotate-6">VF</span>
            <span className="hidden sm:inline">VIKY<span className="text-orange-400">.</span></span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {links.slice(1).map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-400 transition hover:text-orange-400">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="/#contact" className="hidden rounded-full bg-orange-400 px-4 py-2 text-sm font-black text-black transition hover:scale-105 hover:bg-orange-300 sm:inline-flex">
              Hire Me
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((value) => !value)}
              className="rounded-full border border-white/10 bg-white/[.04] p-3 text-white lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-x-4 top-20 z-40 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-4 py-4 font-black text-zinc-200 transition hover:bg-orange-400 hover:text-black"
                >
                  <Icon className="h-5 w-5" /> {link.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="mobile-safe-bottom fixed inset-x-3 bottom-0 z-50 rounded-t-[1.75rem] border border-white/10 bg-black/80 p-2 backdrop-blur-xl lg:hidden">
        <div className="grid grid-cols-5 gap-1">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.href} href={link.href} className="flex flex-col items-center justify-center rounded-2xl px-2 py-2 text-[10px] font-black text-zinc-400 transition active:scale-95 hover:bg-white/[.06] hover:text-orange-400">
                <Icon className="mb-1 h-4 w-4" /> {link.label}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
