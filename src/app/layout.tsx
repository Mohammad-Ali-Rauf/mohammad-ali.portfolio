import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammad Ali | Portfolio",
  description: "Full-stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          /* biome-ignore lint/security/noDangerouslySetInnerHtml: inline theme script prevents flash */
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') document.documentElement.classList.remove('dark');
                else document.documentElement.classList.add('dark');
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <nav className="sticky top-0 z-50 bg-[var(--color-background)] border-b border-[var(--color-border)]">
          <div className="max-w-4xl mx-auto px-5 py-4 flex items-center justify-between">
            <a
              href="/"
              className="text-lg font-bold text-[var(--color-primary)] tracking-tight"
            >
              MA
            </a>
            <div className="flex items-center gap-5">
              {["Home", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors hidden sm:block"
                >
                  {item}
                </a>
              ))}
              <MobileNav />
              <ThemeToggle />
            </div>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

function MobileNav() {
  return (
    <details className="relative sm:hidden">
      <summary className="list-none w-8 h-8 flex items-center justify-center rounded-lg border border-[var(--color-border)] cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4 text-[var(--color-foreground)]"
          aria-hidden="true"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </summary>
      <div className="absolute right-0 top-10 w-36 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg p-1.5 flex flex-col">
        {["Home", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="px-3 py-2 rounded-md text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-background)] transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </details>
  );
}
