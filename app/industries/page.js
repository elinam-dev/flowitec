'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { INDUSTRIES_CMS } from '@/lib/industriesData';

const IndustriesPage = () => {
  const [industries, setIndustries] = useState(INDUSTRIES_CMS);
  const [featuredIndustries, setFeaturedIndustries] = useState(INDUSTRIES_CMS.filter(ind => ind.featured));
  const [categories] = useState(['Heavy Industry', 'Water & Environment', 'Agriculture & Food', 'Specialized']);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Data is already loaded from mockData
  }, []);

  useEffect(() => {
    // Auto-advance carousel
    if (featuredIndustries.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredIndustries.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [featuredIndustries.length]);

  const filteredIndustries = selectedCategory === 'all'
    ? industries
    : industries.filter(ind => {
        if (selectedCategory === 'Heavy Industry') {
          return ind.categories && ind.categories.includes('Heavy Industry');
        }
        if (selectedCategory === 'Water & Environment') {
          return ind.categories && ind.categories.includes('Water & Environment');
        }
        if (selectedCategory === 'Agriculture & Food') {
          return ind.categories && ind.categories.includes('Agriculture & Food');
        }
        if (selectedCategory === 'Specialized') {
          return ind.categories && ind.categories.includes('Specialized');
        }
        return true;
      });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredIndustries.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredIndustries.length) % featuredIndustries.length);
  };

  return (
    <div>
      {/* Featured Industries Carousel */}
      {featuredIndustries.length > 0 && (
        <section className="relative h-[600px] bg-gradient-to-r from-primary to-primary/80 overflow-hidden">
          {featuredIndustries.map((industry, index) => (
            <div
              key={industry.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover opacity-70"
              />
              <div className="relative h-full flex items-center">
                <div className="container-custom">
                  <div className="max-w-3xl">
                    <div className="text-6xl mb-4">{industry.icon}</div>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                      {industry.title}
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                      {industry.short_description}
                    </p>
                    <Link 
                      href={`/industries/${industry.slug}`}
                      className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 inline-flex items-center"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Carousel Controls */}
          {featuredIndustries.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {featuredIndustries.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </section>
      )}

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions for diverse industries across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map(industry => (
              <Link
                key={industry.id}
                href={`/industries/${industry.slug}`}
                className="group"
              >
                <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all h-full">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={`Flowitec - ${industry.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-4xl mb-2">{industry.icon}</div>
                      <h3 className="text-2xl font-semibold">{industry.title}</h3>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {industry.short_description}
                    </p>
                    
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {industry.categories ? industry.categories[0] : 'General'}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-primary font-medium group-hover:underline">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {industries.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">
                No industries found in this category
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="btn primary"
              >
                View All Industries
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Industries Choose Flowitec</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Industry Expertise</h3>
              <p className="text-muted-foreground">
                Deep understanding of sector-specific challenges and solutions
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
              <p className="text-muted-foreground">
                Tailored equipment and services for your unique requirements
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3">Local Presence</h3>
              <p className="text-muted-foreground">
                On-the-ground support across 3 African countries
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
              <p className="text-muted-foreground">
                500+ successful projects and satisfied clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Industry Needs?</h2>
          <p className="text-lg mb-8 opacity-90">
            Talk to our industry specialists about your specific requirements
          </p>
          <Link 
            href="/contact" 
            className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
