const team = [
  {
    name: "Antoine Dupont",
    role: "Maître Meunier — Propriétaire",
    image: "/images/team-antoine.png",
    alt: "Portrait d'Antoine Dupont, maître meunier, dans le moulin",
    bio: "Neuvième génération à la tête du moulin, Antoine veille chaque jour à ce que la tradition familiale rime avec exigence et passion du grain.",
  },
  {
    name: "Sophie Laurent",
    role: "Responsable Qualité",
    image: "/images/team-sophie.png",
    alt: "Portrait de Sophie Laurent, responsable qualité",
    bio: "Garante de l'excellence de nos farines, Sophie contrôle chaque étape de la mouture pour offrir une régularité et une pureté irréprochables.",
  },
  {
    name: "Lucas Martin",
    role: "Artisan Boulanger Partenaire",
    image: "/images/team-lucas.png",
    alt: "Portrait de Lucas Martin, artisan boulanger partenaire",
    bio: "Boulanger passionné, Lucas travaille main dans la main avec le moulin pour révéler tout le potentiel de nos farines dans ses pains.",
  },
]

export function TeamSection() {
  return (
    <section id="equipe" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">
            Notre Équipe
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Les artisans du Moulin Dupont
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Derrière chaque sac de farine, des femmes et des hommes dévoués qui perpétuent un
            savoir-faire d&apos;exception.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.alt}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-accent-foreground/80">{member.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
