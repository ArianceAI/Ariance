import Link from 'next/link';
import { Bot, Lightbulb, Lock, Globe, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Automatisering',
    description:
      'Automatiseer repetitieve processen zoals e-mailverwerking, rapportages, data-invoer en klantcommunicatie. Bespaar uren per week met slimme AI-workflows.',
    href: '/diensten#automatisering',
  },
  {
    icon: Lightbulb,
    title: 'AI Consultancy',
    description:
      'Weet u niet waar u moet beginnen? Ariance analyseert uw bedrijfsprocessen en adviseert welke AI-toepassingen de meeste waarde opleveren voor uw situatie.',
    href: '/diensten#consultancy',
  },
  {
    icon: Lock,
    title: 'Private AI',
    description:
      'Een volledig privé AI-model dat draait op uw eigen servers of beveiligde cloud. Vertrouwelijke bedrijfsdata blijft intern — geen data naar externe partijen.',
    href: '/diensten#private-ai',
  },
  {
    icon: Globe,
    title: 'Websites & Digitalisering',
    description:
      'Moderne websites en digitale tools die uw bedrijf online zetten en processen digitaliseren. Van eenvoudige zakelijke website tot complete digitale transformatie.',
    href: '/diensten#websites',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white" id="diensten">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">
            Onze diensten
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1117] leading-tight mb-4">
            Wat wij voor u doen
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            Van strategie tot implementatie — Ariance levert concrete AI-oplossingen die passen
            bij uw bedrijf en budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group border border-gray-100 rounded-xl p-7 hover:border-[#2563EB]/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-md bg-[#EFF6FF] flex items-center justify-center mb-5">
                  <Icon size={18} className="text-[#2563EB]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F1117] mb-3">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:gap-2.5 transition-all"
                >
                  Meer info
                  <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
