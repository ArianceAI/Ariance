'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/',         label: 'Home' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/contact',  label: 'Contact' },
];

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,border-color] duration-300 ${
        scrolled ? 'glass-nav-light shadow-[0_1px_20px_rgba(0,0,0,0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[70px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span
              className="text-[1.15rem] font-bold tracking-tight text-[#0A0F1C]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ariance
            </span>
            <span
              className="relative w-2 h-2 rounded-full bg-[#2563EB] transition-[transform,box-shadow] duration-300
                         group-hover:scale-[2] group-hover:shadow-[0_0_10px_rgba(37,99,235,0.8)]"
            >
              <span className="absolute inset-0 rounded-full bg-[#2563EB] animate-ping opacity-50" />
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#374151] hover:text-[#2563EB] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm font-semibold px-5 py-2.5 rounded-lg text-white
                         bg-[#2563EB] transition-[transform,box-shadow] duration-300
                         hover:-translate-y-0.5 hover:bg-[#1d4ed8]
                         hover:shadow-[0_8px_24px_rgba(37,99,235,0.45)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Neem contact op
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#374151] hover:text-[#0A0F1C] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(6,11,20,0.98)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors py-1"
              style={{ fontFamily: 'var(--font-display)' }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-semibold bg-[#2563EB] text-white px-4 py-3 rounded-lg
                       hover:bg-[#1d4ed8] transition-colors text-center mt-1"
            style={{ fontFamily: 'var(--font-display)' }}
            onClick={() => setIsOpen(false)}
          >
            Neem contact op
          </Link>
        </div>
      </div>
    </header>
  );
}
