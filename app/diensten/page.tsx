import type { Metadata } from 'next';
import Link from 'next/link';
import { Workflow, Compass, ArrowRight, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diensten - Ariance AI Oplossingen',
  description:
    'Ontdek de AI-diensten van Ariance: AI Automatisering en AI Consultancy voor het Nederlandse MKB.',
};

const services = [
  {
    num: '01',
    icon: Workflow,
    title: 'AI Automatisering',
    tagline: 'Uren terugwinnen. Elke week.',
    description:
      'Repetitieve taken verdwijnen van uw werklijst. E-mailverwerking, rapportages, klantopvolging - uw team focust op werk dat echt waarde toevoegt.',
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
      'Objectief advies zonder verkooppraatjes. Een concrete AI-roadmap en prioriteitenmatrix afgestemd op uw budget en ambities.',
    href: '/diensten/ai-consultancy',
    accent: '#c084fc',
    accentRgb: '192,132,252',
    label: null,
  },
];

export default function DienstenPage() {
  return (
    <div style={{ background: 'var(--bg-0)' }}>

      {/* Header */}
      <div
        className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28"
        style={{ background: 'var(--bg-cream)' }}
      >
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(129,140,248,0.10) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.30), transparent)' }}
        />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 500,
              background: 'rgba(129,140,248,0.08)',
              border: '1px solid rgba(129,140,248,0.22)',
              color: 'var(--accent-solid)',
            }}
          >
            <Zap size={11} />
            Onze diensten
          </span>

          <h1
            className="font-display font-extrabold tracking-[-0.03em] leading-[0.96] mb-5 max-w-2xl"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', color: 'var(--ink)' }}
          >
            Twee diensten.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              Een aanspreekpunt.
            </span>
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed max-w-xl"
            style={{ color: 'var(--muted-d)' }}
          >
            Van eerste adviesgesprek tot werkende oplossing - Ariance begeleidt u bij elke stap
            richting een slimmer, efficienter bedrijf.
          </p>
        </div>
      </div>

      {/* Service cards */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.title}
                href={s.href}
                className="group relative flex flex-col rounded-3xl overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-1"
                style={{
                  background: '#ffffff',
                  border: `1px solid rgba(${s.accentRgb},0.20)`,
                  boxShadow: `0 4px 24px rgba(${s.accentRgb},0.07), 0 1px 4px rgba(0,0,0,0.04)`,
                }}
              >
                {/* Top stripe */}
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(90deg, ${s.accent} 0%, rgba(${s.accentRgb},0.4) 100%)` }}
                />

                <div
                  className="relative px-8 pt-8 pb-6 flex-1 overflow-hidden"
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

                  <div className="relative">
                    {s.label ? (
                      <span
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-mono text-[10px] tracking-wider uppercase font-semibold mb-4"
                        style={{
                          background: `rgba(${s.accentRgb},0.12)`,
                          border: `1px solid rgba(${s.accentRgb},0.30)`,
                          color: s.accent,
                        }}
                      >
                        <Zap size={9} />
                        {s.label}
                      </span>
                    ) : (
                      <div className="mb-4 h-7" />
                    )}

                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-400 group-hover:scale-110"
                      style={{ background: `rgba(${s.accentRgb},0.10)`, border: `1px solid rgba(${s.accentRgb},0.22)` }}
                    >
                      <Icon size={24} style={{ color: s.accent }} strokeWidth={1.7} />
                    </div>

                    <h2
                      className="font-display font-extrabold tracking-tight mb-1"
                      style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)', color: 'var(--ink)' }}
                    >
                      {s.title}
                    </h2>
                    <p className="font-display font-semibold text-sm mb-4" style={{ color: s.accent }}>
                      {s.tagline}
                    </p>
                    <p className="text-[14.5px] leading-[1.7]" style={{ color: 'var(--muted-d)' }}>
                      {s.description}
                    </p>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-4">
                  <div
                    className="flex items-center justify-between w-full px-6 py-3.5 rounded-full font-display font-semibold text-sm"
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
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
