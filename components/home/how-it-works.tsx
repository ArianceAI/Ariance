'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { Check } from 'lucide-react';

const steps = [
  {
    id: '01',
    name: 'Stap 1',
    title: 'Gratis intakegesprek',
    description: 'We starten altijd met een vrijblijvend kennismakingsgesprek. U vertelt over uw bedrijf, uw uitdagingen en uw doelen — wij luisteren en stellen de juiste vragen.',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1740&auto=format&fit=crop',
    img2: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop',
    accent: '#818cf8',
    accentRgb: '129,140,248',
  },
  {
    id: '02',
    name: 'Stap 2',
    title: 'Analyse & strategie',
    description: 'We analyseren uw processen en brengen de AI-kansen in kaart. U ontvangt een concreet adviesrapport met een prioriteitenmatrix en businesscase per kans.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop',
    img2: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1715&auto=format&fit=crop',
    accent: '#c084fc',
    accentRgb: '192,132,252',
  },
  {
    id: '03',
    name: 'Stap 3',
    title: 'Bouwen & testen',
    description: 'Ariance bouwt de AI-workflows op maat, integreert ze met uw bestaande tools en test alles grondig. U bent bij elke stap betrokken en ziet de voortgang live.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1742&auto=format&fit=crop',
    img2: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1740&auto=format&fit=crop',
    accent: '#818cf8',
    accentRgb: '129,140,248',
  },
  {
    id: '04',
    name: 'Stap 4',
    title: 'Live & nazorg',
    description: 'Na de livegang begeleiden we uw team en houden we de workflows in de gaten. De eerste maand nazorg is altijd inbegrepen — zodat alles soepel blijft draaien.',
    img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1740&auto=format&fit=crop',
    img2: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1732&auto=format&fit=crop',
    accent: '#c084fc',
    accentRgb: '192,132,252',
  },
] as const;

const stepVariants: Variants = {
  inactive: { scale: 0.95, opacity: 0.65 },
  active: { scale: 1, opacity: 1 },
};

function useAutoCycle(total: number, interval = 5000) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setCurrent((p) => (p + 1) % total), interval);
    return () => clearTimeout(t);
  }, [current, total, interval]);
  const set = useCallback((i: number) => setCurrent(i % total), [total]);
  return { current, set };
}

export default function HowItWorks() {
  const { current: step, set: setStep } = useAutoCycle(steps.length);
  const s = steps[step];

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: 'var(--bg-0)' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(129,140,248,0.07) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mono-label mb-5"
            style={{
              background: 'rgba(129,140,248,0.08)',
              border: '1px solid rgba(129,140,248,0.22)',
              color: 'var(--accent-solid)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent-solid)' }} />
            Onze werkwijze
          </span>
          <h2
            className="font-display font-extrabold tracking-[-0.03em] leading-[1.0]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--ink)' }}
          >
            Van gesprek naar{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              werkende AI.
            </span>
          </h2>
        </div>

        {/* Card */}
        <div
          className="relative w-full overflow-hidden rounded-3xl mb-8"
          style={{
            border: '1px solid rgba(129,140,248,0.16)',
            background: 'var(--bg-cream)',
            boxShadow: '0 8px 40px rgba(129,140,248,0.08)',
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl transition-all duration-700"
            style={{ background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)` }}
          />

          <div className="p-8 md:p-12 min-h-[500px] flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Text */}
            <div className="md:w-[45%] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="flex flex-col gap-4"
                >
                  <span className="mono-label" style={{ color: s.accent }}>{s.name}</span>
                  <h3
                    className="font-display font-extrabold tracking-tight leading-tight"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--ink)' }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[15px] leading-[1.7]" style={{ color: 'var(--muted-d)' }}>
                    {s.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Images */}
            <div className="md:w-[55%] relative min-h-[240px] md:min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="absolute rounded-2xl object-cover"
                    style={{
                      width: '60%', height: '75%', top: '5%', left: '0%',
                      border: '1px solid rgba(129,140,248,0.14)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.10)',
                    }}
                  />
                  <img
                    src={s.img2}
                    alt={s.title}
                    className="absolute rounded-2xl object-cover"
                    style={{
                      width: '52%', height: '65%', bottom: '0%', right: '0%',
                      border: '1px solid rgba(129,140,248,0.14)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.10)',
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Step nav */}
        <nav className="flex flex-wrap items-center justify-center gap-2.5">
          {steps.map((st, i) => {
            const done = step > i;
            const active = step === i;
            return (
              <motion.button
                key={st.id}
                variants={stepVariants}
                initial="inactive"
                animate={active ? 'active' : 'inactive'}
                transition={{ duration: 0.3 }}
                onClick={() => setStep(i)}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full font-display font-semibold text-sm transition-colors duration-300"
                style={{
                  background: active ? 'rgba(129,140,248,0.12)' : 'transparent',
                  border: active ? '1px solid rgba(129,140,248,0.30)' : '1px solid rgba(13,12,24,0.10)',
                  color: active ? '#818cf8' : 'var(--muted-d)',
                }}
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0"
                  style={{
                    background: done ? '#818cf8' : active ? 'rgba(129,140,248,0.20)' : 'rgba(13,12,24,0.07)',
                    color: done ? '#fff' : active ? '#818cf8' : 'var(--muted-d)',
                  }}
                >
                  {done ? <Check size={10} strokeWidth={3} /> : i + 1}
                </span>
                <span className="hidden sm:inline">{st.name}</span>
              </motion.button>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
