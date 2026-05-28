"use client";

import { useRef, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          subject: form.get("subject"),
          message: form.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-5 py-12 sm:py-20">
      <h1 className="text-2xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-2">
        Contact
      </h1>
      <div className="w-10 h-1 bg-[var(--color-primary)] rounded-full mb-4" />
      <p className="text-sm sm:text-base text-[var(--color-muted)] mb-10 max-w-lg">
        Got a project or just want to chat? Don&apos;t hesitate to reach out.
      </p>

      <div className="grid sm:grid-cols-5 gap-8 sm:gap-12 mb-16">
        <div className="sm:col-span-2 space-y-4">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] animate-pulse shrink-0" />
            <div>
              <p className="text-sm font-semibold text-[var(--color-foreground)]">
                Available for freelance
              </p>
              <p className="text-xs text-[var(--color-muted)]">
                Open to new projects
              </p>
            </div>
          </div>

          {[
            {
              label: "Email",
              value: "m.aliadnanrauf@gmail.com",
              href: "mailto:m.aliadnanrauf@gmail.com",
            },
            {
              label: "GitHub",
              value: "@Mohammad-Ali-Rauf",
              href: "https://github.com/Mohammad-Ali-Rauf",
            },
            {
              label: "LinkedIn",
              value: "@ali-full-stack",
              href: "https://linkedin.com/in/mohammad-ali-40689121b",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 hover:border-[var(--color-primary)] hover:shadow-sm transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <span className="text-[var(--color-primary)] text-base font-bold">
                  {link.label[0]}
                </span>
              </div>
              <div>
                <p className="text-xs text-[var(--color-muted)]">
                  {link.label}
                </p>
                <p className="text-sm text-[var(--color-foreground)] font-medium group-hover:text-[var(--color-primary)] transition-colors">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="sm:col-span-3">
          {status === "sent" ? (
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 flex flex-col items-center justify-center text-center h-full">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-7 h-7 text-[var(--color-primary)]"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="text-lg font-bold text-[var(--color-foreground)]">
                Message sent!
              </p>
              <p className="text-sm text-[var(--color-muted)] mt-1">
                I&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 text-xs text-[var(--color-primary)] hover:underline"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-[var(--color-muted)] mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-sm text-[var(--color-foreground)] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all placeholder:text-[var(--color-muted)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-[var(--color-muted)] mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-sm text-[var(--color-foreground)] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all placeholder:text-[var(--color-muted)]"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium text-[var(--color-muted)] mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-sm text-[var(--color-foreground)] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all placeholder:text-[var(--color-muted)]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-[var(--color-muted)] mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-sm text-[var(--color-foreground)] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all resize-none placeholder:text-[var(--color-muted)]"
                />
              </div>
              {status === "error" && (
                <p className="text-sm text-[var(--color-accent)]">
                  Something went wrong. Please try again.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-2.5 rounded-lg bg-[var(--color-primary)] text-white text-sm font-semibold hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
