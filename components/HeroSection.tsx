'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { WavyBackground } from '@/components/ui/backgrounds/wavy-background'
import { TextGenerateEffect } from '@/components/ui/text/text-generate-effect'

interface HeroSectionProps {
  title?: string
  subtitle?: string
  primaryHref?: string
  secondaryHref?: string
}

export default function HeroSection({
  title = 'Inspiring Bright Minds from Kindergarten to Grade 12',
  subtitle = 'Greenfield Academy combines academic excellence, creativity, and character-building to prepare students for a future of purpose.',
  primaryHref = '#admissions',
  secondaryHref = '#programs',
}: Partial<HeroSectionProps>) {
  return (
    <section className="relative overflow-hidden">
      <WavyBackground className="mx-auto w-full px-4 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="rounded-full bg-[#FFC857] px-4 py-1 text-black hover:bg-[#e8b548]">
            Premier Private School • K-12
          </Badge>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#3A56C5] md:text-6xl">
            <TextGenerateEffect words={title} />
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-foreground/80 md:text-lg">{subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {['100% College Counseling Support', '1:12 Student-Teacher Ratio', '35+ Clubs & Activities'].map((fact) => (
              <Badge key={fact} variant="secondary" className="rounded-full px-4 py-1">{fact}</Badge>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="rounded-lg bg-[#3A56C5] px-6 py-3 font-semibold text-white hover:bg-[#2f46a3]">
              <Link href={primaryHref}>Request Information</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-lg border-[#3A56C5] px-6 py-3 font-semibold text-[#3A56C5]">
              <Link href={secondaryHref}>Explore Programs</Link>
            </Button>
          </div>
        </div>
      </WavyBackground>
    </section>
  )
}
