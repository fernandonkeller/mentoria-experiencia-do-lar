import { BadgeCheck, HeartHandshake, Sparkles, Users } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { getCheckoutHref } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="section-padding pt-6 lg:pt-10">
      <Container>
        <div className="glass-panel overflow-hidden p-3 sm:p-5">
          <div className="grid gap-8 rounded-[1.7rem] bg-[rgba(36,27,28,0.06)] p-4 sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
            <Reveal className="flex flex-col justify-between gap-8 rounded-[1.75rem] bg-white/72 p-6 sm:p-8">
              <div className="space-y-6">
                <p className="eyebrow">{siteConfig.hero.eyebrow}</p>
                <h1 className="heading-xl max-w-3xl">
                  {siteConfig.hero.title}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  {siteConfig.hero.subtitle}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <ButtonLink href={getCheckoutHref()}>
                  {siteConfig.hero.primaryCta}
                </ButtonLink>
                <ButtonLink href="#sobre" variant="secondary">
                  {siteConfig.hero.secondaryCta}
                </ButtonLink>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {siteConfig.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="glass-card rounded-[1.4rem] p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-[var(--color-rose-deep)]">
                      {metric.value}
                    </div>
                    <p className="mt-1 text-sm leading-6 text-muted">{metric.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative overflow-hidden rounded-[1.9rem] border border-white/45" delay={0.1}>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[rgba(30,13,16,0.72)] via-transparent to-transparent" />
              <Image
                alt="Sabrina Keller na Mentoria do Lar"
                className="h-full w-full object-cover"
                height={1600}
                priority
                src={siteConfig.hero.image}
                width={1200}
              />

              <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-7">
                <div className="glass-card space-y-4 p-5">
                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-rose-deep)]">
                    <Sparkles className="h-4 w-4" />
                    Experiência premium, íntima e presencial
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-[var(--color-border)] bg-white/70 p-4">
                      <BadgeCheck className="mb-2 h-5 w-5 text-[var(--color-rose-deep)]" />
                      <p className="text-sm font-semibold leading-6 text-[var(--color-ink)]">
                        Você não caminhará sozinha.
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        Um ambiente de apoio, escuta e direção para viver mudanças reais dentro da sua casa e da sua vida.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[var(--color-border)] bg-white/70 p-4">
                      <Users className="mb-2 h-5 w-5 text-[var(--color-rose-deep)]" />
                      <p className="text-sm font-semibold leading-6 text-[var(--color-ink)]">
                        Mulheres que crescem juntas.
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        Conexões verdadeiras, comunhão, fortalecimento emocional e construção de relacionamentos com propósito.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[var(--color-border)] bg-white/70 p-4">
                      <HeartHandshake className="mb-2 h-5 w-5 text-[var(--color-rose-deep)]" />
                      <p className="text-sm font-semibold leading-6 text-[var(--color-ink)]">
                        Um espaço seguro para florescer.
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        Um ambiente leve, íntimo e acolhedor, onde você poderá ser cuidada sem julgamentos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
