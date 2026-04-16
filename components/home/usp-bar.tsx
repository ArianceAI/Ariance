import { Zap, Shield, MapPin, TrendingUp } from 'lucide-react';

const usps = [
  { icon: Zap,        title: 'Snel & Praktisch',    description: 'Werkende oplossingen in dagen, niet maanden.' },
  { icon: Shield,     title: 'Private AI',           description: 'Uw data blijft binnen uw eigen omgeving.' },
  { icon: MapPin,     title: 'Nederlands Maatwerk',  description: 'Gebouwd voor de Nederlandse markt en taal.' },
  { icon: TrendingUp, title: 'Directe ROI',          description: 'Aantoonbaar rendement, meetbaar resultaat.' },
];

export default function UspBar() {
  return (
    <section className="bg-[#2563EB] py-12 md:py-14">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp) => {
            const Icon = usp.icon;
            return (
              <div key={usp.title} className="flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                  <Icon size={17} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-0.5">{usp.title}</h3>
                  <p className="text-xs text-blue-100 leading-relaxed">{usp.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
