import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Copy, Check, Send, MessageSquare, Phone, Mail, MapPin, FileText } from 'lucide-react'
import { profile } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Contact({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sentNotice, setSentNotice] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone)
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    
    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    
    setSentNotice(true)
    setTimeout(() => setSentNotice(false), 5000)
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-violet-dim/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-azure-dim/15 blur-[120px]" />

      <SectionHeading
        kicker="Get In Touch"
        title="Let's Build Something Great Together"
        description="Whether you have an internship opportunity, a project to collaborate on, or just want to connect, feel free to reach out!"
      />

      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12">
        {/* Contact Info & Direct Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel flex flex-col justify-between rounded-3xl p-6 sm:p-8 lg:col-span-5 border-white/15"
        >
          <div>
            <div className="glass-pill inline-flex items-center gap-2 rounded-full border border-emerald/50 bg-emerald/15 px-3 py-1 text-xs font-bold text-emerald-light shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
              {profile.openTo}
            </div>

            <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-white">
              Direct Contact Details
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-200 font-normal">
              I am actively seeking Web Developer internships (on-site or hybrid). Feel free to reach out directly:
            </p>

            {/* Email Box */}
            <div className="glass-pill mt-5 rounded-2xl p-3.5 sm:p-4 border-white/15 bg-white/[0.04]">
              <div className="flex items-center gap-2 text-xs text-slate-300 uppercase font-bold tracking-wider">
                <Mail size={13} className="text-violet" />
                <span>Email Address</span>
              </div>
              <div className="mt-1.5 flex items-center justify-between gap-2">
                <a href={`mailto:${profile.email}`} className="text-xs sm:text-sm font-bold text-white truncate font-mono hover:underline hover:text-azure">
                  {profile.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="flex shrink-0 items-center gap-1.5 rounded-xl border border-white/20 bg-white/[0.08] px-3 py-1 text-xs text-white font-bold transition-all hover:border-violet/60 hover:bg-violet-dim/25 active:scale-95 focus-ring"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={13} className="text-emerald-light" />
                      <span className="text-emerald-light">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Box */}
            <div className="glass-pill mt-3 rounded-2xl p-3.5 sm:p-4 border-white/15 bg-white/[0.04]">
              <div className="flex items-center gap-2 text-xs text-slate-300 uppercase font-bold tracking-wider">
                <Phone size={13} className="text-emerald-light" />
                <span>Phone Number</span>
              </div>
              <div className="mt-1.5 flex items-center justify-between gap-2">
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="text-xs sm:text-sm font-bold text-white font-mono hover:underline hover:text-emerald-light">
                  {profile.phone}
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="flex shrink-0 items-center gap-1.5 rounded-xl border border-white/20 bg-white/[0.08] px-3 py-1 text-xs text-white font-bold transition-all hover:border-emerald/60 hover:bg-emerald/25 active:scale-95 focus-ring"
                >
                  {copiedPhone ? (
                    <>
                      <Check size={13} className="text-emerald-light" />
                      <span className="text-emerald-light">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Channels */}
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-pill flex items-center gap-2.5 rounded-xl p-3 border-white/15 text-xs font-bold text-white transition-all hover:border-azure/60 hover:bg-azure-dim/15"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-azure-dim/30 text-azure shrink-0">
                  <Linkedin size={15} />
                </div>
                <div className="truncate">
                  <p className="text-xs font-bold text-white truncate">LinkedIn</p>
                  <p className="text-[10px] text-slate-300 font-normal">Connect &rarr;</p>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="glass-pill flex items-center gap-2.5 rounded-xl p-3 border-white/15 text-xs font-bold text-white transition-all hover:border-violet/60 hover:bg-violet-dim/15"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-dim/30 text-violet shrink-0">
                  <Github size={15} />
                </div>
                <div className="truncate">
                  <p className="text-xs font-bold text-white truncate">GitHub</p>
                  <p className="text-[10px] text-slate-300 font-normal">@{profile.githubUser} &rarr;</p>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/[0.1] flex items-center gap-2 text-xs text-slate-300">
            <MapPin size={14} className="text-azure shrink-0" />
            <span>{profile.location}</span>
          </div>
        </motion.div>

        {/* Interactive Quick Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:col-span-7 border-white/15 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-dim/25 text-violet border border-violet-dim/30">
                <MessageSquare size={18} />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">Send a Direct Message</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mb-5">
              Fill in the form below to open your email client with your message pre-formatted.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="glass-pill w-full rounded-xl px-4 py-3 sm:py-2.5 text-base sm:text-sm text-white placeholder:text-slate-500 border-white/20 bg-white/[0.05] focus:border-violet focus:bg-white/[0.1] focus:outline-none transition-colors font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="glass-pill w-full rounded-xl px-4 py-3 sm:py-2.5 text-base sm:text-sm text-white placeholder:text-slate-500 border-white/20 bg-white/[0.05] focus:border-violet focus:bg-white/[0.1] focus:outline-none transition-colors font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1.5">Your Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Subrhamanyam, I saw your portfolio and would like to discuss an opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="glass-pill w-full rounded-xl px-4 py-3 sm:py-2.5 text-base sm:text-sm text-white placeholder:text-slate-500 border-white/20 bg-white/[0.05] focus:border-violet focus:bg-white/[0.1] focus:outline-none transition-colors resize-none font-medium"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-dim to-azure-dim hover:from-violet-glow hover:to-azure px-6 py-3.5 sm:py-3 text-sm font-bold text-white shadow-glow transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] focus-ring"
              >
                <Send size={16} />
                Send Message via Email
              </button>

              {sentNotice && (
                <p className="text-center text-xs text-emerald-light font-bold animate-pulse">
                  Email client opened! Thank you for getting in touch.
                </p>
              )}
            </form>
          </div>

          {/* Quick Resume CTA Banner */}
          <div className="mt-6 pt-5 border-t border-white/[0.1] flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-300 font-medium">Looking for my complete CV?</span>
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenResume}
                className="glass-pill inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold text-white transition-all hover:bg-violet-dim/25 hover:border-violet/60"
              >
                <FileText size={14} className="text-violet" />
                <span>View Resume</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
