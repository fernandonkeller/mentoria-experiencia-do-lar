import { NextResponse } from "next/server";

import { persistEnrollment } from "@/lib/integrations";
import { sanitizeDigits, sanitizeEmail, sanitizeText } from "@/lib/sanitizers";
import { enrollmentSchema } from "@/schemas/enrollment-schema";

export async function POST(request: Request) {
  const body = await request.json();

  if (typeof body?.honeypot === "string" && body.honeypot.trim().length > 0) {
    return NextResponse.json(
      { message: "Submission rejected." },
      { status: 400 },
    );
  }

  const parsed = enrollmentSchema.safeParse({
    ...body,
    fullName: sanitizeText(body?.fullName ?? ""),
    birthDate: sanitizeText(body?.birthDate ?? ""),
    whatsapp: sanitizeText(body?.whatsapp ?? ""),
    email: sanitizeEmail(body?.email ?? ""),
    instagram: sanitizeText(body?.instagram ?? ""),
    address: sanitizeText(body?.address ?? ""),
    cpf: sanitizeText(body?.cpf ?? ""),
    maritalStatus: sanitizeText(body?.maritalStatus ?? ""),
    childrenCount: sanitizeText(body?.childrenCount ?? ""),
    professionalBackground: sanitizeText(body?.professionalBackground ?? ""),
  });

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Confira os dados informados.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const payload = parsed.data;

  await persistEnrollment({
    ...payload,
    createdAt: new Date().toISOString(),
    normalizedCpf: sanitizeDigits(payload.cpf),
    normalizedWhatsapp: sanitizeDigits(payload.whatsapp),
  });

  return NextResponse.json({
    message: "Inscrição recebida com sucesso.",
  });
}
