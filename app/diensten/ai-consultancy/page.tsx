import type { Metadata } from 'next';
import { Lightbulb, Check, ArrowRight, Zap, Users, Search, Map, TrendingUp, ShieldCheck, Presentation } from 'lucide-react';
import { ContactButton } from '@/components/ui/contact-modal-provider';
import Link from 'next/link';
import FeatureSection from '@/components/home/feature-section';

export const metadata: Metadata = {
  title: 'AI Consultancy - Ariance',
  description:
    'Ariance biedt AI consultancy voor het Nederlandse MKB. Eerlijk advies, concrete AI-roadmap en ROI-berekening per kans.',
};

const benefits = [
  'Objectief advies zonder verkooppraatjes',
  'Concrete AI-roadmap afgestemd op uw budget',
  'Inzicht in welke processen de beste ROI opleveren',
  'Technologieselectie en leveranciersbeoordeling',
  'Risico-inventarisatie en privacy-advies (AVG)',
  'Begeleiding bij AI-implementatie van anderen',
];

const included = [
  'Intakegesprek (gratis, vrijblijvend)',
  'Procesanalyse en interviews met medewerkers',
  'Schriftelijk AI-adviesrapport',
  'Prioriteitenmatrix met businesscase per kans',
  'Implementatieplan op hoofdlijnen',
  'Presentatie aan directie/management',
];

const steps = [
  { icon: Users,        title: 'Intakegesprek',    desc: 'Gratis & vrijblijvend kennismaken',    accent: '#c084fc', rgb: '192,132,252' },
  { icon: Search,       title: 'Procesanalyse',    desc: 'Kansen in kaart brengen',              accent: '#818cf8', rgb: '129,140,248' },
  { icon: Map,          title: 'AI-roadmap',       desc: 'Concreet plan op uw budget',           accent: '#c084fc', rgb: '192,132,252' },
  { icon: TrendingUp,   title: 'ROI per kans',     desc: 'Businesscase per automatisering',       accent: '#818cf8', rgb: '129,140,248' },
  { icon: ShieldCheck,  title: 'Privacy & AVG',    desc: 'Volledig compliant werken',            accent: '#c084fc', rgb: '192,132,252' },
  { icon: Presentation, title: 'Directiepresentatie', desc: 'Resultaten aan management',         accent: '#818cf8', rgb: '129,140,248' },
];

export default function AiConsultancyPage() {
  return (
    <div style={{ background: 'var(--bg-0)' }}>

      {/* Page header */}
      <div
        className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28"
        style={{ background: 'var(--bg-cream)' }}
      >
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(192,132,252,0.12) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(192,132,252,0.30), transparent)' }}
        />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/"
              className="font-mono text-[11px] tracking-wider uppercase transition-colors duration-200 hover:text-[var(--ink)]"
              style={{ color: 'var(--muted-d)' }}
            >
              Home
            </Link>
            <span className="text-[var(--muted-d)] font-mono text-[11px]">/</span>
            <span className="font-mono text-[11px] tracking-wider uppercase" style={{ color: '#c084fc' }}>
              AI Consultancy
            </span>
          </div>

          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 500,
              background: 'rgba(192,132,252,0.08)',
              border: '1px solid rgba(192,132,252,0.22)',
              color: '#c084fc',
            }}
          >
            <Zap size={11} />
            AI Consultancy
          </span>

          <h1
            className="font-display font-extrabold tracking-[-0.03em] leading-[0.96] mb-5 max-w-2xl"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', color: 'var(--ink)' }}
          >
            De juiste AI-strategie{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #c084fc 0%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              voor uw bedrijf.
            </span>
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed max-w-xl mb-8"
            style={{ color: 'var(--muted-d)' }}
          >
            Weet u dat AI waardevol kan zijn, maar weet u niet waar te beginnen? Ariance biedt
            helder en eerlijk advies. We analyseren uw bedrijf en vertellen u precies welke
            AI-toepassingen zinvol zijn.
          </p>

          <ContactButton
            className="inline-flex items-center gap-2 font-display font-semibold text-sm px-7 py-4 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)',
              color: '#0d0c18',
              boxShadow: '0 14px 40px rgba(192,132,252,0.32)',
            }}
          >
            Gratis intakegesprek
            <ArrowRight size={15} />
          </ContactButton>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20 md:mb-28">

          {/* Left - benefits */}
          <div>
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.22)' }}
            >
              <Lightbulb size={22} style={{ color: '#c084fc' }} />
            </div>

            <h2
              className="font-display font-extrabold tracking-tight leading-tight mb-4"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--ink)' }}
            >
              Wat levert het op?
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: 'var(--muted-d)' }}
            >
              Ariance geeft eerlijk en objectief advies - geen verkooppraatjes. Wij analyseren
              uw bedrijf en bouwen een concrete roadmap die past bij uw budget en ambities.
            </p>

            <ul className="flex flex-col gap-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2.5 text-sm"
                  style={{ color: 'var(--muted-d)' }}
                >
                  <Check size={15} className="mt-0.5 shrink-0" style={{ color: '#c084fc' }} />
                  {benefit}
                </li>
              ))}
            </ul>

            <ContactButton
              className="mt-8 inline-flex items-center gap-2 font-display font-semibold text-sm px-6 py-3.5 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #c084fc 0%, rgba(192,132,252,0.8) 100%)',
                color: '#0d0c18',
                boxShadow: '0 12px 30px rgba(192,132,252,0.28)',
              }}
            >
              Vraag een intakegesprek aan
              <ArrowRight size={15} />
            </ContactButton>
          </div>

          {/* Right - included card */}
          <div
            className="rounded-3xl p-8"
            style={{
              background: 'linear-gradient(145deg, rgba(192,132,252,0.04) 0%, var(--bg-cream) 60%)',
              border: '1px solid rgba(192,132,252,0.16)',
              boxShadow: '0 4px 24px rgba(192,132,252,0.08)',
            }}
          >
            <h3
              className="font-display font-bold text-sm uppercase tracking-wider mb-6"
              style={{ color: 'var(--ink)' }}
            >
              Wat is inbegrepen
            </h3>
            <ul className="flex flex-col gap-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(192,132,252,0.12)', border: '1px solid rgba(192,132,252,0.25)' }}
                  >
                    <Check size={12} style={{ color: '#c084fc' }} strokeWidth={2.5} />
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--muted-d)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process steps */}
        <div>
          <h2
            className="font-display font-extrabold tracking-tight mb-3"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--ink)' }}
          >
            Hoe werkt het traject?
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--muted-d)' }}>
            Van eerste kennismaking tot schriftelijk adviesrapport - een helder en transparant
            proces.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="flex items-start gap-3 px-5 py-4 rounded-2xl"
                  style={{
                    background: 'var(--bg-cream)',
                    border: `1px solid rgba(${step.rgb},0.14)`,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: `rgba(${step.rgb},0.10)`, border: `1px solid rgba(${step.rgb},0.22)` }}
                  >
                    <Icon size={15} style={{ color: step.accent }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold font-display" style={{ color: 'var(--ink)' }}>
                      {String(i + 1).padStart(2, '0')} {step.title}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--muted-d)' }}>{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animated detail section (from homepage) */}
      <FeatureSection variant="consultancy" />

      {/* Bottom CTA */}
      <div
        className="relative overflow-hidden py-16 md:py-24"
        style={{ background: 'var(--bg-cream)' }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden
        >
          <div
            className="w-[600px] h-[300px] rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(192,132,252,0.12) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(192,132,252,0.25), transparent)' }}
        />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="font-display font-extrabold tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--ink)' }}
          >
            Niet zeker waar te beginnen?
          </h2>
          <p
            className="text-base leading-relaxed mb-8 max-w-lg mx-auto"
            style={{ color: 'var(--muted-d)' }}
          >
            Plan een gratis intakegesprek. We luisteren naar uw situatie en adviseren eerlijk
            wat het beste bij uw bedrijf past - zonder enige verplichting.
          </p>
          <ContactButton
            className="inline-flex items-center gap-2 font-display font-semibold text-sm px-7 py-4 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)',
              color: '#0d0c18',
              boxShadow: '0 14px 40px rgba(192,132,252,0.28)',
            }}
          >
            Gratis intakegesprek inplannen
            <ArrowRight size={16} />
          </ContactButton>
        </div>
      </div>
    </div>
  );
}
