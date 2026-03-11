import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Great Ghost Mix Up | Savannah Manor Mysteries',
  description:
    'When the lights go out, the mystery begins. Book One of the Savannah Manor Mysteries series by Ashley Brewer.',
};

export default function GreatGhostMixUpPage() {
  return (
    <main className="bk-root">

      {/* ══ HERO ══ */}
      <section className="bk-hero">
        <div className="bk-hero-glow" aria-hidden="true" />

        <div className="bk-hero-inner">

          {/* Copy column */}
          <div className="bk-hero-copy">
            <p className="bk-eyebrow">Savannah Manor Mysteries</p>

            <h1 className="bk-title">The Great<br />Ghost Mix Up</h1>

            <div className="bk-hook">
              <p className="bk-hook-lead">
                When the lights go out,<br />
                <em>the mystery begins....</em>
              </p>

              <p className="bk-hook-body">
                On a dark and stormy October night at the old Tennessee farmhouse,
                the power suddenly fails&hellip; and a mysterious white blur races through the halls.
              </p>

              <p className="bk-hook-question">
                Did Mom and Dad really bring a ghost into Savannah Manor?
              </p>

              <p className="bk-hook-body">
                With flashlights in hand, Georgia and Rowdy team up with their clever cats,
                Smokey and Baby D, to follow the clues, face their fears, and solve the
                mystery once and for all.
              </p>

              <p className="bk-hook-closing">
                But sometimes, the scariest surprises turn out to be the sweetest of all.
              </p>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfVbmWECdJlMfwPmechVDDhxWrZMbe53wAExYgtFNMpuvs4bQ/viewform"
              className="bk-btn-primary"
            >
              Join the Preorder List
            </a>
          </div>

          {/* Book image column */}
          <div className="bk-hero-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/book_mocks/frontstackmock.webp"
              alt="The Great Ghost Mix Up — stacked book copies"
              className="bk-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ══ PEEK INSIDE ══ */}
      <section className="bk-peek">
        <div className="bk-peek-inner">
          <h2 className="bk-section-heading">A Peek Inside The Book</h2>
          <div className="bk-peek-grid">
            <div className="bk-peek-frame bk-peek-frame--spread">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/book_content/peek_inside.jpeg"
                alt="Interior spread from The Great Ghost Mix Up"
                className="bk-peek-img"
              />
            </div>
            <div className="bk-peek-frame bk-peek-frame--character">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/book_content/rowdy_and_georgia.webp"
                alt="Rowdy and Georgia — interior illustration"
                className="bk-peek-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ REVIEWS ══ */}
      <section className="bk-series">
        <div className="bk-series-inner">
          <h2 className="bk-section-heading bk-section-heading--light">What Readers Are Saying</h2>
          <div className="bk-reviews">

            <figure className="bk-review-card">
              <div className="bk-review-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote className="bk-review-quote">
                &ldquo;My daughter asked me to read it three nights in a row. The mystery kept her
                guessing until the very last page — and the twist made her burst out laughing.
                An instant favorite in our house.&rdquo;
              </blockquote>
              <figcaption className="bk-review-attr">— Parent of a 5-year-old</figcaption>
            </figure>

            <figure className="bk-review-card">
              <div className="bk-review-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote className="bk-review-quote">
                &ldquo;The illustrations are gorgeous and the story has just the right amount of
                spooky — cozy enough for bedtime, exciting enough that they won&apos;t want the
                lights off. Smokey and Baby D stole every scene.&rdquo;
              </blockquote>
              <figcaption className="bk-review-attr">— Parent of a 4-year-old</figcaption>
            </figure>

          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="bk-cta">
        <div className="bk-cta-inner">
          <h2 className="bk-cta-heading">Join the Launch List</h2>
          <p className="bk-cta-body">
            Be the first to know when <em>The Great Ghost Mix Up</em> is available.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfVbmWECdJlMfwPmechVDDhxWrZMbe53wAExYgtFNMpuvs4bQ/viewform"
            className="bk-btn-primary"
          >
            Sign Me Up
          </a>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="hm-footer">
        <p>© 2026 Ashley Brewer Books &nbsp;·&nbsp; All rights reserved</p>
      </footer>

    </main>
  );
}
