'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Shield, MapPin, TrendingUp } from 'lucide-react';

const usps = [
  { icon: Zap,        title: 'Snel & Praktisch',   description: 'Werkende oplossingen in dagen, niet maanden.', color: '#FBBF24', bg: 'rgba(251,191,36,0.1)' },
  { icon: Shield,     title: 'Private AI',          description: 'Uw data blijft binnen uw eigen omgeving.',     color: '#34D399', bg: 'rgba(52,211,153,0.1)'  },
  { icon: MapPin,     title: 'Nederlands Maatwerk', description: 'Gebouwd voor de Nederlandse markt en taal.',   color: '#60A5FA', bg: 'rgba(96,165,250,0.1)'  },
  { icon: TrendingUp, title: 'Directe ROI',         description: 'Aantoonbaar rendement, meetbaar resultaat.',   color: '#F472B6', bg: 'rgba(244,114,182,0.1)' },
];

export default function UspBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--clr-bg-dark-2)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
      className="py-14 md:py-16"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {usps.map((usp, i) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col gap-4 p-5 rounded-2xl transition-[transform,box-shadow] duration-300
                           hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                }}
                whileHover={{
                  boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px ${usp.color}22`,
                }}
              >
                {/* Animated icon wrapper */}
                <motion.div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: usp.bg }}
                  animate={isInView ? { scale: [0, 1.2, 1] } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                >
                  <Icon size={18} style={{ color: usp.color }} strokeWidth={1.8} />
                </motion.div>

                <div>
                  <h3
                    className="text-sm font-bold text-white mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {usp.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--clr-text-muted-d)' }}>
                    {usp.description}
                  </p>
                </div>

                {/* Hover glow line */}
                <div
                  className="absolute bottom-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${usp.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
