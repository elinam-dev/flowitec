'use client';

import { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { CheckCircle, Award, Users, Globe, Target, Eye, Heart, Shield, Lightbulb, Handshake } from 'lucide-react';
import { IMAGES } from '@/lib/mockData';

const AboutContent = () => {
  const timeline = [
    { year: '2017', event: 'Founded (Flowitec was founded with the aim to serve Industries to reduce downtime and meet project deadlines)' },
    { year: '2022', event: 'Opening of the Ghana Office (It was official, Flowitec now had its first office in West Africa)' },
    { year: '2023', event: 'First Office Expansion (Outgrowing our first office we expanded  doubling our office and warehousing facilities)' },
    { year: '2024', event: 'Record Year of USD Turnover' },
    { year: '2024', event: 'Opening of the Nigeria Office' },
    { year: '2025', event: ' Opening of the Kenya Office (Flowitec Kenya is a valuable asset to our company as it allows expansion into new markets whilst better serving our customers in the East African region)' },
    { year: 'The Future', event: 'Today, we have footprints across Africa and a team of experienced professionals who are committed to providing our customers with the best possible service. Flowitec is a trusted partner to some of the world\'s largest companies, and we are proud to continue to grow and expand our operations.' }
  ];

  const coreValues = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical practices in all our dealings with clients, partners, and employees.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously seek new and better ways to deliver solutions, embracing technology and creative thinking to exceed expectations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality products and services, striving for excellence in everything we do.'
    },
    {
      icon: Handshake,
      title: 'Customer Focus',
      description: 'Our clients are at the heart of our business. We listen, understand, and deliver solutions tailored to their unique needs.'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'We believe in the power of collaboration, working together as a team and with our partners to achieve shared goals.'
    },
    {
      icon: Heart,
      title: 'Reliability',
      description: 'We stand behind our commitments, delivering on time, every time, and providing dependable support throughout the project lifecycle.'
    }
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
        className={`relative flex w-full ${
          align === 'left' ? 'justify-start pr-12' : 'justify-end pl-12'
        }`}
      >
        <div
          className={`
            w-[calc(50%-2rem)]
            transition-all duration-700 ease-out
            ${visible ? 'opacity-100 translate-x-0' : 'opacity-0'}
            ${!visible && align === 'left' ? '-translate-x-16' : ''}
            ${!visible && align === 'right' ? 'translate-x-16' : ''}
          `}
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-primary font-bold text-lg mb-2">
              {item.year}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {item.event}
            </p>
          </div>
        </div>

        {/* Dot */}
        <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10">
          <div
            className={`
              w-8 h-8 rounded-full bg-primary border-4 border-white shadow-lg
              transition-transform duration-500
              ${visible ? 'scale-100' : 'scale-0'}
            `}
          />
        </div>
      </div>
    );
  };

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management' },
    { name: 'ISO 14001:2015', description: 'Environmental Management' },
    { name: 'OHSAS 18001', description: 'Health & Safety' },
    { name: 'API Certified', description: 'American Petroleum Institute' }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[450px] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/about_image.jpg"
            alt="Flowitec - About Us"
            fill
            className="object-cover"
            priority
            quality={40}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container-custom h-full flex flex-col justify-center">
          <nav className="text-sm mb-4">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <span>About Us</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">About Flowitec</h1>
          <p className="text-xl max-w-2xl">Engineering Excellence Since 2017</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Here at Flowitec, we have been providing engineering and procurement solutions across West and East Africa. We supply not only the best possible products for Maintenance, Repair and Operational needs but for Project requirements as well, be it Expansion, Modification or a New Setup. However, this is not where it ends, not only are we a leading supplier of products but we offer unrivalled services from after-sales support, quick downtime and needs assessments, fast responses to tail-end spend and on-site support.</p>
              <p className="text-lg text-muted-foreground mb-4">
                We partner with world-renowned manufacturers to supply high-quality pumps, valves, electric motors, control systems, and related components for industries including mining, food and beverage,water mission to Africa and wastewater treatment, agriculture, petrochemical, power generation, and municipal infrastructure.</p>
              <p className="text-lg text-muted-foreground mb-4">
                Flowitec is a solution-driven engineering organization at its core. From the beginning, our focus has been on delivering practical, results-oriented solutions tailored to real operating conditions. We specialize in pump systems, rotating equipment, fluid control systems, and mechanical seals for industrial, water, mining, and marine-related applications.</p>
              <p className="text-lg text-muted-foreground mb-4">
                Solution runs through every part of our organization. We believe in immediate action, hands-on involvement, and getting to work without delay. No challenge is too complex, and no request is dismissed as unrealistic we approach every project with determination and find effective solutions.</p>
              <p className="text-lg text-muted-foreground mb-4">
                We understand our customers’ operations because we work closely with them. We value strong personal relationships, transparency, and the delivery of custom engineering solutions rather than one-size-fits-all approaches. Our clients expect quality, technical expertise, and a reliable partner who is honest, accountable, and committed to delivering on every promise.</p>
              <p className="text-lg text-muted-foreground mb-4">
                That is exactly what Flowitec stands for.
              </p>
              <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary mb-6">
                <p className="text-lg text-gray-700 italic">
                  "Our greatest asset, and one of the sources of our acclaimed recognition and reputation in the industry, is our skilled employees. Through a dynamic, research-driven and experienced team, we continue to deliver exceptional results for our clients."
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm text-muted-foreground">Orders</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/gallery/gallery18.jpeg"
                alt="Flowitec team"
                fill
                className="object-cover"
                quality={40}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide reliable, innovative engineering solutions that enhance operational efficiency and support sustainable development across Africa.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be Africa's leading provider of engineering and procurement solutions, recognized for excellence, innovation, and customer satisfaction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Integrity, innovation, excellence, customer focus, teamwork, and reliability guide everything we do.
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="journey" className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From our founding in 2017 to our expansion across Africa, discover the milestones that have shaped Flowitec.
            </p>
          </div>
          
          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 hidden md:block overflow-hidden">
              <div 
                className="w-full bg-primary transition-all duration-1000 ease-out"
                style={{
                  height: `${Math.min(100, (timeline.filter((_, i) => i <= timeline.findIndex((_, idx) => {
                    const element = document.querySelector(`[data-timeline-index="${idx}"]`);
                    if (!element) return false;
                    const rect = element.getBoundingClientRect();
                    return rect.top < window.innerHeight * 0.7;
                  }).length - 1) / timeline.length) * 100)}%`
                }}
              />
            </div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} data-timeline-index={index}>
                  <TimelineItem 
                    item={item} 
                    align={index % 2 === 0 ? 'left' : 'right'} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Quality & Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality is demonstrated through our certifications and adherence to international standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Partner with Flowitec for reliable engineering solutions that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
              Contact Us
            </a>
            <a href="/services" className="btn ghost border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  return <AboutContent />;
};

export default dynamic(() => Promise.resolve(AboutPage), {
  ssr: false
});