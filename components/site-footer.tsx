import { MillLogo } from "@/components/mill-logo"
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/social-icons"

const socials = [
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
]

const footerLinks = [
  { label: "Notre Histoire", href: "#histoire" },
  { label: "Nos Farines", href: "#farines" },
  { label: "Notre Équipe", href: "#equipe" },
  { label: "Contact", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <MillLogo className="h-10 w-10 text-accent" />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-semibold tracking-wide">Moulin Dupont</span>
                <span className="text-[0.65rem] uppercase tracking-[0.25em] text-primary-foreground/70">
                  Meunier depuis 1704
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75">
              Minoterie familiale au bord du lac du Bourget-du-Lac, perpétuant l&apos;art de la
              mouture depuis plus de trois siècles.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
                Navigation
              </p>
              <ul className="mt-4 space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
                Contact
              </p>
              <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                <li>Chemin du Vieux Moulin</li>
                <li>73370 Le Bourget-du-Lac</li>
                <li>+33 4 79 25 17 04</li>
                <li>contact@moulin-dupont.fr</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Moulin Dupont. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-accent">
              Mentions légales
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
