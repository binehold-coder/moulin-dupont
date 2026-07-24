import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { HistorySection } from "@/components/history-section"
import { ProductsSection } from "@/components/products-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <HistorySection />
        <ProductsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
