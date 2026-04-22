'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, AlertCircle } from 'lucide-react';
import { BRANCHES } from '@/lib/mockData';

// Instagram icon component (not available in lucide-react)
const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/flowitec-logo.png" 
                alt="Flowitec" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-base text-gray-300 mb-6">
              Reliable Engineering & Procurement Solutions Across Africa
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/flowitec_group_limited?igsh=dHI0dnRnd25vN2Jk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/flowitec-group-ghana-limited/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-base">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/industries" className="text-gray-300 hover:text-white transition-colors">Industries</Link></li>
              <li><Link href="/references" className="text-gray-300 hover:text-white transition-colors">Order References</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-base">
              <li><Link href="/services#maintenance" className="text-gray-300 hover:text-white transition-colors">Maintenance</Link></li>
              <li><Link href="/services#installation" className="text-gray-300 hover:text-white transition-colors">Installation</Link></li>
              <li><Link href="/services#diagnostics" className="text-gray-300 hover:text-white transition-colors">Diagnostics</Link></li>
              <li><Link href="/services#spares" className="text-gray-300 hover:text-white transition-colors">Spare Parts</Link></li>
              <li><Link href="/services#training" className="text-gray-300 hover:text-white transition-colors">Training</Link></li>
              <li><Link href="/services#rental" className="text-gray-300 hover:text-white transition-colors">Rentals</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-base">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                <span className="text-gray-300">Head Office: No.31 Spintex-Sakumono Road, Opp. IRS,Comm.18 Junction, Spintex Road-Tema, Greater Accra, Ghana</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                <a href="tel:+233273300082" className="text-xl font-bold text-white hover:text-red-400 transition-colors">
                  +233 273 300 082 
              </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                <a href="mailto:info@flowitec.com" className="text-gray-300 hover:text-white transition-colors">info@flowitec.com</a>
              </li>
            </ul>
            {/* Emergency Hotline */}
            <div className="mt-6 p-4 bg-red-600/20 border border-red-500/50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="font-bold text-red-400">24/7 Emergency Hotline</span>
              </div>
              <a href="tel:+233531949028" className="text-xl font-bold text-white hover:text-red-400 transition-colors">
                +233 531 949 028
              </a>
            </div>
            <div className="mt-6">
              <Link href="/contact" className="btn primary w-full text-center text-base py-3">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Countries Section */}
        <div className="mt-16 pt-10 border-t border-gray-800">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Presence Across Africa</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BRANCHES.map((branch) => (
              <div key={branch.id} className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-colors">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div className="text-xl font-bold mb-2 text-center">{branch.title}</div>
                <div className="space-y-2 text-sm text-gray-300 mb-4">
                  {branch.address_lines && branch.address_lines.map((line, idx) => (
                    <div key={idx} className="text-center">{line}</div>
                  ))}
                </div>
                <div className="text-center space-y-1">
                  <div className="text-sm text-primary">{branch.email}</div>
                  {branch.phone && <div className="text-sm text-gray-400">{branch.phone}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Careers Teaser */}
        <div className="mt-16 p-8 bg-primary/10 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-3">Join Flowitec</h3>
          <p className="text-lg text-gray-300 mb-6">Grow with Africa's leading industrial engineering team since 2017</p>
          <Link href="/careers" className="btn ghost text-base px-8 py-3">
            View Open Positions
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-base text-gray-400">
              © {new Date().getFullYear()} Flowitec. All rights reserved.
            </div>
            <div className="flex space-x-8 text-base">
              <Link href="/legal/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/quality" className="text-gray-400 hover:text-white transition-colors">
                Quality & Certifications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
