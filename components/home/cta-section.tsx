import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0F1117]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#60A5FA] mb-4">
          Begin vandaag
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 max-w-2xl mx-auto">
          Klaar om te starten?
        </h2>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto">
          Plan een vrijblijvend gesprek met Léon. Binnen 30 minuten weet u welke AI-oplossingen
          het meeste opleveren voor uw bedrijf.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white font-semibold px-7 py-3.5 rounded-md hover:bg-[#1d4ed8] transition-colors text-sm"
          >
            Neem contact op
            <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+31614455066"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-semibold px-7 py-3.5 rounded-md border border-gray-700 hover:border-gray-500 hover:bg-white/5 transition-colors text-sm"
          >
            <Phone size={15} />
            +31 6 14455066
          </a>
        </div>

        <p className="mt-8 text-xs text-gray-600">
          Bereikbaar van maandag t/m vrijdag &middot; 9:00 – 17:00 &middot; Alkmaar
        </p>
      </div>
    </section>
  );
}
