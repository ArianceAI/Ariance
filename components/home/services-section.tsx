'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Bot, Lightbulb, Globe, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Bot,
    num: '01',
    title: 'AI Automatisering',
    description: 'Automatiseer e-mailverwerking, rapportages, data-invoer en klantcommunicatie. Bespaar uren per week.',
    href: '/diensten#automatisering',
    accent: '#2563EB',
    bg: 'rgba(37,99,235,0.07)',
    label: 'Meest gevraagd',
  },
  {
    icon: Lightbulb,
    num: '02',
    title: 'AI Consultancy',
    description: 'Ariance analyseert uw processen en adviseert welke AI-toepassingen de meeste waarde opleveren.',
    href: '/diensten#consultancy',
    accent: '#0891B2',
    bg: 'rgba(8,145,178,0.07)',
    label: null,
  },
  {
    icon: Globe,
    num: '03',
    title: 'Websites & Digitalisering',
    description: 'Moderne websites en digitale tools die uw bedrijf online zetten en processen digitaliseren.',
    href: '/diensten#websites',
    accent: '#0D9488',
    bg: 'rgba(13,148,136,0.07)',
    label: null,
  },
];

function TiltCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const isInView = useInView(cardRef, { once: true, margin: '-40px' });
  const Icon = service.icon;

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    setTilt({ x: -y * 8, y: x * 8 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        ref={ref}
        href={service.href}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
        style={{
          display: 'block',
          background: '#fff',
          border: `1.5px solid ${hovered ? service.accent + '40' : '#E5E7EB'}`,
          borderRadius: '20px',
          padding: '28px',
          position: 'relative',
          overflow: 'hidden',
          transform: `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hovered ? 'translateY(-6px)' : ''}`,
          transition: hovered ? 'transform 0.1s ease, box-shadow 0.3s ease, border-color 0.3s ease' : 'transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          boxShadow: hovered ? `0 20px 50px ${service.accent}18, 0 4px 12px rgba(0,0,0,0.06)` : '0 2px 12px rgba(0,0,0,0.04)',
        }}
        className="group"
      >
        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, ${service.accent}, ${service.accent}80, transparent)` }}
        />

        {/* Optional label badge */}
        {service.label && (
          <div
            className="absolute top-5 right-5 text-[10px] font-bold px-2.5 py-1 rounded-full"
            style={{ background: `${service.accent}12`, color: service.accent, fontFamily: 'var(--font-display)' }}
          >
            {service.label}
          </div>
        )}

        {/* Number */}
        <div
          className="text-[10px] font-bold tracking-[0.2em] mb-5 transition-colors duration-200"
          style={{ color: hovered ? service.accent : '#D1D5DB', fontFamily: 'var(--font-display)' }}
        >
          {service.num}
        </div>

        {/* Icon */}
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-[background,box-shadow] duration-300"
          style={{ background: hovered ? service.accent : service.bg }}
          animate={isInView ? { scale: [0.5, 1.1, 1], opacity: [0, 1, 1] } : {}}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          <Icon size={20} style={{ color: hovered ? '#fff' : service.accent, transition: 'color 0.3s' }} strokeWidth={1.8} />
        </motion.div>

        <h3
          className="text-base font-bold mb-2.5 transition-colors duration-200"
          style={{ color: hovered ? service.accent : '#0A0F1C', fontFamily: 'var(--font-display)' }}
        >
          {service.title}
        </h3>
        <p className="text-sm leading-[1.75] mb-5" style={{ color: '#6B7280' }}>
          {service.description}
        </p>

        <div className="flex items-center gap-1.5">
          <span
            className="text-xs font-semibold transition-colors duration-200"
            style={{ color: hovered ? service.accent : '#9CA3AF', fontFamily: 'var(--font-display)' }}
          >
            Meer info
          </span>
          <ArrowUpRight
            size={13}
            style={{ color: hovered ? service.accent : '#9CA3AF', transition: 'color 0.2s, transform 0.3s',
              transform: hovered ? 'translate(2px, -2px)' : 'translate(0, 0)' }}
          />
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: '-40px' });

  return (
    <section className="py-24 md:py-32" style={{ background: 'var(--clr-bg-light)' }} id="diensten">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <motion.div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold mb-4"
              style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.18)', color: '#2563EB', fontFamily: 'var(--font-display)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              Onze diensten
            </div>
            <h2
              className="text-3xl md:text-[2.6rem] font-extrabold tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-display)', color: '#0A0F1C' }}
            >
              Wat wij voor u doen
            </h2>
          </div>
          <Link
            href="/diensten"
            className="text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8] transition-colors shrink-0 flex items-center gap-1.5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Alle diensten <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <TiltCard key={service.title} service={service} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
