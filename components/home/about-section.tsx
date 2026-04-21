'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    client: 'Fit Administratie',
    sector: 'Administratiekantoor · Noord-Holland',
    title: 'Hoe Fit Administratie haar volledige documentverwerking automatiseerde met AI',
    description:
      'Automatische verwerking van facturen, klantcorrespondentie en rapportages. Wekelijks meer dan 12 uur bespaard zonder extra personeel.',
    result: '+70% sneller',
    resultLabel: 'verwerking',
    accent: '#22D3EE',
    accentRgb: '34,211,238',
    tag: 'AI Automatisering',
  },
  {
    client: 'YouradviesgroepBV',
    sector: 'Financieel advies · Amsterdam',
    title: 'Hoe YouradviesgroepBV veilig AI inzet voor interne kennisdeling zonder AVG-risico',
    description:
      'Private AI-omgeving die volledig lokaal draait. Adviseurs raadplegen interne kennis en stellen rapporten sneller op — zonder dat gevoelige data de deur uitgaat.',
    result: '100% AVG',
    resultLabel: 'compliant',
    accent: '#10D9A0',
    accentRgb: '16,217,160',
    tag: 'Private AI',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="cases"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: 'var(--bg-0)' }}
    >
      {/* Ambient */}
      <div
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mono-label mb-5"
            style={{
              background: 'rgba(34,211,238,0.08)',
              border: '1px solid rgba(34,211,238,0.22)',
              color: 'var(--accent)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            Case Studies
          </span>
          <h2
            className="font-display font-extrabold tracking-[-0.03em] leading-[0.98] mb-4"
            style={{ fontSize: 'clamp(2rem, 4.2vw, 3rem)', color: 'var(--ink)' }}
          >
            Niet overtuigd?<br />
            <span className="text-gradient-emerald">Bekijk onze cases.</span>
          </h2>
          <p className="text-base md:text-[17px] leading-[1.65] max-w-xl" style={{ color: 'var(--muted-d)' }}>
            Wij geloven in transparantie en de kracht van gedeelde kennis. Concrete
            resultaten voor Nederlandse bedrijven — geen vage beloften.
          </p>
        </motion.div>

        {/* Case cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {cases.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl overflow-hidden p-8 md:p-10 transition-[transform,box-shadow] duration-500 hover:-translate-y-1"
              style={{
                background: `linear-gradient(145deg, rgba(${c.accentRgb},0.05) 0%, rgba(17,22,38,0.95) 60%)`,
                border: `1px solid rgba(${c.accentRgb},0.18)`,
                boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, transparent, ${c.accent}, transparent)` }}
              />

              {/* Decorative orb */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle, rgba(${c.accentRgb},0.18) 0%, transparent 70%)`,
                  filter: 'blur(20px)',
                }}
              />

              {/* Tag */}
              <div
                className="inline-flex items-center gap-1.5 mono-label px-2.5 py-1 rounded-full mb-6"
                style={{
                  background: `rgba(${c.accentRgb},0.10)`,
                  color: c.accent,
                  border: `1px solid rgba(${c.accentRgb},0.25)`,
                }}
              >
                {c.tag}
              </div>

              {/* Client */}
              <div className="mono-label mb-3" style={{ color: 'var(--muted-d)' }}>
                {c.sector}
              </div>

              <h3
                className="font-display text-xl md:text-[1.35rem] font-bold mb-4 leading-[1.3] tracking-tight"
                style={{ color: 'var(--ink)' }}
              >
                {c.title}
              </h3>

              <p className="text-[14.5px] leading-[1.65] mb-8" style={{ color: 'var(--muted-d)' }}>
                {c.description}
              </p>

              <div className="flex items-end justify-between gap-4 pt-6" style={{ borderTop: '1px solid rgba(238,239,245,0.06)' }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-extrabold text-xs"
                    style={{
                      background: `rgba(${c.accentRgb},0.12)`,
                      color: c.accent,
                      border: `1px solid rgba(${c.accentRgb},0.28)`,
                    }}
                  >
                    {c.client.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="font-display font-bold text-[14px]" style={{ color: 'var(--ink)' }}>
                    {c.client}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display font-extrabold text-2xl tracking-tight" style={{ color: c.accent }}>
                    {c.result}
                  </div>
                  <div className="mono-label" style={{ color: 'var(--muted-d)' }}>{c.resultLabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 font-display font-bold text-[14px] px-6 py-3.5 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #22D3EE 0%, #06B6D4 100%)',
              color: '#06090F',
              boxShadow: '0 12px 30px rgba(34,211,238,0.28)',
            }}
          >
            Let&apos;s talk
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 font-display text-sm font-semibold"
            style={{ color: 'var(--accent)' }}
          >
            Bekijk alle cases
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
