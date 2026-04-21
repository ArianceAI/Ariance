'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

function MagneticButton({
  href, children, variant = 'primary',
}: { href: string; children: React.ReactNode; variant?: 'primary' | 'ghost' }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

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
      <Link
        href={href}
        className="group inline-flex items-center gap-2.5 font-display font-bold text-[15px] px-7 py-4 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
        style={
          variant === 'primary'
            ? {
                background: 'linear-gradient(135deg, #22D3EE 0%, #06B6D4 100%)',
                color: '#06090F',
                boxShadow: '0 14px 40px rgba(34,211,238,0.38), inset 0 1px 0 rgba(255,255,255,0.25)',
              }
            : {
                background: 'transparent',
                color: 'var(--ink)',
                border: '1px solid rgba(238,239,245,0.15)',
              }
        }
      >
        {children}
      </Link>
    </motion.div>
  );
}

function OrbitalDiagram() {
  return (
    <div className="relative w-full aspect-square max-w-[540px] mx-auto">
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(34,211,238,0.20) 0%, rgba(6,182,212,0.06) 40%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />

      <svg viewBox="0 0 400 400" className="relative w-full h-full">
        <defs>
          <radialGradient id="coreGlowCyan" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#22D3EE" stopOpacity="1" />
            <stop offset="40%" stopColor="#06B6D4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0E7490" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer ring */}
        <g style={{ transformOrigin: '200px 200px', animation: 'spin-slower 45s linear infinite' }}>
          <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(34,211,238,0.10)" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="380" cy="200" r="5" fill="#22D3EE" />
          <circle cx="96"  cy="268" r="3.5" fill="#22D3EE" opacity="0.6" />
          <circle cx="150" cy="40"  r="4" fill="#10D9A0" />
        </g>

        {/* Middle ring */}
        <g style={{ transformOrigin: '200px 200px', animation: 'spin-slow 30s linear infinite' }}>
          <circle cx="200" cy="200" r="130" fill="none" stroke="rgba(34,211,238,0.18)" strokeWidth="1" />
          <circle cx="200" cy="70"  r="6" fill="#22D3EE" />
          <circle cx="330" cy="200" r="4" fill="#67E8F9" />
          <circle cx="85"  cy="170" r="5" fill="#10D9A0" />
        </g>

        {/* Inner ring */}
        <g style={{ transformOrigin: '200px 200px', animation: 'spin-slower 18s linear infinite' }}>
          <circle cx="200" cy="200" r="82" fill="none" stroke="rgba(34,211,238,0.28)" strokeWidth="1" />
          <circle cx="282" cy="200" r="4" fill="#22D3EE" />
          <circle cx="160" cy="124" r="3" fill="#22D3EE" opacity="0.7" />
          <circle cx="135" cy="250" r="3.5" fill="#67E8F9" />
        </g>

        {/* Connecting lines */}
        <line x1="200" y1="200" x2="282" y2="200" stroke="rgba(34,211,238,0.25)" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="200" y1="200" x2="160" y2="124" stroke="rgba(34,211,238,0.18)" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="200" y1="200" x2="135" y2="250" stroke="rgba(34,211,238,0.18)" strokeWidth="1" strokeDasharray="2 3" />

        {/* Core */}
        <circle cx="200" cy="200" r="58" fill="url(#coreGlowCyan)" />
        <circle cx="200" cy="200" r="20" fill="#06090F" stroke="#22D3EE" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="6" fill="#22D3EE">
          <animate attributeName="r" values="6;9;6" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="2.4s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Floating labels */}
      <div
        className="absolute top-[18%] left-[6%] px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider uppercase animate-float"
        style={{
          background: 'rgba(6,9,15,0.85)',
          border: '1px solid rgba(34,211,238,0.25)',
          color: '#22D3EE',
          backdropFilter: 'blur(8px)',
        }}
      >
        ∙ automatisering
      </div>
      <div
        className="absolute top-[8%] right-[14%] px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider uppercase animate-float-slow"
        style={{
          background: 'rgba(6,9,15,0.85)',
          border: '1px solid rgba(16,217,160,0.3)',
          color: '#10D9A0',
          backdropFilter: 'blur(8px)',
        }}
      >
        ∙ strategie
      </div>
      <div
        className="absolute bottom-[14%] right-[6%] px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider uppercase animate-float"
        style={{
          background: 'rgba(6,9,15,0.85)',
          border: '1px solid rgba(34,211,238,0.25)',
          color: '#22D3EE',
          backdropFilter: 'blur(8px)',
          animationDelay: '1.2s',
        }}
      >
        ∙ consultancy
      </div>
      <div
        className="absolute bottom-[22%] left-[2%] px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider uppercase animate-float-slow"
        style={{
          background: 'rgba(6,9,15,0.85)',
          border: '1px solid rgba(103,232,249,0.3)',
          color: '#67E8F9',
          backdropFilter: 'blur(8px)',
          animationDelay: '0.6s',
        }}
      >
        ∙ workflows
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-36"
      style={{ background: 'var(--bg-0)' }}
    >
      {/* Ambient glows */}
      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 60%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(16,217,160,0.07) 0%, transparent 60%)', filter: 'blur(60px)' }}
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
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
            {/* Agency badge */}
            <motion.div variants={fadeUp} className="mb-7">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mono-label"
                style={{
                  background: 'rgba(34,211,238,0.08)',
                  border: '1px solid rgba(34,211,238,0.22)',
                  color: 'var(--accent)',
                }}
              >
                <Zap size={11} className="animate-pulse" />
                A.I. Automation Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-extrabold leading-[0.96] tracking-[-0.04em] mb-7"
              style={{
                fontSize: 'clamp(2.8rem, 7vw, 5.8rem)',
                color: 'var(--ink)',
              }}
            >
              Supercharge{' '}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="relative z-10 text-gradient-emerald">jouw bedrijf</span>
                <svg
                  className="absolute left-0 -bottom-1 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2,4 Q50,1 100,3 T198,3"
                    stroke="#22D3EE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    style={{ animation: 'draw 1.2s 0.6s ease-out forwards' }}
                  />
                </svg>
              </span>
              {' '}met A.I.
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl leading-[1.65] mb-10 max-w-[560px]"
              style={{ color: 'var(--muted-d)' }}
            >
              Wij bouwen A.I. & automations voor bedrijven die van aanpakken weten.
              Geen eindeloze trajecten — werkende oplossingen in weken.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-10">
              <MagneticButton href="/contact">
                Plan een gesprek
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton href="/diensten" variant="ghost">
                Hoe doen we dit?
              </MagneticButton>
            </motion.div>

            {/* Trust row */}
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
                <span className="mono-label" style={{ color: 'var(--muted-d)' }}>Direct contact met Léon</span>
              </div>
              <span className="mono-label" style={{ color: 'var(--muted-d)' }}>∙ AVG-compliant</span>
              <span className="mono-label" style={{ color: 'var(--muted-d)' }}>∙ In weken live</span>
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
