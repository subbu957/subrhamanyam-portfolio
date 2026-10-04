import { motion } from 'framer-motion'

export default function SectionHeading({ kicker, title, description, align = 'left' }) {
  const isCenter = align === 'center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-10 sm:mb-12 max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      {kicker && (
        <div className="mb-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-dim/40 bg-violet-dim/15 px-3.5 py-1 text-xs font-bold tracking-wider text-violet uppercase backdrop-blur-md shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-azure animate-pulse" />
            {kicker}
          </span>
        </div>
      )}
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-200 font-normal">
          {description}
        </p>
      )}
    </motion.div>
  )
}
