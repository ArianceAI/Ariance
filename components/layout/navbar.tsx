'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useContactModal } from '@/components/ui/contact-modal-provider';

const navLinks = [
  { href: '/', label: 'Home' },
];

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { open } = useContactModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background,border-color,box-shadow] duration-400 ${
        scrolled ? 'glass-nav-dark py-0' : 'bg-transparent py-1.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-[height] duration-400 ${scrolled ? 'h-[60px]' : 'h-[76px]'}`}>

          {/* Logo — Ariance mark */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="relative">
              <span className="block w-2.5 h-2.5 rounded-full bg-[var(--accent)] transition-transform duration-500 group-hover:scale-[1.6]" />
              <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-pulse-glow" />
            </span>
            <span className="font-display text-[1.15rem] font-extrabold tracking-tight text-[var(--ink)]">
              ariance<span className="text-[var(--accent)]">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 font-display text-sm font-medium transition-colors duration-200 group"
                  style={{ color: active ? 'var(--accent)' : 'var(--muted-d)' }}
                >
                  <span className="relative z-10 transition-colors duration-200 group-hover:text-[var(--ink)]">
                    {link.label}
                  </span>
                  <span
                    className={`absolute left-4 right-4 bottom-1 h-px transition-transform duration-300 origin-left ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                    style={{ background: 'var(--accent)' }}
                  />
                </Link>
              );
            })}
            <button
              onClick={open}
              className="ml-4 group inline-flex items-center gap-2 font-display text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'var(--amber)',
                color: 'var(--ink-dark)',
                boxShadow: '0 10px 30px rgba(192,132,252,0.32), inset 0 1px 0 rgba(255,255,255,0.25)',
              }}
            >
              Plan een gesprek
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: 'var(--ink)' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-400 ${
          isOpen ? 'max-h-[340px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          background: 'rgba(255,255,255,0.98)',
          borderTop: '1px solid rgba(129,140,248,0.12)',
          boxShadow: '0 8px 30px rgba(13,12,24,0.08)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-base font-medium py-3 flex items-center justify-between group"
                style={{ color: active ? 'var(--accent)' : 'var(--ink)' }}
              >
                {link.label}
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: 'var(--accent)' }} />
              </Link>
            );
          })}
          <button
            onClick={() => { open(); setIsOpen(false); }}
            className="mt-3 inline-flex items-center justify-center gap-2 font-display font-semibold text-sm px-5 py-3.5 rounded-full"
            style={{
              background: 'var(--amber)',
              color: 'var(--ink-dark)',
              boxShadow: '0 10px 30px rgba(192,132,252,0.32)',
            }}
          >
            Plan een gesprek <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </header>
  );
}
