import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileText, Download, Sparkles } from 'lucide-react'
import { nav, profile } from '../data/portfolioData'

export default function Navbar({ onOpenResume }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100)
      }

      // Section spy
      const sections = nav.map((n) => n.href.substring(1))
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 240) {
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
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-violet via-azure to-emerald transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-base/80 backdrop-blur-2xl border-b border-white/[0.1] shadow-2xl py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo with interactive hover glow */}
          <a href="#home" className="flex items-center gap-3 focus-ring group" aria-label="Home">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-dim via-azure-dim to-azure p-[1px] shadow-glow transition-transform duration-300 group-hover:scale-105">
              <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-[#090D1A] font-display text-sm font-extrabold text-white">
                {profile.initials}
              </div>
            </div>
            <div className="text-left">
              <span className="block font-display text-sm font-extrabold tracking-tight text-white group-hover:text-violet transition-colors">
                {profile.name.split(' ')[0]}
              </span>
              <span className="block text-[10px] text-azure font-semibold tracking-wide">Web Developer</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="glass-pill hidden items-center gap-1 rounded-full px-3 py-1.5 md:flex border-white/15">
            {nav.map((item) => {
              const sectionId = item.href.substring(1)
              const isActive = activeSection === sectionId
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 ${
                      isActive
                        ? 'text-white font-extrabold'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.08]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-dim/90 to-azure-dim/90 shadow-sm -z-10"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="glass-pill group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold text-white border-white/20 transition-all hover:border-violet/60 hover:bg-violet/20 focus-ring"
            >
              <FileText size={14} className="text-violet transition-transform group-hover:scale-110" />
              <span>Resume</span>
            </button>
            
            <a
              href={profile.resumeUrl}
              download="Subrhamanyam_Bhattaram_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-dim to-azure-dim hover:from-violet hover:to-azure px-4 py-2 text-xs font-bold text-white shadow-glow transition-all hover:scale-105 active:scale-95 focus-ring"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
          </div>

          {/* Mobile menu trigger button */}
          <button
            className="glass-pill flex h-10 w-10 items-center justify-center rounded-xl text-white md:hidden focus-ring border-white/20"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden border-b border-white/[0.12] bg-[#080B18]/95 backdrop-blur-2xl md:hidden shadow-2xl"
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
                            ? 'bg-violet-dim/30 text-white border border-violet/40'
                            : 'text-slate-200 hover:bg-white/[0.08]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className="text-sm text-slate-400 font-bold">&rarr;</span>
                      </a>
                    </li>
                  )
                })}
                <li className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      setOpen(false)
                      onOpenResume()
                    }}
                    className="flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.08] px-4 py-3 text-sm font-bold text-white focus-ring"
                  >
                    <FileText size={15} className="text-violet" />
                    Preview Resume
                  </button>
                  <a
                    href={profile.resumeUrl}
                    download="Subrhamanyam_Bhattaram_Resume.pdf"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-dim to-azure-dim px-4 py-3 text-sm font-bold text-white shadow-glow focus-ring"
                  >
                    <Download size={15} />
                    Download Resume PDF
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
