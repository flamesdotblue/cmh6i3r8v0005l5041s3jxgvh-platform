import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Brain, PenTool } from 'lucide-react'

const steps = [
  {
    title: 'Understand the Brief',
    body: "We decode what's said, what's unsaid, and why it matters.",
    Icon: MessageSquare,
  },
  {
    title: 'Decode Behavior',
    body: 'We dive deep into psychology, audience patterns, and cultural signals.',
    Icon: Brain,
  },
  {
    title: 'Design the Narrative',
    body: 'Every message is engineered to not just be seen, but felt and remembered.',
    Icon: PenTool,
  },
]

export default function ProcessConnected() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-serif font-semibold max-w-3xl"
        >
          Whether we’re building celebrity personas, launching brand movements, or solving public challenges — here’s how we work:
        </motion.h3>

        <div className="relative mt-10 md:mt-14">
          {/* Connecting line */}
          <svg className="hidden md:block absolute left-0 right-0 top-12 h-12" viewBox="0 0 1200 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              d="M20 48 H1180"
              stroke="url(#grad)" strokeWidth="2" strokeLinecap="round" />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#C9A86A" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map(({ title, body, Icon }, i) => (
              <motion.div
                key={i}
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 hover:border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/15 text-[#38BDF8]">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">{title}</h4>
                    <p className="mt-2 text-white/80 leading-relaxed">{body}</p>
                  </div>
                </div>
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_40px_rgba(56,189,248,0.12)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
