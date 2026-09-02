import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Copy, Check, Send, MessageSquare } from 'lucide-react'
import { profile } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sentNotice, setSentNotice] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    
    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    
    setSentNotice(true)
    setTimeout(() => setSentNotice(false), 5000)
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
      {/* Background glass lighting */}
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-violet/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-azure/20 blur-[120px]" />

      <SectionHeading
        kicker="Get In Touch"
        title="Let's build something great together"
        description="Whether you have an internship opportunity, a project to collaborate on, or just want to chat tech, feel free to reach out!"
      />

      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12">
        {/* Contact Info & Direct Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="glass-panel flex flex-col justify-between rounded-3xl p-6 sm:p-8 lg:col-span-5 border-white/20"
        >
          <div>
            <div className="glass-pill inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities
            </div>

            <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-white">
              Direct Channels
            </h3>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-white font-normal">
              I check my inbox daily and am always open to discussing web projects, tech internships, and collaborations.
            </p>

            {/* Copy Email Box */}
            <div className="glass-pill mt-5 sm:mt-6 rounded-2xl p-4 border-white/25 bg-white/[0.06]">
              <p className="text-xs text-white/90 uppercase font-bold tracking-wider">Direct Email Address</p>
              <div className="mt-1.5 flex items-center justify-between gap-2">
                <span className="text-sm sm:text-base font-bold text-white truncate select-all font-mono">
                  {profile.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex shrink-0 items-center gap-1.5 rounded-xl border border-white/25 bg-white/[0.12] px-3.5 py-1.5 text-xs text-white font-bold transition-all hover:border-violet/60 hover:bg-violet/25 active:scale-95 focus-ring"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 space-y-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-pill flex items-center justify-between rounded-2xl p-4 border-white/20 text-sm font-bold text-white transition-all hover:border-azure/60 hover:bg-azure/15"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-azure/30 text-azure">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-bold text-white">LinkedIn Profile</p>
                    <p className="text-xs text-white/90 font-medium">Connect professionally</p>
                  </div>
                </div>
                <span className="text-base text-white font-bold">&rarr;</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="glass-pill flex items-center justify-between rounded-2xl p-4 border-white/20 text-sm font-bold text-white transition-all hover:border-violet/60 hover:bg-violet/15"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet/30 text-violet">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-bold text-white">GitHub Repositories</p>
                    <p className="text-xs text-white/90 font-medium">Explore code &amp; contributions</p>
                  </div>
                </div>
                <span className="text-base text-white font-bold">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 border-t border-white/[0.15] pt-4 text-xs sm:text-sm text-white/90 font-medium">
            Based in {profile.location} &bull; Remote &amp; On-Site Ready
          </div>
        </motion.div>

        {/* Interactive Quick Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:col-span-7 border-white/20"
        >
          <div className="flex items-center gap-2.5 mb-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet/30 text-violet">
              <MessageSquare size={18} />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white">Send a Direct Message</h3>
          </div>
          <p className="text-sm text-white/90 font-medium mb-5 sm:mb-6">
            Fill in the form below to open your email client with your message pre-formatted.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-white mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="glass-pill w-full rounded-xl px-4 py-3 sm:py-2.5 text-base sm:text-sm text-white placeholder:text-white/60 border-white/25 bg-white/[0.08] focus:border-violet focus:bg-white/[0.12] focus:outline-none transition-colors font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-white mb-1.5">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="glass-pill w-full rounded-xl px-4 py-3 sm:py-2.5 text-base sm:text-sm text-white placeholder:text-white/60 border-white/25 bg-white/[0.08] focus:border-violet focus:bg-white/[0.12] focus:outline-none transition-colors font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-white mb-1.5">Your Message</label>
              <textarea
                rows={4}
                required
                placeholder="Hi Subrhamanyam, I saw your portfolio and would love to discuss..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="glass-pill w-full rounded-xl px-4 py-3 sm:py-2.5 text-base sm:text-sm text-white placeholder:text-white/60 border-white/25 bg-white/[0.08] focus:border-violet focus:bg-white/[0.12] focus:outline-none transition-colors resize-none font-medium"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-dim to-azure-dim hover:from-violet hover:to-azure px-6 py-3.5 sm:py-3 text-sm font-bold text-white shadow-glow transition-all hover:scale-[1.01] active:scale-[0.99] focus-ring"
            >
              <Send size={16} />
              Send Message via Email
            </button>

            {sentNotice && (
              <p className="text-center text-xs text-emerald-400 font-bold">
                Email prompt opened! Thank you for getting in touch.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
