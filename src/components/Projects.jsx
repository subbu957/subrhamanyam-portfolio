import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react'
import { projects, profile } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Web App', 'AI / Python']
  const displayedProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-violet-dim/15 blur-[130px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-azure-dim/15 blur-[130px]" />

      <SectionHeading
        kicker="Featured Projects"
        title="Real Projects Built &amp; Deployed"
        description="A showcase of functional front-end applications, real-time calculations, and AI workflows."
      />

      {/* Filter tabs */}
      <div className="mb-8 sm:mb-10 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = filter === cat
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 focus-ring ${
                isActive
                  ? 'text-white shadow-glow'
                  : 'glass-pill text-slate-300 hover:text-white hover:bg-white/[0.1] border-white/15'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeProjectFilter"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-dim to-azure-dim -z-10 shadow-glow"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              {cat}
            </button>
          )
        })}
      </div>

      <motion.div layout className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, i) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel group relative flex flex-col justify-between overflow-hidden rounded-[1.8rem] sm:rounded-3xl p-1 border-white/15 transition-all duration-300 hover:border-violet/60 hover:shadow-glow-card"
            >
              {/* Top Frosted Browser mockup bar */}
              <div className="flex items-center justify-between border-b border-white/[0.1] bg-[#0A0E1F]/90 backdrop-blur-xl px-4 sm:px-5 py-3 rounded-t-[1.5rem] sm:rounded-t-[1.6rem]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald/90" />
                  <span className="ml-2 text-xs text-slate-300 font-mono font-medium truncate max-w-[130px] sm:max-w-[220px]">
                    {project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.dev
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {project.year && (
                    <span className="text-[11px] text-slate-400 font-mono">{project.year}</span>
                  )}
                  <span className="inline-flex items-center rounded-full border border-violet-dim/40 bg-violet-dim/20 px-2.5 py-0.5 text-xs font-bold text-violet">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-7">
                <h3 className="font-display text-lg sm:text-xl font-extrabold text-white group-hover:text-azure transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-200 font-normal">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <div className="mt-4 space-y-2 border-l-2 border-violet-dim/40 pl-3">
                    {project.highlights.map((h, idx) => (
                      <p key={idx} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2 font-normal leading-relaxed">
                        <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </p>
                    ))}
                  </div>
                )}

                {/* Tech stack pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="glass-pill rounded-lg px-2.5 py-1 text-xs font-bold text-slate-200 border-white/15 hover:border-violet/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/[0.1] pt-4 sm:pt-5">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-dim to-azure-dim hover:from-violet hover:to-azure px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 focus-ring"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-pill inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-bold text-slate-200 border-white/15 transition-all hover:border-violet/60 hover:bg-violet-dim/20 hover:text-white focus-ring"
                  >
                    <Github size={14} />
                    View Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* GitHub CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="glass-panel mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 rounded-3xl p-5 sm:p-7 border-white/15 hover:border-violet/50"
      >
        <div className="flex items-center gap-3.5 sm:gap-4 text-left w-full sm:w-auto">
          <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/15 text-azure shadow-sm">
            <Github size={24} />
          </div>
          <div>
            <h4 className="font-display text-base sm:text-lg font-bold text-white">Explore More Repositories</h4>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">Check out my latest code commits, experiments, and open source repositories.</p>
          </div>
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="glass-pill w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold text-white border-white/20 transition-all hover:border-azure/60 hover:bg-azure-dim/20 focus-ring"
        >
          <span>Visit @{profile.githubUser}</span>
          <ExternalLink size={14} />
        </a>
      </motion.div>
    </section>
  )
}
