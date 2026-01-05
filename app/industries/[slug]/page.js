import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Download, MapPin, Phone, Mail } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { BRANCHES } from '@/lib/mockData';
import { INDUSTRIES_CMS } from '@/lib/industriesData';
import { ALL_PRODUCTS } from '@/lib/productsData';

export async function generateStaticParams() {
  return INDUSTRIES_CMS.map((industry) => ({
    slug: industry.slug,
  }));
}

function getIndustryData(slug) {
  const industry = INDUSTRIES_CMS.find(ind => ind.slug === slug);
  
  if (!industry) return null;
  
  const products = ALL_PRODUCTS.filter(product => 
    product.industries && (
      product.industries.includes(industry.id) ||
      product.industries.includes(industry.slug) ||
      (industry.recommended_products && industry.recommended_products.some(rec => 
        product.id === rec || product.slug === rec
      ))
    )
  );
  
  return { industry, products };
}

const IndustryDetailPage = ({ params }) => {
  const data = getIndustryData(params.slug);
  
  if (!data || !data.industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Industry Not Found</h1>
          <Link href="/industries" className="btn primary">Back to Industries</Link>
        </div>
      </div>
    );
  }
  
  const { industry, products } = data;

  return (
    <div>
      <section className="relative h-96">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={industry.heroImage || industry.image}
            alt={industry.title}
            fill
            className="object-cover"
            priority={true}
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container-custom h-full flex flex-col justify-center text-white">
          <nav className="text-sm mb-4 text-white/90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/industries" className="hover:underline">Industries</Link>
            <span className="mx-2">/</span>
            <span>{industry.title}</span>
          </nav>
          <Link href="/industries" className="inline-flex items-center text-white hover:underline mb-4 w-fit">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Industries
          </Link>
          <div className="text-6xl mb-4">{industry.icon}</div>
          <h1 className="text-5xl font-bold mb-4">{industry.title}</h1>
          <p className="text-xl text-white/90 max-w-2xl">{industry.short_description}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: industry.long_description || industry.short_description }}
              />
            </div>
          </div>
        </div>
      </section>

      {products.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-4">Recommended Equipment for {industry.title}</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our specialized product range designed for the unique requirements of the {industry.title.toLowerCase()} industry
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Remove case studies section since it's not in mock data */}

      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Locations Serving This Industry</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Flowitec branches across Africa ready to support your {industry.title.toLowerCase()} operations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {BRANCHES.map(branch => (
              <div key={branch.id} className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{branch.city}</h3>
                    <div className="text-sm text-muted-foreground mb-3">{branch.country}</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span>{branch.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <span>{branch.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need {industry.title} Solutions?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Talk to our industry specialists about your requirements. We will help you select the right equipment and design a solution that meets your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">Get in Touch</Link>
            <Link href="/products" className="btn ghost border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">Browse Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetailPage;