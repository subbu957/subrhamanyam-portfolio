import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, Download, Sparkles, Code2, MapPin } from 'lucide-react'
import { profile } from '../data/portfolioData'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative flex min-h-[90vh] sm:min-h-screen items-center overflow-hidden pt-24 sm:pt-28 pb-16">
      {/* Dynamic ambient glass backdrop glowing orbs */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-35 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,black,transparent)]" />
      
      <motion.div
        className="pointer-events-none absolute -left-32 sm:-left-48 top-16 h-[320px] sm:h-[500px] w-[320px] sm:w-[500px] rounded-full bg-violet/20 blur-[100px] sm:blur-[130px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-28 sm:-right-40 top-1/4 h-[300px] sm:h-[460px] w-[300px] sm:w-[460px] rounded-full bg-azure/20 blur-[100px] sm:blur-[140px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="text-left">
          {/* Glass status pill */}
          <motion.div variants={item} className="mb-5 sm:mb-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="glass-pill inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/20 px-3 py-1.5 text-xs font-bold text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.badge}
            </span>
            <span className="glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-white font-medium">
              <MapPin size={13} className="text-violet" />
              {profile.location.split(',')[0]}, India
            </span>
          </motion.div>

          <motion.h1 variants={item} className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.2] pb-1">
            Hi, I&rsquo;m <br />
            <span className="text-gradient inline-block pb-2 leading-tight font-extrabold">{profile.name}</span>
          </motion.h1>

          {/* Animated role cycler with clear typography and no clipping */}
          <motion.div variants={item} className="mt-2 sm:mt-3 flex flex-wrap items-center gap-2 text-lg sm:text-2xl font-semibold">
            <span className="text-white">I build as a</span>
            <div className="relative h-8 sm:h-9 overflow-hidden inline-flex items-center min-w-[220px] sm:min-w-[320px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="absolute left-0 font-body font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet via-azure to-bloom whitespace-nowrap"
                >
                  {profile.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Pure crisp white bio text */}
          <motion.p variants={item} className="mt-4 sm:mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-white font-normal">
            {profile.summary}
          </motion.p>

          {/* Call to action buttons */}
          <motion.div variants={item} className="mt-7 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 relative z-20">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-dim to-azure-dim hover:from-violet hover:to-azure px-6 py-3.5 sm:py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.02] active:scale-[0.98] focus-ring"
            >
              <span>Explore My Work</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="glass-pill inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 sm:py-3 text-sm font-bold text-white transition-all hover:border-violet/60 hover:bg-violet/20 active:scale-[0.98] focus-ring"
            >
              <Download size={15} className="text-violet" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white transition-colors hover:text-violet focus-ring"
            >
              Contact Me &rarr;
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="mt-8 sm:mt-9 flex items-center gap-4">
            <span className="text-xs text-white uppercase tracking-wider font-bold">Connect:</span>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="glass-pill flex h-9 w-9 items-center justify-center rounded-xl text-white transition-all hover:border-violet/60 hover:text-white hover:bg-violet/20 focus-ring"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="glass-pill flex h-9 w-9 items-center justify-center rounded-xl text-white transition-all hover:border-azure/60 hover:text-white hover:bg-azure/20 focus-ring"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send Email"
                className="glass-pill flex h-9 w-9 items-center justify-center rounded-xl text-white transition-all hover:border-bloom/60 hover:text-white hover:bg-bloom/20 focus-ring"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Visual Card with Frosted Glass Layering */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-[300px] sm:max-w-sm lg:max-w-md mt-4 lg:mt-0"
        >
          {/* Ambient Glowing Halo */}
          <div className="absolute -inset-3 sm:-inset-4 rounded-[2.5rem] bg-gradient-to-br from-violet/40 via-azure/25 to-bloom/25 blur-2xl opacity-75" />
          
          {/* Glass frame */}
          <div className="glass-panel relative aspect-square w-full rounded-[2.2rem] sm:rounded-[2.6rem] p-2.5 sm:p-3 shadow-2xl transition-all duration-500 hover:scale-[1.01]">
            <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] sm:rounded-[2.1rem] border border-white/20">
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-full w-full object-cover grayscale-[5%] contrast-[1.06] transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-transparent to-violet/15" />
            </div>
          </div>

          {/* Floating Glass Pill 1 */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass-pill absolute -top-3 -left-3 sm:-top-4 sm:-left-4 flex items-center gap-2 rounded-2xl px-3 py-2 shadow-lg"
          >
            <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg bg-violet/25 text-violet">
              <Sparkles size={14} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">AI + Web Dev</p>
              <p className="text-[10px] text-white/90 font-medium">Modern Stack</p>
            </div>
          </motion.div>

          {/* Floating Glass Pill 2 */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="glass-pill absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-4 flex items-center gap-2 rounded-2xl px-3 py-2 shadow-lg"
          >
            <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg bg-azure/25 text-azure">
              <Code2 size={14} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">React &amp; JS</p>
              <p className="text-[10px] text-white/90 font-medium">Responsive UI</p>
            </div>
          </motion.div>

          {/* Floating Glass Pill 3 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glass-pill absolute -bottom-5 -right-2 sm:-bottom-6 sm:-right-4 rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-xl"
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="h-2 w-2 rounded-full bg-azure animate-pulse" />
              <p className="font-display text-xs sm:text-sm font-bold text-white">B.Tech AI &amp; ML</p>
            </div>
            <p className="text-[11px] text-white/90 font-medium">Narayana Eng. &bull; 2027</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
