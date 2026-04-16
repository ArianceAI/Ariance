const clients = [
  {
    name: 'Fit Administratie',
    sector: 'Administratiekantoor',
    description:
      'Fit Administratie automatiseert haar documentverwerking en klantcommunicatie met op maat gebouwde AI-workflows van Ariance.',
  },
  {
    name: 'YouradviesgroepBV',
    sector: 'Financieel advies',
    description:
      'YouradviesgroepBV gebruikt een private AI-omgeving voor interne kennisraadpleging en het versnellen van adviesrapporten.',
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="max-w-xl mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">
            Referenties
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F1117] tracking-tight leading-tight mb-4">
            Onze klanten
          </h2>
          <p className="text-base text-[#6B7280] leading-[1.75]">
            Nederlandse bedrijven die al profiteren van praktische AI-implementaties door Ariance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {clients.map((client) => (
            <div
              key={client.name}
              className="rounded-2xl p-8 relative overflow-hidden
                         transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                         hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(37,99,235,0.12),0_2px_8px_rgba(0,0,0,0.04)]"
              style={{
                background: '#F8FAFC',
                border: '1.5px solid #E5E7EB',
              }}
            >
              {/* Grote aanhalingstekens decoratie */}
              <div
                className="absolute -top-2 -left-1 text-[96px] font-black leading-none select-none pointer-events-none"
                style={{ color: 'rgba(37,99,235,0.07)', fontFamily: 'Georgia, serif' }}
              >
                "
              </div>

              <p className="relative text-sm text-[#374151] leading-[1.8] mb-6">
                {client.description}
              </p>

              <div className="pt-5 flex items-center gap-3" style={{ borderTop: '1px solid #E5E7EB' }}>
                <div className="w-9 h-9 rounded-lg bg-[#2563EB] flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">{client.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0F1117]">{client.name}</div>
                  <div className="text-xs text-[#9CA3AF] uppercase tracking-wide">{client.sector}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[#9CA3AF]">
          Tevreden klanten door heel Nederland — van Alkmaar tot Eindhoven.
        </p>
      </div>
    </section>
  );
}
