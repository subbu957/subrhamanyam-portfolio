import { motion } from 'framer-motion'
import { Flag, Sparkles } from 'lucide-react'
import { journey } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Journey() {
  return (
    <section id="journey" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-10 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <SectionHeading
        kicker="Milestones &amp; Path"
        title="Learning Journey &amp; Milestones"
        description="Highlights of key accomplishments, practical builds, and continuous learning."
      />

      <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {journey.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel-interactive group relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 border-white/15 hover:border-violet/60"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="glass-pill flex h-8 w-8 items-center justify-center rounded-xl font-mono text-xs font-bold text-azure border-white/20">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Flag size={16} className="text-slate-400 group-hover:text-azure transition-colors" />
              </div>

              <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-white group-hover:text-azure transition-colors">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200 font-normal">
                {step.detail}
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-white/[0.1] flex items-center justify-between text-xs text-slate-300 font-medium">
              <span>Step {i + 1}</span>
              <span className="text-emerald-light font-bold flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                Verified
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
