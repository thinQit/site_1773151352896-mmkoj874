export const dynamic = 'force-dynamic';

import HeroWaves from "@/components/HeroWaves"
import TeamGrid from "@/components/TeamGrid"
import CTABanner from "@/components/CTABanner"

export default function FacultyPage() {
  return (
    <main>
      <HeroWaves
        title="Faculty who combine expertise with warmth and structure."
        subtitle="Greenfield teachers build strong relationships, teach clear routines, and create classrooms where students feel confident taking on challenges."
        ctaLabel="Schedule a Tour"
        ctaHref="/admissions#visit"
        secondaryCtaLabel="Contact"
        secondaryCtaHref="/contact"
      />

      <TeamGrid
        headline="Meet our team"
        subheadline="A snapshot of the educators leading STEM, arts, humanities, and student support."
        members={[
          {
            name: "Dr. Maya Chen",
            title: "Director of STEM & Upper School Science",
            imageUrl:
              "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576892/site-images/corporate/1181305.jpg",
            bio: "Leads inquiry labs and the Innovation Lab; mentors science fair and capstone projects.",
          },
          {
            name: "Mr. Jordan Alvarez",
            title: "Computer Science & Robotics Coach",
            imageUrl:
              "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577457/site-images/education/11025018.jpg",
            bio: "Teaches Python and web fundamentals; coaches robotics with a focus on iteration and teamwork.",
          },
          {
            name: "Ms. Leila Brooks",
            title: "Performing Arts Chair",
            imageUrl:
              "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577470/site-images/education/10082715.jpg",
            bio: "Directs theater productions and teaches performance skills that build confidence and collaboration.",
          },
          {
            name: "Ms. Hannah Osei",
            title: "Middle School Humanities",
            imageUrl:
              "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576884/site-images/corporate/10347510.jpg",
            bio: "Seminar-style discussion, debate, and writing workshops that strengthen critical thinking.",
          },
          {
            name: "Mr. Caleb Martin",
            title: "Upper School Mathematics",
            imageUrl:
              "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg",
            bio: "Teaches Algebra through Calculus with clear scaffolds and enrichment for advanced learners.",
          },
          {
            name: "Ms. Sofia Nguyen",
            title: "Director of Student Support",
            imageUrl:
              "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576893/site-images/corporate/10041276.jpg",
            bio: "Coordinates learning support, executive function coaching, and family partnerships.",
          },
        ]}
      />

      <CTABanner
        headline="Want to meet teachers and see classes in session?"
        description="Book a tour and we’ll tailor your visit to your child’s grade and interests."
        ctaLabel="Schedule a Tour"
        ctaHref="/admissions#visit"
        secondaryCtaLabel="Request Information"
        secondaryCtaHref="/admissions#request-info"
      />
    </main>
  )
}
