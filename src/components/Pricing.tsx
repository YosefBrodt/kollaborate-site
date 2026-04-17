"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const MAILTO_HREF =
  "mailto:screensightcreations@gmail.com?subject=Kollaborate%20demo%20request";

export function Pricing() {
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
        <div
          className="w-full max-w-[520px] rounded-xl border-2 border-k-accent p-10 md:p-12"
          style={{ backgroundColor: "#FCFBF8" }}
        >
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-k-muted">
            Full Ops Stack
          </p>
          <p className="mt-4 font-display text-[44px] font-medium leading-none text-k-text">
            $1,500/mo
          </p>
          <p className="mt-2 text-[15px] text-k-muted">
            everything above, managed for you
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "All five services, one flat rate",
              "Real humans on support, not a chatbot",
              "Month-to-month, cancel anytime",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-k-text">
                <span className="mt-0.5 text-k-accent">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href={MAILTO_HREF}
            className="mt-8 flex w-full items-center justify-center rounded-lg bg-k-accent px-6 py-3.5 text-[15px] font-medium text-white transition-all hover:bg-k-accent-hover"
            style={{ transition: "all 150ms ease" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            Book a call &#8594;
          </a>
        </div>

        <p className="mt-8 max-w-[420px] text-center text-[14px] leading-[1.6] text-k-muted">
          Not ready for the full stack? Start with any single service from
          $750/mo. Book a call for a custom mix.
        </p>
      </div>
    </section>
  );
}
