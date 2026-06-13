import { Copyright, Mail } from "lucide-react";

import {
  InstagramBrandIcon,
  WhatsAppBrandIcon,
} from "@/components/ui/brand-icons";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function FooterSection() {
  return (
    <footer className="section-padding pt-10">
      <Container>
        <div className="glass-panel p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <p className="eyebrow">Rodapé</p>
              <h2 className="font-serif text-3xl font-semibold">
                {siteConfig.name}
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-muted">
                Uma experiência criada para apresentar a mentoria, orientar a
                pré-inscrição e facilitar o contato direto para confirmação da
                vaga.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href={siteConfig.contact.instagram} variant="secondary">
                  <InstagramBrandIcon className="h-4 w-4" />
                  @sabrinakeller
                </ButtonLink>
                <ButtonLink href={siteConfig.contact.whatsapp} variant="secondary">
                  <WhatsAppBrandIcon className="h-4 w-4" />
                  (54) 99175-9942
                </ButtonLink>
                <ButtonLink href={`mailto:${siteConfig.contact.email}`} variant="secondary">
                  <Mail className="h-4 w-4" />
                  eu@sabrinakeller.com.br
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-4 rounded-[1.8rem] border border-[var(--color-border)] bg-white/60 p-6">
              <div className="flex items-start gap-3 text-sm leading-7 text-muted">
                <Copyright className="mt-1 h-4 w-4 shrink-0 text-[var(--color-rose-deep)]" />
                <p>Todos os direitos reservados • {new Date().getFullYear()}</p>
              </div>
              <a
                className="text-sm font-medium text-[var(--color-rose-deep)] underline-offset-4 hover:underline"
                href="#"
              >
                Política de privacidade
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
