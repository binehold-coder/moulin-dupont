import { cn } from "@/lib/utils"

type IconProps = { className?: string }

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={cn("h-5 w-5", className)}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  )
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={cn("h-5 w-5", className)}>
      <path
        d="M14 8.5V7c0-.8.5-1 1-1h2V3h-2.5C12 3 11 4.7 11 6.5v2H9v3h2v9h3v-9h2.2l.3-3H14Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={cn("h-5 w-5", className)}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M7 10v7M7 7.5v.01M11 17v-4a2 2 0 0 1 4 0v4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
