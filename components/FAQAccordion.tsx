'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  headline: string;
  subheadline?: string;
  items: FAQItem[];
}

export default function FAQAccordion({
  headline = 'Frequently asked questions',
  subheadline = 'Everything you need to know about admissions, schedules, and curriculum.',
  items = [
    {
      question: 'How do placement and admissions work?',
      answer:
        'We begin with a short diagnostic and parent consultation, then recommend the best class level and schedule.',
    },
    {
      question: 'Are classes online, in-person, or hybrid?',
      answer:
        'We offer flexible formats based on program type, including live online sessions and select in-person workshops.',
    },
    {
      question: 'How often do parents receive progress updates?',
      answer:
        'Parents receive monthly reports and can also schedule one-on-one mentor meetings for deeper feedback.',
    },
  ],
}: Partial<FAQAccordionProps>) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 space-y-4">
          {items.map(function (item, i) {
            var isOpen = openIndex === i;
            return (
              <div key={i} className="rounded-lg border bg-background">
                <button
                  className="flex w-full items-center justify-between p-5 text-left"
                  onClick={function () {
                    setOpenIndex(isOpen ? null : i);
                  }}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-foreground">{item.question}</span>
                  <span className={'text-muted-foreground transition-transform ' + (isOpen ? 'rotate-180' : '')}>
                    &#9660;
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
