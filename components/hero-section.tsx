import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="accueil" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src="/images/hero-mill.png"
        alt="Ancien moulin en pierre au bord d'un lac entouré de champs de blé doré au coucher du soleil"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/50 to-foreground/40" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-28 pb-16 md:px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-background backdrop-blur-sm">
            Minoterie familiale · Le Bourget-du-Lac
          </span>
          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.1] text-background sm:text-5xl md:text-6xl">
            Moulin Dupont — L&apos;excellence meunière depuis 1704
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/85">
            Une tradition familiale préservée au cœur du Bourget-du-Lac.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="#histoire" className="group">
                Découvrir notre savoir-faire
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-background/40 bg-background/10 text-background backdrop-blur-sm hover:bg-background/20 hover:text-background"
            >
              <a href="#farines">Voir nos farines</a>
            </Button>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-background/20 pt-8">
            {[
              { value: "1704", label: "Année de fondation" },
              { value: "9", label: "Générations" },
              { value: "100%", label: "Blés français" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-3xl font-semibold text-accent">{stat.value}</dt>
                <dd className="mt-1 text-sm text-background/75">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
