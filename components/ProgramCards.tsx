"use client";

import { Atom, Palette, BookOpen } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Program {
  title: string
  icon: 'STEM' | 'Arts' | 'Humanities'
  highlights: string[]
}

interface ProgramCardsProps {
  programs?: Program[]
}

const iconMap = {
  STEM: Atom,
  Arts: Palette,
  Humanities: BookOpen,
}

export default function ProgramCards({
  programs = [
    { title: 'STEM Innovation Track', icon: 'STEM', highlights: ['Robotics & coding labs', 'Project-based science', 'Math Olympiad coaching'] },
    { title: 'Creative Arts Track', icon: 'Arts', highlights: ['Studio art & design', 'Music ensembles', 'Theater production'] },
    { title: 'Humanities Leadership Track', icon: 'Humanities', highlights: ['Debate & public speaking', 'World history seminars', 'Ethics and civic engagement'] },
  ],
}: Partial<ProgramCardsProps>) {
  return (
    <section id="programs" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program) => {
            const Icon = iconMap[program.icon] || BookOpen
            return (
              <Card key={program.title} className={cn('rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md')}>
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8E0F0] text-[#3A56C5]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {program.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FFC857]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
