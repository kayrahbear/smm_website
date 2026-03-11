import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Ashley | Ashley Brewer Books',
  description:
    'Ashley Brewer is a Middle Tennessee native, a 911 dispatcher, and the author of the Savannah Manor Mysteries series.',
};

export default function AboutPage() {
  return (
    <main className="ab-root">

      {/* ══ HERO ══ */}
      <section className="ab-hero">
        <div className="ab-hero-atmosphere" aria-hidden="true" />

        <div className="ab-hero-inner">
          <p className="ab-eyebrow">About the Author</p>

          <div className="ab-portrait-wrap">
            <div className="ab-portrait-ring" aria-hidden="true" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ashley.webp"
              alt="Ashley Brewer, author of Savannah Manor Mysteries"
              className="ab-portrait"
            />
          </div>

          <h1 className="ab-name">Ashley<br />Brewer</h1>
        </div>
      </section>

      {/* ══ BIO ══ */}
      <section className="ab-bio">
        <div className="ab-bio-inner">
          <p className="ab-bio-body">
            Ashley Brewer is a Middle Tennessee native, a 911 dispatcher, and the author of the
            cozy mystery series inspired by the real-life Savannah Manor and her kids. At the end
            of a long, twisty road sits the old farmhouse that sparked the adventures of Georgia,
            Rowdy, and their clever Savannah cats, Smokey and Baby D.
          </p>
          <p className="ab-bio-body">
            Through her stories, Ashley captures the magic of childhood imagination, turning
            everyday moments into playful mysteries and cozy adventures. When she isn&apos;t
            answering emergency calls, she enjoys spending time with her family and dreaming up
            new Savannah Manor mysteries.
          </p>
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
