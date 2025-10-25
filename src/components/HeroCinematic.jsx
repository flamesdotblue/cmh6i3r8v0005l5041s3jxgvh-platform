import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function HeroCinematic() {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const layer1X = useTransform(mx, [0, 1], ['-8px', '8px'])
  const layer1Y = useTransform(my, [0, 1], ['-8px', '8px'])
  const layer2X = useTransform(mx, [0, 1], ['-16px', '16px'])
  const layer2Y = useTransform(my, [0, 1], ['-16px', '16px'])

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mx.set(x)
    my.set(y)
  }

  return (
    <section id="home" ref={ref} onMouseMove={onMouseMove} className="relative h-[100svh] overflow-hidden">
      {/* Cinematic background layers */}
      <div className="absolute inset-0">
        <motion.div style={{ x: layer2X, y: layer2Y }} className="absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_20%_-10%,rgba(56,189,248,0.10),transparent),radial-gradient(800px_500px_at_90%_10%,rgba(201,168,106,0.14),transparent),linear-gradient(180deg,#050506,#0A0A0B)]" />
        </motion.div>
        <motion.div style={{ x: layer1X, y: layer1Y }} className="absolute inset-0 opacity-60" aria-hidden>
          <div className="absolute inset-0 animate-[drift_16s_ease-in-out_infinite] bg-[radial-gradient(700px_400px_at_50%_10%,rgba(255,255,255,0.06),transparent)] mix-blend-screen" />
        </motion.div>
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0B] to-transparent" aria-hidden />
      </div>

      {/* Top Nav */}
      <div className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto max-w-[1200px] px-6 py-5 flex items-center justify-between">
          <div className="font-semibold tracking-wide">BonBern</div>
          <nav className="hidden md:flex items-center gap-7 text-sm text-white/80">
            <a href="#about" className="hover:text-white hover:underline underline-offset-4">About</a>
            <a href="#process" className="hover:text-white hover:underline underline-offset-4">Process</a>
            <a href="#experience" className="hover:text-white hover:underline underline-offset-4">Work</a>
            <a href="#contact" className="rounded-full border border-white/20 px-4 py-1.5 hover:border-white/40">Start the Conversation</a>
          </nav>
        </div>
      </div>

      {/* Hero copy */}
      <div className="relative z-20 h-full flex items-center">
        <div className="mx-auto max-w-[1200px] px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[clamp(40px,7vw,88px)] leading-[1.05] font-serif font-semibold"
          >
            <span className="block">Perception is Power.</span>
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="block text-white/85 font-normal text-[clamp(16px,2vw,22px)] mt-4 max-w-2xl"
            >
              We build the unseen forces that move culture.
            </motion.span>
          </motion.h1>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="group mt-10 inline-flex items-center gap-2 text-white/80 hover:text-white"
          >
            <span className="text-sm">Scroll</span>
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30">
              <span className="translate-y-[-2px] transition-transform group-hover:translate-y-[2px]">↓</span>
            </span>
          </motion.a>
        </div>
      </div>

      <style>{`
        @keyframes drift { 0%,100%{transform:translateY(-2%)} 50%{transform:translateY(2%)} }
      `}</style>
    </section>
  )
}
