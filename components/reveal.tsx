"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** atraso em ms para efeito escalonado */
  delay?: number
  /** variação de animação */
  variant?: "up" | "scale"
  /** elemento renderizado */
  as?: React.ElementType
  /** dispara uma única vez (padrão) ou sempre que entra na viewport */
  once?: boolean
}

/**
 * Revela o conteúdo com um leve fade + deslize quando entra na viewport.
 * Respeita prefers-reduced-motion (aparece imediatamente).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as: Component = "div",
  once = true,
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once])

  return (
    <Component
      ref={ref}
      className={cn(variant === "scale" ? "reveal-scale" : "reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  )
}
