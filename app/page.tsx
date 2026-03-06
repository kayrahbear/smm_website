'use client';

import { useEffect, useRef } from 'react';

export default function HomePage() {
  const lightRef = useRef<HTMLDivElement>(null);
  const drifting = useRef(true);

  useEffect(() => {
    const light = lightRef.current;
    if (!light) return;

    const engage = () => {
      if (!drifting.current) return;
      drifting.current = false;
      light.classList.remove('drifting');
    };

    const handleMouseMove = (e: MouseEvent) => {
      engage();
      light.style.left = `${e.clientX}px`;
      light.style.top = `${e.clientY}px`;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      engage();
      const touch = e.touches[0];
      light.style.left = `${touch.clientX}px`;
      light.style.top = `${touch.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <main className="coming-soon-bg relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="relative z-10 flex flex-col items-center px-6 py-12 text-center">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--moon)]/60">
          Savannah Manor Mysteries
        </p>

        <h1 className="mb-6 max-w-2xl text-5xl font-black leading-tight text-[#f5e8c0] sm:text-6xl lg:text-7xl">
          The Great Ghost Mix Up
        </h1>
        <p className="mb-8 max-w-sm text-lg leading-relaxed text-[#f5e8c0]/65">by Ashley Brewer</p>
        <span className="mb-8 inline-block rounded-full border border-[var(--pumpkin)]/40 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[var(--pumpkin)]">
          Coming Soon
        </span>
        {/* <p className="text-sm italic text-[var(--moon)]/40">
          The mystery begins soon.
        </p> */}

        {/* <a
          href="mailto:hello@ashleybrewerbooks.com?subject=Savannah%20Manor%20launch%20list"
          className="glow-button mb-8 rounded-full bg-[var(--pumpkin)] px-8 py-3 font-bold text-white"
        >
          Join the launch list
        </a> */}

      </div>

      <div ref={lightRef} className="flashlight drifting" />
    </main>
  );
}
