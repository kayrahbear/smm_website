import Link from 'next/link';
import FlashlightSection from '@/components/FlashlightSection';

export default function HomePage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="hm-hero">
        <div className="hm-hero-overlay" />

        <div className="hm-hero-content">
          <h1 className="hm-title">
            Savannah Manor<br />Mysteries
          </h1>
          <p className="hm-tagline">
            At the old farmhouse at the end of the long, twisty road, mysteries are always popping up!
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfVbmWECdJlMfwPmechVDDhxWrZMbe53wAExYgtFNMpuvs4bQ/viewform"
            className="hm-btn-primary"
          >
            Preorder the Great Ghost Mixup
          </a>
        </div>
      </section>

      {/* ── ABOUT THE SERIES ── */}
      <section className="hm-about">
        <div className="hm-about-inner">
          <div className="hm-about-text">
            <h2 className="hm-about-heading">Welcome to Savannah Manor</h2>
            <p className="hm-about-body">
              In this cozy children&apos;s mystery series, young detectives Georgia and Rowdy
              follow clues, solve puzzles, and uncover surprising secrets around their home
              with the help of their clever Savannah cats, Smokey and Baby D.
            </p>
            <p className="hm-about-body">
              Perfect for children ages 3–6, The Savannah Manor Mysteries combines playful
              storytelling, colorful illustrations, and just the right amount of gentle suspense
              to spark curiosity and imagination. Each story encourages teamwork, bravery, and
              the excitement of discovering clues hiding in everyday places.
            </p>
            <p className="hm-about-closing">
              Because at Savannah Manor&hellip; every mystery is just waiting to be solved.
            </p>
            <a
              href="books/the-great-ghost-mystery"
              className="hm-btn-dark"
            >
              Learn more about our latest mystery - The Great Ghost Mixup
            </a>
          </div>

          <div className="hm-about-visual">
            <img
              src="images/book_content/worldscutestdetectives.jpg"
              alt="The Savannah Manor Detectives Are On The Case"
              className="hm-book-img"
            />
          </div>
        </div>
      </section>

      {/* ── EXPLORE ── */}
      <FlashlightSection>
        <div className="hm-explore-inner">
          <h2 className="hm-explore-heading">Explore the Manor</h2>
          <div className="hm-cards">
            <Link href="/family" className="hm-card">
              <h3 className="hm-card-title">Meet the Family</h3>
              <p className="hm-card-body">
                Get to know Georgia, Rowdy, Mom, Dad, Smokey, and Baby D — the detectives of Savannah Manor.
              </p>
              <span className="hm-card-link">Meet the family →</span>
            </Link>
            <Link href="/about" className="hm-card">
              <h3 className="hm-card-title">About Ashley</h3>
              <p className="hm-card-body">
                Find out more about the author
              </p>
              <span className="hm-card-link">About the author →</span>
            </Link>
            <Link href="/educators" className="hm-card">
              <h3 className="hm-card-title">For Educators</h3>
              <p className="hm-card-body">
                Activity sheets, discussion questions, and classroom read-aloud tips.
              </p>
              <span className="hm-card-link">See resources →</span>
            </Link>
          </div>
        </div>
      </FlashlightSection>

      {/* ── FOOTER ── */}
      <footer className="hm-footer">
        <p>© 2026 Ashley Brewer Books &nbsp;·&nbsp; All rights reserved</p>
      </footer>

    </main>
  );
}
