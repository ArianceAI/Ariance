'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  Mail,
  FileText,
  BarChart2,
  MessageSquare,
  Clock,
  Database,
  Calendar,
  Zap,
} from 'lucide-react';

const automations = [
  {
    title: 'E-mailverwerking',
    subtitle: 'Automatisch sorteren & beantwoorden',
    icon: <Mail className="w-4 h-4" />,
    accent: '#818cf8',
  },
  {
    title: 'Rapportages genereren',
    subtitle: 'Wekelijkse cijfers zonder handwerk',
    icon: <BarChart2 className="w-4 h-4" />,
    accent: '#c084fc',
  },
  {
    title: 'Documentverwerking',
    subtitle: 'Facturen & contracten automatisch lezen',
    icon: <FileText className="w-4 h-4" />,
    accent: '#818cf8',
  },
  {
    title: 'Klantopvolging',
    subtitle: 'Automatische follow-ups op maat',
    icon: <MessageSquare className="w-4 h-4" />,
    accent: '#c084fc',
  },
  {
    title: 'Data-extractie',
    subtitle: 'Invoer zonder menselijke tussenkomst',
    icon: <Database className="w-4 h-4" />,
    accent: '#818cf8',
  },
  {
    title: 'Agendabeheer',
    subtitle: 'Afspraken inplannen op autopilot',
    icon: <Calendar className="w-4 h-4" />,
    accent: '#c084fc',
  },
  {
    title: 'Tijdregistratie',
    subtitle: 'Urenstaten automatisch verwerken',
    icon: <Clock className="w-4 h-4" />,
    accent: '#818cf8',
  },
];

const badges = ['Microsoft 365', 'Google Workspace', 'AVG-compliant', '70%+ tijdsbesparing'];

export default function FeatureSection() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: 'var(--bg-0)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute -top-20 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(129,140,248,0.07) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* ── Left: scrolling automation list ── */}
          <div className="relative w-full max-w-sm mx-auto md:mx-0">
            <Card
              className="overflow-hidden rounded-2xl"
              style={{
                background: 'var(--bg-cream)',
                border: '1px solid rgba(129,140,248,0.16)',
                boxShadow: '0 8px 40px rgba(129,140,248,0.08), 0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              <CardContent className="relative h-[360px] p-0 overflow-hidden">
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] z-10 rounded-t-2xl"
                  style={{ background: 'linear-gradient(90deg, transparent, #818cf8, #c084fc, transparent)' }}
                />

                {/* Scrolling list */}
                <motion.div
                  className="flex flex-col absolute w-full pt-2"
                  animate={{ y: ['0%', '-50%'] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 16,
                    ease: 'linear',
                  }}
                >
                  {[...automations, ...automations].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-5 py-3.5"
                      style={{ borderBottom: '1px solid rgba(129,140,248,0.10)' }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          background: `rgba(${item.accent === '#818cf8' ? '129,140,248' : '192,132,252'},0.10)`,
                          border: `1px solid rgba(${item.accent === '#818cf8' ? '129,140,248' : '192,132,252'},0.22)`,
                        }}
                      >
                        <span style={{ color: item.accent }}>{item.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-sm font-semibold font-display truncate"
                          style={{ color: 'var(--ink)' }}
                        >
                          {item.title}
                        </p>
                        <p
                          className="text-xs truncate"
                          style={{ color: 'var(--muted-d)' }}
                        >
                          {item.subtitle}
                        </p>
                      </div>
                      <Zap size={12} style={{ color: item.accent, opacity: 0.6, shrink: 0 }} />
                    </div>
                  ))}
                </motion.div>

                {/* Fade top/bottom */}
                <div
                  className="absolute top-0 left-0 w-full h-14 pointer-events-none z-10"
                  style={{ background: 'linear-gradient(to bottom, var(--bg-cream) 0%, transparent 100%)' }}
                />
                <div
                  className="absolute bottom-0 left-0 w-full h-14 pointer-events-none z-10"
                  style={{ background: 'linear-gradient(to top, var(--bg-cream) 0%, transparent 100%)' }}
                />
              </CardContent>
            </Card>

            {/* Decorative corner */}
            <div
              className="absolute -bottom-4 -right-4 w-16 h-16 rounded-2xl pointer-events-none"
              style={{ background: 'rgba(192,132,252,0.06)', border: '1px solid rgba(192,132,252,0.12)' }}
            />
          </div>

          {/* ── Right: content ── */}
          <div className="space-y-6">
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mono-label"
              style={{
                background: 'rgba(129,140,248,0.08)',
                border: '1px solid rgba(129,140,248,0.22)',
                color: 'var(--accent-solid)',
              }}
            >
              <Zap size={11} />
              AI Automatisering
            </span>

            <h2
              className="font-display font-extrabold tracking-[-0.03em] leading-[1.05]"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--ink)' }}
            >
              Repetitieve taken{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                op autopilot.
              </span>
            </h2>

            <p
              className="text-base md:text-[17px] leading-[1.7]"
              style={{ color: 'var(--muted-d)', maxWidth: '460px' }}
            >
              Ariance bouwt AI-workflows die uw dagelijkse taken zelfstandig uitvoeren —
              van e-mailverwerking tot rapportages. Uw team wint uren terug
              en focust op werk dat écht waarde toevoegt.
            </p>

            {/* Capability badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full font-display font-semibold text-[13px]"
                  style={{
                    background: 'rgba(129,140,248,0.07)',
                    border: '1px solid rgba(129,140,248,0.18)',
                    color: 'var(--accent-solid)',
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
