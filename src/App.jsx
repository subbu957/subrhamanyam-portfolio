import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, FileText } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openResume = () => {
    setIsResumeModalOpen(true)
  }

  const closeResume = () => {
    setIsResumeModalOpen(false)
  }

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden selection:bg-indigo-600 selection:text-white">
      <Navbar onOpenResume={openResume} />
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero onOpenResume={openResume} />
        <About onOpenResume={openResume} />
        <Skills />
        <Projects />
        <Education />
        <Journey />
        <Contact onOpenResume={openResume} />
      </main>
      <Footer onOpenResume={openResume} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
        {/* Floating Quick Resume Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openResume}
          aria-label="View Resume"
          className="glass-pill flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold text-white shadow-glow backdrop-blur-xl border-white/25 bg-violet-dim/30 hover:bg-violet-dim/50 hover:border-violet/60 transition-all focus-ring"
        >
          <FileText size={15} className="text-azure" />
          <span>Resume</span>
        </motion.button>

        {/* Floating Back-to-Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-violet-dim to-azure-dim text-white shadow-glow backdrop-blur-md transition-all hover:scale-110 focus-ring"
            >
              <ArrowUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Full ATS Resume Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={closeResume} />
    </div>
  )
}
