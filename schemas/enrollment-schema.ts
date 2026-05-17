import { z } from "zod";

const emptyMessage = "Este campo é obrigatório.";

export const enrollmentSchema = z.object({
  fullName: z.string().trim().min(3, "Informe seu nome completo."),
  birthDate: z
    .string()
    .trim()
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Use o formato DD/MM/AAAA."),
  whatsapp: z
    .string()
    .trim()
    .regex(/^\(\d{2}\)\s\d{5}-\d{4}$/, "Informe um WhatsApp válido."),
  email: z.email("Informe um e-mail válido."),
  instagram: z.string().trim().min(2, "Informe seu Instagram."),
  address: z.string().trim().min(10, "Informe seu endereço completo."),
  cpf: z
    .string()
    .trim()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Informe um CPF válido."),
  maritalStatus: z.string().trim().min(1, emptyMessage),
  childrenCount: z
    .string()
    .trim()
    .min(1, emptyMessage)
    .refine((value) => Number.isInteger(Number(value)) && Number(value) >= 0, {
      message: "Informe uma quantidade válida.",
    }),
  professionalBackground: z
    .string()
    .trim()
    .min(3, "Informe sua formação profissional."),
  consent: z.boolean().refine((value) => value, {
    message: "É necessário autorizar o uso dos dados.",
  }),
  honeypot: z.string().optional(),
});

export type EnrollmentSchema = z.infer<typeof enrollmentSchema>;
