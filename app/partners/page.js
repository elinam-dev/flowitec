import { PARTNERS } from '@/lib/mockData';
import Image from 'next/image';

export const metadata = {
  title: 'Our Partners',
  description: 'Flowitec partners with world-class manufacturers including C.R.I. Pumps, Franklin Electric, Bray, Pioneer Pump, and more to deliver genuine industrial equipment across Africa.',
  alternates: { canonical: 'https://flowitec.com/partners' },
};

const PartnersPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container-custom">
          <nav className="text-sm mb-4 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <span>Partners</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Our Partners</h1>
          <p className="text-xl max-w-2xl">Trusted brands we represent across Africa</p>
        </div>
      </section>

      {/* Partners Overview */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">World-Class Manufacturers</h2>
            <p className="text-lg text-muted-foreground">
              Flowitec partners with the world's leading manufacturers of industrial equipment. Our relationships with these brands ensure you receive genuine products, expert support, and competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {PARTNERS.map(partner => (
              <div
                key={partner.id}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center group"
              >
                <div className="h-20 flex items-center justify-center mb-3">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={80}
                    className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="text-sm font-medium text-center text-muted-foreground">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Partnerships Matter */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Our Partnerships Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-3">Genuine Products</h3>
              <p className="text-muted-foreground">
                All equipment comes with manufacturer warranties and genuine spare parts
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3">Expert Training</h3>
              <p className="text-muted-foreground">
                Our team is factory-trained on all equipment we supply
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">Best Pricing</h3>
              <p className="text-muted-foreground">
                Direct relationships mean competitive pricing for our clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Partnering With Us?</h2>
          <p className="text-lg mb-8 opacity-90">
            We're always looking to expand our network of quality manufacturers
          </p>
          <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;