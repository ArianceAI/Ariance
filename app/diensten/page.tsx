import type { Metadata } from 'next';
import Link from 'next/link';
import { Bot, Lightbulb, Check, ArrowRight } from 'lucide-react';

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
    <div className="bg-white">
      <div className="bg-[#0F1117] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#60A5FA] mb-4">
            Wat wij bieden
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-2xl">
            Diensten
          </h1>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
            Van eerste adviesgesprek tot werkende oplossing — Ariance begeleidt u bij elke stap
            richting een slimmer, efficiënter bedrijf.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col gap-20 md:gap-28">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="w-11 h-11 rounded-md bg-[#EFF6FF] flex items-center justify-center mb-6">
                      <Icon size={20} className="text-[#2563EB]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0F1117] mb-2">
                      {service.title}
                    </h2>
                    <p className="text-base font-medium text-[#2563EB] mb-5">{service.tagline}</p>
                    <p className="text-base text-gray-500 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <h3 className="text-sm font-semibold text-[#0F1117] uppercase tracking-wide mb-4">
                      Voordelen
                    </h3>
                    <ul className="flex flex-col gap-2.5 mb-8">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <Check size={15} className="text-[#2563EB] mt-0.5 shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#2563EB] text-white font-semibold px-5 py-3 rounded-md hover:bg-[#1d4ed8] transition-colors text-sm"
                    >
                      Vraag een offerte aan
                      <ArrowRight size={15} />
                    </Link>
                  </div>

                  <div className={`bg-[#F8FAFC] rounded-xl p-7 border border-gray-100 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <h3 className="text-sm font-semibold text-[#0F1117] uppercase tracking-wide mb-5">
                      Wat is inbegrepen
                    </h3>
                    <ul className="flex flex-col gap-4">
                      {service.included.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#DBEAFE] flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={11} className="text-[#2563EB]" />
                          </div>
                          <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <hr className="mt-20 md:mt-28 border-gray-100" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#0F1117] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Niet zeker welke dienst past?
          </h2>
          <p className="text-base text-gray-400 mb-8 max-w-lg mx-auto">
            Plan een gratis oriëntatiegesprek. Léon luistert naar uw situatie en adviseert
            eerlijk wat het beste bij uw bedrijf past.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#2563EB] text-white font-semibold px-6 py-3.5 rounded-md hover:bg-[#1d4ed8] transition-colors text-sm"
          >
            Gratis gesprek inplannen
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
