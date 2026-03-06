'use client';

import Image from 'next/image';
import { CharacterData } from './familyData';

type Props = {
  character: CharacterData;
  isSelected: boolean;
  onClick: () => void;
  /** Pass true when the component renders inside the smaller mobile scene */
  isMobile?: boolean;
};

export function FamilyCharacterButton({
  character,
  isSelected,
  onClick,
  isMobile = false,
}: Props) {
  const pos = isMobile && character.mobilePosition
    ? { ...character.position, ...character.mobilePosition }
    : character.position;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Learn more about ${character.name}`}
      aria-pressed={isSelected}
      className="character-btn absolute bottom-0 focus:outline-none group"
      style={{
        bottom: pos.bottom,
        left: pos.left,
        width: pos.width,
        zIndex: pos.zIndex,
      }}
    >
      {/*
        Image wrapper — scale on hover/focus/selected.
        The drop-shadow brightens on selection.
      */}
      <div
        className={[
          'relative transition-transform duration-150 ease-out',
          isSelected ? 'scale-110 -translate-y-2' : '',
          !isSelected ? 'group-hover:scale-105 group-hover:-translate-y-1' : '',
          'group-focus-visible:scale-105 group-focus-visible:-translate-y-1',
        ].join(' ')}
      >
        {/* Visible focus ring — wraps the image naturally */}
        <span
          aria-hidden="true"
          className={[
            'absolute inset-0 rounded-sm ring-2 ring-offset-2 ring-[var(--pumpkin)] transition-opacity duration-100',
            isSelected
              ? 'opacity-100 ring-offset-[var(--pumpkin)]'
              : 'opacity-0 group-focus-visible:opacity-100',
          ].join(' ')}
        />

        <Image
          src={character.imageSrc}
          alt={character.imageAlt}
          width={300}
          height={480}
          className={[
            'w-full h-auto select-none transition-[filter] duration-150',
            isSelected
              ? 'drop-shadow-[0_0_12px_rgba(219,122,52,0.7)]'
              : 'drop-shadow-md group-hover:drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]',
          ].join(' ')}
          draggable={false}
        />

        {/* Name badge — visible on hover, focus, and selection */}
        <span
          aria-hidden="true"
          className={[
            'absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-bold text-white transition-opacity duration-150',
            isSelected
              ? 'opacity-100 bg-[var(--pumpkin)]'
              : 'opacity-0 bg-[var(--night)] group-hover:opacity-100 group-focus-visible:opacity-100',
          ].join(' ')}
        >
          {character.name}
        </span>
      </div>
    </button>
  );
}
