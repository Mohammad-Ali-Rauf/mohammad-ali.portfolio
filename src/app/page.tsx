"use client";

import { useEffect, useRef, useState } from "react";

const EXCUSES = [
  "the dog ate my semicolons",
  "waiting on npm install (it’s been 84 years)",
  "the cache invalidated itself out of spite",
  "re-routing electricity through a potato",
  "teaching the database to trust again",
  "ransomware-ish: files held hostage by ts-errors",
  "the hamsters are unionising",
  "refactoring the refactor of the refactor",
  "two tabs open, both debugging",
];

const LOG_LINES = [
  "$ ./keep-alive.sh --low-power",
  "✓ still technically online",
  "⚠ no new commits since the heat death of the universe",
  "$ cron: exist",
  "✓ cron: existed",
  "$ waiting for inspiration...",
  "⚠ inspiration stuck in traffic",
  "$ scheduled maintenance: never",
  "✓ maintenance: rescheduled to never",
  "$ checking inbox...",
  "✓ 0 urgent, 14 gentle reminders to nap",
  "$ z z z ...",
];

export default function Home() {
  const [excuse, setExcuse] = useState(0);
  const [motivation, setMotivation] = useState(3);
  const [typed, setTyped] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const logRef = useRef<HTMLDivElement>(null);

  // Rotate the excuse chips.
  useEffect(() => {
    const t = setInterval(() => setExcuse((i) => (i + 1) % EXCUSES.length), 3200);
    return () => clearInterval(t);
  }, []);

  // Motivation creeps toward "almost" then resets — it never quite arrives.
  useEffect(() => {
    const t = setInterval(() => {
      setMotivation((m) => {
        if (m >= 97) return 4;
        const step = m > 85 ? 1 : m > 60 ? 2 : 4;
        return Math.min(97, m + step);
      });
    }, 700);
    return () => clearInterval(t);
  }, []);

  // Fake terminal: type out each line, then move on.
  useEffect(() => {
    const full = LOG_LINES[lineIdx % LOG_LINES.length];
    if (typed.length < full.length) {
      const t = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 55);
      return () => clearTimeout(t);
    }
    const next = setTimeout(() => {
      setTyped("");
      setLineIdx((i) => i + 1);
    }, 900);
    return () => clearTimeout(next);
  }, [typed, lineIdx]);

  // Keep the terminal scrolled to the latest line.
  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [typed, lineIdx]);

  const bricks = Array.from({ length: 28 });

  return (
    <div className="max-w-3xl mx-auto px-5 py-12 sm:py-20">
      {/* Page header — matches the Projects/Contact pattern */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-2 h-7 bg-[var(--color-primary)] rounded-full" />
        <h1 className="text-2xl sm:text-4xl font-bold text-[var(--color-foreground)]">
          Low Power Mode
        </h1>
      </div>
      <p className="text-sm sm:text-base text-[var(--color-muted)] mb-8 sm:mb-10 max-w-lg ml-0 sm:ml-5">
        Hey — this site is still here, just coasting. I&apos;m not actively
        tending the garden right now, so consider this the porch light left on
        while I&apos;m off doing other things.
      </p>

      {/* Two collapsibles — same truth, two tones. Pick whichever you can stomach. */}
      <div id="ok-but-actually" className="mb-8 sm:mb-10 ml-0 sm:ml-5 max-w-lg space-y-2">
        <details className="group rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/40 px-4 py-3 [&_summary]:cursor-pointer open:bg-[var(--color-surface)]/60">
          <summary className="flex items-center gap-2 text-xs font-medium text-[var(--color-foreground)] marker:content-none select-none">
            <span className="text-[var(--color-muted)] transition-transform group-open:rotate-90">▸</span>
            <span>Straight, no joke</span>
          </summary>
          <p className="mt-3 text-xs text-[var(--color-muted)] leading-relaxed">
            I&apos;m pivoting fields, so the projects below don&apos;t reflect the
            direction I&apos;m heading, and the ones that do aren&apos;t ready to
            show yet. The humor on this site exists mainly so it isn&apos;t an
            empty page while I&apos;m between chapters. In short: give me some
            time and the work will follow.
          </p>
        </details>

        <details className="group rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/40 px-4 py-3 [&_summary]:cursor-pointer open:bg-[var(--color-surface)]/60">
          <summary className="flex items-center gap-2 text-xs font-medium text-[var(--color-foreground)] marker:content-none select-none">
            <span className="text-[var(--color-accent)] transition-transform group-open:rotate-90">▸</span>
            <span>Same truth, worse tone</span>
          </summary>
          <p className="mt-3 text-xs text-[var(--color-muted)] leading-relaxed">
            look — the old projects are still up because deleting them felt like
            work, and the new projects aren&apos;t up because building them also
            feels like work. the bit you&apos;re looking at? that&apos;s here so
            the page isn&apos;t just a held breath. the dog did not eat my
            semicolons; i&apos;m pivoting fields and the good stuff is still in
            the oven. give me some time and i&apos;ll take the duct tape down.
          </p>
        </details>
      </div>

      {/* Construction zone card */}
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
        {/* Hazard-stripe banner — brand red instead of generic yellow */}
        <div className="hazard-stripes h-3" />

        <div className="p-6 sm:p-8">
          {/* Coffee + status block */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0 animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 text-[var(--color-primary)]"
                aria-hidden="true"
              >
                <path d="M10 2v2" />
                <path d="M14 2v2" />
                <path d="M16 8a4 4 0 0 0-8 0v4H8a2 2 0 0 0 0 4h8a2 2 0 0 0 0-4h-0V8z" />
                <path d="M16 8h2a3 3 0 0 1 0 6h-2" />
              </svg>
            </div>
            <div>
              <p className="text-base font-bold text-[var(--color-foreground)]">
                Pardon the dust
              </p>
              <p className="text-xs text-[var(--color-muted)] font-mono">
                status: idling · eta: eventually™
              </p>
            </div>
          </div>

          {/* Live build log terminal */}
          <div
            ref={logRef}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] p-4 font-mono text-xs sm:text-sm text-[var(--color-muted)] h-28 overflow-hidden"
          >
            <p className="text-[var(--color-primary)]">
              ~/portfolio$ ./keep-alive.sh --low-power
            </p>
            {LOG_LINES.slice(0, lineIdx % LOG_LINES.length).map((l, i) => (
              <p
                key={l + i}
                className={
                  l.startsWith("⚠")
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-muted)]"
                }
              >
                {l}
              </p>
            ))}
            <p className="text-[var(--color-foreground)]">
              {typed}
              <span className="uc-blink">▋</span>
            </p>
          </div>

          {/* Motivation meter — forever stuck near done */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-[var(--color-muted)] uppercase tracking-wider">
                Will to update this
              </span>
              <span className="text-xs font-mono text-[var(--color-primary)]">
                {motivation}%
              </span>
            </div>
            <div className="h-2.5 rounded-full bg-[var(--color-background)] border border-[var(--color-border)] overflow-hidden">
              <div
                className="h-full rounded-full bg-[var(--color-primary)] transition-all duration-700 ease-out"
                style={{ width: `${motivation}%` }}
              />
            </div>
            <p className="text-[10px] text-[var(--color-muted)] mt-1.5 font-mono">
              * does not actually reflect reality
            </p>
          </div>

          {/* Brick wall — laid once, left to weather */}
          <div className="mt-6">
            <span className="text-xs font-medium text-[var(--color-muted)] uppercase tracking-wider mb-2 block">
              Masonry (left as-is)
            </span>
            <div className="grid grid-cols-7 gap-1.5">
              {bricks.map((_, i) => (
                <div
                  key={i}
                  className="uc-brick h-5 rounded-[3px] bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/25"
                  style={{ animationDelay: `${i * 180}ms` }}
                />
              ))}
            </div>
          </div>

          {/* Rotating excuse */}
          <div className="mt-6 flex items-center gap-2 text-sm text-[var(--color-muted)]">
            <span className="text-[var(--color-accent)]">↳</span>
            <span className="italic">official reason: {EXCUSES[excuse]}</span>
          </div>
        </div>

        {/* Footer CTA — matches the home button styles */}
        <div className="border-t border-[var(--color-border)] px-6 sm:px-8 py-4 flex flex-wrap gap-3">
          <a
            href="/projects"
            className="px-5 py-2.5 rounded-lg bg-[var(--color-primary)] text-white text-sm font-semibold hover:brightness-110 transition-all"
          >
            Peek at the old stuff
          </a>
          <a
            href="/contact"
            className="px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-foreground)] text-sm font-semibold hover:border-[var(--color-primary)] transition-colors"
          >
            Slide into my inbox
          </a>
        </div>
      </div>

      {/* Tiny inline keyframes so the page stays self-contained */}
      <style
        /* biome-ignore lint/security/noDangerouslySetInnerHtml: scoped keyframes for this page */
        dangerouslySetInnerHTML={{
          __html: `
            .uc-blink { animation: uc-blink 1s steps(2, start) infinite; }
            @keyframes uc-blink { to { opacity: 0; } }
            .uc-brick {
              opacity: 0;
              transform: translateY(-6px) scale(0.85);
              animation: uc-lay 0.5s ease forwards;
            }
            @keyframes uc-lay {
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
            .hazard-stripes {
              background: repeating-linear-gradient(
                45deg,
                var(--color-primary) 0 14px,
                var(--color-background) 14px 28px
              );
            }
          `,
        }}
      />
    </div>
  );
}
