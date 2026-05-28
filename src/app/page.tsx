export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-5">
      <section className="py-20 sm:py-28">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[var(--color-foreground)]">
            Mohammad Ali
          </h1>
          <div className="w-10 h-1 bg-[var(--color-primary)] rounded-full my-4" />
          <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
            Student and a full-stack developer.
          </p>
          <div className="flex gap-3 mt-7">
            <a
              href="/projects"
              className="px-5 py-2.5 rounded-lg bg-[var(--color-primary)] text-white text-sm font-semibold hover:brightness-110 transition-all"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-foreground)] text-sm font-semibold hover:border-[var(--color-primary)] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <h2 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-3">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "SQLite",
          ].map((s) => (
            <span
              key={s}
              className="px-3 py-1.5 rounded-md bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/15 text-[var(--color-primary)] text-sm font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <h2 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-3">
          About
        </h2>
        <div className="rounded-lg border border-[var(--color-border)] p-5 sm:p-6">
          <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-3">
            As-salamu alaykum — I'm Ali, a full-stack developer and A-Level
            student based in Karachi. I build clean, responsive web applications
            for founders and small businesses who need short-term, fixed-scope
            delivery without the overhead of agencies or vague engagements.
            Whether it's a landing page, an MVP scaffold, a bug fix, or a small
            business tool, I focus on clear outcomes, maintainable code, and
            quick turnaround.
          </p>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
            I'm a student first, so I prioritize well-defined projects where I
            can deliver real value without distraction. If that sounds like what
            you need, let's talk.
          </p>
        </div>
      </section>
    </div>
  );
}
