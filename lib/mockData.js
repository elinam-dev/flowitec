// Mock data for Flowitec MVP

export const HERO_VIDEO_URL = '/hero-video.mp4';
export const HERO_POSTER_URL = '/mining-1.jpg';

export const IMAGES = {
  hero: '/mining-1.jpg',
  leadership: [
    '/mining-1.jpg',
    '/petrochemical-1.jpg',
    '/agriculture-1.jpg',
  ],
  industrial: [
    '/mining-1.jpg',
    '/petrochemical-1.jpg',
    '/agriculture-1.jpg',
    '/power-plant-1.jpg',
  ],
  field: [
    '/agriculture-1.jpg',
    '/mining-2.jpg',
    '/petrochemical-2.jpg',
  ]
};

export const STATS = [
  { label: '10+ Years', value: 'Experience' },
  { label: '3 Countries', value: 'Across Africa' },
  { label: '1000+', value: 'Product Deliveries Completed' },
  { label: '24/7', value: 'Support Available' }
];

import { ALL_PRODUCTS } from './productsData';

export const PRODUCTS = ALL_PRODUCTS;

export const INDUSTRIES = [
  {
    id: 'mining',
    title: 'Mining',
    slug: 'mining',
    icon: '⛏️',
    image: '/mining-1.jpg',
    short_description: 'Comprehensive engineering solutions for mining operations across Africa.',
    overview: 'Comprehensive engineering solutions for mining operations across Africa.',
    challenges: [
      'Abrasive and corrosive materials',
      'Remote locations with limited infrastructure',
      'High-pressure and high-volume requirements',
      'Continuous operation demands'
    ],
    solutions: 'Flowitec provides specialized pumps, valves, and control systems designed for the harsh conditions of mining operations.',
    products: ['slurry-pumps', 'submersible-pumps', 'gate-valves']
  },
  {
    id: 'agriculture',
    title: 'Agriculture',
    slug: 'agriculture',
    icon: '🌾',
    image: '/agriculture-1.jpg',
    short_description: 'Reliable irrigation and water management solutions for agricultural productivity.',
    overview: 'Reliable irrigation and water management solutions for agricultural productivity.',
    challenges: [
      'Water scarcity and efficient usage',
      'Variable power supply',
      'Cost-effective solutions',
      'Seasonal demand fluctuations'
    ],
    solutions: 'Our agricultural solutions include efficient pumps, solar-powered systems, and smart irrigation controls.',
    products: ['submersible-pumps', 'centrifugal-pumps', 'ball-valves']
  },
  {
    id: 'water-treatment',
    title: 'Water Treatment',
    slug: 'water-treatment',
    icon: '💧',
    image: '/power-plant-1.jpg',
    short_description: 'Advanced equipment for municipal and industrial water treatment facilities.',
    overview: 'Advanced equipment for municipal and industrial water treatment facilities.',
    challenges: [
      'Regulatory compliance',
      'Chemical compatibility',
      'Energy efficiency',
      'Reliability and uptime'
    ],
    solutions: 'Flowitec offers complete water treatment solutions including pumps, valves, mixers, and control panels.',
    products: ['centrifugal-pumps', 'gate-valves', 'electric-motors']
  },
  {
    id: 'petrochemical',
    title: 'Petrochemical',
    slug: 'petrochemical',
    icon: '⚗️',
    image: '/petrochemical-1.jpg',
    short_description: 'Specialized equipment for oil, gas, and chemical processing industries.',
    overview: 'Specialized equipment for oil, gas, and chemical processing industries.',
    challenges: [
      'Hazardous environments',
      'High temperatures and pressures',
      'Corrosive chemicals',
      'Strict safety standards'
    ],
    solutions: 'We provide explosion-proof equipment, chemical-resistant materials, and certified solutions.',
    products: ['ball-valves', 'electric-motors']
  },
  {
    id: 'municipal',
    title: 'Municipal',
    slug: 'municipal',
    icon: '🏛️',
    image: '/power-plant-2.jpg',
    short_description: 'Infrastructure solutions for cities and municipalities across Africa.',
    overview: 'Infrastructure solutions for cities and municipalities across Africa.',
    challenges: [
      'Large-scale infrastructure',
      'Public health and safety',
      'Budget constraints',
      'Long-term reliability'
    ],
    solutions: 'Complete turnkey solutions for water supply, sewage treatment, and municipal infrastructure.',
    products: ['submersible-pumps', 'gate-valves', 'centrifugal-pumps']
  }
];

export const APPLICATIONS = [
  {
    id: 'clean-water',
    title: 'Clean Water',
    slug: 'clean-water',
    coverImage: '/images/applications/cover/cleanwater.jpg',
    heroImage: '/images/applications/hero/clean_water2.jpg',
    overview: 'Water supply solutions for domestic, industrial, and agricultural use.',
    challenges: ['Water quality', 'Distribution efficiency', 'Pressure management'],
    products: ['centrifugal-pumps', 'submersible-pumps', 'ball-valves']
  },
  {
    id: 'waste-water',
    title: 'Waste Water',
    slug: 'waste-water',
    coverImage: '/images/applications/cover/wastewater.jpeg',
    heroImage: '/images/applications/hero/waste_water2.jpg' ,
    overview: 'Sewage and wastewater treatment equipment and systems.',
    challenges: ['Solids handling', 'Odor control', 'Treatment efficiency'],
    products: ['centrifugal-pumps', 'gate-valves']
  },
  {
    id: 'slurry',
    title: 'Slurry',
    slug: 'slurry',
    coverImage: '/images/applications/cover/slurry.jpg',
    heroImage: '/images/applications/hero/slurry2.jpg',
    overview: 'Heavy-duty equipment for abrasive slurry handling in mining.',
    challenges: ['Abrasive wear', 'High solids content', 'Continuous operation'],
    products: ['slurry-pumps', 'gate-valves']
  },
  {
    id: 'chemical',
    title: 'Chemical',
    slug: 'chemical',
    coverImage: '/images/applications/cover/chemical.jpg',
    heroImage: '/images/applications/hero/chemical2.jpg',
    overview: 'Chemical-resistant equipment for process industries.',
    challenges: ['Corrosion resistance', 'Safety compliance', 'Precise control'],
    products: ['ball-valves', 'electric-motors']
  },
  {
    id: 'mine-water',
    title: 'Mine Water',
    slug: 'mine-water',
    coverImage: '/images/applications/cover/mine.jpg',
    heroImage: '/images/applications/hero/mine2.jpg',
    overview: 'Dewatering and water management for mining operations.',
    challenges: ['Abrasive particles', 'High volumes', 'Remote locations'],
    products: ['slurry-pumps', 'submersible-pumps']
  },
  {
    id: 'viscous-fluid',
    title: 'Viscous Fluid',
    slug: 'viscous-fluid',
    coverImage: '/images/applications/cover/viscous.jpg',
    heroImage: '/images/applications/hero/viscous2.jpg',
    overview: 'Specialized pumps for high-viscosity fluids and oils.',
    challenges: ['Viscosity variations', 'Temperature sensitivity', 'Seal integrity'],
    products: ['centrifugal-pumps']
  },
  {
    id: 'fuel',
    title: 'Fuel - Diesel, Petrol',
    slug: 'fuel',
    coverImage: '/images/applications/cover/fuel.jpeg',
    heroImage: '/images/applications/hero/fuel2.jpeg',
    overview: 'Safe and reliable fuel handling equipment for diesel, petrol, and other petroleum products in industrial and commercial applications.',
    challenges: ['Fire safety compliance', 'Vapor control', 'Static electricity prevention', 'Leak detection', 'Environmental regulations'],
    products: ['centrifugal-pumps', 'ball-valves', 'electric-motors']
  }
];

export const SERVICES = [
  {
    id: 'maintenance',
    title: 'Maintenance',
    slug: 'maintenance',
    description: 'Preventive and corrective maintenance services to maximize equipment uptime.',
    icon: '🔧'
  },
  {
    id: 'installation',
    title: 'Installation & Commissioning',
    slug: 'installation',
    description: 'Professional installation and commissioning services for all equipment.',
    icon: '⚙️'
  },
  {
    id: 'diagnostics',
    title: 'Diagnostics',
    slug: 'diagnostics',
    description: 'Advanced diagnostic services to identify and resolve issues quickly.',
    icon: '🔍'
  },
  {
    id: 'spares',
    title: 'Spare Parts',
    slug: 'spares',
    description: 'Genuine spare parts with fast delivery across Africa.',
    icon: '📦'
  },
  {
    id: 'training',
    title: 'Technical Training',
    slug: 'training',
    description: 'Comprehensive training programs for operators and maintenance teams.',
    icon: '📚'
  },
  {
    id: 'rental',
    title: 'Equipment Rental',
    slug: 'rental',
    description: 'Short-term and long-term equipment rental solutions.',
    icon: '🏗️'
  }
];

export const PARTNERS = [
  { id: '1', name: 'C.R.I. Pumps', logo: '/cri_pumps.png', description: 'Pumping trust. Worldwide.' },
  { id: '2', name: 'SAER Elettropompe', logo: '/saer.jpg', description: 'Italian pump manufacturer' },
  { id: '3', name: 'Bray', logo: '/bray.jpeg', description: 'Valve solutions' },
  { id: '9', name: 'Ecodepur', logo: '/ecodepur.jpg', description: 'Environmental protection' },
  { id: '4', name: 'Meson Group', logo: '/meson.jpg', description: 'Industrial solutions' },
  { id: '5', name: 'Franklin Electric', logo: '/franklin-electric-logo.jpg', description: 'Electric motors & drives' },
  { id: '6', name: 'Fluimac', logo: '/fluimac.jpg', description: 'Pump solutions' },
  { id: '7', name: 'Pioneer Pump', logo: '/pioneer.jpg', description: 'Pioneering pump technology' },
  { id: '8', name: 'Jesco', logo: '/jesco.jpg', description: 'Dosing & disinfection' },
  { id: '10', name: 'Bellin', logo: '/bellin.jpg', description: 'The power of experience' },
];

export const BRANCHES = [
  {
    id: '1',
    slug: 'flowitec-ghana-headquarters',
    country: 'Ghana',
    city: 'Tema',
    title: 'Flowitec Group Ghana Limited — Headquarters',
    address: 'GT-373-0152 Opp IRS, Comm. 18 Junction, Spintex Road, Tema, Ghana',
    address_lines: [
      'P. O. Box SK 1369, Sakumono, Greater Accra',
      'GT-373-0152 Opp IRS, Comm. 18 Junction, Spintex Road, Tema, Ghana'
    ],
    phone: '+233 273 300 082',
    email: 'sales@flowitec.com',
    lat: 5.6695,
    lng: -0.0169,
    show_on_contact: true,
    image_hint: 'office exterior or team at Tema port site, prefer Black professionals'
  },
  {
    id: '2',
    slug: 'flowitec-nigeria-lagos',
    country: 'Nigeria',
    city: 'Lagos',
    title: 'Flowitec Solutions Company Limited — Nigeria',
    address: 'T926 Grenadine Estate Sangotedo, Monastery Rd, Lagos, Nigeria',
    address_lines: [
      'P. O. Box 75825, Victoria Island, Lagos',
      'T926 Grenadine Estate Sangotedo, Monastery Rd, Lagos, Nigeria'
    ],
    phone: '+234 903 698 2710',
    email: 'salesng@flowitec.com',
    lat: 6.5244,
    lng: 3.3792,
    show_on_contact: true,
    image_hint: 'Lagos office or technicians, prefer Black professionals'
  },
  {
    id: '3',
    slug: 'flowitec-kenya-nairobi',
    country: 'Kenya',
    city: 'Nairobi',
    title: 'Flowitec Group Limited — Kenya',
    address: '403, 4th Floor, NML Towers, Tsavo Road, South B, Nairobi, Kenya',
    address_lines: [
      '403, 4th Floor, NML Towers, Tsavo Road, South B, Nairobi, Kenya'
    ],
    phone: '+254 726 061 760',
    email: 'sales.ke@flowitec.com',
    lat: -1.2921,
    lng: 36.8219,
    show_on_contact: true,
    image_hint: 'Nairobi office building or team, prefer Black professionals'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Maintenance Superintendent',
    role: 'Maintenance Superintendent',
    company: 'Gold Processing Plant',
    quote: 'Flowitec\'s responsiveness and technical support have been exceptional. The valve solution they recommended for our elution circuit has performed flawlessly under high temperature and pressure.',
    rating: 5
  },
  {
    id: '2',
    name: 'Purchasing Officer',
    role: 'Purchasing Officer',
    company: 'South-western Ghana Mine',
    quote: 'Their delivery timelines are reliable, and their documentation is always complete and professional. Exactly what our procurement team needs.',
    rating: 5
  },
  {
    id: '3',
    name: 'Engineering Manager',
    role: 'Engineering Manager',
    company: 'Ghana Western Region Mine',
    quote: 'The quality of Flowitec\'s mechanical seals and after-sales support sets them apart. They helped us solve a recurring leakage issue that other suppliers couldn\'t handle.',
    rating: 5
  },
  {
    id: '4',
    name: 'Procurement Specialist',
    role: 'Procurement Specialist',
    company: 'Food Manufacturing Company Greater Accra Region',
    quote: 'Their prices are competitive without compromising on quality. We consider them a trusted long-term supply partner.',
    rating: 5
  },
  {
    id: '5',
    name: 'Procurement Coordinator',
    role: 'Procurement Coordinator',
    company: 'Steel Smelting Client Greater Accra Region',
    quote: 'Great communication, transparent updates, and reliable logistics support. Doing business with Flowitec is smooth and efficient.',
    rating: 5
  }
];

export const JOBS = [
  {
    id: '2',
    title: 'Mechanical Sales Engineer',
    slug: 'mechanical-sales-engineer',
    department: 'Sales',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Join our sales team to promote Flowitec\'s comprehensive range of pumps, valves, motors, and industrial equipment across diverse industries in East Africa.',
    requirements: [
      'Mechanical Engineering degree',
      'Experience in industrial equipment sales',
      'Strong technical knowledge of pumps, valves, and motors',
      'Excellent communication and presentation skills',
      'Existing client relationships in industrial sectors preferred',
      'Fluency in English and Swahili'
    ],
    isActive: true
  }
];