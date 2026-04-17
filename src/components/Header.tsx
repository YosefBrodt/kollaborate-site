"use client";

import { useEffect, useState } from "react";

const MAILTO_HREF =
  "mailto:screensightcreations@gmail.com?subject=Kollaborate%20demo%20request";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 bg-k-bg"
      style={{
        borderBottom: scrolled
          ? "1px solid var(--color-k-border)"
          : "1px solid transparent",
        transition: "border-color 200ms ease",
      }}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-8">
        <a
          href="/"
          className="font-display text-[20px] font-medium tracking-tight text-k-text"
          style={{ fontOpticalSizing: "auto" }}
        >
          Kollaborate
        </a>
        <div className="flex items-center gap-6">
          <a
            href="#services"
            className="hidden text-[15px] font-medium text-k-muted transition-colors hover:text-k-text sm:inline"
          >
            What we do
          </a>
          <a
            href={MAILTO_HREF}
            className="inline-flex items-center rounded-full bg-k-accent px-4 py-2 text-[14px] font-medium text-white transition-all hover:bg-k-accent-hover"
            style={{ transform: "translateY(0)", transition: "all 150ms ease" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            Book a call
          </a>
        </div>
      </nav>
    </header>
  );
}
