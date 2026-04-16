import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#0F1117] pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">

      <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-80" />

      <div
        className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, rgba(37,99,235,0.04) 40%, transparent 65%)',
        }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">

        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-[#60A5FA]">
            — 01 &nbsp; AI voor het Nederlandse MKB
          </span>
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse"
            style={{ boxShadow: '0 0 8px rgba(96,165,250,0.9)' }}
          />
        </div>

        <h1
          className="font-heading font-black text-[#F8FAFC] leading-[1.02] tracking-tight mb-8 max-w-4xl"
          style={{ fontSize: 'clamp(2.6rem, 6vw, 4.25rem)' }}
        >
          AI neemt het routinewerk over.{' '}
          <em
            className="not-italic text-[#2563EB]"
            style={{ textShadow: '0 0 60px rgba(37,99,235,0.4)' }}
          >
            Jij focust op wat er echt toe doet.
          </em>
        </h1>

        <div
          className="w-16 h-px mb-8"
          style={{ background: 'linear-gradient(90deg, #2563EB, transparent)' }}
        />

        <p className="font-sans text-lg md:text-xl text-[#94A3B8] leading-[1.75] mb-10 max-w-2xl">
          Ariance bouwt praktische AI-oplossingen voor Nederlandse bedrijven. Geen hype,
          geen vage beloftes — maar concrete automatisering die tijd bespaart en omzet verhoogt.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/diensten"
            className="inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold
                       text-white bg-[#2563EB] px-6 py-3.5 rounded-md
                       transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                       hover:-translate-y-1 hover:bg-[#1d4ed8] hover:shadow-[0_16px_40px_rgba(37,99,235,0.4)]
                       active:translate-y-0"
          >
            Bekijk onze diensten
            <ArrowRight size={15} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold
                       text-[#F8FAFC] px-6 py-3.5 rounded-md
                       transition-[transform,box-shadow,background] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                       hover:-translate-y-1 hover:bg-white/[0.06] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]
                       active:translate-y-0"
            style={{ border: '1px solid rgba(37,99,235,0.3)' }}
          >
            Neem contact op
          </Link>
        </div>

        <div
          className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8"
          style={{ borderTop: '1px solid rgba(37,99,235,0.12)' }}
        >
          {[
            { value: '100%', label: 'Nederlands maatwerk' },
            { value: '2025', label: 'Opgericht in Alkmaar' },
            { value: 'Directe', label: 'Lijn met de oprichter' },
            { value: 'MKB', label: 'Specialist & focus' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="font-heading text-2xl font-bold text-[#2563EB] mb-1"
                style={{ textShadow: '0 0 20px rgba(37,99,235,0.45)' }}
              >
                {stat.value}
              </div>
              <div className="font-sans text-sm text-[#475569]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
