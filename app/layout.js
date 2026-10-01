import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata = {
  metadataBase: new URL('https://flowitec.com'),
  title: {
    default: 'Flowitec | Engineering & Procurement Solutions Across Africa',
    template: '%s | Flowitec',
  },
  description:
    'Reliable Engineering & Procurement Solutions Across Africa. High-quality pumps, valves, motors, control panels, and dependable after-sales support for mining, agriculture, petrochemical, and water treatment industries.',
  keywords:
    'pumps, valves, motors, control panels, engineering, procurement, Africa, Ghana, Nigeria, Kenya, industrial equipment, water treatment, mining, CRI pumps, Franklin Electric',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flowitec.com',
    siteName: 'Flowitec',
    title: 'Flowitec | Engineering & Procurement Solutions Across Africa',
    description: 'High-quality industrial equipment, expert installations, and dependable after-sales support across Ghana, Nigeria, and Kenya.',
    images: [{ url: '/flowitec-logo.png', width: 800, height: 600, alt: 'Flowitec' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flowitec | Engineering & Procurement Solutions Across Africa',
    description: 'High-quality industrial equipment and engineering solutions across Africa.',
    images: ['/flowitec-logo.png'],
  },
  icons: {
    icon: [
      { url: '/flowitec-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/flowitec-logo.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/flowitec-logo.png',
    apple: [{ url: '/flowitec-logo.png', sizes: '180x180', type: 'image/png' }],
  },
  alternates: { canonical: 'https://flowitec.com' },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://flowitec.com/#organization',
      name: 'Flowitec Group Ghana Limited',
      url: 'https://flowitec.com',
      logo: 'https://flowitec.com/flowitec-logo.png',
      foundingDate: '2017',
      description: 'Leading engineering and procurement solutions provider across Africa, supplying pumps, valves, motors, and industrial equipment.',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+233-273-300-082',
          contactType: 'sales',
          areaServed: ['GH', 'NG', 'KE', 'ZA'],
          availableLanguage: 'English',
        },
        {
          '@type': 'ContactPoint',
          telephone: '+233-531-949-028',
          contactType: 'customer support',
          contactOption: 'TollFree',
          availableLanguage: 'English',
        },
      ],
      sameAs: [
        'https://www.linkedin.com/company/flowitec-group-ghana-limited/',
        'https://www.instagram.com/flowitec_group_limited',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://flowitec.com/#localbusiness',
      name: 'Flowitec Group Ghana Limited — Headquarters',
      image: 'https://flowitec.com/flowitec-logo.png',
      url: 'https://flowitec.com',
      telephone: '+233-273-300-082',
      email: 'sales@flowitec.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'GT-373-0152 Opp IRS, Comm. 18 Junction, Spintex Road',
        addressLocality: 'Tema',
        addressRegion: 'Greater Accra',
        addressCountry: 'GH',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 5.6695, longitude: -0.0169 },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/mining-1.jpg" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
