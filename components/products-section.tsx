import { Wheat } from "lucide-react"

const products = [
  {
    name: "Farine Tradition Française",
    tag: "Type 65",
    image: "/images/farine-tradition.png",
    alt: "Farine de tradition française blanche disposée sur du bois rustique",
    description:
      "Notre farine emblématique, moulue à partir de blés tendres cultivés en France. Idéale pour la baguette de tradition, elle offre une croûte croustillante et une mie alvéolée au goût authentique.",
  },
  {
    name: "Farine Bio sur Meule de Pierre",
    tag: "Agriculture Biologique",
    image: "/images/farine-bio.png",
    alt: "Farine biologique complète moulue sur meule de pierre dans un bol en céramique",
    description:
      "Écrasée lentement sur nos meules de pierre centenaires, cette farine biologique préserve le germe et les fibres du grain. Une richesse nutritionnelle et un parfum de noisette incomparables.",
  },
  {
    name: "Farine de Seigle",
    tag: "Type 130",
    image: "/images/farine-seigle.png",
    alt: "Farine de seigle sombre dans un sac en lin sur une table en bois vieilli",
    description:
      "Rustique et généreuse, notre farine de seigle apporte du caractère aux pains de campagne et aux pains d'épices. Une saveur profonde héritée des terroirs de montagne.",
  },
]

export function ProductsSection() {
  return (
    <section id="farines" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">
            Nos Farines d&apos;Exception
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Des mélanges nés du grain et du savoir-faire
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Chaque farine est le fruit d&apos;une sélection rigoureuse des grains et d&apos;une
            mouture patiente. Découvrez nos spécialités, plébiscitées par les boulangers artisans.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  <Wheat className="h-3.5 w-3.5 text-accent-foreground" />
                  {product.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">{product.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
