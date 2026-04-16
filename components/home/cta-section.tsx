'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Phone, Zap } from 'lucide-react';

function MagneticBtn({ href, children, primary = false, tel = false }: {
  href: string; children: React.ReactNode; primary?: boolean; tel?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const move = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width  / 2) * 0.3,
      y: (e.clientY - rect.top  - rect.height / 2) * 0.3,
    });
  };

  const Tag = tel ? 'a' : Link;

  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 14 }}
      className="inline-flex"
    >
      <Tag
        href={href as any}
        className={`inline-flex items-center gap-2.5 font-semibold px-7 py-4 rounded-xl text-sm
          transition-[box-shadow] duration-300 ${
            primary
              ? 'bg-[#2563EB] text-white hover:bg-[#1d4ed8] hover:shadow-[0_20px_50px_rgba(37,99,235,0.6)]'
              : 'text-white border border-white/15 hover:border-white/30 hover:bg-white/[0.07]'
          }`}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {children}
      </Tag>
    </motion.div>
  );
}

export default function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ background: 'var(--clr-bg-dark)' }}
    >
      {/* Noise */}
      <div className="noise-overlay" />

      {/* Central glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <div
          className="w-[700px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.22) 0%, rgba(37,99,235,0.06) 55%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </div>

      {/* Top line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.6), transparent)' }}
      />

      {/* Floating orbs */}
      <div
        className="absolute left-10 top-1/3 w-36 h-36 rounded-full pointer-events-none animate-float"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)', filter: 'blur(20px)' }}
      />
      <div
        className="absolute right-10 bottom-1/3 w-24 h-24 rounded-full pointer-events-none animate-float-2"
        style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)', filter: 'blur(16px)' }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-7">
            <div
              className="flex items-center gap-2 text-[#60A5FA] text-xs font-semibold px-4 py-2 rounded-full"
              style={{
                background: 'rgba(37,99,235,0.1)',
                border: '1px solid rgba(37,99,235,0.25)',
                fontFamily: 'var(--font-display)',
              }}
            >
              <Zap size={11} fill="#60A5FA" />
              Begin vandaag
            </div>
          </div>

          <h2
            className="font-extrabold text-white leading-[1.04] tracking-tight mb-5 max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
              textShadow: '0 0 80px rgba(37,99,235,0.25)',
            }}
          >
            Klaar om te starten?
          </h2>

          <motion.p
            className="text-base md:text-lg leading-[1.75] mb-12 max-w-lg mx-auto"
            style={{ color: 'var(--clr-text-muted-d)' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Plan een vrijblijvend gesprek met Léon. Binnen 30 minuten weet u welke
            AI-oplossingen het meeste opleveren voor uw bedrijf.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            <MagneticBtn href="/contact" primary>
              Neem contact op
              <ArrowRight size={15} />
            </MagneticBtn>
            <MagneticBtn href="tel:+31614455066" tel>
              <Phone size={14} />
              +31 6 14455066
            </MagneticBtn>
          </motion.div>

          <motion.p
            className="mt-10 text-xs tracking-wide"
            style={{ color: 'rgba(107,122,153,0.7)' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Bereikbaar ma–vr · 9:00 – 17:00 · Alkmaar
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
