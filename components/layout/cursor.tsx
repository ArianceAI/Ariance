'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let x = 0, y = 0;
    let ringX = 0, ringY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest('a, button, [data-cursor-hover]');
      ringRef.current?.classList.toggle('hovering', !!hoverable);
    };

    const tick = () => {
      ringX += (x - ringX) * 0.1;
      ringY += (y - ringY) * 0.1;
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${x}px,${y}px)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${ringX}px,${ringY}px)`;
      rafId = requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  );
}
