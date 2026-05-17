import { Mail } from "lucide-react";
import Image from "next/image";

import {
  InstagramBrandIcon,
  WhatsAppBrandIcon,
} from "@/components/ui/brand-icons";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";

export function AuthoritySection() {
  return (
    <section className="section-padding">
      <Container>
        <Reveal className="glass-panel overflow-hidden p-4 sm:p-6">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                alt={siteConfig.authority.name}
                className="h-full w-full object-cover"
                height={1500}
                src={siteConfig.authority.photo}
                width={1100}
              />
            </div>

            <div className="flex flex-col justify-center gap-6 p-2 sm:p-4">
              <div className="space-y-4">
                <h2 className="heading-lg">{siteConfig.authority.name}</h2>
                <p className="text-lg font-medium text-[var(--color-rose-deep)]">
                  {siteConfig.authority.role}
                </p>
                <p className="max-w-2xl text-base leading-8 text-muted">
                  {siteConfig.authority.bio}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {siteConfig.authority.credentials.map((credential) => (
                  <div className="glass-card p-5 text-sm leading-7 text-muted" key={credential}>
                    {credential}
                  </div>
                ))}
              </div>

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
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
