import { Quote } from 'lucide-react';

const clients = [
  {
    name: 'Fit Administratie',
    sector: 'Administratiekantoor',
    description:
      'Fit Administratie automatiseert haar documentverwerking en klantcommunicatie met op maat gebouwde AI-workflows van Ariance.',
  },
  {
    name: 'YouradviesgroepBV',
    sector: 'Financieel advies',
    description:
      'YouradviesgroepBV gebruikt een private AI-omgeving voor interne kennisraapleging en het versnellen van adviesrapporten.',
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">
            Referenties
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1117] leading-tight mb-4">
            Onze klanten
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            Nederlandse bedrijven die al profiteren van praktische AI-implementaties door Ariance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white border border-gray-100 rounded-xl p-8"
            >
              <Quote size={24} className="text-[#DBEAFE] mb-5" />
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {client.description}
              </p>
              <div className="pt-5 border-t border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#0F1117] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0F1117]">{client.name}</div>
                  <div className="text-xs text-gray-400">{client.sector}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            Meer dan tevreden klanten door heel Nederland — van Alkmaar tot Eindhoven.
          </p>
        </div>
      </div>
    </section>
  );
}
