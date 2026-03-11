import type { Metadata } from 'next';
import FamilyScene from '@/components/FamilyScene';

export const metadata: Metadata = {
  title: 'Meet the Family | Savannah Manor Mysteries',
  description:
    'Get to know Georgia, Rowdy, Mom, Dad, Smokey, and Baby D — the detectives of Savannah Manor.',
};

export default function FamilyPage() {
  return (
    <main className="fm-root">

      {/* ══ HERO ══ */}
      <section className="fm-hero">
        <div className="fm-hero-glow" aria-hidden="true" />
        <div className="fm-hero-inner">
          <p className="fm-eyebrow">Savannah Manor Mysteries</p>
          <h1 className="fm-hero-title">Meet the Family</h1>
          <p className="fm-hero-sub">
            Every great mystery needs a great team. Get to know the detectives,
            the parents, and the clever cats who call Savannah Manor home.
          </p>
          <p className="fm-hero-hint">Click a character to learn more about them</p>
        </div>
      </section>

      {/* ══ INTERACTIVE SCENE ══ */}
      <section className="fm-scene-section">
        <FamilyScene />
      </section>

      {/* ══ FOOTER ══ */}
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
