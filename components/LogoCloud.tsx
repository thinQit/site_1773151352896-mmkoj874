"use client";

import Image from 'next/image';

interface LogoCloudProps {
  headline?: string;
  logos: { name: string; imageUrl: string }[];
}

export default function LogoCloud({
  headline = 'Trusted by accreditation and learning partners',
  logos = [
    { name: 'EduForward', imageUrl: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1771576866/site-images/corporate/12944978.jpg' },
    { name: 'STEM Alliance', imageUrl: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1771576866/site-images/corporate/12944978.jpg' },
    { name: 'Future Scholars', imageUrl: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1771576866/site-images/corporate/12944978.jpg' },
    { name: 'Learning Impact', imageUrl: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1771576866/site-images/corporate/12944978.jpg' },
  ],
}: Partial<LogoCloudProps>) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        {headline && (
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">{headline}</p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map(function (logo, i) {
            return (
              <Image
                key={i}
                src={logo.imageUrl}
                alt={logo.name}
                width={120}
                height={40}
                className="h-8 max-w-[120px] object-contain opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:h-10"
                unoptimized
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
