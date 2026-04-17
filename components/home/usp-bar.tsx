'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 4,   suffix: ' weken', label: 'Van idee tot live',       mono: '~ avg. doorlooptijd' },
  { value: 100, suffix: '%',       label: 'Maatwerk per klant',      mono: 'geen templates' },
  { value: 0,   suffix: ' data-lek', label: 'Private AI beschikbaar', mono: 'AVG-compliant' },
  { value: 1,   suffix: ' aanspreekpunt', label: 'Léon, oprichter',   mono: 'geen tussenlagen' },
];

function Counter({ to, inView, suffix }: { to: number; inView: boolean; suffix: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (to === 0) { setN(0); return; }
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setN(Math.round(to * ease(p)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span className="font-display font-extrabold tracking-tight tabular-nums" style={{ color: 'var(--ink)' }}>
      {n}{suffix}
    </span>
  );
}

export default function UspBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-16 md:py-20"
      style={{ background: 'var(--bg-1)' }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(94,234,212,0.35), transparent)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,169,98,0.25), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* Vertical accent line */}
              <div
                className="absolute -left-5 top-0 bottom-0 w-px transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(180deg, transparent, rgba(94,234,212,0.4), transparent)',
                  opacity: 0.4,
                }}
              />

              <div className="mono-label mb-2" style={{ color: 'var(--accent)' }}>
                0{i + 1} / 04
              </div>
              <div className="text-[2rem] md:text-[2.4rem] leading-[1] mb-2">
                <Counter to={s.value} inView={inView} suffix={s.suffix} />
              </div>
              <div className="font-display text-sm font-semibold mb-1" style={{ color: 'var(--ink)' }}>
                {s.label}
              </div>
              <div className="font-mono text-[10px] tracking-wider" style={{ color: 'var(--muted-d)' }}>
                {s.mono}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
