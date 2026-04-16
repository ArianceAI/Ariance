import { MapPin, User, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white" id="over">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">
              Over Ariance
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1117] leading-tight mb-6">
              Directe lijn met de oprichter. Geen tussenpersonen.
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-5">
              Ariance is opgericht door <strong className="text-[#0F1117]">Léon Ariëns</strong> — een
              AI-specialist met een passie voor het toegankelijk maken van AI voor het Nederlandse
              MKB. U praat altijd direct met hem. Geen accountmanagers, geen callcenters, geen
              vertraging.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              Ariance is gevestigd in Alkmaar en werkt voor bedrijven door heel Nederland. Elke
              oplossing wordt op maat gemaakt voor uw branche, processen en budget. Geen
              standaardpakketten die half werken — maar maatwerk dat écht resultaat oplevert.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0F1117] text-white font-semibold px-6 py-3.5 rounded-md hover:bg-[#1e293b] transition-colors text-sm"
            >
              Maak een afspraak
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                icon: User,
                title: 'Léon Ariëns',
                text: 'Oprichter en enige aanspreekpunt. Directe communicatie zonder tussenschakels.',
              },
              {
                icon: Calendar,
                title: 'Opgericht in 2025',
                text: 'Modern opgericht, met de nieuwste AI-technologieën en een frisse aanpak.',
              },
              {
                icon: MapPin,
                title: 'Gevestigd in Alkmaar',
                text: 'Werkzaam voor bedrijven door heel Nederland. On-site mogelijk, remote altijd.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 border border-gray-100 rounded-xl"
                >
                  <div className="w-9 h-9 rounded-md bg-[#EFF6FF] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={16} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#0F1117] mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
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
