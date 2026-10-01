import Image from 'next/image';
import { CheckCircle, Award, Users, Globe, Target, Eye, Heart, Shield, Lightbulb, Handshake } from 'lucide-react';
import AboutTimeline from '@/components/AboutTimeline';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Flowitec Group — founded in 2017, operating across Ghana, Nigeria, Kenya, and South Africa. Engineering excellence, 1000+ deliveries, and a team committed to industrial solutions.',
  alternates: { canonical: 'https://flowitec.com/about' },
};

const coreValues = [
  { icon: Shield, title: 'Integrity', description: 'We conduct our business with honesty, transparency, and ethical practices in all our dealings with clients, partners, and employees.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We continuously seek new and better ways to deliver solutions, embracing technology and creative thinking to exceed expectations.' },
  { icon: Award, title: 'Excellence', description: 'We are committed to delivering the highest quality products and services, striving for excellence in everything we do.' },
  { icon: Handshake, title: 'Customer Focus', description: 'Our clients are at the heart of our business. We listen, understand, and deliver solutions tailored to their unique needs.' },
  { icon: Users, title: 'Teamwork', description: 'We believe in the power of collaboration, working together as a team and with our partners to achieve shared goals.' },
  { icon: Heart, title: 'Reliability', description: 'We stand behind our commitments, delivering on time, every time, and providing dependable support throughout the project lifecycle.' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[450px] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/about_image.jpg"
            alt="Flowitec - About Us"
            fill
            className="object-cover"
            priority
            quality={70}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative container-custom h-full flex flex-col justify-center">
          <nav className="text-sm mb-4">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <span>About Us</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">About Flowitec</h1>
          <p className="text-xl max-w-2xl">Engineering Excellence Since 2017</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Here at Flowitec, we have been providing engineering and procurement solutions across West and East Africa. We supply not only the best possible products for Maintenance, Repair and Operational needs but for Project requirements as well, be it Expansion, Modification or a New Setup.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We partner with world-renowned manufacturers to supply high-quality pumps, valves, electric motors, control systems, and related components for industries including mining, food and beverage, water treatment, agriculture, petrochemical, power generation, and municipal infrastructure.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Flowitec is a solution-driven engineering organization at its core. We specialize in pump systems, rotating equipment, fluid control systems, and mechanical seals for industrial, water, mining, and marine-related applications.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We understand our customers&apos; operations because we work closely with them. We value strong personal relationships, transparency, and the delivery of custom engineering solutions rather than one-size-fits-all approaches.
              </p>
              <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary mb-6">
                <p className="text-lg text-gray-700 italic">
                  &ldquo;Our greatest asset, and one of the sources of our acclaimed recognition and reputation in the industry, is our skilled employees. Through a dynamic, research-driven and experienced team, we continue to deliver exceptional results for our clients.&rdquo;
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm text-muted-foreground">Orders</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">8+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/gallery/gallery18.jpeg"
                alt="Flowitec team"
                fill
                className="object-cover"
                quality={70}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide reliable, innovative engineering solutions that enhance operational efficiency and support sustainable development across Africa.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be Africa&apos;s leading provider of engineering and procurement solutions, recognized for excellence, innovation, and customer satisfaction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Integrity, innovation, excellence, customer focus, teamwork, and reliability guide everything we do.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline — client component */}
      <AboutTimeline />

      {/* Quality Commitment */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Quality Commitment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality is demonstrated through our adherence to international standards and continuous improvement across all operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Genuine Products', desc: 'All equipment sourced directly from authorised manufacturers with full warranties.' },
              { title: 'Factory-Trained Team', desc: 'Our engineers are trained by the manufacturers we represent.' },
              { title: 'After-Sales Support', desc: 'Dedicated support team available for maintenance, spares, and technical guidance.' },
            ].map((item, i) => (
              <div key={i} className="bg-card p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Partner with Flowitec for reliable engineering solutions that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">Contact Us</a>
            <a href="/services" className="btn ghost border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">Our Services</a>
          </div>
        </div>
      </section>
    </div>
  );
}
