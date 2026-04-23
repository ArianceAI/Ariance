'use client';

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';

/* ── Context ── */
const ContactModalContext = createContext<{ open: () => void }>({ open: () => {} });
export const useContactModal = () => useContext(ContactModalContext);

/* ── Modal UI ── */
function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    naam: '',
    bedrijfsnaam: '',
    email: '',
    telefoonnummer: '',
    bericht: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ naam: '', bedrijfsnaam: '', email: '', telefoonnummer: '', bericht: '' });
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100]"
            style={{ background: 'rgba(13,12,24,0.55)', backdropFilter: 'blur(6px)' }}
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl pointer-events-auto"
              style={{
                background: '#ffffff',
                boxShadow: '0 40px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(129,140,248,0.14)',
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
                style={{ background: 'linear-gradient(90deg, transparent, #818cf8, #c084fc, transparent)' }}
              />

              <div className="p-7 md:p-9">
                {/* Header */}
                <div className="flex items-start justify-between mb-7">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: '#818cf8' }}
                      />
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'var(--accent-solid)',
                          fontWeight: 500,
                        }}
                      >
                        Gratis gesprek
                      </span>
                    </div>
                    <h2
                      className="font-display font-extrabold tracking-tight"
                      style={{ fontSize: '1.5rem', color: 'var(--ink)' }}
                    >
                      Plan een gesprek
                    </h2>
                    <p className="text-sm mt-1" style={{ color: 'var(--muted-d)' }}>
                      We nemen binnen één werkdag contact op.
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 shrink-0 mt-0.5"
                    style={{ background: 'rgba(13,12,24,0.06)' }}
                    aria-label="Sluiten"
                  >
                    <X size={16} style={{ color: 'var(--muted-d)' }} />
                  </button>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                      style={{ background: 'rgba(129,140,248,0.10)', border: '1px solid rgba(129,140,248,0.25)' }}
                    >
                      <CheckCircle2 size={28} style={{ color: '#818cf8' }} />
                    </div>
                    <h3
                      className="font-display font-bold text-xl mb-2"
                      style={{ color: 'var(--ink)' }}
                    >
                      Bericht verstuurd!
                    </h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted-d)' }}>
                      Bedankt voor uw bericht. We nemen binnen één werkdag contact met u op.
                    </p>
                    <button
                      onClick={handleClose}
                      className="font-display font-semibold text-sm px-6 py-3 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
                      style={{
                        background: 'linear-gradient(135deg, #818cf8 0%, #6d62f0 100%)',
                        color: '#0d0c18',
                        boxShadow: '0 12px 30px rgba(129,140,248,0.28)',
                      }}
                    >
                      Sluiten
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="modal-naam"
                          className="block text-xs font-semibold mb-1.5"
                          style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
                        >
                          Naam <span style={{ color: '#818cf8' }}>*</span>
                        </label>
                        <input
                          id="modal-naam"
                          name="naam"
                          type="text"
                          required
                          value={formData.naam}
                          onChange={handleChange}
                          placeholder="Jan de Vries"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl transition-[border-color,box-shadow] duration-200"
                          style={{
                            border: '1px solid rgba(13,12,24,0.14)',
                            background: '#ffffff',
                            color: 'var(--ink)',
                            outline: 'none',
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#818cf8';
                            e.target.style.boxShadow = '0 0 0 3px rgba(129,140,248,0.12)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(13,12,24,0.14)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="modal-bedrijfsnaam"
                          className="block text-xs font-semibold mb-1.5"
                          style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
                        >
                          Bedrijfsnaam
                        </label>
                        <input
                          id="modal-bedrijfsnaam"
                          name="bedrijfsnaam"
                          type="text"
                          value={formData.bedrijfsnaam}
                          onChange={handleChange}
                          placeholder="Uw bedrijf BV"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl transition-[border-color,box-shadow] duration-200"
                          style={{
                            border: '1px solid rgba(13,12,24,0.14)',
                            background: '#ffffff',
                            color: 'var(--ink)',
                            outline: 'none',
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#818cf8';
                            e.target.style.boxShadow = '0 0 0 3px rgba(129,140,248,0.12)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(13,12,24,0.14)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="modal-email"
                          className="block text-xs font-semibold mb-1.5"
                          style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
                        >
                          E-mailadres <span style={{ color: '#818cf8' }}>*</span>
                        </label>
                        <input
                          id="modal-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jan@bedrijf.nl"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl transition-[border-color,box-shadow] duration-200"
                          style={{
                            border: '1px solid rgba(13,12,24,0.14)',
                            background: '#ffffff',
                            color: 'var(--ink)',
                            outline: 'none',
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#818cf8';
                            e.target.style.boxShadow = '0 0 0 3px rgba(129,140,248,0.12)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(13,12,24,0.14)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="modal-telefoonnummer"
                          className="block text-xs font-semibold mb-1.5"
                          style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
                        >
                          Telefoonnummer
                        </label>
                        <input
                          id="modal-telefoonnummer"
                          name="telefoonnummer"
                          type="tel"
                          value={formData.telefoonnummer}
                          onChange={handleChange}
                          placeholder="+31 6 12345678"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl transition-[border-color,box-shadow] duration-200"
                          style={{
                            border: '1px solid rgba(13,12,24,0.14)',
                            background: '#ffffff',
                            color: 'var(--ink)',
                            outline: 'none',
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#818cf8';
                            e.target.style.boxShadow = '0 0 0 3px rgba(129,140,248,0.12)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(13,12,24,0.14)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="modal-bericht"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
                      >
                        Bericht <span style={{ color: '#818cf8' }}>*</span>
                      </label>
                      <textarea
                        id="modal-bericht"
                        name="bericht"
                        rows={4}
                        required
                        value={formData.bericht}
                        onChange={handleChange}
                        placeholder="Vertel kort over uw bedrijf en wat u wilt bereiken met AI..."
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl resize-none transition-[border-color,box-shadow] duration-200"
                        style={{
                          border: '1px solid rgba(13,12,24,0.14)',
                          background: '#ffffff',
                          color: 'var(--ink)',
                          outline: 'none',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#818cf8';
                          e.target.style.boxShadow = '0 0 0 3px rgba(129,140,248,0.12)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(13,12,24,0.14)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div className="flex items-center justify-between gap-4 pt-1">
                      <p className="text-xs" style={{ color: 'var(--muted-l)' }}>
                        Uw gegevens worden niet gedeeld met derden.
                      </p>
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center gap-2 font-display font-semibold text-sm px-6 py-3 rounded-full shrink-0 transition-[transform,box-shadow,opacity] duration-300 hover:-translate-y-0.5 disabled:opacity-70"
                        style={{
                          background: 'linear-gradient(135deg, #818cf8 0%, #6d62f0 100%)',
                          color: '#0d0c18',
                          boxShadow: '0 12px 30px rgba(129,140,248,0.28)',
                        }}
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 rounded-full animate-spin" style={{ borderColor: 'rgba(13,12,24,0.2)', borderTopColor: '#0d0c18' }} />
                            Versturen...
                          </>
                        ) : (
                          <>
                            <Send size={14} />
                            Verstuur
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ── Provider ── */
export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ContactModalContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ContactModalContext.Provider>
  );
}

/* ── Reusable client button for server components (e.g. diensten page) ── */
export function ContactButton({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { open } = useContactModal();
  return (
    <button onClick={open} className={className} style={style}>
      {children}
    </button>
  );
}
