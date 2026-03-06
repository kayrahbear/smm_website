'use client';

import { useState, useCallback } from 'react';
import { familyMembers } from './familyData';
import { FamilyCharacterButton } from './FamilyCharacterButton';
import { FamilyBioPanel } from './FamilyBioPanel';

export function FamilyScene() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedCharacter = familyMembers.find((c) => c.id === selectedId) ?? null;

  const handleSelect = useCallback(
    (id: string) => setSelectedId((prev) => (prev === id ? null : id)),
    [],
  );

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-10">
      {/* Page header */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--moon)]/60">
          Savannah Manor Mysteries
        </p>
        <h1 className="text-5xl font-black text-[#f5e8c0] sm:text-6xl">Meet the Family</h1>
        <p className="mx-auto mt-3 max-w-xs text-sm text-[#f5e8c0]/50">
          Click any character to learn their story.
        </p>
      </div>

      {/*
        Two-column layout on lg+:
          left  (3/5) — illustrated scene with clickable characters
          right (2/5) — bio panel

        On mobile, scene sits on top and bio panel stacks below.
      */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
        {/* ── Scene ─────────────────────────────────── */}
        <div className="w-full lg:w-3/5">
          <Scene selectedId={selectedId} onSelect={handleSelect} isMobile={false} />
        </div>

        {/* ── Bio panel ─────────────────────────────── */}
        <div className="w-full lg:w-2/5 lg:sticky lg:top-8">
          <FamilyBioPanel character={selectedCharacter} />
        </div>
      </div>
    </div>
  );
}

/* ─── Scene sub-component ───────────────────────────────────────────────── */

type SceneProps = {
  selectedId: string | null;
  onSelect: (id: string) => void;
  isMobile: boolean;
};

function Scene({ selectedId, onSelect, isMobile }: SceneProps) {
  return (
    /*
      The scene uses a 5:3 aspect ratio so it scales proportionally at any
      container width. Characters are absolutely positioned inside using
      percentage values defined in familyData.ts.

      The sky/grass background is decorative — swap in a real background
      image by replacing the style below with an <Image> component set to fill.
    */
    <div className="relative w-full overflow-visible rounded-2xl">
      {/* Sky + grass backdrop */}
      <div
        className="relative w-full overflow-hidden rounded-2xl"
        style={{
          aspectRatio: '5 / 3',
          background:
            'linear-gradient(to bottom, #b8d9f0 0%, #cce7f5 42%, #86b96a 42%, #6fa054 100%)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
        }}
      >
        {/* Subtle sun glow at top-right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255,240,180,0.55) 0%, transparent 70%)',
          }}
        />

        {/* Characters */}
        {familyMembers.map((char) => (
          <FamilyCharacterButton
            key={char.id}
            character={char}
            isSelected={selectedId === char.id}
            onClick={() => onSelect(char.id)}
            isMobile={isMobile}
          />
        ))}
      </div>

      {/* Keyboard hint */}
      <p className="mt-2 text-center text-[10px] text-[#f5e8c0]/30" aria-hidden="true">
        Tab to navigate · Enter or Space to select · click again to deselect
      </p>
    </div>
  );
}
