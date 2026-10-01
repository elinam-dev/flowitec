import Image from 'next/image';
import Link from 'next/link';
import { JOBS } from '@/lib/mockData';
import CareersClient from '@/components/CareersClient';

export const metadata = {
  title: 'Careers',
  description: "Join Flowitec — Africa's leading engineering solutions provider. Browse open positions in sales, technical, and operations across Ghana, Nigeria, Kenya, and Tanzania.",
  alternates: { canonical: 'https://flowitec.com/careers' },
};

const benefits = [
  { title: 'Pension Scheme', description: 'We contribute to your future with a comprehensive pension scheme to help you plan for retirement.', image: '/benefits/pension-scheme.jpeg' },
  { title: 'Wellness Day', description: 'Take time for yourself with dedicated wellness days to focus on your mental and physical health.', image: '/benefits/wellness-day.jpeg' },
  { title: 'Daily Office Lunch', description: 'Enjoy complimentary lunch every day, keeping you fueled and focused throughout the workday.', image: '/benefits/free-lunch.jpeg' },
  { title: 'Birthdays Off', description: 'Celebrate your special day! We give you your birthday off to spend time with loved ones.', image: '/benefits/birthdays-off.jpeg' },
  { title: 'Regular Socials', description: 'Build connections with colleagues through regular team events, outings, and social gatherings.', image: '/benefits/regular-socials.jpeg' },
  { title: 'Team Bonding', description: 'Participate in team building activities designed to strengthen relationships and boost morale.', image: '/benefits/team-bonding.jpeg' },
  { title: 'Healthcare Benefits', description: 'Comprehensive healthcare coverage for you and your family, ensuring peace of mind and well-being.', image: '/benefits/healthcare-benefits.jpeg' },
  { title: 'Career Growth', description: 'Advance your career with clear progression paths, mentorship programs, and leadership development opportunities.', image: '/benefits/career.jpeg' },
  { title: 'Trainings and Capacity Building', description: 'Enhance your skills through continuous training programs, workshops, and professional development courses.', image: '/benefits/training.jpeg' },
];

const activeJobs = JOBS.filter(j => j.isActive);

export default function CareersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[500px] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/career-hero.jpg" alt="Join Flowitec Team" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative container-custom h-full flex flex-col justify-center">
          <nav className="text-sm mb-4 text-white/90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <span>Careers</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
            Build your career with Africa&apos;s leading engineering solutions provider.
            We&apos;re always looking for talented individuals to join our growing team.
          </p>
          <a href="#openings" className="btn primary text-lg px-8 py-4 w-fit">View Open Positions</a>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why Work at Flowitec?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Flowitec, we believe our people are our greatest asset. We foster a dynamic,
              collaborative environment where innovation thrives and every team member has the
              opportunity to make a real impact. Join us and be part of a company that&apos;s
              shaping the future of industrial engineering across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When you join our team, you open doors to endless opportunities for career growth and personal development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden group relative h-64">
                <div className="absolute inset-0">
                  <Image src={benefit.image} alt={benefit.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
                <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold text-white drop-shadow-lg">{benefit.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Flowitec */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Life at Flowitec</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Working at Flowitec means being part of a close-knit team that values collaboration,
                innovation, and personal growth. We celebrate successes together and support each other through challenges.
              </p>
              <ul className="space-y-4">
                {['Work across Ghana, Nigeria, Kenya, and South Africa', 'Continuous learning and development opportunities', 'Work with leading global brands and partners', "Make a real impact on Africa's industrial growth"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/gallery/gallery17.jpeg" alt="Life at Flowitec" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings — interactive client component */}
      <CareersClient jobs={activeJobs} />

      {/* Application Process */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Application Process</h2>
            <p className="text-lg text-muted-foreground">Simple steps to join our team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {['Find Your Role', 'Apply Online', 'Interview', 'Join Us'].map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">{i + 1}</div>
                <h3 className="text-lg font-bold mb-2">{step}</h3>
                {i === 0 && <p className="text-sm text-muted-foreground">Browse our open positions and find the perfect fit for your skills</p>}
                {i === 1 && <p className="text-sm text-muted-foreground">Submit your CV and cover letter through our application form</p>}
                {i === 2 && <p className="text-sm text-muted-foreground">Meet with our team to discuss the opportunity and your experience</p>}
                {i === 3 && <p className="text-sm text-muted-foreground">Welcome aboard! Start your exciting journey with Flowitec</p>}
                {i < 3 && <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/30" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Don&apos;t See Your Role?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals. Send us your CV and we&apos;ll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hradmin@flowitec.com" className="btn bg-white text-primary hover:bg-gray-100 px-8 py-4">Send Your CV</a>
            <a href="tel:0247986652" className="btn ghost border-white text-white hover:bg-white hover:text-primary px-8 py-4">Call: 0247986652</a>
          </div>
        </div>
      </section>
    </div>
  );
}
