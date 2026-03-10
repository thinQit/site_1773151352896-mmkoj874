'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  schoolName?: string
  logoText?: string
  links?: NavLink[]
  admissionsHref?: string
}

export default function Navbar({
  schoolName = 'Greenfield Academy',
  logoText = 'GA',
  links = [
    { label: 'Home', href: '#' },
    { label: 'Programs', href: '#programs' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Admissions', href: '#admissions' },
  ],
  admissionsHref = '#admissions',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3A56C5] text-white">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="font-bold text-[#3A56C5]">{schoolName}</p>
            <p className="text-xs text-muted-foreground">{logoText} • K-12 Excellence</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-semibold text-foreground/80 transition hover:text-[#3A56C5]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="rounded-lg bg-[#3A56C5] px-6 py-3 font-semibold text-white hover:bg-[#2f46a3]">
            <Link href={admissionsHref}>Apply for Admissions</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={cn('border-t bg-white md:hidden', open ? 'block' : 'hidden')}>
        <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-[#3A56C5]"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-3 w-full rounded-lg bg-[#3A56C5] font-semibold text-white hover:bg-[#2f46a3]">
            <Link href={admissionsHref}>Apply for Admissions</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
