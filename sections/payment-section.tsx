import { CreditCard, Landmark, Shield } from "lucide-react";

import { HoverCard } from "@/components/motion/hover-card";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { getCheckoutHref } from "@/lib/utils";

export function PaymentSection() {
  return (
    <section className="section-padding" id="pagamento">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Pagamento"
            description="Este é o momento de garantir sua vaga na Mentoria Experiência do Lar e seguir para os próximos passos da sua jornada."
            title="Escolha a melhor forma de pagamento e confirme sua inscrição."
          />
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="glass-panel overflow-hidden p-1.5">
            <div className="premium-gradient rounded-[1.8rem] p-6 text-white sm:p-8">
              <p className="eyebrow !text-white/80">Investimento</p>
              <h3 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
                {siteConfig.payment.upfront}
              </h3>
              <p className="mt-4 text-lg text-white/80">ou {siteConfig.payment.installments}</p>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/82">
                {siteConfig.payment.note}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.6rem] border border-white/20 bg-white/12 p-5">
                  <Landmark className="mb-3 h-6 w-6" />
                  <h4 className="font-semibold">Pix</h4>
                  <p className="mt-2 text-sm leading-7 text-white/80">
                    Chave PIX E-mail: {siteConfig.payment.pixKey}
                  </p>
                </div>
                <div className="rounded-[1.6rem] border border-white/20 bg-white/12 p-5">
                  <CreditCard className="mb-3 h-6 w-6" />
                  <h4 className="font-semibold">Cartão de Crédito</h4>
                  <p className="mt-2 text-sm leading-7 text-white/80">
                    Parcele o valor em até 3x. </p>
                </div>
                <div className="rounded-[1.6rem] border border-white/20 bg-white/12 p-5">
                  <Shield className="mb-3 h-6 w-6" />
                  <h4 className="font-semibold">Segurança</h4>
                  <p className="mt-2 text-sm leading-7 text-white/80">
                    Transações seguras e protegidas para sua tranquilidade.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <Reveal>
              <HoverCard className="glass-card p-6">
                <p className="eyebrow">CTA principal</p>
                <h3 className="mt-3 font-serif text-3xl font-semibold">
                  Garantir minha vaga
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  Ao confirmar sua inscrição, você garante sua vaga e recebe o
                  direcionamento individual para a próxima turma.
                </p>
                <ButtonLink className="mt-6 w-full" href={getCheckoutHref()}>
                  Ir para pagamento
                </ButtonLink>
              </HoverCard>
            </Reveal>

            <Reveal delay={0.08}>
              <HoverCard className="glass-card p-6">
                <p className="eyebrow">Após a confirmação</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                  <li>Você recebe a confirmação da sua inscrição.</li>
                  <li>O calendário e a turma são alinhados individualmente.</li>
                  <li>Os próximos passos são enviados com clareza e acolhimento.</li>
                </ul>
              </HoverCard>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
