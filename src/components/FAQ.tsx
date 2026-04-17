"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does the $1,500/mo actually include?",
    answer:
      "All five services managed end to end. Your voice agent, your review pipeline, your website, your content calendar, your lead follow-up. One team handles the whole stack. Setup fee depends on which pieces you start with. We will walk through it on the call.",
  },
  {
    question: "What if I only want one service, not the full stack?",
    answer:
      "That works too. Single services start at $750/mo. Most clients start with call handling or reviews, then add the rest within 90 days once they see the numbers.",
  },
  {
    question: "How do I know the AI won't sound weird on my calls?",
    answer:
      "You hear it before you pay. On the discovery call, we run your actual intake questions through the agent live so you can judge the quality yourself. If it is not right for you, you do not buy.",
  },
  {
    question: "Can I cancel?",
    answer:
      "Month to month, no lock-in, no termination fees. We keep you by doing the work well, not by contracts.",
  },
];

export function FAQ() {
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
        <div className="mx-auto max-w-[680px]">
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-k-border"
              >
                <AccordionTrigger className="py-5 text-left font-display text-[17px] font-medium text-k-text hover:no-underline md:text-[18px]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-[1.6] text-k-muted">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
