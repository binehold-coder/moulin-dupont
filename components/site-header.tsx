"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { MillLogo } from "@/components/mill-logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Notre Histoire", href: "#histoire" },
  { label: "Nos Farines", href: "#farines" },
  { label: "Notre Équipe", href: "#equipe" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <a
          href="#accueil"
          className={cn(
            "flex items-center gap-3 transition-colors",
            scrolled ? "text-foreground" : "text-background",
          )}
        >
          <MillLogo className="h-10 w-10 text-accent" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-wide">Moulin Dupont</span>
            <span
              className={cn(
                "text-[0.65rem] uppercase tracking-[0.25em]",
                scrolled ? "text-muted-foreground" : "text-background/80",
              )}
            >
              Meunier depuis 1704
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                scrolled ? "text-foreground/80" : "text-background/90",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#contact">Nous contacter</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className={cn(
            "inline-flex items-center justify-center rounded-md p-2 md:hidden",
            scrolled ? "text-foreground" : "text-background",
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/90 hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#contact" onClick={() => setOpen(false)}>
                Nous contacter
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
