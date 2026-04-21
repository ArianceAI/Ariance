'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Wrench, TrendingUp } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'A.I. Roadmap',
    description:
      'Het begint met een plan. We brengen samen uw bedrijfsprocessen in kaart, identificeren AI-kansen en maken een concrete roadmap inclusief concurrentieanalyse.',
    accent: '#818cf8',
    accentRgb: '129,140,248',
    points: ['Brainstormen & ideeën', 'Plan van uitvoering', 'Concurrentieanalyse'],
  },
  {
    num: '02',
    icon: Wrench,
    title: 'Uitvoering',
    description:
      'De strategie wordt omgezet in actie — dat is waar de magie plaatsvindt. Wekelijkse updates en volledige transparantie over voortgang en resultaten.',
    accent: '#c084fc',
    accentRgb: '192,132,252',
    points: ['Implementatie', 'Monitoring', 'Stakeholder betrokkenheid'],
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Growth & Scale',
    description:
      'We blijven A.I.-tools inzetten om exponentiële groei te stimuleren. Data-gedreven optimalisaties en een schaalbare infrastructuur die met uw bedrijf meegroeit.',
    accent: '#d8b4fe',
    accentRgb: '216,180,254',
    points: ['Data-driven beslissingen', 'Optimalisaties', 'Schaalbare infrastructuur'],
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="werkwijze"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: 'var(--bg-0)' }}
    >
      {/* Ambient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(129,140,248,0.06) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          className="max-w-2xl mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mono-label mb-5"
            style={{
              background: 'rgba(129,140,248,0.08)',
              border: '1px solid rgba(129,140,248,0.22)',
              color: 'var(--accent)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            Werkwijze
          </span>
          <h2
            className="font-display font-extrabold tracking-[-0.03em] leading-[0.98] mb-5"
            style={{ fontSize: 'clamp(2rem, 4.2vw, 3.2rem)', color: 'var(--ink)' }}
          >
            Een eenvoudig,{' '}
            <span className="text-gradient-emerald">doeltreffend</span><br />
            3-stappen proces.
          </h2>
          <p className="text-base md:text-[17px] leading-[1.65]" style={{ color: 'var(--muted-d)' }}>
            Geen eindeloze trajecten, geen dure rapporten die niemand leest.
            Binnen enkele weken staat er iets wat échte waarde oplevert.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {/* Connecting dashed line */}
          <div
            className="absolute top-10 left-[16.67%] right-[16.67%] h-px hidden md:block pointer-events-none"
            style={{
              background:
                'repeating-linear-gradient(90deg, rgba(129,140,248,0.4) 0px, rgba(129,140,248,0.4) 6px, transparent 6px, transparent 16px)',
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Huge outline number — decorative */}
                <div
                  aria-hidden
                  className="absolute -top-8 -left-2 font-display font-black leading-none select-none pointer-events-none"
                  style={{
                    fontSize: '9rem',
                    color: 'transparent',
                    WebkitTextStroke: `1px rgba(${step.accentRgb},0.12)`,
                  }}
                >
                  {step.num}
                </div>

                {/* Icon circle */}
                <div className="relative mb-8 z-10">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: 'var(--bg-2)',
                      border: `1px solid rgba(${step.accentRgb},0.3)`,
                      boxShadow: `0 0 0 8px rgba(${step.accentRgb},0.05), 0 12px 30px rgba(${step.accentRgb},0.18)`,
                    }}
                  >
                    <Icon size={26} style={{ color: step.accent }} strokeWidth={1.6} />
                  </div>
                  <div
                    className="absolute -top-1.5 -right-1.5 w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-xs"
                    style={{
                      background: step.accent,
                      color: 'var(--ink-dark)',
                    }}
                  >
                    {i + 1}
                  </div>
                </div>

                <div className="mono-label mb-3" style={{ color: step.accent }}>
                  Stap {step.num}
                </div>
                <h3
                  className="font-display text-xl md:text-[1.4rem] font-bold mb-3 tracking-tight"
                  style={{ color: 'var(--ink)' }}
                >
                  {step.title}
                </h3>
                <p className="text-[14.5px] leading-[1.65] mb-5" style={{ color: 'var(--muted-d)' }}>
                  {step.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {step.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-[13px]" style={{ color: 'var(--muted-d)' }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: step.accent }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
