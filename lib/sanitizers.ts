const TAG_PATTERN = /<[^>]*>?/gm;

export function sanitizeText(value: string) {
  return value.replace(TAG_PATTERN, "").replace(/\s+/g, " ").trim();
}

export function sanitizeDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function sanitizeEmail(value: string) {
  return sanitizeText(value).toLowerCase();
}
