import { motion } from 'framer-motion'
import { CheckCircle2, Award, Compass, Sparkles } from 'lucide-react'
import { profile } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
      {/* Background glass lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 h-64 w-64 sm:w-96 rounded-full bg-violet/20 blur-[100px]" />

      <SectionHeading
        kicker="About Me"
        title="Engineering clean web interfaces &amp; exploring AI"
        description="A blend of academic foundations in AI/ML and hands-on self-driven front-end engineering."
      />

      {/* Quick stats highlight grid */}
      <div className="mb-10 sm:mb-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {profile.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="glass-panel-interactive rounded-2xl p-4 sm:p-5 flex flex-col justify-between border-white/20"
          >
            <p className="text-xs uppercase tracking-wider text-white/90 font-bold">{stat.label}</p>
            <p className="mt-2 font-display text-lg sm:text-xl lg:text-2xl font-extrabold text-white truncate">{stat.value}</p>
            <p className="mt-0.5 text-xs text-violet font-bold">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-5">
        {/* Bio content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 lg:col-span-3 flex flex-col justify-between border-white/20"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet/30 text-white">
                <Compass size={18} className="text-violet" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-white">My Background &amp; Philosophy</h3>
            </div>
            {profile.aboutParagraphs.map((p, i) => (
              <p key={i} className={`text-base sm:text-lg leading-relaxed text-white font-normal ${i > 0 ? 'mt-4' : ''}`}>
                {p}
              </p>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 rounded-2xl border border-violet/40 bg-violet/15 p-4 text-sm sm:text-base text-white flex items-start gap-3 backdrop-blur-md">
            <Sparkles size={20} className="shrink-0 text-violet mt-0.5" />
            <p className="text-white font-medium leading-relaxed">
              <strong className="text-white font-bold">Current Goal:</strong> Securing a front-end or AI/ML internship where I can contribute to production-grade user interfaces, collaborate with mentors, and expand my full-stack skills.
            </p>
          </div>
        </motion.div>

        {/* Core Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 lg:col-span-2 border-white/20"
        >
          <div className="flex items-center gap-2.5 mb-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-azure/30 text-white">
              <Award size={18} className="text-azure" />
            </div>
            <h3 className="font-display text-base sm:text-lg font-bold text-white">Core Strengths</h3>
          </div>
          <div className="space-y-3 sm:space-y-3.5">
            {profile.strengths.map((item) => (
              <div
                key={item.title}
                className="glass-pill rounded-xl p-3.5 sm:p-4 border-white/20 transition-all hover:border-violet/60 hover:bg-white/[0.1]"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-violet shrink-0" />
                  <h4 className="font-display text-sm sm:text-base font-bold text-white">{item.title}</h4>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-white/95 pl-6 font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
