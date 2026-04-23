'use client';

import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, Zap } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    naam: '',
    bedrijfsnaam: '',
    email: '',
    telefoonnummer: '',
    bericht: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div style={{ background: 'var(--bg-0)' }}>
      {/* ── Page header ── */}
      <div
        className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28"
        style={{ background: 'var(--bg-cream)' }}
      >
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(129,140,248,0.10) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.25), transparent)' }}
        />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              fontWeight: 500,
              background: 'rgba(129,140,248,0.08)',
              border: '1px solid rgba(129,140,248,0.22)',
              color: 'var(--accent-solid)',
            }}
          >
            <Zap size={11} />
            Neem contact op
          </span>
          <h1
            className="font-display font-extrabold tracking-[-0.03em] leading-[0.96] mb-5"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', color: 'var(--ink)' }}
          >
            Laten we{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              kennismaken
            </span>
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed max-w-xl"
            style={{ color: 'var(--muted-d)' }}
          >
            Heeft u een vraag of wilt u weten wat AI voor uw bedrijf kan doen? Stuur een bericht
            en we nemen binnen één werkdag contact met u op.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-[#818cf8/10] border border-[#BFDBFE] rounded-xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[#818cf8] flex items-center justify-center mx-auto mb-5">
                  <Send size={20} className="text-white" />
                </div>
                <h2 className="text-xl font-bold text-[#0F1117] mb-3">
                  Bericht verstuurd
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Bedankt voor uw bericht. Léon neemt binnen één werkdag contact met u op via e-mail
                  of telefoon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="naam"
                      className="block text-xs font-semibold text-[#0F1117] mb-1.5"
                    >
                      Naam <span className="text-[#818cf8]">*</span>
                    </label>
                    <input
                      id="naam"
                      name="naam"
                      type="text"
                      required
                      value={formData.naam}
                      onChange={handleChange}
                      placeholder="Jan de Vries"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-md bg-white text-[#0F1117] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#818cf8]/30 focus:border-[#818cf8] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bedrijfsnaam"
                      className="block text-xs font-semibold text-[#0F1117] mb-1.5"
                    >
                      Bedrijfsnaam
                    </label>
                    <input
                      id="bedrijfsnaam"
                      name="bedrijfsnaam"
                      type="text"
                      value={formData.bedrijfsnaam}
                      onChange={handleChange}
                      placeholder="Uw bedrijf BV"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-md bg-white text-[#0F1117] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#818cf8]/30 focus:border-[#818cf8] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-[#0F1117] mb-1.5"
                    >
                      E-mailadres <span className="text-[#818cf8]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jan@bedrijf.nl"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-md bg-white text-[#0F1117] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#818cf8]/30 focus:border-[#818cf8] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefoonnummer"
                      className="block text-xs font-semibold text-[#0F1117] mb-1.5"
                    >
                      Telefoonnummer
                    </label>
                    <input
                      id="telefoonnummer"
                      name="telefoonnummer"
                      type="tel"
                      value={formData.telefoonnummer}
                      onChange={handleChange}
                      placeholder="+31 6 12345678"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-md bg-white text-[#0F1117] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#818cf8]/30 focus:border-[#818cf8] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="bericht"
                    className="block text-xs font-semibold text-[#0F1117] mb-1.5"
                  >
                    Bericht <span className="text-[#818cf8]">*</span>
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    rows={6}
                    required
                    value={formData.bericht}
                    onChange={handleChange}
                    placeholder="Vertel kort over uw bedrijf en wat u wilt bereiken met AI..."
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-md bg-white text-[#0F1117] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#818cf8]/30 focus:border-[#818cf8] transition-colors resize-none"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 bg-[#818cf8] text-white font-semibold px-6 py-3.5 rounded-md hover:bg-[#6d62f0] transition-colors text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Versturen...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Verstuur bericht
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-400 mt-3">
                    Velden met <span className="text-[#818cf8]">*</span> zijn verplicht. Uw gegevens worden niet gedeeld met derden.
                  </p>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-3xl p-7" style={{ background: 'var(--bg-cream)', border: '1px solid rgba(129,140,248,0.14)' }}>
              <h2 className="text-base font-semibold text-[#0F1117] mb-6">
                Contactgegevens
              </h2>

              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#818cf8/10] flex items-center justify-center shrink-0">
                    <MapPin size={14} className="text-[#818cf8]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#0F1117] mb-0.5">Adres</div>
                    <div className="text-sm text-gray-500 leading-relaxed">
                      Jan van Goyenstraat 29<br />
                      1823 GC Alkmaar<br />
                      Nederland
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#818cf8/10] flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-[#818cf8]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#0F1117] mb-0.5">E-mail</div>
                    <a
                      href="mailto:arianceautomation@gmail.com"
                      className="text-sm text-gray-500 hover:text-[#818cf8] transition-colors"
                    >
                      arianceautomation@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#818cf8/10] flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-[#818cf8]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#0F1117] mb-0.5">Telefoon</div>
                    <a
                      href="tel:+31614455066"
                      className="text-sm text-gray-500 hover:text-[#818cf8] transition-colors"
                    >
                      +31 6 14455066
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#818cf8/10] flex items-center justify-center shrink-0">
                    <Clock size={14} className="text-[#818cf8]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#0F1117] mb-0.5">Openingstijden</div>
                    <div className="text-sm text-gray-500 leading-relaxed">
                      Maandag – Vrijdag<br />
                      9:00 – 17:00
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-7 pt-6" style={{ borderTop: '1px solid rgba(13,12,24,0.08)' }}>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted-l)' }}>
                  Geen callcenter, geen wachtrijen. Wij reageren altijd persoonlijk en snel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
