'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Narrative() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      className="relative overflow-hidden py-28 md:py-40"
      style={{ background: 'var(--bg-cream)' }}
    >
      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(10,20,16,0.025) 60px, rgba(10,20,16,0.025) 61px)',
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute -left-20 top-1/4 w-96 h-96 pointer-events-none animate-morph"
        style={{
          background: 'radial-gradient(circle, rgba(94,234,212,0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        className="absolute -right-20 bottom-0 w-80 h-80 pointer-events-none animate-morph"
        style={{
          background: 'radial-gradient(circle, rgba(245,169,98,0.14) 0%, transparent 70%)',
          filter: 'blur(55px)',
          animationDelay: '4s',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.span
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full mono-label mb-10"
          style={{
            background: 'rgba(15,118,110,0.08)',
            border: '1px solid rgba(15,118,110,0.18)',
            color: 'var(--accent-deep)',
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-deep)]" />
          Herkenbaar?
        </motion.span>

        <motion.p
          className="font-display font-medium leading-[1.25] tracking-[-0.025em]"
          style={{
            fontSize: 'clamp(1.9rem, 4.2vw, 3rem)',
            color: 'var(--ink-dark)',
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Het is maandagochtend.
          Je inbox telt{' '}
          <mark
            style={{
              background: 'rgba(245,169,98,0.35)',
              color: 'var(--ink-dark)',
              padding: '0 8px 2px',
              borderRadius: '6px',
            }}
          >
            47 ongelezen mails
          </mark>.
          Drie offertes wachten, je team vraagt om updates, en ergens daartussen
          probeer je écht werk te doen.
        </motion.p>

        <motion.p
          className="font-display font-bold leading-[1.15] mt-10"
          style={{
            fontSize: 'clamp(2rem, 4.6vw, 3.2rem)',
            color: 'var(--ink-dark)',
            letterSpacing: '-0.03em',
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          Zo hoeft het niet te zijn.
        </motion.p>

        <motion.p
          className="mt-8 text-lg md:text-xl leading-[1.65] max-w-2xl"
          style={{ color: 'var(--muted-l)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          Slimme automatisering neemt het repeterende werk uit handen. Niet morgen,
          niet na een maandenlang traject — maar binnen weken. Wij bouwen het, jij
          ziet het resultaat direct terug in je agenda.
        </motion.p>

        {/* Visual divider */}
        <motion.div
          className="mt-14 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(10,20,16,0.18))' }} />
          <span className="mono-label" style={{ color: 'var(--muted-l)' }}>
            ↓ onze aanpak
          </span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(10,20,16,0.18), transparent)' }} />
        </motion.div>
      </div>
    </section>
  );
}
