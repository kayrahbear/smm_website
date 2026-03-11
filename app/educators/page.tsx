import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Educators | Ashley Brewer Books',
  description:
    'Free classroom resources for The Great Ghost Mix Up — printable activities, discussion questions, and read-aloud tips from the Savannah Manor Mysteries.',
};

const ACTIVITIES = [
  {
    id: 'finish-pattern',
    title: 'Finish the Pattern',
    description:
      'Students complete repeating patterns using shapes and characters from Savannah Manor — a fun logic exercise that builds early math reasoning.',
    icon: '🔍',
    accent: 'var(--pumpkin)',
    href: '/for_educators/Finish%20the%20Pattern.docx',
    fileName: 'Finish the Pattern.docx',
    fileType: 'Worksheet',
    preview: null,
  },
  {
    id: 'smokey-challenge',
    title: "Smokey's Challenge",
    description:
      "Help Smokey the detective cat sniff out the hidden clues! A clever matching and observation activity straight from the head detective of Savannah Manor.",
    icon: '🐾',
    accent: 'var(--purple)',
    href: '/for_educators/Smokeys%20Challenge.docx',
    fileName: 'Smokeys Challenge.docx',
    fileType: 'Worksheet',
    preview: null,
  },
  {
    id: 'match-shadows',
    title: 'Match the Shadows',
    description:
      'Can your students match each silhouette to the right Savannah Manor character? A great exercise in visual observation and story recall.',
    icon: '👻',
    accent: 'var(--moonlight)',
    href: '/for_educators/Match%20the%20Shadows%20to%20the%20Character.docx',
    fileName: 'Match the Shadows to the Character.docx',
    fileType: 'Worksheet',
    preview: null,
  },
  {
    id: 'spot-difference',
    title: 'Spot the Difference',
    description:
      'Two Savannah Manor scenes with hidden differences — only the sharpest young detectives will find them all. Perfect for building attention to detail.',
    icon: '✨',
    accent: 'var(--leaf-gold)',
    href: '/for_educators/Spot%20the%20Difference%20Worksheet.png',
    fileName: 'Spot the Difference Worksheet.png',
    fileType: 'Worksheet',
    preview: '/for_educators/Spot%20the%20Difference%20Worksheet.png',
  },
];

const DISCUSSION_QUESTIONS = [
  {
    q: 'Georgia is brave and jumps right into solving mysteries. Rowdy is more careful and thoughtful. How did their different styles help them work as a team?',
  },
  {
    q: "When the lights went out, both kids felt scared — but they kept going. What gave them the courage to face the unknown? What helps you feel brave when things are scary?",
  },
  {
    q: "Smokey and Baby D helped solve the mystery in very different ways. What were each of their special skills? Which cat's detective style is most like yours?",
  },
  {
    q: 'The twist ending surprised everyone. Looking back at the story, were there any clues you missed the first time? Go back and see what you can find!',
  },
  {
    q: 'The story is set in a real farmhouse in Tennessee. How does the setting — the stormy night, the old house, the long dark hallways — make the mystery feel more exciting?',
  },
  {
    q: 'If there were a second Savannah Manor Mystery, what do you think it should be about? Who would be the main suspect?',
  },
];

const READALOUD_TIPS = [
  {
    title: 'Give each character a voice',
    body: 'Georgia: confident and bold. Rowdy: careful and measured. Smokey: dignified and self-important. Baby D: aloof but secretly invested. Small voice differences go a long way!',
  },
  {
    title: 'Pause for the mystery',
    body: '"Did Mom and Dad really bring a ghost into Savannah Manor?" — let the silence hang. Give students a moment to wonder before turning the page.',
  },
  {
    title: 'Make it a prediction game',
    body: 'Stop at key moments and ask: What do you think the blur was? Who or what made that sound? Keeping students guessing deepens comprehension.',
  },
  {
    title: 'Hunt for clues together',
    body: "Before reading, tell students to listen for clues. Ask them to raise their hand when they spot one — then discuss after each page turn.",
  },
  {
    title: 'Celebrate the twist',
    body: 'The ending is a joyful surprise. Let students react! Shared delight at a good twist builds a love of storytelling and the power of a well-placed surprise.',
  },
];

export default function EducatorsPage() {
  return (
    <main className="ed-root">

      {/* ══ HERO ══ */}
      <section className="ed-hero">
        <div className="ed-hero-glow ed-hero-glow--warm" aria-hidden="true" />
        <div className="ed-hero-glow ed-hero-glow--cool" aria-hidden="true" />

        <div className="ed-hero-inner">
          <p className="ed-eyebrow">For Teachers &amp; Librarians</p>

          <h1 className="ed-hero-title">
            Bring the Mystery<br />
            to Your Classroom
          </h1>

          <p className="ed-hero-sub">
            Free printable activities, discussion guides, and read-aloud tips built around{' '}
            <em>The Great Ghost Mix Up</em> — perfect for grades K–3.
          </p>
        </div>

        <span className="ed-leaf ed-leaf--1" aria-hidden="true">🍂</span>
        <span className="ed-leaf ed-leaf--2" aria-hidden="true">🍁</span>
        <span className="ed-leaf ed-leaf--3" aria-hidden="true">🍂</span>
        <span className="ed-leaf ed-leaf--4" aria-hidden="true">🍁</span>
      </section>

      {/* ══ ACTIVITIES ══ */}
      <section className="ed-activities">
        <div className="ed-activities-inner">
          <div className="ed-section-header">
            <p className="ed-section-eyebrow">Printable Activities</p>
            <h2 className="ed-section-title">The Detective&rsquo;s Toolkit</h2>
            <p className="ed-section-sub">
              Download, print, and hand out. Each activity is designed to extend the story
              and build skills — no prep required.
            </p>
          </div>

          <div className="ed-cards-grid">
            {ACTIVITIES.map((act) => (
              <div
                key={act.id}
                className="ed-card"
                style={{ '--ed-accent': act.accent } as React.CSSProperties}
              >
                <div className="ed-card-accent-bar" />
                <div className="ed-card-icon">{act.icon}</div>
                <h3 className="ed-card-title">{act.title}</h3>
                <p className="ed-card-desc">{act.description}</p>

                {act.preview && (
                  <div className="ed-card-preview">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={act.preview}
                      alt={`Preview of ${act.title}`}
                      className="ed-card-preview-img"
                    />
                  </div>
                )}

                <a
                  href={act.href}
                  download={act.fileName}
                  className="ed-card-download"
                >
                  <span className="ed-download-icon">↓</span>
                  Download {act.fileType}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DISCUSSION QUESTIONS ══ */}
      <section className="ed-discussion">
        <div className="ed-discussion-inner">
          <div className="ed-section-header">
            <p className="ed-section-eyebrow ed-section-eyebrow--gold">Discussion Guide</p>
            <h2 className="ed-section-title ed-section-title--light">Start the Conversation</h2>
            <p className="ed-section-sub ed-section-sub--light">
              Open-ended questions to spark thinking about mystery, bravery, teamwork, and storytelling.
            </p>
          </div>

          <ol className="ed-questions-list">
            {DISCUSSION_QUESTIONS.map((item, i) => (
              <li key={i} className="ed-question-item">
                <span className="ed-question-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="ed-question-text">{item.q}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ══ READ-ALOUD TIPS ══ */}
      <section className="ed-tips">
        <div className="ed-tips-inner">
          <div className="ed-section-header">
            <p className="ed-section-eyebrow">Story Time</p>
            <h2 className="ed-section-title">Read-Aloud Tips</h2>
            <p className="ed-section-sub">
              A few tricks for bringing the mystery to life — whether you&rsquo;re reading
              to a class of thirty or curled up at home.
            </p>
          </div>

          <div className="ed-tips-list">
            {READALOUD_TIPS.map((tip, i) => (
              <div
                key={i}
                className="ed-tip-card"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="ed-tip-num" aria-hidden="true">{i + 1}</span>
                <div className="ed-tip-content">
                  <h3 className="ed-tip-title">{tip.title}</h3>
                  <p className="ed-tip-body">{tip.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="ed-cta">
        <div className="ed-cta-inner">
          <h2 className="ed-cta-heading">Interested in Hosting a Reading Event?</h2>
          <p className="ed-cta-body">
            Ashley is available for author readings and visits at libraries, coffee shops,
            bookstores, classrooms, and anywhere kids love to gather. If you&rsquo;re interested
            in hosting a group reading of <em>The Great Ghost Mix Up</em>, reach out — she&rsquo;d
            love to bring Savannah Manor to your community.
          </p>
          <a
            href="mailto:savannahmanormysteries@gmail.com?subject=Event%20Inquiry"
            className="bk-btn-primary"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="hm-footer">
        <div className="hm-footer-social">
          <a
            href="https://www.instagram.com/thesavannahmanor"
            className="hm-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/instagram.svg" alt="" className="hm-social-icon" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61582239860105"
            className="hm-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/facebook.svg" alt="" className="hm-social-icon" />
          </a>
        </div>
        <p>© 2026 Ashley Brewer Books &nbsp;·&nbsp; All rights reserved</p>
      </footer>

    </main>
  );
}
