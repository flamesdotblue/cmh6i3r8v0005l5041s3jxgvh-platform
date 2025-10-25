import React from 'react'
import { motion } from 'framer-motion'

const lines = [
  "We're a Think Tank — built for celebrities, brands, and change-makers.",
  'BonBern Think Tank Studio is a behavior-first consultancy.',
  "We believe the world doesn't move on logic.",
  'It moves on emotions, stories, and belief.',
  'So we go beyond marketing — into minds, memories, & meaning.',
  'We blend psychology with creativity to shape perception.',
  'From image-building and viral campaigns',
  'to solving real-world problems that demand attention.',
  'Our secret?',
  'A rare mix of psychological insight, creative storytelling, and tech-powered execution.'
]

export default function AboutChapters() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      {/* Ambient backdrop */}
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(700px_500px_at_15%_10%,rgba(56,189,248,0.10),transparent),radial-gradient(700px_400px_at_85%_0%,rgba(201,168,106,0.12),transparent)] opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.4)_30%,#0A0A0B_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="rounded-2xl border border-white/10 p-6 sm:p-10" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))' }}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-semibold"
          >
            About Us
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18 } } }}
            className="mt-8 space-y-4 md:space-y-5"
          >
            {lines.map((t, i) => (
              <motion.p
                key={i}
                variants={{ hidden: { opacity: 0, y: 10, filter: 'blur(6px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)' } }}
                transition={{ duration: 0.5 }}
                className={`text-[clamp(16px,2.1vw,22px)] leading-relaxed ${i === 0 ? 'text-white' : 'text-white/85'}`}
              >
                {t}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
