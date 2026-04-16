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
    <section
      className="py-20 md:py-28"
      style={{
        background: '#111009',
        borderTop: '1px solid rgba(217,119,6,0.1)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="max-w-xl mb-12 md:mb-16">
          <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-[#D97706] mb-3 block">
            — 03 &nbsp; Referenties
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#FAF7F2] leading-tight mb-4">
            Onze klanten
          </h2>
          <p className="font-sans text-base text-[#A89880] leading-[1.75]">
            Nederlandse bedrijven die al profiteren van praktische AI-implementaties door Ariance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {clients.map((client) => (
            <div
              key={client.name}
              className="rounded-xl p-8
                         transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                         hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(217,119,6,0.2)]"
              style={{
                background: '#0A0907',
                border: '1px solid rgba(217,119,6,0.1)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
              }}
            >
              {/* Large decorative quote */}
              <div
                className="font-heading text-6xl font-black leading-none mb-4 select-none"
                style={{ color: 'rgba(217,119,6,0.2)' }}
              >
                "
              </div>
              <p className="font-sans text-sm text-[#A89880] leading-[1.8] mb-6">
                {client.description}
              </p>
              <div
                className="pt-5 flex items-center gap-3"
                style={{ borderTop: '1px solid rgba(217,119,6,0.1)' }}
              >
                <div
                  className="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
                  style={{
                    background: 'rgba(217,119,6,0.1)',
                    border: '1px solid rgba(217,119,6,0.2)',
                  }}
                >
                  <span className="font-heading text-[#D97706] text-sm font-bold">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-sans text-sm font-semibold text-[#FAF7F2]">{client.name}</div>
                  <div className="font-mono text-[10px] tracking-wider text-[#6B5A48] uppercase">{client.sector}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-sans text-sm text-[#6B5A48]">
          Tevreden klanten door heel Nederland — van Alkmaar tot Eindhoven.
        </p>
      </div>
    </section>
  );
}
