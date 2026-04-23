'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const testimonials = [
  {
    id: 1,
    initials: 'FA',
    name: 'Fit Administratie',
    role: 'Eigenaar',
    company: 'Fit Administratie',
    sector: 'Administratiekantoor · Noord-Holland',
    content:
      'De AI-workflows van Ariance verwerken onze documenten en klantcommunicatie zelfstandig. We winnen er wekelijks uren mee terug en maken minder fouten dan voorheen.',
    rating: 5,
    metric: '+70%',
    metricLabel: 'sneller verwerkt',
    accent: '#818cf8',
    accentRgb: '129,140,248',
  },
  {
    id: 2,
    initials: 'YA',
    name: 'YouradviesgroepBV',
    role: 'Directeur',
    company: 'YouradviesgroepBV',
    sector: 'Financieel advies · Amsterdam',
    content:
      'Met de private AI-omgeving kunnen we veilig interne kennis raadplegen en adviesrapporten sneller opstellen — zonder dat gevoelige data de deur uitgaat. Volledig AVG-compliant.',
    rating: 5,
    metric: '100% AVG',
    metricLabel: 'compliant',
    accent: '#c084fc',
    accentRgb: '192,132,252',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: 'var(--bg-cream)' }}
    >
      {/* Ambient glows */}
      <div
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.09) 0%, transparent 60%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.07) 0%, transparent 60%)', filter: 'blur(60px)' }}
      />
      {/* Top/bottom edge lines */}
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.20), transparent)' }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* ── Left: heading + dots ── */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mono-label mb-6 w-fit"
              style={{
                background: 'rgba(129,140,248,0.08)',
                border: '1px solid rgba(129,140,248,0.22)',
                color: 'var(--accent-solid)',
              }}
            >
              <Star size={11} className="fill-[var(--accent-solid)]" />
              Klantreviews
            </span>

            <h2
              className="font-display font-extrabold tracking-[-0.03em] leading-[1.0] mb-5"
              style={{ fontSize: 'clamp(2rem, 4.2vw, 3rem)', color: 'var(--ink)' }}
            >
              Wat onze klanten<br />
              <span className="text-gradient-emerald">zeggen.</span>
            </h2>

            <p
              className="text-base md:text-[17px] leading-[1.65] mb-8 max-w-sm"
              style={{ color: 'var(--muted-d)' }}
            >
              Van administratiekantoren tot adviesbureaus — Nederlandse bedrijven vertrouwen
              op Ariance voor praktische AI-oplossingen.
            </p>

            {/* Metric highlight */}
            <motion.div
              key={activeIndex + '-metric'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8 p-5 rounded-2xl w-fit"
              style={{
                background: `rgba(${active.accentRgb},0.06)`,
                border: `1px solid rgba(${active.accentRgb},0.20)`,
              }}
            >
              <div
                className="font-display font-extrabold text-3xl tracking-tight"
                style={{ color: active.accent }}
              >
                {active.metric}
              </div>
              <div className="mono-label mt-0.5" style={{ color: 'var(--muted-d)' }}>
                {active.metricLabel}
              </div>
            </motion.div>

            {/* Dot navigation */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="h-2.5 rounded-full transition-all duration-400"
                  style={{
                    width: activeIndex === i ? '2.5rem' : '0.625rem',
                    background: activeIndex === i ? 'var(--accent-solid)' : 'rgba(13,12,24,0.18)',
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* ── Right: animated card ── */}
          <motion.div variants={itemVariants} className="relative min-h-[340px] md:min-h-[380px]">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 80, scale: 0.96 }}
                animate={{
                  opacity: activeIndex === i ? 1 : 0,
                  x: activeIndex === i ? 0 : 80,
                  scale: activeIndex === i ? 1 : 0.94,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ zIndex: activeIndex === i ? 10 : 0 }}
              >
                <div
                  className="relative rounded-3xl p-8 md:p-10 h-full flex flex-col overflow-hidden"
                  style={{
                    background: `linear-gradient(145deg, rgba(${t.accentRgb},0.05) 0%, #ffffff 55%)`,
                    border: `1px solid rgba(${t.accentRgb},0.20)`,
                    boxShadow: `0 8px 40px rgba(${t.accentRgb},0.10), 0 2px 8px rgba(0,0,0,0.04)`,
                  }}
                >
                  {/* Top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
                    style={{ background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)` }}
                  />
                  {/* Decorative orb */}
                  <div
                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(circle, rgba(${t.accentRgb},0.16) 0%, transparent 70%)`, filter: 'blur(20px)' }}
                  />

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array(t.rating).fill(0).map((_, si) => (
                      <Star key={si} size={16} style={{ color: t.accent, fill: t.accent }} />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative flex-1 mb-6">
                    <Quote
                      size={28}
                      className="absolute -top-2 -left-1 opacity-15"
                      style={{ color: t.accent, transform: 'rotate(180deg)' }}
                    />
                    <p
                      className="relative z-10 text-[16px] font-medium leading-[1.7]"
                      style={{ color: 'var(--ink)' }}
                    >
                      &ldquo;{t.content}&rdquo;
                    </p>
                  </div>

                  <Separator style={{ background: `rgba(${t.accentRgb},0.15)` }} />

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-extrabold text-sm shrink-0"
                      style={{
                        background: `rgba(${t.accentRgb},0.12)`,
                        color: t.accent,
                        border: `1px solid rgba(${t.accentRgb},0.28)`,
                        boxShadow: `0 0 0 3px rgba(${t.accentRgb},0.08)`,
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-display font-bold text-[15px]" style={{ color: 'var(--ink)' }}>
                        {t.name}
                      </div>
                      <div className="mono-label mt-0.5" style={{ color: 'var(--muted-d)' }}>
                        {t.sector}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative corners */}
            <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-2xl pointer-events-none" style={{ background: 'rgba(129,140,248,0.05)', border: '1px solid rgba(129,140,248,0.10)' }} />
            <div className="absolute -top-5 -right-5 w-20 h-20 rounded-2xl pointer-events-none" style={{ background: 'rgba(192,132,252,0.05)', border: '1px solid rgba(192,132,252,0.10)' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
