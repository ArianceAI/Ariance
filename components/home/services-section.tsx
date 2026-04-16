import Link from 'next/link';
import { Bot, Lightbulb, Lock, Globe, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Bot,
    label: '01',
    title: 'AI Automatisering',
    description:
      'Automatiseer repetitieve processen zoals e-mailverwerking, rapportages, data-invoer en klantcommunicatie. Bespaar uren per week met slimme AI-workflows.',
    href: '/diensten#automatisering',
  },
  {
    icon: Lightbulb,
    label: '02',
    title: 'AI Consultancy',
    description:
      'Weet u niet waar u moet beginnen? Ariance analyseert uw bedrijfsprocessen en adviseert welke AI-toepassingen de meeste waarde opleveren voor uw situatie.',
    href: '/diensten#consultancy',
  },
  {
    icon: Lock,
    label: '03',
    title: 'Private AI',
    description:
      'Een volledig privé AI-model op uw eigen servers of beveiligde cloud. Vertrouwelijke bedrijfsdata blijft intern — geen data naar externe partijen.',
    href: '/diensten#private-ai',
  },
  {
    icon: Globe,
    label: '04',
    title: 'Websites & Digitalisering',
    description:
      'Moderne websites en digitale tools die uw bedrijf online zetten. Van eenvoudige zakelijke website tot complete digitale transformatie.',
    href: '/diensten#websites',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0A0907]" id="diensten">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="max-w-xl mb-12 md:mb-16">
          <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-[#D97706] mb-3 block">
            — 02 &nbsp; Onze diensten
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#FAF7F2] leading-tight mb-4">
            Wat wij voor u doen
          </h2>
          <p className="font-sans text-base text-[#A89880] leading-[1.75]">
            Van strategie tot implementatie — Ariance levert concrete AI-oplossingen die passen
            bij uw bedrijf en budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px"
             style={{ background: 'rgba(217,119,6,0.08)', borderRadius: '0.75rem', overflow: 'hidden' }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-7 bg-[#0A0907] relative
                           transition-[background] duration-300
                           hover:bg-[#111009]"
              >
                {/* Mono number */}
                <span className="font-mono text-[10px] tracking-widest text-[#6B5A48] mb-4 block">
                  {service.label}
                </span>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center mb-5
                              transition-[box-shadow] duration-300 group-hover:shadow-[0_0_24px_rgba(217,119,6,0.25)]"
                  style={{
                    background: 'rgba(217,119,6,0.08)',
                    border: '1px solid rgba(217,119,6,0.18)',
                  }}
                >
                  <Icon size={17} className="text-[#D97706]" />
                </div>

                <h3 className="font-heading text-lg font-bold text-[#FAF7F2] mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-[#A89880] leading-[1.75] mb-5">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-[#D97706]
                             transition-[gap,opacity] duration-200 hover:gap-2.5"
                >
                  Meer info
                  <ArrowRight size={14} />
                </Link>

                {/* Bottom-left amber accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 h-px w-0 bg-[#D97706] transition-[width] duration-500 ease-out group-hover:w-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
