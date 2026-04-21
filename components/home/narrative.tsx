'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const points = [
  { title: 'Focus op resultaten', desc: 'Geen vage rapporten of buzzwords. Wij leveren werkende oplossingen die direct meetbaar resultaat opleveren.' },
  { title: 'Innovatie door passie', desc: 'AI is ons vak en onze passie. Wij blijven op de hoogte van de nieuwste ontwikkelingen zodat uw bedrijf dat niet hoeft.' },
  { title: 'Direct contact', desc: 'U praat altijd rechtstreeks met Léon — geen accountmanagers, geen wachtrijen. Snel schakelen wanneer dat nodig is.' },
];

export default function Narrative() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="relative overflow-hidden py-28 md:py-40"
      style={{ background: 'var(--bg-cream)' }}
    >
      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.30]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(6,8,15,0.025) 60px, rgba(6,8,15,0.025) 61px)',
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute -left-20 top-1/4 w-96 h-96 pointer-events-none animate-morph"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.10) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        className="absolute -right-20 bottom-0 w-80 h-80 pointer-events-none animate-morph"
        style={{
          background: 'radial-gradient(circle, rgba(16,217,160,0.12) 0%, transparent 70%)',
          filter: 'blur(55px)',
          animationDelay: '4s',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mono-label mb-5"
            style={{
              background: 'rgba(14,116,144,0.08)',
              border: '1px solid rgba(14,116,144,0.18)',
              color: 'var(--accent-deep)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-deep)' }} />
            Waarom Ariance
          </span>
          <h2
            className="font-display font-extrabold tracking-[-0.03em] leading-[0.98] mb-5"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', color: 'var(--ink-dark)' }}
          >
            Waarom samenwerken
            <br />
            <span className="text-gradient-emerald">met ons?</span>
          </h2>
          <p
            className="text-base md:text-[17px] leading-[1.7] max-w-xl mx-auto"
            style={{ color: 'var(--muted-l)' }}
          >
            Begeef je vol vertrouwen door het complexe landschap van A.I. — met
            Ariance als betrouwbare gids. Wij zetten ons volledig in om de beste
            oplossingen te leveren voor jouw bedrijf.
          </p>
        </motion.div>

        {/* 3-column points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl p-8"
              style={{
                background: 'linear-gradient(145deg, #07110D 0%, #0C1914 100%)',
                border: '1px solid rgba(34,211,238,0.14)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.18)',
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{ background: 'linear-gradient(90deg, transparent, #22D3EE, transparent)' }}
              />
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(34,211,238,0.10)', border: '1px solid rgba(34,211,238,0.22)' }}
              >
                <Check size={18} style={{ color: 'var(--accent)' }} strokeWidth={2.5} />
              </div>
              <h3
                className="font-display font-bold text-[1.1rem] mb-3 tracking-tight"
                style={{ color: 'var(--ink)' }}
              >
                {p.title}
              </h3>
              <p className="text-[14px] leading-[1.65]" style={{ color: 'var(--muted-d)' }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 font-display font-bold text-[15px] px-8 py-4 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #22D3EE 0%, #06B6D4 100%)',
              color: '#06090F',
              boxShadow: '0 14px 40px rgba(34,211,238,0.30)',
            }}
          >
            Plan een gesprek
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
