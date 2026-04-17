'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check, MapPin, Calendar } from 'lucide-react';

const highlights = [
  'Direct contact met de oprichter — geen tussenlagen',
  'Maatwerk per branche en bedrijfsgrootte',
  'Transparante aanpak & vaste prijs vooraf',
  'Focus op Nederlandse markt en AVG-compliance',
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="over"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: 'var(--bg-cream)' }}
    >
      {/* Diagonal pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(10,20,16,0.02) 80px, rgba(10,20,16,0.02) 81px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">

          {/* Left — Founder spotlight card (60%) */}
          <motion.div
            className="lg:col-span-3 relative"
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative rounded-[28px] overflow-hidden p-10 md:p-14"
              style={{
                background: 'linear-gradient(155deg, #07110D 0%, #0C1914 60%, #132620 100%)',
                boxShadow: '0 40px 80px rgba(7,17,13,0.35), 0 0 0 1px rgba(94,234,212,0.12)',
              }}
            >
              {/* Ambient glows */}
              <div
                className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(94,234,212,0.24) 0%, transparent 65%)',
                  filter: 'blur(40px)',
                }}
              />
              <div
                className="absolute -bottom-24 -left-10 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(245,169,98,0.12) 0%, transparent 65%)',
                  filter: 'blur(50px)',
                }}
              />

              {/* Top: label + dot */}
              <div className="flex items-center justify-between mb-10 relative">
                <div className="flex items-center gap-2">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-60" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-[var(--accent)]" />
                  </span>
                  <span className="mono-label" style={{ color: 'var(--accent)' }}>
                    Oprichter aan het woord
                  </span>
                </div>
                <span className="mono-label" style={{ color: 'rgba(240,239,230,0.35)' }}>
                  ∙ 01 / 01
                </span>
              </div>

              {/* Big quote */}
              <blockquote
                className="font-display font-medium text-white leading-[1.25] mb-12 relative tracking-[-0.02em]"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
              >
                <span
                  className="absolute -left-4 -top-6 font-serif leading-none opacity-30 pointer-events-none select-none"
                  style={{ fontSize: '5rem', color: 'var(--accent)' }}
                >
                  “
                </span>
                U praat altijd direct met{' '}
                <span className="text-gradient-emerald">mij</span> — geen accountmanagers,
                geen wachtrijen. Gewoon eerlijk advies en échte resultaten.
              </blockquote>

              {/* Founder row */}
              <div className="flex items-center gap-4 relative">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-extrabold text-xl shrink-0"
                  style={{
                    background: 'linear-gradient(145deg, var(--accent) 0%, var(--accent-deep) 100%)',
                    color: 'var(--ink-dark)',
                    boxShadow: '0 12px 28px rgba(15,118,110,0.4)',
                  }}
                >
                  LÁ
                </div>
                <div>
                  <div className="font-display text-white font-bold text-lg">Léon Ariëns</div>
                  <div className="flex items-center gap-2 mt-1 mono-label" style={{ color: 'var(--muted-d)' }}>
                    <MapPin size={11} />
                    Oprichter · Alkmaar
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div
                className="grid grid-cols-3 gap-4 mt-10 pt-8 relative"
                style={{ borderTop: '1px solid rgba(240,239,230,0.08)' }}
              >
                {[
                  { v: '100%', l: 'Maatwerk' },
                  { v: 'Direct', l: 'Contact' },
                  { v: 'MKB', l: 'Focus' },
                ].map(({ v, l }) => (
                  <div key={l}>
                    <div className="font-display text-2xl font-extrabold text-white mb-1 tracking-tight">{v}</div>
                    <div className="mono-label" style={{ color: 'var(--muted-d)' }}>
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating amber badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 md:-right-8 hidden md:block"
              initial={{ opacity: 0, y: 20, rotate: 2 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 2 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div
                className="font-display font-semibold text-sm px-5 py-3.5 rounded-2xl flex items-center gap-2"
                style={{
                  background: 'var(--amber)',
                  color: 'var(--ink-dark)',
                  boxShadow: '0 20px 40px rgba(245,169,98,0.4)',
                }}
              >
                <Calendar size={14} />
                Opgericht 2025 · Alkmaar
              </div>
            </motion.div>
          </motion.div>

          {/* Right — text (40%) */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mono-label mb-5"
              style={{
                background: 'rgba(15,118,110,0.08)',
                border: '1px solid rgba(15,118,110,0.2)',
                color: 'var(--accent-deep)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-deep)]" />
              Over Ariance
            </span>

            <h2
              className="font-display font-extrabold tracking-[-0.03em] leading-[1] mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)', color: 'var(--ink-dark)' }}
            >
              Eén oprichter.<br />
              <mark
                style={{
                  background: 'rgba(245,169,98,0.35)',
                  color: 'var(--ink-dark)',
                  padding: '0 8px 2px',
                  borderRadius: '6px',
                }}
              >
                Nul tussenpersonen.
              </mark>
            </h2>

            <p className="text-base md:text-[17px] leading-[1.7] mb-4" style={{ color: 'var(--muted-l)' }}>
              Ariance is opgericht door <strong style={{ color: 'var(--ink-dark)' }}>Léon Ariëns</strong> —
              AI-specialist met een passie voor het praktisch toepassen van AI in
              Nederlandse bedrijven.
            </p>
            <p className="text-base md:text-[17px] leading-[1.7] mb-8" style={{ color: 'var(--muted-l)' }}>
              Vanuit Alkmaar, werkzaam door heel Nederland. Elke oplossing wordt op maat
              gemaakt voor uw branche, processen en budget.
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 text-[14.5px] font-medium"
                  style={{ color: 'var(--ink-dark)' }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'var(--accent-deep)' }}
                  >
                    <Check size={11} className="text-white" strokeWidth={3} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 font-display font-semibold text-sm px-6 py-3.5 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
              style={{
                background: 'var(--ink-dark)',
                color: 'var(--ink)',
                boxShadow: '0 14px 32px rgba(10,20,16,0.25)',
              }}
            >
              Maak kennis met Léon
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
