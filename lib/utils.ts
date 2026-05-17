import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { CHECKOUT_URL } from "@/config/site";

export const CHECKOUT_SENTINEL = "COLE_AQUI_O_LINK_DE_PAGAMENTO";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCheckoutHref() {
  return CHECKOUT_SENTINEL === CHECKOUT_URL ? "#pagamento" : CHECKOUT_URL;
}

export function hasLiveCheckoutUrl() {
  return CHECKOUT_URL !== CHECKOUT_SENTINEL;
}
