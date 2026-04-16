import { Zap, Shield, MapPin, TrendingUp } from 'lucide-react';

const usps = [
  { icon: Zap,        title: 'Snel & Praktisch',    description: 'Werkende oplossingen in dagen, niet maanden.' },
  { icon: Shield,     title: 'Private AI',           description: 'Uw data blijft binnen uw eigen omgeving.' },
  { icon: MapPin,     title: 'Nederlands Maatwerk',  description: 'Gebouwd voor de Nederlandse markt en taal.' },
  { icon: TrendingUp, title: 'Directe ROI',          description: 'Aantoonbaar rendement, meetbaar resultaat.' },
];

export default function UspBar() {
  return (
    <section
      className="py-14 md:py-16"
      style={{
        background: '#131929',
        borderTop: '1px solid rgba(37,99,235,0.12)',
        borderBottom: '1px solid rgba(37,99,235,0.12)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {usps.map((usp) => {
            const Icon = usp.icon;
            return (
              <div key={usp.title} className="flex flex-col gap-3">
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center"
                  style={{
                    background: 'rgba(37,99,235,0.1)',
                    border: '1px solid rgba(37,99,235,0.22)',
                    boxShadow: '0 0 16px rgba(37,99,235,0.08)',
                  }}
                >
                  <Icon size={17} className="text-[#60A5FA]" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-[#F8FAFC] mb-1">{usp.title}</h3>
                  <p className="font-sans text-xs text-[#475569] leading-relaxed">{usp.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
