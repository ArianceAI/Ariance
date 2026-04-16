'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Wrench, TrendingUp } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Gratis Gesprek',
    description: 'We analyseren uw bedrijfsprocessen en bepalen samen welke AI-toepassingen de meeste waarde opleveren.',
    accent: '#2563EB',
  },
  {
    num: '02',
    icon: Wrench,
    title: 'Op Maat Bouwen',
    description: 'Ariance bouwt de oplossing specifiek voor uw situatie. U wordt betrokken bij elke stap.',
    accent: '#0891B2',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Resultaat & Groei',
    description: 'De oplossing gaat live. U bespaart tijd, verlaagt kosten en schaalbaar mee met uw bedrijf.',
    accent: '#0D9488',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="werkwijze">
      {/* Subtle background blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.04) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5"
            style={{
              background: 'rgba(37,99,235,0.08)',
              border: '1px solid rgba(37,99,235,0.2)',
              color: '#2563EB',
              fontFamily: 'var(--font-display)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            Onze werkwijze
          </div>
          <h2
            className="text-3xl md:text-[2.6rem] font-extrabold tracking-tight leading-tight mb-4"
            style={{ fontFamily: 'var(--font-display)', color: '#0A0F1C' }}
          >
            Van gesprek naar{' '}
            <span
              style={{
                background: '#DBEAFE',
                padding: '0 8px 2px',
                borderRadius: '6px',
                color: '#1d4ed8',
              }}
            >
              resultaat
            </span>
            {' '}in drie stappen
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: '#6B7280' }}>
            Geen langdurige trajecten of onduidelijke processen. Wij werken snel, direct en resultaatgericht.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connecting dashed line — desktop only */}
          <div
            className="absolute top-10 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px hidden md:block pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(90deg, #BFDBFE 0px, #BFDBFE 8px, transparent 8px, transparent 20px)',
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col items-center text-center relative"
              >
                {/* Number circle */}
                <div className="relative mb-6 z-10">
                  <motion.div
                    className="w-20 h-20 rounded-full flex items-center justify-center bg-white"
                    style={{
                      border: `2px solid ${step.accent}30`,
                      boxShadow: `0 0 0 6px ${step.accent}08`,
                    }}
                    animate={isInView ? {
                      boxShadow: [`0 0 0 6px ${step.accent}08`, `0 0 0 12px ${step.accent}04`, `0 0 0 6px ${step.accent}08`]
                    } : {}}
                    transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ background: `${step.accent}12` }}
                    >
                      <Icon size={22} style={{ color: step.accent }} strokeWidth={1.8} />
                    </div>
                  </motion.div>

                  {/* Step number badge */}
                  <div
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: step.accent, fontFamily: 'var(--font-display)' }}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Large outline number — decorative */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 text-[5rem] font-black leading-none select-none pointer-events-none opacity-[0.04]"
                  style={{ color: step.accent, fontFamily: 'var(--font-display)' }}
                >
                  {step.num}
                </div>

                <h3
                  className="text-base font-bold mb-2.5"
                  style={{ fontFamily: 'var(--font-display)', color: '#0A0F1C' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-[1.75]" style={{ color: '#6B7280' }}>
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
