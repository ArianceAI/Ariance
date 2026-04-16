'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

function MagneticButton({ href, children, primary = false }: {
  href: string; children: React.ReactNode; primary?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current!.getBoundingClientRect();
        setPos({ x: (e.clientX - rect.left - rect.width / 2) * 0.3, y: (e.clientY - rect.top - rect.height / 2) * 0.3 });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 160, damping: 14 }}
      className="inline-flex"
    >
      <Link
        href={href}
        className={`inline-flex items-center gap-2.5 font-semibold px-7 py-3.5 rounded-xl text-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 ${
          primary
            ? 'bg-[#2563EB] text-white hover:bg-[#1d4ed8] hover:shadow-[0_12px_32px_rgba(37,99,235,0.35)]'
            : 'bg-white text-[#0A0F1C] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]'
        }`}
        style={{ fontFamily: 'var(--font-display)', border: primary ? 'none' : '1.5px solid #E5E7EB' }}
      >
        {children}
      </Link>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-28 md:pt-44 md:pb-36" style={{ background: '#FAFBFF' }}>

      {/* Subtiele achtergrond diepte */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 70%)' }} />

      {/* Diagonale lijntextuur */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(37,99,235,0.015) 40px, rgba(37,99,235,0.015) 41px)',
      }} />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          className="max-w-[760px]"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Pill badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
              style={{
                background: 'rgba(37,99,235,0.08)',
                border: '1px solid rgba(37,99,235,0.2)',
                color: '#2563EB',
                fontFamily: 'var(--font-display)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
              AI-automatisering voor het Nederlandse MKB
            </div>
          </motion.div>

          {/* Headline — groot, strak, bold */}
          <motion.h1
            variants={fadeUp}
            className="font-extrabold leading-[1.06] tracking-[-0.03em] mb-7"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 6.5vw, 5rem)',
              color: '#0A0F1C',
            }}
          >
            Minder{' '}
            <span style={{
              background: '#DBEAFE',
              padding: '2px 10px 4px',
              borderRadius: '8px',
              color: '#1d4ed8',
            }}>
              routinewerk.
            </span>
            <br />
            Meer tijd voor{' '}
            <span className="text-[#2563EB]">wat telt.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl leading-[1.75] mb-10 max-w-[580px]"
            style={{ color: '#6B7280', fontFamily: 'var(--font-body)' }}
          >
            Ariance bouwt op maat gemaakte AI-oplossingen voor Nederlandse bedrijven.
            Geen hype, geen vage beloftes — maar concrete automatisering die direct resultaat oplevert.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
            <MagneticButton href="/contact" primary>
              Plan een gratis gesprek
              <ArrowRight size={15} />
            </MagneticButton>
            <MagneticButton href="/diensten">
              Bekijk onze diensten
            </MagneticButton>
          </motion.div>

          {/* Social proof tekst */}
          <motion.p
            variants={fadeUp}
            className="mt-10 text-sm flex items-center gap-2"
            style={{ color: '#9CA3AF', fontFamily: 'var(--font-body)' }}
          >
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </span>
            Vertrouwd door Nederlandse MKB-bedrijven
          </motion.p>
        </motion.div>
      </div>

      {/* Ondergrens decoratie */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.15), transparent)' }} />
    </section>
  );
}
