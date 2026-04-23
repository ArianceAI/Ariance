'use client';

import * as React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, Clock, TrendingDown, Target, Zap } from 'lucide-react';
import { useContactModal } from '@/components/ui/contact-modal-provider';

/* ── Data ── */
const headlineWords = ['Bespaar', 'tijd,', 'verlaag', 'kosten,', 'focus', 'op', 'groei.'];

const trustLabels = [
  { icon: Zap,          label: 'AI Automatisering' },
  { icon: Target,       label: 'AI Consultancy' },
  { icon: Clock,        label: 'In weken live' },
];

const featureCards = [
  {
    icon: Clock,
    title: 'Uren terugwinnen',
    description: 'Repetitieve taken draaien zelfstandig op de achtergrond. Uw team focust op wat écht waarde toevoegt.',
    accent: '#818cf8',
    accentRgb: '129,140,248',
  },
  {
    icon: TrendingDown,
    title: 'Kosten verlagen',
    description: 'Minder handmatig werk, minder fouten. AI-workflows werken sneller én nauwkeuriger dan menselijke herhaalarbeid.',
    accent: '#c084fc',
    accentRgb: '192,132,252',
  },
  {
    icon: Target,
    title: 'Slimmer beslissen',
    description: 'Data-gedreven inzichten in plaats van buikgevoel. Weet precies waar AI de grootste impact heeft voor uw bedrijf.',
    accent: '#d8b4fe',
    accentRgb: '216,180,254',
  },
];

/* ── Magnetic CTA ── */
function MagneticCTA({ onClick }: { onClick: () => void }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setPos({ x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.25 });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 160, damping: 14 }}
      className="inline-flex"
    >
      <button
        onClick={onClick}
        className="group inline-flex items-center gap-2.5 font-display font-bold text-[15px] px-8 py-4 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
        style={{
          background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)',
          color: '#0d0c18',
          boxShadow: '0 14px 40px rgba(129,140,248,0.40), inset 0 1px 0 rgba(255,255,255,0.25)',
        }}
      >
        Plan een gesprek
        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </motion.div>
  );
}

/* ── Orbital Diagram ── */
function OrbitalDiagram() {
  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto">
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(129,140,248,0.18) 0%, rgba(109,98,240,0.06) 40%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />
      <svg viewBox="0 0 400 400" className="relative w-full h-full">
        <defs>
          <radialGradient id="heroCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#818cf8" stopOpacity="1" />
            <stop offset="40%" stopColor="#6d62f0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g style={{ transformOrigin: '200px 200px', animation: 'spin-slower 45s linear infinite' }}>
          <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(129,140,248,0.10)" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="380" cy="200" r="5"   fill="#818cf8" />
          <circle cx="96"  cy="268" r="3.5" fill="#818cf8" opacity="0.6" />
          <circle cx="150" cy="40"  r="4"   fill="#c084fc" />
        </g>
        <g style={{ transformOrigin: '200px 200px', animation: 'spin-slow 30s linear infinite' }}>
          <circle cx="200" cy="200" r="130" fill="none" stroke="rgba(129,140,248,0.18)" strokeWidth="1" />
          <circle cx="200" cy="70"  r="6"   fill="#818cf8" />
          <circle cx="330" cy="200" r="4"   fill="#d8b4fe" />
          <circle cx="85"  cy="170" r="5"   fill="#c084fc" />
        </g>
        <g style={{ transformOrigin: '200px 200px', animation: 'spin-slower 18s linear infinite' }}>
          <circle cx="200" cy="200" r="82" fill="none" stroke="rgba(129,140,248,0.28)" strokeWidth="1" />
          <circle cx="282" cy="200" r="4"   fill="#818cf8" />
          <circle cx="160" cy="124" r="3"   fill="#818cf8" opacity="0.7" />
          <circle cx="135" cy="250" r="3.5" fill="#d8b4fe" />
        </g>
        <line x1="200" y1="200" x2="282" y2="200" stroke="rgba(129,140,248,0.25)" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="200" y1="200" x2="160" y2="124" stroke="rgba(129,140,248,0.18)" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="200" y1="200" x2="135" y2="250" stroke="rgba(129,140,248,0.18)" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="200" cy="200" r="58" fill="url(#heroCore)" />
        <circle cx="200" cy="200" r="20" fill="#ffffff" stroke="#818cf8" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="6"  fill="#818cf8">
          <animate attributeName="r"       values="6;9;6"   dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="2.4s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Floating labels */}
      {[
        { label: '∙ automatisering', top: '18%', left: '6%',  color: '#818cf8', delay: '0s',   cls: 'animate-float' },
        { label: '∙ strategie',      top: '8%',  right: '14%', color: '#c084fc', delay: '0s',   cls: 'animate-float-slow' },
        { label: '∙ consultancy',    bottom: '14%', right: '6%', color: '#818cf8', delay: '1.2s', cls: 'animate-float' },
        { label: '∙ workflows',      bottom: '22%', left: '2%',  color: '#9333ea', delay: '0.6s', cls: 'animate-float-slow' },
      ].map((fl) => (
        <div
          key={fl.label}
          className={`absolute px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider uppercase ${fl.cls}`}
          style={{
            top: fl.top, bottom: fl.bottom, left: fl.left, right: fl.right,
            background: 'rgba(255,255,255,0.92)',
            border: `1px solid ${fl.color}40`,
            color: fl.color,
            backdropFilter: 'blur(8px)',
            animationDelay: fl.delay,
          }}
        >
          {fl.label}
        </div>
      ))}
    </div>
  );
}

/* ── Hero ── */
export default function Hero() {
  const { open } = useContactModal();
  const featuresRef = React.useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.1 });

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--bg-0)' }}
    >
      {/* Ambient glows */}
      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.11) 0%, transparent 60%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.07) 0%, transparent 60%)', filter: 'blur(60px)' }}
      />
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="noise" />

      {/* ── Main hero ── */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left — copy */}
          <div className="lg:col-span-7">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-7"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mono-label"
                style={{
                  background: 'rgba(129,140,248,0.08)',
                  border: '1px solid rgba(129,140,248,0.22)',
                  color: 'var(--accent-solid)',
                }}
              >
                <Zap size={11} className="animate-pulse" />
                A.I. Automation Agency
              </span>
            </motion.div>

            {/* Headline — Myna word-by-word blur reveal */}
            <h1
              className="font-display font-extrabold leading-[0.96] tracking-[-0.04em] mb-7"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.6rem)', color: 'var(--ink)' }}
            >
              {headlineWords.map((word, i) => {
                const isAccent = word === 'kosten,';
                return (
                  <motion.span
                    key={i}
                    initial={{ filter: 'blur(10px)', opacity: 0, y: 24 }}
                    animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.10, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className={`inline-block mr-[0.22em] ${isAccent ? 'text-gradient-emerald' : ''}`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl leading-[1.65] mb-10 max-w-[540px]"
              style={{ color: 'var(--muted-d)' }}
            >
              Ariance levert AI Automatisering en AI Consultancy voor het Nederlandse MKB.
              Focus op waardevollere taken — werkende oplossingen in weken.
            </motion.p>

            {/* Trust labels — Myna spring stagger */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.4 }}
              className="flex flex-wrap gap-x-6 gap-y-3 mb-10"
            >
              {trustLabels.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 + i * 0.12, duration: 0.5, type: 'spring', stiffness: 120, damping: 12 }}
                    className="flex items-center gap-2"
                  >
                    <Icon size={13} style={{ color: 'var(--accent-solid)' }} />
                    <span className="mono-label" style={{ color: 'var(--muted-d)' }}>{item.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.55, type: 'spring', stiffness: 100, damping: 12 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <MagneticCTA onClick={open} />
              <motion.a
                href="/diensten"
                className="inline-flex items-center gap-2 font-display font-semibold text-[14px] px-7 py-4 rounded-full transition-[background,border-color] duration-300"
                style={{
                  background: 'transparent',
                  color: 'var(--ink)',
                  border: '1px solid rgba(13,12,24,0.18)',
                }}
                whileHover={{ borderColor: 'rgba(129,140,248,0.4)', background: 'rgba(129,140,248,0.04)' }}
              >
                Hoe doen we dit?
              </motion.a>
            </motion.div>
          </div>

          {/* Right — orbital */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <OrbitalDiagram />
          </motion.div>
        </div>
      </div>

      {/* ── Feature cards (Myna-style grid) ── */}
      <div
        ref={featuresRef}
        className="relative max-w-6xl mx-auto px-6 lg:px-8 pb-20 md:pb-28"
      >
        {/* Section divider */}
        <div
          className="mb-12 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.25), transparent)' }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {featureCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6, type: 'spring', stiffness: 100, damping: 12 }}
                className="group flex flex-col items-center text-center p-8 relative"
                style={{
                  border: '1px solid rgba(13,12,24,0.07)',
                  background: 'var(--bg-0)',
                }}
              >
                {/* Hover background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, rgba(${card.accentRgb},0.06) 0%, transparent 70%)` }}
                />
                {/* Top accent line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)` }}
                />

                <div
                  className="mb-5 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-400 group-hover:scale-110"
                  style={{
                    background: `rgba(${card.accentRgb},0.10)`,
                    border: `1px solid rgba(${card.accentRgb},0.22)`,
                    boxShadow: `0 0 0 0 rgba(${card.accentRgb},0)`,
                  }}
                >
                  <Icon size={22} style={{ color: card.accent }} strokeWidth={1.8} />
                </div>

                <h3
                  className="font-display font-bold text-lg mb-3 tracking-tight"
                  style={{ color: 'var(--ink)' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[14px] leading-[1.65]"
                  style={{ color: 'var(--muted-d)' }}
                >
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
