import { JOBS } from '@/lib/mockData';
import Link from 'next/link';
import { ArrowLeft, Briefcase, MapPin, Clock } from 'lucide-react';
import ApplicationForm from '@/components/ApplicationForm';

export async function generateStaticParams() {
  return JOBS.map((job) => ({
    slug: job.slug,
  }));
}

function getJob(slug) {
  return JOBS.find(job => job.slug === slug && job.isActive);
}

const CareerDetailPage = ({ params }) => {
  const job = getJob(params.slug);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
          <Link href="/careers" className="btn primary">Back to Careers</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container-custom">
          <nav className="text-sm mb-4 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/careers" className="hover:underline">Careers</Link>
            <span className="mx-2">/</span>
            <span>{job.title}</span>
          </nav>
          <Link href="/careers" className="inline-flex items-center hover:underline mb-6 w-fit">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Careers
          </Link>
          <h1 className="text-5xl font-bold mb-6">{job.title}</h1>
          <div className="flex flex-wrap gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              {job.department}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {job.location}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {job.type}
            </div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ApplicationForm job={job} />

            <div className="bg-card p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4">Job Description</h2>
              <p className="text-lg text-muted-foreground">{job.description}</p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-lg">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerDetailPage;