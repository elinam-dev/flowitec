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
'/gallery/gallery9.jpg',
'/gallery/gallery10.jpg',
'/gallery/gallery11.jpg',
'/gallery/gallery12.jpg',
'/gallery/gallery13.jpg',
'/gallery/gallery15.jpeg',
'/gallery/gallery16.jpeg',
'/gallery/gallery17.jpeg',
'/gallery/gallery18.jpeg',
'/gallery/gallery19.jpeg',
'/gallery/gallery21.jpeg',
'/gallery/gallery23.jpeg',
'/gallery/gallery24.jpeg',
'/gallery/gallery25.jpeg',
'/gallery/gallery26.jpeg'
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
            src="/references-hero.jpg"
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

      {/* Filters */}
      <section className="py-8 bg-background border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Filter Orders:</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Industry</label>
                <select
                  value={filterIndustry}
                  onChange={(e) => setFilterIndustry(e.target.value)}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {industries.map(ind => (
                    <option key={ind} value={ind}>
                      {ind === 'all' ? 'All Industries' : ind.replace('-', ' ')}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Year</label>
                <select
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year === 'all' ? 'All Years' : year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="mb-6 text-muted-foreground">
            Showing {filteredProjects.length} order{filteredProjects.length !== 1 ? 's' : ''}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority={true}
                      loading="eager"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags?.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-sm text-muted-foreground mb-2">
                      {project.client} • {project.year}
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">
                      {project.location}
                    </div>
                    <div className="text-primary font-semibold">
                      {project.kpi}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground mb-4">No orders match your filters</p>
              <button
                onClick={() => {
                  setFilterIndustry('all');
                  setFilterYear('all');
                }}
                className="btn primary"
              >
                Clear Filters
              </button>
            </div>
          )}
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
                  poster="/special-moments/breast-cancer-poster.jpg"
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

            {/* Moment 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-64">
                <Image
                  src="/special-moments/moment2.jpeg"
                  alt="Special Moment 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Client Partnership</h3>
                <p className="text-muted-foreground mb-3">
                  Strengthening relationships with our valued clients through successful project completions and ongoing support.
                </p>
                <div className="text-sm text-primary font-medium">February 2024</div>
              </div>
            </div>

            {/* Moment 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-64">
                <Image
                  src="/special-moments/moment3.jpeg"
                  alt="Special Moment 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Innovation Milestone</h3>
                <p className="text-muted-foreground mb-3">
                  Reaching new heights in technological advancement and engineering solutions for our industrial partners.
                </p>
                <div className="text-sm text-primary font-medium">January 2024</div>
              </div>
            </div>

            {/* Moment 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-64">
                <Image
                  src="/special-moments/moment4.jpeg"
                  alt="Special Moment 4"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
                <p className="text-muted-foreground mb-3">
                  Making a positive difference in local communities through our sustainable engineering solutions and social initiatives.
                </p>
                <div className="text-sm text-primary font-medium">December 2023</div>
              </div>
            </div>

            {/* Moment 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-64">
                <Image
                  src="/special-moments/moment5.jpeg"
                  alt="Special Moment 5"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Training Excellence</h3>
                <p className="text-muted-foreground mb-3">
                  Empowering our team through continuous learning and professional development programs.
                </p>
                <div className="text-sm text-primary font-medium">November 2023</div>
              </div>
            </div>

            {/* Moment 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-64">
                <Image
                  src="/special-moments/moment6.jpeg"
                  alt="Special Moment 6"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Success</h3>
                <p className="text-muted-foreground mb-3">
                  Celebrating the successful completion of major infrastructure projects across Africa.
                </p>
                <div className="text-sm text-primary font-medium">October 2023</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galaxy of Our Customers */}
      <section className="py-20 bg-muted/30">
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
              'adamus.jpg', 'asanko.jpg', 'asante.jpg', 'bua group.jpg', 'cargill.jpg', 'carmeuse.jpg',
              'cenpower.jpg', 'cimaf.jpg', 'dangote.jpg', 'gbfoods.jpg', 'ghacem.jpg', 'goldenexotics.jpg',
              'goldenstar.jpg', 'goldfields.jpg', 'iwad.jpg', 'kasapreko.jpg', 'Newmont.jpg', 'olam.jpg',
              'promasidor.jpg', 'quantum.jpg', 'safe.jpg', 'sbc.jpg', 'sunbird.jpg', 'taqa.jpg',
              'tema.jpg', 'uac.jpg', 'valco.jpg', 'vana.jpg', 'volta.jpg', 'wilmar.jpg'
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
              const isCimaf = logo === 'cimaf.jpg';
              const isOlam = logo === 'olam.jpg';
              const isPromasidor = logo === 'promasidor.jpg';
              const isQuantum = logo === 'quantum.jpg';
              const isSafe = logo === 'safe.jpg';
              const isUac = logo === 'uac.jpg';
              const isValco = logo === 'valco.jpg';
              const isWilmar = logo === 'wilmar.jpg';
              const isTema = logo === 'tema.jpg';
              const needsLargerSize = isAsante || isCarmeuse;
              
              return (
                <div key={index} className={`p-4 rounded-lg hover:shadow-lg transition-all flex items-center h-32 bg-transparent overflow-hidden justify-center`}>
                  <Image
                    src={`/clients/${logo}?v=3`}
                    alt={`${logo.replace('.jpg', '').replace('.jpeg', '').replace('.png', '')} logo`}
                    width={needsLargerSize ? 280 : 200}
                    height={needsLargerSize ? 140 : 100}
                    className={`object-contain max-w-full max-h-full ${needsLargerSize ? 'scale-[2.5]' : ''} ${isAsanko ? 'scale-75 mix-blend-multiply' : ''} ${isCargill ? 'scale-[2] mix-blend-multiply' : ''} ${isAdamus ? 'scale-[2] mix-blend-multiply' : ''} ${isCimaf ? 'scale-[2] mix-blend-multiply' : ''} ${isGbfoods ? 'scale-125' : ''} ${isGoldenstar ? 'scale-[1.75]' : ''} ${isGoldfields ? 'scale-[1.5]' : ''} ${isIwad ? 'scale-125' : ''} ${isKasapreko ? 'scale-[2.5]' : ''} ${isOlam ? 'scale-[2]' : ''} ${isPromasidor ? 'scale-125' : ''} ${isQuantum ? 'scale-125' : ''} ${isSafe ? 'scale-150' : ''} ${isUac ? 'scale-[2]' : ''} ${isValco ? 'scale-125' : ''} ${isWilmar ? 'scale-150' : ''} ${isTema ? 'scale-125' : ''} ${(isAsante || isCarmeuse) ? 'mix-blend-multiply' : ''}`}
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