"use client";

import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title?: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({
  title = 'Section Title',
  subtitle = 'Section subtitle goes here.',
  centered = true,
  className = '',
}: Partial<SectionHeaderProps>) {
  return (
    <div className={cn('mb-10 space-y-3 md:mb-12', centered && 'text-center', className)}>
      <h2 className="text-3xl font-extrabold text-[#3A56C5] md:text-4xl">{title}</h2>
      <p className={cn('text-foreground/80', centered && 'mx-auto max-w-2xl')}>{subtitle}</p>
    </div>
  )
}
