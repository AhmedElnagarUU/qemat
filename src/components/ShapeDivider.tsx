import { cn } from "@/lib/utils"

interface ShapeDividerProps {
  variant?: 'wave' | 'triangle' | 'curve' | 'tilt'
  className?: string
  fillColor?: string
}

export default function ShapeDivider({ 
  variant = 'wave', 
  className = '',
  fillColor = '#ffffff'
}: ShapeDividerProps) {
  const shapes = {
    wave: (
      <svg
        className={cn("w-full h-24", className)}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,320 L0,160 L1440,320 L0,320 Z"
          fill={fillColor}
        />
      </svg>
    ),
    triangle: (
      <svg
        className={cn("w-full h-24", className)}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,320 L720,0 L1440,320 L0,320 Z"
          fill={fillColor}
        />
      </svg>
    ),
    curve: (
      <svg
        className={cn("w-full h-24", className)}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,320 L0,280 C480,240,960,240,1440,280 L1440,320 L0,320 Z"
          fill={fillColor}
        />
      </svg>
    ),
    tilt: (
      <svg
        className={cn("w-full h-24", className)}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,320 L0,160 L1440,320 L0,320 Z"
          fill={fillColor}
        />
      </svg>
    )
  }

  return shapes[variant]
} 