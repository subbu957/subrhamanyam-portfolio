import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { nav, profile } from '../data/portfolioData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Section spy
      const sections = nav.map((n) => n.href.substring(1))
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 220) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-base/80 backdrop-blur-2xl border-b border-white/[0.12] shadow-2xl py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 sm:gap-3 focus-ring group" aria-label="Home">
          <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet via-azure to-bloom font-display text-xs sm:text-sm font-extrabold text-white shadow-glow transition-transform group-hover:scale-105">
            {profile.initials}
          </span>
          <div className="text-left">
            <span className="block font-display text-xs sm:text-sm font-bold tracking-tight text-white">
              {profile.name.split(' ')[0]}
            </span>
            <span className="block text-[9px] sm:text-[10px] text-violet font-semibold">Front-End Developer</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="glass-pill hidden items-center gap-1 rounded-full px-3 py-1.5 md:flex border-white/20">
          {nav.map((item) => {
            const sectionId = item.href.substring(1)
            const isActive = activeSection === sectionId
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                    isActive
                      ? 'text-white'
                      : 'text-white/90 hover:text-white hover:bg-white/[0.1]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-violet/85 to-azure/85 shadow-sm -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            download
            className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-white border-white/20 transition-all hover:border-violet/60 hover:bg-violet/20 hover:text-white focus-ring"
          >
            <Download size={14} className="text-violet" />
            Resume
          </a>
        </div>

        {/* Mobile menu trigger button */}
        <button
          className="glass-pill flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl text-white md:hidden focus-ring border-white/20"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer with Frosted Glass styling */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-white/[0.12] bg-base/95 backdrop-blur-2xl md:hidden shadow-2xl"
          >
            <ul className="flex flex-col gap-1 px-5 py-5">
              {nav.map((item) => {
                const sectionId = item.href.substring(1)
                const isActive = activeSection === sectionId
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                        isActive
                          ? 'bg-violet/25 text-white border border-violet/40'
                          : 'text-white hover:bg-white/[0.08]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-sm text-white font-bold">&rarr;</span>
                    </a>
                  </li>
                )
              })}
              <li className="mt-3 pt-3 border-t border-white/10">
                <a
                  href={profile.resumeUrl}
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet to-azure px-4 py-3 text-sm font-bold text-white shadow-glow focus-ring"
                >
                  <Download size={15} />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
