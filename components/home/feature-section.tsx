'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useContactModal } from '@/components/ui/contact-modal-provider';
import {
  Mail, FileText, BarChart2, MessageSquare, Clock, Database, Calendar, Zap,
  Lightbulb, Map, TrendingUp, ShieldCheck, Search, Users, Presentation,
} from 'lucide-react';

const automatiseringItems = [
  { title: 'E-mailverwerking',     subtitle: 'Automatisch sorteren & beantwoorden', icon: <Mail size={14} />,           accent: '#818cf8', rgb: '129,140,248' },
  { title: 'Rapportages',          subtitle: 'Wekelijkse cijfers zonder handwerk',   icon: <BarChart2 size={14} />,      accent: '#c084fc', rgb: '192,132,252' },
  { title: 'Documentverwerking',   subtitle: 'Facturen & contracten automatisch',    icon: <FileText size={14} />,       accent: '#818cf8', rgb: '129,140,248' },
  { title: 'Klantopvolging',       subtitle: 'Follow-ups op autopilot',              icon: <MessageSquare size={14} />,  accent: '#c084fc', rgb: '192,132,252' },
  { title: 'Data-extractie',       subtitle: 'Invoer zonder menselijke tussenkomst', icon: <Database size={14} />,       accent: '#818cf8', rgb: '129,140,248' },
  { title: 'Agendabeheer',         subtitle: 'Afspraken inplannen automatisch',      icon: <Calendar size={14} />,       accent: '#c084fc', rgb: '192,132,252' },
  { title: 'Tijdregistratie',      subtitle: 'Urenstaten automatisch verwerken',     icon: <Clock size={14} />,          accent: '#818cf8', rgb: '129,140,248' },
];

const consultancyItems = [
  { title: 'Intakegesprek',        subtitle: 'Gratis & vrijblijvend kennismaken',    icon: <Users size={14} />,          accent: '#c084fc', rgb: '192,132,252' },
  { title: 'Procesanalyse',        subtitle: 'Kansen in kaart brengen',              icon: <Search size={14} />,         accent: '#818cf8', rgb: '129,140,248' },
  { title: 'AI-roadmap',           subtitle: 'Concreet plan afgestemd op uw budget', icon: <Map size={14} />,            accent: '#c084fc', rgb: '192,132,252' },
  { title: 'ROI per kans',         subtitle: 'Businesscase per automatisering',      icon: <TrendingUp size={14} />,     accent: '#818cf8', rgb: '129,140,248' },
  { title: 'Privacy & AVG advies', subtitle: 'Volledig compliant werken',            icon: <ShieldCheck size={14} />,    accent: '#c084fc', rgb: '192,132,252' },
  { title: 'Strategie sessie',     subtitle: 'Presentatie aan directie/management',  icon: <Presentation size={14} />,   accent: '#818cf8', rgb: '129,140,248' },
  { title: 'AI implementatie',     subtitle: 'Begeleiding van A tot Z',              icon: <Lightbulb size={14} />,      accent: '#c084fc', rgb: '192,132,252' },
];

const config = {
  automatisering: {
    badge: 'AI Automatisering',
    accentRgb: '129,140,248',
    accent: '#818cf8',
    title: 'Repetitieve taken',
    titleAccent: 'op autopilot.',
    description: 'Ariance bouwt AI-workflows die uw dagelijkse taken zelfstandig uitvoeren - van e-mailverwerking tot rapportages. Uw team wint uren terug en focust op werk dat écht waarde toevoegt.',
    benefits: [
      'E-mailverwerking en -sortering automatisch afhandelen',
      'Rapportages automatisch samenstellen en versturen',
      'Data-invoer en -extractie zonder menselijke tussenkomst',
      'Klantcommunicatie en -opvolging op autopilot',
      'Integratie met Microsoft 365 of Google Workspace',
      'Documentverwerking en archivering geautomatiseerd',
    ],
    pills: ['Microsoft 365', 'Google Workspace', 'AVG-compliant', '+70% tijdsbesparing'],
    ctaLabel: 'Vraag een offerte aan',
    items: automatiseringItems,
  },
  consultancy: {
    badge: 'AI Consultancy',
    accentRgb: '192,132,252',
    accent: '#c084fc',
    title: 'De juiste AI-strategie',
    titleAccent: 'voor uw bedrijf.',
    description: 'Weet u dat AI waardevol kan zijn, maar weet u niet waar te beginnen? Ariance geeft eerlijk advies - geen verkooppraatjes. We analyseren uw bedrijf en bouwen een concrete roadmap.',
    benefits: [
      'Objectief advies zonder verkooppraatjes',
      'Concrete AI-roadmap afgestemd op uw budget',
      'Inzicht in welke processen de beste ROI opleveren',
      'Technologieselectie en leveranciersbeoordeling',
      'Risico-inventarisatie en privacy-advies (AVG)',
      'Begeleiding bij AI-implementatie van anderen',
    ],
    pills: ['Objectief advies', 'Concrete roadmap', 'AVG & privacy', 'Gratis intakegesprek'],
    ctaLabel: 'Vraag een intakegesprek aan',
    items: consultancyItems,
  },
};

type Variant = 'automatisering' | 'consultancy';

export default function FeatureSection({ variant }: { variant: Variant }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const c = config[variant];
  const { open } = useContactModal();

  const ScrollCard = (
    <div className="relative w-full max-w-sm mx-auto md:mx-0 md:ml-auto">
      <Card
        className="overflow-hidden rounded-2xl"
        style={{
          background: 'var(--bg-cream)',
          border: `1px solid rgba(${c.accentRgb},0.18)`,
          boxShadow: `0 8px 40px rgba(${c.accentRgb},0.08), 0 2px 8px rgba(0,0,0,0.04)`,
        }}
      >
        <CardContent className="relative h-[380px] p-0 overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-[2px] z-10 rounded-t-2xl"
            style={{ background: `linear-gradient(90deg, transparent, ${c.accent}, transparent)` }}
          />
          <motion.div
            className="flex flex-col absolute w-full pt-2"
            animate={{ y: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, repeatType: 'loop', duration: 18, ease: 'linear' }}
          >
            {[...c.items, ...c.items].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3.5"
                style={{ borderBottom: `1px solid rgba(${c.accentRgb},0.10)` }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `rgba(${item.rgb},0.10)`,
                    border: `1px solid rgba(${item.rgb},0.22)`,
                  }}
                >
                  <span style={{ color: item.accent }}>{item.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold font-display truncate" style={{ color: 'var(--ink)' }}>
                    {item.title}
                  </p>
                  <p className="text-xs truncate" style={{ color: 'var(--muted-d)' }}>
                    {item.subtitle}
                  </p>
                </div>
                <Zap size={12} style={{ color: item.accent, opacity: 0.6, flexShrink: 0 }} />
              </div>
            ))}
          </motion.div>
          <div className="absolute top-0 left-0 w-full h-14 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to bottom, var(--bg-cream), transparent)' }} />
          <div className="absolute bottom-0 left-0 w-full h-14 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to top, var(--bg-cream), transparent)' }} />
        </CardContent>
      </Card>
      <div
        className="absolute -bottom-4 -right-4 w-16 h-16 rounded-2xl pointer-events-none"
        style={{ background: `rgba(${c.accentRgb},0.05)`, border: `1px solid rgba(${c.accentRgb},0.12)` }}
      />
    </div>
  );

  const TextContent = (
    <div className="space-y-6">
      <span
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-display font-bold"
        style={{
          fontSize: '1rem',
          background: `rgba(${c.accentRgb},0.08)`,
          border: `1px solid rgba(${c.accentRgb},0.22)`,
          color: c.accent,
        }}
      >
        <Zap size={14} />
        {c.badge}
      </span>

      <h2
        className="font-display font-extrabold tracking-[-0.03em] leading-[1.05]"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--ink)' }}
      >
        {c.title}{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {c.titleAccent}
        </span>
      </h2>

      <p className="text-base md:text-[17px] leading-[1.7]" style={{ color: 'var(--muted-d)', maxWidth: '460px' }}>
        {c.description}
      </p>

      <ul className="flex flex-col gap-2.5">
        {c.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2.5 text-[14.5px]" style={{ color: 'var(--muted-d)' }}>
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{
                background: `rgba(${c.accentRgb},0.12)`,
                border: `1px solid rgba(${c.accentRgb},0.25)`,
              }}
            >
              <Check size={11} style={{ color: c.accent }} strokeWidth={2.5} />
            </div>
            {benefit}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-1">
        {c.pills.map((pill) => (
          <span
            key={pill}
            className="inline-flex items-center px-3 py-1.5 rounded-full font-display font-semibold text-[12px]"
            style={{
              background: `rgba(${c.accentRgb},0.07)`,
              border: `1px solid rgba(${c.accentRgb},0.18)`,
              color: c.accent,
            }}
          >
            {pill}
          </span>
        ))}
      </div>

      <button
        onClick={open}
        className="inline-flex items-center gap-2 font-display font-semibold text-sm px-6 py-3.5 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
        style={{
          background: `linear-gradient(135deg, ${c.accent} 0%, rgba(${c.accentRgb},0.75) 100%)`,
          color: '#0d0c18',
          boxShadow: `0 12px 30px rgba(${c.accentRgb},0.28)`,
        }}
      >
        {c.ctaLabel}
        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );

  return (
    <motion.section
      ref={ref}
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: 'var(--bg-0)' }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-100px', right: '-100px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: `radial-gradient(circle, rgba(${c.accentRgb},0.07) 0%, transparent 60%)`,
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Text always left, scroll always right */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">
          {TextContent}
          {ScrollCard}
        </div>
      </div>
    </motion.section>
  );
}
