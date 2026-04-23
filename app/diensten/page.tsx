import type { Metadata } from 'next';
import Link from 'next/link';
import { Bot, Lightbulb, Check, ArrowRight, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diensten — Ariance AI Oplossingen',
  description:
    'Ontdek de AI-diensten van Ariance: AI automatisering en AI consultancy voor het Nederlandse MKB.',
};

const services = [
  {
    id: 'automatisering',
    icon: Bot,
    title: 'AI Automatisering',
    tagline: 'Bespaar uren. Elke week opnieuw.',
    accentRgb: '129,140,248',
    accent: '#818cf8',
    description:
      'Repetitieve taken zijn de grootste tijdvreters in elk bedrijf. Ariance identificeert welke processen geautomatiseerd kunnen worden en bouwt AI-workflows die dit voor u doen — betrouwbaar, snel en schaalbaar.',
    benefits: [
      'E-mailverwerking en -sortering automatisch afhandelen',
      'Rapportages automatisch samenstellen en versturen',
      'Data-invoer en -extractie zonder menselijke tussenkomst',
      'Klantcommunicatie en -opvolging op autopilot',
      'Integratie met bestaande tools zoals Microsoft 365 of Google Workspace',
      'Documentverwerking en archivering geautomatiseerd',
    ],
    included: [
      'Procesanalyse en kansenscan',
      'Maatwerk automatiseringsflows',
      'Integratie met uw bestaande software',
      'Testfase en finetuning',
      'Technische documentatie',
      '1 maand nazorg inclusief',
    ],
  },
  {
    id: 'consultancy',
    icon: Lightbulb,
    title: 'AI Consultancy',
    tagline: 'De juiste AI-strategie voor uw bedrijf.',
    accentRgb: '192,132,252',
    accent: '#c084fc',
    description:
      'Weet u dat AI waardevol kan zijn, maar weet u niet waar te beginnen? Ariance biedt helder en eerlijk advies. We analyseren uw bedrijf en vertellen u precies welke AI-toepassingen zinvol zijn — en welke niet.',
    benefits: [
      'Objectief advies zonder verkooppraatjes',
      'Concrete AI-roadmap afgestemd op uw budget',
      'Inzicht in welke processen de beste ROI opleveren',
      'Technologieselectie en leveranciersbeoordeling',
      'Risico-inventarisatie en privacy-advies (AVG)',
      'Begeleiding bij AI-implementatie van anderen',
    ],
    included: [
      'Intakegesprek (gratis, vrijblijvend)',
      'Procesanalyse en interviews met medewerkers',
      'Schriftelijk AI-adviesrapport',
      'Prioriteitenmatrix met businesscase per kans',
      'Implementatieplan op hoofdlijnen',
      'Presentatie aan directie/management',
    ],
  },
];

export default function DienstenPage() {
  return (
    <div style={{ background: 'var(--bg-0)' }}>

      {/* ── Page header ── */}
      <div
        className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28"
        style={{ background: 'var(--bg-cream)' }}
      >
        {/* Ambient glow */}
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
            Wat wij bieden
          </span>
          <h1
            className="font-display font-extrabold tracking-[-0.03em] leading-[0.96] mb-5 max-w-2xl"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', color: 'var(--ink)' }}
          >
            AI Automatisering{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              &amp; Consultancy
            </span>
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed max-w-xl"
            style={{ color: 'var(--muted-d)' }}
          >
            Van eerste adviesgesprek tot werkende oplossing — Ariance begeleidt u bij elke stap
            richting een slimmer, efficiënter bedrijf.
          </p>
        </div>
      </div>

      {/* ── Service details ── */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col gap-20 md:gap-28">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Text side */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        background: `rgba(${service.accentRgb},0.10)`,
                        border: `1px solid rgba(${service.accentRgb},0.22)`,
                      }}
                    >
                      <Icon size={22} style={{ color: service.accent }} />
                    </div>

                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-4"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        fontWeight: 500,
                        background: `rgba(${service.accentRgb},0.08)`,
                        border: `1px solid rgba(${service.accentRgb},0.22)`,
                        color: service.accent,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: service.accent }}
                      />
                      {service.tagline}
                    </span>

                    <h2
                      className="font-display font-extrabold tracking-tight leading-tight mb-4"
                      style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--ink)' }}
                    >
                      {service.title}
                    </h2>
                    <p
                      className="text-base leading-relaxed mb-8"
                      style={{ color: 'var(--muted-d)' }}
                    >
                      {service.description}
                    </p>

                    <h3
                      className="font-display font-bold text-sm uppercase tracking-wider mb-4"
                      style={{ color: 'var(--ink)' }}
                    >
                      Voordelen
                    </h3>
                    <ul className="flex flex-col gap-2.5 mb-8">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2.5 text-sm"
                          style={{ color: 'var(--muted-d)' }}
                        >
                          <Check
                            size={15}
                            className="mt-0.5 shrink-0"
                            style={{ color: service.accent }}
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-display font-semibold text-sm px-6 py-3.5 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
                      style={{
                        background: `linear-gradient(135deg, ${service.accent} 0%, rgba(${service.accentRgb},0.8) 100%)`,
                        color: '#0d0c18',
                        boxShadow: `0 12px 30px rgba(${service.accentRgb},0.28)`,
                      }}
                    >
                      Vraag een offerte aan
                      <ArrowRight size={15} />
                    </Link>
                  </div>

                  {/* Included card */}
                  <div
                    className={`rounded-3xl p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                    style={{
                      background: `linear-gradient(145deg, rgba(${service.accentRgb},0.04) 0%, var(--bg-cream) 60%)`,
                      border: `1px solid rgba(${service.accentRgb},0.16)`,
                      boxShadow: `0 4px 24px rgba(${service.accentRgb},0.08)`,
                    }}
                  >
                    <h3
                      className="font-display font-bold text-sm uppercase tracking-wider mb-6"
                      style={{ color: 'var(--ink)' }}
                    >
                      Wat is inbegrepen
                    </h3>
                    <ul className="flex flex-col gap-4">
                      {service.included.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{
                              background: `rgba(${service.accentRgb},0.12)`,
                              border: `1px solid rgba(${service.accentRgb},0.25)`,
                            }}
                          >
                            <Check size={12} style={{ color: service.accent }} strokeWidth={2.5} />
                          </div>
                          <span className="text-sm leading-relaxed" style={{ color: 'var(--muted-d)' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <div
                    className="mt-20 md:mt-28 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.20), transparent)' }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
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
            Niet zeker welke dienst past?
          </h2>
          <p
            className="text-base leading-relaxed mb-8 max-w-lg mx-auto"
            style={{ color: 'var(--muted-d)' }}
          >
            Plan een gratis oriëntatiegesprek. We luisteren naar uw situatie en adviseren
            eerlijk wat het beste bij uw bedrijf past.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-display font-semibold text-sm px-7 py-4 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #818cf8 0%, #6d62f0 100%)',
              color: '#0d0c18',
              boxShadow: '0 14px 40px rgba(129,140,248,0.28)',
            }}
          >
            Gratis gesprek inplannen
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
