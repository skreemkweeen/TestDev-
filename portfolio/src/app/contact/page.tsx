'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeUp } from '@/components/shared/AnimatedText'

const budgetOptions = [
  'Under $2,500',
  '$2,500 – $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000+',
]

const serviceOptions = [
  'Brand Identity',
  'UX/UI Design',
  'Product Design',
  'Design System',
  'Campaign Design',
  'Other',
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = (field: string) =>
    `w-full bg-transparent border-b py-4 text-white placeholder-gray-600 text-base outline-none transition-all duration-300 ${
      focused === field ? 'border-gold' : 'border-gray-800'
    }`

  return (
    <div className="min-h-screen bg-obsidian">
      {/* Header */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-[100px] pointer-events-none" />
        <div className="container-wide relative z-10">
          <FadeUp>
            <div className="flex items-center gap-4 mb-10">
              <span className="gold-line" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Contact</span>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <FadeUp delay={0.1}>
                <h1 className="font-display text-display text-white leading-tight mb-8">
                  Let&apos;s build
                  <br />
                  <em className="text-gradient-gold">something great</em>
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-gray-400 text-lg leading-relaxed mb-12">
                  I take on a limited number of projects to ensure every client gets my full
                  attention. If you&apos;re serious about elevating your brand or product,
                  I want to hear from you.
                </p>
              </FadeUp>

              {/* Contact details */}
              <FadeUp delay={0.3}>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-gold/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 tracking-widest uppercase mb-1">Email</p>
                      <a
                        href="mailto:hello@elementuxdesigns.com"
                        className="text-gray-300 hover:text-gold transition-colors text-sm"
                      >
                        hello@elementuxdesigns.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-gold/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 tracking-widest uppercase mb-1">Response Time</p>
                      <p className="text-gray-300 text-sm">Within 24–48 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-gold/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 tracking-widest uppercase mb-1">Availability</p>
                      <p className="text-gray-300 text-sm">
                        <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse" />
                        Taking new projects — Q2 2025
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {submitted ? (
                <div className="bg-surface border border-gold/20 p-12 text-center">
                  <div className="w-16 h-16 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-white mb-4">Message Received</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Thank you for reaching out. I&apos;ll review your project brief and get back
                    to you within 24–48 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-surface border border-border p-10 md:p-12 space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="text-xs text-gray-600 tracking-widest uppercase block mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        className={inputClass('name')}
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 tracking-widest uppercase block mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        className={inputClass('email')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-600 tracking-widest uppercase block mb-2">
                      Company / Brand
                    </label>
                    <input
                      type="text"
                      placeholder="Company or brand name"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      onFocus={() => setFocused('company')}
                      onBlur={() => setFocused(null)}
                      className={inputClass('company')}
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-600 tracking-widest uppercase block mb-4">
                      Service Needed
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            setFormState({ ...formState, service: option })
                          }
                          className={`text-xs tracking-wide px-4 py-2 border transition-all duration-200 ${
                            formState.service === option
                              ? 'border-gold text-gold bg-gold/5'
                              : 'border-gray-800 text-gray-500 hover:border-gray-600'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-600 tracking-widest uppercase block mb-4">
                      Budget Range
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            setFormState({ ...formState, budget: option })
                          }
                          className={`text-xs tracking-wide px-4 py-2 border transition-all duration-200 ${
                            formState.budget === option
                              ? 'border-gold text-gold bg-gold/5'
                              : 'border-gray-800 text-gray-500 hover:border-gray-600'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-600 tracking-widest uppercase block mb-2">
                      Project Brief *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project, goals, timeline, and what you need..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      className={`${inputClass('message')} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold text-black py-5 text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-3 group"
                  >
                    Send Project Brief
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>

                  <p className="text-gray-600 text-xs text-center">
                    No spam. No cold pitch. Just a real conversation about your project.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing border-t border-border bg-surface">
        <div className="container-wide">
          <FadeUp>
            <h2 className="font-display text-heading text-white mb-16">
              Frequently asked
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl">
            {[
              {
                q: 'What does a typical project look like?',
                a: "Most projects run 4–8 weeks. We start with a discovery call, I build a strategic brief, then we move into design. You'll get regular check-ins and clear milestones — no disappearing acts.",
              },
              {
                q: 'Do you work with early-stage startups?',
                a: "Yes, if the vision is clear and the founder is serious. I've worked with pre-revenue startups all the way to enterprise. Budget matters less than alignment.",
              },
              {
                q: 'How do revisions work?',
                a: "Every project includes structured revision rounds (typically 2). I build feedback loops into the process so nothing is a surprise at the end.",
              },
              {
                q: 'Do you offer retainer arrangements?',
                a: "Yes. Several clients keep me on monthly retainer for ongoing design needs. This is my preferred model for long-term partnerships.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="border-b border-border py-8"
              >
                <h3 className="text-white font-medium mb-3">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
