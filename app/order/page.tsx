import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Your Copy | The Great Ghost Mix Up | Savannah Manor Mysteries',
  description:
    'Order The Great Ghost Mix Up — Book One of the Savannah Manor Mysteries by Ashley Brewer. $19.99 with free shipping.',
};

export default function OrderPage() {
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
              <span className="or-price">$19.99</span>
              <span className="or-price-note">shipping included</span>
            </div>

            <p className="or-blurb">
              When the lights go out, <em>the mystery begins....</em> On a dark and stormy
              October night at the old Tennessee farmhouse, the power suddenly
              fails&hellip; and a mysterious white blur races through the halls.
            </p>

            <div className="or-payment-options">
              <a
                href="https://checkout.square.site/merchant/MLVE8TP7KVSYG/checkout/EVPPLLMM2VWUHRWKG7OGVK5U"
                className="or-pay-btn or-pay-btn--square"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="or-pay-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
                  <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                Pay with Square
                <span className="sr-only"> (opens in new tab)</span>
              </a>
              <a
                href="https://www.paypal.com/invoice/p/#INV2-YKET-K4AH-4J28-XK6B"
                className="or-pay-btn or-pay-btn--paypal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="or-pay-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7.5 21L8.5 15H5.5C4.5 15 4 14.2 4.3 13.3L7.3 4.3C7.5 3.5 8.3 3 9.2 3H14.5C16.5 3 18 4.5 17.5 6.5L17 8.5C16.5 10.5 14.5 12 12.5 12H10.5L9 18C8.8 19 8 19.5 7.5 21Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 12H14C16 12 17.5 10.5 18 8.5L18.5 6.5C19 4.5 20.5 3 22.5 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                </svg>
                Pay with PayPal
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </div>

            <p className="or-secure-note">
              <svg className="or-lock-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 1a3.5 3.5 0 0 0-3.5 3.5V6H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-.5V4.5A3.5 3.5 0 0 0 8 1Zm2 5H6V4.5a2 2 0 1 1 4 0V6Z" />
              </svg>
              Secure checkout &middot; You&rsquo;ll complete payment on the provider&rsquo;s site
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
