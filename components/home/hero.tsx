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
              ? 'bg-[#2563EB] text-white hover:bg-[#1d4ed8] hover:shadow-[0_16px_40px_rgba(37,99,235,0.5)]'
              : 'text-white border border-white/15 hover:border-white/30 hover:bg-white/[0.07] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]'
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
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Ambient glow — center left */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-0 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 20% 50%, rgba(37,99,235,0.14) 0%, transparent 70%)',
        }}
      />
      {/* Glow top right */}
      <div
        className="absolute -top-40 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 70% at 80% 20%, rgba(37,99,235,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Floating decorative orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
          filter: 'blur(32px)',
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/6 w-48 h-48 rounded-full pointer-events-none animate-float-2"
        style={{
          background: 'radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)',
          filter: 'blur(24px)',
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-36 pb-28">
        <motion.div
          className="max-w-[720px]"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 mb-8">
            <div
              className="flex items-center gap-2 text-[#60A5FA] text-xs font-semibold px-4 py-2 rounded-full"
              style={{
                background: 'rgba(37,99,235,0.12)',
                border: '1px solid rgba(37,99,235,0.3)',
                fontFamily: 'var(--font-display)',
              }}
            >
              <Sparkles size={12} className="text-[#60A5FA]" />
              AI voor het Nederlandse MKB
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-extrabold leading-[1.05] tracking-[-0.03em] mb-7 text-white"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
            }}
          >
            AI neemt het{' '}
            <span className="relative inline-block">
              <span className="text-gradient">routinewerk</span>
            </span>{' '}
            over.
            <br />
            <span className="text-white/60">Jij focust op wat telt.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg leading-[1.8] mb-10 max-w-[560px]"
            style={{ color: 'var(--clr-text-muted-d)', fontFamily: 'var(--font-body)' }}
          >
            Ariance bouwt praktische AI-oplossingen voor Nederlandse bedrijven.
            Geen hype, geen vage beloftes — maar concrete automatisering die
            tijd bespaart en omzet verhoogt.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
            <MagneticButton href="/diensten" primary>
              Bekijk onze diensten
              <ArrowRight size={15} />
            </MagneticButton>
            <MagneticButton href="/contact">
              Neem contact op
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex gap-3 items-start">
              <div
                className="w-px min-h-[44px] shrink-0 mt-1 rounded-full"
                style={{ background: `linear-gradient(180deg, #2563EB, rgba(37,99,235,0.1))` }}
              />
              <div>
                <div
                  className="text-2xl font-bold text-white tracking-tight leading-none mb-1.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {stat.value}
                </div>
                <div className="text-xs" style={{ color: 'var(--clr-text-muted-d)' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
