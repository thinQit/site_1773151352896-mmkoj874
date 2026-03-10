export const dynamic = 'force-dynamic';

import HeroWaves from "@/components/HeroWaves"
import ContactForm from "@/components/ContactForm"
import FeaturesGrid from "@/components/FeaturesGrid"

export default function ContactPage() {
  return (
    <main>
      <HeroWaves
        title="Contact Greenfield Academy"
        subtitle="Questions about admissions, academics, or student support? We’ll connect you with the right team member."
        ctaLabel="Call Admissions"
        ctaHref="tel:+16175550148"
        secondaryCtaLabel="Email Us"
        secondaryCtaHref="mailto:info@greenfieldacademy.org"
      />

      <ContactForm
        headline="Send a message"
        subheadline="We typically respond within 1–2 business days."
        contactInfo={[
          { icon: "MapPin", label: "Address", value: "2450 Greenfield Lane, Brookhaven, MA 02128" },
          { icon: "Phone", label: "Phone", value: "(617) 555-0148" },
          { icon: "Mail", label: "Email", value: "info@greenfieldacademy.org" },
          { icon: "Clock", label: "Hours", value: "Mon–Fri: 7:45 AM–4:30 PM" },
        ]}
      />

      <FeaturesGrid
        badge="Visit & Info Sessions"
        headline="Schedule a campus tour or join virtually."
        subheadline="Choose the option that works best for your family."
        features={[
          {
            icon: "School",
            title: "Campus Tours",
            description: "Tue–Fri • 9:00 AM and 1:00 PM with classroom visits and Q&A.",
          },
          {
            icon: "Car",
            title: "Parking",
            description: "Visitor parking is available at the main entrance off Greenfield Lane.",
          },
          {
            icon: "Monitor",
            title: "Virtual Info Session",
            description: "Thursday, March 27 • 7:00 PM (ET), 45-minute overview + live Q&A.",
          },
        ]}
      />
    </main>
  )
}
