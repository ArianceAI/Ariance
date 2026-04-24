'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Workflow, Compass, Check, ArrowRight, Zap } from 'lucide-react';

const services = [
  {
    num: '01',
    icon: Workflow,
    title: 'AI Automatisering',
    tagline: 'Uren terugwinnen. Elke week.',
    description:
      'Repetitieve taken verdwijnen van uw werklijst. E-mailverwerking, rapportages, data-invoer en klantopvolging draaien zelfstandig op de achtergrond.',
    benefits: [
      'E-mailverwerking & -sortering automatisch',
      'Rapportages zonder handmatig werk',
      'Klantopvolging op autopilot',
      'Integratie met Microsoft 365 & Google',
    ],
    href: '/diensten/ai-automatisering',
    accent: '#818cf8',
    accentRgb: '129,140,248',
    label: 'Meest gevraagd',
  },
  {
    num: '02',
    icon: Compass,
    title: 'AI Consultancy',
    tagline: 'De juiste AI-strategie voor uw bedrijf.',
    description:
      'Objectief advies over waar AI echt iets oplevert. Geen verkooppraatjes - een concrete roadmap en prioriteitenmatrix afgestemd op uw budget.',
    benefits: [
      'Gratis & vrijblijvend intakegesprek',
      'Concrete AI-roadmap op maat',
      'ROI per kans berekend',
      'AVG & privacy advies inbegrepen',
    ],
    href: '/diensten/ai-consultancy',
    accent: '#c084fc',
    accentRgb: '192,132,252',
    label: null,
  },
];

function ServiceCard({ s, delay }: { s: typeof services[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const Icon = s.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col rounded-3xl overflow-hidden"
      style={{
        background: '#ffffff',
        border: `1px solid rgba(${s.accentRgb},0.20)`,
        boxShadow: `0 4px 24px rgba(${s.accentRgb},0.07), 0 1px 4px rgba(0,0,0,0.04)`,
      }}
    >
      {/* Colored top stripe */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${s.accent} 0%, rgba(${s.accentRgb},0.4) 100%)` }}
      />

      {/* Card header */}
      <div
        className="relative px-8 pt-8 pb-6 overflow-hidden"
        style={{ background: `linear-gradient(160deg, rgba(${s.accentRgb},0.05) 0%, transparent 60%)` }}
      >
        {/* Decorative number */}
        <span
          className="absolute -top-2 right-6 font-display font-extrabold select-none pointer-events-none"
          style={{ fontSize: '7rem', lineHeight: 1, color: `rgba(${s.accentRgb},0.07)` }}
          aria-hidden
        >
          {s.num}
        </span>

        <div className="relative flex items-start justify-between gap-4">
          <div>
            {/* Mono label */}
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase font-medium mb-4"
              style={{
                background: `rgba(${s.accentRgb},0.10)`,
                border: `1px solid rgba(${s.accentRgb},0.22)`,
                color: s.accent,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.accent }} />
              {s.title}
            </span>

            {/* Icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{
                background: `rgba(${s.accentRgb},0.10)`,
                border: `1px solid rgba(${s.accentRgb},0.22)`,
              }}
            >
              <Icon size={24} style={{ color: s.accent }} strokeWidth={1.7} />
            </div>
          </div>

          {/* Optional badge */}
          {s.label && (
            <span
              className="shrink-0 mt-1 inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-mono text-[10px] tracking-wider uppercase font-semibold"
              style={{
                background: `rgba(${s.accentRgb},0.12)`,
                border: `1px solid rgba(${s.accentRgb},0.30)`,
                color: s.accent,
              }}
            >
              <Zap size={9} />
              {s.label}
            </span>
          )}
        </div>

        <h3
          className="font-display font-extrabold tracking-tight mb-2"
          style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)', color: 'var(--ink)' }}
        >
          {s.title}
        </h3>
        <p className="font-display font-semibold text-sm" style={{ color: s.accent }}>
          {s.tagline}
        </p>
      </div>

      {/* Divider */}
      <div
        className="mx-8 h-px"
        style={{ background: `rgba(${s.accentRgb},0.12)` }}
      />

      {/* Body */}
      <div className="px-8 pt-6 pb-4 flex-1">
        <p className="text-[14.5px] leading-[1.7] mb-6" style={{ color: 'var(--muted-d)' }}>
          {s.description}
        </p>

        <ul className="flex flex-col gap-3">
          {s.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{
                  background: `rgba(${s.accentRgb},0.12)`,
                  border: `1px solid rgba(${s.accentRgb},0.25)`,
                }}
              >
                <Check size={11} style={{ color: s.accent }} strokeWidth={2.5} />
              </div>
              <span className="text-[13.5px] leading-[1.5]" style={{ color: 'var(--muted-d)' }}>
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="px-8 pb-8 pt-6">
        <Link
          href={s.href}
          className="group flex items-center justify-between w-full px-6 py-3.5 rounded-full font-display font-semibold text-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
          style={{
            background: `linear-gradient(135deg, ${s.accent} 0%, rgba(${s.accentRgb},0.75) 100%)`,
            color: '#0d0c18',
            boxShadow: `0 10px 30px rgba(${s.accentRgb},0.25)`,
          }}
        >
          <span>Bekijk {s.title}</span>
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
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
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(129,140,248,0.07) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          className="mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase font-medium mb-5"
            style={{
              background: 'rgba(129,140,248,0.08)',
              border: '1px solid rgba(129,140,248,0.22)',
              color: 'var(--accent-solid)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-solid)]" />
            Onze diensten
          </span>

          <h2
            className="font-display font-extrabold tracking-[-0.03em] leading-[0.97] mb-4"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: 'var(--ink)' }}
          >
            Twee diensten.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Een aanspreekpunt.
            </span>
          </h2>

          <p
            className="text-base md:text-[17px] leading-[1.65]"
            style={{ color: 'var(--muted-d)' }}
          >
            Van eerste adviesgesprek tot werkende automatisering - u hoeft niet aan te kloppen
            bij meerdere partijen.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} delay={i * 0.10} />
          ))}
        </div>
      </div>
    </section>
  );
}
