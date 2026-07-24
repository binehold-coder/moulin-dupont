"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const details = [
  {
    icon: MapPin,
    title: "Adresse",
    lines: ["Chemin du Vieux Moulin", "73370 Le Bourget-du-Lac, Savoie"],
  },
  {
    icon: Phone,
    title: "Téléphone",
    lines: ["+33 4 79 25 17 04"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["contact@moulin-dupont.fr"],
  },
  {
    icon: Clock,
    title: "Horaires",
    lines: ["Lun — Ven : 8h00 – 18h00", "Sam : 9h00 – 12h30"],
  },
]

export function ContactSection() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">
            Contact
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Échangeons autour de nos farines
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Une question, une commande ou l&apos;envie de visiter le moulin ? Notre équipe vous
            répond avec plaisir.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          {/* Contact info + map */}
          <div className="lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2">
              {details.map((detail) => (
                <div key={detail.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/20 text-accent-foreground">
                    <detail.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{detail.title}</p>
                    {detail.lines.map((line) => (
                      <p key={line} className="text-sm leading-relaxed text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-lg border border-border">
              <iframe
                title="Carte de localisation du Moulin Dupont au Bourget-du-Lac"
                src="https://www.openstreetmap.org/export/embed.html?bbox=5.8300%2C45.6350%2C5.8900%2C45.6700&layer=mapnik&marker=45.6525%2C5.8600"
                className="h-64 w-full grayscale-[0.3]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              suppressHydrationWarning
              autoComplete="off"
              data-lpignore="true"
              className="rounded-lg border border-border bg-card p-6 shadow-sm md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nom" className="text-sm font-medium text-foreground">
                    Nom complet
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    suppressHydrationWarning
                    autoComplete="off"
                    data-lpignore="true"
                    placeholder="Jean Dupont"
                    className="rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/40"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Adresse email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    suppressHydrationWarning
                    autoComplete="off"
                    data-lpignore="true"
                    placeholder="jean@exemple.fr"
                    className="rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/40"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <label htmlFor="sujet" className="text-sm font-medium text-foreground">
                  Sujet
                </label>
                <input
                  id="sujet"
                  name="sujet"
                  type="text"
                  suppressHydrationWarning
                  autoComplete="off"
                  data-lpignore="true"
                  placeholder="Demande de renseignements"
                  className="rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/40"
                />
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  suppressHydrationWarning
                  autoComplete="off"
                  data-lpignore="true"
                  placeholder="Bonjour, je souhaiterais..."
                  className="resize-none rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/40"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
              >
                {sent ? (
                  <>
                    <Check className="mr-1 h-4 w-4" />
                    Message envoyé
                  </>
                ) : (
                  "Envoyer le message"
                )}
              </Button>
              {sent && (
                <p className="mt-3 text-sm text-accent-foreground">
                  Merci ! Nous vous répondrons dans les plus brefs délais.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
