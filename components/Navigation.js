'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Products',
      href: '/products',
      dropdown: [
        { name: 'Pumps', href: '/products?category=pumps' },
        { name: 'Valves', href: '/products?category=valves' },
        { name: 'Motors', href: '/products?category=motors' },
        { name: 'Control Panels', href: '/products?category=control-panels' },
        { name: 'Spare Parts', href: '/products?category=spare-parts' },
      ]
    },
    {
      name: 'Applications',
      href: '/applications',
      dropdown: [
        { name: 'Clean Water', href: '/applications/clean-water' },
        { name: 'Waste Water', href: '/applications/waste-water' },
        { name: 'Slurry', href: '/applications/slurry' },
        { name: 'Chemical', href: '/applications/chemical' },
        { name: 'Mine Water', href: '/applications/mine-water' },
        { name: 'Viscous Fluid', href: '/applications/viscous-fluid' },
        { name: 'Fuel - Diesel, Petrol', href: '/applications/fuel' },
      ]
    },
    {
      name: 'Industries',
      href: '/industries',
      dropdown: [
        { name: 'Mining, Minerals & Metals', href: '/industries/mining-minerals-metals' },
        { name: 'Food and Beverage', href: '/industries/food-and-beverage' },
        { name: 'Power Plants', href: '/industries/power-plant' },
        { name: 'Agriculture and Irrigation', href: '/industries/agriculture-irrigation' },
        { name: 'Cement, Textile', href: '/industries/cement-and-textile' },
        { name: 'Paper, Pulp and Packaging', href: '/industries/paper-pulp-packaging' },
        { name: 'Petrochemical & Refinery', href: '/industries/petrochemical-refinery' },
        { name: 'Marine and Chemical', href: '/industries/marine' },
        { name: 'Pharmaceutical', href: '/industries/pharmaceuticals' },
      ]
    },
    { name: 'Services', href: '/services' },
    { name: 'References', href: '/references' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Staff Portal', href: 'https://flowitecgoandgrow.com', external: true },
  ];

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo - Large and fits within header */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img 
              src="/flowitec-logo.png" 
              alt="Flowitec" 
              className="h-[80px] sm:h-[100px] md:h-[120px] lg:h-[160px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation - Ash background */}
          <div className="hidden lg:flex items-center bg-[#B0B6BB] rounded-lg px-2 py-2 space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-white/50 hover:text-primary rounded-md transition-colors flex items-center">
                      {item.name}
                      <ChevronDown className="ml-1 w-3 h-3" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-white/50 hover:text-primary rounded-md transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-white/50 hover:text-primary rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact#contact-form" className="btn primary text-sm px-5 py-2.5">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted touch-manipulation"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t max-h-[70vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="w-full text-left px-4 py-3 text-foreground hover:bg-muted flex justify-between items-center touch-manipulation"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-8">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary touch-manipulation"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-foreground hover:bg-muted touch-manipulation"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-foreground hover:bg-muted touch-manipulation"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 py-3">
              <Link href="/contact#contact-form" className="btn primary w-full text-center touch-manipulation" onClick={() => setIsOpen(false)}>
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;