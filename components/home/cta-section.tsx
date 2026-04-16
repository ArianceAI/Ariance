import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function CtaSection() {
  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0a0d18 0%, #0F1117 45%, #0a0e1c 100%)',
        borderTop: '1px solid rgba(37,99,235,0.12)',
      }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.2) 0%, rgba(37,99,235,0.05) 50%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #2563EB, transparent)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-[#60A5FA] mb-5 block">
          — Begin vandaag
        </span>

        <h2
          className="font-heading font-black text-[#F8FAFC] leading-[1.02] tracking-tight mb-5 max-w-2xl mx-auto"
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            textShadow: '0 0 80px rgba(37,99,235,0.3)',
          }}
        >
          Klaar om te starten?
        </h2>

        <p className="font-sans text-base md:text-lg text-[#94A3B8] leading-[1.75] mb-10 max-w-xl mx-auto">
          Plan een vrijblijvend gesprek met Léon. Binnen 30 minuten weet u welke AI-oplossingen
          het meeste opleveren voor uw bedrijf.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold
                       text-white bg-[#2563EB] px-7 py-3.5 rounded-md
                       transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                       hover:-translate-y-1 hover:bg-[#1d4ed8] hover:shadow-[0_20px_48px_rgba(37,99,235,0.5)]
                       active:translate-y-0"
          >
            Neem contact op
            <ArrowRight size={15} />
          </Link>
          <a
            href="tel:+31614455066"
            className="inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold
                       text-[#F8FAFC] px-7 py-3.5 rounded-md
                       transition-[transform,box-shadow,background] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                       hover:-translate-y-1 hover:bg-white/[0.05] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]
                       active:translate-y-0"
            style={{ border: '1px solid rgba(37,99,235,0.22)' }}
          >
            <Phone size={14} />
            +31 6 14455066
          </a>
        </div>

        <p className="mt-8 font-mono text-[10px] tracking-widest uppercase text-[#475569]">
          Ma – Vr &nbsp;·&nbsp; 9:00 – 17:00 &nbsp;·&nbsp; Alkmaar
        </p>
      </div>
    </section>
  );
}
