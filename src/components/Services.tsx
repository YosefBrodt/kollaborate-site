"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Call handling.",
    body: "Your phone gets answered every time. Appointments booked, overflow routed, nothing goes to voicemail. Works 24/7, holidays included.",
  },
  {
    number: "02",
    title: "Review automation.",
    body: "Every happy customer gets asked for a Google review. Every unhappy one gets caught before it goes public. Your reputation compounds.",
  },
  {
    number: "03",
    title: "Website.",
    body: "A fast, credible site that turns visitors into booked calls. Built in a week, designed for the industries you actually work in.",
  },
  {
    number: "04",
    title: "Content and social.",
    body: "Weekly posts, monthly content, consistent presence. We write, you approve, nothing goes live without your say.",
  },
  {
    number: "05",
    title: "Email and lead follow-up.",
    body: "New leads get a response in minutes, not days. Old leads get nurtured. Nothing falls through.",
  },
];

function ServiceCard({
  number,
  title,
  body,
  index,
}: {
  number: string;
  title: string;
  body: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="group rounded-xl border border-k-border bg-k-card p-8 transition-all duration-300 hover:shadow-sm"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(8px)",
        transition: `opacity 400ms ease ${index * 80}ms, transform 400ms ease ${index * 80}ms`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-2px)";
        el.style.borderColor = "rgba(45, 74, 62, 0.3)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "";
      }}
    >
      <span className="font-mono text-[14px] text-k-muted">{number}</span>
      <h3 className="mt-3 font-display text-[22px] font-medium text-k-text">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-[1.6] text-k-muted">{body}</p>
    </motion.div>
  );
}

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="mx-auto max-w-[1200px] px-6 md:px-8">
      <div ref={ref} className="pb-16 md:pb-24">
        <motion.p
          className="font-display text-[14px] font-normal italic tracking-[0.05em] text-k-muted"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 400ms ease, transform 400ms ease",
          }}
        >
          What we handle
        </motion.p>
        <motion.h2
          className="mt-3 font-display text-[32px] font-medium leading-[1.15] text-k-text md:text-[40px]"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 400ms ease 80ms, transform 400ms ease 80ms",
          }}
        >
          Everything between the phone
          <br className="hidden md:inline" /> and the calendar.
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.number} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
