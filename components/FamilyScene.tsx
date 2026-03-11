'use client';

import { useState, useCallback } from 'react';

interface Character {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly img: string;
  readonly alt: string;
  readonly bio: string;
}

const CHARACTERS: readonly Character[] = [
  {
    id: 'smokey',
    name: 'Smokey',
    role: 'Head Detective',
    img: '/images/characters/Smokey.webp',
    alt: 'Smokey the Savannah cat — head detective of Savannah Manor',
    bio: 'Smokey is the clever Savannah cat who considers himself the real head detective of Savannah Manor. With his watchful eyes, climbing skills, and nose for trouble, Smokey is always the first to notice when something mysterious is going on.',
  },
  {
    id: 'mom',
    name: 'Mom',
    role: 'Heart of the Manor',
    img: '/images/characters/mom.webp',
    alt: 'Mom — keeps Savannah Manor running with warmth',
    bio: 'Mom keeps Savannah Manor running and always has a warm hug ready after a long day of adventures. She may not always believe the house is full of mysteries\u2026 but she knows the kids and cats will figure things out.',
  },
  {
    id: 'dad',
    name: 'Dad',
    role: 'Adventure Ready',
    img: '/images/characters/dad.webp',
    alt: 'Dad — always ready for an adventure at Savannah Manor',
    bio: "Dad is always ready for an adventure around the farmhouse and loves hearing about the detectives' latest mystery. Even when the clues get strange, he knows the Savannah Manor crew will solve it together.",
  },
  {
    id: 'georgia',
    name: 'Georgia',
    role: 'Lead Detective',
    img: '/images/characters/Georgia.webp',
    alt: 'Georgia — the brave leader of the Savannah Manor detectives',
    bio: 'Georgia is the brave and imaginative leader of the Savannah Manor detectives. She loves solving mysteries, asking big questions, and making sure no strange sound or spooky shadow goes unexplored.',
  },
  {
    id: 'rowdy',
    name: 'Rowdy',
    role: 'The Sharp Eye',
    img: '/images/characters/Rowdy.webp',
    alt: 'Rowdy — the thoughtful detective with sharp eyes',
    bio: 'Rowdy is the thoughtful detective of the team. He may be a little cautious, but with his sharp eyes and careful thinking, he helps the crew notice clues others might miss.',
  },
  {
    id: 'babyd',
    name: 'Baby D',
    role: 'Secretly On the Case',
    img: '/images/characters/BabyD.webp',
    alt: 'Baby D — the sassy Savannah cat who is secretly always on the case',
    bio: "Baby D is the sassy and independent Savannah cat who secretly loves snuggles. She may act like she's not interested in the investigation, but somehow she always ends up right where the most important clues are hiding.",
  },
] as const;

export default function FamilyScene() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleCharacterClick = useCallback((id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  const handleClose = useCallback(() => {
    setActiveId(null);
  }, []);

  const activeCharacter = activeId
    ? CHARACTERS.find((c) => c.id === activeId) ?? null
    : null;

  return (
    <div className="fm-scene-wrap">
      {/* ── Desktop Scene ── */}
      <div className="fm-scene">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/characters/bgforfamlayout.webp"
          alt=""
          className="fm-scene-bg"
          aria-hidden="true"
        />

        <div className="fm-scene-characters">
          {CHARACTERS.map((char, i) => (
            <button
              key={char.id}
              className={`fm-char fm-char--${char.id}${activeId === char.id ? ' fm-char--active' : ''}`}
              onClick={() => handleCharacterClick(char.id)}
              aria-label={`Learn about ${char.name}`}
              aria-expanded={activeId === char.id}
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={char.img}
                alt={char.alt}
                className="fm-char-img"
                draggable={false}
              />
              <span className="fm-char-label">{char.name}</span>
            </button>
          ))}
        </div>

        {/* Bio panel — desktop (positioned within scene) */}
        {activeCharacter && (
          <div
            className={`fm-bio fm-bio--${activeCharacter.id}`}
            role="dialog"
            aria-label={`About ${activeCharacter.name}`}
          >
            <button
              className="fm-bio-close"
              onClick={handleClose}
              aria-label="Close bio"
            >
              &times;
            </button>
            <p className="fm-bio-role">{activeCharacter.role}</p>
            <h3 className="fm-bio-name">{activeCharacter.name}</h3>
            <p className="fm-bio-text">{activeCharacter.bio}</p>
          </div>
        )}
      </div>

      {/* ── Mobile Grid ── */}
      <div className="fm-mobile">
        <div className="fm-mobile-grid">
          {CHARACTERS.map((char, i) => {
            const isOpen = activeId === char.id;
            return (
              <div
                key={char.id}
                className={`fm-mobile-card${isOpen ? ' fm-mobile-card--open' : ''}`}
                style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              >
                <button
                  className="fm-mobile-card-btn"
                  onClick={() => handleCharacterClick(char.id)}
                  aria-label={`Learn about ${char.name}`}
                  aria-expanded={isOpen}
                >
                  <div className="fm-mobile-portrait">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={char.img}
                      alt={char.alt}
                      className="fm-mobile-img"
                      draggable={false}
                    />
                  </div>
                  <span className="fm-mobile-name">{char.name}</span>
                  <span className="fm-mobile-role">{char.role}</span>
                  <span className={`fm-mobile-chevron${isOpen ? ' fm-mobile-chevron--open' : ''}`} aria-hidden="true">
                    &#9662;
                  </span>
                </button>

                {isOpen && (
                  <div className="fm-mobile-bio">
                    <p className="fm-mobile-bio-text">{char.bio}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
