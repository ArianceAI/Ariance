'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

const clients = [
  {
    name: 'Fit Administratie',
    sector: 'Administratiekantoor',
    initials: 'FA',
    accent: '#5EEAD4',
    accentRgb: '94,234,212',
    quote:
      'De AI-workflows van Ariance verwerken onze documenten en klantcommunicatie zelfstandig. We winnen er wekelijks uren mee terug.',
    metric: { v: '+70%', l: 'sneller verwerkt' },
  },
  {
    name: 'YouradviesgroepBV',
    sector: 'Financieel advies',
    initials: 'YA',
    accent: '#F5A962',
    accentRgb: '245,169,98',
    quote:
      'Met de private AI-omgeving kunnen we veilig interne kennis raadplegen en adviesrapporten versneld opstellen — zonder dat data de deur uitgaat.',
    metric: { v: 'AVG', l: 'volledig compliant' },
  },
];

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: 'var(--bg-1)' }}
    >
      {/* Ambient */}
      <div
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(94,234,212,0.1) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245,169,98,0.08) 0%, transparent 60%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          className="max-w-xl mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mono-label mb-5"
            style={{
              background: 'rgba(94,234,212,0.08)',
              border: '1px solid rgba(94,234,212,0.22)',
              color: 'var(--accent)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            Klanten
          </span>
          <h2
            className="font-display font-extrabold tracking-[-0.03em] leading-[0.98] mb-4"
            style={{ fontSize: 'clamp(2rem, 4.2vw, 3rem)', color: 'var(--ink)' }}
          >
            Nederlandse bedrijven<br />
            die al profiteren.
          </h2>
          <p className="text-base md:text-[17px] leading-[1.65]" style={{ color: 'var(--muted-d)' }}>
            Van administratiekantoren tot adviesbureaus — organisaties door heel Nederland
            vertrouwen op Ariance voor praktische AI.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl overflow-hidden p-8 md:p-10 transition-[transform,box-shadow] duration-500 hover:-translate-y-1"
              style={{
                background: 'rgba(19,38,32,0.6)',
                border: `1px solid rgba(${c.accentRgb},0.18)`,
                backdropFilter: 'blur(14px)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
              }}
            >
              {/* Decorative accent corner */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle, rgba(${c.accentRgb},0.18) 0%, transparent 70%)`,
                  filter: 'blur(20px)',
                }}
              />

              {/* Top line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${c.accent}, transparent)`,
                }}
              />

              <Quote
                size={32}
                className="mb-6 opacity-40"
                style={{ color: c.accent }}
              />

              <blockquote
                className="font-display text-xl md:text-[1.4rem] leading-[1.4] mb-10 tracking-[-0.015em]"
                style={{ color: 'var(--ink)' }}
              >
                {c.quote}
              </blockquote>

              <div className="flex items-end justify-between gap-4 pt-6" style={{ borderTop: '1px solid rgba(240,239,230,0.06)' }}>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-extrabold text-sm shrink-0"
                    style={{
                      background: `rgba(${c.accentRgb},0.15)`,
                      color: c.accent,
                      border: `1px solid rgba(${c.accentRgb},0.3)`,
                    }}
                  >
                    {c.initials}
                  </div>
                  <div>
                    <div className="font-display font-bold text-[15px]" style={{ color: 'var(--ink)' }}>
                      {c.name}
                    </div>
                    <div className="mono-label mt-0.5" style={{ color: 'var(--muted-d)' }}>
                      {c.sector}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display font-extrabold text-2xl tracking-tight" style={{ color: c.accent }}>
                    {c.metric.v}
                  </div>
                  <div className="mono-label" style={{ color: 'var(--muted-d)' }}>
                    {c.metric.l}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-12 text-center text-sm"
          style={{ color: 'var(--muted-d)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Vertrouwd door MKB-bedrijven van Alkmaar tot Eindhoven.
        </motion.p>
      </div>
    </section>
  );
}
