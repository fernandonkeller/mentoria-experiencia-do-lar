import { Clock3, Gift, MessagesSquare, UtensilsCrossed } from "lucide-react";

import { HoverCard } from "@/components/motion/hover-card";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { modules } from "@/config/site";

const moduleHighlights = [
  {
    icon: Clock3,
    title: "8 encontros presenciais",
    description: "Uma vez por semana, com 2h30 de duração em ambiente preparado com amor.",
  },
  {
    icon: Gift,
    title: "Kit de boas-vindas",
    description: "Livro, Bíblia da Mulher com estudo direcionado, presentes e brindes personalizados.",
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitalidade memorável",
    description: "Mesa posta especial, café e chá da tarde em todos os encontros, além do almoço de formatura.",
  },
  {
    icon: MessagesSquare,
    title: "Acompanhamento íntimo",
    description: "WhatsApp pessoal da mentora e grupo com as integrantes para continuidade da jornada.",
  },
];

export function ModulesSection() {
  return (
    <section className="section-padding">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Conteúdo / módulos"
            title="Uma metodologia construída para formar, acolher e gerar transformação prática."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {modules.map((module, index) => (
            <Reveal delay={0.08 * index} key={module.title}>
              <HoverCard className="glass-card h-full p-7">
                <p className="eyebrow">{module.step}</p>
                <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight">
                  {module.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-muted">
                  {module.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
                  {module.bullets.map((bullet) => (
                    <li className="flex items-start gap-3" key={bullet}>
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-rose)]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </HoverCard>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {moduleHighlights.map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <Reveal delay={0.05 * index} key={highlight.title}>
                <div className="glass-card h-full p-6">
                  <Icon className="mb-4 h-8 w-8 text-[var(--color-rose-deep)]" />
                  <h4 className="text-lg font-semibold">{highlight.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {highlight.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
