"use client";

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface Faculty {
  name: string
  role: string
  credentials: string
  bio: string
  specialties: string[]
  imageSrc: string
}

interface FacultyProfileCardsProps {
  faculty?: Faculty[]
}

export default function FacultyProfileCards({
  faculty = [
    {
      name: 'Dr. Maya Thompson',
      role: 'Head of STEM',
      credentials: 'PhD, Educational Technology',
      bio: 'Leads inquiry-driven STEM curriculum with a focus on real-world engineering challenges.',
      specialties: ['Robotics', 'Design Thinking', 'STEM Mentorship'],
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg',
    },
    {
      name: 'Mr. Daniel Reyes',
      role: 'Director of Arts',
      credentials: 'MFA, Fine Arts',
      bio: 'Builds expressive arts programs that blend visual storytelling, performance, and digital media.',
      specialties: ['Visual Arts', 'Theater', 'Creative Portfolio'],
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg',
    },
    {
      name: 'Ms. Alina Brooks',
      role: 'Upper School Humanities',
      credentials: 'MA, Comparative Literature',
      bio: 'Empowers students to think critically and communicate with confidence in a global context.',
      specialties: ['Literature', 'Debate', 'Civic Leadership'],
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg',
    },
  ],
}: Partial<FacultyProfileCardsProps>) {
  return (
    <section id="faculty" className="bg-muted/30 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-3">
        {faculty.map((member) => (
          <Card key={member.name} className="rounded-xl border border-border bg-card shadow-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <Avatar className="h-14 w-14">
                  <AvatarImage src={member.imageSrc} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map((n) => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-[#3A56C5]">{member.role}</p>
                </div>
              </div>
              <p className="text-sm font-medium">{member.credentials}</p>
              <p className="mt-2 text-sm text-foreground/80">{member.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {member.specialties.map((s) => (
                  <Badge key={s} variant="secondary" className="rounded-full">{s}</Badge>
                ))}
              </div>
              <Image src={member.imageSrc} alt={member.name} width={600} height={400} className="mt-4 rounded-lg object-cover" unoptimized />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
