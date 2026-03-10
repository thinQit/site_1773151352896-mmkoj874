"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title?: string
  description?: string
  primaryHref?: string
  secondaryHref?: string
}

export default function CTASection({
  title = 'Ready to Discover Greenfield Academy?',
  description = 'Schedule a personal campus tour or request our admissions guide to learn how your child can thrive in our K-12 community.',
  primaryHref = '#tour',
  secondaryHref = '#admissions',
}: Partial<CTASectionProps>) {
  return (
    <section id="admissions" className="bg-[#3A56C5] py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
        <p className="inline-block rounded-full bg-[#FFC857] px-4 py-1 text-sm font-semibold text-black">Enrollment Open</p>
        <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/90">{description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild className="rounded-lg bg-[#FFC857] px-6 py-3 font-semibold text-black hover:bg-[#e8b548]">
            <Link href={primaryHref}>Book a Tour</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-lg border-white bg-transparent px-6 py-3 font-semibold text-white hover:bg-white hover:text-[#3A56C5]">
            <Link href={secondaryHref}>Request Info</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
