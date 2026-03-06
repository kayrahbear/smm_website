const teaserItems = [
  'Meet the family',
  'Peek inside the book',
  'Follow the clues',
  'Join the launch list',
];

export default function HomePage() {
  return (
    <main className="site-shell texture-dots min-h-screen text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between gap-4 py-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-100/80">Ashley Brewer Books</p>
            <h1 className="mt-2 text-2xl font-bold sm:text-3xl">Savannah Manor Mysteries</h1>
          </div>
          <a
            href="mailto:hello@ashleybrewerbooks.com"
            className="glow-button rounded-full border border-amber-100/30 bg-white/10 px-5 py-3 text-sm font-semibold text-amber-50 backdrop-blur"
          >
            Contact
          </a>
        </header>

        <section className="grid flex-1 items-center gap-10 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-12">
          <div className="flashlight-card rounded-[2rem] border border-amber-50/15 bg-slate-950/25 p-6 shadow-2xl backdrop-blur-md sm:p-8 lg:p-10">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex rounded-full border border-amber-100/20 bg-amber-50/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-amber-100/90">
                Coming Soon
              </p>
              <h2 className="max-w-3xl text-4xl font-black leading-tight text-amber-50 sm:text-5xl lg:text-6xl">
                Cozy mysteries, curious kids, and just the right amount of ghostly fun.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-amber-50/88 sm:text-xl">
                The official website for Ashley Brewer and <em>The Great Ghost Mix Up</em> is on the way.
                Step inside Savannah Manor to meet Georgia, Rowdy, Smokey, and Baby D.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#launch-list"
                  className="glow-button rounded-full bg-[var(--pumpkin)] px-6 py-3 text-base font-bold text-white"
                >
                  Join the launch list
                </a>
                <a
                  href="#about"
                  className="glow-button rounded-full border border-amber-100/35 bg-white/10 px-6 py-3 text-base font-bold text-amber-50"
                >
                  About the series
                </a>
              </div>

              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {teaserItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-amber-50/15 bg-white/10 px-4 py-3 text-sm font-semibold text-amber-50/90 backdrop-blur-sm"
                  >
                    ✦ {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="story-panel rounded-[2rem] p-6 text-[var(--foreground)] sm:p-8">
            <div className="rounded-[1.5rem] border border-[rgba(122,74,42,0.14)] bg-[var(--ghost-cream)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--pumpkin-deep)]">
                Featured book
              </p>
              <h3 className="mt-4 text-3xl font-black leading-tight text-[var(--pumpkin-deep)]">
                The Great Ghost Mix Up
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--foreground)]/90">
                On a dark and stormy October night, the power fails at Savannah Manor and a mysterious white blur races through the halls.
                Georgia and Rowdy grab their flashlights, follow the clues, and discover that the scariest surprises can also be the sweetest.
              </p>

              <div className="mt-6 rounded-3xl bg-[linear-gradient(180deg,rgba(32,50,70,1)_0%,rgba(52,77,105,1)_52%,rgba(227,122,47,0.9)_100%)] p-5 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-100/80">Site preview</p>
                <div className="mt-4 rounded-[1.5rem] border border-white/15 bg-black/10 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xl font-black text-[var(--moon)]">The flashlight mystery begins…</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Hero concept</span>
                  </div>
                  <div className="mt-5 h-48 rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_22%_36%,rgba(255,245,196,0.55),rgba(255,245,196,0.12)_16%,transparent_38%),linear-gradient(180deg,#162435_0%,#1f3043_44%,#394a4f_100%)] p-4">
                    <div className="h-full rounded-[1rem] border border-dashed border-white/20 p-4 text-sm text-amber-50/80">
                      Future hero art area inspired by the hallway flashlight scene
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="grid gap-6 py-8 lg:grid-cols-3">
          <article className="rounded-[1.75rem] border border-amber-50/15 bg-white/10 p-6 backdrop-blur-md">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-amber-100/80">For families</p>
            <h3 className="mt-3 text-2xl font-bold text-amber-50">A warm, spooky read-aloud</h3>
            <p className="mt-3 leading-7 text-amber-50/85">
              Gentle mystery, playful ghosts, and a cozy farmhouse atmosphere make this a perfect seasonal story.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-amber-50/15 bg-white/10 p-6 backdrop-blur-md">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-amber-100/80">For kids</p>
            <h3 className="mt-3 text-2xl font-bold text-amber-50">Meet the family</h3>
            <p className="mt-3 leading-7 text-amber-50/85">
              A future interactive page can let visitors click each family member and discover bios, fun facts, and character art.
            </p>
          </article>
          <article id="launch-list" className="rounded-[1.75rem] border border-amber-50/15 bg-white/10 p-6 backdrop-blur-md">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-amber-100/80">Launch list</p>
            <h3 className="mt-3 text-2xl font-bold text-amber-50">Start collecting emails</h3>
            <p className="mt-3 leading-7 text-amber-50/85">
              Replace this placeholder button with a Kit, MailerLite, or Buttondown signup form when you are ready.
            </p>
            <a
              href="mailto:hello@ashleybrewerbooks.com?subject=Savannah%20Manor%20launch%20list"
              className="glow-button mt-5 inline-flex rounded-full bg-[var(--moss)] px-5 py-3 font-bold text-white"
            >
              Placeholder signup action
            </a>
          </article>
        </section>
      </div>
    </main>
  );
}
