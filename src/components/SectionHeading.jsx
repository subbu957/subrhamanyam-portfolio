import { motion } from 'framer-motion'

export default function SectionHeading({ kicker, title, description, align = 'left' }) {
  const isCenter = align === 'center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-10 sm:mb-12 max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      {kicker && (
        <div className="mb-2.5">
          <span className="glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold tracking-wider text-violet uppercase border border-violet/40">
            <span className="h-1.5 w-1.5 rounded-full bg-violet" />
            {kicker}
          </span>
        </div>
      )}
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-white font-medium">
          {description}
        </p>
      )}
    </motion.div>
  )
}
