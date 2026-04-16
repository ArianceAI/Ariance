'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Bot, Lightbulb, Lock, Globe, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Bot,
    num: '01',
    title: 'AI Automatisering',
    description: 'Automatiseer e-mailverwerking, rapportages, data-invoer en klantcommunicatie. Bespaar uren per week met slimme AI-workflows.',
    href: '/diensten#automatisering',
    accent: '#2563EB',
    accentBg: 'rgba(37,99,235,0.08)',
  },
  {
    icon: Lightbulb,
    num: '02',
    title: 'AI Consultancy',
    description: 'Ariance analyseert uw bedrijfsprocessen en adviseert welke AI-toepassingen de meeste waarde opleveren voor uw specifieke situatie.',
    href: '/diensten#consultancy',
    accent: '#FBBF24',
    accentBg: 'rgba(251,191,36,0.07)',
  },
  {
    icon: Lock,
    num: '03',
    title: 'Private AI',
    description: 'Een volledig privé AI-model op uw eigen servers. Vertrouwelijke bedrijfsdata blijft intern — geen data naar externe partijen.',
    href: '/diensten#private-ai',
    accent: '#34D399',
    accentBg: 'rgba(52,211,153,0.07)',
  },
  {
    icon: Globe,
    num: '04',
    title: 'Websites & Digitalisering',
    description: 'Moderne websites en digitale tools die uw bedrijf online zetten en processen digitaliseren.',
    href: '/diensten#websites',
    accent: '#F472B6',
    accentBg: 'rgba(244,114,182,0.07)',
  },
];

function TiltCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-40px' });
  const Icon = service.icon;

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    setTilt({ x: -y * 10, y: x * 10 });
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
          transform: `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hovered ? 'translateY(-6px)' : ''}`,
          transition: hovered ? 'transform 0.1s ease, box-shadow 0.3s ease' : 'transform 0.5s ease, box-shadow 0.3s ease',
          boxShadow: hovered
            ? `0 20px 50px rgba(0,0,0,0.1), 0 0 0 1.5px ${service.accent}30`
            : '0 4px 20px rgba(0,0,0,0.05)',
          display: 'block',
          background: '#fff',
          border: '1.5px solid var(--clr-border-light)',
          borderRadius: '20px',
          padding: '28px',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="group"
      >
        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-24 h-24 rounded-bl-[80px] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ background: service.accentBg }}
        />

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
          style={{ background: hovered ? service.accent : service.accentBg }}
          animate={isInView ? { scale: [0.5, 1.1, 1], opacity: [0, 1, 1] } : {}}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          <Icon
            size={20}
            style={{ color: hovered ? '#fff' : service.accent, transition: 'color 0.3s' }}
            strokeWidth={1.8}
          />
        </motion.div>

        {/* Text */}
        <h3
          className="text-base font-bold mb-2.5 transition-colors duration-200"
          style={{
            color: hovered ? service.accent : '#0A0F1C',
            fontFamily: 'var(--font-display)',
          }}
        >
          {service.title}
        </h3>
        <p className="text-sm leading-[1.75]" style={{ color: 'var(--clr-text-muted-l)' }}>
          {service.description}
        </p>

        {/* Arrow */}
        <div className="mt-5 flex items-center gap-1.5">
          <span
            className="text-xs font-semibold transition-colors duration-200"
            style={{ color: hovered ? service.accent : '#9CA3AF', fontFamily: 'var(--font-display)' }}
          >
            Meer info
          </span>
          <ArrowUpRight
            size={14}
            style={{ color: hovered ? service.accent : '#9CA3AF', transition: 'color 0.2s, transform 0.3s' }}
            className={hovered ? 'translate-x-0.5 -translate-y-0.5' : ''}
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
    <section
      className="py-24 md:py-32"
      style={{ background: 'var(--clr-bg-light)' }}
      id="diensten"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2563EB] mb-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Onze diensten
            </p>
            <h2
              className="text-3xl md:text-[2.6rem] font-extrabold tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--clr-text-dark)' }}
            >
              Wat wij voor u doen
            </h2>
          </div>
          <Link
            href="/diensten"
            className="text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8] transition-colors shrink-0 flex items-center gap-1.5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Alle diensten bekijken
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <TiltCard key={service.title} service={service} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
