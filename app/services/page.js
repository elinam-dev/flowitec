import { SERVICES } from '@/lib/mockData';
import { Phone } from 'lucide-react';

export const metadata = {
  title: 'Engineering Services',
  description: 'Comprehensive engineering services across Africa — maintenance, installation, commissioning, diagnostics, spare parts, and 24/7 technical support for pumps, valves, and motors.',
  alternates: { canonical: 'https://flowitec.com/services' },
};
import Image from 'next/image';

const ServicesPage = () => {
  return (
    <div>
      {/* Hero - Services Image */}
      <section className="relative h-[450px] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/services-hero.jpg"
            alt="Flowitec Services"
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
            <span>Services</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl">Comprehensive engineering and support services across Africa</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Complete Lifecycle Support</h2>
            <p className="text-lg text-muted-foreground">
              From initial system design to after-sales support and ensuring maximum plant uptime. Flowitec provides end-to-end support for all your industrial equipment needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map(service => (
              <div
                key={service.id}
                id={service.slug}
                className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-all scroll-mt-24"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <a href="/contact#contact-form" className="text-primary font-medium hover:underline">
                  Request Service →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Maintenance */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Preventive & Corrective Maintenance</h2>
              <div className="bg-card p-8 rounded-lg shadow-md">
                <p className="text-lg text-muted-foreground mb-6">
                  Our maintenance services ensure maximum uptime and equipment longevity through scheduled preventive maintenance and rapid response to breakdowns.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Preventive Maintenance</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Regular inspections</li>
                      <li>• Performance testing</li>
                      <li>• Lubrication services</li>
                      <li>• Alignment checks</li>
                      <li>• Condition monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Corrective Maintenance</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Emergency repairs</li>
                      <li>• Component replacement</li>
                      <li>• Troubleshooting</li>
                      <li>• Performance optimization</li>
                      <li>• Failure analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Installation & Commissioning */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Installation & Commissioning</h2>
              <div className="bg-card p-8 rounded-lg shadow-md">
                <p className="text-lg text-muted-foreground mb-6">
                  Expert installation services ensure your equipment operates at peak performance from day one.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>Site assessment and preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>Equipment installation and alignment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>System integration and testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>Performance verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>Operator training</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Support */}
            <div>
              <h2 className="text-3xl font-bold mb-6">24/7 Technical Support</h2>
              <div className="bg-card p-8 rounded-lg shadow-md">
                <p className="text-lg text-muted-foreground mb-6">
                  Our technical support team is available around the clock to assist with any issues or questions.
                </p>
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-primary">Emergency Hotline</h4>
                  <p className="text-muted-foreground mb-4">
                    For urgent technical support and emergency services:
                  </p>
                  <a
                    href="tel:+233533810485"
                    className="inline-flex items-center gap-2 text-2xl font-bold text-primary"
                  >
                    <Phone className="w-6 h-6" />
                    +233 533 810 485
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Service?</h2>
          <p className="text-lg mb-8 opacity-90">
            Get in touch with our service team to schedule maintenance or request support
          </p>
          <a href="/contact#contact-form" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
            Request Service
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;