import { motion } from 'framer-motion'
import { Award, Calendar, MapPin, Sparkles, GraduationCap } from 'lucide-react'
import { education, certifications } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-10 top-1/2 h-72 w-72 rounded-full bg-violet-dim/15 blur-[120px]" />

      <SectionHeading
        kicker="Academic &amp; Verified"
        title="Education &amp; Industry Certifications"
        description="Engineering background in Artificial Intelligence combined with specialized industry certifications."
      />

      <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-12">
        {/* Education Timeline */}
        <div className="lg:col-span-7">
          <div className="relative border-l-2 border-white/20 pl-5 sm:pl-8 space-y-8 sm:space-y-10">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Glowing timeline node */}
                <span className="absolute -left-[29px] sm:-left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-violet-dim to-azure ring-4 ring-[#070913] group-hover:scale-125 transition-transform duration-300 shadow-glow" />
                
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full border border-violet-dim/40 bg-violet-dim/20 px-2.5 py-0.5 text-xs font-bold text-violet">
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-300 font-medium">
                    <MapPin size={12} className="text-azure" />
                    {edu.location}
                  </span>
                </div>

                <h3 className="mt-2 font-display text-base sm:text-lg font-bold text-white group-hover:text-azure transition-colors">
                  {edu.school}
                </h3>
                <p className="mt-1 text-sm sm:text-base font-semibold text-slate-200">{edu.credential}</p>
                {edu.detail && (
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300 border-l-2 border-white/20 pl-3 font-normal">
                    {edu.detail}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel h-fit rounded-3xl p-6 sm:p-8 lg:col-span-5 border-white/15"
        >
          <div className="flex items-center justify-between border-b border-white/[0.1] pb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-dim/25 text-violet border border-violet-dim/30">
                <Award size={20} />
              </div>
              <h3 className="font-display text-base font-bold text-white">Verified Credentials</h3>
            </div>
            <span className="glass-pill rounded-full px-2.5 py-1 text-xs text-slate-200 font-bold border-white/15">
              {certifications.length} verified
            </span>
          </div>

          <ul className="mt-5 space-y-3.5">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="glass-pill group rounded-2xl p-4 border-white/15 transition-all hover:border-azure/60 hover:bg-white/[0.08]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <Sparkles size={16} className="mt-0.5 shrink-0 text-cyan-400" />
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-azure transition-colors">
                        {cert.name}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-300 font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-md border border-white/15 bg-white/[0.06] px-2.5 py-0.5 text-xs font-mono text-slate-300 font-bold">
                    {cert.year}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
