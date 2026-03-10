"use client";

import Link from 'next/link'
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

interface FooterProps {
  schoolName?: string
}

export default function Footer({ schoolName = 'Greenfield Academy' }: Partial<FooterProps>) {
  return (
    <footer className="bg-[#E8E0F0]/40">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-[#3A56C5]">{schoolName}</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              A premier private K-12 school focused on STEM, arts, and character development.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" />123 Learning Lane, Brookside, CA 94000</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" />(555) 209-1100</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" />admissions@greenfieldacademy.edu</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="#programs" className="hover:text-[#3A56C5]">Programs</Link></li>
              <li><Link href="#curriculum" className="hover:text-[#3A56C5]">Curriculum</Link></li>
              <li><Link href="#faculty" className="hover:text-[#3A56C5]">Faculty</Link></li>
              <li><Link href="#testimonials" className="hover:text-[#3A56C5]">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Admissions</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="#admissions" className="hover:text-[#3A56C5]">How to Apply</Link></li>
              <li><Link href="#tour" className="hover:text-[#3A56C5]">Schedule a Tour</Link></li>
              <li><Link href="#tuition" className="hover:text-[#3A56C5]">Tuition & Aid</Link></li>
              <li><Link href="#faq" className="hover:text-[#3A56C5]">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Connect</h4>
            <div className="mt-3 flex items-center gap-3">
              <Link href="#" className="rounded-lg bg-white p-2 hover:text-[#3A56C5]"><Facebook className="h-4 w-4" /></Link>
              <Link href="#" className="rounded-lg bg-white p-2 hover:text-[#3A56C5]"><Instagram className="h-4 w-4" /></Link>
              <Link href="#" className="rounded-lg bg-white p-2 hover:text-[#3A56C5]"><Linkedin className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        <div className="flex flex-col justify-between gap-3 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {schoolName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#3A56C5]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#3A56C5]">Terms of Use</Link>
            <Link href="#" className="hover:text-[#3A56C5]">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
