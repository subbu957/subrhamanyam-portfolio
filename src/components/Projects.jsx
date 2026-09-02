import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects, profile } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Web App', 'AI / Python']
  const displayedProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
      {/* Background glass lighting */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-violet/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-azure/20 blur-[120px]" />

      <SectionHeading
        kicker="Featured Projects"
        title="Real projects built &amp; shipped"
        description="A selection of front-end applications, real-time utilities, and AI workflows."
      />

      {/* Filter tabs */}
      <div className="mb-8 sm:mb-10 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = filter === cat
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all focus-ring ${
                isActive
                  ? 'bg-gradient-to-r from-violet-dim to-azure-dim text-white shadow-glow'
                  : 'glass-pill text-white hover:bg-white/[0.15] border-white/20'
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
        {displayedProjects.map((project, i) => (
          <motion.article
            layout
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-panel group relative flex flex-col justify-between overflow-hidden rounded-[1.8rem] sm:rounded-3xl p-1 border-white/20 transition-all duration-300 hover:border-violet/60 hover:shadow-glow"
          >
            {/* Top Frosted Browser mockup bar */}
            <div className="flex items-center justify-between border-b border-white/[0.15] bg-base/85 backdrop-blur-xl px-4 sm:px-5 py-3 rounded-t-[1.5rem] sm:rounded-t-[1.6rem]">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="ml-2 text-xs text-white/90 font-mono font-medium truncate max-w-[130px] sm:max-w-[220px]">
                  {project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.dev
                </span>
              </div>
              <span className="glass-pill rounded-full border border-violet/40 bg-violet/20 px-2.5 py-0.5 text-xs font-bold text-violet">
                {project.badge}
              </span>
            </div>

            {/* Project Content */}
            <div className="flex flex-1 flex-col p-5 sm:p-7">
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-white group-hover:text-violet transition-colors">
                {project.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-white font-normal">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && (
                <div className="mt-4 space-y-2 border-l-2 border-violet/40 pl-3">
                  {project.highlights.map((h, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-white flex items-center gap-2 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-azure shrink-0" />
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
                    className="glass-pill rounded-lg px-3 py-1 text-xs font-bold text-white border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/[0.15] pt-4 sm:pt-5">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-dim to-azure-dim hover:from-violet hover:to-azure px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:scale-105 focus-ring"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-pill inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-bold text-white border-white/20 transition-all hover:border-violet/50 hover:bg-violet/20 focus-ring"
                >
                  <Github size={14} />
                  View Source
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* GitHub CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-panel mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 rounded-3xl p-5 sm:p-7 border-white/20"
      >
        <div className="flex items-center gap-3.5 sm:gap-4 text-left w-full sm:w-auto">
          <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-violet shadow-sm">
            <Github size={24} />
          </div>
          <div>
            <h4 className="font-display text-base sm:text-lg font-bold text-white">Explore More Repositories</h4>
            <p className="text-sm text-white font-normal">Check out my latest code commits, experiments, and open source work.</p>
          </div>
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="glass-pill w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold text-white border-white/25 transition-all hover:border-violet/50 hover:bg-violet/25 focus-ring"
        >
          <span>Visit @{profile.githubUser}</span>
          <ExternalLink size={14} />
        </a>
      </motion.div>
    </section>
  )
}
