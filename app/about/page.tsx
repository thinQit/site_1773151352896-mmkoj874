export const dynamic = 'force-dynamic';

import HeroWaves from "@/components/HeroWaves"
import FeaturesGrid from "@/components/FeaturesGrid"
import TeamGrid from "@/components/TeamGrid"
import CTABanner from "@/components/CTABanner"

export default function AboutPage() {
  return (
    <main>
      <HeroWaves
        title="A school designed for joyful learning and strong character."
        subtitle="Greenfield Academy is a K–12 private school built on academic excellence, creative expression, and a community where students feel safe to try, fail, and grow."
        ctaLabel="Our Mission & Values"
        ctaHref="/about#mission"
        secondaryCtaLabel="Meet Leadership"
        secondaryCtaHref="/about#leadership"
      />

      <FeaturesGrid
        badge="Mission"
        headline="We prepare students to thrive in college and life."
        subheadline="Through rigorous academics, meaningful arts experiences, and character education rooted in service."
        features={[
          {
            icon: "Lightbulb",
            title: "Curiosity",
            description: "We ask strong questions and learn through exploration.",
          },
          {
            icon: "ShieldCheck",
            title: "Integrity",
            description: "We do what’s right, even when it’s hard.",
          },
          {
            icon: "HeartHandshake",
            title: "Belonging",
            description: "Every student is known, respected, and supported.",
          },
          {
            icon: "Trophy",
            title: "Excellence",
            description: "We set high standards and celebrate growth.",
          },
        ]}
      />

      <TeamGrid
        headline="Leadership"
        subheadline="Experienced educators focused on student outcomes and a healthy school culture."
        members={[
          {
            name: "Dr. Amina Patel",
            title: "Head of School",
            imageUrl:
              "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577698/site-images/hero-backgrounds/13551579.jpg",
            bio: "Former independent school principal and curriculum leader. Passionate about inquiry-based learning and student wellbeing.",
          },
          {
            name: "Mr. Thomas Reed",
            title: "Upper School Principal (Grades 9–12)",
            imageUrl:
              "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577335/site-images/team-people/1181734.jpg",
            bio: "Leads academic programming, college counseling alignment, and student leadership initiatives.",
          },
          {
            name: "Ms. Sofia Nguyen",
            title: "Director of Student Support",
            imageUrl:
              "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577457/site-images/education/29264388.jpg",
            bio: "Coordinates learning support, counseling partnerships, and executive function coaching across K–12.",
          },
        ]}
      />

      <CTABanner
        headline="Come experience Greenfield’s classrooms and community."
        description="Tours are offered weekly and include classroom visits and time with admissions."
        ctaLabel="Schedule a Tour"
        ctaHref="/admissions#visit"
        secondaryCtaLabel="Request Information"
        secondaryCtaHref="/admissions#request-info"
      />
    </main>
  )
}
