'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle2, Quote } from 'lucide-react';

const highlights = [
  'Direct contact met de oprichter',
  'Maatwerk voor uw branche',
  'Transparante aanpak & vaste prijs',
  'Aantoonbaar resultaat',
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-24 md:py-32 bg-white" id="over">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left — visuele oprichter spotlight (60% breedte) */}
          <motion.div
            className="lg:col-span-3 relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Founder card */}
            <div
              className="relative rounded-2xl overflow-hidden p-10 md:p-12"
              style={{
                background: 'linear-gradient(135deg, #060B14 0%, #0D1A2E 100%)',
                border: '1px solid rgba(37,99,235,0.15)',
                boxShadow: '0 30px 70px rgba(0,0,0,0.2), 0 0 0 1px rgba(37,99,235,0.08)',
              }}
            >
              {/* Ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 80% 20%, rgba(37,99,235,0.18) 0%, transparent 65%)' }} />
              <div className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 20% 80%, rgba(37,99,235,0.1) 0%, transparent 65%)' }} />

              {/* Blob decoratie */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)', filter: 'blur(30px)' }} />

              {/* Quote icon */}
              <Quote size={32} className="mb-6 opacity-20 text-[#60A5FA]" />

              {/* Quote tekst */}
              <blockquote
                className="text-xl md:text-2xl font-semibold text-white leading-[1.5] mb-8 relative"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                "U praat altijd direct met mij — geen accountmanagers, geen wachtrijen. Gewoon eerlijk advies en echte resultaten."
              </blockquote>

              {/* Founder info */}
              <div className="flex items-center gap-4 relative">
                {/* Avatar met initialen */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-lg font-bold shrink-0"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #1d4ed8)', fontFamily: 'var(--font-display)', boxShadow: '0 4px 16px rgba(37,99,235,0.4)' }}
                >
                  LÁ
                </div>
                <div>
                  <div className="text-white font-bold text-base" style={{ fontFamily: 'var(--font-display)' }}>Léon Ariëns</div>
                  <div className="text-[#6B7A99] text-sm flex items-center gap-1.5 mt-0.5">
                    <MapPin size={12} />
                    Oprichter · Alkmaar
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 relative"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                {[
                  { v: '100%', l: 'Maatwerk' },
                  { v: 'Direct', l: 'Contact' },
                  { v: 'MKB', l: 'Focus' },
                ].map(({ v, l }) => (
                  <div key={l} className="text-center">
                    <div className="text-xl font-bold text-white mb-0.5" style={{ fontFamily: 'var(--font-display)' }}>{v}</div>
                    <div className="text-[11px]" style={{ color: '#6B7A99' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              className="absolute -bottom-5 -right-5 hidden lg:block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div
                className="px-5 py-4 rounded-xl text-sm font-semibold text-white"
                style={{
                  background: '#2563EB',
                  boxShadow: '0 12px 32px rgba(37,99,235,0.45)',
                  fontFamily: 'var(--font-display)',
                }}
              >
                ✓ Opgericht in 2025 · Alkmaar
              </div>
            </motion.div>
          </motion.div>

          {/* Right — tekst (40% breedte) */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold mb-5"
              style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.18)', color: '#2563EB', fontFamily: 'var(--font-display)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              Over Ariance
            </div>

            <h2
              className="text-3xl md:text-[2.2rem] font-extrabold tracking-tight leading-tight mb-5"
              style={{ fontFamily: 'var(--font-display)', color: '#0A0F1C' }}
            >
              Directe lijn met de oprichter.{' '}
              <span
                style={{ background: '#DBEAFE', padding: '0 6px 2px', borderRadius: '5px', color: '#1d4ed8' }}
              >
                Geen tussenpersonen.
              </span>
            </h2>

            <p className="text-base leading-[1.8] mb-4" style={{ color: '#6B7280' }}>
              Ariance is opgericht door <strong className="font-semibold text-[#0A0F1C]">Léon Ariëns</strong> — een AI-specialist met een passie voor het toegankelijk maken van AI voor het Nederlandse MKB.
            </p>
            <p className="text-base leading-[1.8] mb-8" style={{ color: '#6B7280' }}>
              Gevestigd in Alkmaar, werkzaam door heel Nederland. Elke oplossing wordt op maat gemaakt voor uw branche, processen en budget.
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-2.5 text-sm font-medium text-[#0A0F1C]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                >
                  <CheckCircle2 size={15} className="shrink-0 text-[#2563EB]" strokeWidth={2} />
                  {item}
                </motion.li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 font-semibold px-6 py-3.5 rounded-xl text-sm text-white
                         bg-[#0A0F1C] transition-[transform,box-shadow] duration-300
                         hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(10,15,28,0.25)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Maak een afspraak <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
