import { AboutSection } from "@/sections/about-section";
import { AuthoritySection } from "@/sections/authority-section";
import { BenefitsSection } from "@/sections/benefits-section";
import { EnrollmentSection } from "@/sections/enrollment-section";
import { FaqSection } from "@/sections/faq-section";
import { FooterSection } from "@/sections/footer-section";
import { HeroSection } from "@/sections/hero-section";
import { ModulesSection } from "@/sections/modules-section";
import { PaymentSection } from "@/sections/payment-section";
import { TestimonialsSection } from "@/sections/testimonials-section";

export default async function HomePage() {
  return (
    <main className="page-shell">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ModulesSection />
      <AuthoritySection />
      <PaymentSection />
      <EnrollmentSection />
      <TestimonialsSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
