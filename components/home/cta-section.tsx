'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { useContactModal } from '@/components/ui/contact-modal-provider';

function MagneticBtn({
  onClick, href, children, variant = 'primary', tel = false,
}: { onClick?: () => void; href?: string; children: React.ReactNode; variant?: 'primary' | 'ghost'; tel?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const Tag: any = tel ? 'a' : (onClick ? 'button' : 'a');

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setPos({ x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.25 });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 160, damping: 14 }}
      className="inline-flex"
    >
      <Tag
        href={href}
        onClick={onClick}
        className="group inline-flex items-center gap-2.5 font-display font-semibold text-[14px] px-7 py-4 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
        style={
          variant === 'primary'
            ? {
                background: 'linear-gradient(135deg, #818cf8 0%, #6d62f0 100%)',
                color: '#0d0c18',
                boxShadow: '0 18px 50px rgba(129,140,248,0.40), inset 0 1px 0 rgba(255,255,255,0.2)',
              }
            : {
                background: 'transparent',
                color: 'var(--ink)',
                border: '1px solid rgba(13,12,24,0.18)',
              }
        }
      >
        {children}
      </Tag>
    </motion.div>
  );
}

export default function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { open } = useContactModal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 md:py-40"
      style={{ background: 'var(--bg-cream)' }}
    >
      <div className="noise" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Huge central glow orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[800px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 80%, rgba(129,140,248,0.14) 0%, rgba(192,132,252,0.06) 45%, transparent 72%)',
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* Floating orbs */}
      <div
        className="absolute left-12 top-1/3 w-40 h-40 rounded-full pointer-events-none animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(129,140,248,0.16) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      <div
        className="absolute right-12 bottom-1/4 w-28 h-28 rounded-full pointer-events-none animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(192,132,252,0.14) 0%, transparent 70%)',
          filter: 'blur(18px)',
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.5), transparent)' }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mono-label mb-8"
            style={{
              background: 'rgba(129,140,248,0.08)',
              border: '1px solid rgba(129,140,248,0.28)',
              color: 'var(--accent)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
            Stel je vragen
          </span>

          <h2
            className="font-display font-extrabold leading-[0.95] tracking-[-0.035em] mb-7 max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 4.6rem)',
              color: 'var(--ink)',
            }}
          >
            Let&apos;s{' '}
            <span className="text-gradient-emerald">talk!</span>
          </h2>

          <motion.p
            className="text-lg md:text-xl leading-[1.65] mb-12 max-w-xl mx-auto"
            style={{ color: 'var(--muted-d)' }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Klaar om nieuwe mogelijkheden te verkennen? Laten we jouw visie bespreken.
            Plan een gesprek en laten we kennismaken!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <MagneticBtn onClick={open}>
              Plan een gratis gesprek
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticBtn>
            <MagneticBtn href="tel:+31614455066" variant="ghost" tel>
              <Phone size={14} />
              +31 6 14455066
            </MagneticBtn>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-10"
            style={{ borderTop: '1px solid rgba(13,12,24,0.10)' }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <span className="mono-label flex items-center gap-2" style={{ color: 'var(--muted-d)' }}>
              <Mail size={12} style={{ color: 'var(--accent)' }} />
              arianceautomation@gmail.com
            </span>
            <span className="mono-label" style={{ color: 'var(--muted-d)' }}>
              ∙ ma–vr · 9:00–17:00
            </span>
            <span className="mono-label" style={{ color: 'var(--muted-d)' }}>
              ∙ alkmaar, nederland
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
