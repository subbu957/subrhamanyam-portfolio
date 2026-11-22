import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Printer, ExternalLink, FileText, Phone, Mail, MapPin } from 'lucide-react'
import { profile, education, certifications } from '../data/portfolioData'

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const handlePrint = () => {
    const printWindow = window.open('/resume.html', '_blank')
    if (printWindow) {
      printWindow.focus()
      setTimeout(() => {
        printWindow.print()
      }, 500)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Overlay Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#070913]/85 backdrop-blur-xl transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border border-white/20 bg-[#0C1022] shadow-2xl overflow-hidden backdrop-blur-2xl"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between border-b border-white/[0.12] bg-white/[0.03] px-5 py-3.5 sm:px-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-dim/25 text-violet border border-violet-dim/30">
                  <FileText size={18} />
                </div>
                <div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-white">Curriculum Vitae / Resume</h3>
                  <p className="text-[11px] text-slate-300 font-mono">Updated 2025 • ATS Formatted</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  title="Print Resume"
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/[0.08] px-3 py-1.5 text-xs font-bold text-white transition-all hover:bg-white/[0.15] focus-ring"
                >
                  <Printer size={14} />
                  <span>Print</span>
                </button>

                <a
                  href={profile.resumeUrl}
                  download="Subrhamanyam_Bhattaram_Resume.pdf"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-dim to-azure-dim hover:from-violet hover:to-azure px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-all hover:scale-105 active:scale-95 focus-ring"
                >
                  <Download size={14} />
                  <span>Download PDF</span>
                </a>

                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noreferrer"
                  title="Open in new tab"
                  className="glass-pill hidden sm:inline-flex h-8 w-8 items-center justify-center rounded-xl text-white transition-all hover:bg-white/[0.15] focus-ring"
                >
                  <ExternalLink size={14} />
                </a>

                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="glass-pill flex h-8 w-8 items-center justify-center rounded-xl text-white transition-all hover:bg-rose-500/20 hover:text-rose-400 focus-ring"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Resume Document Viewer */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-white text-slate-900 selection:bg-indigo-600 selection:text-white">
              <div className="max-w-3xl mx-auto font-serif text-[13.5px] leading-relaxed">
                {/* Resume Header */}
                <div className="text-center border-b border-slate-300 pb-4 mb-4">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-sans">
                    {profile.fullName}
                  </h1>
                  <div className="mt-1.5 flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-700 font-sans">
                    <span className="flex items-center gap-1">
                      <Phone size={12} className="text-slate-600" />
                      {profile.phone}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Mail size={12} className="text-slate-600" />
                      <a href={`mailto:${profile.email}`} className="text-slate-900 hover:underline">
                        {profile.email}
                      </a>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-slate-600" />
                      {profile.location}
                    </span>
                  </div>

                  <div className="mt-2 flex flex-wrap justify-center items-center gap-3 text-xs font-sans font-semibold text-blue-700">
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                      LinkedIn
                    </a>
                    <span>|</span>
                    <a href={profile.github} target="_blank" rel="noreferrer" className="hover:underline">
                      GitHub
                    </a>
                    <span>|</span>
                    <a href="https://b-tech-student-calculator.vercel.app" target="_blank" rel="noreferrer" className="hover:underline">
                      Live Portfolio
                    </a>
                  </div>

                  <div className="mt-1.5 text-xs text-slate-600 font-sans italic">
                    Open to: {profile.openTo}
                  </div>
                </div>

                {/* Career Objective */}
                <div className="mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-0.5 mb-1.5 font-sans">
                    Career Objective
                  </h2>
                  <p className="text-xs sm:text-sm text-justify text-slate-800 leading-normal">
                    {profile.careerObjective}
                  </p>
                </div>

                {/* Education */}
                <div className="mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-0.5 mb-1.5 font-sans">
                    Education
                  </h2>
                  <div className="space-y-2.5">
                    {education.map((edu, idx) => (
                      <div key={idx} className="text-xs sm:text-sm">
                        <div className="flex justify-between font-bold text-slate-900">
                          <span>{edu.school}</span>
                          <span className="font-normal text-slate-700 text-xs">{edu.location}</span>
                        </div>
                        <div className="flex justify-between italic text-slate-800 text-xs">
                          <span>{edu.credential}</span>
                          <span className="font-sans not-italic text-slate-700">{edu.period}</span>
                        </div>
                        {edu.detail && (
                          <p className="mt-1 text-xs text-slate-700">
                            • {edu.detail}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-0.5 mb-1.5 font-sans">
                    Technical Skills
                  </h2>
                  <div className="text-xs space-y-1">
                    <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1">
                      <span className="font-bold text-slate-900 font-sans">Generative AI &amp; LLMs:</span>
                      <span className="text-slate-800">Prompt Engineering (IBM Certified), LangChain, LangGraph, RAG Architecture, Vector DBs (ChromaDB), OpenAI &amp; Gemini APIs, Function Calling, Multi-Agent Systems</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1">
                      <span className="font-bold text-slate-900 font-sans">Front-End:</span>
                      <span className="text-slate-800">React.js, JavaScript (ES6+), TailwindCSS, HTML5 Semantic UI, CSS3 Flexbox/Grid, Streaming SSE UI, DOM Manipulation</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1">
                      <span className="font-bold text-slate-900 font-sans">Back-End &amp; AI APIs:</span>
                      <span className="text-slate-800">Python (FastAPI, Flask), Node.js (basics), RESTful API Design, JSON Schema Validation, Asynchronous I/O, WebSockets</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1">
                      <span className="font-bold text-slate-900 font-sans">Database &amp; Vectors:</span>
                      <span className="text-slate-800">Vector Embeddings (Cosine Similarity), Semantic Chunking, SQL, MySQL</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1">
                      <span className="font-bold text-slate-900 font-sans">Dev Tools:</span>
                      <span className="text-slate-800">Git, GitHub Version Control, VS Code, Postman API Testing, Chrome DevTools, Jupyter Notebook</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1">
                      <span className="font-bold text-slate-900 font-sans">Core Concepts:</span>
                      <span className="text-slate-800">Data Structures &amp; Algorithms, Object-Oriented Programming (OOP), Clean Architecture, Cross-Browser Compatibility</span>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-0.5 mb-1.5 font-sans">
                    Projects
                  </h2>
                  <div className="space-y-3">
                    <div className="text-xs sm:text-sm">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Agentic AI Workflow Studio – Full Stack Gen AI Platform</span>
                        <span className="font-sans font-normal text-slate-700">2025</span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-sans italic">Python, FastAPI, LangGraph, React.js, TailwindCSS, OpenAI/Gemini APIs</p>
                      <ul className="mt-1 list-disc list-inside space-y-0.5 text-xs text-slate-800 text-justify">
                        <li>Architected cyclical agent state graphs with LangGraph for planning, research, dynamic tool execution, and automated evaluation loops.</li>
                        <li>Engineered streaming Server-Sent Events (SSE) in Python FastAPI consumed by a reactive React interface for real-time thought telemetry.</li>
                        <li>Integrated dynamic tool-calling for web search grounding and structured data extraction.</li>
                      </ul>
                    </div>

                    <div className="text-xs sm:text-sm">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Multimodal RAG Knowledge Assistant – Semantic Search</span>
                        <span className="font-sans font-normal text-slate-700">2025</span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-sans italic">Python, LangChain, ChromaDB, Vector Embeddings, React.js</p>
                      <ul className="mt-1 list-disc list-inside space-y-0.5 text-xs text-slate-800 text-justify">
                        <li>Implemented document chunking and vector storage with local ChromaDB indices for high-precision semantic search.</li>
                        <li>Engineered hybrid keyword and cosine similarity retrieval pipelines achieving sub-200ms query latency.</li>
                        <li>Formulated strict citation guardrails and context prompt templates, mitigating hallucinations across technical document queries.</li>
                      </ul>
                    </div>

                    <div className="text-xs sm:text-sm">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Student Calculator – Front-End Web Application</span>
                        <span className="font-sans font-normal text-slate-700">2025</span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-sans italic">HTML5, CSS3, Modern JavaScript, DOM Manipulation, Flexbox</p>
                      <ul className="mt-1 list-disc list-inside space-y-0.5 text-xs text-slate-800 text-justify">
                        <li>Developed a fully functional Student Calculator web application using HTML5, CSS3, and JavaScript with clean code separation.</li>
                        <li>Implemented arithmetic operations with real-time input processing via JavaScript DOM manipulation and event handling.</li>
                        <li>Designed a responsive, mobile-friendly UI with CSS3 flexbox ensuring cross-browser compatibility across Chrome, Firefox, and Edge.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-0.5 mb-1.5 font-sans">
                    Certifications
                  </h2>
                  <div className="space-y-1 text-xs">
                    {certifications.map((c, i) => (
                      <div key={i} className="flex justify-between">
                        <span>
                          <strong className="text-slate-900">{c.name}</strong> – <span className="text-slate-700">{c.issuer}</span>
                        </span>
                        <span className="font-sans text-slate-700">{c.year}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements & Activities */}
                <div className="mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-0.5 mb-1.5 font-sans">
                    Achievements &amp; Activities
                  </h2>
                  <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-800">
                    <li>Built and deployed a front-end web application (Student Calculator) demonstrating proficiency in HTML5, CSS3, and JavaScript</li>
                    <li>Engaged with Agentathon 2025 (GDG Hyderabad) – world’s largest Agentic AI hackathon – exploring AI integration with web platforms</li>
                    <li>Published technical content on LinkedIn on web and AI technologies – achieving up to 379 impressions per post</li>
                    <li>Completed 3 industry certifications (IBM, YUVA, Qubitech) alongside full-time B.Tech coursework</li>
                  </ul>
                </div>

                {/* Strengths */}
                <div className="mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-0.5 mb-1.5 font-sans">
                    Strengths
                  </h2>
                  <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-800">
                    <li><strong>Fluent English communication</strong> – clearly articulates technical concepts in written and spoken form for team collaboration</li>
                    <li><strong>Fast self-learner</strong> – independently acquired front-end web development skills alongside B.Tech AI &amp; ML coursework</li>
                    <li><strong>Detail-oriented</strong> – applies clean code, semantic HTML, and structured CSS practices to every project</li>
                  </ul>
                </div>

                {/* Known Languages */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-800 pb-0.5 mb-1.5 font-sans">
                    Known Languages
                  </h2>
                  <p className="text-xs text-slate-800">Telugu, English (Fluent), Hindi</p>
                </div>
              </div>
            </div>

            {/* Bottom Footer Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.12] bg-white/[0.03] px-5 py-3 sm:px-6">
              <span className="text-xs text-slate-300 font-medium">
                Ready for recruiter review • Printable ATS format
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={profile.resumeUrl}
                  download="Subrhamanyam_Bhattaram_Resume.pdf"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-dim to-azure-dim hover:from-violet hover:to-azure px-4 py-2 text-xs font-bold text-white shadow-glow transition-all hover:scale-105 active:scale-95"
                >
                  <Download size={14} />
                  <span>Download PDF Document</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
