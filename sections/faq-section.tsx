"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/config/site";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding">
      <Container className="space-y-10">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Respostas objetivas para eliminar atritos antes da inscrição."
        />

        <div className="mx-auto grid max-w-4xl gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div className="glass-card overflow-hidden p-1" key={item.question}>
                <button
                  className="flex w-full items-center justify-between gap-4 rounded-[1.5rem] px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  type="button"
                >
                  <span className="text-base font-semibold">{item.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-[var(--color-rose-deep)] transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-80",
                  )}
                >
                  <div className="overflow-hidden px-5 pb-5 text-sm leading-7 text-muted">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
