import type { Metadata } from 'next';
import { ArrowRight, Zap, Mail, FileText, BarChart2, MessageSquare, Clock, Database, Calendar } from 'lucide-react';
import { ContactButton } from '@/components/ui/contact-modal-provider';
import Link from 'next/link';
import FeatureSection from '@/components/home/feature-section';

export const metadata: Metadata = {
  title: 'AI Automatisering - Ariance',
  description:
    'Ariance bouwt AI-automatiseringsoplossingen voor het Nederlandse MKB. Van e-mailverwerking tot rapportages - werkende AI in weken.',
};

const useCases = [
  { icon: Mail,           title: 'E-mailverwerking',  desc: 'Automatisch sorteren & beantwoorden',    accent: '#818cf8', rgb: '129,140,248' },
  { icon: BarChart2,      title: 'Rapportages',        desc: 'Wekelijkse cijfers zonder handwerk',     accent: '#c084fc', rgb: '192,132,252' },
  { icon: FileText,       title: 'Documentverwerking', desc: 'Facturen & contracten automatisch',      accent: '#818cf8', rgb: '129,140,248' },
  { icon: MessageSquare,  title: 'Klantopvolging',     desc: 'Follow-ups op autopilot',                accent: '#c084fc', rgb: '192,132,252' },
  { icon: Database,       title: 'Data-extractie',     desc: 'Invoer zonder menselijke tussenkomst',   accent: '#818cf8', rgb: '129,140,248' },
  { icon: Calendar,       title: 'Agendabeheer',       desc: 'Afspraken inplannen automatisch',        accent: '#c084fc', rgb: '192,132,252' },
  { icon: Clock,          title: 'Tijdregistratie',    desc: 'Urenstaten automatisch verwerken',       accent: '#818cf8', rgb: '129,140,248' },
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

      {/* Combined: voordelen + scroll-animatie */}
      <FeatureSection variant="automatisering" />

      {/* Use cases grid */}
      <div
        className="relative py-16 md:py-20"
        style={{ background: 'var(--bg-cream)' }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2
            className="font-display font-extrabold tracking-tight mb-3"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--ink)' }}
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
                    background: '#ffffff',
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
        style={{ background: 'var(--bg-0)' }}
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
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--ink)' }}
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
