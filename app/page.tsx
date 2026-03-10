export const dynamic = 'force-dynamic';

import HeroWaves from "@/components/HeroWaves"
import StatsCounter from "@/components/StatsCounter"
import ProgramCards from "@/components/ProgramCards"
import CourseListByDivision from "@/components/CourseListByDivision"
import CurriculumAccordion from "@/components/CurriculumAccordion"
import FacultyProfileCards from "@/components/FacultyProfileCards"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import LogoCloud from "@/components/LogoCloud"

export default function HomePage() {
  return (
    <main>
      <HeroWaves
        title="A premier K–12 education built for curious minds and kind hearts."
        subtitle="Greenfield Academy blends rigorous STEM, vibrant arts, and character development in small classes—so every student is known, challenged, and supported."
        ctaLabel="Schedule a Campus Tour"
        ctaHref="/admissions#visit"
        secondaryCtaLabel="Explore Academics"
        secondaryCtaHref="/academics"
      />

      <StatsCounter
        stats={[
          { value: "98%", label: "College acceptance rate" },
          { value: "22", label: "AP / Honors offerings" },
          { value: "40+", label: "Clubs & teams" },
          { value: "35", label: "Service hours / student / year" },
        ]}
        bgColor="bg-muted"
      />

      <ProgramCards />
      <CourseListByDivision />
      <CurriculumAccordion />
      <FacultyProfileCards />
      <TestimonialsCarousel />

      <FAQAccordion
        headline="Admissions questions, answered."
        subheadline="If you don’t see your question here, our admissions team is happy to help."
        items={[
          {
            question: "What are your school hours?",
            answer:
              "Elementary (K–5): 8:15 AM–3:00 PM. Middle & Upper School (6–12): 8:10 AM–3:20 PM. Optional after-school programs run until 5:45 PM.",
          },
          {
            question: "Do you offer financial aid?",
            answer:
              "Yes. Need-based financial aid is available for grades K–12. We also offer a limited number of merit scholarships for grades 9–12.",
          },
          {
            question: "How do campus tours work?",
            answer:
              "Tours are offered Tuesday–Friday at 9:00 AM and 1:00 PM. You’ll visit classrooms, meet an admissions counselor, and have time for questions.",
          },
          {
            question: "What support is available for learning differences?",
            answer:
              "Our Learning Support team provides targeted interventions, executive function coaching, and classroom accommodations in partnership with families.",
          },
        ]}
      />

      <LogoCloud
        headline="Trusted by families from communities across Brookhaven"
        logos={[
          {
            name: "Brookhaven Parent Association",
            imageUrl:
              "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577722/site-images/hero-backgrounds/13371856.jpg",
          },
          {
            name: "Massachusetts STEM Network",
            imageUrl:
              "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577435/site-images/education/10637947.jpg",
          },
          {
            name: "Arts Education Collaborative",
            imageUrl:
              "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577461/site-images/education/18265843.jpg",
          },
          {
            name: "New England Student Leadership",
            imageUrl:
              "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576907/site-images/corporate/10142683.jpg",
          },
        ]}
      />

      <CTASection />
    </main>
  )
}
