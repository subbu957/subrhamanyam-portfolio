import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, Sparkles, Code2, MapPin, FileText, Phone } from 'lucide-react'
import { profile } from '../data/portfolioData'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative flex min-h-[92vh] sm:min-h-screen items-center overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
      {/* Dynamic ambient backdrop glowing orbs */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40 [mask-image:radial-gradient(ellipse_75%_75%_at_50%_35%,black,transparent)]" />
      
      <motion.div
        className="pointer-events-none absolute -left-32 sm:-left-48 top-12 h-[340px] sm:h-[540px] w-[340px] sm:w-[540px] rounded-full bg-violet-dim/20 blur-[110px] sm:blur-[140px]"
        animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-28 sm:-right-40 top-1/4 h-[320px] sm:h-[500px] w-[320px] sm:w-[500px] rounded-full bg-azure-dim/20 blur-[110px] sm:blur-[140px]"
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="text-left">
          {/* Status pill with pulse */}
          <motion.div variants={item} className="mb-5 sm:mb-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="glass-pill inline-flex items-center gap-2 rounded-full border border-emerald/50 bg-emerald/15 px-3.5 py-1.5 text-xs font-bold text-emerald-light shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-light opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-light" />
              </span>
              {profile.badge}
            </span>
            <span className="glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-slate-300 font-medium">
              <MapPin size={13} className="text-azure" />
              {profile.location.split(',')[0]}, India
            </span>
          </motion.div>

          <motion.h1 variants={item} className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] pb-1">
            Hi, I&rsquo;m <br />
            <span className="text-gradient inline-block pb-1 font-extrabold">{profile.name}</span>
          </motion.h1>

          {/* Animated role cycler */}
          <motion.div variants={item} className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 text-lg sm:text-2xl font-semibold">
            <span className="text-slate-200">I build as a</span>
            <div className="relative h-8 sm:h-9 overflow-hidden inline-flex items-center min-w-[240px] sm:min-w-[340px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="absolute left-0 font-body font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet via-azure to-cyan-300 whitespace-nowrap"
                >
                  {profile.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.p variants={item} className="mt-4 sm:mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-200 font-normal">
            {profile.summary}
          </motion.p>

          {/* Call to action buttons */}
          <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 relative z-20">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-dim to-azure-dim hover:from-violet-glow hover:to-azure px-6 py-3.5 sm:py-3 text-sm font-bold text-white shadow-glow transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-ring"
            >
              <span>Explore My Work</span>
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <button
              onClick={onOpenResume}
              className="glass-pill inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 sm:py-3 text-sm font-bold text-white transition-all duration-200 hover:border-violet/60 hover:bg-violet-dim/20 active:scale-[0.98] focus-ring"
            >
              <FileText size={15} className="text-violet" />
              <span>View Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-slate-300 transition-colors hover:text-white focus-ring"
            >
              Contact Me &rarr;
            </a>
          </motion.div>

          {/* Social links & direct contact icons */}
          <motion.div variants={item} className="mt-8 sm:mt-10 flex items-center gap-4 flex-wrap">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-bold">Connect:</span>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="glass-pill flex h-9 w-9 items-center justify-center rounded-xl text-slate-200 transition-all hover:border-violet/60 hover:text-white hover:bg-violet-dim/20 focus-ring"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="glass-pill flex h-9 w-9 items-center justify-center rounded-xl text-slate-200 transition-all hover:border-azure/60 hover:text-white hover:bg-azure-dim/20 focus-ring"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send Email"
                className="glass-pill flex h-9 w-9 items-center justify-center rounded-xl text-slate-200 transition-all hover:border-violet/60 hover:text-white hover:bg-violet-dim/20 focus-ring"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                aria-label="Call Phone"
                className="glass-pill flex h-9 w-9 items-center justify-center rounded-xl text-slate-200 transition-all hover:border-emerald/60 hover:text-emerald-light hover:bg-emerald/20 focus-ring"
              >
                <Phone size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Visual Card with dynamic halo and floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-[310px] sm:max-w-sm lg:max-w-md mt-6 lg:mt-0"
        >
          {/* Ambient Glowing Halo */}
          <div className="absolute -inset-4 rounded-[2.8rem] bg-gradient-to-br from-violet-dim/40 via-azure-dim/30 to-cyan-500/20 blur-3xl opacity-70 animate-pulse-glow" />
          
          {/* Glass frame */}
          <div className="glass-panel relative aspect-square w-full rounded-[2.4rem] sm:rounded-[2.8rem] p-3 sm:p-3.5 shadow-2xl transition-all duration-500 hover:border-violet/50">
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] sm:rounded-[2.3rem] border border-white/15">
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-full w-full object-cover grayscale-[3%] contrast-[1.05] transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070913]/90 via-transparent to-violet-dim/15" />
            </div>
          </div>

          {/* Floating Glass Pill 1 */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass-pill absolute -top-3 -left-3 sm:-top-4 sm:-left-4 flex items-center gap-2.5 rounded-2xl px-3.5 py-2 shadow-lg backdrop-blur-xl border-white/20 animate-float-slow"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-violet-dim/30 text-violet">
              <Sparkles size={14} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">AI + Web Dev</p>
              <p className="text-[10px] text-slate-300 font-medium">Modern Tech</p>
            </div>
          </motion.div>

          {/* Floating Glass Pill 2 */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="glass-pill absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-4 flex items-center gap-2.5 rounded-2xl px-3.5 py-2 shadow-lg backdrop-blur-xl border-white/20 animate-float-delayed"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-azure-dim/30 text-azure">
              <Code2 size={14} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Front-End UI</p>
              <p className="text-[10px] text-slate-300 font-medium">HTML • CSS • JS</p>
            </div>
          </motion.div>

          {/* Floating Glass Pill 3 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glass-pill absolute -bottom-5 -right-2 sm:-bottom-6 sm:-right-4 rounded-2xl px-4 py-2.5 shadow-xl backdrop-blur-xl border-white/20"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-azure animate-pulse" />
              <p className="font-display text-xs sm:text-sm font-bold text-white">B.Tech AI &amp; ML</p>
            </div>
            <p className="text-[11px] text-slate-300 font-medium">Narayana Eng. &bull; 2027</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
