"use client"

import * as React from "react"

/**
 * Interpreta **trecho** nas strings e renderiza como <strong>.
 * Use em traduções: "Texto com **negrito** aqui."
 */
export function RichText({ children, className, as: Component = "span" }: {
  children: string
  className?: string
  as?: "span" | "p" | "div"
}) {
  const parts = children.split(/(\*\*[^*]+\*\*)/g)
  const content = parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  )
  return <Component className={className}>{content}</Component>
}
