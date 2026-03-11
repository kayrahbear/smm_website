'use client';

import { useRef } from 'react';

export default function FlashlightSection({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const section = sectionRef.current;
    const beam = beamRef.current;
    if (!section || !beam) return;

    const rect = section.getBoundingClientRect();
    beam.style.left = `${e.clientX - rect.left}px`;
    beam.style.top = `${e.clientY - rect.top}px`;
    beam.classList.remove('hm-fl-beam--drifting');
  };

  const handleMouseLeave = () => {
    beamRef.current?.classList.add('hm-fl-beam--drifting');
  };

  return (
    <section
      ref={sectionRef}
      className="hm-explore hm-explore--dark"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={beamRef} className="hm-fl-beam hm-fl-beam--drifting" aria-hidden="true" />
      {children}
    </section>
  );
}
