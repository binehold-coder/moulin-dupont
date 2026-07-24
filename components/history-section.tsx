export function HistorySection() {
  return (
    <section id="histoire" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-6 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/images/history-mill.png"
              alt="Intérieur historique du moulin avec sa meule en pierre et la lumière dorée"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-lg border border-border bg-card px-6 py-5 shadow-lg sm:block md:-right-6">
            <p className="font-serif text-4xl font-semibold text-primary">1704</p>
            <p className="mt-1 text-sm text-muted-foreground">Première pierre posée</p>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">
            Notre Histoire
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Neuf générations au service du grain
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              En 1704, Guillaume Dupont éleva un modeste moulin à eau sur les rives du lac du
              Bourget-du-Lac, profitant de la force tranquille des ruisseaux savoyards pour moudre
              les blés des fermes voisines. Ce qui n&apos;était alors qu&apos;une petite meunerie de
              village allait devenir l&apos;affaire d&apos;une vie, puis celle de toute une lignée.
            </p>
            <p>
              De père en fils, de mère en fille, le Moulin Dupont s&apos;est transmis comme un
              héritage précieux. Chaque génération y a laissé son empreinte : l&apos;installation de
              nouvelles meules de pierre au XIXᵉ siècle, l&apos;électrification au lendemain de la
              Grande Guerre, puis l&apos;ouverture aux farines biologiques dès les années 1990.
            </p>
            <p>
              Aujourd&apos;hui dirigée par Antoine Dupont, la maison conjugue outils modernes et
              gestes ancestraux. Nous avons su devenir une entreprise familiale prospère sans jamais
              renier notre âme artisanale : ici, on écoute encore le grain, on respecte le temps de
              la mouture, et l&apos;on livre chaque sac de farine avec la même fierté qu&apos;il y a
              trois siècles.
            </p>
          </div>
          <blockquote className="mt-8 border-l-2 border-accent pl-5 font-serif text-lg italic text-foreground">
            « Nous ne fabriquons pas seulement de la farine, nous perpétuons une promesse faite en
            1704. »
            <footer className="mt-2 font-sans text-sm not-italic text-muted-foreground">
              — Antoine Dupont, Maître Meunier
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
