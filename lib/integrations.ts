import { sanitizeDigits } from "@/lib/sanitizers";
import type { EnrollmentFormValues } from "@/types/enrollment";

export interface EnrollmentPayload extends EnrollmentFormValues {
  createdAt: string;
  normalizedCpf: string;
  normalizedWhatsapp: string;
}

export async function persistEnrollment(
  payload: EnrollmentPayload,
): Promise<void> {
  void sanitizeDigits(payload.cpf);

  // Conecte o backend aqui no futuro.
  // Exemplos:
  // - Supabase: inserir em uma tabela de leads/inscrições
  // - Firebase: salvar em Firestore
  // - Google Sheets: chamar um webhook/serverless
  // - Webhooks: disparar para automações de CRM ou checkout
  console.info("Enrollment payload prepared for persistence", payload);
}
