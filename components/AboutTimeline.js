'use client';

import { useRef, useEffect, useState } from 'react';

const timeline = [
  { year: '2017', event: 'Founded — Flowitec was established with the aim to serve industries, reduce downtime, and meet project deadlines.' },
  { year: '2022', event: 'Opening of the Ghana Office — Flowitec officially opened its first office in West Africa.' },
  { year: '2023', event: 'First Office Expansion — Outgrowing our first office, we expanded, doubling our office and warehousing facilities.' },
  { year: '2024', event: 'Record Year of USD Turnover.' },
  { year: '2024', event: 'Opening of the Nigeria Office.' },
  { year: '2025', event: 'Opening of the Kenya Office — Flowitec Kenya allows expansion into new markets whilst better serving customers in the East African region.' },
  { year: 'The Future', event: 'Today, we have footprints across Africa and a team of experienced professionals committed to providing the best possible service. Flowitec is a trusted partner to some of the world\'s largest companies, and we are proud to continue growing.' },
];

const TimelineItem = ({ item, align }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative flex w-full ${align === 'left' ? 'justify-start pr-12' : 'justify-end pl-12'}`}
    >
      <div
        className={`w-[calc(50%-2rem)] transition-all duration-700 ease-out
          ${visible ? 'opacity-100 translate-x-0' : 'opacity-0'}
          ${!visible && align === 'left' ? '-translate-x-16' : ''}
          ${!visible && align === 'right' ? 'translate-x-16' : ''}`}
      >
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-primary font-bold text-lg mb-2">{item.year}</h3>
          <p className="text-muted-foreground leading-relaxed">{item.event}</p>
        </div>
      </div>
      <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10">
        <div className={`w-8 h-8 rounded-full bg-primary border-4 border-white shadow-lg transition-transform duration-500 ${visible ? 'scale-100' : 'scale-0'}`} />
      </div>
    </div>
  );
};

export default function AboutTimeline() {
  return (
    <section id="journey" className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From our founding in 2017 to our expansion across Africa, discover the milestones that have shaped Flowitec.
          </p>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 hidden md:block">
            <div className="w-full h-full bg-primary/40" />
          </div>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <TimelineItem key={index} item={item} align={index % 2 === 0 ? 'left' : 'right'} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
