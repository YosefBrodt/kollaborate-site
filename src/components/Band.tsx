"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export function Band() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="mx-auto max-w-[1200px] px-6 md:px-8">
      <div
        ref={ref}
        className="flex justify-center py-12 md:py-20"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 400ms ease, transform 400ms ease",
        }}
      >
        <p className="max-w-[640px] text-center font-display text-[20px] font-normal italic leading-[1.5] text-k-text md:text-[22px]">
          &ldquo;Pick one piece. Pick all five. Either way, it&rsquo;s one team,
          one invoice, one relationship.&rdquo;
        </p>
      </div>
    </section>
  );
}
