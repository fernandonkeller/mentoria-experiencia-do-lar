export type IconName =
  | "sparkles"
  | "heart-handshake"
  | "book-open"
  | "house"
  | "users"
  | "shield-check"
  | "cup-soda"
  | "badge-check"
  | "message-circle-heart"
  | "calendar-heart";

export interface HeroMetric {
  label: string;
  value: string;
}

export interface BenefitItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface ModuleItem {
  step: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  highlight: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
