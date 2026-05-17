"use client";

import { useCallback, type ChangeEvent } from "react";
import type { FieldPath, FieldValues, UseFormSetValue } from "react-hook-form";

export function useInputMask<TFieldValues extends FieldValues>(
  setValue: UseFormSetValue<TFieldValues>,
) {
  return useCallback(
    (name: FieldPath<TFieldValues>, mask: (value: string) => string) =>
      (event: ChangeEvent<HTMLInputElement>) => {
        const maskedValue = mask(event.target.value);
        setValue(name, maskedValue as TFieldValues[typeof name], {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true,
        });
      },
    [setValue],
  );
}
