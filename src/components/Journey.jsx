import { motion } from 'framer-motion'
import { Flag } from 'lucide-react'
import { journey } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Journey() {
  return (
    <section id="journey" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
      {/* Background glass lighting */}
      <div className="pointer-events-none absolute right-10 bottom-10 h-72 w-72 rounded-full bg-bloom/20 blur-[120px]" />

      <SectionHeading
        kicker="Milestones"
        title="Learning journey &amp; technical growth"
        description="Highlights of key accomplishments, practical builds, and continuous learning."
      />

      <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {journey.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            className="glass-panel-interactive group relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 border-white/20"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="glass-pill flex h-7 w-7 items-center justify-center rounded-lg font-mono text-xs font-bold text-violet border-white/25">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Flag size={16} className="text-white/80 group-hover:text-azure transition-colors" />
              </div>

              <h3 className="mt-3.5 font-display text-base sm:text-lg font-bold text-white group-hover:text-violet transition-colors">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white font-normal">
                {step.detail}
              </p>
            </div>

            <div className="mt-4 sm:mt-5 pt-3 border-t border-white/[0.12] flex items-center justify-between text-xs text-white/90 font-semibold">
              <span>Milestone {i + 1}</span>
              <span className="text-violet font-bold">&bull; Continuous Growth</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
