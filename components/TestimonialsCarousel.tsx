'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Testimonial {
  quote: string
  name: string
  role: string
}

interface TestimonialsCarouselProps {
  testimonials?: Testimonial[]
}

export default function TestimonialsCarousel({
  testimonials = [
    { quote: 'Greenfield helped our daughter grow into a confident learner who loves science and music equally.', name: 'Priya S.', role: 'Parent, Grade 7' },
    { quote: 'Teachers know every student well and challenge us in a supportive, inspiring environment.', name: 'Ethan L.', role: 'Student, Grade 11' },
    { quote: 'The college counseling and character education at Greenfield are truly exceptional.', name: 'Marina K.', role: 'Parent, Grade 12' },
  ],
}: Partial<TestimonialsCarouselProps>) {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((p) => (p - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((p) => (p + 1) % testimonials.length)

  return (
    <section id="testimonials" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <Card className="rounded-xl border border-border bg-card shadow-sm">
          <CardContent className="p-8 text-center">
            <Quote className="mx-auto h-8 w-8 text-[#FFC857]" />
            <p className="mt-4 text-lg font-medium text-foreground/90 md:text-xl">{testimonials[index]?.quote || ''}</p>
            <p className="mt-6 font-semibold">{testimonials[index]?.name || ''}</p>
            <p className="text-sm text-muted-foreground">{testimonials[index]?.role || ''}</p>

            <div className="mt-6 flex items-center justify-center gap-2">
              <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
