import React from 'react'
import { motion } from 'framer-motion'

const lines = [
  'We work with celebrities to build iconic images.',
  'We work with labels and brands to craft viral campaigns.',
  'And we are passionate about solving real-world problems —',
  'because we can, and we love it!'
]

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      {/* Background "video" layer: animated gradient simulating cinematic motion */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(55,240,141,0.18),transparent),radial-gradient(900px_500px_at_90%_10%,rgba(179,255,0,0.12),transparent),linear-gradient(180deg,#0B0B0B, #0B0B0B)]" />
        <div className="absolute inset-0 animate-[float_14s_ease-in-out_infinite] opacity-40 mix-blend-screen" style={{background:"radial-gradient(1000px_600px_at_50%_10%,rgba(255,255,255,0.08),transparent)"}} />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Sticky nav substitute (minimal) */}
      <div className="relative z-20">
        <div className="sticky top-0 z-30 backdrop-blur-sm/0">
          <div className="mx-auto max-w-[1200px] px-6 py-5 flex items-center justify-between">
            <div className="text-sm tracking-widest text-white/80">BonBern</div>
            <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
              <a href="#about" className="hover:text-white hover:underline underline-offset-4">About</a>
              <a href="#process" className="hover:text-white hover:underline underline-offset-4">Process</a>
              <a href="#work" className="hover:text-white hover:underline underline-offset-4">Work With</a>
              <a href="#founder" className="hover:text-white hover:underline underline-offset-4">Founder</a>
              <a href="#contact" className="px-3 py-1 rounded-full border border-[#37F08D]/50 hover:border-[#37F08D] text-white hover:scale-[1.02] transition">Let’s Build</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 min-h-[88vh] flex items-center">
        <div className="mx-auto max-w-[1200px] px-6">
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]"
          >
            Perception Building Lab
          </motion.h1>
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 max-w-2xl text-white/75"
          >
            Behavior-first creative studio for celebrities, brands, and change-makers.
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex mt-8 items-center gap-2 rounded-full border border-[#37F08D]/50 px-5 py-2 text-sm font-medium hover:border-[#37F08D] hover:shadow-[0_0_30px_rgba(55,240,141,0.15)] hover:scale-[1.02] transition"
          >
            Let’s Build
          </motion.a>
        </div>
      </div>

      {/* Continuation section with same background feel */}
      <div className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.18 }
              }
            }}
            className="max-w-4xl"
          >
            {lines.map((line, i) => (
              <motion.p
                key={i}
                variants={{ hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                className="text-xl md:text-2xl leading-relaxed text-white/90"
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes float { 0%,100%{transform:translateY(-2%)} 50%{transform:translateY(2%)} }
      `}</style>
    </section>
  )
}
