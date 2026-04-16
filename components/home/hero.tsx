import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB] opacity-[0.03] rounded-full translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0F1117] opacity-[0.02] rounded-full -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-semibold px-3 py-1.5 rounded-full mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            AI voor het Nederlandse MKB
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#0F1117] leading-[1.1] tracking-tight mb-6">
            AI neemt het routinewerk over.{' '}
            <span className="text-[#2563EB]">Jij focust op wat er echt toe doet.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl">
            Ariance bouwt praktische AI-oplossingen voor Nederlandse bedrijven. Geen hype, geen
            vage beloftes — maar concrete automatisering die tijd bespaart en omzet verhoogt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/diensten"
              className="inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white font-semibold px-6 py-3.5 rounded-md hover:bg-[#1d4ed8] transition-colors text-sm"
            >
              Bekijk onze diensten
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0F1117] font-semibold px-6 py-3.5 rounded-md border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors text-sm"
            >
              Neem contact op
            </Link>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-100">
          {[
            { value: '100%', label: 'Nederlands maatwerk' },
            { value: '2025', label: 'Opgericht in Alkmaar' },
            { value: 'Directe', label: 'Lijn met de oprichter' },
            { value: 'MKB', label: 'Specialist & focus' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-[#0F1117] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
