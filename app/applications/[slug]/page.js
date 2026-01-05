
import { APPLICATIONS } from '@/lib/mockData';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
export async function generateStaticParams() {
  return APPLICATIONS.map((app) => ({
    slug: app.slug,
  }));
}

const ApplicationDetailPage = ({ params }) => {
  const application = APPLICATIONS.find(
    (app) => app.slug === params.slug
  );

  if (!application) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">Application Not Found</h1>
          <Link href="/applications" className="btn primary">
            Back to Applications
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh]">
        <Image
          src={application.heroImage}
          alt={application.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center">
          <div className="container-custom text-white">
            <nav className="text-sm mb-4 opacity-90">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/applications" className="hover:underline">Applications</Link>
            </nav>

            <Link
              href="/applications"
              className="inline-flex items-center hover:underline mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Applications
            </Link>

            <h1 className="text-5xl font-bold mb-4">
              {application.title}
            </h1>
            <p className="text-xl max-w-2xl">
              {application.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-background">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Application Challenges
          </h2>
          <ul className="space-y-3">
            {application.challenges.map((challenge, index) => (
              <li key={index} className="flex gap-3 text-lg">
                <span className="text-primary font-bold">•</span>
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Selecting Equipment?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Talk to our applications engineers for expert guidance
          </p>
          <a
            href="mailto:godwin.asamoah@flowitec.com"
            className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
          >
            Contact Engineering Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default ApplicationDetailPage;