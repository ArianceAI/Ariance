import type { Metadata } from 'next';
import { Bot, Check, ArrowRight, Zap, Mail, FileText, BarChart2, MessageSquare, Clock, Database, Calendar } from 'lucide-react';
import { ContactButton } from '@/components/ui/contact-modal-provider';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Automatisering - Ariance',
  description:
    'Ariance bouwt AI-automatiseringsoplossingen voor het Nederlandse MKB. Van e-mailverwerking tot rapportages - werkende AI in weken.',
};

const benefits = [
  'E-mailverwerking en -sortering automatisch afhandelen',
  'Rapportages automatisch samenstellen en versturen',
  'Data-invoer en -extractie zonder menselijke tussenkomst',
  'Klantcommunicatie en -opvolging op autopilot',
  'Integratie met bestaande tools zoals Microsoft 365 of Google Workspace',
  'Documentverwerking en archivering geautomatiseerd',
];

const included = [
  'Procesanalyse en kansenscan',
  'Maatwerk automatiseringsflows',
  'Integratie met uw bestaande software',
  'Testfase en finetuning',
  'Technische documentatie',
  '1 maand nazorg inclusief',
];

const useCases = [
  { icon: Mail,        title: 'E-mailverwerking',   desc: 'Automatisch sorteren & beantwoorden',    accent: '#818cf8', rgb: '129,140,248' },
  { icon: BarChart2,   title: 'Rapportages',         desc: 'Wekelijkse cijfers zonder handwerk',     accent: '#c084fc', rgb: '192,132,252' },
  { icon: FileText,    title: 'Documentverwerking',  desc: 'Facturen & contracten automatisch',      accent: '#818cf8', rgb: '129,140,248' },
  { icon: MessageSquare, title: 'Klantopvolging',    desc: 'Follow-ups op autopilot',                accent: '#c084fc', rgb: '192,132,252' },
  { icon: Database,    title: 'Data-extractie',      desc: 'Invoer zonder menselijke tussenkomst',   accent: '#818cf8', rgb: '129,140,248' },
  { icon: Calendar,    title: 'Agendabeheer',        desc: 'Afspraken inplannen automatisch',        accent: '#c084fc', rgb: '192,132,252' },
  { icon: Clock,       title: 'Tijdregistratie',     desc: 'Urenstaten automatisch verwerken',       accent: '#818cf8', rgb: '129,140,248' },
];

export default function AiAutomatiseringPage() {
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
            background: 'radial-gradient(circle, rgba(129,140,248,0.12) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.30), transparent)' }}
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
            <span className="font-mono text-[11px] tracking-wider uppercase" style={{ color: 'var(--accent-solid)' }}>
              AI Automatisering
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
              background: 'rgba(129,140,248,0.08)',
              border: '1px solid rgba(129,140,248,0.22)',
              color: 'var(--accent-solid)',
            }}
          >
            <Zap size={11} />
            AI Automatisering
          </span>

          <h1
            className="font-display font-extrabold tracking-[-0.03em] leading-[0.96] mb-5 max-w-2xl"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', color: 'var(--ink)' }}
          >
            Uren terugwinnen{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              elke week.
            </span>
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed max-w-xl mb-8"
            style={{ color: 'var(--muted-d)' }}
          >
            Ariance identificeert welke processen geautomatiseerd kunnen worden en bouwt
            AI-workflows die dit voor u doen - betrouwbaar, snel en schaalbaar.
          </p>

          <ContactButton
            className="inline-flex items-center gap-2 font-display font-semibold text-sm px-7 py-4 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #818cf8 0%, #6d62f0 100%)',
              color: '#0d0c18',
              boxShadow: '0 14px 40px rgba(129,140,248,0.32)',
            }}
          >
            Gratis gesprek inplannen
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
              style={{ background: 'rgba(129,140,248,0.10)', border: '1px solid rgba(129,140,248,0.22)' }}
            >
              <Bot size={22} style={{ color: '#818cf8' }} />
            </div>

            <h2
              className="font-display font-extrabold tracking-tight leading-tight mb-4"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--ink)' }}
            >
              Wat automatiseren wij?
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: 'var(--muted-d)' }}
            >
              Repetitieve taken zijn de grootste tijdvreters in elk bedrijf. Ariance identificeert
              welke processen geautomatiseerd kunnen worden en bouwt AI-workflows die dit voor u
              doen.
            </p>

            <ul className="flex flex-col gap-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2.5 text-sm"
                  style={{ color: 'var(--muted-d)' }}
                >
                  <Check size={15} className="mt-0.5 shrink-0" style={{ color: '#818cf8' }} />
                  {benefit}
                </li>
              ))}
            </ul>

            <ContactButton
              className="mt-8 inline-flex items-center gap-2 font-display font-semibold text-sm px-6 py-3.5 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #818cf8 0%, rgba(129,140,248,0.8) 100%)',
                color: '#0d0c18',
                boxShadow: '0 12px 30px rgba(129,140,248,0.28)',
              }}
            >
              Vraag een offerte aan
              <ArrowRight size={15} />
            </ContactButton>
          </div>

          {/* Right - included card */}
          <div
            className="rounded-3xl p-8"
            style={{
              background: 'linear-gradient(145deg, rgba(129,140,248,0.04) 0%, var(--bg-cream) 60%)',
              border: '1px solid rgba(129,140,248,0.16)',
              boxShadow: '0 4px 24px rgba(129,140,248,0.08)',
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
                    style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.25)' }}
                  >
                    <Check size={12} style={{ color: '#818cf8' }} strokeWidth={2.5} />
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--muted-d)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Use cases */}
        <div>
          <h2
            className="font-display font-extrabold tracking-tight mb-3"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--ink)' }}
          >
            Veelvoorkomende toepassingen
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--muted-d)' }}>
            Voorbeelden van processen die wij automatiseren voor Nederlandse MKB-bedrijven.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <div
                  key={uc.title}
                  className="flex items-center gap-3 px-5 py-4 rounded-2xl"
                  style={{
                    background: 'var(--bg-cream)',
                    border: `1px solid rgba(${uc.rgb},0.14)`,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `rgba(${uc.rgb},0.10)`, border: `1px solid rgba(${uc.rgb},0.22)` }}
                  >
                    <Icon size={15} style={{ color: uc.accent }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold font-display" style={{ color: 'var(--ink)' }}>
                      {uc.title}
                    </p>
                    <p className="text-xs truncate" style={{ color: 'var(--muted-d)' }}>
                      {uc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

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
              background: 'radial-gradient(ellipse, rgba(129,140,248,0.12) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.25), transparent)' }}
        />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="font-display font-extrabold tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--ink)' }}
          >
            Klaar om uren terug te winnen?
          </h2>
          <p
            className="text-base leading-relaxed mb-8 max-w-lg mx-auto"
            style={{ color: 'var(--muted-d)' }}
          >
            Plan een gratis oriëntatiegesprek. Wij luisteren naar uw situatie en vertellen
            eerlijk welke processen de meeste tijdwinst opleveren.
          </p>
          <ContactButton
            className="inline-flex items-center gap-2 font-display font-semibold text-sm px-7 py-4 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #818cf8 0%, #6d62f0 100%)',
              color: '#0d0c18',
              boxShadow: '0 14px 40px rgba(129,140,248,0.28)',
            }}
          >
            Gratis gesprek inplannen
            <ArrowRight size={16} />
          </ContactButton>
        </div>
      </div>
    </div>
  );
}
