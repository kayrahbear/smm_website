import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="np-root">

      {/* ══ NAMEPLATE ══ */}
      <div className="np-nameplate">
        <div className="np-nameplate-rule-top" />
        <p className="np-nameplate-tagline">First in the Savannah Manor Mysteries Series</p>
        <h1 className="np-nameplate-title">Ashley Brewer Books</h1>
        <div className="np-nameplate-rule-bottom">
          <span className="np-nameplate-meta">Est. 2026</span>
          <span className="np-nameplate-meta">Savannah, Georgia</span>
          <span className="np-nameplate-meta">Children&apos;s Mystery · Ages 6–10</span>
        </div>
      </div>

      {/* ══ MAIN STORY ══ */}
      <section className="np-story">
        <div className="np-story-hed">
          <div className="np-flash">New Release</div>
          <h2 className="np-headline">Ghost Spotted in Savannah Manor!</h2>
          <p className="np-deck">
            Family cats lead daring overnight investigation — first-time author Ashley Brewer
            delivers the must-read mystery of the season
          </p>
          <p className="np-byline">
            By <strong>Ashley Brewer</strong>
            <span className="np-byline-rule" />
            Savannah Manor Mysteries, Book One
          </p>
        </div>

        <div className="np-columns">
          {/* Col 1: Book cover */}
          <div className="np-col np-col--image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://placehold.co/280x380"
              alt="The Great Ghost Mix Up book cover"
              className="np-book-img"
            />
            <p className="np-img-caption">
              <em>The Great Ghost Mix Up</em> — available wherever books are sold
            </p>
          </div>

          {/* Col 2: Story text */}
          <div className="np-col np-col--body">
            <p className="np-drop-cap">
              <span>W</span>hen the Brewer family&apos;s beloved Savannah cats, Smokey and Baby D,
              begin acting strangely on an otherwise quiet evening at the manor, sisters Georgia
              and Rowdy refuse to dismiss the signs. Strange bumps echo through the halls. Lights
              flicker without cause. And in every corner, the cats sit transfixed by something no
              one else can see.
            </p>
            <p className="np-body">
              Mom and Dad suspect overactive imaginations. But Georgia and Rowdy — armed with
              flashlights, a notebook, and two very suspicious cats — are convinced that Savannah
              Manor has a ghost. Possibly more than one.
            </p>
            <p className="np-body">
              Full of laughter, late-night scheming, and the kind of teamwork only siblings can
              pull off, <em>The Great Ghost Mix Up</em> is a cozy mystery for young readers who
              love adventure, family, and cats with an attitude.
            </p>
            <div className="np-cta-row">
              <a
                href="mailto:hello@ashleybrewerbooks.com?subject=Savannah%20Manor%20launch%20list"
                className="np-btn-primary"
              >
                Join the Launch List
              </a>
              <Link href="/book" className="np-btn-text">
                Read more about the book →
              </Link>
            </div>
          </div>

          {/* Col 3: Sidebar */}
          <div className="np-col np-col--sidebar">
            <div className="np-pullquote">
              <p className="np-pullquote-text">
                &ldquo;A story full of laughter, mystery, and two cats who know more than they&apos;re letting on.&rdquo;
              </p>
            </div>
            <div className="np-sidebar-facts">
              <p className="np-sidebar-label">At a Glance</p>
              <ul className="np-sidebar-list">
                <li><strong>Author</strong><span>Ashley Brewer</span></li>
                <li><strong>Series</strong><span>Savannah Manor Mysteries</span></li>
                <li><strong>Ages</strong><span>6–10</span></li>
                <li><strong>Genre</strong><span>Children&apos;s Mystery</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECONDARY STORIES ══ */}
      <div className="np-rule" />
      <section className="np-secondary">
        <Link href="/family" className="np-card">
          <p className="np-card-kicker">Characters</p>
          <h3 className="np-card-hed">Meet the Brewers</h3>
          <p className="np-card-body">
            From the sharp-eyed Georgia to the laid-back Rowdy — and two Savannah cats with
            secrets of their own — get to know the family before the mystery begins.
          </p>
          <span className="np-card-link">Meet the family →</span>
        </Link>

        <div className="np-card-rule" />

        <Link href="/book" className="np-card">
          <p className="np-card-kicker">The Book</p>
          <h3 className="np-card-hed">First Look Inside</h3>
          <p className="np-card-body">
            Read an excerpt, explore the themes, and find out where to get your copy of
            The Great Ghost Mix Up.
          </p>
          <span className="np-card-link">Explore the book →</span>
        </Link>

        <div className="np-card-rule" />

        <Link href="/educators" className="np-card">
          <p className="np-card-kicker">Educators</p>
          <h3 className="np-card-hed">Classroom Corner</h3>
          <p className="np-card-body">
            Discussion questions, activity sheets, and read-aloud tips for teachers and
            librarians.
          </p>
          <span className="np-card-link">See resources →</span>
        </Link>
      </section>

      <footer className="np-footer">
        <p>© 2026 Ashley Brewer Books &nbsp;·&nbsp; All rights reserved</p>
      </footer>
    </main>
  );
}
