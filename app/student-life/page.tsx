export const dynamic = 'force-dynamic';

import HeroWaves from "@/components/HeroWaves"
import FeaturesGrid from "@/components/FeaturesGrid"
import CTABanner from "@/components/CTABanner"

export default function StudentLifePage() {
  return (
    <main>
      <HeroWaves
        title="A school day filled with belonging, creativity, and purpose."
        subtitle="Clubs, athletics, performances, service learning, and advisory—so students build friendships and confidence alongside academics."
        ctaLabel="Explore Clubs"
        ctaHref="/student-life#clubs"
        secondaryCtaLabel="Schedule a Tour"
        secondaryCtaHref="/admissions#visit"
      />

      <FeaturesGrid
        badge="Clubs & Activities"
        headline="Students can try something new or go deep in an area they love."
        subheadline="From robotics to performing arts, our co-curriculars foster confidence and collaboration."
        features={[
          { icon: "Bot", title: "Robotics Team", description: "Build, code, and compete in student-led engineering challenges." },
          { icon: "Palette", title: "Art & Illustration", description: "Develop creative voice through studio projects and showcases." },
          { icon: "Drama", title: "Drama Guild", description: "Perform on stage while learning stagecraft and ensemble work." },
          { icon: "Leaf", title: "Environmental Action", description: "Lead sustainability projects connected to local impact." },
        ]}
      />

      <FeaturesGrid
        badge="Character Development"
        headline="Character development that’s taught, practiced, and celebrated."
        subheadline="A shared values framework across advisory, academics, and service."
        features={[
          {
            icon: "Users",
            title: "Advisory",
            description: "Goal setting, organization, and community-building routines.",
          },
          {
            icon: "Handshake",
            title: "Service Learning",
            description: "Age-appropriate projects tied to local community needs.",
          },
          {
            icon: "Megaphone",
            title: "Leadership",
            description: "Student-led clubs, peer mentoring, and public speaking opportunities.",
          },
        ]}
      />

      <CTABanner
        headline="See student life in action on campus."
        description="Tours include classroom visits and a look at labs, studios, and common spaces."
        ctaLabel="Schedule a Tour"
        ctaHref="/admissions#visit"
        secondaryCtaLabel="Contact"
        secondaryCtaHref="/contact"
      />
    </main>
  )
}
