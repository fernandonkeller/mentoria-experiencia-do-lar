import {
  BadgeCheck,
  BookOpen,
  CalendarHeart,
  CupSoda,
  HeartHandshake,
  House,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { HoverCard } from "@/components/motion/hover-card";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { benefits } from "@/config/site";

const icons = {
  sparkles: Sparkles,
  "heart-handshake": HeartHandshake,
  "book-open": BookOpen,
  house: House,
  users: Users,
  "shield-check": ShieldCheck,
  "cup-soda": CupSoda,
  "badge-check": BadgeCheck,
  "message-circle-heart": MessageCircleHeart,
  "calendar-heart": CalendarHeart,
};

export function BenefitsSection() {
  return (
    <section className="section-padding">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Benefícios"
            title="Por que essa mentoria entrega uma experiência premium de verdade"
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = icons[benefit.icon];

            return (
              <Reveal delay={0.06 * index} key={benefit.title}>
                <HoverCard className="glass-card h-full p-7">
                  <Icon className="mb-5 h-10 w-10 text-[var(--color-rose-deep)]" />
                  <h3 className="text-2xl font-semibold">{benefit.title}</h3>
                  <p className="mt-4 text-base leading-8 text-muted">
                    {benefit.description}
                  </p>
                </HoverCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
