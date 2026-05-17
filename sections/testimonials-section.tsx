import { Quote } from "lucide-react";

import { HoverCard } from "@/components/motion/hover-card";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/config/site";

export function TestimonialsSection() {
  return (
    <section className="section-padding">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            description="Caso ainda não existam depoimentos finais, a estrutura já está preparada com placeholders elegantes para rápida substituição."
            eyebrow="Prova social"
            title="Resultados e percepções que reforçam confiança antes da decisão."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal delay={0.08 * index} key={`${testimonial.name}-${index}`}>
              <HoverCard className="glass-card h-full p-7">
                <Quote className="h-10 w-10 text-[var(--color-rose-deep)]" />
                <p className="mt-5 text-base leading-8 text-muted">
                  “{testimonial.quote}”
                </p>
                <div className="mt-6 rounded-3xl bg-[rgba(173,104,132,0.08)] p-4 text-sm leading-7 text-[var(--color-rose-deep)]">
                  {testimonial.highlight}
                </div>
                <div className="mt-6">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </HoverCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
