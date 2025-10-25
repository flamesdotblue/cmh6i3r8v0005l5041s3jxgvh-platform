import React from 'react'
import { motion } from 'framer-motion'

export default function Showcase() {
  return (
    <section className="relative" id="work">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-white/5" />
      </div>

      {/* Who we work with */}
      <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
        <motion.h3
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold max-w-4xl"
        >
          Over the years, we’ve collaborated with some of the most influential names across music, media, & brands.
        </motion.h3>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-white/5 p-6 bg-white/5"
          >
            <div className="text-xs tracking-widest text-[#37F08D] mb-2">ARTISTS</div>
            <p className="text-lg text-white/90">Badshah · Sunidhi Chauhan · Jasleen Royal · Tanishk Bagchi</p>
          </motion.div>

          <motion.div
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="rounded-xl border border-white/5 p-6 bg-white/5"
          >
            <div className="text-xs tracking-widest text-[#37F08D] mb-2">LABELS</div>
            <p className="text-lg text-white/90">UMG · Saregama · T-Series · Artiste First</p>
          </motion.div>

          <motion.div
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="rounded-xl border border-white/5 p-6 bg-white/5"
          >
            <div className="text-xs tracking-widest text-[#37F08D] mb-2">BRANDS</div>
            <p className="text-lg text-white/90">SonyLiv · Discovery · Hindustan Times · Nobel Chemist</p>
          </motion.div>
        </div>
      </div>

      {/* Founder */}
      <div id="founder" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_85%_10%,rgba(55,240,141,0.12),transparent)]" />
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28 relative">
          <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
            <motion.div
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-6"
            >
              <div className="aspect-[4/5] w-full rounded-2xl border border-white/10 bg-gradient-to-br from-[#101010] to-[#0B0B0B] relative overflow-hidden">
                <div className="absolute inset-0" style={{background:"radial-gradient(600px_300px_at_60%_20%,rgba(55,240,141,0.18),transparent)"}} />
                <div className="absolute inset-0 opacity-[0.07]" style={{background:"url('data:image/svg+xml;utf8, %3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%25\\' height=\\'100%25\\'%3E%3Cdefs%3E%3Cpattern id=\\'grid\\' width=\\'40\\' height=\\'40\\' patternUnits=\\'userSpaceOnUse\\'%3E%3Cpath d=\\'M 40 0 L 0 0 0 40\\' fill=\\'none\\' stroke=\\'%23ffffff\\' stroke-width=\\'0.5\\' opacity=\\'0.8\\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' fill=\\'url(%23grid)\\'/%3E%3C/svg%3E') center/cover"}} />
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="md:col-span-6"
            >
              <h3 className="text-2xl md:text-4xl font-bold">Aakashraj Kusum Ambre</h3>
              <p className="mt-2 text-white/70">Founder & CEO · Behavioral Strategist · Celebrity Consultant</p>
              <div className="mt-6 space-y-5 text-white/80">
                <p>Aakashraj blends over a decade of experience in advertising, celebrity marketing, and psychology-driven strategy.</p>
                <p>BonBern is his brainchild built to help individuals and brands shape how they are seen, heard, and remembered.</p>
                <p>From crafting iconic public personas to launching culture-shifting campaigns, his approach combines behavioral science, creative storytelling, and a deep understanding of Indian culture, media, and tech.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div id="contact" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <motion.h3
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black"
          >
            Let’s Build Something Worth Remembering
          </motion.h3>
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 max-w-3xl text-white/80 space-y-5"
          >
            <p>Aakashraj blends over a decade of experience in advertising, celebrity marketing, and psychology-driven strategy.</p>
            <p>BonBern is his brainchild built to help individuals and brands shape how they are seen, heard, and remembered.</p>
            <p>From crafting iconic public personas to launching culture-shifting campaigns, his approach combines behavioral science, creative storytelling, and a deep understanding of Indian culture, media, and tech.</p>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="mailto:hello@bonbern.studio" className="inline-flex items-center gap-2 rounded-full border border-[#37F08D]/60 px-6 py-3 text-sm font-semibold hover:border-[#37F08D] hover:shadow-[0_0_40px_rgba(55,240,141,0.15)] hover:scale-[1.02] transition">Start a Conversation</a>
            <a href="#work" className="text-sm underline underline-offset-4 text-white/80 hover:text-white">See Work</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-[1200px] px-6 py-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 justify-between text-sm">
          <div className="text-white/80">BonBern · Behavior-first. Culture-deep.</div>
          <nav className="flex items-center gap-6 text-white/60">
            <a href="#about" className="hover:text-white hover:underline underline-offset-4">About</a>
            <a href="#process" className="hover:text-white hover:underline underline-offset-4">Process</a>
            <a href="#work" className="hover:text-white hover:underline underline-offset-4">Work With</a>
            <a href="#founder" className="hover:text-white hover:underline underline-offset-4">Founder</a>
            <a href="#contact" className="hover:text-white hover:underline underline-offset-4">Contact</a>
          </nav>
          <div className="text-white/50">© {new Date().getFullYear()} BonBern Think Tank Studio</div>
        </div>
      </footer>
    </section>
  )
}
