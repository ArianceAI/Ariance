import { MapPin, User, Calendar } from 'lucide-react';
import Link from 'next/link';

const infoCards = [
  { icon: User,     title: 'Léon Ariëns',         text: 'Oprichter en enige aanspreekpunt. Directe communicatie zonder tussenschakels.' },
  { icon: Calendar, title: 'Opgericht in 2025',    text: 'Modern opgericht, met de nieuwste AI-technologieën en een frisse aanpak.' },
  { icon: MapPin,   title: 'Gevestigd in Alkmaar', text: 'Werkzaam voor bedrijven door heel Nederland. On-site mogelijk, remote altijd.' },
];

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0F1117]" id="over">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>
            <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-[#60A5FA] mb-3 block">
              — 04 &nbsp; Over Ariance
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F8FAFC] leading-tight mb-6">
              Directe lijn met de oprichter.{' '}
              <em className="not-italic text-[#2563EB]">Geen tussenpersonen.</em>
            </h2>
            <p className="font-sans text-base text-[#94A3B8] leading-[1.75] mb-5">
              Ariance is opgericht door <strong className="text-[#F8FAFC] font-semibold">Léon Ariëns</strong> —
              een AI-specialist met een passie voor het toegankelijk maken van AI voor het Nederlandse MKB.
              U praat altijd direct met hem. Geen accountmanagers, geen callcenters, geen vertraging.
            </p>
            <p className="font-sans text-base text-[#94A3B8] leading-[1.75] mb-8">
              Gevestigd in Alkmaar, werkzaam door heel Nederland. Elke oplossing op maat voor uw
              branche, processen en budget. Geen standaardpakketten die half werken — maatwerk dat écht resultaat oplevert.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold
                         text-[#F8FAFC] px-6 py-3.5 rounded-md
                         transition-[transform,box-shadow,background] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                         hover:-translate-y-1 hover:bg-[#131929] hover:shadow-[0_12px_32px_rgba(0,0,0,0.45)]
                         active:translate-y-0"
              style={{ border: '1px solid rgba(37,99,235,0.25)' }}
            >
              Maak een afspraak
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            {infoCards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-xl
                             transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                             hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(37,99,235,0.1),0_2px_8px_rgba(0,0,0,0.35)]"
                  style={{ background: '#131929', border: '1px solid rgba(37,99,235,0.1)' }}
                >
                  <div
                    className="w-9 h-9 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)' }}
                  >
                    <Icon size={15} className="text-[#60A5FA]" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-[#F8FAFC] mb-1">{item.title}</h3>
                    <p className="font-sans text-sm text-[#94A3B8] leading-[1.7]">{item.text}</p>
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
