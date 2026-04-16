import { MapPin, User, Calendar } from 'lucide-react';
import Link from 'next/link';

const infoCards = [
  { icon: User,     title: 'Léon Ariëns',         text: 'Oprichter en enige aanspreekpunt. Directe communicatie zonder tussenschakels.' },
  { icon: Calendar, title: 'Opgericht in 2025',    text: 'Modern opgericht, met de nieuwste AI-technologieën en een frisse aanpak.' },
  { icon: MapPin,   title: 'Gevestigd in Alkmaar', text: 'Werkzaam voor bedrijven door heel Nederland. On-site mogelijk, remote altijd.' },
];

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC]" id="over">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Links — tekst */}
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">
              Over Ariance
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F1117] tracking-tight leading-tight mb-6">
              Directe lijn met de oprichter.
              <br />
              <span className="text-[#2563EB]">Geen tussenpersonen.</span>
            </h2>
            <p className="text-base text-[#6B7280] leading-[1.75] mb-5">
              Ariance is opgericht door <strong className="text-[#0F1117] font-semibold">Léon Ariëns</strong> —
              een AI-specialist met een passie voor het toegankelijk maken van AI voor het Nederlandse MKB.
              U praat altijd direct met hem.
            </p>
            <p className="text-base text-[#6B7280] leading-[1.75] mb-8">
              Gevestigd in Alkmaar, werkzaam door heel Nederland. Elke oplossing wordt op maat gemaakt
              voor uw branche, processen en budget.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0F1117] text-white
                         font-semibold px-6 py-3.5 rounded-lg text-sm
                         transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                         hover:-translate-y-1 hover:bg-[#1e293b] hover:shadow-[0_10px_24px_rgba(15,17,23,0.25)]
                         active:translate-y-0"
            >
              Maak een afspraak
            </Link>
          </div>

          {/* Rechts — info cards */}
          <div className="flex flex-col gap-4">
            {infoCards.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 p-6 rounded-2xl bg-white
                             transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                             hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                  style={{ border: '1.5px solid #E5E7EB' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: i === 0 ? '#EFF6FF' : i === 1 ? '#F0FDF4' : '#FEF3C7',
                    }}
                  >
                    <Icon
                      size={16}
                      style={{ color: i === 0 ? '#2563EB' : i === 1 ? '#16A34A' : '#D97706' }}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0F1117] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-[1.7]">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
