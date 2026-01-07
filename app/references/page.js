'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Download, Filter } from 'lucide-react';
const Gallery = [
'/gallery/gallery2.jpg',
'/gallery/gallery3.jpg',
'/gallery/gallery5.jpg',
'/gallery/gallery6.jpg',
'/gallery/gallery7.jpg',
'/gallery/gallery8.jpg',
'/gallery/gallery10.jpg',
'/gallery/gallery11.jpg',
'/gallery/gallery12.jpg',
'/gallery/gallery13.jpg',
'/gallery/gallery19.jpeg',
'/gallery/gallery21.jpeg'
];

const ReferencesPage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterIndustry, setFilterIndustry] = useState('all');
  const [filterYear, setFilterYear] = useState('all');

  useEffect(() => {
    // Fetch projects from API
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data.projects || []));
  }, []);

  const filteredProjects = projects.filter(project => {
    if (filterIndustry !== 'all' && !project.industries?.includes(filterIndustry)) {
      return false;
    }
    if (filterYear !== 'all' && project.year !== parseInt(filterYear)) {
      return false;
    }
    return true;
  });

  const industries = ['all', 'mining', 'municipal', 'water-treatment'];
  const years = ['all', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017'];

  return (
    <div>
      {/* Hero - References Image */}
      <section className="relative h-[450px] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/gallery/gallery10.jpg"
            alt="Flowitec Order References"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container-custom h-full flex flex-col justify-center">
          <nav className="text-sm mb-4 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <span>Order References</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Order References</h1>
          <p className="text-xl max-w-2xl">1000+ successful order deliveries across Ghana, Nigeria, and Kenya</p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project References</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing our expertise in delivering high-quality engineering solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-card rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/gallery/project1.jpg"
                  alt="CRI Firefighting Pumpset and Water Pressure Booster Pumpset"
                  fill
                  className="object-cover"
                  priority={true}
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                    Project Reference
                  </span>
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    CRI Firefighting Pumpset and Water Pressure Booster Pumpset
                  </h3>
                  <div className="text-muted-foreground mb-4">
                    Zoomlion Project, Accra
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Client</div>
                    <div className="font-semibold">Zoomlion Ghana Limited</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Location</div>
                    <div className="font-semibold">Accra, Ghana</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Solution</div>
                    <div className="font-semibold">Fire Safety & Water Pressure Systems</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-card rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/gallery/project2.jpeg"
                  alt="Supply, installation and commission of 15kw omron VFD control panel"
                  fill
                  className="object-cover"
                  priority={true}
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                    Project Reference
                  </span>
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    Supply, Installation and Commission of 15kw Omron VFD Control Panel
                  </h3>
                  <div className="text-muted-foreground mb-4">
                    Tomato Irrigation Project, Tease, Eastern Region
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Project Type</div>
                    <div className="font-semibold">Agricultural Irrigation</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Location</div>
                    <div className="font-semibold">Tease, Eastern Region, Ghana</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Solution</div>
                    <div className="font-semibold">VFD Control Panel & Automation</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-card rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/gallery/gallery13.jpg"
                  alt="100KVA and 50KVA Power Transformers for a Renewable Energy Project"
                  fill
                  className="object-cover"
                  priority={true}
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                    Project Reference
                  </span>
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    100KVA and 50KVA Power Transformers for a Renewable Energy Project
                  </h3>
                  <div className="text-muted-foreground mb-4">
                    Freetown, Sierra Leone
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Project Type</div>
                    <div className="font-semibold">Renewable Energy</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Location</div>
                    <div className="font-semibold">Freetown, Sierra Leone</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Solution</div>
                    <div className="font-semibold">Power Transformers Supply</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order References */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Order References</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Successful equipment deliveries and installations across various industries
            </p>
          </div>

          <div className="space-y-6">
            {/* Order 1 */}
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-48 md:h-auto">
                  <Image
                    src="/gallery/order1.jpeg"
                    alt="Supply, installation and commission of Cyanide dosing pump"
                    fill
                    className="object-cover"
                    priority={true}
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded mb-2">
                        Order Reference
                      </span>
                      <h3 className="text-lg font-bold mb-2">
                        Supply, Installation and Commission of Cyanide Dosing Pump
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Mine in Wassa West District, Western Region of Ghana
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-muted-foreground">Industry:</span>
                      <div className="font-semibold">Mining</div>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Location:</span>
                      <div className="font-semibold">Western Region, Ghana</div>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Solution:</span>
                      <div className="font-semibold">Chemical Dosing System</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order 2 */}
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-48 md:h-auto">
                  <Image
                    src="/gallery/gallery11.jpg"
                    alt="Supply of Various Electric Motors to a Mine"
                    fill
                    className="object-cover"
                    priority={true}
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded mb-2">
                        Order Reference
                      </span>
                      <h3 className="text-lg font-bold mb-2">
                        Supply of Various Electric Motors to a Mine
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Western Region
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-muted-foreground">Industry:</span>
                      <div className="font-semibold">Mining</div>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Location:</span>
                      <div className="font-semibold">Western Region, Ghana</div>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Solution:</span>
                      <div className="font-semibold">Electric Motors Supply</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Gallery */}
<section className="py-20 bg-background">
  <div className="container-custom">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      Order Gallery
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Gallery.map((src, index) => (
        <div
          key={index}
          className="relative h-56 overflow-hidden rounded-lg group"
        >
          <Image
            src={src}
            alt="Order reference"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority={true}
            loading="eager"
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Special Moments */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Moments</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating milestones, achievements, and memorable experiences with our team and clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Moment 1 - Breast Cancer Achievement */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-64">
                <video
                  className="w-full h-full object-cover"
                  controls
                >
                  <source src="/special-moments/breast-cancer.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">🎗️</div>
                  <h3 className="text-xl font-semibold">Breast Cancer Achievement</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Supporting breast cancer awareness and contributing to the fight against breast cancer through our Pink October initiative. Together, we stand strong in raising awareness and supporting those affected by this disease.
                </p>
                <div className="text-sm text-primary font-medium">October 2025</div>
              </div>
            </div>

            {/* Moment 2 - Employment Recognition */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/gallery/gallery15.jpeg"
                  alt="Employment Recognition"
                  fill
                  className="object-cover absolute inset-0"
                  style={{
                    animation: 'employmentFade 8s infinite 0s'
                  }}
                />
                <Image
                  src="/gallery/gallery16.jpeg"
                  alt="Employment Recognition"
                  fill
                  className="object-cover absolute inset-0"
                  style={{
                    animation: 'employmentFade 8s infinite 4s'
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">🏆</div>
                  <h3 className="text-xl font-semibold">Employment Recognition</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Celebrating outstanding employee achievements and recognizing exceptional contributions to our company's success. Honoring dedication, innovation, and excellence in our workplace.
                </p>
                <div className="text-sm text-primary font-medium">May 2025</div>
              </div>
            </div>

            {/* Moment 3 - Scenic Trip */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/gallery/scenic.jpeg"
                  alt="Scenic Trip"
                  fill
                  className="object-cover absolute inset-0"
                  style={{
                    animation: 'scenicFade 30s infinite 0s'
                  }}
                />
                <Image
                  src="/gallery/scenic2.jpeg"
                  alt="Scenic Trip"
                  fill
                  className="object-cover absolute inset-0"
                  style={{
                    animation: 'scenicFade 30s infinite 3s'
                  }}
                />
                <Image
                  src="/gallery/scenic3.jpeg"
                  alt="Scenic Trip"
                  fill
                  className="object-cover absolute inset-0"
                  style={{
                    animation: 'scenicFade 30s infinite 6s'
                  }}
                />
                <Image
                  src="/gallery/scenic4.jpeg"
                  alt="Scenic Trip"
                  fill
                  className="object-cover absolute inset-0"
                  style={{
                    animation: 'scenicFade 30s infinite 9s'
                  }}
                />
                <Image
                  src="/gallery/scenic5.jpeg"
                  alt="Scenic Trip"
                  fill
                  className="object-cover absolute inset-0"
                  style={{
                    animation: 'scenicFade 30s infinite 12s'
                  }}
                />
                <Image
                  src="/gallery/scenic6.jpeg"
                  alt="Scenic Trip"
                  fill
                  className="object-cover absolute inset-0"
                  style={{
                    animation: 'scenicFade 30s infinite 15s'
                  }}
                />
                <Image
                  src="/gallery/scenic7.jpeg"
                  alt="Scenic Trip"
                  fill
                  className="object-cover absolute inset-0"
                  style={{
                    animation: 'scenicFade 30s infinite 18s'
                  }}
                />
                <Image
                  src="/gallery/scenic8.jpeg"
                  alt="Scenic Trip"
                  fill
                  className="object-cover absolute inset-0"
                  style={{
                    animation: 'scenicFade 30s infinite 21s'
                  }}
                />
                <Image
                  src="/gallery/scenic9.jpeg"
                  alt="Scenic Trip"
                  fill
                  className="object-cover absolute inset-0"
                  style={{
                    animation: 'scenicFade 30s infinite 24s'
                  }}
                />
                <Image
                  src="/gallery/scenic10.jpeg"
                  alt="Scenic Trip"
                  fill
                  className="object-cover absolute inset-0"
                  style={{
                    animation: 'scenicFade 30s infinite 27s'
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">🏔️</div>
                  <h3 className="text-xl font-semibold">A scenic trip to Amedzofe Canopy Walk, Mount Gemi and the Volta Serene Hotel,Volta Region</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Exploring the beautiful landscapes of Ghana's Volta Region, including the breathtaking Amedzofe Canopy Walk and Mount Gemi, while enjoying the serene hospitality at Volta Serene Hotel.
                </p>
                <div className="text-sm text-primary font-medium">June 2025</div>
              </div>
            </div>

            {/* Moment 4 - End of Year Beach Party */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-64">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="/gallery/end_of_year.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">🏖️</div>
                  <h3 className="text-xl font-semibold">End of Year Beach Party</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Celebrating another successful year with our team at a beautiful beach setting. A perfect way to unwind, bond with colleagues, and reflect on our achievements while enjoying the sun, sand, and great company.
                </p>
                <div className="text-sm text-primary font-medium">December 2025</div>
              </div>
            </div>

            {/* Moment 6 - Staff Awards Ceremony */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/gallery/award.jpeg"
                  alt="Staff Awards Ceremony"
                  fill
                  className="object-cover object-top absolute inset-0"
                  style={{
                    animation: 'employmentFade 8s infinite 0s'
                  }}
                />
                <Image
                  src="/gallery/award2.jpeg"
                  alt="Staff Awards Ceremony"
                  fill
                  className="object-cover object-top absolute inset-0"
                  style={{
                    animation: 'employmentFade 8s infinite 4s'
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">🏅</div>
                  <h3 className="text-xl font-semibold">Staff Awards Ceremony</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Recognizing and celebrating the outstanding achievements, dedication, and exceptional performance of our team members. Honoring those who go above and beyond in their commitment to excellence and innovation.
                </p>
                <div className="text-sm text-primary font-medium">December 2025</div>
              </div>
            </div>

            {/* Moment 7 - Mid Year Team Bonding Nigeria */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-64">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="auto"
                >
                  <source src="/gallery/event3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">🤝</div>
                  <h3 className="text-xl font-semibold">Mid Year Team Bonding Nigeria</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Strengthening team bonds and fostering collaboration among our Nigeria team members through engaging activities and shared experiences. Building stronger relationships that enhance our workplace culture and productivity.
                </p>
                <div className="text-sm text-primary font-medium">September 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galaxy of Our Customers */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Galaxy of Our Customers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading organizations across Ghana, Nigeria, and Kenya
            </p>
          </div>
          
          {/* Key Clients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 items-center">
            {[
              'adamus.jpg', 'anglogold.jpeg', 'asanko.jpg', 'asante.jpg', 'beloxxi.jpeg', 'berger.jpeg', 'bua group.jpg', 'cargill.jpg', 'carmeuse.jpg',
              'cenpower.jpg', 'cimaf.jpeg', 'colgate.jpeg', 'dangote.jpg', 'evans.jpeg', 'flex.jpeg', 'gbfoods.jpg', 'ghacem.jpg', 'goldenexotics.jpg',
              'goldenstar.jpg', 'goldfields.jpg', 'gopdc.jpeg', 'intercontinental.jpeg', 'ITC.jpeg', 'iwad.jpg', 'kasapreko.jpg', 'midwestern.jpeg', 'neimeth.jpeg', 'Newmont.jpg', 'nigalex.jpeg', 'olam.jpg',
              'oriental.jpeg', 'promasidor.jpg', 'quantum.jpg', 'safe.jpg', 'sbc.jpg', 'sonia.jpeg', 'sunbird.jpeg', 'taqa.jpg',
              'tema.jpg', 'uac.jpg', 'valco.jpg', 'vana.jpg', 'volta.jpg', 'wilmar.jpg', 'zijin.jpeg'
            ].map((logo, index) => {
              const isAsante = logo === 'asante.jpg';
              const isCarmeuse = logo === 'carmeuse.jpg';
              const isAsanko = logo === 'asanko.jpg';
              const isCargill = logo === 'cargill.jpg';
              const isAdamus = logo === 'adamus.jpg';
              const isKasapreko = logo === 'kasapreko.jpg';
              const isIwad = logo === 'iwad.jpg';
              const isGoldfields = logo === 'goldfields.jpg';
              const isGoldenstar = logo === 'goldenstar.jpg';
              const isGbfoods = logo === 'gbfoods.jpg';
              const isCimaf = logo === 'cimaf.jpeg';
              const isOlam = logo === 'olam.jpg';
              const isPromasidor = logo === 'promasidor.jpg';
              const isQuantum = logo === 'quantum.jpg';
              const isSafe = logo === 'safe.jpg';
              const isUac = logo === 'uac.jpg';
              const isValco = logo === 'valco.jpg';
              const isWilmar = logo === 'wilmar.jpg';
              const isTema = logo === 'tema.jpg';
              const isAnglogold = logo === 'anglogold.jpeg';
              const isSunbird = logo === 'sunbird.jpeg';
              const isIntercontinental = logo === 'intercontinental.jpeg';
              const isEvans = logo === 'evans.jpeg';
              const needsLargerSize = isAsante || isCarmeuse;
              
              return (
                <div key={index} className={`p-4 rounded-lg hover:shadow-lg transition-all flex items-center h-32 bg-transparent overflow-hidden justify-center`}>
                  <Image
                    src={`/clients/${logo}?v=3`}
                    alt={`${logo.replace('.jpg', '').replace('.jpeg', '').replace('.png', '')} logo`}
                    width={needsLargerSize ? 280 : 200}
                    height={needsLargerSize ? 140 : 100}
                    className={`object-contain max-w-full max-h-full ${needsLargerSize ? 'scale-[2.5]' : ''} ${isAsanko ? 'scale-75 mix-blend-multiply' : ''} ${isCargill ? 'scale-[2] mix-blend-multiply' : ''} ${isAdamus ? 'scale-[2] mix-blend-multiply' : ''} ${isCimaf ? 'scale-[2] mix-blend-multiply' : ''} ${isGbfoods ? 'scale-125' : ''} ${isGoldenstar ? 'scale-[1.75]' : ''} ${isGoldfields ? 'scale-[1.5]' : ''} ${isIwad ? 'scale-125' : ''} ${isKasapreko ? 'scale-[2.5]' : ''} ${isOlam ? 'scale-[2]' : ''} ${isPromasidor ? 'scale-125' : ''} ${isQuantum ? 'scale-125' : ''} ${isSafe ? 'scale-150' : ''} ${isUac ? 'scale-[2]' : ''} ${isValco ? 'scale-125' : ''} ${isWilmar ? 'scale-150' : ''} ${isTema ? 'scale-125' : ''} ${isAnglogold ? 'scale-[3.5]' : ''} ${isSunbird ? 'scale-[2]' : ''} ${isIntercontinental ? 'scale-[2]' : ''} ${isEvans ? 'scale-[2]' : ''} ${(isAsante || isCarmeuse) ? 'mix-blend-multiply' : ''}`}
                  />
                </div>
              );
            })}
          </div>
          
          {/* Client Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-lg font-semibold mb-1">Active Clients</div>
              <div className="text-sm text-muted-foreground">Across 3 countries</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-lg font-semibold mb-1">Client Satisfaction</div>
              <div className="text-sm text-muted-foreground">Based on feedback surveys</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-lg font-semibold mb-1">Repeat Business</div>
              <div className="text-sm text-muted-foreground">Long-term partnerships</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-96 lg:h-auto">
                <Image
                  src={selectedProject.images[0]}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Client</div>
                    <div className="text-lg">{selectedProject.client}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Location</div>
                    <div className="text-lg">{selectedProject.location}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Year</div>
                    <div className="text-lg">{selectedProject.year}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Key Performance</div>
                    <div className="text-lg font-semibold text-primary">{selectedProject.kpi}</div>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Project Description</h3>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>
                <button className="btn primary w-full inline-flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Case Study (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferencesPage;