import { Reveal } from "@/components/motion/reveal";
import { EnrollmentForm } from "@/components/forms/enrollment-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function EnrollmentSection() {
  return (
    <section className="section-padding" id="inscricao">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Formulário de inscrição"
            title="Preencha seus dados para garantir sua inscrição com segurança."
          />
        </Reveal>

        <Reveal className="glass-panel p-6 sm:p-8">
          <EnrollmentForm />
        </Reveal>
      </Container>
    </section>
  );
}
