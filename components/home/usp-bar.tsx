import { Zap, Shield, MapPin, TrendingUp } from 'lucide-react';

const usps = [
  {
    icon: Zap,
    title: 'Snel & Praktisch',
    description: 'Werkende oplossingen in dagen, niet maanden.',
  },
  {
    icon: Shield,
    title: 'Private AI',
    description: 'Uw data blijft binnen uw eigen omgeving.',
  },
  {
    icon: MapPin,
    title: 'Nederlands Maatwerk',
    description: 'Gebouwd voor de Nederlandse markt en taal.',
  },
  {
    icon: TrendingUp,
    title: 'Directe ROI',
    description: 'Aantoonbaar rendement, meetbaar resultaat.',
  },
];

export default function UspBar() {
  return (
    <section className="bg-[#0F1117] py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {usps.map((usp) => {
            const Icon = usp.icon;
            return (
              <div key={usp.title} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-md bg-[#1e293b] flex items-center justify-center">
                  <Icon size={18} className="text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">{usp.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{usp.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
