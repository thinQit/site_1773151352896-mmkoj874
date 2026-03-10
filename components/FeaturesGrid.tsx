"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Brain, Globe, Shield, Sparkles, Star, Zap, Lightbulb, ShieldCheck, Trophy, Palette, Leaf, Users, Handshake, Monitor } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { Lightbulb, ShieldCheck, Trophy, Palette, Leaf, Users, Handshake, Monitor, 
  Sparkles,
  Globe,
  Shield,
  Star,
  Zap,
  BookOpen,
  Brain,
};

export default function FeaturesGrid({
  badge = 'Why families choose us',
  headline = 'Programs designed for confidence and curiosity',
  subheadline = 'From core academics to enrichment labs, every class blends structure, creativity, and hands-on discovery.',
  features = [
    {
      icon: 'BookOpen',
      title: 'Project-Based Learning',
      description: 'Students build real projects that connect classroom concepts to practical life skills.',
    },
    {
      icon: 'Brain',
      title: 'Adaptive Curriculum',
      description: 'Personalized pathways support each learner’s pace in math, literacy, and science.',
    },
    {
      icon: 'Globe',
      title: 'Global Perspective',
      description: 'Courses include cultural awareness and communication skills for a connected world.',
    },
  ],
}: Partial<FeaturesGridProps>) {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          {badge && (
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <Card key={index} className="border-0 bg-background shadow-md transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
