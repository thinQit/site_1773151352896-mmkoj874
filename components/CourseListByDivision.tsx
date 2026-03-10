"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Division {
  name: string
  grades: string
  courses: string[]
}

interface CourseListByDivisionProps {
  divisions?: Division[]
}

export default function CourseListByDivision({
  divisions = [
    { name: 'Lower School', grades: 'K-5', courses: ['Foundations in Literacy', 'Hands-on STEM Discovery', 'Visual Arts Studio', 'Social Emotional Learning'] },
    { name: 'Middle School', grades: '6-8', courses: ['Pre-Algebra & Geometry', 'Life and Physical Sciences', 'Digital Media Arts', 'World Cultures'] },
    { name: 'Upper School', grades: '9-12', courses: ['AP Calculus & Statistics', 'Engineering Design', 'Honors Literature', 'College Prep Seminar'] },
  ],
}: Partial<CourseListByDivisionProps>) {
  return (
    <section className="bg-muted/30 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {divisions.map((division) => (
            <Card key={division.name} className="rounded-xl border border-border bg-card shadow-sm">
              <CardHeader>
                <Badge className="w-fit rounded-full bg-[#3A56C5] text-white hover:bg-[#3A56C5]">{division.grades}</Badge>
                <CardTitle className="mt-2">{division.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {division.courses.map((course) => (
                    <li key={course} className="rounded-lg bg-muted/50 px-3 py-2">{course}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
