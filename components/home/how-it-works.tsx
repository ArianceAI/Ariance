'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { MessageSquare, Wrench, TrendingUp, Check, ChevronRight } from 'lucide-react';

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
  const [activeStep, setActiveStep] = useState(0);

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
          className="max-w-2xl mb-16"
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

        {/* Interactive steps layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Left — step selector */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === activeStep;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(i)}
                  className="group relative text-left rounded-2xl p-5 transition-all duration-300 w-full"
                  style={{
                    background: isActive
                      ? `linear-gradient(135deg, rgba(${step.accentRgb},0.08) 0%, rgba(${step.accentRgb},0.03) 100%)`
                      : 'transparent',
                    border: `1px solid ${isActive ? `rgba(${step.accentRgb},0.30)` : 'rgba(13,12,24,0.08)'}`,
                    boxShadow: isActive ? `0 4px 20px rgba(${step.accentRgb},0.12)` : 'none',
                  }}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon circle */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        background: isActive ? step.accent : `rgba(${step.accentRgb},0.08)`,
                        boxShadow: isActive ? `0 8px 20px rgba(${step.accentRgb},0.30)` : 'none',
                      }}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                        style={{ color: isActive ? '#ffffff' : step.accent, transition: 'color 0.3s' }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="mono-label mb-0.5" style={{ color: step.accent }}>
                        Stap {step.num}
                      </div>
                      <div
                        className="font-display font-bold text-[15px] transition-colors duration-300"
                        style={{ color: isActive ? 'var(--ink)' : 'var(--muted-d)' }}
                      >
                        {step.title}
                      </div>
                    </div>

                    <ChevronRight
                      size={16}
                      className="shrink-0 transition-transform duration-300"
                      style={{
                        color: isActive ? step.accent : 'rgba(13,12,24,0.25)',
                        transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right — detail panel */}
          <div className="lg:col-span-3 relative min-h-[320px]">
            <AnimatePresence mode="wait">
              {steps.map((step, i) => {
                if (i !== activeStep) return null;
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-3xl p-8 md:p-10 h-full"
                    style={{
                      background: `linear-gradient(145deg, rgba(${step.accentRgb},0.06) 0%, #ffffff 55%)`,
                      border: `1px solid rgba(${step.accentRgb},0.20)`,
                      boxShadow: `0 8px 40px rgba(${step.accentRgb},0.10), 0 2px 8px rgba(0,0,0,0.04)`,
                    }}
                  >
                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)`,
                      }}
                    />

                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        background: step.accent,
                        boxShadow: `0 12px 30px rgba(${step.accentRgb},0.35)`,
                      }}
                    >
                      <Icon size={26} strokeWidth={1.6} style={{ color: '#ffffff' }} />
                    </div>

                    {/* Num + title */}
                    <div className="mono-label mb-2" style={{ color: step.accent }}>
                      Stap {step.num}
                    </div>
                    <h3
                      className="font-display text-2xl font-bold mb-4 tracking-tight"
                      style={{ color: 'var(--ink)' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[15px] leading-[1.7] mb-7" style={{ color: 'var(--muted-d)' }}>
                      {step.description}
                    </p>

                    {/* Points */}
                    <ul className="flex flex-col gap-3">
                      {step.points.map((pt, j) => (
                        <motion.li
                          key={pt}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.09, duration: 0.3, ease: 'easeOut' }}
                          className="flex items-center gap-3 text-[14px]"
                          style={{ color: 'var(--muted-d)' }}
                        >
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                            style={{
                              background: `rgba(${step.accentRgb},0.12)`,
                              border: `1px solid rgba(${step.accentRgb},0.25)`,
                            }}
                          >
                            <Check size={11} style={{ color: step.accent }} strokeWidth={2.5} />
                          </span>
                          {pt}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
