"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo noturno"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative h-9 w-9 overflow-hidden rounded-full border-border bg-card/70 backdrop-blur ${className ?? ""}`}
    >
      {/* evita flash de ícone errado antes da hidratação */}
      <Sun
        className={`theme-icon h-4 w-4 ${mounted && !isDark ? "rotate-0 opacity-100" : "rotate-90 opacity-0"}`}
      />
      <Moon
        className={`theme-icon absolute h-4 w-4 ${mounted && isDark ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
      />
    </Button>
  )
}
