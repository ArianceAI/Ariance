import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function CtaSection() {
  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0E0B07 0%, #0A0907 45%, #0C0A06 100%)',
        borderTop: '1px solid rgba(217,119,6,0.12)',
      }}
    >
      {/* Large amber glow rising from below */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(217,119,6,0.22) 0%, rgba(217,119,6,0.06) 50%, transparent 70%)',
        }}
      />

      {/* Subtle top edge line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D97706, transparent)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">

        <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-[#D97706] mb-5 block">
          — Begin vandaag
        </span>

        <h2
          className="font-heading font-black text-[#FAF7F2] leading-[1.02] tracking-tight mb-5 max-w-2xl mx-auto"
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            textShadow: '0 0 80px rgba(217,119,6,0.25)',
          }}
        >
          Klaar om te starten?
        </h2>

        <p className="font-sans text-base md:text-lg text-[#A89880] leading-[1.75] mb-10 max-w-xl mx-auto">
          Plan een vrijblijvend gesprek met Léon. Binnen 30 minuten weet u welke AI-oplossingen
          het meeste opleveren voor uw bedrijf.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold
                       text-[#0A0907] bg-[#D97706] px-7 py-3.5 rounded-md
                       transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                       hover:-translate-y-1 hover:bg-[#F59E0B] hover:shadow-[0_20px_48px_rgba(217,119,6,0.5)]
                       active:translate-y-0"
          >
            Neem contact op
            <ArrowRight size={15} />
          </Link>
          <a
            href="tel:+31614455066"
            className="inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold
                       text-[#FAF7F2] px-7 py-3.5 rounded-md
                       transition-[transform,box-shadow,background] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                       hover:-translate-y-1 hover:bg-white/[0.05] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]
                       active:translate-y-0"
            style={{ border: '1px solid rgba(217,119,6,0.22)' }}
          >
            <Phone size={14} />
            +31 6 14455066
          </a>
        </div>

        <p className="mt-8 font-mono text-[10px] tracking-widest uppercase text-[#6B5A48]">
          Ma – Vr &nbsp;·&nbsp; 9:00 – 17:00 &nbsp;·&nbsp; Alkmaar
        </p>
      </div>
    </section>
  );
}
