"use client";

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Step {
  title: string
  description: string
}

interface StepsTimelineProps {
  steps?: Step[]
}

export default function StepsTimeline({
  steps = [
    { title: 'Submit Inquiry Form', description: 'Share your student details and academic interests to start the process.' },
    { title: 'Campus Tour & Interview', description: 'Meet our admissions team, tour classrooms, and explore student life.' },
    { title: 'Assessment & Records', description: 'Provide transcripts and complete a grade-level readiness assessment.' },
    { title: 'Enrollment Decision', description: 'Receive your admissions decision and secure your seat for the school year.' },
  ],
}: Partial<StepsTimelineProps>) {
  return (
    <section className="bg-muted/30 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <Card key={step.title} className="relative rounded-xl border border-border bg-card shadow-sm">
              <CardContent className="p-6">
                <div className={cn('mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full font-bold', 'bg-[#E8E0F0] text-[#3A56C5]')}>
                  {idx + 1}
                </div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-foreground/80">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
