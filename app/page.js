'use client';

import HeroVideo from '@/components/HeroVideo';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';
import { HERO_VIDEO_URL, HERO_POSTER_URL, STATS, SERVICES, PARTNERS, TESTIMONIALS } from '@/lib/mockData';
import { ALL_PRODUCTS } from '@/lib/productsData';
import { getHomeIndustries } from '@/lib/industriesData';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

// Lazy load heavy components
const LazySection = ({ children }) => children;

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroVideo videoUrl={HERO_VIDEO_URL} posterUrl={HERO_POSTER_URL} isLive={false}>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl animate-fade-in">
          Reliable Engineering & Procurement Solutions Across Africa
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          High-quality equipment, expert installations, and dependable after-sales support for industry and water systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/products" className="btn primary text-lg px-8 py-4">
            Our Products
          </Link>
          <Link href="/services" className="btn primary text-lg px-8 py-4">
            Our Services
          </Link>
          <Link href="/contact#contact-form" className="btn ghost text-lg px-8 py-4">
            Get a Quote
          </Link>
        </div>
      </HeroVideo>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.label}</div>
                <div className="text-sm md:text-base opacity-90">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <LazySection>
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                World-class pumps, valves, motors, and industrial equipment from leading manufacturers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ALL_PRODUCTS.slice(0, 6).map((product, index) => (
                <ProductCard key={product.id} product={product} priority={index < 6} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/products" className="btn primary">
                View All Products
              </Link>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Products Box */}
      <LazySection>
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="bg-white/10 rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Explore Our Complete Product Range</h2>
              <p className="text-lg mb-6 opacity-90">
                Discover our comprehensive selection of pumps, valves, motors, and industrial equipment from world-class manufacturers
              </p>
              <Link href="/products" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                View All Products
              </Link>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Services Preview */}
      <LazySection>
        <section className="py-20 bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive engineering and support services to keep your operations running smoothly
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.slice(0, 6).map((service) => (
                <div key={service.id} className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link href={`/services#${service.slug}`} className="text-primary font-medium hover:underline inline-flex items-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/services" className="btn primary">
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Industries Section */}
      <LazySection>
        <section className="py-20 bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized solutions for diverse industries across Africa
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getHomeIndustries().slice(0, 6).map((industry) => (
                <Link key={industry.id} href={`/industries/${industry.slug}`} className="group">
                  <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={industry.image}
                        alt={`Flowitec - ${industry.title}`}
                        fill
                        className="group-hover:scale-105 transition-transform duration-300 object-cover"
                        quality={40}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        priority={true}
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-4xl mb-2">{industry.icon}</div>
                        <h3 className="text-xl font-semibold">{industry.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {industry.short_description}
                      </p>
                      <div className="flex items-center text-primary font-medium group-hover:underline">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/industries" className="btn primary">
                View All Industries
              </Link>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Partners Section - Animated Scrolling */}
      <LazySection>
        <section className="py-16 bg-muted/30 overflow-hidden">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Partners</h2>
              <p className="text-muted-foreground">Trusted brands we represent</p>
            </div>
          </div>
          {/* Scrolling Partners */}
          <div className="relative">
            <div className="flex animate-scroll-left" style={{width: '200%'}}>
              {/* First set of logos */}
              {PARTNERS.map((partner) => (
                <div key={partner.id} className={`flex-shrink-0 mx-4 h-48 flex items-center justify-center hover:opacity-100 transition-opacity bg-white rounded-lg p-4 relative overflow-hidden group animate-[glow_3s_ease-in-out_infinite] ${partner.name === 'Franklin Electric' || partner.name === 'Fluimac' ? 'w-80' : partner.name === 'C.R.I. Pumps' ? 'w-72' : partner.name === 'SAER Elettropompe' ? 'w-50' : partner.name === 'Ecodepur' ? 'w-72' : 'w-64'}`}>
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className={`h-24 w-auto object-contain relative z-10 animate-[pulse_2s_ease-in-out_infinite] ${partner.name === 'Bray' ? 'scale-125' : partner.name === 'Meson Group' ? 'scale-125' : partner.name === 'Franklin Electric' ? 'scale-[3]' : partner.name === 'C.R.I. Pumps' ? 'scale-[3]' : partner.name === 'Fluimac' ? 'scale-[2.5]' : partner.name === 'Pioneer Pump' ? 'scale-[1.75]' : partner.name === 'Ecodepur' ? 'scale-[4]' : ''}`}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {PARTNERS.map((partner) => (
                <div key={`dup-${partner.id}`} className={`flex-shrink-0 mx-4 h-48 flex items-center justify-center hover:opacity-100 transition-opacity bg-white rounded-lg p-4 relative overflow-hidden group animate-[glow_3s_ease-in-out_infinite] ${partner.name === 'Franklin Electric' || partner.name === 'Fluimac' ? 'w-80' : partner.name === 'C.R.I. Pumps' ? 'w-72' : partner.name === 'SAER Elettropompe' ? 'w-50' : partner.name === 'Ecodepur' ? 'w-72' : 'w-64'}`}>
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className={`h-24 w-auto object-contain relative z-10 animate-[pulse_2s_ease-in-out_infinite] ${partner.name === 'Bray' ? 'scale-125' : partner.name === 'Meson Group' ? 'scale-125' : partner.name === 'Franklin Electric' ? 'scale-[3]' : partner.name === 'C.R.I. Pumps' ? 'scale-[3]' : partner.name === 'Fluimac' ? 'scale-[2.5]' : partner.name === 'Pioneer Pump' ? 'scale-[1.75]' : partner.name === 'Ecodepur' ? 'scale-[4]' : ''}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/partners" className="text-primary font-medium hover:underline">
              View All Partners <ArrowRight className="inline ml-2 w-4 h-4" />
            </Link>
          </div>
        </section>
      </LazySection>

      {/* Testimonials */}
      <LazySection>
        <section className="py-20 bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground">Trusted by leading companies across Africa</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="bg-card p-8 rounded-lg shadow-md">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and discover how Flowitec can support your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
              Contact Us
            </Link>
            <Link href="/references" className="btn ghost border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <dialog id="quote-modal" className="modal">
        <div className="modal-box max-w-md">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg mb-4">Get a Quote</h3>
          <QuoteForm />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}