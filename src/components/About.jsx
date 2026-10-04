import { motion } from 'framer-motion'
import { CheckCircle2, Award, Compass, Sparkles, Languages, Trophy, FileText } from 'lucide-react'
import { profile } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 h-72 w-72 sm:w-96 rounded-full bg-violet-dim/15 blur-[120px]" />

      <SectionHeading
        kicker="About &amp; Overview"
        title="Front-End Developer &amp; AI/ML Student"
        description="Combining foundational AI/ML academic rigor with self-driven front-end engineering and clean code practices."
      />

      {/* Quick stats highlight grid with hover lift */}
      <div className="mb-10 sm:mb-12 grid grid-cols-2 gap-3.5 sm:gap-4 lg:grid-cols-4">
        {profile.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel-interactive rounded-2xl p-4 sm:p-5 flex flex-col justify-between border-white/15 hover:border-violet/60"
          >
            <p className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-300 font-bold">{stat.label}</p>
            <p className="mt-2 font-display text-lg sm:text-xl lg:text-2xl font-extrabold text-white truncate">{stat.value}</p>
            <p className="mt-0.5 text-xs text-azure font-bold">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12">
        {/* Career Objective & Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel rounded-3xl p-6 sm:p-8 lg:col-span-7 flex flex-col justify-between border-white/15"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-dim/25 text-violet border border-violet-dim/30">
                <Compass size={18} />
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-white">Career Objective</h3>
            </div>

            <div className="rounded-2xl border border-violet-dim/40 bg-violet-dim/10 p-4 sm:p-5 backdrop-blur-md mb-6 shadow-inner">
              <p className="text-sm sm:text-base leading-relaxed text-slate-100 font-medium italic">
                &ldquo;{profile.careerObjective}&rdquo;
              </p>
            </div>

            <h4 className="font-display text-sm sm:text-base font-bold text-white mb-2">My Background &amp; Focus</h4>
            {profile.aboutParagraphs.map((p, i) => (
              <p key={i} className={`text-sm sm:text-base leading-relaxed text-slate-200 font-normal ${i > 0 ? 'mt-3' : ''}`}>
                {p}
              </p>
            ))}
          </div>

          {/* Resume Quick Bar inside About */}
          <div className="mt-7 sm:mt-8 pt-5 border-t border-white/[0.12] flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-300 font-medium">
              Want a comprehensive 1-page summary?
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenResume}
                className="glass-pill inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold text-white transition-all hover:bg-violet-dim/25 hover:border-violet/60"
              >
                <FileText size={14} className="text-violet" />
                <span>View ATS Resume</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Strengths & Known Languages */}
        <div className="space-y-6 sm:space-y-8 lg:col-span-5">
          {/* Core Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-3xl p-6 sm:p-7 border-white/15"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-azure-dim/25 text-azure border border-azure-dim/30">
                <Award size={18} />
              </div>
              <h3 className="font-display text-base font-bold text-white">Key Strengths</h3>
            </div>

            <div className="space-y-3">
              {profile.strengths.map((item) => (
                <div
                  key={item.title}
                  className="glass-pill rounded-xl p-3.5 border-white/15 transition-all hover:border-violet/60 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-light shrink-0" />
                    <h4 className="font-display text-xs sm:text-sm font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300 pl-6 font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Known Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-3xl p-6 sm:p-7 border-white/15"
          >
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-dim/25 text-violet border border-violet-dim/30">
                <Languages size={18} />
              </div>
              <h3 className="font-display text-base font-bold text-white">Known Languages</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {profile.languages.map((lang) => (
                <div key={lang.name} className="glass-pill rounded-xl p-3 text-center border-white/15 hover:border-azure/50 transition-all">
                  <p className="text-sm font-bold text-white">{lang.name}</p>
                  <p className="text-[11px] text-slate-300 font-medium">{lang.level}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Achievements & Activities Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel mt-6 sm:mt-8 rounded-3xl p-6 sm:p-8 border-white/15"
      >
        <div className="flex items-center gap-2.5 mb-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald/20 text-emerald-light border border-emerald/30">
            <Trophy size={18} />
          </div>
          <div>
            <h3 className="font-display text-base sm:text-lg font-bold text-white">Achievements &amp; Activities</h3>
            <p className="text-xs text-slate-300">Recognitions, hackathons, and published technical work</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {profile.achievements.map((item, i) => (
            <div
              key={i}
              className="glass-pill rounded-2xl p-4 border-white/15 transition-all duration-200 hover:border-violet/60 hover:bg-white/[0.08]"
            >
              <div className="flex items-start gap-2.5">
                <Sparkles size={16} className="text-violet shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-xs sm:text-sm font-bold text-white">{item.title}</h4>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
