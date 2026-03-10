export const dynamic = 'force-dynamic';

import HeroWaves from "@/components/HeroWaves"
import StepsTimeline from "@/components/StepsTimeline"
import PricingTable from "@/components/PricingTable"
import ContactForm from "@/components/ContactForm"
import CTABanner from "@/components/CTABanner"

export default function AdmissionsPage() {
  return (
    <main>
      <HeroWaves
        title="Admissions made clear, supportive, and family-friendly."
        subtitle="We’re here to help you understand fit, explore programs, and feel confident about next steps—whether you’re applying for Kindergarten or transferring in high school."
        ctaLabel="Schedule a Tour"
        ctaHref="/admissions#visit"
        secondaryCtaLabel="Request Information"
        secondaryCtaHref="/admissions#request-info"
      />

      <StepsTimeline />

      <PricingTable
        headline="Tuition & financial aid"
        subheadline="We offer need-based aid across K–12 and flexible payment plans."
        tiers={[
          {
            name: "K–5",
            price: "$22,800",
            period: "year",
            description: "Includes core academics, arts, and advisory.",
            features: ["Small classes", "Arts programming", "Advisory support"],
            ctaLabel: "Request Aid Information",
            ctaHref: "/admissions#request-info",
          },
          {
            name: "6–8",
            price: "$26,400",
            period: "year",
            description: "Includes electives and advisory.",
            features: ["Robotics and studio art", "Theater electives", "Advisory"],
            ctaLabel: "Request Aid Information",
            ctaHref: "/admissions#request-info",
            highlighted: true,
          },
          {
            name: "9–12",
            price: "$29,900",
            period: "year",
            description: "Includes college counseling and capstone.",
            features: ["College counseling", "Capstone program", "Advanced coursework"],
            ctaLabel: "Request Aid Information",
            ctaHref: "/admissions#request-info",
          },
        ]}
      />

      <ContactForm
        headline="Request information"
        subheadline="Tell us a bit about your child and we’ll send program details, upcoming dates, and next steps."
        contactInfo={[
          { icon: "Phone", label: "Admissions Office", value: "(617) 555-0148" },
          { icon: "Mail", label: "Email", value: "admissions@greenfieldacademy.org" },
          { icon: "Calendar", label: "Priority Deadline", value: "January 15" },
        ]}
      />

      <CTABanner
        headline="Visit Greenfield Academy"
        description="Tour classrooms, meet admissions, and ask questions about fit and support."
        ctaLabel="Schedule a Tour"
        ctaHref="/contact#tour"
        secondaryCtaLabel="Virtual Info Session"
        secondaryCtaHref="/contact#info-session"
      />
    </main>
  )
}
