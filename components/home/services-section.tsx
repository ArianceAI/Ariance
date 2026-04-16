import Link from 'next/link';
import { Bot, Lightbulb, Lock, Globe, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Bot,
    num: '01',
    title: 'AI Automatisering',
    description: 'Automatiseer e-mailverwerking, rapportages, data-invoer en klantcommunicatie. Bespaar uren per week met slimme AI-workflows.',
    href: '/diensten#automatisering',
  },
  {
    icon: Lightbulb,
    num: '02',
    title: 'AI Consultancy',
    description: 'Ariance analyseert uw bedrijfsprocessen en adviseert welke AI-toepassingen de meeste waarde opleveren voor uw specifieke situatie.',
    href: '/diensten#consultancy',
  },
  {
    icon: Lock,
    num: '03',
    title: 'Private AI',
    description: 'Een volledig privé AI-model op uw eigen servers. Vertrouwelijke bedrijfsdata blijft intern — geen data naar externe partijen.',
    href: '/diensten#private-ai',
  },
  {
    icon: Globe,
    num: '04',
    title: 'Websites & Digitalisering',
    description: 'Moderne websites en digitale tools die uw bedrijf online zetten en processen digitaliseren.',
    href: '/diensten#websites',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC]" id="diensten">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">
              Onze diensten
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F1117] tracking-tight leading-tight">
              Wat wij voor u doen
            </h2>
          </div>
          <Link
            href="/diensten"
            className="text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8] transition-colors duration-200 shrink-0"
          >
            Alle diensten bekijken →
          </Link>
        </div>

        {/* Editoriale lijst */}
        <div className="divide-y divide-[#E5E7EB]" style={{ borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group flex items-start gap-6 py-7 transition-[background] duration-200 hover:bg-white px-4 -mx-4 rounded-xl"
              >
                {/* Nummer */}
                <span className="text-xs font-bold text-[#D1D5DB] tracking-widest mt-1 w-6 shrink-0 group-hover:text-[#2563EB] transition-colors duration-200">
                  {service.num}
                </span>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                               transition-[background,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                               bg-[#EFF6FF] group-hover:bg-[#2563EB] group-hover:shadow-[0_4px_16px_rgba(37,99,235,0.35)]"
                >
                  <Icon
                    size={17}
                    className="text-[#2563EB] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* Tekst */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-[#0F1117] mb-1.5 group-hover:text-[#2563EB] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-[1.7]">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  size={18}
                  className="text-[#D1D5DB] shrink-0 mt-1 transition-[transform,color] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
