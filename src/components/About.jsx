import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-white/5" />
      </div>
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              We’re a Think Tank — built for celebrities, brands, and change-makers.
            </h2>
          </motion.div>

          <motion.div
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:col-span-7 text-white/80 space-y-5"
          >
            <p>BonBern Think Tank Studio is a behavior-first consultancy.</p>
            <p>We believe the world doesn’t move on logic. It moves on emotions, stories, and belief.</p>
            <p>So we go beyond marketing, into minds, memories, & meaning.</p>
            <p>We blend psychology with creativity to shape perception.</p>
            <p>From image-building and viral campaigns to solving real-world problems that demand attention.</p>
            <p className="text-white">Our secret?</p>
            <p>A rare mix of psychological insight, creative storytelling, and tech-powered execution.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
