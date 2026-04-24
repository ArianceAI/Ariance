'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useContactModal } from '@/components/ui/contact-modal-provider';

const stats = [
  { value: '+70%',  label: 'Tijdsbesparing' },
  { value: '100%',  label: 'AVG-compliant' },
  { value: '5 ★',  label: 'Gemiddeld' },
];

const testimonials = [
  {
    name: 'Fit Administratie',
    title: 'Eigenaar · Administratiekantoor, Noord-Holland',
    quote: 'De AI-workflows van Ariance verwerken onze documenten en klantcommunicatie zelfstandig. We winnen er wekelijks uren mee terug en maken minder fouten dan voorheen.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    rating: 5.0,
    accent: '#818cf8',
    accentRgb: '129,140,248',
  },
  {
    name: 'YouradviesgroepBV',
    title: 'Directeur · Financieel advies, Amsterdam',
    quote: 'Met de private AI-omgeving kunnen we veilig interne kennis raadplegen en adviesrapporten sneller opstellen - zonder dat gevoelige data de deur uitgaat. Volledig AVG-compliant.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    rating: 5.0,
    accent: '#c084fc',
    accentRgb: '192,132,252',
  },
  {
    name: 'Noord Logistics',
    title: 'Operations Manager · Transport & Logistiek',
    quote: 'Ariance heeft onze planningsprocessen volledig geautomatiseerd. Wat vroeger een halve dag kostte, doet de AI nu in minuten. De ROI was binnen twee maanden terugverdiend.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
    rating: 4.9,
    accent: '#818cf8',
    accentRgb: '129,140,248',
  },
];

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      <Card
        className="w-full overflow-hidden"
        style={{
          background: '#ffffff',
          border: `1px solid rgba(${t.accentRgb},0.20)`,
          boxShadow: `0 8px 40px rgba(${t.accentRgb},0.08), 0 2px 8px rgba(0,0,0,0.04)`,
          borderRadius: '1.25rem',
        }}
      >
        {/* Top accent line */}
        <div
          className="h-[2px] w-full"
          style={{ background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)` }}
        />
        <CardContent className="p-6 pt-5">
          {/* Author */}
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-14 h-14 rounded-xl bg-cover bg-center shrink-0"
              style={{
                backgroundImage: `url(${t.avatar})`,
                border: `1px solid rgba(${t.accentRgb},0.22)`,
              }}
              aria-label={t.name}
            />
            <div>
              <p className="font-display font-bold text-[15px]" style={{ color: 'var(--ink)' }}>
                {t.name}
              </p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--muted-d)' }}>
                {t.title}
              </p>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-2 mb-4">
            <span className="font-display font-bold text-sm" style={{ color: t.accent }}>
              {t.rating.toFixed(1)}
            </span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  style={{
                    color: t.accent,
                    fill: i < Math.floor(t.rating) ? t.accent : 'transparent',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Quote */}
          <p className="text-[15px] leading-[1.7]" style={{ color: 'var(--muted-d)' }}>
            &ldquo;{t.quote}&rdquo;
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Testimonials() {
  const { open } = useContactModal();

  return (
    <section
      className="relative py-20 md:py-28"
      style={{ background: 'var(--bg-cream)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.20), transparent)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: sticky content ── */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-24">
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mono-label w-fit"
              style={{
                background: 'rgba(129,140,248,0.08)',
                border: '1px solid rgba(129,140,248,0.22)',
                color: 'var(--accent-solid)',
              }}
            >
              <Star size={11} className="fill-[var(--accent-solid)]" />
              Testimonials
            </span>

            <h2
              className="font-display font-extrabold tracking-[-0.03em] leading-[1.0]"
              style={{ fontSize: 'clamp(2rem, 4.2vw, 3rem)', color: 'var(--ink)' }}
            >
              Wat onze klanten<br/>
              <span
                style={{
                  background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                zeggen.
              </span>
            </h2>

            <p className="text-base md:text-[17px] leading-[1.65]" style={{ color: 'var(--muted-d)', maxWidth: '380px' }}>
              Van administratiekantoren tot adviesbureaus - Nederlandse bedrijven vertrouwen
              op Ariance voor praktische AI-oplossingen.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-2">
              {stats.map((s) => (
                <Card
                  key={s.label}
                  className="text-center rounded-xl"
                  style={{
                    background: 'rgba(129,140,248,0.05)',
                    border: '1px solid rgba(129,140,248,0.16)',
                  }}
                >
                  <CardContent className="p-4">
                    <p
                      className="font-display font-extrabold text-2xl tracking-tight"
                      style={{ color: 'var(--accent-solid)' }}
                    >
                      {s.value}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--muted-d)' }}>
                      {s.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <button
                onClick={open}
                className="font-display font-semibold text-sm px-6 py-3 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)',
                  color: '#0d0c18',
                  boxShadow: '0 12px 30px rgba(129,140,248,0.28)',
                }}
              >
                Plan een gratis gesprek
              </button>
              <a
                href="/diensten"
                className="font-display font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-300"
                style={{
                  background: 'transparent',
                  color: 'var(--ink)',
                  border: '1px solid rgba(13,12,24,0.18)',
                }}
              >
                Onze diensten
              </a>
            </div>
          </div>

          {/* ── Right: testimonial cards ── */}
          <div className="flex flex-col gap-4">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} t={t} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
