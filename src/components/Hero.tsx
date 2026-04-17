"use client";

import { motion } from "framer-motion";

const MAILTO_HREF =
  "mailto:screensightcreations@gmail.com?subject=Kollaborate%20demo%20request";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      delay: i * 0.08,
    },
  }),
};

export function Hero() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 md:px-8">
      <div
        className="pt-[80px] pb-[100px] md:pt-[120px] md:pb-[160px]"
      >
        <motion.h1
          className="font-display text-[32px] font-medium leading-[1.1] tracking-tight text-k-text sm:text-[40px] md:text-[56px]"
          style={{ fontOpticalSizing: "auto" }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Done-for-you growth for
          <br className="hidden md:inline" /> local service businesses.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-[560px] text-[17px] leading-[1.6] text-k-muted md:text-[20px]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          One team handles everything between your phone ringing and your
          calendar filling. Voice, reviews, website, content, follow-up. We run
          it. You get the results.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <a
            href={MAILTO_HREF}
            className="inline-flex items-center justify-center rounded-lg bg-k-accent px-6 py-3.5 text-[15px] font-medium text-white transition-all hover:bg-k-accent-hover"
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
            Book a 15-minute call
          </a>
          <a
            href="#services"
            className="inline-flex items-center text-[15px] font-medium text-k-muted transition-colors hover:text-k-text hover:underline"
          >
            See what we do ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
