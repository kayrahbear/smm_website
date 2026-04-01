import type { Metadata } from 'next';
import { Suspense } from 'react';
import OrderForm from '@/components/OrderForm';

export const metadata: Metadata = {
  title: 'Order Your Copy | The Great Ghost Mix Up | Savannah Manor Mysteries',
  description:
    'Order The Great Ghost Mix Up — Book One of the Savannah Manor Mysteries by Ashley Brewer. $14.99 per book + $5 flat shipping.',
};

export default function OrderPage() {
  const clientId = process.env.PAYPAL_CLIENT_ID ?? '';

  return (
    <main className="or-root">

      {/* ══ HERO ══ */}
      <section className="or-hero">
        <div className="or-hero-glow" aria-hidden="true" />

        <div className="or-hero-inner">

          {/* Book visual */}
          <div className="or-hero-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/book_mocks/frontstackmock.webp"
              alt="The Great Ghost Mix Up — stacked book copies"
              className="or-hero-img"
            />
          </div>

          {/* Purchase column */}
          <div className="or-hero-copy">
            <p className="or-eyebrow">Savannah Manor Mysteries &middot; Book One</p>

            <h1 className="or-title">The Great<br />Ghost Mix Up</h1>

            <div className="or-price-badge">
              <span className="or-price">$14.99</span>
              <span className="or-price-note">per book &middot; $5 flat shipping</span>
            </div>

            <p className="or-blurb">
              When the lights go out, <em>the mystery begins....</em> On a dark and stormy
              October night at the old Tennessee farmhouse, the power suddenly
              fails&hellip; and a mysterious white blur races through the halls.
            </p>

            <Suspense>
              <OrderForm clientId={clientId} />
            </Suspense>

            <p className="or-secure-note">
              <svg className="or-lock-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 1a3.5 3.5 0 0 0-3.5 3.5V6H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-.5V4.5A3.5 3.5 0 0 0 8 1Zm2 5H6V4.5a2 2 0 1 1 4 0V6Z" />
              </svg>
              Secure checkout powered by PayPal
            </p>
          </div>
        </div>
      </section>

      {/* ══ WHAT'S INSIDE ══ */}
      <section className="or-details">
        <div className="or-details-inner">
          <h2 className="or-section-heading">What&rsquo;s Inside</h2>
          <div className="or-detail-cards">
            <div className="or-detail-card">
              <span className="or-detail-icon" aria-hidden="true">&#x1F4D6;</span>
              <h3 className="or-detail-title">A Cozy Mystery</h3>
              <p className="or-detail-text">
                Georgia and Rowdy team up with their clever cats to follow clues, face their fears,
                and solve the mystery once and for all.
              </p>
            </div>
            <div className="or-detail-card">
              <span className="or-detail-icon" aria-hidden="true">&#x1F3A8;</span>
              <h3 className="or-detail-title">Vivid Illustrations</h3>
              <p className="or-detail-text">
                Every page bursts with colorful, hand-crafted artwork that brings Savannah Manor
                to life.
              </p>
            </div>
            <div className="or-detail-card">
              <span className="or-detail-icon" aria-hidden="true">&#x1F31F;</span>
              <h3 className="or-detail-title">Ages 3&ndash;6</h3>
              <p className="or-detail-text">
                Just the right amount of gentle suspense to spark curiosity and imagination
                at bedtime or anytime.
              </p>
            </div>
          </div>
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
        <p>&copy; 2026 Ashley Brewer Books &nbsp;&middot;&nbsp; All rights reserved</p>
      </footer>

    </main>
  );
}
