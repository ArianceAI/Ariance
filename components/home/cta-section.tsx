import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0F1117]">

      {/* Blauwe glow van onderaf */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.25) 0%, rgba(37,99,235,0.06) 55%, transparent 70%)',
        }}
      />

      {/* Top center — dunne blauwe lijn */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #2563EB, transparent)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#60A5FA] mb-5">
          Begin vandaag
        </p>

        <h2
          className="font-extrabold text-white leading-[1.06] tracking-tight mb-5 max-w-2xl mx-auto"
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            textShadow: '0 0 60px rgba(37,99,235,0.3)',
          }}
        >
          Klaar om te starten?
        </h2>

        <p className="text-base md:text-lg text-[#94A3B8] leading-[1.75] mb-10 max-w-xl mx-auto">
          Plan een vrijblijvend gesprek met Léon. Binnen 30 minuten weet u welke AI-oplossingen
          het meeste opleveren voor uw bedrijf.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white
                       font-semibold px-7 py-3.5 rounded-lg text-sm
                       transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                       hover:-translate-y-1 hover:bg-[#1d4ed8] hover:shadow-[0_16px_40px_rgba(37,99,235,0.5)]
                       active:translate-y-0"
          >
            Neem contact op
            <ArrowRight size={15} />
          </Link>
          <a
            href="tel:+31614455066"
            className="inline-flex items-center justify-center gap-2 text-white
                       font-semibold px-7 py-3.5 rounded-lg text-sm
                       transition-[transform,box-shadow,background] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                       hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)]
                       active:translate-y-0"
            style={{ border: '1.5px solid rgba(255,255,255,0.15)' }}
          >
            <Phone size={14} />
            +31 6 14455066
          </a>
        </div>

        <p className="mt-8 text-xs text-[#475569] tracking-wide">
          Bereikbaar van maandag t/m vrijdag · 9:00 – 17:00 · Alkmaar
        </p>
      </div>
    </section>
  );
}
