"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const clients = [
  {
    name: "Somewhere Dine & Bar",
    tagline: "Restaurant, Montreal. Reviews automated since March 2026.",
  },
  {
    name: "You Feed Them",
    tagline: "Nonprofit, Osgoode ON. Site launched April 2026.",
  },
];

export function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="mx-auto max-w-[1200px] px-6 md:px-8">
      <div
        ref={ref}
        className="py-16 md:py-24"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 400ms ease, transform 400ms ease",
        }}
      >
        <p className="font-display text-[14px] font-normal italic tracking-[0.05em] text-k-muted">
          Who we work with
        </p>
        <h2 className="mt-3 font-display text-[28px] font-medium leading-[1.2] text-k-text md:text-[32px]">
          Small businesses in Montreal, Ottawa,
          <br className="hidden md:inline" /> and Eastern Ontario.
        </h2>

        <div className="mt-12 flex flex-col gap-10 sm:flex-row sm:gap-24">
          {clients.map((client) => (
            <div key={client.name}>
              <p className="font-display text-[24px] font-medium text-k-text md:text-[28px]">
                {client.name}
              </p>
              <p className="mt-1 text-[13px] text-k-muted">{client.tagline}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-[15px] italic text-k-muted sm:text-left">
          We take on three new clients per month. Next opening: May.
        </p>
      </div>
    </section>
  );
}
