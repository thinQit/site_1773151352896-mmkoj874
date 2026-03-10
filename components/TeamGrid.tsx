"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface TeamMember {
  name: string;
  title: string;
  imageUrl?: string;
  bio?: string;
}

interface TeamGridProps {
  headline: string;
  subheadline?: string;
  members: TeamMember[];
}

export default function TeamGrid({
  headline = 'Meet our instructors',
  subheadline = 'Experienced educators dedicated to helping every learner thrive.',
  members = [
    {
      name: 'Dr. Elena Morris',
      title: 'STEM Lead Instructor',
      imageUrl:
        'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg',
      bio: 'Specializes in inquiry-based science and middle school math acceleration.',
    },
    {
      name: 'James Liu',
      title: 'Language & Literacy Coach',
      imageUrl:
        'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577321/site-images/team-people/1181622.jpg',
      bio: 'Builds reading confidence through personalized fluency and writing workshops.',
    },
    {
      name: 'Priya Nair',
      title: 'Academic Mentor',
      imageUrl:
        'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg',
      bio: 'Guides learners with study skills, planning routines, and exam readiness.',
    },
    {
      name: 'Marcus Reid',
      title: 'Creative Arts Facilitator',
      imageUrl:
        'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg',
      bio: 'Integrates storytelling, design, and presentation into cross-disciplinary projects.',
    },
  ],
}: Partial<TeamGridProps>) {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map(function (member, i) {
            return (
              <Card key={i} className="overflow-hidden border-0 bg-background text-center shadow-md">
                {member.imageUrl && (
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={600}
                      height={600}
                      className="h-full w-full object-cover"
                      unoptimized
                    />
                  </div>
                )}
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary">{member.title}</p>
                  {member.bio && <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
