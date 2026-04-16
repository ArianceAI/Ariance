'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const stats = [
  { value: '100%', label: 'Nederlands maatwerk' },
  { value: '2025', label: 'Opgericht in Alkmaar' },
  { value: 'Direct', label: 'Contact met oprichter' },
  { value: 'MKB', label: 'Specialist & focus' },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

/* Orbital SVG diagram — blauw netwerk als hero centerpiece */
function OrbitalDiagram() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[480px]"
      >
        {/* Outer ring */}
        <circle
          cx="240" cy="240" r="190"
          stroke="rgba(37,99,235,0.15)" strokeWidth="1"
          strokeDasharray="4 6"
          style={{ animation: 'spin-slow 40s linear infinite', transformOrigin: '240px 240px' }}
        />
        {/* Mid ring */}
        <circle
          cx="240" cy="240" r="130"
          stroke="rgba(37,99,235,0.2)" strokeWidth="1"
          style={{ animation: 'spin-slow 25s linear infinite reverse', transformOrigin: '240px 240px' }}
        />
        {/* Inner ring */}
        <circle
          cx="240" cy="240" r="72"
          stroke="rgba(37,99,235,0.25)" strokeWidth="1"
          style={{ animation: 'spin-slow 15s linear infinite', transformOrigin: '240px 240px' }}
        />

        {/* Ambient glow behind center */}
        <circle cx="240" cy="240" r="50" fill="rgba(37,99,235,0.08)" />

        {/* Center node — Ariance */}
        <circle cx="240" cy="240" r="36" fill="rgba(37,99,235,0.12)" stroke="rgba(37,99,235,0.4)" strokeWidth="1.5" />
        <circle cx="240" cy="240" r="22" fill="#2563EB" />
        <text x="240" y="245" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">A</text>

        {/* Outer ring nodes */}
        <circle cx="430" cy="240" r="8" fill="#2563EB" opacity="0.8" />
        <circle cx="50"  cy="240" r="6" fill="#2563EB" opacity="0.5" />
        <circle cx="240" cy="50"  r="7" fill="#2563EB" opacity="0.7" />
        <circle cx="240" cy="430" r="5" fill="#2563EB" opacity="0.4" />
        <circle cx="375" cy="105" r="6" fill="#60A5FA" opacity="0.7" />
        <circle cx="105" cy="375" r="5" fill="#60A5FA" opacity="0.5" />
        <circle cx="375" cy="375" r="7" fill="#93C5FD" opacity="0.6" />
        <circle cx="105" cy="105" r="5" fill="#93C5FD" opacity="0.4" />

        {/* Mid ring nodes */}
        <circle cx="370" cy="240" r="5" fill="#60A5FA" opacity="0.9" />
        <circle cx="110" cy="240" r="4" fill="#60A5FA" opacity="0.6" />
        <circle cx="240" cy="110" r="6" fill="#2563EB" opacity="0.9" />
        <circle cx="240" cy="370" r="4" fill="#60A5FA" opacity="0.5" />
        <circle cx="332" cy="148" r="5" fill="#93C5FD" opacity="0.8" />
        <circle cx="148" cy="332" r="4" fill="#93C5FD" opacity="0.6" />

        {/* Inner ring nodes */}
        <circle cx="312" cy="240" r="4" fill="#BFDBFE" opacity="0.9" />
        <circle cx="168" cy="240" r="3" fill="#BFDBFE" opacity="0.7" />
        <circle cx="240" cy="168" r="4" fill="#BFDBFE" opacity="0.9" />
        <circle cx="240" cy="312" r="3" fill="#BFDBFE" opacity="0.7" />

        {/* Connection lines from center to mid nodes */}
        <line x1="240" y1="240" x2="370" y2="240" stroke="rgba(37,99,235,0.15)" strokeWidth="1" />
        <line x1="240" y1="240" x2="240" y2="110" stroke="rgba(37,99,235,0.15)" strokeWidth="1" />
        <line x1="240" y1="240" x2="332" y2="148" stroke="rgba(37,99,235,0.1)"  strokeWidth="1" />
        <line x1="240" y1="240" x2="148" y2="332" stroke="rgba(37,99,235,0.1)"  strokeWidth="1" />

        {/* Pulse rings on center */}
        <circle cx="240" cy="240" r="42" stroke="rgba(37,99,235,0.3)" strokeWidth="1" fill="none"
          style={{ animation: 'pulse-ring 2.5s ease-out infinite' }} />
        <circle cx="240" cy="240" r="42" stroke="rgba(37,99,235,0.15)" strokeWidth="1" fill="none"
          style={{ animation: 'pulse-ring 2.5s ease-out infinite 1.25s' }} />
      </svg>

      {/* Floating labels */}
      <div className="absolute top-[18%] right-[8%] text-[11px] font-medium px-2.5 py-1 rounded-full"
        style={{ background: 'rgba(37,99,235,0.1)', color: '#93C5FD', border: '1px solid rgba(37,99,235,0.2)', fontFamily: 'var(--font-display)' }}>
        Automatisering
      </div>
      <div className="absolute top-[42%] left-[4%] text-[11px] font-medium px-2.5 py-1 rounded-full"
        style={{ background: 'rgba(37,99,235,0.1)', color: '#93C5FD', border: '1px solid rgba(37,99,235,0.2)', fontFamily: 'var(--font-display)' }}>
        Private AI
      </div>
      <div className="absolute bottom-[20%] right-[10%] text-[11px] font-medium px-2.5 py-1 rounded-full"
        style={{ background: 'rgba(37,99,235,0.1)', color: '#93C5FD', border: '1px solid rgba(37,99,235,0.2)', fontFamily: 'var(--font-display)' }}>
        Consultancy
      </div>
      <div className="absolute bottom-[38%] left-[6%] text-[11px] font-medium px-2.5 py-1 rounded-full"
        style={{ background: 'rgba(37,99,235,0.1)', color: '#93C5FD', border: '1px solid rgba(37,99,235,0.2)', fontFamily: 'var(--font-display)' }}>
        Websites
      </div>
    </div>
  );
}

function MagneticButton({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width  / 2) * 0.32,
      y: (e.clientY - rect.top  - rect.height / 2) * 0.32,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 160, damping: 14 }}
      className="inline-flex"
    >
      <Link
        href={href}
        className={`inline-flex items-center gap-2.5 font-semibold px-7 py-3.5 rounded-xl text-sm
          transition-[box-shadow] duration-300 ${
            primary
              ? 'bg-[#2563EB] text-white hover:bg-[#1d4ed8] hover:shadow-[0_16px_40px_rgba(37,99,235,0.45)]'
              : 'text-white border border-white/15 hover:border-white/30 hover:bg-white/[0.07]'
          }`}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {children}
      </Link>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'var(--clr-bg-dark)' }}
    >
      <div className="noise-overlay" />

      {/* Ambient glow left */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 10% 50%, rgba(37,99,235,0.12) 0%, transparent 70%)' }} />

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)`,
        backgroundSize: '64px 64px',
      }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">

          {/* Left — tekst */}
          <motion.div variants={container} initial="hidden" animate="visible">

            <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 mb-8">
              <div className="flex items-center gap-2 text-[#60A5FA] text-xs font-semibold px-4 py-2 rounded-full"
                style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.3)', fontFamily: 'var(--font-display)' }}>
                <Sparkles size={12} />
                AI voor het Nederlandse MKB
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-extrabold leading-[1.05] tracking-[-0.03em] mb-7 text-white"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)' }}
            >
              AI neemt het{' '}
              <span className="text-gradient">routinewerk</span>{' '}
              over.
              <br />
              <span className="text-white/55">Jij focust op wat telt.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg leading-[1.8] mb-10 max-w-[500px]"
              style={{ color: 'var(--clr-text-muted-d)' }}>
              Ariance bouwt praktische AI-oplossingen voor Nederlandse bedrijven. Geen hype —
              concrete automatisering die tijd bespaart en omzet verhoogt.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
              <MagneticButton href="/diensten" primary>
                Bekijk onze diensten <ArrowRight size={15} />
              </MagneticButton>
              <MagneticButton href="/contact">
                Neem contact op
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right — orbitaal diagram */}
          <motion.div
            className="relative h-[380px] lg:h-[460px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <OrbitalDiagram />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex gap-3 items-start">
              <div className="w-px min-h-[44px] shrink-0 mt-1 rounded-full"
                style={{ background: 'linear-gradient(180deg, #2563EB, rgba(37,99,235,0.1))' }} />
              <div>
                <div className="text-2xl font-bold text-white tracking-tight leading-none mb-1.5"
                  style={{ fontFamily: 'var(--font-display)' }}>{stat.value}</div>
                <div className="text-xs" style={{ color: 'var(--clr-text-muted-d)' }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
