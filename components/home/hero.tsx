'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

function MagneticButton({
  href, children, variant = 'primary', tel = false,
}: { href: string; children: React.ReactNode; variant?: 'primary' | 'ghost'; tel?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const Tag: any = tel ? 'a' : Link;

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
      <Tag
        href={href}
        className={`group inline-flex items-center gap-2.5 font-display font-semibold text-[14px] px-6 py-3.5 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5`}
        style={
          variant === 'primary'
            ? {
                background: 'var(--amber)',
                color: 'var(--ink-dark)',
                boxShadow: '0 14px 40px rgba(245,169,98,0.38), inset 0 1px 0 rgba(255,255,255,0.3)',
              }
            : {
                background: 'transparent',
                color: 'var(--ink)',
                border: '1px solid rgba(240,239,230,0.18)',
              }
        }
      >
        {children}
      </Tag>
    </motion.div>
  );
}

function OrbitalDiagram() {
  return (
    <div className="relative w-full aspect-square max-w-[560px] mx-auto">
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(94,234,212,0.22) 0%, rgba(94,234,212,0.06) 40%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />

      <svg viewBox="0 0 400 400" className="relative w-full h-full">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#5EEAD4" stopOpacity="1" />
            <stop offset="40%" stopColor="#2DD4BF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0F766E" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"  stopColor="#5EEAD4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#5EEAD4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer ring (very slow rotate) */}
        <g style={{ transformOrigin: '200px 200px', animation: 'spin-slower 45s linear infinite' }}>
          <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(94,234,212,0.10)" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="380" cy="200" r="5" fill="#5EEAD4" />
          <circle cx="96"  cy="268" r="3.5" fill="#5EEAD4" opacity="0.6" />
          <circle cx="150" cy="40"  r="4" fill="#F5A962" />
        </g>

        {/* Middle ring */}
        <g style={{ transformOrigin: '200px 200px', animation: 'spin-slow 30s linear infinite' }}>
          <circle cx="200" cy="200" r="130" fill="none" stroke="rgba(94,234,212,0.18)" strokeWidth="1" />
          <circle cx="200" cy="70"  r="6" fill="#5EEAD4" />
          <circle cx="330" cy="200" r="4" fill="#A8D4BE" />
          <circle cx="85"  cy="170" r="5" fill="#F5A962" />
        </g>

        {/* Inner ring */}
        <g style={{ transformOrigin: '200px 200px', animation: 'spin-slower 18s linear infinite' }}>
          <circle cx="200" cy="200" r="82" fill="none" stroke="rgba(94,234,212,0.28)" strokeWidth="1" />
          <circle cx="282" cy="200" r="4" fill="#5EEAD4" />
          <circle cx="160" cy="124" r="3" fill="#5EEAD4" opacity="0.7" />
          <circle cx="135" cy="250" r="3.5" fill="#A8D4BE" />
        </g>

        {/* Connecting lines */}
        <line x1="200" y1="200" x2="282" y2="200" stroke="rgba(94,234,212,0.25)" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="200" y1="200" x2="160" y2="124" stroke="rgba(94,234,212,0.18)" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="200" y1="200" x2="135" y2="250" stroke="rgba(94,234,212,0.18)" strokeWidth="1" strokeDasharray="2 3" />

        {/* Core */}
        <circle cx="200" cy="200" r="58" fill="url(#coreGlow)" />
        <circle cx="200" cy="200" r="20" fill="#07110D" stroke="#5EEAD4" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="6" fill="#5EEAD4">
          <animate attributeName="r" values="6;9;6" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="2.4s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Floating labels */}
      <div
        className="absolute top-[18%] left-[6%] px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider uppercase animate-float"
        style={{
          background: 'rgba(12,25,20,0.85)',
          border: '1px solid rgba(94,234,212,0.25)',
          color: '#5EEAD4',
          backdropFilter: 'blur(8px)',
        }}
      >
        ∙ workflows
      </div>
      <div
        className="absolute top-[8%] right-[14%] px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider uppercase animate-float-slow"
        style={{
          background: 'rgba(12,25,20,0.85)',
          border: '1px solid rgba(245,169,98,0.3)',
          color: '#F5A962',
          backdropFilter: 'blur(8px)',
        }}
      >
        ∙ private_ai
      </div>
      <div
        className="absolute bottom-[14%] right-[6%] px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider uppercase animate-float"
        style={{
          background: 'rgba(12,25,20,0.85)',
          border: '1px solid rgba(94,234,212,0.25)',
          color: '#5EEAD4',
          backdropFilter: 'blur(8px)',
          animationDelay: '1.2s',
        }}
      >
        ∙ consultancy
      </div>
      <div
        className="absolute bottom-[22%] left-[2%] px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider uppercase animate-float-slow"
        style={{
          background: 'rgba(12,25,20,0.85)',
          border: '1px solid rgba(168,212,190,0.3)',
          color: '#A8D4BE',
          backdropFilter: 'blur(8px)',
          animationDelay: '0.6s',
        }}
      >
        ∙ integraties
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
      style={{ background: 'var(--bg-0)' }}
    >
      {/* Ambient glows */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(94,234,212,0.14) 0%, transparent 60%)', filter: 'blur(40px)' }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,169,98,0.08) 0%, transparent 60%)', filter: 'blur(50px)' }}
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* Noise */}
      <div className="noise" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left — copy */}
          <motion.div
            className="lg:col-span-7"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Pill */}
            <motion.div variants={fadeUp} className="mb-7">
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mono-label"
                style={{
                  background: 'rgba(94,234,212,0.08)',
                  border: '1px solid rgba(94,234,212,0.22)',
                  color: 'var(--accent)',
                }}
              >
                <Sparkles size={11} className="animate-pulse" />
                AI voor Nederlandse bedrijven
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-extrabold leading-[0.98] tracking-[-0.035em] mb-7"
              style={{
                fontSize: 'clamp(2.6rem, 6.2vw, 5.2rem)',
                color: 'var(--ink)',
              }}
            >
              AI neemt het{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-gradient-emerald">routinewerk</span>
                <svg
                  className="absolute left-0 -bottom-1 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2,6 Q50,2 100,4 T198,5"
                    stroke="#5EEAD4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    style={{ animation: 'draw 1.2s 0.6s ease-out forwards' }}
                  />
                </svg>
              </span>
              {' '}over.
              <br />
              <span style={{ color: 'var(--muted-d)' }}>Jij focust op</span>{' '}
              <span style={{ color: 'var(--ink)' }}>wat telt.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl leading-[1.65] mb-9 max-w-[580px]"
              style={{ color: 'var(--muted-d)' }}
            >
              Geen jarenlange trajecten, geen buzzwords. Ariance bouwt concrete
              AI-oplossingen die in weken live staan — volledig op maat voor de
              Nederlandse markt.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-10">
              <MagneticButton href="/contact">
                Plan een gratis gesprek
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton href="/diensten" variant="ghost">
                Bekijk onze diensten
              </MagneticButton>
            </motion.div>

            {/* Meta row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6"
              style={{ borderTop: '1px solid var(--border-d)' }}
            >
              <div className="flex items-center gap-2">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-60" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-[var(--accent)]" />
                </span>
                <span className="mono-label" style={{ color: 'var(--muted-d)' }}>
                  Direct contact met Léon
                </span>
              </div>
              <span className="mono-label" style={{ color: 'var(--muted-d)' }}>
                ∙ Gevestigd in Alkmaar
              </span>
              <span className="mono-label" style={{ color: 'var(--muted-d)' }}>
                ∙ AVG-compliant
              </span>
            </motion.div>
          </motion.div>

          {/* Right — orbital diagram */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <OrbitalDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
