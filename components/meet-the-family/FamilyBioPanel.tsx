import Image from 'next/image';
import { CharacterData } from './familyData';

type Props = {
  character: CharacterData | null;
};

export function FamilyBioPanel({ character }: Props) {
  return (
    /*
      aria-live="polite" + aria-atomic="true":
      Screen readers announce the full panel content when a new character
      is selected, without interrupting ongoing speech.
    */
    <div
      aria-live="polite"
      aria-atomic="true"
      className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#1b2e41]/80 px-6 py-7 backdrop-blur-sm"
    >
      {!character ? (
        <EmptyState />
      ) : (
        <CharacterDetail character={character} />
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
      <span className="text-4xl" aria-hidden="true">🔍</span>
      <p className="text-sm font-semibold text-[#f5e8c0]/50">
        Click a family member to learn their story.
      </p>
    </div>
  );
}

function CharacterDetail({ character }: { character: CharacterData }) {
  return (
    <div className="flex flex-col gap-5">
      {/* Portrait + identity */}
      <div className="flex items-end gap-4">
        <div className="relative h-28 w-20 shrink-0">
          <Image
            src={character.imageSrc}
            alt={character.imageAlt}
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>
        <div>
          <p
            className="mb-0.5 text-xs font-bold uppercase tracking-widest"
            style={{ color: character.accent }}
          >
            {character.role}
          </p>
          <h2 className="text-3xl font-black text-[#f5e8c0]">{character.name}</h2>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white/10" />

      {/* Bio */}
      <p className="text-sm leading-relaxed text-[#f5e8c0]/75">{character.bio}</p>

      {/* Fun facts */}
      <div>
        <h3
          className="mb-2 text-xs font-bold uppercase tracking-widest"
          style={{ color: character.accent }}
        >
          Fun Facts
        </h3>
        <ul className="space-y-2">
          {character.funFacts.map((fact, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#f5e8c0]/65">
              <span
                className="mt-0.5 shrink-0 text-xs"
                style={{ color: character.accent }}
                aria-hidden="true"
              >
                ★
              </span>
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
