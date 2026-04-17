// Flowitec Industries Data - Sanity CMS Structure
import { IMAGES } from './mockData';

// Industry image placeholders based on image hints
const INDUSTRY_IMAGES = {
  'mining-minerals-metals': '/mining1.jpg',
  'mining-minerals-metals-hero': '/mining2.jpg',
  'agriculture-irrigation': '/agriculture-1.jpg',
  'agriculture-irrigation-hero': '/agriculture-2.jpg',
  'petrochemical-refinery': '/petrochemical-1.jpg',
  'petrochemical-refinery-hero': '/petrochemical-2.jpg',
  'food-and-beverage': '/food-beverage1.jpg',
  'food-and-beverage-hero': '/food-beverage-2.jpg',
  'power-plant': '/power-plant-1.jpg',
  'power-plant-hero': '/power-plant-2.jpg',
  'marine': '/marine-1.jpg',
  'marine-hero': '/marine-2.jpg',
  'paper-pulp-packaging': '/paper-pulp-1.jpg',
  'paper-pulp-packaging-hero': '/paper-pulp-2.jpg',
  'pharmaceuticals': '/pharma-1.jpg',
  'pharmaceuticals-hero': '/pharma-2.jpg',
  'cement-and-textile': '/cement-textile-1.jpg',
  'cement-and-textile-hero': '/cement-textile-2.jpg',
  'epc-and-epcm': '/power-plant-1.jpg'
};

export const INDUSTRIES_CMS = [
  {
    id: 'ind-1',
    title: 'Mining, Minerals & Metals',
    slug: 'mining-minerals-metals',
    image: '/mining-2.jpg',
    short_description: 'Heavy-duty fluid handling and processing solutions for mining, minerals and metals.',
    long_description: `
<div class="space-y-8">
  <div>
    <p class="text-lg leading-relaxed text-gray-700">Flowitec supplies robust pumps, valves and controls for mineral processing, tailings handling, slurry transport and dewatering. We design engineered pump systems and slurry-handling packages to handle abrasive, high-density slurries and heavy solids.</p>
  </div>

  <div>
    <p class="text-lg leading-relaxed text-gray-700">Our solutions include full O&M, spares and rapid-response field service to minimise downtime in critical mine operations. With decades of experience in African mining operations, we understand the unique challenges of remote locations, harsh conditions, and continuous operation demands.</p>
  </div>

  <div class="bg-gray-50 p-6 rounded-xl">
    <h3 class="text-2xl font-bold text-primary mb-4">Key Applications</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Tailings transport and disposal</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Slurry handling and dewatering</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Mine dewatering and drainage</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Mineral processing and flotation</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Acid mine drainage treatment</span>
      </li>
    </ul>
  </div>

  <div class="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
    <h3 class="text-2xl font-bold text-primary mb-4">Why Choose Flowitec for Mining</h3>
    <ul class="space-y-3">
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Abrasion-resistant materials and hard-facing</span>
      </li>
       <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Chemical resistant material and high reliability in high temperature, high pressure and critical service application</span>
      </li>
       <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Zero leakage seat design</span>
      </li>
       <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Custom material option available for varying applications</span>
      </li>
       <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Reduced downtime with high wear and tear resistant material</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">High-efficiency impeller designs</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">On-site installation and commissioning</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">24/7 emergency support</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Comprehensive spares holding</span>
      </li>
    </ul>
  </div>

  <div class="bg-white p-6 rounded-xl shadow-sm border">
    <h3 class="text-2xl font-bold text-primary mb-4">Our Expertise</h3>
    <p class="text-lg leading-relaxed text-gray-700">With years of hands-on experience across African mining sites, our engineers understand the demands of continuous operations in remote and challenging environments. We provide end-to-end support from equipment selection to installation, commissioning, and ongoing maintenance.</p>
  </div>
</div>
`,
    image: INDUSTRY_IMAGES['mining-minerals-metals'],
    heroImage: INDUSTRY_IMAGES['mining-minerals-metals-hero'],
    image_hint: 'miners onsite with slurry pumps, African mine site, heavy equipment',
    featured: true,
    show_on_home: true,
    recommended_products: [
      'slurry-pumps',
      'dewatering-pumps',
      'knife-gate-valves',
      '4-pole-surface-motor',
      'mechanical-seals'
    ],
    case_study_links: [
      { title: 'Kibali Gold Mine Dewatering Project', pdf_url: '/case-studies/kibali-mine.pdf' },
      { title: 'Tailings Management System - South Africa', pdf_url: '/case-studies/tailings-sa.pdf' }
    ],
    map_pin: { lat: -26.2041, lng: 28.0473 },
    icon: '⛏️',
    categories: ['Heavy Industry', 'Mining']
  },
  {
    id: 'ind-2',
    title: 'Agriculture & Irrigation',
    slug: 'agriculture-irrigation',
    short_description: 'Irrigation and water management systems for agriculture and irrigation projects.',
    long_description: `
<div class="space-y-8">
  <div>
    <p class="text-lg leading-relaxed text-gray-700">We provide energy-efficient pump sets, borehole packages, and irrigation control systems for farms and irrigation projects. Solutions include booster sets, submersible borehole motors, filtration, and durable valves to ensure reliable water delivery and long-term uptime for agricultural customers.</p>
  </div>

  <div>
    <p class="text-lg leading-relaxed text-gray-700">Our agricultural solutions are designed for the unique demands of African farming, including variable power supply, water scarcity, and the need for cost-effective, reliable equipment that can operate in remote locations.</p>
  </div>

  <div class="bg-gray-50 p-6 rounded-xl">
    <h3 class="text-2xl font-bold text-primary mb-4">Key Applications</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Center pivot and drip irrigation systems</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Borehole water extraction</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Farm water distribution</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Livestock watering systems</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Greenhouse irrigation</span>
      </li>
    </ul>
  </div>

  <div class="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
    <h3 class="text-2xl font-bold text-primary mb-4">Benefits</h3>
    <ul class="space-y-3">
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Energy-efficient pump selection</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Solar-compatible systems</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Automated irrigation controls</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Long-life submersible motors</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Local service and support</span>
      </li>
    </ul>
  </div>

  <div class="bg-white p-6 rounded-xl shadow-sm border">
    <h3 class="text-2xl font-bold text-primary mb-4">Our Commitment</h3>
    <p class="text-lg leading-relaxed text-gray-700">We understand the critical importance of water in agriculture. Our team works closely with farmers and agricultural enterprises to design irrigation solutions that maximize crop yields while minimizing water and energy consumption.</p>
  </div>
</div>
`,
    image: INDUSTRY_IMAGES['agriculture-irrigation'],
    heroImage: INDUSTRY_IMAGES['agriculture-irrigation-hero'],
    image_hint: 'irrigation system on farm with African farmers, pump set in field',
    featured: true,
    show_on_home: true,
    recommended_products: [
      'borehole-pumps',
      'water-filled-borehole-motor',
      'end-suction-pumps',
      'ball-valves',
      'pump-control-panels'
    ],
    case_study_links: [
      { title: 'Large Scale Irrigation Project - Kenya', pdf_url: '/case-studies/kenya-irrigation.pdf' }
    ],
    map_pin: { lat: -1.2921, lng: 36.8219 },
    icon: '🌾',
    categories: ['Agriculture', 'Water Management']
  },
  {
    id: 'ind-3',
    title: 'Petrochemical & Refinery',
    slug: 'petrochemical-refinery',
    short_description: 'Process pumps, valves and control systems for petrochemical and refinery plants.',
    long_description: `
<div class="space-y-8">
  <div>
    <p class="text-lg leading-relaxed text-gray-700">Critical process reliability for flammable and corrosive fluids. Flowitec supplies API-compliant pumps, control valves, safety relief valves, and explosion-rated electro-mechanical packages. We offer bespoke skid solutions, seals and mechanical integrity support to meet refinery and petrochemical regulations.</p>
  </div>

  <div>
    <p class="text-lg leading-relaxed text-gray-700">Our solutions are engineered for the stringent safety and reliability requirements of the oil, gas, and chemical processing industries. All equipment meets international standards including API, ASME, and local regulatory requirements.</p>
  </div>

  <div class="bg-gray-50 p-6 rounded-xl">
    <h3 class="text-2xl font-bold text-primary mb-4">Key Applications</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Crude oil transfer and processing</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Chemical injection and dosing</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Hydrocarbon pumping</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Tank farm operations</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Cooling water systems</span>
      </li>
    </ul>
  </div>

  <div class="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
    <h3 class="text-2xl font-bold text-primary mb-4">Technical Capabilities</h3>
    <ul class="space-y-3">
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">API 610 process pumps</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">ATEX/IECEx certified equipment</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">High-temperature applications</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Corrosion-resistant materials</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Hazardous area installations</span>
      </li>
    </ul>
  </div>

  <div class="bg-white p-6 rounded-xl shadow-sm border">
    <h3 class="text-2xl font-bold text-primary mb-4">Safety & Compliance</h3>
    <p class="text-lg leading-relaxed text-gray-700">Safety is paramount in petrochemical operations. Our engineering team ensures all installations comply with international safety standards and local regulations, providing documentation, training, and ongoing support for safe operations.</p>
  </div>
</div>
`,
    image: INDUSTRY_IMAGES['petrochemical-refinery'],
    heroImage: INDUSTRY_IMAGES['petrochemical-refinery-hero'],
    image_hint: 'refinery site with process piping, industrial pumps and operators',
    featured: true,
    show_on_home: true,
    recommended_products: [
      'end-suction-pumps',
      'safety-relief-valves',
      'plc-automation-panels',
      'mechanical-seals',
      '2-pole-surface-motor'
    ],
    case_study_links: [
      { title: 'Refinery Upgrade Project - Nigeria', pdf_url: '/case-studies/nigeria-refinery.pdf' }
    ],
    map_pin: { lat: 6.5244, lng: 3.3792 },
    icon: '⚗️',
    categories: ['Oil & Gas', 'Chemical Processing']
  },
  {
    id: 'ind-4',
    title: 'Food & Beverage',
    slug: 'food-and-beverage',
    short_description: 'Hygienic pumps, valves and mixers for the food and beverage sector.',
    long_description: `
<div class="space-y-8">
  <div>
    <p class="text-lg leading-relaxed text-gray-700">Flowitec supplies sanitary pumps, hygienic valves and process mixers designed for strict food-grade standards. We supply CIP-ready pump solutions, stainless process valves and mixers to improve product quality, reduce downtime and simplify maintenance for food & beverage production lines.</p>
  </div>

  <div>
    <p class="text-lg leading-relaxed text-gray-700">All our food-grade equipment meets international hygiene standards and is designed for easy cleaning, maintenance, and validation. We understand the critical importance of product safety and contamination prevention in food processing.</p>
  </div>

  <div class="bg-gray-50 p-6 rounded-xl">
    <h3 class="text-2xl font-bold text-primary mb-4">Key Applications</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Beverage production and bottling</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Dairy processing</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Brewing and distilling</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Food ingredient handling</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Clean-in-place (CIP) systems</span>
      </li>
    </ul>
  </div>

  <div class="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
    <h3 class="text-2xl font-bold text-primary mb-4">Hygienic Design Features</h3>
    <ul class="space-y-3">
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">FDA-approved materials</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">3-A sanitary standards compliance</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Easy disassembly for cleaning</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Smooth surface finishes</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Validation documentation</span>
      </li>
    </ul>
  </div>

  <div class="bg-white p-6 rounded-xl shadow-sm border">
    <h3 class="text-2xl font-bold text-primary mb-4">Quality Assurance</h3>
    <p class="text-lg leading-relaxed text-gray-700">Food safety is non-negotiable. Our hygienic equipment is designed, manufactured, and tested to meet the highest quality standards, ensuring your products remain safe and your processes compliant with food industry regulations.</p>
  </div>
</div>
`,
    image: INDUSTRY_IMAGES['food-and-beverage'],
    heroImage: INDUSTRY_IMAGES['food-and-beverage-hero'],
    image_hint: 'food processing plant, hygienic stainless pumps, black technician',
    featured: false,
    show_on_home: true,
    recommended_products: [
      'end-suction-pumps',
      'diaphragm-valves',
      'vfd-panels',
      'bearings'
    ],
    case_study_links: [],
    map_pin: { lat: 5.6037, lng: -0.1870 },
    icon: '🍽️',
    categories: ['Food Processing', 'Manufacturing']
  },
  {
    id: 'ind-5',
    title: 'Power Plant',
    slug: 'power-plant',
    short_description: 'Pumps, fans and control systems supporting power generation.',
    long_description: `
<div class="space-y-8">
  <div>
    <p class="text-lg leading-relaxed text-gray-700">Our solutions include cooling water booster sets, condensate and feedwater pumps, ash-handling pumps and control systems for thermal and hydro plants. Flowitec builds resilient systems tolerant to continuous duty cycles and offers service contracts to maintain high availability for power generation assets.</p>
  </div>

  <div>
    <p class="text-lg leading-relaxed text-gray-700">Power generation demands the highest reliability and efficiency. Our equipment is designed for 24/7 operation with minimal maintenance requirements and maximum uptime.</p>
  </div>

  <div class="bg-gray-50 p-6 rounded-xl">
    <h3 class="text-2xl font-bold text-primary mb-4">Key Applications</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Cooling water circulation</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Boiler feed water systems</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Condensate pumping</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Ash handling and disposal</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Water treatment systems</span>
      </li>
    </ul>
  </div>

  <div class="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
    <h3 class="text-2xl font-bold text-primary mb-4">Power Plant Solutions</h3>
    <ul class="space-y-3">
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">High-temperature pumps</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Multi-stage booster sets</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Redundant system design</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Predictive maintenance programs</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Rapid response spare parts</span>
      </li>
    </ul>
  </div>

  <div class="bg-white p-6 rounded-xl shadow-sm border">
    <h3 class="text-2xl font-bold text-primary mb-4">Reliability First</h3>
    <p class="text-lg leading-relaxed text-gray-700">Unplanned downtime in power generation is costly. Our engineering team designs systems with built-in redundancy, easy maintenance access, and comprehensive spare parts support to ensure your power plant operates at peak efficiency around the clock.</p>
  </div>
</div>
`,
    image: INDUSTRY_IMAGES['power-plant'],
    heroImage: INDUSTRY_IMAGES['power-plant-hero'],
    image_hint: 'power plant cooling systems, pump skid at power plant',
    featured: false,
    show_on_home: false,
    recommended_products: [
      'multistage-pumps',
      'plug-valves',
      'mcc-panels',
      'oil-filled-borehole-motor'
    ],
    case_study_links: [
      { title: 'Thermal Power Plant - Tanzania', pdf_url: '/case-studies/tanzania-power.pdf' }
    ],
    map_pin: { lat: -6.7924, lng: 39.2083 },
    icon: '⚡',
    categories: ['Power Generation', 'Utilities']
  },
  {
    id: 'ind-6',
    title: 'Marine',
    slug: 'marine',
    short_description: 'Marine pumps and control equipment for ports, ships and offshore installations.',
    long_description: `
<div class="space-y-8">
  <div>
    <p class="text-lg leading-relaxed text-gray-700">Flowitec supplies bilge, ballast, fire-fighting and cargo-handling pumps suitable for marine environments. Our marine solutions include corrosion-resistant materials, compliance to maritime standards and compact pump-control skids for vessel and port installations.</p>
  </div>

  <div>
    <p class="text-lg leading-relaxed text-gray-700">Marine applications require equipment that can withstand harsh saltwater environments, vibration, and space constraints while meeting international maritime safety standards.</p>
  </div>

  <div class="bg-gray-50 p-6 rounded-xl">
    <h3 class="text-2xl font-bold text-primary mb-4">Key Applications</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Bilge and ballast systems</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Fire-fighting and deluge systems</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Cargo transfer and handling</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Cooling water systems</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Deck wash and sanitation</span>
      </li>
    </ul>
  </div>

  <div class="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
    <h3 class="text-2xl font-bold text-primary mb-4">Marine Specifications</h3>
    <ul class="space-y-3">
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">DNV, Lloyd's, ABS approved</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Bronze and stainless construction</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Compact, space-saving design</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Vibration-resistant mounting</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">International spare parts support</span>
      </li>
    </ul>
  </div>

  <div class="bg-white p-6 rounded-xl shadow-sm border">
    <h3 class="text-2xl font-bold text-primary mb-4">Maritime Excellence</h3>
    <p class="text-lg leading-relaxed text-gray-700">Our marine equipment is built to withstand the toughest conditions at sea. From port installations to offshore platforms, we deliver reliable solutions that meet the highest maritime safety and performance standards.</p>
  </div>
</div>
`,
    image: INDUSTRY_IMAGES['marine'],
    heroImage: INDUSTRY_IMAGES['marine-hero'],
    image_hint: 'port pump systems, marine engineers, ship deck equipment',
    featured: false,
    show_on_home: false,
    recommended_products: [
      'end-suction-pumps',
      'dewatering-pumps',
      'check-valves',
      'star-delta-panels'
    ],
    case_study_links: [],
    map_pin: { lat: 6.5244, lng: 3.3792 },
    icon: '🚢',
    categories: ['Marine', 'Port Operations']
  },
  {
    id: 'ind-7',
    title: 'Paper, Pulp & Packaging',
    slug: 'paper-pulp-packaging',
    short_description: 'Robust process pumps and screening equipment for pulp, paper and packaging industries.',
    long_description: `
<div class="space-y-8">
  <div>
    <p class="text-lg leading-relaxed text-gray-700">We provide robust pump and valve systems for pulp transport, bleaching lines, and packaging water systems. Flowitec supplies high-efficiency pumps and heavy-duty valves to handle fibre and slurry-loading conditions common in pulp and paper plants.</p>
  </div>

  <div>
    <p class="text-lg leading-relaxed text-gray-700">The paper and pulp industry presents unique challenges including high-consistency stock handling, chemical dosing, and water recovery systems. Our solutions are designed for these demanding applications.</p>
  </div>

  <div class="bg-gray-50 p-6 rounded-xl">
    <h3 class="text-2xl font-bold text-primary mb-4">Key Applications</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Stock preparation and pulping</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Paper machine white water systems</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Chemical recovery and bleaching</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Effluent treatment</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Coating and sizing applications</span>
      </li>
    </ul>
  </div>

  <div class="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
    <h3 class="text-2xl font-bold text-primary mb-4">Industry-Specific Features</h3>
    <ul class="space-y-3">
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Heavy-duty construction</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Fibre-handling capability</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Chemical-resistant materials</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">High-efficiency hydraulics</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Easy maintenance access</span>
      </li>
    </ul>
  </div>

  <div class="bg-white p-6 rounded-xl shadow-sm border">
    <h3 class="text-2xl font-bold text-primary mb-4">Process Expertise</h3>
    <p class="text-lg leading-relaxed text-gray-700">Our engineering team understands the complexities of paper and pulp production. We work alongside mill operators to optimize pumping systems, reduce energy consumption, and extend equipment life in these demanding environments.</p>
  </div>
</div>
`,
    image: INDUSTRY_IMAGES['paper-pulp-packaging'],
    heroImage: INDUSTRY_IMAGES['paper-pulp-packaging-hero'],
    image_hint: 'paper mill pumps, industrial rollers, technicians',
    featured: false,
    show_on_home: false,
    recommended_products: [
      'sewage-pumps',
      'end-suction-pumps',
      'gate-valves',
      'mechanical-seals'
    ],
    case_study_links: [],
    map_pin: { lat: -26.2041, lng: 28.0473 },
    icon: '📦',
    categories: ['Manufacturing', 'Paper & Pulp']
  },
  {
    id: 'ind-8',
    title: 'Pharmaceuticals',
    slug: 'pharmaceuticals',
    short_description: 'Sterile pumps, hygienic valves and precise control for pharmaceutical manufacturing.',
    long_description: `
<div class="space-y-8">
  <div>
    <p class="text-lg leading-relaxed text-gray-700">Flowitec supports pharma process lines with hygienic pumps, precision dosing pumps, sanitary valves and clean-in-place (CIP) compatible mixers. We help maintain regulatory compliance and product integrity across formulation and packaging lines.</p>
  </div>

  <div>
    <p class="text-lg leading-relaxed text-gray-700">Pharmaceutical manufacturing demands the highest levels of cleanliness, precision, and documentation. All our pharma equipment meets GMP requirements and is supplied with full validation documentation.</p>
  </div>

  <div class="bg-gray-50 p-6 rounded-xl">
    <h3 class="text-2xl font-bold text-primary mb-4">Key Applications</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">API (Active Pharmaceutical Ingredient) processing</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Sterile product manufacturing</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Tablet coating and granulation</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Clean utilities (WFI, purified water)</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">CIP/SIP systems</span>
      </li>
    </ul>
  </div>

  <div class="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
    <h3 class="text-2xl font-bold text-primary mb-4">Pharmaceutical Compliance</h3>
    <ul class="space-y-3">
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">cGMP compliant design</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">FDA materials approval</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Complete traceability</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">IQ/OQ documentation</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Cleanroom assembly available</span>
      </li>
    </ul>
  </div>

  <div class="bg-white p-6 rounded-xl shadow-sm border">
    <h3 class="text-2xl font-bold text-primary mb-4">Quality Without Compromise</h3>
    <p class="text-lg leading-relaxed text-gray-700">In pharmaceutical manufacturing, quality is everything. Our equipment and services are designed to meet the stringent requirements of the industry, with full documentation and support for regulatory audits and validation protocols.</p>
  </div>
</div>
`,
    image: INDUSTRY_IMAGES['pharmaceuticals'],
    heroImage: INDUSTRY_IMAGES['pharmaceuticals-hero'],
    image_hint: 'pharmaceutical lab or sterile process line, technicians in PPE',
    featured: false,
    show_on_home: false,
    recommended_products: [
      'metering-pumps',
      'diaphragm-valves',
      'vfd-panels'
    ],
    case_study_links: [],
    map_pin: { lat: -1.2921, lng: 36.8219 },
    icon: '💊',
    categories: ['Pharmaceutical', 'Healthcare']
  },
  {
    id: 'ind-9',
    title: 'Cement & Textile',
    slug: 'cement-and-textile',
    short_description: 'Rugged pumping solutions for cement plants and textile processing.',
    long_description: `
<div class="space-y-8">
  <div>
    <p class="text-lg leading-relaxed text-gray-700">Our equipment handles abrasive slurries, dust-laden environments and high-temperature applications in cement and textile plants. Flowitec supplies reliable slurry pumps, heavy-duty valves and durable control panels designed for harsh industrial conditions.</p>
  </div>

  <div>
    <p class="text-lg leading-relaxed text-gray-700">Both cement and textile industries operate in challenging environments that demand robust, maintenance-friendly equipment capable of handling difficult fluids and continuous operation.</p>
  </div>

  <div class="bg-gray-50 p-6 rounded-xl">
    <h3 class="text-2xl font-bold text-primary mb-4">Key Applications</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Cement slurry handling</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Fly ash transport</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Textile dyeing and washing</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Process water circulation</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Effluent treatment</span>
      </li>
    </ul>
  </div>

  <div class="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
    <h3 class="text-2xl font-bold text-primary mb-4">Heavy-Duty Solutions</h3>
    <ul class="space-y-3">
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Abrasion-resistant construction</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">High-temperature capability</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Dust-protected motors</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Simplified maintenance</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Robust gland packing</span>
      </li>
    </ul>
  </div>

  <div class="bg-white p-6 rounded-xl shadow-sm border">
    <h3 class="text-2xl font-bold text-primary mb-4">Built Tough</h3>
    <p class="text-lg leading-relaxed text-gray-700">Cement plants and textile mills are demanding environments. Our heavy-duty equipment is engineered to withstand abrasive materials, high temperatures, and continuous operation while remaining easy to maintain and service.</p>
  </div>
</div>
`,
    image: INDUSTRY_IMAGES['cement-and-textile'],
    heroImage: INDUSTRY_IMAGES['cement-and-textile-hero'],
    image_hint: 'cement plant pumps or textile dyeing plant equipment',
    featured: false,
    show_on_home: false,
    recommended_products: [
      'slurry-pumps',
      'dewatering-pumps',
      'knife-gate-valves',
      'gland-packing'
    ],
    case_study_links: [],
    map_pin: { lat: 5.6037, lng: -0.1870 },
    icon: '🏭',
    categories: ['Manufacturing', 'Heavy Industry']
  },
  {
    id: 'ind-10',
    title: 'EPC & EPCM',
    slug: 'epc-and-epcm',
    short_description: 'End-to-end equipment supply and EPC/EPCM project support.',
    long_description: `
<div class="space-y-8">
  <div>
    <p class="text-lg leading-relaxed text-gray-700">Flowitec offers turnkey procurement and project delivery for large-scale EPC and EPCM projects, including bespoke pump skids, packaged pump stations, on-site installation supervision, and lifetime spares provisioning. We provide single-source responsibility for equipment, controls and commissioning.</p>
  </div>

  <div>
    <p class="text-lg leading-relaxed text-gray-700">As a trusted EPC partner, we manage the complete supply chain from design through commissioning, ensuring on-time, on-budget delivery with full technical and commercial guarantees.</p>
  </div>

  <div class="bg-gray-50 p-6 rounded-xl">
    <h3 class="text-2xl font-bold text-primary mb-4">EPC Services</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Equipment design and specification</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Procurement and logistics management</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Factory acceptance testing (FAT)</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Site installation and supervision</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Commissioning and performance testing</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
        <span class="text-gray-700">Training and documentation</span>
      </li>
    </ul>
  </div>

  <div class="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
    <h3 class="text-2xl font-bold text-primary mb-4">Project Capabilities</h3>
    <ul class="space-y-3">
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Single-source responsibility</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Integrated pump and control packages</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Custom skid design and fabrication</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Multi-discipline coordination</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Global sourcing network</span>
      </li>
      <li class="flex items-start gap-3">
        <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="text-gray-700">Comprehensive O&M support</span>
      </li>
    </ul>
  </div>

  <div class="bg-white p-6 rounded-xl shadow-sm border">
    <h3 class="text-2xl font-bold text-primary mb-4">Your Trusted EPC Partner</h3>
    <p class="text-lg leading-relaxed text-gray-700">From concept to commissioning, Flowitec delivers complete project solutions. Our experienced team manages every aspect of equipment supply, ensuring seamless integration, on-time delivery, and long-term operational success for your projects.</p>
  </div>
</div>
`,
    image: INDUSTRY_IMAGES['epc-and-epcm'],
    image_hint: 'construction site with pump skids, engineers and project managers',
    featured: false,
    show_on_home: true,
    recommended_products: [
      'dewatering-pumps',
      'plc-automation-panels',
      'ball-valves',
      'mechanical-seals'
    ],
    case_study_links: [
      { title: 'Water Treatment Plant EPC - Ghana', pdf_url: '/case-studies/ghana-epc.pdf' }
    ],
    map_pin: { lat: -26.2041, lng: 28.0473 },
    icon: '🏗️',
    categories: ['EPC', 'Project Management']
  }
];

// Helper function to get featured industries
export const getFeaturedIndustries = () => {
  return INDUSTRIES_CMS.filter(ind => ind.featured);
};

// Helper function to get industries for home page
export const getHomeIndustries = () => {
  return INDUSTRIES_CMS.filter(ind => ind.show_on_home);
};

// Helper function to get industry by slug
export const getIndustryBySlug = (slug) => {
  return INDUSTRIES_CMS.find(ind => ind.slug === slug);
};

// Helper function to get all unique categories (limit to main categories)
export const getIndustryCategories = () => {
  // Return only primary categories for filtering
  return [
    'Heavy Industry',
    'Agriculture',
    'Oil & Gas',
    'Manufacturing',
    'Power Generation',
    'Marine',
    'Healthcare',
    'EPC'
  ];
};
