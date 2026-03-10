'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface Pathway {
  division: string
  details: string
}

interface CurriculumAccordionProps {
  pathways?: Pathway[]
}

export default function CurriculumAccordion({
  pathways = [
    { division: 'Lower School (K-5)', details: 'Build foundational literacy, numeracy, and curiosity through integrated units, guided reading, and experiential science.' },
    { division: 'Middle School (6-8)', details: 'Develop analytical thinking with interdisciplinary projects, lab-based science, and communication skills through debate and writing.' },
    { division: 'Upper School (9-12)', details: 'Advance with honors and AP pathways, capstone research, leadership opportunities, and college readiness advising.' },
  ],
}: Partial<CurriculumAccordionProps>) {
  return (
    <section id="curriculum" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {pathways.map((pathway, idx) => (
            <AccordionItem key={pathway.division} value={'item-' + idx} className="rounded-xl border px-4">
              <AccordionTrigger className="text-left font-semibold">{pathway.division}</AccordionTrigger>
              <AccordionContent className="text-foreground/80">{pathway.details}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
