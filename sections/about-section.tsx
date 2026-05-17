import { HeartHandshake, Sparkles, Target } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  const cards = [
    {
      icon: Target,
      title: "O que é",
      description: siteConfig.about.paragraph,
    },
    {
      icon: HeartHandshake,
      title: "Para quem é",
      description: siteConfig.about.audience,
    },
    {
      icon: Sparkles,
      title: "Transformação entregue",
      description: siteConfig.about.transformation,
    },
  ];

  return (
    <section className="section-padding" id="sobre">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            description="Baseado em uma metodologia mundialmente validada, esta mentoria proporciona uma transformação real a toda mulher que dela vivencia, trazendo ainda mais clareza para suas ações e decisões."
            eyebrow="Sobre a Mentoria"
            title="Uma experiência desenhada para mulheres que desejam viver o lar com mais paz, beleza e propósito."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal
                className="glass-card p-7"
                delay={0.08 * index}
                key={card.title}
              >
                <Icon className="mb-5 h-10 w-10 text-[var(--color-rose-deep)]" />
                <h3 className="text-2xl font-semibold">{card.title}</h3>
                <p className="mt-4 text-base leading-8 text-muted">
                  {card.description}
                </p>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="glass-panel p-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="space-y-5">
              <p className="eyebrow">Dores que a mentoria ajuda a resolver</p>
              <h3 className="font-serif text-3xl font-semibold leading-tight">
                Quando a alma pesa, o lar também sente.
              </h3>
              <p className="text-base leading-8 text-muted">
                Esta mentoria acolhe dores silenciosas que muitas mulheres carregam
                sozinhas e transforma esse peso em direção, presença e reconstrução
                do ambiente da casa.
              </p>
              <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[rgba(173,104,132,0.08)] p-5">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-rose-deep)]">
                  O que começa dentro de você reverbera no lar inteiro.
                </p>
              </div>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="glass-card space-y-4 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-rose-deep)]">
                  Sobrecarga interna
                </p>
                <ul className="space-y-3">
                  {siteConfig.about.pains.slice(0, 4).map((pain) => (
                    <li
                      className="flex items-start gap-3 text-sm leading-7 text-muted"
                      key={pain}
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-rose)]" />
                      <span>{pain}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card space-y-4 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-rose-deep)]">
                  Reflexos no lar e nos relacionamentos
                </p>
                <ul className="space-y-3">
                  {siteConfig.about.pains.slice(4).map((pain) => (
                    <li
                      className="flex items-start gap-3 text-sm leading-7 text-muted"
                      key={pain}
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-rose)]" />
                      <span>{pain}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
