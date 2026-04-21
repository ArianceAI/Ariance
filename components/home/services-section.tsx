'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Workflow, Compass, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Workflow,
    num: '01',
    title: 'AI Automatisering',
    description:
      'Laat repetitieve taken verdwijnen. E-mailverwerking, rapportages, data-invoer en klantopvolging draaien zelfstandig op de achtergrond.',
    href: '/diensten#automatisering',
    accent: '#818cf8',
    accentRgb: '129,140,248',
    label: 'Meest gevraagd',
  },
  {
    icon: Compass,
    num: '02',
    title: 'AI Consultancy',
    description:
      'Objectief advies over waar AI écht iets oplevert voor uw bedrijf — en waar niet. Met een concrete roadmap en prioriteitenmatrix.',
    href: '/diensten#consultancy',
    accent: '#c084fc',
    accentRgb: '192,132,252',
    label: null,
  },
];

function TiltCard({ s, delay }: { s: typeof services[0]; delay: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const wrapRef = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const inView = useInView(wrapRef, { once: true, margin: '-40px' });
  const Icon = s.icon;

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    setT({ x: -y * 7, y: x * 7 });
  };

  return (
    <motion.div
      ref={wrapRef}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        ref={ref}
        href={s.href}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setT({ x: 0, y: 0 }); setHovered(false); }}
        className="group relative block overflow-hidden rounded-3xl"
        style={{
          background: hovered
            ? `linear-gradient(145deg, rgba(${s.accentRgb},0.08) 0%, rgba(26,24,40,0.9) 60%)`
            : 'rgba(26,24,40,0.5)',
          border: `1px solid ${hovered ? `rgba(${s.accentRgb},0.35)` : 'rgba(240,239,230,0.08)'}`,
          padding: '32px',
          transform: `perspective(900px) rotateX(${t.x}deg) rotateY(${t.y}deg) ${hovered ? 'translateY(-4px)' : ''}`,
          transition: hovered
            ? 'transform 0.15s ease, background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease'
            : 'transform 0.6s cubic-bezier(0.22,1,0.36,1), background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
          boxShadow: hovered
            ? `0 24px 60px rgba(${s.accentRgb},0.18), 0 4px 12px rgba(0,0,0,0.3)`
            : '0 4px 20px rgba(0,0,0,0.25)',
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)`,
            opacity: hovered ? 1 : 0.3,
          }}
        />

        {/* Decorative orb */}
        <div
          className="absolute -right-10 -top-10 w-40 h-40 rounded-full pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, rgba(${s.accentRgb},0.18) 0%, transparent 70%)`,
            filter: 'blur(20px)',
            opacity: hovered ? 1 : 0.3,
          }}
        />

        {/* Optional label */}
        {s.label && (
          <div
            className="absolute top-6 right-6 mono-label px-2.5 py-1 rounded-full"
            style={{
              background: `rgba(${s.accentRgb},0.12)`,
              color: s.accent,
              border: `1px solid rgba(${s.accentRgb},0.3)`,
            }}
          >
            {s.label}
          </div>
        )}

        {/* Num */}
        <div className="mono-label mb-6" style={{ color: hovered ? s.accent : 'var(--muted-d)' }}>
          {s.num} — service
        </div>

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-400"
          style={{
            background: hovered ? s.accent : `rgba(${s.accentRgb},0.1)`,
            boxShadow: hovered ? `0 12px 24px rgba(${s.accentRgb},0.3)` : 'none',
          }}
        >
          <Icon size={22} style={{ color: hovered ? 'var(--ink-dark)' : s.accent, transition: 'color 0.4s' }} strokeWidth={1.8} />
        </div>

        <h3
          className="font-display text-xl md:text-[1.35rem] font-bold mb-3 tracking-tight transition-colors duration-400"
          style={{ color: hovered ? s.accent : 'var(--ink)' }}
        >
          {s.title}
        </h3>
        <p className="text-[14.5px] leading-[1.65] mb-6" style={{ color: 'var(--muted-d)' }}>
          {s.description}
        </p>

        <div
          className="inline-flex items-center gap-1.5 font-display text-[13px] font-semibold transition-colors duration-300"
          style={{ color: hovered ? s.accent : 'rgba(240,239,230,0.55)' }}
        >
          <span>Meer over {s.title.split(' ')[0].toLowerCase()}</span>
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="diensten"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: 'var(--bg-0)' }}
    >
      {/* Ambient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(129,140,248,0.08) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-xl">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mono-label mb-5"
              style={{
                background: 'rgba(129,140,248,0.08)',
                border: '1px solid rgba(129,140,248,0.22)',
                color: 'var(--accent)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
              Onze diensten
            </span>
            <h2
              className="font-display font-extrabold tracking-[-0.03em] leading-[0.98] mb-4"
              style={{ fontSize: 'clamp(2rem, 4.2vw, 3.2rem)', color: 'var(--ink)' }}
            >
              Twee diensten.<br />
              <span className="text-gradient-emerald">Eén aanspreekpunt.</span>
            </h2>
            <p className="text-base md:text-[17px] leading-[1.65]" style={{ color: 'var(--muted-d)' }}>
              Van eerste adviesgesprek tot werkende automatisering —
              u hoeft niet aan te kloppen bij meerdere partijen.
            </p>
          </div>
          <Link
            href="/diensten"
            className="group inline-flex items-center gap-1.5 font-display text-sm font-semibold self-start md:self-end shrink-0"
            style={{ color: 'var(--accent)' }}
          >
            Alle diensten bekijken
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <TiltCard key={s.title} s={s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
