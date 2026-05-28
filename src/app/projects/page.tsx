const projects = [
  {
    title: "ShopFlow",
    description:
      "Full-featured e-commerce platform with real-time inventory, Stripe payments, and an admin dashboard with analytics.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    year: "2025",
    type: "Full Stack",
    accent: "bg-[var(--color-primary)]",
    accentBorder: "border-l-[var(--color-primary)]",
    github: "https://github.com/mohammad-ali/shopflow",
    demo: "https://shopflow.demo.com",
    image: "/projects/Gemini_Generated_Image_obm1ddobm1ddobm1.png",
  },
  {
    title: "DevLog",
    description:
      "Developer blogging platform with MDX support, live preview, syntax highlighting, and a reading experience built for technical content.",
    tags: ["React", "MDX", "Tailwind", "Supabase"],
    year: "2025",
    type: "Full Stack",
    accent: "bg-[var(--color-accent)]",
    accentBorder: "border-l-[var(--color-accent)]",
    github: "https://github.com/mohammad-ali/devlog",
    demo: "https://devlog.demo.com",
    image: "",
  },
  {
    title: "WeatherNow",
    description:
      "Real-time weather dashboard with interactive maps, 7-day forecasts, historical charts, and severe weather push alerts.",
    tags: ["TypeScript", "Chart.js", "OpenWeather API", "PWA"],
    year: "2024",
    type: "Frontend",
    accent: "bg-[var(--color-primary)]",
    accentBorder: "border-l-[var(--color-primary)]",
    github: "https://github.com/mohammad-ali/weathernow",
    demo: "https://weathernow.demo.com",
    image: "",
  },
  {
    title: "TaskPilot",
    description:
      "Collaborative project management with Kanban boards, sprint planning, time tracking, and real-time team sync via WebSockets.",
    tags: ["Next.js", "WebSocket", "MongoDB", "Redis"],
    year: "2024",
    type: "Full Stack",
    accent: "bg-[var(--color-accent)]",
    accentBorder: "border-l-[var(--color-accent)]",
    github: "https://github.com/mohammad-ali/taskpilot",
    demo: "https://taskpilot.demo.com",
    image: "",
  },
  {
    title: "SnapGrid",
    description:
      "Image gallery with lazy loading, responsive masonry, drag-and-drop albums, and shareable public galleries.",
    tags: ["React", "Cloudinary", "Node.js", "Docker"],
    year: "2024",
    type: "Full Stack",
    accent: "bg-[var(--color-primary)]",
    accentBorder: "border-l-[var(--color-primary)]",
    github: "https://github.com/mohammad-ali/snapgrid",
    demo: "https://snapgrid.demo.com",
    image: "",
  },
  {
    title: "CodeSync",
    description:
      "Real-time collaborative code editor with multi-cursor editing, version history, syntax highlighting, and pair programming chat.",
    tags: ["Next.js", "WebSockets", "Y.js", "CodeMirror"],
    year: "2023",
    type: "Full Stack",
    accent: "bg-[var(--color-accent)]",
    accentBorder: "border-l-[var(--color-accent)]",
    github: "https://github.com/mohammad-ali/codesync",
    demo: "https://codesync.demo.com",
    image: "",
  },
  {
    title: "PixelPerfect",
    description:
      "Design-to-code comparison tool overlaying mockups on live sites, with pixel measurement, color picking, and responsive breakpoints.",
    tags: ["React", "Canvas API", "Electron", "TypeScript"],
    year: "2023",
    type: "Desktop",
    accent: "bg-[var(--color-primary)]",
    accentBorder: "border-l-[var(--color-primary)]",
    github: "https://github.com/mohammad-ali/pixelperfect",
    demo: "https://pixelperfect.demo.com",
    image: "",
  },
  {
    title: "APIForge",
    description:
      "Rapid API prototyping with visual route builder, auto-generated docs, mock data, and one-click cloud deployment.",
    tags: ["Node.js", "GraphQL", "Docker", "AWS"],
    year: "2023",
    type: "Backend",
    accent: "bg-[var(--color-accent)]",
    accentBorder: "border-l-[var(--color-accent)]",
    github: "https://github.com/mohammad-ali/apiforge",
    demo: "https://apiforge.demo.com",
    image: "",
  },
];

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12 sm:py-20">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-2 h-7 bg-[var(--color-primary)] rounded-full" />
        <h1 className="text-2xl sm:text-4xl font-bold text-[var(--color-foreground)]">
          Projects
        </h1>
      </div>
      <p className="text-sm sm:text-base text-[var(--color-muted)] mb-8 sm:mb-12 max-w-lg ml-0 sm:ml-5">
        A selection of things I&apos;ve built.
      </p>

      <div className="flex flex-col gap-6 sm:gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className={`group rounded-xl border border-[var(--color-border)] border-l-4 ${p.accentBorder} bg-[var(--color-surface)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden`}
          >
            {/* Optional image */}
            {p.image && (
              <div className="w-full h-48 sm:h-56 bg-[var(--color-background)] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Header area */}
            <div className="flex items-start justify-between px-6 sm:px-7 pt-5 sm:pt-6 pb-3">
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-xl ${p.accent} flex items-center justify-center text-white text-base font-bold shadow-xs`}
                >
                  {p.title[0]}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--color-foreground)] leading-tight">
                    {p.title}
                  </h3>
                  <span className="text-xs text-[var(--color-muted)]">
                    {p.year}
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2.5 py-1 rounded">
                {p.type}
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-[var(--color-border)] mx-6 sm:mx-7" />

            {/* Body */}
            <div className="px-6 sm:px-7 py-3 sm:py-4">
              <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                {p.description}
              </p>
            </div>

            {/* Tags */}
            <div className="px-6 sm:px-7 pb-3 sm:pb-4">
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-[var(--color-background)] text-[var(--color-muted)] text-xs sm:text-sm font-medium border border-[var(--color-border)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer links */}
            <div className="border-t border-[var(--color-border)] mx-6 sm:mx-7" />
            <div className="flex gap-5 px-6 sm:px-7 py-3 sm:pb-5">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>Source</span>
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span>Live Demo</span>
                <span className="sr-only">Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
