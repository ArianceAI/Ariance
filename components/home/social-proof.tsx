'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const clients = [
  {
    name: 'Fit Administratie',
    sector: 'Administratiekantoor',
    initials: 'FA',
    color: '#2563EB',
    description:
      'Fit Administratie automatiseert haar documentverwerking en klantcommunicatie met op maat gebouwde AI-workflows van Ariance.',
    stars: 5,
  },
  {
    name: 'YouradviesgroepBV',
    sector: 'Financieel advies',
    initials: 'YA',
    color: '#34D399',
    description:
      'YouradviesgroepBV gebruikt een private AI-omgeving voor interne kennisraadpleging en het versnellen van adviesrapporten.',
    stars: 5,
  },
];

export default function SocialProof() {
  const ref = useRef(null);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: '-40px' });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32"
      style={{ background: 'var(--clr-bg-dark)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 80% 80%, rgba(37,99,235,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="max-w-xl mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#60A5FA] mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Referenties
          </p>
          <h2
            className="text-3xl md:text-[2.6rem] font-extrabold tracking-tight leading-tight mb-4 text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Onze klanten
          </h2>
          <p className="text-base leading-[1.75]" style={{ color: 'var(--clr-text-muted-d)' }}>
            Nederlandse bedrijven die al profiteren van praktische AI-implementaties door Ariance.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl p-8 overflow-hidden
                         transition-[transform,box-shadow] duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
              whileHover={{
                boxShadow: `0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px ${client.color}30`,
              }}
            >
              {/* Glow accent on hover */}
              <div
                className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${client.color}, transparent)` }}
              />

              {/* Quote icon */}
              <Quote
                size={28}
                className="mb-5 opacity-30"
                style={{ color: client.color }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: client.stars }).map((_, j) => (
                  <Star key={j} size={13} fill={client.color} style={{ color: client.color }} />
                ))}
              </div>

              <p className="text-sm leading-[1.85] mb-8" style={{ color: 'rgba(232,237,245,0.8)' }}>
                "{client.description}"
              </p>

              <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-white text-sm"
                  style={{ background: client.color, fontFamily: 'var(--font-display)' }}
                >
                  {client.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    {client.name}
                  </div>
                  <div
                    className="text-[11px] uppercase tracking-wide mt-0.5"
                    style={{ color: 'var(--clr-text-muted-d)', fontFamily: 'var(--font-display)' }}
                  >
                    {client.sector}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-10 text-center text-sm"
          style={{ color: 'var(--clr-text-muted-d)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Tevreden klanten door heel Nederland — van Alkmaar tot Eindhoven.
        </motion.p>
      </div>
    </section>
  );
}
