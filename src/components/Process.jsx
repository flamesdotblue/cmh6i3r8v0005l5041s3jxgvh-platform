import React from 'react'
import { motion } from 'framer-motion'
import { Brain, MessageSquare, PenTool } from 'lucide-react'

const steps = [
  {
    title: 'Understand the Brief',
    body: 'We decode what’s said, what’s unsaid, and why it matters. This is where the foundation of perception begins.',
    icon: MessageSquare,
  },
  {
    title: 'Decode Behavior',
    body: 'We dive deep into psychology, audience patterns, and cultural signals — so that what we create is not just creative, but correctly wired.',
    icon: Brain,
  },
  {
    title: 'Design the Narrative',
    body: 'Every message is engineered to not just be seen, but felt and remembered.',
    icon: PenTool,
  },
  {
    title: 'Understand the Brief',
    body: 'We decode what’s said, what’s unsaid, and why it matters. This is where the foundation of perception begins.',
    icon: MessageSquare,
  },
  {
    title: 'Decode Behavior',
    body: 'We dive deep into psychology, audience patterns, and cultural signals — so that what we create is not just creative, but correctly wired.',
    icon: Brain,
  },
  {
    title: 'Design the Narrative',
    body: 'Every message is engineered to not just be seen, but felt and remembered.',
    icon: PenTool,
  },
]

export default function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-white/5" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6">
        <motion.h3
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl text-white/90 max-w-4xl"
        >
          Whether we’re building celebrity personas, launching brand movements, or solving public challenges — here’s how we work:
        </motion.h3>

        <div className="mt-10 grid md:grid-cols-3 gap-5 md:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative rounded-xl border border-white/5 bg-white/5 p-5 md:p-6 hover:border-[#37F08D]/40 hover:shadow-[0_0_30px_rgba(55,240,141,0.12)] transition"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#37F08D]/30 bg-[#37F08D]/10 text-[#37F08D]">
                  <s.icon size={18} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{s.title}</h4>
                  <p className="mt-2 text-sm text-white/75 leading-relaxed">{s.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
