import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const partners = [
  { group: 'Artists', names: 'Badshah · Sunidhi Chauhan · Jasleen Royal · Tanishk Bagchi' },
  { group: 'Labels', names: 'UMG · Saregama · T-Series · Artiste First' },
  { group: 'Brands', names: 'SonyLiv · Discovery · Hindustan Times · Nobel Chemist' },
]

const studies = [
  { title: 'Persona Architecture — Celebrity X', line: 'How we built belief for a culture-defining artist.' },
  { title: 'Movement Marketing — Brand Y', line: 'Turning audiences into advocates through narrative design.' },
  { title: 'Public Sentiment Shift — Campaign Z', line: 'Engineering attention with psychology-first creative.' },
  { title: 'Launch Psychology — Media A', line: 'Designing the first 7 seconds for maximum memory encoding.' },
]

const insights = [
  'We use behavioral science to decode emotions.',
  'Every campaign starts with data from the human mind — not the market.',
  'Our goal is not to sell, but to shape perception.',
]

export default function ExperienceSuite() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [20, -20])

  return (
    <section id="experience" ref={ref} className="relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      {/* Who we work with */}
      <div className="mx-auto max-w-[1200px] px-6 py-24 lg:py-32">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-serif font-semibold"
        >
          Who We Work With
        </motion.h3>
        <p className="mt-3 text-white/80 max-w-3xl">Over the years, we've collaborated with some of the most influential names across music, media, & brands.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {partners.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden"
            >
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-300" style={{ background: 'radial-gradient(400px 200px at 20% 0%, rgba(56,189,248,0.10), transparent)' }} />
              <div className="relative">
                <div className="text-xs tracking-widest text-[#C9A86A]">{p.group.toUpperCase()}</div>
                <div className="mt-2 text-lg text-white/90 will-change-transform transition-transform group-hover:translate-y-[-1px]">{p.names}</div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition shadow-[inset_0_0_60px_rgba(255,255,255,0.03)]" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Studies: horizontal parallax track */}
      <div className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_80%_10%,rgba(56,189,248,0.10),transparent)] opacity-60" />
        </div>
        <div className="mx-auto max-w-[1200px] px-6">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-serif font-semibold"
          >
            Case Studies
          </motion.h3>
        </div>

        <motion.div style={{ y: y1 }} className="mt-8">
          <div className="relative w-full overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="flex gap-6 px-6 pb-2" style={{ minWidth: '100%' }}>
              {studies.map((s, i) => (
                <div key={i} className="snap-start shrink-0 w-[85%] md:w-[520px]">
                  <div className="relative h-[320px] rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden group">
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(600px 300px at 70% 10%, rgba(201,168,106,0.10), transparent)' }} />
                    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))' }} />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="text-sm text-white/70">{s.line}</div>
                      <div className="mt-1 text-xl font-semibold">{s.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Psychology split */}
      <div className="mx-auto max-w-[1200px] px-6 py-24 lg:py-32">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 relative"
          >
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0B0B0C] relative">
              <div className="absolute inset-0 animate-[pulsegrid_14s_ease-in-out_infinite] opacity-70" style={{ background: 'radial-gradient(500px 300px at 40% 20%, rgba(56,189,248,0.14), transparent)' }} />
              <div className="absolute inset-0" style={{ background: 'radial-gradient(600px 260px at 70% 60%, rgba(201,168,106,0.10), transparent)' }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:col-span-6"
          >
            <h3 className="text-2xl md:text-4xl font-serif font-semibold">The Psychology Behind Our Work</h3>
            <div className="mt-6 space-y-4">
              {insights.map((t, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="text-white/85 text-[clamp(15px,2vw,18px)]"
                >
                  {t}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Studio CTA + Footer */}
      <div id="contact" className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_10%_10%,rgba(56,189,248,0.12),transparent),radial-gradient(800px_500px_at_90%_0%,rgba(201,168,106,0.12),transparent)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-6">
          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(28px,5vw,54px)] font-serif font-semibold"
          >
            BonBern Think Tank Studio
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-3 text-white/85 max-w-2xl text-lg"
          >
            Where creativity meets psychology. Let’s shape how the world sees you.
          </motion.p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="mailto:hello@bonbern.studio" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:border-white/40 hover:shadow-[0_0_40px_rgba(56,189,248,0.12)] transition">Start the Conversation</a>
            <a href="#home" className="text-sm underline underline-offset-4 text-white/80 hover:text-white">Back to top</a>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10">
          <div className="mx-auto max-w-[1200px] px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-white/70">
            <div>“We don’t market. We move minds.”</div>
            <div className="flex items-center gap-6">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#process" className="hover:text-white">Process</a>
              <a href="#experience" className="hover:text-white">Work</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
            <div>© {new Date().getFullYear()} BonBern Think Tank Studio</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulsegrid { 0%,100%{transform:scale(1)} 50%{transform:scale(1.02)} }
      `}</style>
    </section>
  )
}
