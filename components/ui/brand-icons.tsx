import type { SVGProps } from "react";

export function InstagramBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.8"
        width="16"
        x="4"
        y="4"
      />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.9" fill="currentColor" r="1" />
    </svg>
  );
}

export function WhatsAppBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.05 11.61c0 3.93-3.18 7.11-7.1 7.11a7.03 7.03 0 0 1-3.41-.87L5 19l1.2-3.38a7.03 7.03 0 0 1-1.35-4.01c0-3.92 3.18-7.1 7.1-7.1 3.93 0 7.1 3.18 7.1 7.1Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M9.48 8.93c.12-.28.25-.29.44-.3h.38c.13 0 .31.05.47.4.16.34.55 1.32.6 1.42.05.1.09.23.02.37-.07.14-.1.23-.2.36-.1.12-.2.27-.28.36-.1.1-.2.22-.08.44.12.22.53.87 1.14 1.4.78.68 1.44.89 1.64.99.2.1.31.08.42-.05.12-.14.52-.6.66-.8.13-.2.27-.17.45-.1.18.08 1.17.55 1.37.65.2.1.34.15.39.23.05.08.05.48-.11.95-.16.47-.95.9-1.32.95-.34.05-.77.07-2.49-.61-2.08-.82-3.42-2.83-3.53-2.98-.1-.14-.84-1.12-.84-2.13 0-1 .53-1.5.72-1.71Z"
        fill="currentColor"
      />
    </svg>
  );
}
