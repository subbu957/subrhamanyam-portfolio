import { useState } from 'react'
import { motion } from 'framer-motion'
import { Layout, Code2, Sparkles, Database, Wrench, Cpu, Layers } from 'lucide-react'
import { skills } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

const iconMap = {
  Layout: Layout,
  Code2: Code2,
  Sparkles: Sparkles,
  Database: Database,
  Wrench: Wrench,
  Cpu: Cpu,
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...skills.map((s) => s.category)]
  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === selectedCategory)

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
      {/* Background glass lighting */}
      <div className="pointer-events-none absolute right-10 top-1/4 h-72 w-72 rounded-full bg-azure/15 blur-[100px]" />

      <SectionHeading
        kicker="Skills &amp; Tech Stack"
        title="Tools, frameworks &amp; foundations"
        description="Technologies I practice and apply in web development, AI exploration, and coursework."
      />

      {/* Category filter pills - responsive scroll/wrap */}
      <div className="mb-8 sm:mb-10 flex flex-wrap items-center justify-center gap-2 px-1">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
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

      <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredSkills.map((group, i) => {
          const Icon = iconMap[group.iconName] || Layers
          return (
            <motion.div
              layout
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className="glass-panel-interactive rounded-2xl p-5 sm:p-6 border-white/20"
            >
              <div className="flex items-center gap-3 border-b border-white/[0.15] pb-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet/30 to-azure/30 text-white border border-white/20 shadow-sm">
                  <Icon size={20} className="text-violet" />
                </div>
                <div>
                  <h3 className="font-display text-base font-extrabold text-white tracking-wide">{group.category}</h3>
                  <p className="text-xs text-white/90 font-medium">{group.items.length} skills</p>
                </div>
              </div>

              <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs sm:text-sm font-semibold text-white border-white/20 transition-all duration-200 hover:border-violet/60 hover:bg-violet/25 hover:scale-105"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
