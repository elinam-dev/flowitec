'use client';

import { useState, useEffect } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Gift, Coffee, Cake, Users, Wallet } from 'lucide-react';
import Link from 'next/link';
import { JOBS } from '@/lib/mockData';
import Image from 'next/image';

const CareersPage = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  useEffect(() => {
    // Filter active jobs
    let filtered = JOBS.filter(j => j.isActive);

    if (selectedDepartment !== 'all') {
      filtered = filtered.filter(j => j.department === selectedDepartment);
    }

    setJobs(filtered);
  }, [selectedDepartment]);

  const departments = ['all', 'Technical', 'Sales', 'Operations'];

  const benefits = [
    {
      icon: Wallet,
      title: 'Pension Scheme',
      description: 'We contribute to your future with a comprehensive pension scheme to help you plan for retirement.',
      image: '/benefits/pension-scheme.jpeg'
    },
    {
      icon: Heart,
      title: 'Wellness Day',
      description: 'Take time for yourself with dedicated wellness days to focus on your mental and physical health.',
      image: '/benefits/wellness-day.jpeg'
    },
    {
      icon: Coffee,
      title: 'Daily Office Lunch',
      description: 'Enjoy complimentary lunch every day, keeping you fueled and focused throughout the workday.',
      image: '/benefits/free-lunch.jpeg'
    },
    {
      icon: Cake,
      title: 'Birthdays Off',
      description: 'Celebrate your special day! We give you your birthday off to spend time with loved ones.',
      image: '/benefits/birthdays-off.jpeg'
    },
    {
      icon: Users,
      title: 'Regular Socials',
      description: 'Build connections with colleagues through regular team events, outings, and social gatherings.',
      image: '/benefits/regular-socials.jpeg'
    },
    {
      icon: Gift,
      title: 'Team Bonding',
      description: 'Participate in team building activities designed to strengthen relationships and boost morale.',
      image: '/benefits/team-bonding.jpeg'
    },
    {
      icon: Heart,
      title: 'Healthcare Benefits',
      description: 'Comprehensive healthcare coverage for you and your family, ensuring peace of mind and well-being.',
      image: '/benefits/healthcare-benefits.jpeg'
    }
  ];

  return (
    <div>
      {/* Hero Section - Career Image */}
      <section className="relative h-[500px] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/career-hero.jpg"
            alt="Join Flowitec Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container-custom h-full flex flex-col justify-center">
          <nav className="text-sm mb-4 text-white/90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <span>Careers</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
            Build your career with Africa&apos;s leading engineering solutions provider. 
            We&apos;re always looking for talented individuals to join our growing team.
          </p>
          <div>
            <a href="#openings" className="btn primary text-lg px-8 py-4">
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Us - Full Width Intro */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why Work at Flowitec?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Flowitec, we believe our people are our greatest asset. We foster a dynamic, 
              collaborative environment where innovation thrives and every team member has the 
              opportunity to make a real impact. Join us and be part of a company that&apos;s 
              shaping the future of industrial engineering across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When you join our team, you open doors to endless opportunities for career growth and personal development. Surrounded by ambitious, motivated, and intelligent individuals, you'll have the possibility to thrive and excel.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              If this resonates with you, don't hesitate to reach out and apply for a job today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden group relative h-64">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                  
                  {/* Content Overlay - Hidden by default, shown on hover */}
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                  
                  {/* Title visible without hover */}
                  <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold text-white drop-shadow-lg">{benefit.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Life at Flowitec */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Life at Flowitec</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Working at Flowitec means being part of a close-knit team that values collaboration, 
                innovation, and personal growth. We celebrate successes together and support each 
                other through challenges.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">✓</span>
                  <span className="text-muted-foreground">Work across Ghana, Nigeria, and Kenya</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">✓</span>
                  <span className="text-muted-foreground">Continuous learning and development opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">✓</span>
                  <span className="text-muted-foreground">Work with leading global brands and partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">✓</span>
                  <span className="text-muted-foreground">Make a real impact on Africa&apos;s industrial growth</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              {/* Life at Flowitec Image - Change this URL to your desired image */}
              <Image
                src="/gallery/gallery17.jpeg"
                alt="Life at Flowitec"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="openings" className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Current Openings</h2>
            <p className="text-lg text-muted-foreground">Find your perfect role and start your journey with us</p>
          </div>
          
          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedDepartment === dept
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white hover:bg-gray-50 shadow'
                }`}
              >
                {dept === 'all' ? 'All Departments' : dept}
              </button>
            ))}
          </div>

          {jobs.length > 0 ? (
            <div className="space-y-6 max-w-4xl mx-auto">
              {jobs.map(job => (
                <div key={job.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-primary">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold">{job.title}</h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-primary" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          {job.location}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{job.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Link
                        href={`/careers/${job.slug}`}
                        className="btn primary inline-flex items-center px-6 py-3"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No positions available</h3>
              <p className="text-muted-foreground mb-6">There are currently no openings in this department.</p>
              <button
                onClick={() => setSelectedDepartment('all')}
                className="btn primary"
              >
                View All Positions
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Application Process</h2>
            <p className="text-lg text-muted-foreground">Simple steps to join our team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center relative">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Find Your Role</h3>
              <p className="text-sm text-muted-foreground">Browse our open positions and find the perfect fit for your skills</p>
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/30"></div>
            </div>
            <div className="text-center relative">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Apply Online</h3>
              <p className="text-sm text-muted-foreground">Submit your CV and cover letter through our application form</p>
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/30"></div>
            </div>
            <div className="text-center relative">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Interview</h3>
              <p className="text-sm text-muted-foreground">Meet with our team to discuss the opportunity and your experience</p>
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/30"></div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Join Us</h3>
              <p className="text-sm text-muted-foreground">Welcome aboard! Start your exciting journey with Flowitec</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Don&apos;t See Your Role?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals. Send us your CV and we&apos;ll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hradmin@flowitec.com" className="btn bg-white text-primary hover:bg-gray-100 px-8 py-4">
              Send Your CV
            </a>
            <a href="tel:0247986652" className="btn ghost border-white text-white hover:bg-white hover:text-primary px-8 py-4">
              Call: 0247986652
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
