export const dynamic = 'force-dynamic';

import HeroWaves from "@/components/HeroWaves"
import CurriculumAccordion from "@/components/CurriculumAccordion"
import ProgramCards from "@/components/ProgramCards"
import CTABanner from "@/components/CTABanner"

export default function AcademicsPage() {
  return (
    <main>
      <HeroWaves
        title="Academics that challenge students—and support them well."
        subtitle="A coherent K–12 pathway with strong literacy and math foundations, advanced STEM opportunities, and arts woven into every grade."
        ctaLabel="See Curriculum Pathway"
        ctaHref="/academics#curriculum"
        secondaryCtaLabel="Meet Our Faculty"
        secondaryCtaHref="/faculty"
      />

      <CurriculumAccordion />
      <ProgramCards />

      <CTABanner
        headline="Let’s find the right academic fit for your child."
        description="Our admissions team can discuss placement, support services, and how we personalize challenge across grades."
        ctaLabel="Request Information"
        ctaHref="/admissions#request-info"
        secondaryCtaLabel="Contact"
        secondaryCtaHref="/contact"
      />
    </main>
  )
}
