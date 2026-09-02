import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/[0.12] bg-base/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 sm:px-6 py-8 sm:py-10 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet via-azure to-bloom font-display text-xs font-bold text-white shadow-sm">
            {profile.initials}
          </span>
          <p className="text-xs sm:text-sm text-white font-medium text-center sm:text-left">
            &copy; {new Date().getFullYear()} <span className="text-white font-bold">{profile.fullName}</span>. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="glass-pill flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-white transition-colors hover:border-violet/60 hover:bg-violet/20 focus-ring"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="glass-pill flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-white transition-colors hover:border-azure/60 hover:bg-azure/20 focus-ring"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="glass-pill flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-white transition-colors hover:border-violet/60 hover:bg-violet/20 focus-ring"
          >
            <Mail size={16} />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="glass-pill flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-white transition-all hover:bg-violet/25 hover:text-white focus-ring"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
