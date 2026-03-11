export type CharacterPosition = {
  /** Distance from the bottom of the scene container (percentage string, e.g. "0%") */
  bottom: string;
  /** Distance from the left of the scene container (percentage string) */
  left: string;
  /** Width of the character button as a percentage of the scene width */
  width: string;
  /** Stacking order — taller characters behind shorter ones look natural */
  zIndex: number;
};

export type CharacterData = {
  id: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  role: string;
  bio: string;
  funFacts: string[];
  /** Accent color used for role label and fact bullets */
  accent: string;
  /** Desktop scene positioning */
  position: CharacterPosition;
  /** Optional override for smaller (mobile) scene — omit to reuse desktop values */
  mobilePosition?: Partial<CharacterPosition>;
};

/**
 * familyMembers — ordered left → right as they appear in the scene.
 *
 * POSITIONING GUIDE
 * ─────────────────
 * All values are percentages of the scene container's width/height.
 * The scene uses a fixed aspect ratio, so percentages stay proportional
 * across breakpoints.
 *
 * To fine-tune placement:
 *   • Increase `left`  → move character right
 *   • Increase `width` → make character bigger
 *   • Increase `bottom`→ lift character off the ground
 *   • Increase `zIndex`→ render character in front of others
 *
 * Use `mobilePosition` to override any values for the smaller scene.
 */
export const familyMembers: CharacterData[] = [
  {
    id: 'smokey',
    name: 'Smokey',
    imageSrc: '/images/characters/Smokey.webp',
    imageAlt: 'Smokey the Savannah cat',
    role: 'Head Detective (Self-Proclaimed)',
    bio: 'Smokey is the clever Savannah cat who considers himself the real head detective of Savannah Manor. With his watchful eyes, climbing skills, and nose for trouble, Smokey is always the first to notice when something mysterious is going on.',
    funFacts: [
      'Has personally scouted every ceiling, shelf, and rooftop on the property',
      'Can detect a hidden door by scent alone',
      'Believes the investigation would fall apart without him — he\'s probably right',
      'Always the first to arrive at the scene of any mystery',
    ],
    accent: '#db7a34',
    position: { bottom: '4%', left: '2%', width: '14%', zIndex: 2 },
    mobilePosition: { left: '1%', width: '16%' },
  },
  {
    id: 'dad',
    name: 'Dad',
    imageSrc: '/images/characters/Dad.webp',
    imageAlt: 'Dad',
    role: 'Ready for Adventure',
    bio: 'Dad is always ready for an adventure around the farmhouse and loves hearing about the detectives\u2019 latest mystery. Even when the clues get strange, he knows the Savannah Manor crew will solve it together.',
    funFacts: [
      'First to volunteer when the team needs backup',
      'Keeps a flashlight in every room \u2018just in case\u2019',
      'Secretly takes notes during the detectives\u2019 debriefs',
      'Has never once doubted the crew\u2019s ability to crack the case',
    ],
    accent: '#9a8dc6',
    position: { bottom: '0%', left: '16%', width: '22%', zIndex: 3 },
  },
  {
    id: 'mom',
    name: 'Mom',
    imageSrc: '/images/characters/Mom.webp',
    imageAlt: 'Mom',
    role: 'Keeper of the Manor',
    bio: 'Mom keeps Savannah Manor running and always has a warm hug ready after a long day of adventures. She may not always believe the house is full of mysteries\u2026 but she knows the kids and cats will figure things out.',
    funFacts: [
      'Snacks appear exactly when the team needs them most',
      'Keeps the manor running like clockwork, mysteries and all',
      'Her \u201cI\u2019m sure it\u2019s nothing\u201d has been wrong exactly zero times',
      'Always has a hug ready, even after a ghost encounter',
    ],
    accent: '#db7a34',
    position: { bottom: '0%', left: '35%', width: '18%', zIndex: 3 },
  },
  {
    id: 'georgia',
    name: 'Georgia',
    imageSrc: '/images/characters/Georgia.png',
    imageAlt: 'Georgia',
    role: 'Team Leader',
    bio: 'Georgia is the brave and imaginative leader of the Savannah Manor detectives. She loves solving mysteries, asking big questions, and making sure no strange sound or spooky shadow goes unexplored.',
    funFacts: [
      'Has a mystery notebook bursting with clues and sketches',
      'Asks \u201cwhy\u201d until she gets an answer that actually makes sense',
      'No dark hallway has ever made her turn back',
      'The cats trust her instincts more than anyone else\u2019s',
    ],
    accent: '#7c9b61',
    position: { bottom: '0%', left: '52%', width: '14%', zIndex: 4 },
  },
  {
    id: 'rowdy',
    name: 'Rowdy',
    imageSrc: '/images/characters/Rowdy.png',
    imageAlt: 'Rowdy',
    role: 'The Thoughtful Detective',
    bio: 'Rowdy is the thoughtful detective of the team. He may be a little cautious, but with his sharp eyes and careful thinking, he helps the crew notice clues others might miss.',
    funFacts: [
      'Spots details everyone else walks right past',
      'Never rushes \u2014 the best clues take patience',
      'Keeps a running list of unanswered questions',
      'Has the best memory on the team, by far',
    ],
    accent: '#d7d8b2',
    position: { bottom: '0%', left: '64%', width: '12%', zIndex: 4 },
  },
  {
    id: 'babyd',
    name: 'Baby D',
    imageSrc: '/images/characters/BabyD.png',
    imageAlt: 'Baby D the Savannah cat',
    role: 'Independent Operator',
    bio: 'Baby D is the sassy and independent Savannah cat who secretly loves snuggles. She may act like she\u2019s not interested in the investigation, but somehow she always ends up right where the most important clues are hiding.',
    funFacts: [
      'Officially not interested in any mystery \u2014 unofficially indispensable',
      'Has a sixth sense for where the key clue will be found',
      'Will accept exactly three pets before walking away dramatically',
      'Secretly the most reliable member of the whole operation',
    ],
    accent: '#9a8dc6',
    position: { bottom: '4%', left: '78%', width: '14%', zIndex: 2 },
    mobilePosition: { left: '76%', width: '16%' },
  },
];
