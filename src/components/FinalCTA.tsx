"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const MAILTO_HREF =
  "mailto:yosef@kollaborate.ca?subject=Kollaborate%20demo%20request";

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="mx-auto max-w-[1200px] px-6 md:px-8">
      <div
        ref={ref}
        className="flex flex-col items-center py-16 md:py-24"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 400ms ease, transform 400ms ease",
        }}
      >
        <p className="text-center font-display text-[24px] font-normal italic leading-[1.3] text-k-text md:text-[28px]">
          Ready to stop missing calls?
        </p>
        <a
          href={MAILTO_HREF}
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-k-accent px-8 py-3.5 text-[15px] font-medium text-white transition-all hover:bg-k-accent-hover"
          style={{ transition: "all 150ms ease" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform =
              "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          Book a 15-minute call &#8594;
        </a>
        <p className="mt-4 text-[14px] text-k-muted">
          Response within 24 hours. Usually same day.
        </p>
      </div>
    </section>
  );
}
