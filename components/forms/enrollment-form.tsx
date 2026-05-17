"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, LockKeyhole, MoveRight } from "lucide-react";
import { useForm } from "react-hook-form";

import { useInputMask } from "@/hooks/use-input-mask";
import { cn, getCheckoutHref } from "@/lib/utils";
import { enrollmentSchema } from "@/schemas/enrollment-schema";
import type { EnrollmentFormValues } from "@/types/enrollment";
import { maskCpf, maskDate, maskWhatsapp } from "@/validations/masks";
import { Button } from "@/components/ui/button";
import { Input, Select, Textarea } from "@/components/ui/input";
import { FormField } from "@/components/forms/form-field";

const defaultValues: EnrollmentFormValues = {
  fullName: "",
  birthDate: "",
  whatsapp: "",
  email: "",
  instagram: "",
  address: "",
  cpf: "",
  maritalStatus: "",
  childrenCount: "",
  professionalBackground: "",
  consent: false,
  honeypot: "",
};

export function EnrollmentForm() {
  const [isRedirecting, startTransition] = useTransition();
  const [formMessage, setFormMessage] = useState<{
    type: "idle" | "success" | "error";
    text: string;
  }>({ type: "idle", text: "" });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EnrollmentFormValues>({
    resolver: zodResolver(enrollmentSchema),
    defaultValues,
    mode: "onTouched",
  });

  const bindMask = useInputMask(setValue);

  const onSubmit = handleSubmit(async (values) => {
    setFormMessage({ type: "idle", text: "" });

    const response = await fetch("/api/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const payload = (await response.json()) as {
      message?: string;
      errors?: Record<string, string[]>;
    };

    if (!response.ok) {
      setFormMessage({
        type: "error",
        text: payload.message ?? "Não foi possível enviar sua inscrição.",
      });
      return;
    }

    setFormMessage({
      type: "success",
      text: "Cadastro recebido com sucesso. Vamos te levar para o pagamento.",
    });

    startTransition(() => {
      window.setTimeout(() => {
        const checkoutHref = getCheckoutHref();

        if (checkoutHref === "#pagamento") {
          document.getElementById("pagamento")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          return;
        }

        window.location.href = checkoutHref;
      }, 1100);
    });
  });

  const pending = isSubmitting || isRedirecting;

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Nome completo" error={errors.fullName?.message}>
          <Input placeholder="Seu nome completo" {...register("fullName")} />
        </FormField>

        <FormField
          label="Data de nascimento"
          error={errors.birthDate?.message}
        >
          <Input
            inputMode="numeric"
            maxLength={10}
            placeholder="DD/MM/AAAA"
            {...register("birthDate")}
            onChange={bindMask("birthDate", maskDate)}
          />
        </FormField>

        <FormField label="WhatsApp" error={errors.whatsapp?.message}>
          <Input
            inputMode="tel"
            maxLength={15}
            placeholder="(00) 00000-0000"
            {...register("whatsapp")}
            onChange={bindMask("whatsapp", maskWhatsapp)}
          />
        </FormField>

        <FormField label="E-mail" error={errors.email?.message}>
          <Input
            type="email"
            placeholder="voce@email.com"
            {...register("email")}
          />
        </FormField>

        <FormField label="Instagram" error={errors.instagram?.message}>
          <Input placeholder="@seuinstagram" {...register("instagram")} />
        </FormField>

        <FormField label="CPF" error={errors.cpf?.message}>
          <Input
            inputMode="numeric"
            maxLength={14}
            placeholder="000.000.000-00"
            {...register("cpf")}
            onChange={bindMask("cpf", maskCpf)}
          />
        </FormField>

        <FormField
          className="md:col-span-2"
          label="Endereço completo"
          error={errors.address?.message}
        >
          <Textarea
            placeholder="Rua, número, complemento, bairro, cidade e estado"
            {...register("address")}
          />
        </FormField>

        <FormField
          label="Estado civil"
          error={errors.maritalStatus?.message}
        >
          <Select defaultValue="" {...register("maritalStatus")}>
            <option value="" disabled>
              Selecione
            </option>
            <option value="Solteira">Solteira</option>
            <option value="Casada">Casada</option>
            <option value="Divorciada">Divorciada</option>
            <option value="Viúva">Viúva</option>
          </Select>
        </FormField>

        <FormField
          label="Quantidade de filhos"
          error={errors.childrenCount?.message}
        >
          <Input
            inputMode="numeric"
            placeholder="0"
            {...register("childrenCount")}
          />
        </FormField>

        <FormField
          className="md:col-span-2"
          label="Formação profissional"
          error={errors.professionalBackground?.message}
          hint="Ex.: pedagoga, empresária, do lar, nutricionista."
        >
          <Input
            placeholder="Conte um pouco sobre sua formação e atuação"
            {...register("professionalBackground")}
          />
        </FormField>
      </div>

      <input
        aria-hidden="true"
        autoComplete="off"
        className="hidden"
        tabIndex={-1}
        {...register("honeypot")}
      />

      <label className="flex items-start gap-3 rounded-3xl border border-[var(--color-border)] bg-white/70 p-4">
        <input
          className="mt-1 h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-rose)] focus:ring-[var(--color-rose)]"
          type="checkbox"
          {...register("consent")}
        />
        <span className="text-sm leading-6 text-muted">
          Autorizo o uso dos meus dados para contato e inscrição.
        </span>
      </label>
      {errors.consent?.message ? (
        <p className="-mt-2 text-sm text-rose-700">{errors.consent.message}</p>
      ) : null}

      <div
        className={cn(
          "rounded-3xl border p-4 text-sm",
          formMessage.type === "success" &&
            "border-emerald-200 bg-emerald-50 text-emerald-800",
          formMessage.type === "error" &&
            "border-rose-200 bg-rose-50 text-rose-800",
          formMessage.type === "idle" && "hidden",
        )}
      >
        {formMessage.text}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-muted">
          <LockKeyhole className="h-4 w-4 text-[var(--color-rose-deep)]" />
          Seus dados serão usados apenas para inscrição e contato.
        </div>

        <Button className="min-w-[220px]" disabled={pending} type="submit">
          {pending ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Processando inscrição
            </>
          ) : (
            <>
              Fazer inscrição
              <MoveRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>

    </form>
  );
}
