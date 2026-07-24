import { cn } from "@/lib/utils"

export function MillLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label="Logo Moulin Dupont"
    >
      {/* Millstone circle */}
      <circle cx="24" cy="24" r="21" className="stroke-current" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="4.5" className="fill-current" opacity="0.9" />
      {/* Windmill / wheat sails radiating from center */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 24 24)`}>
          <path
            d="M24 19.5 L24 6"
            className="stroke-current"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          {/* wheat grain accents along each spoke */}
          <path
            d="M24 9 q2.4 1.6 0 3.6 q-2.4 -2 0 -3.6 Z"
            className="fill-current"
            opacity="0.85"
          />
          <path
            d="M24 13 q2.4 1.6 0 3.6 q-2.4 -2 0 -3.6 Z"
            className="fill-current"
            opacity="0.85"
          />
        </g>
      ))}
    </svg>
  )
}
