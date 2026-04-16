import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">

      {/* Diagonale lijntextuur */}
      <div className="absolute inset-0 bg-line-texture pointer-events-none" />

      {/* Grote blauwe ring — rechts */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          border: '80px solid rgba(37,99,235,0.07)',
        }}
      />
      {/* Kleinere ring ernaast */}
      <div
        className="absolute -right-8 top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{
          border: '2px solid rgba(37,99,235,0.12)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-[680px]">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 text-[#2563EB] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-8 tracking-wide"
            style={{
              background: '#EFF6FF',
              border: '1px solid #BFDBFE',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            AI voor het Nederlandse MKB
          </div>

          {/* Heading — groot, strak, bold */}
          <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold text-[#0F1117] leading-[1.06] tracking-[-0.03em] mb-6">
            AI neemt het{' '}
            <span className="relative inline-block">
              routinewerk
              {/* Blauwe onderstreep */}
              <span
                className="absolute -bottom-1 left-0 right-0 h-[5px] rounded-full"
                style={{ background: 'linear-gradient(90deg, #2563EB, #60A5FA)' }}
              />
            </span>
            {' '}over.
            <br />
            <span className="text-[#2563EB]">Jij focust op wat telt.</span>
          </h1>

          <p className="text-lg text-[#6B7280] leading-[1.75] mb-10 max-w-xl">
            Ariance bouwt praktische AI-oplossingen voor Nederlandse bedrijven. Geen hype,
            geen vage beloftes — maar concrete automatisering die tijd bespaart en omzet verhoogt.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/diensten"
              className="inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white
                         font-semibold px-6 py-3.5 rounded-lg text-sm
                         transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                         hover:-translate-y-1 hover:bg-[#1d4ed8] hover:shadow-[0_12px_28px_rgba(37,99,235,0.38)]
                         active:translate-y-0"
            >
              Bekijk onze diensten
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-[#0F1117]
                         font-semibold px-6 py-3.5 rounded-lg text-sm bg-white
                         transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                         hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]
                         active:translate-y-0"
              style={{ border: '1.5px solid #E5E7EB' }}
            >
              Neem contact op
            </Link>
          </div>
        </div>

        {/* Stats — met blauwe linkerbalk */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '100%', label: 'Nederlands maatwerk' },
            { value: '2025', label: 'Opgericht in Alkmaar' },
            { value: 'Direct', label: 'Contact met oprichter' },
            { value: 'MKB', label: 'Specialist & focus' },
          ].map((stat) => (
            <div key={stat.label} className="flex gap-3 items-start">
              <div className="w-0.5 h-full min-h-[40px] bg-[#2563EB] rounded-full shrink-0 mt-1" />
              <div>
                <div className="text-2xl font-extrabold text-[#0F1117] tracking-tight leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[#9CA3AF]">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
