'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { MapPin, User, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

const infoCards = [
  { icon: User,     title: 'Léon Ariëns',         text: 'Oprichter en enige aanspreekpunt. Directe communicatie zonder tussenschakels.', color: '#60A5FA' },
  { icon: Calendar, title: 'Opgericht in 2025',    text: 'Modern opgericht, met de nieuwste AI-technologieën en een frisse aanpak.',       color: '#34D399' },
  { icon: MapPin,   title: 'Gevestigd in Alkmaar', text: 'Werkzaam voor bedrijven door heel Nederland. On-site mogelijk, remote altijd.',  color: '#FBBF24' },
];

const highlights = [
  'Direct contact met de oprichter',
  'Maatwerk voor uw branche',
  'Transparante aanpak',
  'Resultaatgericht',
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      className="py-24 md:py-32"
      style={{ background: 'var(--clr-bg-light)' }}
      id="over"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — text */}
          <motion.div
            ref={ref}
            className="lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2563EB] mb-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Over Ariance
            </p>
            <h2
              className="text-3xl md:text-[2.6rem] font-extrabold tracking-tight leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--clr-text-dark)' }}
            >
              Directe lijn met de oprichter.{' '}
              <span className="text-[#2563EB]">Geen tussenpersonen.</span>
            </h2>

            <p className="text-base leading-[1.8] mb-4" style={{ color: 'var(--clr-text-muted-l)' }}>
              Ariance is opgericht door{' '}
              <strong className="font-semibold" style={{ color: 'var(--clr-text-dark)' }}>Léon Ariëns</strong>{' '}
              — een AI-specialist met een passie voor het toegankelijk maken van AI voor het Nederlandse MKB.
              U praat altijd direct met hem.
            </p>
            <p className="text-base leading-[1.8] mb-8" style={{ color: 'var(--clr-text-muted-l)' }}>
              Gevestigd in Alkmaar, werkzaam door heel Nederland. Elke oplossing wordt op maat gemaakt
              voor uw branche, processen en budget.
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-2 gap-3 mb-10">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: 'var(--clr-text-dark)' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
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
              Maak een afspraak
              <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Right — info cards */}
          <div className="flex flex-col gap-4">
            {infoCards.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex gap-4 p-6 rounded-2xl bg-white
                             transition-[transform,box-shadow] duration-300
                             hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
                  style={{
                    border: '1.5px solid var(--clr-border-light)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-[background,box-shadow] duration-300"
                    style={{ background: `${item.color}15` }}
                  >
                    <Icon size={17} style={{ color: item.color }} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3
                      className="text-sm font-bold mb-1.5 group-hover:text-[#2563EB] transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--clr-text-dark)' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm leading-[1.7]" style={{ color: 'var(--clr-text-muted-l)' }}>
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Visual card */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 10 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-2xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #060B14 0%, #0D1526 100%)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
              }}
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-bl-full"
                style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)' }}
              />
              <p
                className="text-lg font-bold text-white mb-1 relative"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Klaar voor AI?
              </p>
              <p className="text-sm relative" style={{ color: 'var(--clr-text-muted-d)' }}>
                Plan een gratis kennismaking en ontdek uw mogelijkheden.
              </p>
              <Link
                href="/contact"
                className="mt-4 relative inline-flex items-center gap-2 text-xs font-semibold text-[#60A5FA] hover:text-white transition-colors duration-200"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Neem contact op <ArrowRight size={12} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
