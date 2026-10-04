import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-10 top-1/4 h-72 w-72 rounded-full bg-azure-dim/15 blur-[120px]" />

      <SectionHeading
        kicker="Technical Stack"
        title="Skills, Frameworks &amp; Core Tools"
        description="Technologies I practice and apply in web development, AI exploration, and coursework."
      />

      {/* Category filter pills */}
      <div className="mb-8 sm:mb-10 flex flex-wrap items-center justify-center gap-2 px-1">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 focus-ring ${
                isActive
                  ? 'bg-gradient-to-r from-violet-dim to-azure-dim text-white shadow-glow'
                  : 'glass-pill text-slate-300 hover:text-white hover:bg-white/[0.1] border-white/15'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeSkillTab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-dim to-azure-dim -z-10 shadow-glow"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              {cat}
            </button>
          )
        })}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((group, i) => {
            const Icon = iconMap[group.iconName] || Layers
            return (
              <motion.div
                layout
                key={group.category}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className="glass-panel-interactive rounded-2xl p-5 sm:p-6 border-white/15 hover:border-violet/60"
              >
                <div className="flex items-center gap-3 border-b border-white/[0.1] pb-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-dim/30 to-azure-dim/30 text-white border border-white/15 shadow-sm">
                    <Icon size={20} className="text-azure" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-extrabold text-white tracking-wide">{group.category}</h3>
                    <p className="text-xs text-slate-400 font-medium">{group.items.length} skills</p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-100 border-white/15 transition-all duration-200 hover:border-violet/60 hover:bg-violet-dim/20 hover:text-white hover:scale-105"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
